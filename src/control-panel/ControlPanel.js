import React, { Component } from 'react';
import './ControlPanel.css';

const boldStyles = (selected) => {
    return {
        fontWeight: 'bold',
        backgroundColor: selected ? 'orange' : 'white'
    }
};

const italicStyles = (selected) => {
    return {
        fontStyle: 'italic',
        backgroundColor: selected ? 'orange' : 'white'
    }
};

const underlineStyles = (selected) => {
    return {
        textDecoration: 'underline',
        backgroundColor: selected ? 'orange' : 'white'
    }
};

const ControlPanel = ({toolbarToggle, bold, italic, underline}) => (
    <div id="control-panel">
        <div id="format-actions">
            <button
                style={boldStyles(bold)}
                id="bold"
                onClick={toolbarToggle}
                className="format-action"
                type="button"
            >
                B
            </button>

            <button
                id="italic"
                style={italicStyles(italic)}
                onClick={toolbarToggle}
                className="format-action"
                type="button"
            >
                I
            </button>

            <button
                id="underline"
                style={underlineStyles(underline)}
                onClick={toolbarToggle}
                className="format-action"
                type="button"
            >
                U
            </button>
        </div>
    </div>
);

export default ControlPanel;
