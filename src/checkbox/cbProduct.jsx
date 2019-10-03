import React, { Component } from 'react';

class CBProduct extends Component {
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
        category: [ 
            { title: "Food" , id: 'Food'},
            { title: "Toothpaste", id: 'Toothpaste'},
            { title: "Soap", id: 'Soap'}
        ],
        checked: 'Food',
        namesCB: null,
        prodList: [],
        
    };

    constructor(props) {
        super(props);
        this.state.namesCB = this.makeCbStructure();       
    }

    makeCbStructure() {
        const { checked } = this.state; 
        let temp = this.state.category.map(n1 => ({
            id: n1.id,
            title: n1.title,
            selected: false
        }));
        let cnames = this.state.checked.split(", ");
        for(let i=0; i<cnames.length; i++) {
            let obj = temp.find(n1 => n1.title === cnames[i]);
            if(obj) obj.selected = true;
        }
        if(checked){
            console.log(checked)
            const prod = this.state.products.filter(data => data.category === checked);
            let cb = this.state.prodList.concat(prod)
            console.log(cb)
            this.setState({ prodList: this.state.prodList = cb })
        }
        console.log(this.state.prodList)
        return temp;
    }

    handleOptChange = () => {
        console.log(this.state.prodList)
        let { namesCB } = this.state;
        let filteredNames = namesCB.filter(n1 => n1.selected);
        let arrayNames = filteredNames.map(n1 => n1.title);
        let cnames = arrayNames.join(", ");
        this.setState({ checked: cnames });
        
   }

    handleChange = e => {
        
        console.log(this.state.namesCB)
        const { currentTarget: input } = e;
        const { namesCB } = this.state;
        if(input.type === 'checkbox'){
            let cb = namesCB.find(n1 => n1.title === input.name);
            if(cb) cb.selected = input.checked;
        }
        console.log(input.checked)
        console.log(input.name)
        
        if(input.checked === true){
            const prod = this.state.products.filter(data => data.category === input.name);
            let cb = this.state.prodList.concat(prod)
            console.log(cb)
            this.setState({ prodList: cb })
        }
        if(input.checked === false){
            const abc = this.state.prodList.filter(data => data.category !== input.name)
            this.setState({ prodList : abc})
        }
        this.handleOptChange();
    }

    
    render() { 
        let { namesCB , checked, category ,cbProd, prodList} = this.state;
        return ( 
            <div className="container"> 
          
                <div className="row border">
                    <div className="col-3 bg-light">
                    <form>
                        {namesCB.map(item => (
                            <div className="form-check" key={item.title}>
                                <input 
                                    value={item.selected}
                                    onChange={this.handleChange}
                                    id={item.title}
                                    type="checkbox"
                                    name={item.title}
                                    checked={item.selected}
                                    className="form-check-input"
                                />
                                <label className="form-check-label" htmlFor={item.title}>
                                    {item.title }
                                </label>
                            </div>
                        ))}
                    </form>
                    </div>
                    <div className="col-9">Selected Products : {checked}<br/>
                   
                            {prodList.map((data,i) =>  {
                                return (
                                <div className="row border bg-light" key={i}>
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
 
export default CBProduct;