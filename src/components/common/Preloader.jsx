import React from 'react';

let Preloader = () => {
    return <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border text-secondary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}

export default Preloader;