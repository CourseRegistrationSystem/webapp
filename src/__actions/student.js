import { CONSTANTS, IRequest, SERVER } from '../api';

export const LecturerActions = {
    getListLecturer
};

async function getListLecturer(dispatch) {
  try {
    //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004

    let result = await IRequest.GetQuery(SERVER.API.Lecturer.LecturerList)
    dispatch({ type: CONSTANTS.LECTURER.LIST_LECTURER, result: result})
    // result["uid"] = uid
    console.log(result)
    return Promise.resolve(result)
  } catch (error) {
      console.log(error)
      return Promise.reject(error)
  }
}
