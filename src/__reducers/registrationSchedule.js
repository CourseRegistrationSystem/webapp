import { CONSTANTS } from '../api';
import Dates from "../__ifunc/dates";

let initState = {
    dataRegistrationSchedule: [], graph: null, message: '', notification: [],
    dataLatestSchedule: {count: null, date: []},
    test: [],
    listErrSystem: [],
    errorSystem: { id: 0, show: false, types: '', value: '', resolve: false, datetime: '' }
}

export function registrationSchedule(state = initState, action) {
    //console.log(action)
    let _data = []
    let __state = { ...state }
    switch (action.type) {
        case CONSTANTS.REGISTRATION_SCHEDULE.SUCCESS:
            return {
                dataRegistrationSchedule: action.result,
                graph: [...state.graph]
            };
        case CONSTANTS.REGISTRATION_SCHEDULE.FAILURE:
            return {
                message: action.message,
                dataRegistrationSchedule: [...state.dataRegistrationSchedule],
                graph: [...state.graph]
            };
        case CONSTANTS.REGISTRATION_SCHEDULE.GRAPH_SUCCESS:
            return {
                ...state,
                graph: action.result
            };
        case CONSTANTS.REGISTRATION_SCHEDULE.GRAPH_FAILURE:
            return {
                message: action.message,
                graph: [...state.graph]
            };
        case CONSTANTS.REGISTRATION_SCHEDULE.NOTIFICATION:
            return { ...state, notification: action.dataRegistrationSchedule };
        case CONSTANTS.REGISTRATION_SCHEDULE.ERRORSYSTEM:
            // console.log(action.dataRegistrationSchedule)
            __state.listErrSystem.push(action.dataRegistrationSchedule)
            __state.errorSystem = {
                id: __state.listErrSystem[0].id,
                show: true,
                types: __state.listErrSystem[0].types,
                value: __state.listErrSystem[0].value,
                datetime: __state.listErrSystem[0].datetime,
                resolve: __state.listErrSystem[0].resolve
            }

            return __state
        case CONSTANTS.REGISTRATION_SCHEDULE.ERRORSYSTEM_RESET:
            __state.listErrSystem.shift()
            if (__state.listErrSystem.length === 0) {
                __state.errorSystem = initState.errorSystem
            } else {
                __state.errorSystem = {
                    id: __state.listErrSystem[0].id,
                    show: true,
                    types: __state.listErrSystem[0].types,
                    value: __state.listErrSystem[0].value,
                    datetime: __state.listErrSystem[0].datetime,
                    resolve: __state.listErrSystem[0].resolve
                }
            }
            return __state

        case CONSTANTS.REGISTRATION_SCHEDULE.LIST_REGISTRATION_SCHEDULE:
                __state = {...state}
                let listRegList = action.result
                listRegList.map((dataList,index) => {
                  if(new Date().getTime() < new Date(dataList.startDateTime).getTime()){
                    dataList.status = "waiting"
                  }
                  else if(new Date().getTime() > new Date(dataList.startDateTime).getTime() && new Date().getTime() < new Date(dataList.endDateTime).getTime()){
                    dataList.status = true // in schedule

                  }else{
                    dataList.status = false // not in schedule
                  }
                })

                let sortedData = listRegList.sort((a, b) => { // filter created data
                  if (a.createdDate > b.createdDate) {
                    return -1;
                  }
                  if (a.createdDate < b.createdDate) {
                    return 1;
                  }
                  return 0;
                });

                let count = 0
                let arrayRangeDate = []
                if(sortedData[0]){
                  count = Math.floor((Math.abs(new Date(sortedData[0].endDateTime)-new Date(sortedData[0].startDateTime)))/(1000*60*60*24))
                  console.log(count)


                  for(let a=0;a<count;a++){
                    let date = new Date(sortedData[0].startDateTime).setDate(new Date(sortedData[0].startDateTime).getDate() + a)
                    arrayRangeDate.push(Dates.format(date, Dates.FORMAT.DATE3))
                  }
                }else{
                  count = 0
                }


                console.log(arrayRangeDate)

                __state.dataRegistrationSchedule = sortedData
                __state.dataLatestSchedule.count = count
                __state.dataLatestSchedule.date = arrayRangeDate
                __state.test = arrayRangeDate
            return __state

            case CONSTANTS.REGISTRATION_SCHEDULE.GET_COURSE_LIST:
                // console.log('dah masuk reducer dahboard')
                __state = {...state}
                __state.dataRegistrationSchedule = action.result

            return __state

        case CONSTANTS.CLEAR:
            return initState
        default:
            return state
    }
}
