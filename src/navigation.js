const Dashboard = {
  name: 'Dashboard',
  url: '/dashboard',
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

export default {
  Basic: { items: [Dashboard,CarDetails,Analysis, Profile,Users ]},
  Admin: { items: [Dashboard,CarDetails,Analysis,Users ] }, // add Users - demo
  Manager: { items: [Dashboard] },
};
