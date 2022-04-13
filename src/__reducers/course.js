import { CONSTANTS } from "../api";

let initState = {
  data: [],
  session: [],
  graph: null,
  message: "",
  notification: [],
  dataTimeTable: [],
  dataCourses: [],
  selectedTimeTable: [],
  selectedSession: [],
  curriculumList: [],
  listErrSystem: [],
  errorSystem: {
    id: 0,
    show: false,
    types: "",
    value: "",
    resolve: false,
    datetime: "",
  },
};

function getRandomColor() {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export function course(state = initState, action) {
  //console.log(action)
  let _data = [];
  let __state = { ...state };
  switch (action.type) {
    case CONSTANTS.COURSE.SUCCESS:
      return {
        data: action.result,
        graph: [...state.graph],
      };
    case CONSTANTS.COURSE.FAILURE:
      return {
        message: action.message,
        data: [...state.data],
        graph: [...state.graph],
      };
    case CONSTANTS.COURSE.GRAPH_SUCCESS:
      return {
        ...state,
        graph: action.result,
      };
    case CONSTANTS.COURSE.GRAPH_FAILURE:
      return {
        message: action.message,
        graph: [...state.graph],
      };
    case CONSTANTS.COURSE.NOTIFICATION:
      return { ...state, notification: action.data };
    case CONSTANTS.COURSE.ERRORSYSTEM:
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
    case CONSTANTS.COURSE.ERRORSYSTEM_RESET:
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

    case CONSTANTS.COURSE.LATEST_DATA_SUCCESS:
      console.log("dah masuk reducer dahboard");
      __state = { ...state };
      __state.data = action.result;

      return __state;

    case CONSTANTS.COURSE.GET_COURSE_LIST:
      // console.log('dah masuk reducer dahboard')
      __state = { ...state };
      __state.data = action.result;

      let session = [];
      let currentSession = "";
      action.result.map((data, index) => {
        currentSession = data.semester +" "+ data.sesi;
        // console.log(currentSession);
        // console.log(data["sesi"])
        if ((session).includes(currentSession)) {

        } else {
          session.push(currentSession);
          // console.log({name: currentSession})
        }
      });
      // console.log(session);
      __state.session = session
      return __state;


    case CONSTANTS.COURSE.GET_TIMETABLE_LIST:
      // console.log('dah masuk reducer dahboard')
      __state = { ...state };
      let color = '';
      // console.log(action.semester) // current semester
      // console.log(action.result) // all course
      // console.log(action.courseList)

      let courses = [];
      action.courseList.map((data, index) => {
        _currentSession = action.semester.semester +" "+ action.semester.sesi;
        // console.log((data.course.semester+" "+data.course.sesi), _currentSession)
        if ((data.semester+" "+data.sesi) === (_currentSession)) {

          courses.push(data);
        } else {
        }
      });
      // console.log(courses)


      let _session = [];
      let _currentSession = "";
      action.result.map((data, index) => {
        _currentSession = action.semester.semester +" "+ action.semester.sesi;
        // console.log((data.course.semester+" "+data.course.sesi), _currentSession)
        if ((data.course.semester+" "+data.course.sesi) === (_currentSession)) {

          if(index>0 && (data.course.kod_subjek === action.result[index-1].course.kod_subjek)){
            data.color = color
            // console.log(data.course.kod_subjek,action.result[index-1].course.kod_subjek,data.color);
          }else{
            color = getRandomColor()
            data.color = color
          }

          _session.push(data);
          // console.log(data);
        } else {

          // console.log({name: currentSession})
        }
      });
      // console.log(_session);

      __state.dataTimeTable = action.result;
      __state.dataCourses = action.courseList;
      __state.selectedTimeTable = _session; 
      __state.selectedSession = courses; 
      return __state;

      case CONSTANTS.COURSE.GET_SELECTED_TIMETABLE_LIST:
        // console.log('dah masuk reducer dahboard')
        __state = { ...state };
        // console.log(__state.dataCourses)
        // let _color = ''

        let __courses = [];
        __state.dataCourses.map((data, index) => {
          __currentSession = action.result;
          // console.log((data.semester+" "+data.sesi), __currentSession)
          if ((data.semester+" "+data.sesi) === (__currentSession)) {
  
            __courses.push(data);
          } else {
          }
        });
        // console.log(__courses)

        let __session = [];
        let __currentSession = "";
        __state.dataTimeTable.map((data, index) => {
          __currentSession = action.result;
          // console.log(__currentSession);
          // console.log(data["sesi"])
          if ((data.course.semester+" "+data.course.sesi) === (__currentSession)) {

            if(index>0 && (data.course.kod_subjek ===  __state.dataTimeTable[index-1].course.kod_subjek)){
              data.color = color
              // console.log(data.course.kod_subjek,action.result[index-1].course.kod_subjek,data.color);
            }else{
              color = getRandomColor()
              data.color = color
            }

            __session.push(data);

          } else {

            // console.log({name: currentSession})
          }
        });
        // console.log(__session);
        __state.selectedTimeTable = __session;
        __state.selectedSession = __courses; 
        return __state;

        case CONSTANTS.COURSE.GET_CURRICULUM_LIST:
          console.log("dah masuk reducer dahboard");
          __state = { ...state };
          __state.curriculumList = action.result;
    
          return __state;

    case CONSTANTS.CLEAR:
      return initState;
    default:
      return state;
  }
}
