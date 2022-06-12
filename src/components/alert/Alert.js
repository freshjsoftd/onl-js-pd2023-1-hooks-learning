import React from 'react'
import { useAlert } from './AlertContext';

function Alert() {
  const {visible, toggle} = useAlert();

  if(!visible){
    return null;
  }
  return (
    <div className="alert alert-danger" onClick={toggle}>It is very important mesage</div>
  )
}

export default Alert