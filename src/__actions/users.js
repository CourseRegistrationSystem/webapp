import { CONSTANTS, IRequest, SERVER } from '../api';

export const UsersActions = {
    getListUser,
    registerUser,
    updateUser
};

async function getListUser(dispatch) {
    try {
        let result = await IRequest.GetQuery(SERVER.API.AppUser.ListManager)
        console.log('dah masuk dah')
        dispatch({ type: CONSTANTS.USER.LIST_SUCCESS, data: result })
        
    } catch (error) {
        console.log(error)
    }
}
async function registerUser(param) {
    try {
        let result = await IRequest.Post(SERVER.API.AppUser.RegisterManager, param)
        return Promise.resolve(result)
    } catch (error) {
        // console.log(error)
        return Promise.reject(error)
    }
}
async function updateUser(userid, param) {
    console.log(userid)
    console.log(param)
    try {
        let result = await IRequest.Patch(SERVER.API.AppUser.UpdateById(userid), param)
        console.log(result)
        console.log(param)
        return Promise.resolve(result)
    } catch (error) {
        // console.log(error)
        return Promise.reject(error)
    }
}
