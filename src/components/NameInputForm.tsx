import React, {useState} from 'react';
import { inputName } from '../actions/userActions';

const NameInputForm = (props: any): JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.inputName(props.name);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setName(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="nameField">Name: </label>
      <input type="text" name="nameField" value={props.name} placeholder="Name" onChange={changeHandler} />
      <button type="submit">Let's Go!</button>
    </form>
  );
}

export default NameInputForm;
