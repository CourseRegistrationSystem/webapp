import { CONSTANTS, IRequest, SERVER } from '../api';

export const SectionActions = {
    getListSection,
    registerSection
};

async function getListSection(dispatch) {
  try {
    //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004

    let result = await IRequest.GetQuery(SERVER.API.Section.SectionList)
    dispatch({ type: CONSTANTS.SECTION.LIST_SECTION, result: result})
    // result["uid"] = uid
    console.log(result)
    return Promise.resolve(result)
  } catch (error) {
      console.log(error)
      return Promise.reject(error)
  }
}

async function registerSection(param) {
  console.log(param)
  try {

    // if (
    //   !(
    //     Object.keys(param.pictureValue).length === 0 &&
    //     param.pictureValue.constructor === Object
    //   )
    // ) {
    //   let picture = await IRequest.UploadFile(
    //     SERVER.API.Device.UploadDevicePicture,
    //     param.pictureValue
    //   );
    //   param.vehiclePicture = picture.result.files.file[0].name;
    // }

      let result = await IRequest.Post(SERVER.API.Section.RegisterSection, param)
      return Promise.resolve(result)
  } catch (error) {
      // console.log(error)
      return Promise.reject(error)
  }
}
