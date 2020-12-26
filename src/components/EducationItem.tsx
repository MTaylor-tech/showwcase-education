import React from 'react';

const EducationItem = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h3>{props.education.name}</h3>
        <p>{props.education.startYear} - {props.education.endYear}</p>
        <p>
          {props.education.degree}
          <> </>
          {props.education.field}
          {props.education.grade?<span> ({props.education.grade})</span>:<></>}
        </p>
        <p>{props.education.description}</p>
        <button onClick={props.editEducation}>Edit</button>
      </div>
    </React.Fragment>
  );
};

export default EducationItem;
