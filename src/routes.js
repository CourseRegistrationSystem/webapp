import React from 'react';

// const Dashboard = React.lazy(() => import('./views/Dashboard'));
// const Dashboard = React.lazy(() => import('./views/_Admin/Dashboard/Dashboard'))
// const vehicleDetails = React.lazy(() => import('./views/_Admin/CarDetails/carDetails'))
// const NewCar = React.lazy(() => import('./views/_Admin/CarDetails/newCar'))
// const OneCar = React.lazy(() => import('./views/_Admin/CarDetails/oneCarAnalysis copy'))
// const Analysis = React.lazy(() => import('./views/_Admin//Analysis/analysis'))
const Profile = React.lazy(() => import('./views/_Admin/Profile/profile'))
// const Users = React.lazy(() => import('./views/User/User'))

//Lecturer
const DashboardLecturer = React.lazy(() => import('./views/Lecturer/Dashboard/Dashboard'))
const TimeTableLecturer = React.lazy(() => import('./views/Lecturer/TimeTable/TimeTable'))
const ApproveCourseRegLecturer = React.lazy(() => import('./views/Lecturer/ApproveCourseRegistration/ApproveCourseRegistration'))

//Student
const DashboardStudent = React.lazy(() => import('./views/Student/Dashboard/Dashboard'))
const CourseInformation = React.lazy(() => import('./views/Student/CourseInformation/CourseInformation'))
const GroupSectionInformation = React.lazy(() => import('./views/Student/GroupSectionInformation/GroupSectionInformation'))
const RegisterNewCourse = React.lazy(() => import('./views/Student/RegisterNewCourse/RegisterNewCourse'))
const TimeTableStudent = React.lazy(() => import('./views/Student/TimeTable/TimeTable'))

const routesAdmin = [
  // { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/vehicleDetails', exact: true, name: 'Vehicle Details', component: vehicleDetails },
  // { path: '/carDetails/newCar', exact: true, name: 'Add New MyAV', component: NewCar },
  // { path: '/carDetails/oneCar', exact: true, name: 'Car Analysys History', component: OneCar },
  // { path: '/analysis', exact: true, name: 'Analysis', component: Analysis },
  // { path: '/profile', exact: true, name: 'Profile', component: Profile },
  // { path: '/users', exact: true, name: 'Users', component: Users },
  // { path: '/dashboardLecturer', exact: true, name: 'Dashboard', component: DashboardLecturer },
];

const routesManager = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/dashboardStudent', exact: true, name: 'Dashboard', component: DashboardStudent },
  { path: '/CourseInformation', exact: true, name: 'CourseInformation', component: CourseInformation },
  { path: '/GroupSectionInformation', exact: true, name: 'GroupSectionInformation', component: GroupSectionInformation },
  { path: '/RegisterNewCourse', exact: true, name: 'RegisterNewCourse', component: RegisterNewCourse },
  { path: '/TimeTableStudent', exact: true, name: 'TimeTable', component: TimeTableStudent },
];

const routesStudent = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardStudent },
  { path: '/CourseInformation', exact: true, name: 'CourseInformation', component: CourseInformation },
  { path: '/GroupSectionInformation', exact: true, name: 'GroupSectionInformation', component: GroupSectionInformation },
  { path: '/RegisterNewCourse', exact: true, name: 'RegisterNewCourse', component: RegisterNewCourse },
  { path: '/TimeTableStudent', exact: true, name: 'TimeTable', component: TimeTableStudent },
];

const routesLecturer = [
  { path: '/', exact: true, name: 'Home'  },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardLecturer },
  { path: '/ApproveCourseRegLecturer', exact: true, name: 'ApproveCourseRegLecturer', component: ApproveCourseRegLecturer },
  { path: '/TimeTableLecturer', exact: true, name: 'TimeTable', component: TimeTableLecturer },
];

const routesBasic = [];

export default {
  Basic: routesBasic,
  Admin: routesAdmin,
  Manager: routesManager,

  Student: routesStudent,
  Lecturer: routesLecturer,
};
