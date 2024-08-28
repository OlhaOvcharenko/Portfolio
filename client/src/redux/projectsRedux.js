import initialState from "./initialState";
import { API_URL } from "../config";
import axios from 'axios';

  

/*SELECTORS*/
export const getAllProjects = (state) => state.projects.data;

/* ACTIONS */
const reducerName = 'projects';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const DATA_PROJECTS = createActionName('DATA_PROJECTS');

/* ACTION CREATORS */
export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const fetchDataProjects = (payload) => ({ type: DATA_PROJECTS, payload });

export const loadProjectsRequest = () => {
  return async (dispatch) => {
    const requestName = DATA_PROJECTS;
    dispatch(startRequest({ name: requestName }));

    try {
      let res = await axios.get(`${API_URL}/projects`);
      dispatch(fetchDataProjects(res.data));
      dispatch(endRequest({ name: requestName }));
    } catch (e) {
      dispatch(errorRequest({ name: requestName, error: e.message }));
    }
  };
};



/* REDUCER */
const projectsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_PROJECTS:
      return {...state, data: action.payload};
    case START_REQUEST:
      return { ...state, requests: {...state.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
    case END_REQUEST:
      return { ...state, requests: { ...state.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
    case ERROR_REQUEST:
      return { ...state, requests: { ...state.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false }} };
    default:
      return state;
  };
}
  
export default projectsReducer;