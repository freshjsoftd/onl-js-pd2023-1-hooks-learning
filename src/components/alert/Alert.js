import React from 'react'
import { useAlert } from './AlertProvider';

function Alert() {
  const {visible, toggle} = useAlert();

  if(!visible){
    return null;
  }
  return (
    <div className="alert alert-danger" onClick={toggle}>Attention alert</div>
  )
}

export default Alert