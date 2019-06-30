






import { SIGNUPUSER,LOGIN_USER,LOGIN_USER_FAIL
  ,LOGIN_USER_SUCCESS,SIGNUPUSER_FAIL
  ,SIGNUPUSER_SUCCESS,
  SIGN_OUT,FETCH_PROFILE
} from '../Action/types'



const initialState = {
    
    user: null,
    error: null,
    signUpLoading: false,
    LoginLoading: false,
    Profile:null,
    
    
    

    


}


export default function (state = initialState,action){
    switch (action.type){


        case LOGIN_USER:
        return { ...state, LoginLoading: true, error: '' };

        case LOGIN_USER_SUCCESS:
        return { ...state, user: action.payload,LoginLoading:false  };

        case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed.',LoginLoading: false };

        case SIGN_OUT: 
        return initialState
       

       
        case SIGNUPUSER:
        return { ...state, signUpLoading: true, error: '' };

        case SIGNUPUSER_SUCCESS:
        return { ...state, user: action.payload,signUpLoading:false };
    
        case SIGNUPUSER_FAIL:
        return { ...state, error: 'Authentication Failed.', signUpLoading: false };

       

        case FETCH_PROFILE: 
        return { ...state, Profile: action.payload}

        default: 
        return state;
    }
}

