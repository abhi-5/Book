import React, { Component } from 'react';

class Form extends Component {
    handleChange = e => {
        const { currentTarget: input } = e;
        const { namesCheckbox, sportsRadio } = this.props;
        if(input.type === "checkbox") {
            let cb = namesCheckbox.find(n1 => n1.name === input.name);
            if (cb) cb.selected = input.checked;
        } else if(input.name === "selectedSport") {
            sportsRadio[input.name] = input.value;
        }
        this.props.onOptionChange(namesCheckbox, sportsRadio);
    }

    render() { 
        const { namesCheckbox, sportsRadio } = this.props;

        return ( 
            <div>
                <form>
                    Choose Names <br/>
                    {namesCheckbox.map(item => (
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
                    Select Sport 
                    <br/>
                        {sportsRadio.sports.map(item => (
                            <div className="form-check" key={item}>
                            <input 
                                value={item}
                                onChange={this.handleChange}
                                id={item}
                                type="radio"
                                name="selectedSport"
                                checked={item === sportsRadio.selectedSport}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor={item}>
                                {item}
                            </label>

                            </div>
                        ))}
                </form>

            </div>
         );
    }
}
 
export default Form;