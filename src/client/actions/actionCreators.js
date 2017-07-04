import * as actions from '../constants/actions';
import * as errors from '../constants/errors';
import * as endpoints from '../constants/endpoints';
import querystring from 'querystring';
import {push} from 'react-router-redux';


//TODO handle internal server error on response.catch

//thunks
const axios = endpoints.axiosInstance;

export const login = (credentials)=> {
  return (dispatch)=> {
    dispatch(loginPending());
    return axios.post(endpoints.login,
                      querystring.stringify(credentials), {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
      .then((response)=> {
      if (response.status === 401) {
          dispatch(loginFailure(errors.login));
      } else {
          dispatch(loginSuccess());
          dispatch(setUser(response.data.user));
          dispatch(push('/'));
      }
    })
      .catch((error)=> {
        const errorMsg = error.response || errors.server; 
        dispatch(loginFailure(errorMsg));
    });
  };
};

export const signup = (user)=> {
  return (dispatch)=> {
    dispatch(loginPending());
    return axios.post(endpoints.signup,
                     querystring.stringify(user),{
                     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
      .then((response)=> {
        dispatch(loginSuccess());
        dispatch(setUser(response.data.user));
        dispatch(push('/'));
    })
      .catch((error)=> {
      if (error.respone) throw error.response;
    });
  };
};

export const logout = ()=> {
  return (dispatch)=> {
    return axios.get(endpoints.logout)
      .then(()=> {
      dispatch(removeUser());
      dispatch(push('/login'));
    })
      .catch((error)=> {
      if (error.response) throw error.response;
    });
  };
};

export const checkUsername = (username)=> {
  return (dispatch)=> {
    return axios.post(endpoints.checkUsername, querystring.stringify({username}),{
                     headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .then((response)=> {
      let error = (response.data.valid)? '' : errors.usernameInUse;
      dispatch(setUsernameError(error));
    })
    .catch((error)=> {
      //TODO flash error message
      if(error.response) throw error.response;
    });
  };
};

export const submitAnnotation = (annotation)=> {
  return (dispatch)=> {
    return axios.post(endpoints.submitAnnotation, annotation)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        if (error.response) throw error.response;
      });
  };
};

export const loadImage = (userId) => {
  return dispatch => {
    return axios.get(endpoints.loadImage, userId)
      .then(response => {
        dispatch(setImage(response.data));
        dispatch(clearAnnotations());
      })
        .catch(error => {
          if (error.response) throw error.response;
        });
  };
};

//end thunks

export const removeUser = ()=> {
  return {
    type: 'REMOVE_USER'
  };
};

export const setUsernameError = (error)=> {
  return {
    type: 'SET_USERNAME_ERROR',
    error
  };
};

export const setUser = (user)=> {
  return {
    type: actions.SET_USER,
    user
  };
};

//for some reason using action constants fails the tests.
export const loginPending = ()=> {
  return {
    type: 'LOGIN_PENDING'
  };
};

export const loginSuccess = ()=> {
  return {
    type: 'LOGIN_SUCCESS'
  };
};

export const loginFailure = (error)=> {
  return {
    type: 'LOGIN_FAILURE',
    error
  };
};


export const addAnnotation = (annotation) => {
  return {
    type: actions.ADD_ANNOTATION,
    annotation
  };
};

export const removeAnnnotation = () => {
  return {
    type: actions.REMOVE_ANNOTATION
  };
};

export const setImage = (url) => {
  return {
    type: actions.SET_IMAGE,
    url
  };
};

export const clearAnnotations = () => ({
  type: actions.CLEAR_ANNOTATIONS
});