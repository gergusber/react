import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssCLasses = ['Modal',
        props.show === 'entering' ? 'ModalOpen' :
            props.show === 'exiting' ? 'ModalClose' : null]

    return <div className={cssCLasses.join(' ')} >
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div >
};

export default modal;
