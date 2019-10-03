import React, { Component } from 'react';

class RctSet10A extends Component {
    state = { 
        question : {
            ques: '', optA: '', optB: '', optC: '', optD: '', ans: ''
        },
        questions : [],
        errors : {},
        index : '',
        view : 0,
    }

    validate = () => {
        const errors = {};
        const { question } = this.state;
        if(question.ques.trim() === ''){
            errors.ques = 'Input is Required';
        }
        if(question.optA.trim() === ''){
            errors.optA = 'Input is Required';
        }
        if(question.optB.trim() === ''){
            errors.optB = 'Input is Required';
        }
        if(question.optC.trim() === ''){
            errors.optC = 'Input is Required';
        }
        if(question.optD.trim() === ''){
            errors.optD = 'Input is Required';
        }
        if(question.ans.trim() === ''){
            errors.ans = 'Input is Required';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleChange = e => {
        const { currentTarget : input } = e;
        const question = {...this.state.question };
        question[input.name] = input.value;
        this.setState({ question })
    } 
 
    handleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} })
        if (errors) return;

        this.state.questions.push(this.state.question)
        this.setState({ questions : this.state.questions, view : 0 })
        console.log(this.state.questions)
    }

    handleEdit = (data) => { 
        const index = this.state.questions.findIndex( val => val === data)
        console.log(index) 
        this.setState({  
             index : index,
             question : data,
             view : 3 
        }); 
    } 

    handleUpdate = (e) => {
        e.preventDefault();
        const index = this.state.index ;
        const questions = [...this.state.questions];
        questions[index] = this.state.question;
        this.setState({questions });
        this.setState({ 
            question : this.state.question = {} ,
            view : 0 
        })
    }

    handleDelete = (data) => {
        this.setState({ questions : this.state.questions.filter( val => val !== data)})
    }

    handleQuestion = () => {
        this.setState({ view : 1, question: this.state.question= { ques: '', optA: '', optB: '', optC: '', optD: '', ans: '' } })

    }
    handleQuesBank = () => {
        this.setState({ view : 2 })
    }
    handleHome = () => {
        this.setState({ view : 0  })
    }

    renderQuesBank(){
        if(this.state.questions.length === 0) return <div><h5>No questions have been added so far</h5></div>

        return (
            <div >
             {this.state.questions.map((data,i) => {
                 return (
                    <div key={i}>
                    <h6> Q {i+1}. {data.ques}
                        <button onClick={() => this.handleEdit(data)} className="btn btn-warning btn-sm m-3">Edit</button>
                        <button onClick={() => this.handleDelete(data)} className="btn btn-warning btn-sm ">Delete</button>
                    </h6>
                      <div className="container">
                        <h6> A. {data.optA} </h6>
                        <h6> B. {data.optB} </h6>
                        <h6> C. {data.optC} </h6>
                        <h6> D. {data.optD} </h6>
                        <h6> Answer. {data.ans} </h6>
                      </div>
                    </div>
                 )
             })}
            </div>
        );
    }

    render() { 
        const { question, errors } = this.state;

        if(this.state.view === 0){
            return(
            <div className="container"><br/>
               <button onClick={this.handleQuestion} className="btn btn-primary btn-md m-3">Add Question</button>
               <button onClick={this.handleQuesBank} className="btn btn-primary btn-md m-3">Question Bank</button>
            </div>
         );
        }
        if(this.state.view === 1){

            return(
                <div className="container">
                    <button onClick={this.handleHome} className="btn btn-primary btn-sm">Home</button><br/>
                <form ref="myForm" className="myForm">
                    <div className="form-group">
                        <label>Question</label>
                        <input 
                            value={question.ques}
                            onChange={this.handleChange}  
                            name="ques"
                            id="ques" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.ques && <div className="alert alert-danger">{errors.ques}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option A</label>
                        <input 
                            value={question.optA}
                            onChange={this.handleChange}  
                            name="optA"
                            id="optA" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optA && <div className="alert alert-danger">{errors.optA}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option B</label>
                        <input 
                            value={question.optB}
                            onChange={this.handleChange}  
                            name="optB"
                            id="optB" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optB && <div className="alert alert-danger">{errors.optB}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option C</label>
                        <input 
                            value={question.optC}
                            onChange={this.handleChange}  
                            name="optC"
                            id="optC" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optC && <div className="alert alert-danger">{errors.optC}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option D</label>
                        <input 
                            value={question.optD}
                            onChange={this.handleChange}  
                            name="optD"
                            id="optD" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optD && <div className="alert alert-danger">{errors.optD}</div> }
                    </div>
                    <div className="form-group">
                        <label>Correct Option</label>
                        <input 
                            value={question.ans}
                            onChange={this.handleChange}  
                            name="ans"
                            id="ans" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.ans && <div className="alert alert-danger">{errors.ans}</div> }
                    </div>
                </form>
                <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                </div>
            )
        }
        if(this.state.view === 2){
            return (
                <div className="container"><br/>
                <button onClick={this.handleHome} className="btn btn-primary btn-md">Home</button>
                    <h4>Question Bank</h4>
                    {this.renderQuesBank()}
                </div>
            )
        }
        if(this.state.view === 3){

            return(
                <div className="container">
                    <button onClick={this.handleHome} className="btn btn-primary btn-sm">Home</button><br/>
                <form ref="myForm" className="myForm">
                    <div className="form-group">
                        <label>Question</label>
                        <input 
                            value={question.ques}
                            onChange={this.handleChange}  
                            name="ques"
                            id="ques" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.ques && <div className="alert alert-danger">{errors.ques}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option A</label>
                        <input 
                            value={question.optA}
                            onChange={this.handleChange}  
                            name="optA"
                            id="optA" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optA && <div className="alert alert-danger">{errors.optA}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option B</label>
                        <input 
                            value={question.optB}
                            onChange={this.handleChange}  
                            name="optB"
                            id="optB" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optB && <div className="alert alert-danger">{errors.optB}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option C</label>
                        <input 
                            value={question.optC}
                            onChange={this.handleChange}  
                            name="optC"
                            id="optC" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optC && <div className="alert alert-danger">{errors.optC}</div> }
                    </div>
                    <div className="form-group">
                        <label>Option D</label>
                        <input 
                            value={question.optD}
                            onChange={this.handleChange}  
                            name="optD"
                            id="optD" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.optD && <div className="alert alert-danger">{errors.optD}</div> }
                    </div>
                    <div className="form-group">
                        <label>Correct Option</label>
                        <input 
                            value={question.ans}
                            onChange={this.handleChange}  
                            name="ans"
                            id="ans" 
                            type="text" 
                            className="form-control" 
                        />
                        { errors.ans && <div className="alert alert-danger">{errors.ans}</div> }
                    </div>
                </form>
                <button onClick={this.handleUpdate} className="btn btn-primary btn-sm">Edit</button>
                </div>
            )
        }

    }
}
 
export default RctSet10A;