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

const TimeTable = {
  name: 'Time Table',
  url: '/TimeTable',
  icon: 'icon-calendar',
}

const Logout = {
  name: 'Log Out',
  url: '/login',
  icon: 'icon-logout',
}

export default {
  Basic: { items: [Dashboard,CarDetails,Analysis, Profile,Users ]},
  Admin: { items: [Dashboard,CarDetails,Analysis,Users ] }, // add Users - demo
  Manager: { items: [DashboardStudent,RegisterNewCourse,CourseInformation,GroupSectionInformation,TimeTable] },
  Student: { items: [DashboardStudent,RegisterNewCourse,CourseInformation,GroupSectionInformation,TimeTable] },
  Teacher: { items: [DashboardStudent,RegisterNewCourse,CourseInformation,GroupSectionInformation,TimeTable] },
  Logout: { items: [Logout]},
};
