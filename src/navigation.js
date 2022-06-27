



const Dashboard = {
  name: 'Dashboard',
  url: '/dashboard',
  icon: 'icon-pie-chart',
}

const DashboardLecturer = {
  name: 'Dashboard',
  url: '/dashboardLecturer',
  icon: 'icon-pie-chart',
}

const CarDetails = {
  name: 'Vehicle Details',
  url: '/vehicleDetails',
  icon: 'icon-info',
}

// const NewCar = {
//   name: 'New Car',
//   url: '/newCar',
//   icon: 'icon-people',
// }

const Users = {
  name: 'Users',
  url: '/users',
  icon: 'icon-people',
}

const Analysis = {
  name: 'Analysis',
  url: '/analysis',
  icon: 'icon-chart',
}

const Profile = {
  name: 'Profile',
  url: '/profile',
  icon: 'icon-people',
}

//Student
const DashboardStudent = {
  name: 'Dashboard',
  url: '/dashboardStudent',
  icon: 'icon-pie-chart',
}

const CourseInformation = {
  name: 'Course Information',
  url: '/CourseInformation',
  icon: 'icon-info',
}

const GroupSectionInformation = {
  name: 'Group Section Information',
  url: '/GroupSectionInformation',
  icon: 'icon-organization',
}

const RegisterNewCourse = {
  name: 'Register New Course',
  url: '/RegisterNewCourse',
  icon: 'icon-doc',
}

const TimeTableStudent = {
  name: 'Time Table',
  url: '/TimeTableStudent',
  icon: 'icon-calendar',
}

const ApproveCourseRegLecturer = {
  name: 'Approve Course Registration',
  url: '/ApproveCourseRegLecturer',
  icon: 'icon-calendar',
}

const TimeTableLecturer = {
  name: 'Time Table',
  url: '/TimeTableLecturer',
  icon: 'icon-calendar',
}

const Logout = {
  name: 'Log Out',
  url: '/login',
  icon: 'icon-logout',
}

// Admin
const adminDashboard = {
  name: 'Dashboard',
  url: '/DashboardAdmin',
  icon: 'icon-pie-chart',
}

const adminAssignSection = {
  name: 'Assign Section Course',
  url: '/adminAssignSection',
  icon: 'icon-people',
}

const adminAssignLecturer = { // sample
  name: 'Assign Lecturer Course',
  url: '/adminAssignLecturer',
  icon: 'icon-user',
}

const adminManageCourse = {
  name: 'Manage Course',
  url: '/adminAssignLecturer',
  icon: 'icon-user',
}

const adminCreateSection = { // sample
  name: 'Create Section',
  url: '/adminCreateSection',
  icon: 'icon-plus',
}

const adminManageSection = {
  name: 'Manage Section',
  url: '/adminCreateSection',
  icon: 'icon-plus',
}

const adminRegistrationSession = {
  name: 'Registration Schedule Session',
  url: '/adminRegistrationSession',
  icon: 'icon-clock',
}

const adminTimeTable = {
  name: 'Time Table',
  url: '/adminTimeTable',
  icon: 'icon-calendar',
}

const AdminStatistic = {
  name: 'Statistic',
  url: '/adminStatistic',
  icon: 'icon-calendar',
}

export default {
  Basic: { items: [Dashboard,CarDetails,Analysis, Profile,Users ]},
  Manager: { items: [DashboardStudent,RegisterNewCourse,CourseInformation,GroupSectionInformation,TimeTableStudent] },

  Admin: { items: [adminDashboard,AdminStatistic,adminRegistrationSession,adminTimeTable ] }, // add Users - demo
  Student: { items: [DashboardStudent,RegisterNewCourse,CourseInformation,GroupSectionInformation,TimeTableStudent] },
  Lecturer: { items: [DashboardStudent,ApproveCourseRegLecturer,TimeTableLecturer] },

  Logout: { items: [Logout]},
};
