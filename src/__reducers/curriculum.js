import { CONSTANTS } from '../api';
let initState = {
    data: [], graph: null, message: '', notification: [],
    listErrSystem: [],
    errorSystem: { id: 0, show: false, types: '', value: '', resolve: false, datetime: '' }
}

export function curriculum(state = initState, action) {
    //console.log(action)
    let _data = []
    let __state = { ...state }
    switch (action.type) {
        case CONSTANTS.CURRICULUM.SUCCESS:
            return {
                data: action.result,
                graph: [...state.graph]
            };
        case CONSTANTS.CURRICULUM.FAILURE:
            return {
                message: action.message,
                data: [...state.data],
                graph: [...state.graph]
            };
        case CONSTANTS.CURRICULUM.GRAPH_SUCCESS:
            return {
                ...state,
                graph: action.result
            };
        case CONSTANTS.CURRICULUM.GRAPH_FAILURE:
            return {
                message: action.message,
                graph: [...state.graph]
            };
        case CONSTANTS.CURRICULUM.NOTIFICATION:
            return { ...state, notification: action.data };
        case CONSTANTS.CURRICULUM.ERRORSYSTEM:
            // console.log(action.data)
            __state.listErrSystem.push(action.data)
            __state.errorSystem = {
                id: __state.listErrSystem[0].id,
                show: true,
                types: __state.listErrSystem[0].types,
                value: __state.listErrSystem[0].value,
                datetime: __state.listErrSystem[0].datetime,
                resolve: __state.listErrSystem[0].resolve
            }

            return __state
        case CONSTANTS.CURRICULUM.ERRORSYSTEM_RESET:
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

        case CONSTANTS.CURRICULUM.LIST_CURRICULUM:
                __state = {...state}
                __state.data = action.result

            return __state

            case CONSTANTS.CURRICULUM.GET_COURSE_LIST:
                // console.log('dah masuk reducer dahboard')
                __state = {...state}
                __state.data = action.result

            return __state

        case CONSTANTS.CLEAR:
            return initState
        default:
            return state
    }
}
