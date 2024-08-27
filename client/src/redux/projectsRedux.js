import { API_URL } from "../config";
import axios from 'axios'
/*SELECTORS*/
export const getAllProjects = (state) => state.projects;


/* ACTIONS */
const reducerName = 'projects';
const createActionName = name => `app/${reducerName}/${name}`;


const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const DATA_PROJECTS = createActionName('DATA_PROJECTS');

/* ACTIONS CREATORS */
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });


export const fetchDataProjects = payload => ({type: DATA_PROJECTS, payload});

export const loadProjectsRequest = () => {
    return async (dispatch) => {
      const requestName = DATA_PROJECTS;
      dispatch(startRequest({ name: requestName }));
  
      try {
        let res = await axios.get(`${API_URL}/products`);
        dispatch(fetchDataProjects(res.data));
        dispatch(endRequest({ name: requestName }));
      } catch (e) {
        dispatch(errorRequest({ name: requestName, error: e.message }));
      }
    };
  };
  

/* REDUCER */
export default function projectsReducer(state = {}, action = {}) {
  switch (action.type) {
    case DATA_PROJECTS:
      return action.payload;
    default:
      return state;
    }
}