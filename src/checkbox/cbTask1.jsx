import React, { Component } from 'react';
import CBArrayForm from './form';

class CbTask1 extends Component {
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
        namesCB: null
     };

    constructor(props) {
        super(props);
        this.state.namesCB = this.makeCbStructure();
    }

    makeCbStructure() {
        let temp = this.state.namesIds.map(n1 => ({
            name: n1.name,
            id: n1.id,
            selected: false
        }));
        let cnames = this.state.checked.split(", ");
        for(let i=0; i<cnames.length; i++) {
            let obj = temp.find(n1 => n1.id === cnames[i]);
            if(obj) obj.selected = true;
        }
        return temp;
    }

    handleOptChange = () => {
        let { namesCB } = this.state;
        let filteredNames = namesCB.filter(n1 => n1.selected);
        let arrayNames = filteredNames.map(n1 => n1.id);
        let cnames = arrayNames.join(", ");
        this.setState({ checked: cnames })
    }

    render() { 
        let { namesCB , checked } = this.state;
        return ( 
            <div className="container">
                <div className="row border">
                    <div className="col-3 bg-light">
                        <CBArrayForm 
                            namesCB={namesCB}
                            onOptChange={this.handleOptChange} 
                        />
                    </div>
                    <div className="col-9">Name Checked: {checked}</div>
                </div>
            </div>
         );
    }
}
 
export default CbTask1;