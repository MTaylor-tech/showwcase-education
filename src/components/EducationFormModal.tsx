import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import EducationForm from './EducationForm';

ReactModal.setAppElement('#root')

const EducationFormModal = (props: any): JSX.Element => {
  const customStyles = {
    overlay: {
      background: 'white',
      width: '50%',
      border: '1px solid black',
      margin: 'auto',
    },
    content: {
      padding: '3vh 3vw',
    }
  };

  return (
    <ReactModal
      isOpen = { props.isOpen }
      style={customStyles}
      contentLabel={ "Add Education" }
      portalClassName={ "ReactModalPortal" }
      overlayClassName={ "ReactModal__Overlay" }
      id={ "ed-form-modal" }
      className={ "ReactModal__Content" }
      bodyOpenClassName={ "ReactModal__Body--open" }
      htmlOpenClassName={ "ReactModal__Html--open" }
      ariaHideApp={ true }
      shouldFocusAfterRender={ true }
      shouldCloseOnOverlayClick={ false }
      shouldCloseOnEsc={ true }
      onRequestClose={props.closeModal}
      shouldReturnFocusAfterClose={ true }
      parentSelector={ () => document.body }
      >

        <EducationForm {...props} />
    </ReactModal>
  )
};

export default EducationFormModal;
