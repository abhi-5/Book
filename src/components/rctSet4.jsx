import React, { Component } from 'react';

class RctSet4 extends Component {
    state = { 
        secA : [
             { roll: 1, sec:'A', name: 'Jack', maths: 67, eng: 71, comp: 61 },
             { roll: 2, sec:'A', name: 'Mary', maths: 79, eng: 74, comp: 51 },
             { roll: 3, sec:'A', name: 'Steve', maths: 61, eng: 78, comp: 46 },
             { roll: 4, sec:'A', name: 'Bob', maths: 75, eng: 67, comp: 68 },
             { roll: 5, sec:'A', name: 'Kathy', maths: 70, eng: 63, comp: 74 },
             { roll: 6, sec:'A', name: 'Meg', maths: 46, eng: 61, comp: 63 },
             { roll: 7, sec:'A', name: 'Tom', maths: 72, eng: 85, comp: 65 },
             { roll: 8, sec:'A', name: 'David', maths: 85, eng: 71, comp: 85 },
        ],
        secB : [
             { roll: 1, sec:'B', name: 'Arthur', maths: 67, eng: 55, comp: 78 },
             { roll: 2, sec:'B', name: 'Kevin', maths: 69, eng: 64, comp: 68 },
             { roll: 3, sec:'B', name: 'Harry', maths: 61, eng: 88, comp: 80 },
             { roll: 4, sec:'B', name: 'Martin', maths: 65, eng: 60, comp: 48 },
             { roll: 5, sec:'B', name: 'Pam', maths: 80, eng: 53, comp: 54 },
             { roll: 6, sec:'B', name: 'Nicky', maths: 76, eng: 71, comp: 83 },
             { roll: 7, sec:'B', name: 'Robert', maths: 82, eng: 65, comp: 75 },
             { roll: 8, sec:'B', name: 'Susan', maths: 65, eng: 81, comp: 50 },
        ],
        
        click : 0    
     }

    handleClick1 = () => {
        this.setState({ click : 1})
        const total = this.state.secA.map(data => {
            const arr = { roll: data.roll , sec: data.sec, name: data.name, maths: data.maths, eng: data.eng, comp: data.comp,
                               total: data.maths+data.eng+data.comp } 
            return arr;
        })
        const sortTotal = total.sort((a,b) => b.total > a.total);
        this.setState({ secA : sortTotal });
    }

    handleClick2 = () => {
        this.setState({ click : 2})
        const total = this.state.secB.map(data => {
            const arr = { roll: data.roll , sec: data.sec, name: data.name, maths: data.maths, eng: data.eng, comp: data.comp,
                               total: data.maths+data.eng+data.comp } 
            return arr;
        })
        const sortTotal = total.sort((a,b) => b.total > a.total);
        this.setState({ secB : sortTotal });
    }

    handleClick3 = () => {
        this.setState({ click : 3})
    }

    handleClick4 = () => {
        this.setState({ click : 4})
        this.state.secA.sort((a,b) => a.name > b.name );
        this.setState({ secA : this.state.secA })
    }
    handleClick5 = () => {
        this.setState({ click : 5})
        this.state.secB.sort((a,b) => a.name > b.name );
        this.setState({ secB : this.state.secB })
    }
    handleClick6 = () => {
        this.setState({ click : 6})
    } 

    render() { 
        if(this.state.click === 0){
            return <div className="container"><br/>
                      <div className="text-center">
                      <button onClick={this.handleClick1} className="btn btn-primary m-3">SecA by Total</button>
                      <button onClick={this.handleClick2} className="btn btn-primary m-3">SecB by Total</button>
                      <button onClick={this.handleClick3} className="btn btn-primary m-3">All Sec by Total</button>
                      <button onClick={this.handleClick4} className="btn btn-primary m-3">SecA by Name</button>
                      <button onClick={this.handleClick5} className="btn btn-primary m-3">SecB by Name</button>
                      <button onClick={this.handleClick6} className="btn btn-primary m-3">All Sec by Name</button>
                      </div>
            </div>
        }if(this.state.click === 1){
            return <div className="container"><br/>
                      <div className="text-center">
                      <button onClick={this.handleClick1} className="btn btn-primary m-3">SecA by Total</button>
                      <button onClick={this.handleClick2} className="btn btn-primary m-3">SecB by Total</button>
                      <button onClick={this.handleClick3} className="btn btn-primary m-3">All Sec by Total</button>
                      <button onClick={this.handleClick4} className="btn btn-primary m-3">SecA by Name</button>
                      <button onClick={this.handleClick5} className="btn btn-primary m-3">SecB by Name</button>
                      <button onClick={this.handleClick6} className="btn btn-primary m-3">All Sec by Name</button>
                      </div>
                    <h4 className="text-center">Performance Report for Section A - Sorted By Total</h4>
                      <div className="row bg-dark text-white">
                        <div className="col-1 border">RollNo</div>
                        <div className="col-1 border">Section</div>
                        <div className="col-2 border">Name</div>
                        <div className="col-2 border">Maths</div>
                        <div className="col-2 border">English</div>
                        <div className="col-2 border">Computers</div>
                        <div className="col-2 border">Total</div>
                        </div>
                        {this.state.secA.map(data=> (
                            <div className="row">
                            <div className="col-1 border bg-light">{data.roll}</div>
                            <div className="col-1 border bg-light">{data.sec}</div>
                            <div className="col-2 border">{data.name}</div>
                            <div className="col-2 border">{data.maths}</div>
                            <div className="col-2 border">{data.eng}</div>
                            <div className="col-2 border">{data.comp}</div>
                            <div className="col-2 border">{data.total}</div>
                        </div>
                    ))}
            </div>
        }if(this.state.click === 2){
            return <div className="container"><br/>
                      <div className="text-center">
                      <button onClick={this.handleClick1} className="btn btn-primary m-3">SecA by Total</button>
                      <button onClick={this.handleClick2} className="btn btn-primary m-3">SecB by Total</button>
                      <button onClick={this.handleClick3} className="btn btn-primary m-3">All Sec by Total</button>
                      <button onClick={this.handleClick4} className="btn btn-primary m-3">SecA by Name</button>
                      <button onClick={this.handleClick5} className="btn btn-primary m-3">SecB by Name</button>
                      <button onClick={this.handleClick6} className="btn btn-primary m-3">All Sec by Name</button>
                      </div>
                    <h4 className="text-center">Performance Report for Section B - Sorted By Total</h4>
                      <div className="row bg-dark text-white">
                        <div className="col-1 border">RollNo</div>
                        <div className="col-1 border">Section</div>
                        <div className="col-2 border">Name</div>
                        <div className="col-2 border">Maths</div>
                        <div className="col-2 border">English</div>
                        <div className="col-2 border">Computers</div>
                        <div className="col-2 border">Total</div>
                        </div>
                        {this.state.secB.map(data=> (
                            <div className="row">
                            <div className="col-1 border bg-light">{data.roll}</div>
                            <div className="col-1 border bg-light">{data.sec}</div>
                            <div className="col-2 border">{data.name}</div>
                            <div className="col-2 border">{data.maths}</div>
                            <div className="col-2 border">{data.eng}</div>
                            <div className="col-2 border">{data.comp}</div>
                            <div className="col-2 border">{data.total}</div>
                        </div>
                    ))}
            </div>
        }if(this.state.click === 3){
            return <div className="container"><br/>
                      <div className="text-center">
                      <button onClick={this.handleClick1} className="btn btn-primary m-3">SecA by Total</button>
                      <button onClick={this.handleClick2} className="btn btn-primary m-3">SecB by Total</button>
                      <button onClick={this.handleClick3} className="btn btn-primary m-3">All Sec by Total</button>
                      <button onClick={this.handleClick4} className="btn btn-primary m-3">SecA by Name</button>
                      <button onClick={this.handleClick5} className="btn btn-primary m-3">SecB by Name</button>
                      <button onClick={this.handleClick6} className="btn btn-primary m-3">All Sec by Name</button>
                      </div>
                      <h4 className="text-center">Performance Report for All Section - Sorted By Total</h4>
                      <div className="row bg-dark text-white">
                        <div className="col-1 border">RollNo</div>
                        <div className="col-1 border">Section</div>
                        <div className="col-2 border">Name</div>
                        <div className="col-2 border">Maths</div>
                        <div className="col-2 border">English</div>
                        <div className="col-2 border">Computers</div>
                        <div className="col-2 border">Total</div>
                        </div>
                        {[...this.state.secA,...this.state.secB].map(data=> (
                            <div className="row">
                            <div className="col-1 border bg-light">{data.roll}</div>
                            <div className="col-1 border bg-light">{data.sec}</div>
                            <div className="col-2 border">{data.name}</div>
                            <div className="col-2 border">{data.maths}</div>
                            <div className="col-2 border">{data.eng}</div>
                            <div className="col-2 border">{data.comp}</div>
                            <div className="col-2 border">{data.total}</div>
                        </div>
                    ))}
            </div>
        }if(this.state.click === 4){
            return <div className="container"><br/>
                      <div className="text-center">
                      <button onClick={this.handleClick1} className="btn btn-primary m-3">SecA by Total</button>
                      <button onClick={this.handleClick2} className="btn btn-primary m-3">SecB by Total</button>
                      <button onClick={this.handleClick3} className="btn btn-primary m-3">All Sec by Total</button>
                      <button onClick={this.handleClick4} className="btn btn-primary m-3">SecA by Name</button>
                      <button onClick={this.handleClick5} className="btn btn-primary m-3">SecB by Name</button>
                      <button onClick={this.handleClick6} className="btn btn-primary m-3">All Sec by Name</button>
                      </div>
                      <h4 className="text-center">Performance Report for Section A - Sorted By Name</h4>
                      <div className="row bg-dark text-white">
                        <div className="col-1 border">RollNo</div>
                        <div className="col-1 border">Section</div>
                        <div className="col-2 border">Name</div>
                        <div className="col-2 border">Maths</div>
                        <div className="col-2 border">English</div>
                        <div className="col-2 border">Computers</div>
                        <div className="col-2 border">Total</div>
                        </div>
                        {this.state.secA.map(data=> (
                            <div className="row">
                            <div className="col-1 border bg-light">{data.roll}</div>
                            <div className="col-1 border bg-light">{data.sec}</div>
                            <div className="col-2 border">{data.name}</div>
                            <div className="col-2 border">{data.maths}</div>
                            <div className="col-2 border">{data.eng}</div>
                            <div className="col-2 border">{data.comp}</div>
                            <div className="col-2 border">{data.maths+data.eng+data.comp}</div>
                        </div>
                    ))}
            </div>
        }if(this.state.click === 5){
            return <div className="container"><br/>
                      <div className="text-center"> 
                      <button onClick={this.handleClick1} className="btn btn-primary m-3">SecA by Total</button>
                      <button onClick={this.handleClick2} className="btn btn-primary m-3">SecB by Total</button>
                      <button onClick={this.handleClick3} className="btn btn-primary m-3">All Sec by Total</button>
                      <button onClick={this.handleClick4} className="btn btn-primary m-3">SecA by Name</button>
                      <button onClick={this.handleClick5} className="btn btn-primary m-3">SecB by Name</button>
                      <button onClick={this.handleClick6} className="btn btn-primary m-3">All Sec by Name</button>
                      </div>
                      <h4 className="text-center">Performance Report for Section B - Sorted By Name</h4>
                      <div className="row bg-dark text-white">
                        <div className="col-1 border">RollNo</div>
                        <div className="col-1 border">Section</div>
                        <div className="col-2 border">Name</div>
                        <div className="col-2 border">Maths</div>
                        <div className="col-2 border">English</div>
                        <div className="col-2 border">Computers</div>
                        <div className="col-2 border">Total</div>
                        </div>
                        {this.state.secB.map(data=> (
                            <div className="row">
                            <div className="col-1 border bg-light">{data.roll}</div>
                            <div className="col-1 border bg-light">{data.sec}</div>
                            <div className="col-2 border">{data.name}</div>
                            <div className="col-2 border">{data.maths}</div>
                            <div className="col-2 border">{data.eng}</div>
                            <div className="col-2 border">{data.comp}</div>
                            <div className="col-2 border">{data.maths+data.eng+data.comp}</div>
                        </div>
                    ))}
            </div>
        }if(this.state.click === 6){
            return <div className="container"><br/>
                      <div className="text-center">
                      <button onClick={this.handleClick1} className="btn btn-primary m-3">SecA by Total</button>
                      <button onClick={this.handleClick2} className="btn btn-primary m-3">SecB by Total</button>
                      <button onClick={this.handleClick3} className="btn btn-primary m-3">All Sec by Total</button>
                      <button onClick={this.handleClick4} className="btn btn-primary m-3">SecA by Name</button>
                      <button onClick={this.handleClick5} className="btn btn-primary m-3">SecB by Name</button>
                      <button onClick={this.handleClick6} className="btn btn-primary m-3">All Sec by Name</button>
                      </div>
                       <h4 className="text-center">Performance Report for All Section - Sorted By Name</h4>
                      <div className="row bg-dark text-white">
                        <div className="col-1 border">RollNo</div>
                        <div className="col-1 border">Section</div>
                        <div className="col-2 border">Name</div>
                        <div className="col-2 border">Maths</div>
                        <div className="col-2 border">English</div>
                        <div className="col-2 border">Computers</div>
                        <div className="col-2 border">Total</div>
                        </div>
                        {[...this.state.secA,...this.state.secB].map(data=> (
                            <div className="row">
                            <div className="col-1 border bg-light">{data.roll}</div>
                            <div className="col-1 border bg-light">{data.sec}</div>
                            <div className="col-2 border">{data.name}</div>
                            <div className="col-2 border">{data.maths}</div>
                            <div className="col-2 border">{data.eng}</div>
                            <div className="col-2 border">{data.comp}</div>
                            <div className="col-2 border">{data.total}</div>
                        </div>
                    ))}
            </div>
        }
    }
}
 
export default RctSet4;