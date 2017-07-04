// Set up your root reducer here...
import { combineReducers } from 'redux';
import {user} from './user';
import {image} from './image';

 export default combineReducers({
   user,
   image
 });

