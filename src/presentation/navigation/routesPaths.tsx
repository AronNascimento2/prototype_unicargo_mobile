import {
  CustomersScreen,
  HistoryAttendance,
  HomeScreen,
  ProfileScreen,
} from '../screens';

export const ROUTES_PATHS = [
  {
    id: 1,
    path: 'home',
    element: HomeScreen,
    title: 'home',
  },
  {
    id: 2,
    path: 'history',
    element: HistoryAttendance,
    title: 'history',
  },
  {
    id: 3,
    path: 'customers',
    element: CustomersScreen,
    title: 'customers',
  },
  {
    id: 4,
    path: 'profile',
    element: ProfileScreen,
    title: 'profile',
  },
];
