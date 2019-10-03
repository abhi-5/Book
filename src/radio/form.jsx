import React, { Component } from 'react';

class RadioArrayForm extends Component {
    
    handleChange = e => {
        const { currentTarget: input } = e;
        const { namesRadio } = this.props;
        namesRadio[input.name] = input.value;
        this.props.onRadioChange();
    }

    render() { 
        const { namesRadio } = this.props;
        return ( 
            <div>
                <form>
                    {namesRadio.namesIds.map(item => (                  
                    <div className="form-check" key={item.id}>
                        <input 
                            value={item.id}
                            onChange={this.handleChange}
                            id={item.id}
                            name="selectedRadio"
                            type="radio"
                            checked={item.id === namesRadio.selectedRadio}
                            className="form-check-input"
                        />
                        <label className="form-check-label" htmlFor={item.id}>
                            {item.name}
                        </label>
                    </div>
                    ))}
                </form>
            </div>
         );
    }
}
 
export default RadioArrayForm;