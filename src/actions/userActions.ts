import {Education} from '../types/types';

export const inputName = (name: string) => {
  return { type: "INPUT_NAME", payload: name };
};

export const addEducation = (education: Education) => {
  return { type: "ADD_EDUCATION", payload: education };
};

export const updateEducation = (education: Education) => {
  return { type: "UPDATE_EDUCATION", payload: education };
};

export const removeEducation = (id: number) => {
  return { type: "REMOVE_EDUCATION", payload: id };
};
