import createDataContext from './createDataContext';
import * as data from '../data/userInfo';

/**
 * State managment for the application
 * @param state
 * @param action
 * @returns {*|{allow: ((path: PathLike, mode?: number) => Promise<void>) | ((path: PathLike, mode: (number | undefined), callback: NoParamCallback) => void) | ((path: PathLike, callback: NoParamCallback) => void) | boolean | (function(*): function(...[*]=)) | "public" | "private" | "protected" | access, userName: string}|{allow: *}}
 */
const authReducer = (state, action) => {
     switch (action.type) {
          case 'login':{
               return {userName:action.payload.userName,allow:action.payload.access}
          }
          case 'loginFailure':{
               return {...state,allow: action.payload}
          }
          case 'access':{
               return {...state,allow: action.payload}
          }
          default:
               return state;
     }
};

/**
 * reducers
 * To perform Login action
 * @param dispatch
 * @returns {function(...[*]=)}
 */

const login_reducer=(dispatch)=>{
     return async ({userName,password,navigation})=>{
          const userData=data.default;
          if(userData.username===userName&&userData.password===password){
               dispatch({type:'login',payload:{access:true,userName:userName}});
               
               navigation.navigate('EmployeeList');
          }else {
               dispatch({type:'loginFailure',payload:'fail'})
          }
     }
};

const access=(dispatch)=>{
     return async ()=>{
          dispatch({type:'access',payload:''})
     }
};

export const { Provider, Context } = createDataContext(
     authReducer,
     {login_reducer,access},
     {errorMessage:'',allow:'',userName:''}
);
