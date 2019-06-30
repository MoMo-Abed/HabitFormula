


import { SIGNUPUSER,LOGIN_USER,REST_PASSWORD_FAIL
  ,REST_PASSWORD_SUCC,LOGIN_USER_FAIL
  ,LOGIN_USER_SUCCESS,SIGNUPUSER_FAIL
  ,REST_PASSWORD,SIGN_OUT
  ,FETCH_PROFILE,SIGNUPLOGINSUCC
 } from './types';

import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';






 export function UserLogin({loginemail, loginpassword}) {
    return function (dispatch){
        dispatch ({type : LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(()=>loginUserFail(dispatch))
       }}

       
       const loginUserFail = (dispatch) => {
        dispatch({ type: LOGIN_USER_FAIL });
      };
      
      const loginUserSuccess = (dispatch, user) => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user
        });
      
       Actions.Main();
      };    
      
      

export function SignOut() {
  return function (dispatch){
      dispatch ({type : SIGN_OUT});
      firebase.auth().signOut()
      .then(() => Actions.auth())
      .catch((err)=>console.log(err))
     }}


    


        export function UserSignUp({SignUpEmail, SignUpPassword}) {
          return function (dispatch){
              dispatch ({type : SIGNUPUSER});
              firebase.auth().createUserWithEmailAndPassword(SignUpEmail, SignUpPassword)
              .then(user => {
                firebase.auth().signInWithEmailAndPassword(SignUpEmail, SignUpPassword)
                .then(user => SignUploginUserSuccess(dispatch, user))
               

               })
              .catch(()=>SignUpUserFail(dispatch))
             }}
      
        
     const SignUpUserFail = (dispatch) => {
      dispatch({ type: SIGNUPUSER_FAIL });
    };
    
    const SignUploginUserSuccess = (dispatch, user) => {
      dispatch({
        type: SIGNUPLOGINSUCC,
        payload: user
      });
    
      Actions.Main(); 
    };      

            

      export function RestPassword({RestEmail}) {
        return function (dispatch){
            dispatch ({type : REST_PASSWORD});
            firebase.auth().sendPasswordResetEmail(RestEmail)
            .then(user => RestSucc(dispatch, user))
            .catch(()=>RestFail(dispatch))
           }}



           const RestFail = (dispatch) => {
            dispatch({ type: REST_PASSWORD_FAIL });
          };
          
          const RestSucc = (dispatch, user) => {
            dispatch({
              type: REST_PASSWORD_SUCC,
              payload: user
            });
          
            Actions.EmailPass(); 
          };      
    


       




export function ProfileUpdate({image,name,uid}) {

  const { currentUser } = firebase.auth();


  return () => {


    firebase.database().ref(`/users/${currentUser.uid}/profile/${uid}`)
  .set({image,name})
  Actions.main(); 

  }
}
    



export const FetchProfile = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {

    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .on('value', snapshot =>{
      dispatch ({
        type: FETCH_PROFILE,
        payload: snapshot.val()
      })
    })}}
