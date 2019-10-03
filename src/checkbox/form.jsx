import React, { Component } from 'react';

class CBArrayForm extends Component {

    handleChange = e => {
        const { currentTarget: input } = e;
        const { namesCB } = this.props;
        if(input.type === 'checkbox'){
            let cb = namesCB.find(n1 => n1.name === input.name);
            if(cb) cb.selected = input.checked;
        }
        this.props.onOptChange();
    }
    
    render() { 
        const { namesCB } = this.props;
        return ( 
            <div>
                <form>
                    {namesCB.map(item => (
                        <div className="form-check" key={item.name}>
                            <input 
                                value={item.selected}
                                onChange={this.handleChange}
                                id={item.name}
                                type="checkbox"
                                name={item.name}
                                checked={item.selected}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor={item.name}>
                                {item.name}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
         );
    }
}
 
export default CBArrayForm;