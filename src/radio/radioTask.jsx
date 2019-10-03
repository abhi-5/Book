import React, { Component } from 'react';
import RadioArrayForm from './form';

class RadioTask extends Component {
    state = { 
        names: ["Jack", "Steve", "William", "Kathy", "Edward"],
        namesIds : [
            { name: "Jack", id: "AB455" },
            { name: "Steve", id: "GM072" }, 
            { name: "William", id: "CX499" },
            { name: "Kathy", id: "MM746" },
            { name: "Edward", id: "KT108" }
        ],
        checked: "",
        namesRadio: null
     };
    
    constructor(props) {
        super(props);
        this.state.namesRadio = this.makeRadioStructure();
    }

    makeRadioStructure() {
        let namesRadio = {
            namesIds : this.state.namesIds,
            selectedRadio : this.state.checked,
        }
        return namesRadio;
    }

    handleRadioChange = () => {
        this.setState({ checked: this.state.namesRadio.selectedRadio });
    }

    render() { 
        let { namesRadio , checked } = this.state;
        return ( 
            <div className="container">
                <div className="row border">
                    <div className="col-3 bg-light">
                        <RadioArrayForm 
                            namesRadio={namesRadio}
                            onRadioChange={this.handleRadioChange} 
                        />
                    </div>
                    <div className="col-9">Name Checked: {checked}</div>
                </div>
            </div>
         );
    }
}
 
export default RadioTask;