import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typeahead } from '@gforge/react-typeahead-ts';
import axios from 'axios';

const DescInput = styled.textarea`
  width: 95%;
  margin: auto;
  padding: 5px;
  min-height: 200px;
  min-width: 300px;
`;

const FormContainer = styled.div`
  width: 100%;
`;

const ElementContainer = styled.div`
  display: block;
  margin: 2px 2px 2px 0;
`;

const EdForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: justify;
`;

const EducationForm = (props: any): JSX.Element => {
  const [id, setId] = useState<number>(props.education.id||props.counter);
  const [name, setName] = useState<string>(props.education.name||'');
  const [startYear, setStartYear] = useState<number>(props.education.startYear||2020);
  const [endYear, setEndYear] = useState<number>(props.education.endYear||2021);
  const [degree, setDegree] = useState<string>(props.education.degree||'');
  const [field, setField] = useState<string>(props.education.field||'');
  const [grade, setGrade] = useState<string>(props.education.grade||'');
  const [description, setDescription] = useState<string>(props.education.description||'');
  const [subjects, setSubjects] = useState<Array<string>>(props.education.subjects||[]);
  const [schools, setSchools] = useState<Array<string>>([]);

  // @ts-ignore
  useEffect(()=>{
    let mounted = true;
    axios.get('http://universities.hipolabs.com/search?name='+name)
      .then(res=>{
        if (mounted) {
          setSchools(res.data.map((s:any)=>{
            return s.name;
          }));
        }
      });
    // @ts-ignore
    return (()=>mounted=false);
  },[]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.isNew) {
      setId(props.counter);
    }
    const ed = {
      id: id,
      name: name,
      startYear: startYear,
      endYear: endYear,
      degree: degree,
      field: field,
      grade: grade,
      description: description,
      subjects: subjects
    }
    if (props.isNew) {
      props.addEducation(ed);
    } else {
      props.updateEducation(ed);
    }
    props.closeModal();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'nameField':
        setName(event.target.value);
        break;
      case 'startYear':
        setStartYear(parseInt(event.target.value));
        break;
      case 'endYear':
        setEndYear(parseInt(event.target.value));
        break;
      case 'degree':
        setDegree(event.target.value);
        break;
      case 'field':
        setField(event.target.value);
        break;
      case 'grade':
        setGrade(event.target.value);
        break;
      case 'subjects':
        setSubjects([...subjects, event.target.value]);
        break;
      default:
        console.log(event.target);
    }
  };

  const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <React.Fragment>
      <FormContainer>
        <EdForm onSubmit={submitHandler}>
          <ElementContainer>
            {props.education.name}
          </ElementContainer>
          <ElementContainer>
              <label htmlFor="nameField">Institution Name: </label>
              <Typeahead
                name="nameField"
                value={name}
                options={schools}
                className="select-css"
                maxVisible={4}
                allowCustomValues
                onOptionSelected={(value?)=>{
                  if (value!=undefined) {
                    setName(value?.toString())
                  }
                }}
              />
          </ElementContainer>
          <ElementContainer>
            <span className="spacer" />
          </ElementContainer>
          <ElementContainer>
            <label htmlFor="startYear">Year you started: </label>
            <input type="text" name="startYear" value={startYear} onChange={changeHandler} size={4} />
          </ElementContainer>
          <ElementContainer>
            <label htmlFor="endYear">Year you finished or anticipate finishing: </label>
            <input type="text" name="endYear" value={endYear} onChange={changeHandler} size={4} />
          </ElementContainer>
          <ElementContainer>
            <label htmlFor="degree">Degree (B.A., M.S., Ph.D., etc): </label>
            <input type="text" name="degree" value={degree} onChange={changeHandler} size={10} />
          </ElementContainer>
          <ElementContainer>
            <label htmlFor="field">Field of study: </label>
            <input type="text" name="field" value={field} onChange={changeHandler} size={50} />
          </ElementContainer>
          <ElementContainer>
            <label htmlFor="grade">Grade/GPA: </label>
            <input type="text" name="grade" value={grade} onChange={changeHandler} size={5} />
          </ElementContainer>
          <ElementContainer>
            <label htmlFor="description">Description: </label>
            <DescInput name="description" value={description} onChange={changeDescription} />
          </ElementContainer>
          <ElementContainer>
            <>{' '}</>
            {props.isNew?<><button type="submit">Add</button></>:
              <><button type="submit">Save</button> <button onClick={()=>props.removeEducation(id)}>Delete</button></>}
            <>{' '}</>
            <button onClick={()=>props.closeModal()}>Cancel</button>
          </ElementContainer>
        </EdForm>
      </FormContainer>
    </React.Fragment>
  );
};

export default EducationForm;
