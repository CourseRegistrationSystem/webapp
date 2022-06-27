import { CONSTANTS } from '../api';
let initState = {
    dataSection: [], graph: null, message: '', notification: [],
    listErrSystem: [],
    sectionListById: [],
    errorSystem: { id: 0, show: false, types: '', value: '', resolve: false, datetime: '' }
}

export function section(state = initState, action) {
    //console.log(action)
    let _data = []
    let __state = { ...state }
    switch (action.type) {
        case CONSTANTS.SECTION.SUCCESS:
            return {
                dataSection: action.result,
                graph: [...state.graph]
            };
        case CONSTANTS.SECTION.FAILURE:
            return {
                message: action.message,
                dataSection: [...state.dataSection],
                graph: [...state.graph]
            };
        case CONSTANTS.SECTION.GRAPH_SUCCESS:
            return {
                ...state,
                graph: action.result
            };
        case CONSTANTS.SECTION.GRAPH_FAILURE:
            return {
                message: action.message,
                graph: [...state.graph]
            };
        case CONSTANTS.SECTION.NOTIFICATION:
            return { ...state, notification: action.dataSection };
        case CONSTANTS.SECTION.ERRORSYSTEM:
            // console.log(action.dataSection)
            __state.listErrSystem.push(action.dataSection)
            __state.errorSystem = {
                id: __state.listErrSystem[0].id,
                show: true,
                types: __state.listErrSystem[0].types,
                value: __state.listErrSystem[0].value,
                datetime: __state.listErrSystem[0].datetime,
                resolve: __state.listErrSystem[0].resolve
            }

            return __state
        case CONSTANTS.SECTION.ERRORSYSTEM_RESET:
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

        case CONSTANTS.SECTION.LIST_SECTION:
                __state = {...state}
                __state.dataSection = action.result

            return __state

            case CONSTANTS.SECTION.SECTION_LIST_BY_ID:
              __state = {...state}
              __state.sectionListById = action.result

          return __state

            

            case CONSTANTS.SECTION.GET_COURSE_LIST:
                // console.log('dah masuk reducer dahboard')
                __state = {...state}
                __state.dataSection = action.result

            return __state

        case CONSTANTS.CLEAR:
            return initState
        default:
            return state
    }
}
