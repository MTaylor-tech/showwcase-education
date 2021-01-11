import {UserReducer, Action, Education} from '../types/types';

export const initialState: UserReducer = {
  name: "",
  educations: [
    {
      id: 0,
      name: "Sample University",
      degree: "B.S.",
      field: "Underwater Basket-Weaving",
      startYear: 2015,
      endYear: 2019,
      grade: '3.82',
      description: "A rigorous course of study that proved I have the grit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  loggedIn: false,
  error: "",
};

export const emptyEd: Education = {
  id: -1,
  name: '',
  degree: '',
  field: '',
  startYear: 2020,
  endYear: 2021,
  grade: '',
  description: '',
};

export const userReducer = (state = initialState, action: Action): UserReducer => {
  console.log(action);
  switch (action.type) {
    case 'INPUT_NAME':
      return {...state,
        name: action.payload,
        loggedIn: true
      };
    case 'ADD_EDUCATION':
      return {...state,
        educations: [...state.educations, action.payload]};
    case 'UPDATE_EDUCATION':
      return {...state,
        educations: [...state.educations.map(e=>{
          if (e.id===action.payload.id) {
            return action.payload;
          } else {
            return e;
          }
          // e.id==action.payload.id?action.payload:e
        })]};
    case 'REMOVE_EDUCATION':
      return {...state,
        educations: [...state.educations.filter(e=>e.id!==action.payload)]};
    default:
      return state;
  }
};
