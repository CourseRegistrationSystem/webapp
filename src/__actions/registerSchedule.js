import { Auth,CONSTANTS, IRequest, SERVER } from '../api';

export const RegisterScheduleActions = {
  getListSchedule,
  createRegistrationSchedule,
};

const user = Auth.getAuthUser();
console.log(user);

async function getListSchedule(dispatch) {
  try {
    let result = await IRequest.GetQuery(SERVER.API.RegistrationSchedule.RegistrationScheduleList)
    dispatch({ type: CONSTANTS.REGISTRATION_SCHEDULE.LIST_REGISTRATION_SCHEDULE, result: result})
    console.log(result)
    return Promise.resolve(result)
  } catch (error) {
      console.log(error)
      return Promise.reject(error)
  }
}

async function createRegistrationSchedule(param) {
  let data_ = {
    data: param,
    user: user
  }
  console.log(data_)
  try {
      let result = await IRequest.Post(SERVER.API.RegistrationSchedule.RegisterSchedule, data_)
      console.log(result)
      return Promise.resolve(result)
  } catch (error) {
      console.log(error)
      return Promise.reject(error)
  }
}
