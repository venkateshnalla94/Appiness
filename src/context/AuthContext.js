import createDataContext from './createDataContext';
import * as data from '../data/userInfo';
const authReducer = (state, action) => {
     switch (action.type) {
          case 'login':{
               return {errorMessage: '',allow:action.payload}
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
 * To perform Login
 * @param dispatch
 * @returns {function(...[*]=)}
 */

const login_reducer=(dispatch)=>{
     return async ({userName,password,navigation})=>{
          const userData=data.default;
          if(userData.username===userName&&userData.password===password){
               dispatch({type:'login',payload:true});
               navigation.navigate('EmployeeList');
          }else {
               dispatch({type:'loginFailure',payload:'fail'})
          }
     }
}

const access=(dispatch)=>{
     return async ()=>{
          dispatch({type:'access',payload:''})
     }
}

export const { Provider, Context } = createDataContext(
     authReducer,
     {login_reducer,access},
     {errorMessage:'',allow:''}
);
