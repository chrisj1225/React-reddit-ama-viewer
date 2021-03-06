import React from 'react';

import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ show, modalClosed, children }) => (
  <Auxiliary>
    <Backdrop show={show} clicked={modalClosed}/>
    <div 
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? '1' : '0'
      }}>
      {children}
    </div>
  </Auxiliary>


);

export default Modal;