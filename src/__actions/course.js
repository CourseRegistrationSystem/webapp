import { text } from "@fortawesome/fontawesome-svg-core";
import { Auth, CONSTANTS, IRequest, SERVER } from "../api";
import {
  generateURL,
} from "../__components/helper";

import datacurriculum from "../__components/curiculum/2019.json";

export const CourseActions = {
  getLatestData,
  getCourse,
  getTimeTable,
  getCuriculum,
  getCourseRegistrationList,
  checkCourseList,
  submitRegistration, //database
  checkEligible, // database
  getRegistrationListById, // database
  getRegisteredTimeTable, // database
};

const user = Auth.getAuthUser();
console.log(user);
async function getLatestData(dispatch) {
  try {
    let resultFilter = await IRequest.GetQuery(
      SERVER.API.Registration.GetRegistrationListById
    );
    dispatch({ type: CONSTANTS.COURSE.LATEST_DATA_SUCCESS, result: resultFilter });
  } catch (error) {
    console.log(error);
  }
}

async function getCourse(dispatch) {
  try {
    let entityInfo = "";
    if (user.role === "Student") {
      entityInfo = {
        url: "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi",
        argNum: 1,
        entity: "pelajar_subjek",
        args: [{ name: "no_matrik", value: user.matricNo }],
      };
    } else if (user.role === "Lecturer") {
      entityInfo = {
        url: "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi",
        argNum: 1,
        entity: "pensyarah_subjek",
        args: [{ name: "no_pekerja", value: 27474 }],
      };
    }
    let url = generateURL(entityInfo);

    var requestOptions = {
      method: "GET",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);

        dispatch({ type: CONSTANTS.COURSE.GET_COURSE_LIST, result: result });

        return dispatch;
      })

      .catch((error) => console.log("error", error));
  } catch (error) {
    console.log(error);
  }
}

async function getTimeTable(dispatch) {
  let courseSlotList = [];
  let courseList = [];
  let lecturerList = [];
  //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004
  //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=jadual_subjek&sesi=2021/2022&semester=2&kod_subjek=SCSD3761&seksyen=1

  try {
    let entityInfo = "";
    if (user.role === "Student") {
      entityInfo = {
        url: "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi",
        argNum: 1,
        entity: "pelajar_subjek",
        args: [{ name: "no_matrik", value: user.matricNo }],
      };
    } else if (user.role === "Lecturer") {
      entityInfo = {
        url: "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi",
        argNum: 1,
        entity: "pensyarah_subjek",
        args: [{ name: "no_pekerja", value: 27474 }],
      };
    }
    let url = generateURL(entityInfo);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        Promise.all(
          // lecturer list
          data.map((dataList) => {
            return fetch(
              "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek_pensyarah&kod_subjek=" +
                dataList.kod_subjek +
                "&sesi=" +
                dataList.sesi +
                "&semester=" +
                dataList.semester +
                "&seksyen=" +
                dataList.seksyen +
                ""
            );
          })
        )
          .then((responses) =>
            Promise.all(
              responses.map((res, index) => {
                return res.json();
              })
            )
          )
          .then((texts) => {
            texts.map((data, index) => {
              lecturerList.push(data);
            });

            data.map((data, index) => {
              let lecturers = [];
              lecturerList[index].map((dataLecturer, indexLecturer) => {
                lecturers.push(dataLecturer);
              });

              data.lecturer = lecturers;
              courseList.push(data);
            });
          });

        Promise.all(
          data.map((dataList) => {
            return fetch(
              "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=jadual_subjek&sesi=" +
                dataList.sesi +
                "&semester=" +
                dataList.semester +
                "&kod_subjek=" +
                dataList.kod_subjek +
                "&seksyen=" +
                dataList.seksyen +
                ""
            );
          })
        )
          .then((responses) =>
            Promise.all(
              responses.map((res, index) => {
                // console.log(index);
                return res.json();
              })
            )
          )
          .then((texts) => {
            texts.map((dataByCourse, index) => {
              let _class = courseList[index];
              return dataByCourse.map((dataInCourse, index) => {
                // dataInCourse = there is some course that has more than 1 period
                dataInCourse.course = _class;
                courseSlotList.push(dataInCourse);
              });
            });
            // console.log(courseSlotList);

            dispatch({
              type: CONSTANTS.COURSE.GET_TIMETABLE_LIST,
              result: courseSlotList,
              semester: data[0],
              courseList: courseList,
            });
            // return dispatch;
          });
      });
  } catch (error) {
    console.log(error);
  }
}

async function getCuriculum(dispatch) {
  dispatch({
    type: CONSTANTS.COURSE.GET_CURRICULUM_LIST,
    result: datacurriculum,
  });
}

async function getCourseRegistrationList(dispatch) {
  fetch(
    "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek_seksyen&sesi=2017/2018&semester=1"
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: CONSTANTS.COURSE.COURSE_REGISTRATION_LIST,
        result: data,
      });
    });
}

async function checkCourseList(param, dispatch) {
  // console.log(param);

  fetch(
    "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek_seksyen&sesi=2017/2018&semester=1"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // listSection.push(data)
      data.map((dataList, index) => {
        // array.push(dataList.kod_subjek)
        if (dataList.kod_subjek === param.kod_subjek) {
          // console.log(dataList); // list of seksyen

          fetch(
            "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=jadual_subjek&sesi=2017/2018&semester=1&kod_subjek=" +
              param.kod_subjek
          )
            .then((response) => response.json())
            .then((data) => {
              // console.log(data);
              // listSection.push(data)
              dispatch({
                type: CONSTANTS.COURSE.CHECK_TABLE_LIST,
                result: data,
                keyInCode: param,
                listOfSection: dataList,
              });
            });
        }
      });
      // dispatch({
      //   type: CONSTANTS.COURSE.CHECK_TABLE_LIST,
      //   result: data,
      //   keyInCode: param,
      // });
    });

  // fetch("http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=jadual_subjek&sesi=2019/2020&semester=1")
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data)
  //   // listSection.push(data)
  //   dispatch({
  //     type: CONSTANTS.COURSE.CHECK_TABLE_LIST,
  //     dataTable: data,
  //     // keyInCode: param,
  //   });
  // })
}

async function submitRegistration(param) {
  console.log(param , user)
  let dataStudent = {semester: param.semester,sesi:param.session, user:user }
  try {
    let resultFilter = await IRequest.Post(
      SERVER.API.Student.RegisterStudent,dataStudent
    );
    console.log(resultFilter)
    // dispatch({ type: CONSTANTS.COURSE.GET_REGISTER_TIME_TABLE, result: resultFilter });
  } catch (error) {
    console.log(error);
  }

  param.map(async(dataList,index) => {
    let data = {course: dataList,semester: param.semester,sesi:param.session, user:user }
    try {
      let result =  await IRequest.Post(SERVER.API.Registration.RegisterCourse,data)
      return Promise.resolve(result)
  } catch (error) {
      // console.log(error)
      return Promise.reject(error)
  }
  })



}

async function checkEligible(dispatch) {
  console.log(user)
    try {
      let result =  IRequest.Post(SERVER.API.Registration.checkEligible,user)
      console.log(result)

      result.then(function(result){
        console.log(result.statusToRegister)
        dispatch({
        type: CONSTANTS.COURSE.CHECK_ELIGIBLE,
        result: result,
      });
      })
      console.log()
      return Promise.resolve(result)
  } catch (error) {
      console.log(error)
      return Promise.reject(error)
  }

}

// async function getLatestData(dispatch) {
//   try {
//     let result = await IRequest.GetQuery(SERVER.API.DeviceData.LatestData);
//     // console.log(result);
//     // if(role == 'admin') {
//     dispatch({ type: CONSTANTS.COURSE.LATEST_DATA_SUCCESS, result: result });
//     // }
//     // else {
//     //     dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS_MANAGER, result: result})
//     // }
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getRegistrationListById(id,dispatch) {
  console.log(id,dispatch)
  try {
    let filter = {matricNo : id}
    // console.log(filter)
    let resultFilter = await IRequest.GetWithFilter(
      SERVER.API.Registration.GetRegistrationListById,filter
    );

    console.log(resultFilter)

    // dispatch({ type: CONSTANTS.DEVICEDATA.ALLDATABYID, result: resultFilter });
  } catch (error) {
    console.log(error);
  }
}

async function getRegisteredTimeTable(id,dispatch) {
  console.log(id,dispatch)
  try {
    let filter = {matricNo : id}
    let resultFilter = await IRequest.GetWithFilter(
      SERVER.API.Registration.GetRegistrationListById,filter
    );
    console.log(resultFilter)
    // dispatch({ type: CONSTANTS.COURSE.GET_REGISTER_TIME_TABLE, result: resultFilter });
  } catch (error) {
    console.log(error);
  }
}
