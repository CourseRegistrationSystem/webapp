import { CONSTANTS, IRequest, SERVER } from '../api';

export const StudentActions = {
    getListStudent
};

async function getListStudent(dispatch) {
  try {
    //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004

    let result = await IRequest.GetQuery(SERVER.API.Student.StudentList)
    dispatch({ type: CONSTANTS.STUDENT.LIST_STUDENT, result: result})
    // result["uid"] = uid
    console.log(result)
    return Promise.resolve(result)
  } catch (error) {
      console.log(error)
      return Promise.reject(error)
  }
}
