
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Header from './components/Header';
import NameInputForm from './components/NameInputForm';
import EducationList from './components/EducationList';
import EducationItem from './components/EducationItem';
import EducationForm from './components/EducationForm';
import EducationFormModal from './components/EducationFormModal';
import {inputName, addEducation, removeEducation, updateEducation} from './actions/userActions';
import {UserState, Education} from './types/types';
import {emptyEd} from './reducers/userReducer';


const Boxes = styled.div`
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Box = styled.div`
  margin: auto;
  width: 100%;
  padding: 10px;
`;

const SideBySide = styled.div`
  display: flex;
  width: 100%;
`;

const LeftBox = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-top: 25px;
`;

const RightBox = styled.div`
  width: 75%;
  height: 100%;
  padding: 10px;
`;

const App = (props: any): JSX.Element => {
  const [name, setName] = useState<string>(props.name);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [pageClass, setPageClass] = useState<string>('page');
  const [education, setEducation] = useState<Education>(emptyEd);
  const [isNew, setIsNew] = useState<boolean>(true);
  const [showItem, setShowItem] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(1);

  const selectItem = (ed: Education) => {
    setEducation(ed);
    setShowItem(true);
  };

  const checkForNew = () => {
    return isNew;
  }

  useEffect(()=> {
    const l = props.educations.length;
    if (!isNew && education !== undefined && l > 0) {
      selectItem(education);
      setCounter(props.educations[l-1].id+1)
    } else if (l > 0) {
      selectItem(props.educations[l-1]);
      setCounter(props.educations[l-1].id+1)
    } else {
      setShowItem(false);
    }
  },[props.educations]);

  const openModal = () => {
    setIsNew(true);
    setEducation({...emptyEd, id: counter});
    setModalIsOpen(true);
    setPageClass('page faded');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPageClass('page');
    setShowItem(false);
    if (education !== undefined) {
      setShowItem(true);
    }
  };

  const editEducation = () => {
    setIsNew(false);
    setModalIsOpen(true);
    setPageClass('page faded');
  };

  const deleteEducation = (id: number) => {
    setModalIsOpen(false);
    setPageClass('page');
    props.removeEducation(education.id);
    const l = props.educations.length;
    if (l > 0) {
      selectItem(props.educations[l-1]);
    } else {
      setShowItem(false);
    }
  };

  return (
    <div className={pageClass}>
      <Boxes className="boxes">
        <Box className="box">
          <Header name={props.name} loggedIn={props.loggedIn} />
        </Box>
        {props.loggedIn?
          <SideBySide>
            <LeftBox>
              <button onClick={openModal}>Add Education</button>
              <EducationList educations={props.educations}
                setEducation={selectItem} editEducation={editEducation} />
            </LeftBox>
            <RightBox>
              {showItem?<EducationItem education={education}
                editEducation={editEducation} />:<></>}
            </RightBox>
        </SideBySide> :
        <Box className="box">
            <NameInputForm name={name}
              setName={setName} inputName={props.inputName} />
        </Box>}
        <Box>
          <EducationFormModal
            isOpen={modalIsOpen} isNew={checkForNew} counter={counter}
            closeModal={closeModal} education={education}
            addEducation={props.addEducation} setEducation={setEducation}
            updateEducation={props.updateEducation}
            removeEducation={deleteEducation} />
        </Box>
      </Boxes>
    </div>
  );
};

const mapStateToProps = (state: UserState) => {
  return {
    name: state.userReducer.name,
    educations: state.userReducer.educations,
    loggedIn: state.userReducer.loggedIn,
    error: state.userReducer.error
  };
};

export default connect(
  mapStateToProps,
  { inputName, addEducation, removeEducation, updateEducation }
)(App);
