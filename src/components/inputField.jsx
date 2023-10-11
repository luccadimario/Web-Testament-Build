import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {locationDNE} from '../App';
class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        function _RenderLocVer() {
            if(locationDNE) {
                console.log(locationDNE);
                return <h6>The page entered does not exist, please try again.</h6>;
            }
            return;
        }
        const RenderLocVer = _RenderLocVer.bind(this);
        return(
            <div><TextField
                label="Page Number ex. 9"
                onChange={this.handleChange}/>
                <br/>
                <a
                href = {"/" + this.state.value}>
                    <button 
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    variant="contained">
                        Take Me There
                    </button>
                </a>
                <br/>
                <RenderLocVer/>
            </div>
        )
    }
    


}
export default InputField;