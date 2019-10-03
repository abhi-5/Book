import React, { Component } from 'react';

class Views extends Component {
    state = { 
        players: [
            { name:'Jack', answered: 10, correct: 8 },
            { name:'Steve', answered: 8, correct: 7 },
            { name:'William', answered: 12, correct: 9 },
            { name:'Kathy', answered: 11, correct: 10 },
            { name:'Edward', answered: 9, correct: 6 },
            { name:'Mary', answered: 13, correct: 8 },
        ]
     };

    sortScore(p1,p2){
        let p1s = p1.correct * 2 - (p1.answered - p1.correct);
        let p2s = p2.correct * 2 - (p2.answered - p2.correct);
    } 

    render() { 
        let pl1 = [...this.state.players];
        pl1.sort(this.sortScore);

        return ( 
        <div className="container">
            <h4 className="text-center">Welcome to the Quiz Contest</h4>
            <div className="row">
            {this.state.players.map(player => (
                <div className="col-4 border bg-warning text-center">
                    <h4>{player.name}</h4>
                    Answered : {player.answered}<br/>
                    Correct : {player.correct}<br/>
                    Score : {player.correct * 2 - (player.answered - player.correct)}
                </div>   
            ))}
            </div>
            <div className="row bg-light">
              <div className="col-6 text-center">
                <h5>Leader Board</h5>
                1. { pl1[0].name }<br/>
                2. { pl1[1].name }<br/>
                3. { pl1[2].name }
              </div>
              <div className="col-6 text-center">
                  <h5>Statistics</h5>
                  Total Qns : <br/>
                  Correct Answers : <br/>
                  Incorrect Answers :
              </div>
            </div> 
            <div className="row text-center border p-3">
                <div className="col-12">
                    <button className="btn btn-primary">Update Score</button>
                </div>
            </div>
        </div>

        );
    }
}
 
export default Views;