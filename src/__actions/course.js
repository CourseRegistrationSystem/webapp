import { text } from "@fortawesome/fontawesome-svg-core";
import { Auth, CONSTANTS, IRequest, SERVER } from "../api";

export const CourseActions = {
  getLatestData,
  getCourse,
  getTimeTable,
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

    var requestOptions = {
      method: "GET",
    };
    fetch(
      "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=" +
        user.matricNo,
      requestOptions
    )
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
  // console.log(session);
  // console.log(dispatch);
  // let semester = session.split(" ")
  // console.log(semester)
  let courseSlotList = [];
  //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004
  //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=jadual_subjek&sesi=2021/2022&semester=2&kod_subjek=SCSD3761&seksyen=1

  try {
    fetch(
      "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=" +
        user.matricNo
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        Promise.all(
          data.map((dataList) => {
            // console.log(dataList)
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
            // console.log(dataList)
          })
        )
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((texts) => {
            // console.log(data);
            // dispatch({ type: CONSTANTS.COURSE.GET_TIMETABLE_LIST, result: texts })

            texts.map((dataByCourse, index) => {
              //dataByCourse = the name of the course

              return dataByCourse.map(
                (
                  dataInCourse,
                  index // dataInCourse = there is some course that has more than 1 period
                ) => {
                  // console.log(dataInCourse)

                  data.map((course) => {

                    if (course.kod_subjek === (dataInCourse.kod_subjek)) {
                      return (
                        // console.log(dataList),
                        dataInCourse.course = course,
                        courseSlotList.push(dataInCourse)

                        // dispatch({ type: CONSTANTS.COURSE.GET_TIMETABLE_LIST, result: {courseSlotList} })
                        // return dispatch;
                      );
                    }

                  });


                }
              );
            });
            // console.log(courseSlotList);
            dispatch({
              type: CONSTANTS.COURSE.GET_TIMETABLE_LIST,
              result: courseSlotList,
              semester: data[0],
            });
            // return dispatch;
          });
      });

    // dispatch({ type: CONSTANTS.COURSE.GET_TIMETABLE_LIST, result: 'courseSlotList' })
    // return dispatch;
  } catch (error) {
    console.log(error);
  }

  // try {
  //   //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004

  //   var requestOptions = {
  //     method: "GET",
  //   };
  //   fetch(
  //     "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);

  //       Promise.all(result.map(data=>fetch("http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=jadual_subjek&sesi="+data.sesi+"&semester="+data.semester+"&kod_subjek="+data.kod_subjek+"&seksyen="+data.seksyen+"")))
  //       .then(responses =>Promise.all(responses.map(res => res.json())))
  //       .then(texts => {
  //       console.log(texts)})
  // // dispatch({ type: CONSTANTS.COURSE.GET_COURSE_LIST, result: result });

  //       return dispatch;
  //     })

  //     .catch((error) => console.log("error", error));
  // } catch (error) {
  //   console.log(error);
  // }
}
