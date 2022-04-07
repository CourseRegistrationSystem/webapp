import { CONSTANTS, IRequest, SERVER } from '../api';

export const DashboardActions = {
    getLatestData,
    getCourse
};

async function getLatestData( dispatch) {
    try {
        let result = await IRequest.GetQuery(SERVER.API.DeviceData.LatestData)
        // result["uid"] = uid
        console.log(result)
        // if(role == 'admin') {
            console.log('ok dah masuk constatnt')
            dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS, result: result})
            console.log('ok dah keluar constatnt')
        // }
        // else {
        //     dispatch({ type: CONSTANTS.DASHBOARD.LATEST_DATA_SUCCESS_MANAGER, result: result})
        // }

    } catch (error) {
        console.log(error)
    }
}

async function getCourse(dispatch) {
  try {
    //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004

      var requestOptions = {
        method : 'GET'
      }
                     fetch("http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                      console.log(result);

                      dispatch({ type: CONSTANTS.DASHBOARD.GET_COURSE_LIST, result: result})

                      return dispatch

                    })

                    .catch(error => console.log('error', error));

  } catch (error) {
      console.log(error)
  }
}
