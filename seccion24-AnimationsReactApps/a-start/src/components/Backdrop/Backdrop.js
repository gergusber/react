import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssCLasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose']
    return <div className={cssCLasses.join(' ')}></div>;
}

export default backdrop;