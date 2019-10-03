import React, { Component } from 'react';
import { getQuesBank } from './quesBank';

class RctSet9A extends Component {
    state = { 
        quesBank : getQuesBank(),
        markSheet : ['','','','','','','','','','','','','','',''],
        index : 0,
        count : 1,
        option : '',
        codeType : 0,
        warning : true
     }
    
    handleNext = () => {
        console.log(this.state.markSheet)
        const { index, quesBank } = this.state;
        const i = index;
        const markSheet = [...this.state.markSheet];
       
        if(i < quesBank.length-1){
            this.setState({ index : i + 1 , 
                            count : this.state.count + 1 ,
                         })            
        }else{
            this.setState({ index: i })
        }
        this.setState({ option : markSheet[i+1] })
        console.log(this.state.option)
    }

    handlePrev = () => {
        const i = this.state.index;
        const markSheet = [...this.state.markSheet];
        if(i == 0){
            this.setState({ index: 0 })
        }else{
            this.setState({ index: i - 1,  })
        }
        this.setState({ count : this.state.count - 1, option : markSheet[i-1]  })  
    }

    handleAns = ans => {
        this.setState({ option : this.state.option = '',
                        option : this.state.option + ans.option 
                      })
        console.log(this.state.option + ans.option)
        const i = this.state.index;
        const markSheet = [...this.state.markSheet];
        markSheet[i] = this.state.option + ans.option;
        this.setState({ markSheet })

        
   }

    handleSheet = () => {
        this.setState({ codeType : 1 })
    }

    renderQues(){
        if(this.state.count === 1) return <div><button onClick={this.handleNext} className="btn btn-primary btn-md">Next Question</button></div>

        return (
            <div>
                <button onClick={this.handlePrev} className="btn btn-primary btn-md m-2">Previous Question</button>
                <button onClick={this.handleNext} className="btn btn-primary btn-md">Next Question</button>
            </div>
        )
    }


    render() { 
        const { markSheet, index } = this.state;
        const btn0 = markSheet[0] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn1 = markSheet[1] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn2 = markSheet[2] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn3 = markSheet[3] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn4 = markSheet[4] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn5 = markSheet[5] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn6 = markSheet[6] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn7 = markSheet[7] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn8 = markSheet[8] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn9 = markSheet[9] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn10 = markSheet[10] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn11 = markSheet[11] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn12 = markSheet[12] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn13 = markSheet[13] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";
        const btn14 = markSheet[14] ? "btn-secondary btn-md m-2" : "btn-warning btn-md m-2";

        if(this.state.codeType === 0) {
        return  <div className="container"><br/>
            <div className="container bg-light">
                <h3 className="text-center">General Knowledge : Assignment 4A</h3>
                <div className="row">
                    <p className="col text-left">Time : 5 mins</p>
                    <p className="col text-right">Max Score : 15</p>
                </div>
            </div><br/>
                <div className="container">
                   <button onClick={this.handleSheet} className="btn btn-primary btn-md float-right">View Marking Sheet</button>
                   <h4>Question Number : {this.state.count}</h4>
                   <h5>{ this.state.quesBank.map(data => data.text)[this.state.index] }</h5>
                   <h6 style={{cursor:'pointer'}} onClick={() => this.handleAns({option:'A'})}>A. { this.state.quesBank.map(data => data.options[0])[this.state.index] }</h6>
                   <h6 style={{cursor:'pointer'}} onClick={() => this.handleAns({option:'B'})}>B. { this.state.quesBank.map(data => data.options[1])[this.state.index] }</h6>
                   <h6 style={{cursor:'pointer'}} onClick={() => this.handleAns({option:'C'})}>C. { this.state.quesBank.map(data => data.options[2])[this.state.index] }</h6>
                   <h6 style={{cursor:'pointer'}} onClick={() => this.handleAns({option:'D'})}>D. { this.state.quesBank.map(data => data.options[3])[this.state.index] }</h6>
                   <p>Your Answer : {this.state.option}</p>
                </div>
                <div className="container">
                   {this.renderQues()}
                </div>
                   
            </div>
        }
        if(this.state.codeType === 1){
            return  <div className="container"><br/>
            <div className="container bg-light">
                <h3 className="text-center">General Knowledge : Assignment 4A</h3>
                <div className="row">
                    <p className="col text-left">Time : 5 mins</p>
                    <p className="col text-right">Max Score : 15</p>
                </div>
            </div><br/>
                
                        {/* <button  className="btn btn-warning btn-md m-2">1. {this.state.markSheet[0]}</button>
                        <button  className="btn btn-warning btn-md m-2">2. {this.state.markSheet[1]}</button>
                        <button  className="btn btn-warning btn-md m-2">3. {this.state.markSheet[2]}</button>
                        <button  className="btn btn-warning btn-md m-2">4. {this.state.markSheet[3]}</button>
                        <button  className="btn btn-warning btn-md m-2">5. {this.state.markSheet[4]}</button>
                        <button  className="btn btn-warning btn-md m-2">6. {this.state.markSheet[5]}</button>
                        <button  className="btn btn-warning btn-md m-2">7. {this.state.markSheet[6]}</button>
                        <button  className="btn btn-warning btn-md m-2">8. {this.state.markSheet[7]}</button>
                        <button  className="btn btn-warning btn-md m-2">9. {this.state.markSheet[8]}</button>
                        <button  className="btn btn-warning btn-md m-2">10. {this.state.markSheet[9]}</button>
                        <button  className="btn btn-warning btn-md m-2">11. {this.state.markSheet[10]}</button>
                        <button  className="btn btn-warning btn-md m-2">12. {this.state.markSheet[11]}</button>
                        <button  className="btn btn-warning btn-md m-2">13. {this.state.markSheet[12]}</button>
                        <button  className="btn btn-warning btn-md m-2">14. {this.state.markSheet[13]}</button>
                        <button  className="btn btn-warning btn-md m-2">15. {this.state.markSheet[14]}</button> */}

                        <button className={btn0} onChange={this.state.handleAns}>1. {markSheet[0]}</button>
                        <button className={btn1} onChange={this.state.handleAns}>2. {markSheet[1]}</button>
                        <button className={btn2} onChange={this.state.handleAns}>3. {markSheet[2]}</button>
                        <button className={btn3} onChange={this.state.handleAns}>4. {markSheet[3]}</button>
                        <button className={btn4} onChange={this.state.handleAns}>5. {markSheet[4]}</button>
                        <button className={btn5} onChange={this.state.handleAns}>6. {markSheet[5]}</button>
                        <button className={btn6} onChange={this.state.handleAns}>7. {markSheet[6]}</button>
                        <button className={btn7} onChange={this.state.handleAns}>8. {markSheet[7]}</button>
                        <button className={btn8} onChange={this.state.handleAns}>9. {markSheet[8]}</button>
                        <button className={btn9} onChange={this.state.handleAns}>10. {markSheet[9]}</button>
                        <button className={btn10} onChange={this.state.handleAns}>11. {markSheet[10]}</button>
                        <button className={btn11} onChange={this.state.handleAns}>12. {markSheet[11]}</button>
                        <button className={btn12} onChange={this.state.handleAns}>13. {markSheet[12]}</button>
                        <button className={btn13} onChange={this.state.handleAns}>14. {markSheet[13]}</button>
                        <button className={btn14} onChange={this.state.handleAns}>15. {markSheet[14]}</button> 
                     
            </div>
        }
    }
}
 
export default RctSet9A;