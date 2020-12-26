import React from 'react';
import { Education } from '../types/types';
import EducationItem from './EducationItem';

const EducationList = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      <ul>{props.educations.map((e:Education)=><li key={e.id} onClick={()=>props.setEducation(e)}>{e.name}</li>)}</ul>
    </React.Fragment>
  );
};

export default EducationList;
