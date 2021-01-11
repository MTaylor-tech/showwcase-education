import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typeahead } from '@gforge/react-typeahead-ts';
import axios from 'axios';
import '../world_universities_and_domains.json';

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
    // if able to access insecure API, use the following block:
    // let mounted = true;
    // axios.get('http://universities.hipolabs.com/search?name='+name)
    //   .then(res=>{
    //     if (mounted) {
    //       setSchools(res.data.map((s:any)=>{
    //         return s.name;
    //       }));
    //     }
    //   });
    //return (()=>mounted=false);

    // otherwise, access the json directly:
    fetch('world_universities_and_domains.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setSchools(myJson.map((s:any)=>{
            return s.name;
        }));
      });
  },[]);

  useEffect(()=>{
    if (props.isNew()) {
      setId(props.counter);
    } else {
      setId(props.education.id);
    }
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    props.setEducation(ed);
    if (props.isNew()) {
      props.addEducation(ed);
    } else {
      props.updateEducation(ed);
    }
    props.closeModal();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'university':
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
              <label htmlFor="university" className="nameLabel">Institution Name: </label>
              <Typeahead
                name="university"
                value={name}
                options={schools}
                className="select-css"
                maxVisible={10}
                allowCustomValues
                onOptionSelected={(value?)=>{
                  if (value!=undefined) {
                    setName(value?.toString())
                  }
                }}
                customClasses={{
                  results: 'list-group',
                  listItem: 'list-group-item'
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
            {props.isNew()?<><button type="submit">Add</button></>:
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
