var API_ROUTE = "",
  MQTT_URL = "",
  TTMS_ROUTE = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?";

// console.log(typeof(window.AppConfig.TTMS_ROUTE),'oooio')

// if (typeof(window.AppConfig.TTMS_ROUTE) === "undefined") {
//   // API_ROUTE = 'http://web.fc.utm.my/ttms/web_man_webservice_json.cgi'

// }

if (typeof window.AppConfig.API_ROUTE === "undefined") {
  API_ROUTE = "http://" + window.location.hostname + ":3034/api";
} else {
  API_ROUTE = window.AppConfig.API_ROUTE;
}

if (typeof window.AppConfig.MQTT_URL === "undefined") {
  MQTT_URL = "ws://" + window.location.hostname + ":3890";
} else {
  MQTT_URL = window.AppConfig.MQTT_URL;
}

export const SERVER = {
  API: {
    Login: API_ROUTE + "/AppUsers/login",
    // Login: (username,password) => { return TTMS_ROUTE + `entity=authentication&login=${username}&password=${password}`},
    // Login: (username,password) => { return TTMS_ROUTE + `entity=authentication&login=B19EC0004&password=980714565035`},
    // API_ROUTE + '/AppUsers/' + id
    Logout: API_ROUTE + "/AppUsers/logout",
    ChangePassword: API_ROUTE + "/AppUsers/change-password",
    ResetPassword: API_ROUTE + "/AppUsers/reset/password",
    resetPasswordByAdmin: API_ROUTE + "/AppUsers/resetpasswordbyadmin",

    AppUser: {
      MAIN: API_ROUTE + "AppUsers",

      RegisterManager: API_ROUTE + "/AppUsers/register/manager",
      UpdateManager: API_ROUTE + "/AppUsers/update/manager",
      DeleteManager: API_ROUTE + "/AppUsers/delete/manager",
      ListManager: API_ROUTE + "/AppUsers/list/managers", //made changes here /AppUsers/list/managers

      UpdateByAdmin: API_ROUTE + "/AppUsers/updatebyadmin",
      UpdateByManager: API_ROUTE + "/AppUsers/updatebymanager",

      DeleteByAdmin: API_ROUTE + "/AppUsers/deletebyadmin",
      DeleteByManager: API_ROUTE + "/AppUsers/deletebymanager",

      ChangePassword: API_ROUTE + "/AppUsers/change-password",
      ResetPassword: API_ROUTE + "/AppUsers/resetpasswordbyadmin",

      UpdateById: (id) => {
        return API_ROUTE + "/AppUsers/" + id;
      },
    },

    Curriculum: {
      Curriculum: API_ROUTE + "/Curriculums",
      CurriculumList: API_ROUTE + "/Curriculums/listCurriculum",
      Statistic: API_ROUTE + "/Curriculums/devicestatistic",
      Delete: API_ROUTE + "/Curriculums/",
      Update: API_ROUTE + "/Curriculums/update",

      UpdateById: (id) => {
        return API_ROUTE + "/Curriculum/updateCurriculum/" + id;
      },
    },

    Student: {
      Student: API_ROUTE + "/Students",
      StudentList: API_ROUTE + "/Students/listStudent",
      RegisterStudent: API_ROUTE + '/Students/register',
      Statistic: API_ROUTE + "/Students/devicestatistic",
      Delete: API_ROUTE + "/Students/",
      Update: API_ROUTE + "/Students/update",

      UpdateById: (id) => {
        return API_ROUTE + "/Student/updateStudent/" + id;
      },
    },

    Lecturer: {
      Lecturer: API_ROUTE + "/Lecturers",
      LecturerList: API_ROUTE + "/Lecturers/listLecturer",
      Statistic: API_ROUTE + "/Lecturers/devicestatistic",
      Delete: API_ROUTE + "/Lecturers/",
      Update: API_ROUTE + "/Lecturers/update",

      UpdateById: (id) => {
        return API_ROUTE + "/Lecturer/updateLecturer/" + id;
      },
    },

    Section: {
      Section: API_ROUTE + "/Sections",
      RegisterSection: API_ROUTE + '/Sections/register',
      SectionList: API_ROUTE + "/Sections/listSection",
      Statistic: API_ROUTE + "/Sections/devicestatistic",
      Delete: API_ROUTE + "/Sections/",
      Update: API_ROUTE + "/Sections/update",
      getSectionMemberListById: API_ROUTE + "/Sections/getSectionMemberListById",

      UpdateById: (id) => {
        return API_ROUTE + "/Section/updateSection/" + id;
      },
    },

    Device: {
      Device: API_ROUTE + "/Devices",
      DeviceList: API_ROUTE + "/Devices/list",
      Statistic: API_ROUTE + "/Devices/devicestatistic",
      Delete: API_ROUTE + "/Devices/",
      Update: API_ROUTE + "/Devices/update",

      UpdateById: (id) => {
        return API_ROUTE + "/Devices/updateDevice/" + id;
      },
    },

    Registration: {
      checkEligible: API_ROUTE + '/Registrations/checkEligible',
      Registration: API_ROUTE + "/Registrations",
      RegisterCourse: API_ROUTE + '/Registrations/register',
      RegistrationList: API_ROUTE + "/Registrations/list",
      Statistic: API_ROUTE + "/Registrations/devicestatistic",
      Delete: API_ROUTE + "/Registrations/",
      Update: API_ROUTE + "/Registrations/update",
      GetRegistrationListById: API_ROUTE + "/Registrations/getRegistrationListById",

      UpdateById: (id) => {
        return API_ROUTE + "/Registrations/updateRegistration/" + id;
      },
    },

    RegistrationSchedule: {
      RegistrationSchedule: API_ROUTE + "/RegistrationSchedules",
      RegisterSchedule: API_ROUTE + '/RegistrationSchedules/register',
      RegistrationScheduleList: API_ROUTE + "/RegistrationSchedules/list",
      Statistic: API_ROUTE + "/RegistrationSchedules/devicestatistic",
      Delete: API_ROUTE + "/RegistrationSchedules/",
      Update: API_ROUTE + "/RegistrationSchedules/update",

      UpdateById: (id) => {
        return API_ROUTE + "/RegistrationSchedules/updateRegistrationSchedule/" + id;
      },
    },

    DeviceData: {
      MAIN: API_ROUTE + "/DeviceData",
      LATEST: API_ROUTE + "/DeviceData/latest",
      LatestData: API_ROUTE + "/DeviceData/getLatestDataByDevice",
    },

    History: {
      MAIN: API_ROUTE + "/HistoryData",
      // Update: MAIN+'/api/History/update/info'
    },
  },
  MQTT: {
    URL: MQTT_URL,
    User: "myav_dash",
    Pass: "asdh@453bia&2sfeeYq3rs",
  },
};
