import React, { Component } from 'react';

class RadioProd extends Component {
    state = { 
        products :	[
            {	id:	"PEP110",	name:"Pepsi",	    category:"Food",	    stock:	'true'	},
            {	id:	"CLO876",	name:"Close	Up",    category:"Toothpaste",	stock:	'false'	},
            {	id:	"PEA531",	name:"Pears",  	    category:"Soap",	stock:	'true'	},
            {	id:	"LU7264",	name:"Lux",         category:"Soap",	stock:	'false'	},
            {	id:	"COL112",	name:"Colgate",	    category:"Toothpaste",	stock:	'true'	},
            {	id:	"DM881",	name:"Dairy	Milk", 	category:"Food",	stock:	'false'	},
            {	id:	"LI130",	name:"Liril",	    category:"Soap",	stock:	'true'	},
            {	id:	"PPS613",	name:"Pepsodent",	category:"Toothpaste",	stock:	'false'	},
            {	id:	"MAG441",	name:"Maggi",	    category:"Food",	stock:	'true'	}
        ],
        category : [
            { id: 1, title: "Food" },
            { id: 2, title: "Toothpaste" },
            { id: 3, title: "Soap" }
        ],
        checked: "Soap",
        namesRadio: null,
        prodList: []
    }

    constructor(props) {
        super(props);
        this.state.namesRadio = this.makeRadioStructure();
    }

    makeRadioStructure() {
        const { checked } = this.state;
        let namesRadio = {
            category : this.state.category,
            selectedRadio : this.state.checked,
        }

        if(checked){
            console.log(checked)
            const prod = this.state.products.filter(data => data.category === checked);
            this.state.prodList = prod;
            this.setState({ prodList : this.state.prodList });
        }
        return namesRadio;
    }

    handleRadioChange = () => {
        this.setState({ checked: this.state.namesRadio.selectedRadio });
    }

    handleChange = e => {
        const { currentTarget: input } = e;
        const { namesRadio } = this.state;
        namesRadio[input.name] = input.value;
        const prod = this.state.products.filter(data => data.category === input.value);
        this.state.prodList = prod;
        this.setState({ prodList : this.state.prodList });

        this.handleRadioChange();
    }

    render() { 
        const { namesRadio, checked, prodList } = this.state;
        return ( 
            <div className="container"> 
                <div className="row border">
                    <div className="col-3 bg-light">
                    <form>
                        {namesRadio.category.map(item => (                  
                        <div className="form-check" key={item.id}>
                            <input 
                                value={item.title}
                                onChange={this.handleChange}
                                id={item.id}
                                name="selectedRadio"
                                type="radio"
                                checked={item.title === namesRadio.selectedRadio}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor={item.id}>
                                {item.title}
                            </label>
                        </div>
                        ))}
                    </form>
                    </div>
                        <div className="col-9">Selected Products : {checked}<br/>
                            {this.state.prodList.map(data => {
                                return(
                                <div className="row bg-light">
                                    <div className="col-3">{data.name}</div>
                                    <div className="col-3">{data.category}</div>
                                    <div className="col-3">{data.id}</div>
                                    <div className="col-2">{data.stock}</div>
                                </div>
                                )
                            })}
                                
                               
                        </div>
                </div>
            </div>
         );
    }
}
 
export default RadioProd;