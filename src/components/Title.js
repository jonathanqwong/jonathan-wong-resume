import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
  return (
    <div className="title"> 
      <Typography component="h2" variant="h2" color="primary" gutterBottom>
        {props.children}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;