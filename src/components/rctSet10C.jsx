import React, { Component } from 'react';
import { getQues } from './ques';

class RctSet10C extends Component {
    state = { 
        ques : getQues(),
        view : 0,
        paper : { name : '', question : [] },
        papers : [],
        quesSet : { set : '' },
        questions : []
    }

    handleChange = e => {
        const { currentTarget : input } = e;
        const paper = {...this.state.paper };
        paper[input.name] = input.value;
        if(input.checked){
            paper.question.push(input.value)
        }else{
            const index = paper.question.indexOf(input.value)
            paper.question.splice(index, 1)
        }
        this.setState({ paper })

        const quesSet = {...this.state.quesSet};
        quesSet[input.name] = input.value;
        this.setState({ quesSet });
        try{
        const obj = this.state.papers.find(val => val.name === input.value )
        console.log(obj.question)
        this.setState({ questions: obj.question })
        } catch(ex){}
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.paper);
        if(this.state.paper.name === '' || this.state.paper.question.length === 0){
            alert('Please Select Valid Input');
        }else{
            this.state.papers.push(this.state.paper)
            this.setState({ papers : this.state.papers , 
                            paper : this.state.paper = { name : '', question : [] } ,
                            view : 0 })
        }

    }

    handleQuesBank = () => {
        this.setState({ view : 1 })
    }
    handleCreatePaper = () => {
        this.setState({ view : 2 })
    }
    handleViewPaper = () => {
        this.setState({ view : 3, quesSet : { set : '' }, questions : [] })
    }
    handleHome = () => {
        this.setState({ view : 0 })
    }

    render() { 
        if(this.state.view === 0){
        return ( 
            <div className="container"><br/>
                <button onClick={this.handleQuesBank} className="btn btn-primary btn-sm m-3">Question Bank</button>
                <button onClick={this.handleCreatePaper} className="btn btn-primary btn-sm m-3">Create Question Paper</button>
                <button onClick={this.handleViewPaper} className="btn btn-primary btn-sm m-3">View Question Papers</button>

            </div>
         );
        }
        if(this.state.view === 1){
            return (
                <div className="container"><br/>
                    <button onClick={this.handleHome} className="btn btn-primary btn-sm">Home</button>
                    <h4>Question Bank</h4>
                {this.state.ques.map((data,i) => {
                 return (
                    <div key={i}>
                    <h6> Q {data.id}. {data.qnText} </h6>
                      <div className="container">
                        <h6> A. {data.A} </h6>
                        <h6> B. {data.B} </h6>
                        <h6> C. {data.C} </h6>
                        <h6> D. {data.D} </h6>
                        <h6> Answer. {data.ans} </h6>
                      </div><br/>
                    </div>
                    )
                 })}

                </div>
            );
        }
        if(this.state.view === 2){
            return (
                <div className="container"><br/>
                    <button onClick={this.handleHome} className="btn btn-primary btn-sm">Home</button>
                    <form ref="myForm" className="myForm">
                        <div className="form-group">
                            <label>Name of Question Paper</label>
                            <input 
                                value={this.state.paper.name}
                                onChange={this.handleChange}  
                                name="name"
                                id="name" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        {this.state.ques.map((data,i) => {
                            return (
                            <div className="form-check" key={i}>
                                <input
                                    value={data.qnText}
                                    onChange={this.handleChange}
                                    id="selected"
                                    name="selected"
                                    type="checkbox"
                                    className="form-check-input"
                                />
                                <label className="form-check-label" htmlFor="paper">
                                    {data.id}. {data.qnText}
                                </label>
                            </div>
                            );
                        })}

                    </form>
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                </div>
            );
        }
        if(this.state.view === 3){
            if(this.state.quesSet.set === '' || this.state.questions.length === 0) {
            return (
                <div className="container"><br/>
                    <button onClick={this.handleHome} className="btn btn-primary btn-sm">Home</button><br/><br/>
    
                            <select 
                                value={this.state.quesSet.set}
                                onChange={this.handleChange}
                                id="set"
                                name="set"
                                className="form-control"
                            >
                                <option value="" selected > Choose Paper</option>
                                {this.state.papers.map((data,i) => {
                                   return (
                                   <option>{data.name}</option>
                                   );
                                })}
                            </select>
                            </div>
            );
            } else {
                return (
                    <div className="container"><br/>
                    <button onClick={this.handleHome} className="btn btn-primary btn-sm">Home</button><br/><br/>
                            <select 
                                value={this.state.quesSet.set}
                                onChange={this.handleChange}
                                id="set"
                                name="set"
                                className="form-control"
                            >
                                <option value="" selected > Choose Paper</option>
                                {this.state.papers.map((data,i) => {
                                   return (
                                   <option>{data.name}</option>
                                   );
                                })}
                            </select>
                            <h4>Question Paper</h4>
                            <h5>Name : {this.state.quesSet.set} </h5> 
                            {this.state.questions.map((data,i) => {
                                    return (
                                    <div className="container"> Q{i+1}. {data} </div>
                                    );
                            })}                                                                                                
                       </div>
                    )
            }
                            
            
        }
    }
}
 
export default RctSet10C;