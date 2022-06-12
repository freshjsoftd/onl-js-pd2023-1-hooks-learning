import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontSize: '30px',
  cursor: 'pointer',
}

function TypeProps({func, count, string, bool}) {

  const log = () => {
    console.log(`${string}`);
  }

  return (
    <div 
      className='prop-types'
      style={styles}
      onClick={log}
      >
      {string} TypeProps
      </div>
  )
}

TypeProps.propTypes = {
  func: PropTypes.func,
  count: PropTypes.number.isRequired,
  string: PropTypes.string,
  bool: PropTypes.bool,
}

TypeProps.defaultProps = {
  string: 'Hello'
}

export default TypeProps;
