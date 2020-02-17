import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

const log  = console.log;

class App extends Component {
    state = {
        bold: false,
        italic: false,
        underline: false,
        selectionState: '',
    };

    handleSelection = () => {

    };

    handleToolbarToggle = (evt) => {
        const name = evt.target.id;
        this.setState({[name]: !this.state[name]});

        switch (name) {
            case 'bold':
                document.execCommand('bold', false);
                break;
            case 'italic':
                document.execCommand('italic', false);
                break;
            case 'underline':
                document.execCommand('underline', false);
                break;
            default:
                return null
        }
    };

    getText() {
        getMockText().then(function (result) {
            log(result);
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>

                <main>
                    <ControlPanel toolbarToggle={this.handleToolbarToggle} {...this.state} />
                    <FileZone {...this.state} />
                </main>
            </div>
        );
    }
}

export default App;
