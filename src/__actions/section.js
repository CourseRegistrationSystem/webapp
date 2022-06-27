import { Data } from "@react-google-maps/api";
import { CONSTANTS, IRequest, SERVER } from "../api";

export const SectionActions = {
  getListSection,
  registerSection,
  getSectionMemberList,
};

async function getListSection(dispatch) {
  try {
    //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=B19EC0004

    let result = await IRequest.GetQuery(SERVER.API.Section.SectionList);
    dispatch({ type: CONSTANTS.SECTION.LIST_SECTION, result: result });
    // result["uid"] = uid
    console.log(result);
    return Promise.resolve(result);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

async function registerSection(param) {
  console.log(param);
  try {
    let result = await IRequest.Post(SERVER.API.Section.RegisterSection, param);
    return Promise.resolve(result);
  } catch (error) {
    // console.log(error)
    return Promise.reject(error);
  }
}

async function getSectionMemberList(id, dispatch) {
  console.log(id, dispatch);
  try {
    let filter = { matricNo: id };
    // console.log(filter)
    let resultFilter = await IRequest.GetWithFilter(
      SERVER.API.Registration.GetRegistrationListById,
      filter
    );

    console.log(resultFilter);

    let sectionList = [];
    resultFilter.map(async (data, index) => {
      let filter = { id: data.section.id }
      let resultMember = await IRequest.GetWithFilter(
        SERVER.API.Section.getSectionMemberListById,
        filter
      );
      sectionList.push(resultMember)
      dispatch({
        type: CONSTANTS.SECTION.SECTION_LIST_BY_ID,
        result: sectionList,
      });
    });
   
   


   
    
  } catch (error) {
    console.log(error);
  }
}
