import axios from 'axios';
import {stockData} from './EmployeeList.js';


export const signInUser = ({email, password}) => {
    return {
        type: 'auth_user'
    }
};