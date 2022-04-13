import { text } from "@fortawesome/fontawesome-svg-core";
import { Auth, CONSTANTS, IRequest, SERVER } from "../api";
import {
  generateURL,
  generateLocalStorageName,
  sortByKey,
  getLengthToShow,
} from "../__components/helper";
import { course } from "../__reducers/course";

import datacurriculum from '../__components/curriculum20/21.json'

export const CourseActions = {
  getLatestData,
  getCourse,
  getTimeTable,
  getCuriculum,
};

const user = Auth.getAuthUser();
console.log(user);

async function getLatestData(dispatch) {
  try {
    let result = await IRequest.GetQuery(SERVER.API.DeviceData.LatestData);
    // result["uid"] = uid
    console.log(result);
    // if(role == 'admin') {
    console.log("ok dah masuk constatnt");
    dispatch({ type: CONSTANTS.COURSE.LATEST_DATA_SUCCESS, result: result });
    console.log("ok dah keluar constatnt");
    // }
    // else {
    //     dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS_MANAGER, result: result})
    // }
  } catch (error) {
    console.log(error);
  }
}

async function getCourse(dispatch) {
  try {
    //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004

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
        

        Promise.all( // lecturer list
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
                // console.log(index);
                return res.json();
              })
            )
          )
          .then((texts) => {
            // console.log(texts);
           texts.map((data,index) => {
            lecturerList.push(data)
            // courseList.push(data)
           })
          //  console.log(lecturerList)

           data.map((data,index) => {

            // console.log(lecturerList[index].length)
            let lecturers = []
            lecturerList[index].map((dataLecturer,indexLecturer) => {
              // console.log(dataLecturer)
              lecturers.push(dataLecturer)
            })

            data.lecturer = lecturers
            courseList.push(data)
           
          })

          })

          
          // data.map((data,index) => {
          //   courseList.push(data)
          // })

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
              //dataByCourse = the name of the course
              // texts.map((data,index) => {

              //  })

              // console.log(index, courseList[index])

              // let _lecturer = lecturerList[index]
              let _class = courseList[index]
              // dataByCourse.lecturer = lecturerList[index]
              // dataByCourse.course = courseList[index]
              // console.log(dataByCourse)

              return dataByCourse.map((dataInCourse,index) => {  // dataInCourse = there is some course that has more than 1 period
              
                  // data.map((course, indexCourse) => {
                  //   // console.log(index)
                  //   if (course.kod_subjek === dataInCourse.kod_subjek) {
                  //     return (
                    // dataInCourse.lecturer = _lecturer
                    dataInCourse.course = _class
                        courseSlotList.push(dataInCourse)
                    //   );
                    // }
                  // });
                }
              );
            });
            // console.log(courseSlotList);

            dispatch({
              type: CONSTANTS.COURSE.GET_TIMETABLE_LIST,
              result: courseSlotList,
              semester: data[0],
              courseList : courseList
            });
            // return dispatch;
          });
      });
  } catch (error) {
    console.log(error);
  }
}

async function getCuriculum(dispatch) {
  console.log(datacurriculum)
  dispatch({
    type: CONSTANTS.COURSE.GET_CURRICULUM_LIST,
    result: datacurriculum,
  });
}


      