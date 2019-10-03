import React, { Component } from 'react';

class StoreForm extends Component { 
   
    handleChange = e => {
        const { currentTarget: input } = e;
        const { categoryCheckbox, statusRadio } = this.props;
        if(input.type === "checkbox") {
            let cb = categoryCheckbox.find(n1 => n1.title === input.name);
            if (cb) cb.selected = input.checked;
            console.log(cb)
        } else if(input.name === "selectedStock") {
            statusRadio[input.name] = input.value; 
            console.log(input.value)
        }
     
        this.props.onOptionChange(categoryCheckbox, statusRadio);
    }

    render() { 
        const { categoryCheckbox, statusRadio } = this.props;

        return ( 
            <div>
                <form>
                    Category <br/>
                    {categoryCheckbox.map(item => (
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
                                {item.title}
                            </label>

                        </div>
                    ))}
                    Stock Status
                    <br/>
                        {statusRadio.stock.map(item => (
                            <div className="form-check" key={item.title}>
                            <input 
                                value={item.title}
                                onChange={this.handleChange}
                                id={item.title}
                                type="radio"
                                name="selectedStock"
                                checked={item.title === statusRadio.selectedStock}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor={item.title}>
                                {item.title}
                            </label>

                            </div>
                        ))}
                    </form>
            </div>
         );
    }
}
 
export default StoreForm;