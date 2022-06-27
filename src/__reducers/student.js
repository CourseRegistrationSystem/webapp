import { CONSTANTS } from "../api";
let initState = {
  data: [],
  graph: null,
  message: "",
  notification: [],
  dataList: [],
  listErrSystem: [],
  errorSystem: {
    id: 0,
    show: false,
    types: "",
    value: "",
    resolve: false,
    datetime: "",
  },
  pagination: {
    itemPerPage: 10,
    currentPage: 1,
    totalPage: 1,
  },
};

export function student(state = initState, action) {
  //console.log(action)
  let _data = [];
  let __state = { ...state };
  switch (action.type) {
    case CONSTANTS.STUDENT.SUCCESS:
      return {
        data: action.result,
        graph: [...state.graph],
      };
    case CONSTANTS.STUDENT.FAILURE:
      return {
        message: action.message,
        data: [...state.data],
        graph: [...state.graph],
      };
    case CONSTANTS.STUDENT.GRAPH_SUCCESS:
      return {
        ...state,
        graph: action.result,
      };
    case CONSTANTS.STUDENT.GRAPH_FAILURE:
      return {
        message: action.message,
        graph: [...state.graph],
      };
    case CONSTANTS.STUDENT.NOTIFICATION:
      return { ...state, notification: action.data };
    case CONSTANTS.STUDENT.ERRORSYSTEM:
      // console.log(action.data)
      __state.listErrSystem.push(action.data);
      __state.errorSystem = {
        id: __state.listErrSystem[0].id,
        show: true,
        types: __state.listErrSystem[0].types,
        value: __state.listErrSystem[0].value,
        datetime: __state.listErrSystem[0].datetime,
        resolve: __state.listErrSystem[0].resolve,
      };

      return __state;
    case CONSTANTS.STUDENT.ERRORSYSTEM_RESET:
      __state.listErrSystem.shift();
      if (__state.listErrSystem.length === 0) {
        __state.errorSystem = initState.errorSystem;
      } else {
        __state.errorSystem = {
          id: __state.listErrSystem[0].id,
          show: true,
          types: __state.listErrSystem[0].types,
          value: __state.listErrSystem[0].value,
          datetime: __state.listErrSystem[0].datetime,
          resolve: __state.listErrSystem[0].resolve,
        };
      }
      return __state;

    case CONSTANTS.STUDENT.LIST_STUDENT:
      __state = { ...state };
      __state.data = action.result;

      let _data = [];
      for (let i = 0; i < __state.data.length; i++) {
        if (i < 10) {
          _data.push(__state.data[i]);
        }
      }

      return {
        ...state,
        data: __state.data,
        dataList: _data,
        pagination: {
          itemPerPage: 10,
          currentPage: 1,
          totalPage: Math.ceil(
            __state.data.length / state.pagination.itemPerPage
          ),
        },
      };

    case CONSTANTS.STUDENT.STUDENT_COUNT_CHANGE:
      state = { ...state };
      state.pagination.itemPerPage = action.result;
      state.pagination.currentPage = 1;
      state.pagination.totalPage = Math.ceil(state.data.length / action.result);

      state.dataList = [];
      for (let i = 0; i < state.data.length; i++) {
        if (i < action.result) {
          state.dataList.push(state.data[i]);
        }
      }

      state = {
        ...state,
      };
      return state;

    case CONSTANTS.STUDENT.STUDENT_PAGE_CHANGE:
      state = { ...state };
      state.pagination.currentPage = action.result;

      state.dataList = [];
      let _j = 0;
      for (
        let i = (action.result - 1) * state.pagination.itemPerPage;
        i < state.data.length;
        i++
      ) {
        if (_j < state.pagination.itemPerPage) {
          state.dataList.push(state.data[i]);
          _j++;
        }
      }

      state = {
        ...state,
      };
      return state;

      case CONSTANTS.STUDENT.STUDENT_SEARCH:
        __state = { ...state }
        __state.dataList = []
        __state.dataSearch = []

        __state.pagination.currentPage = 1
        __state.pagination.searchValue = action.result

        console.log(action.result)
        state.data.forEach(element => {
          console.log(element)
          if (element.name.includes(action.result) || element.matricNo.includes(action.result) ) {
            __state.dataSearch.push(element)
          }
        });

        __state.pagination.totalPage = Math.ceil(__state.dataSearch.length / state.pagination.itemPerPage)

        let statePage = 0
        for (let i = 0; i < __state.dataSearch.length; i++) {
          if (statePage < state.pagination.itemPerPage) {
            __state.dataList.push(__state.dataSearch[i])
            statePage++
          }
        }

        state = {
          ...__state
        };
        return state;

    case CONSTANTS.CLEAR:
      return initState;
    default:
      return state;
  }
}
