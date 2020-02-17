import React, { Component } from 'react';
import './FileZone.css';


const Bold = ({children}) => {
    return <span style={{fontWeight: 'bold'}}>
        {children}
    </span>
};

class FileZone extends Component {

    render() {
        return (
            <div id="file-zone">
                <div contentEditable={true} id="file">

                </div>
            </div>
        );
    }
}

export default FileZone;
