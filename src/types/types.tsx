export interface Education {
  id: number,
  name: string,
  degree: string,
  field: string,
  startYear: number,
  endYear: number,
  grade: string,
  description: string,
};

export interface User {
  name: string,
  educations: Array<Education>,
  loggedIn: boolean,
  error: string
};

export interface UserReducer {
  name: string,
  educations: Array<Education>,
  loggedIn: boolean,
  error: string
};

export interface UserState {
  name: string,
  educations: Array<Education>,
  loggedIn: boolean,
  error: string,
  userReducer: UserReducer
};

export interface Action {
  type: string,
  payload: any
};
