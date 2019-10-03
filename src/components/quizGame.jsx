import React, { Component } from 'react';
import { getQuizQuestions } from './quizqns';
import QuizCard from './quizCard';

class QuizGame extends Component {
     
    state = { 
        players: [
            {
                name: 'James',
                points: 0
            },
            {
                name: 'Julia',
                points: 0
            },
            {
                name: 'Martha',
                points: 0
            },
            {
                name: 'Steve',
                points: 0
            },
        ],
        questions: getQuizQuestions(),
        currentQuestion: 0,
        playerBuzzer: null,
            myAnswer: null,
            options: [],
            score: 0,
            disabled: true,
            isEnd: false
        // codeType: 1
     }
    
     loadQuizQuestions = () => {
    
    this.setState(() => {
      return {
        text: this.state.questions[this.state.currentQuestion].text,
        options: this.state.questions[this.state.currentQuestion].options,
        answer: this.state.questions[this.state.currentQuestion].answer,
        
      };
    });
  };

 componentDidMount() {
    this.loadQuizQuestions();
  }

handleButton = () => {

    const { options,myAnswer, answer, score } = this.state;

    if (options === answer) {
        alert('Correct Answer. You get 3 points');
      this.setState({
        score: score + 3
      });
    
    }else{
        this.setState({ currentQuestion : this.state.currentQuestion})
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);

    if (this.state.currentQuestion !== this.state.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
         text: this.state.questions[this.state.currentQuestion].text,
        options: this.state.questions[this.state.currentQuestion].options,
        answer: this.state.questions[this.state.currentQuestion].answer,
        };
      });
    }

  
    this.setState({ myAnswer: answer, disabled: false });
  

    if (this.state.currentQuestion === this.state.questions.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  

  }
    

 
    render() { 
        const { options, myAnswer, currentQuestion, isEnd } = this.state;
                   
        if(isEnd){
        return <div className="container" style={{textAlign:'center'}}>
             <h3>Welcome to the Quiz Contest</h3><br/>
                 <h4>Participants</h4>
                 <br/>
              <div className="container"> 
                 <div className="row"> 
                 {this.state.players.map((data,i) => (
                       <QuizCard
                            key={i}
                            onBuzzer={this.handleBuzzer}
                            data={data}
                       />
                  
                    ) )}
                  </div>
                  </div> 
                  <br/>
                
                    <h4 style={{textAlign:'center'}}>Question Number : {this.formatCurrentQuestion()}</h4> 
                      <h5> { this.state.text } </h5>
                         
                     </div> 
            }else {


              return <div className="container" style={{textAlign:'center'}}>
             <h3>Welcome to the Quiz Contest</h3><br/>
                 <h4>Participants</h4>
                 <br/>
              <div className="container"> 
                 <div className="row"> 
                 {this.state.players.map((data,i) => (
                       <QuizCard
                            key={i}
                            onBuzzer={this.handleBuzzer}
                            data={data}
                       />
                  
                    ) )}
                  </div>
                  </div> 
                  <br/>
  
                      <h4 style={{textAlign:'center'}}>Question Number : {this.formatCurrentQuestion()}</h4> 
                    <h5> { this.state.text } </h5>   
                           <button onClick={ this.handleButton } class="btn btn-info btn-md mr-2">{this.state.options[0]}</button>
                          <button onClick={ this.handleButton  } class="btn btn-info btn-md mr-2">{this.state.options[1]}</button>
                          <button onClick={ this.handleButton  } class="btn btn-info btn-md mr-2">{this.state.options[2]}</button>
                          <button onClick={ this.handleButton  } class="btn btn-info btn-md">{this.state.options[3]}</button>
                                
                   </div>  
            }
    }

    formatCurrentQuestion(){
       const { currentQuestion } = this.state;
       return currentQuestion === 0 ? <span>1</span> : currentQuestion ; 
    }
}
  
export default QuizGame;