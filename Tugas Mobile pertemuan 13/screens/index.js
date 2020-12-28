import SigninScreen from './Signin';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
import TabNavigasiScreen from './Utama/TabNavigasi';
import BookLisScreen from './BookLis';
import Post from './Post';
import ImportData from './ImportData';
import ViewData from './ViewData';
module.exports = [

  {
    name: 'Signin',
    component: SigninScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'TabNavigasi',
    component: TabNavigasiScreen,
    options: { headerShown: false },
  },
  {
    name: 'BookLis',
    component: BookLisScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: { headerShown: false },
  },

  {
    name: 'Post',
    component: Post,
    options: { headerShown: false },
  },
  {
    name: 'ImportData',
    component: ImportData,
    options: { headerShown: false },
  },
  {
    name: 'ViewData',
    component: ViewData,
    options: { headerShown: false },
  },
  
];
