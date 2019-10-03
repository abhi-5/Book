import React, { Component } from 'react';
import StoreForm from './storeForm';

class StoreProd extends Component {
    state = { 
        products :	[
            {	id: "PEP110",	name: "Pepsi",	    category: "Food",	stock: "yes" },
            {	id: "CLO876",	name: "Close Up",	category: "Toothpaste",	stock: "no" },
            {	id: "PEA531",	name: "Pears",      category: "Soap",	stock: "arriving" },
            {	id: "LU7264",	name: "Lux",	    category: "Soap",	stock: "yes" },
            {	id: "COL112",	name: "Colgate",    category: "Toothpaste",	stock: "no" },
            {	id: "DM881",	name: "Dairy Milk",	category: "Food",	stock: "arriving" },
            {	id: "LI130",	name: "Liril",      category: "Soap",	stock: "yes" },
            {	id: "PPS613",	name: "Pepsodent",	category: "Toothpaste",	stock: "no" },
            {	id: "MAG441",	name: "Maggi",	    category: "Food",	stock: "arriving" },
            {	id: "PNT560",	name: "Pantene",	category: "Shampoo",	stock: "no" },
            {	id: "KK219",	name: "KitKat",	    category: "Food",	stock: "arriving" },
            {	id: "DOV044",	name: "Dove",	    category: "Soap",	stock: "yes" }
        ],
        cat: [ {id: 1, title: "Food"}, {id: 2, title: "Toothpaste"}, {id: 3, title: "Soap"}, {id: 4, title: "Shampoo"} ],
        stock: [ {id: 1, title: "yes"}, {id: 2, title: "no"}, {id: 3, title: "arriving"}],
        category: "",
        stockStatus: "",
        prodList : []
    }

    makeCbStructure(cat, category) {
        let temp = cat.map(n1 => ({
            title: n1.title,
            id: n1.id,
            selected: false
        }));
        let cnames = category.split(",");
        for( let i=0; i<cnames.length; i++){
            let obj = temp.find(n1 => n1.title === cnames[i]);
            if (obj) obj.selected = true;
        };
        console.log(this.state.prodList)
        return temp;
    }

    makeRadioStructure(stock, stockStatus) {
        let statusRadio = {
            stock: stock,
            selectedStock: stockStatus
        };
        return statusRadio;
    }

    handleOptionChange = (categoryCheckbox, statusRadio) => {
        const { products } = this.state;
        let filteredNames = categoryCheckbox.filter(n1 => n1.selected);
        let arrayNames = filteredNames.map(n1 => n1.title);
        let category = arrayNames.join(",");
        let stockStatus = statusRadio.selectedStock;
        this.setState({ category: category, stockStatus: stockStatus }) 
        console.log(arrayNames) 
         
    };   

    render() { 
        let { products, cat, category, stock, stockStatus, prodList } = this.state;
        let categoryCheckbox = this.makeCbStructure(cat, category);
        let statusRadio = this.makeRadioStructure(stock, stockStatus);
        return ( 
            <div className="container">
                <div className="row border">
                    <div className="col-3 bg-light">
                        <StoreForm 
                            products={products}
                            categoryCheckbox={categoryCheckbox}
                            statusRadio={statusRadio}
                            onOptionChange={this.handleOptionChange}
                        />
                    </div>

                    <div className="col-9">
                        Category : {category}
                        <br/>
                        {  stockStatus === '' 
                            ? <div> Stock Status : All </div> 
                            : <div> Stock Status : {stockStatus} </div>
                        }
                        
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
 
export default StoreProd;