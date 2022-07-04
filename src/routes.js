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

//Admin
const DashboardAdmin = React.lazy(() => import('./views/Staff/Dashboard/Dashboard'))
const adminAssignLecturer = React.lazy(() => import('./views/Staff/CourseRegistration/AssignLecturerCourse/AssignLecturerCourse'))
const adminAssignSection = React.lazy(() => import('./views/Staff/CourseRegistration/AssignSectionCourse/AssignSectionCourse'))
const adminCreateSection = React.lazy(() => import('./views/Staff/ManageCourse/CreateSection/CreateSection'))
const adminRegistrationSession = React.lazy(() => import('./views/Staff/ManageCourse/RegistrationScheduleSession/RegistrationScheduleSession'))
const adminTimeTable = React.lazy(() => import('./views/Staff/ManageCourse/TimeTable/TimeTable'))
const adminRecord = React.lazy(() => import('./views/Staff/Statistic/Statistic'))



const routesManager = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/dashboardStudent', exact: true, name: 'Dashboard', component: DashboardStudent },
  { path: '/CourseInformation', exact: true, name: 'Course Information', component: CourseInformation },
  { path: '/GroupSectionInformation', exact: true, name: 'Group Section Information', component: GroupSectionInformation },
  { path: '/RegisterNewCourse', exact: true, name: 'Register New Course', component: RegisterNewCourse },
  { path: '/TimeTableStudent', exact: true, name: 'TimeTable', component: TimeTableStudent },
];

const routesAdmin = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: DashboardAdmin },
  { path: '/adminAssignLecturer', exact: true, name: 'admin Assign Lecturer', component: adminAssignLecturer },
  { path: '/adminAssignSection', exact: true, name: 'admin Assign Section', component: adminAssignSection },
  { path: '/adminCreateSection', exact: true, name: 'admin Create Section', component: adminCreateSection },
  { path: '/adminRegistrationSession', exact: true, name: 'adminRegistrationSession', component: adminRegistrationSession },
  { path: '/adminRecord', exact: true, name: 'Admin Record', component: adminRecord },
  { path: '/adminTimeTable', exact: true, name: 'Admin TimeTable', component: adminTimeTable },
  // { path: '/users', exact: true, name: 'Users', component: Users },
  // { path: '/dashboardLecturer', exact: true, name: 'Dashboard', component: DashboardLecturer },
];

const routesStudent = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardStudent },
  { path: '/CourseInformation', exact: true, name: 'Course Information', component: CourseInformation },
  { path: '/GroupSectionInformation', exact: true, name: 'Group Section Information', component: GroupSectionInformation },
  { path: '/RegisterNewCourse', exact: true, name: 'Register New Course', component: RegisterNewCourse },
  { path: '/TimeTableStudent', exact: true, name: 'TimeTable', component: TimeTableStudent },
];

const routesLecturer = [
  { path: '/', exact: true, name: 'Home'  },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardLecturer },
  { path: '/ApproveCourseRegLecturer', exact: true, name: 'Approve Course Reg Lecturer', component: ApproveCourseRegLecturer },
  { path: '/TimeTableLecturer', exact: true, name: 'TimeTable', component: TimeTableLecturer },
];

const routesBasic = [];

export default {
  Basic: routesBasic,
  Manager: routesManager,

  Admin: routesAdmin,
  Student: routesStudent,
  Lecturer: routesLecturer,
};
