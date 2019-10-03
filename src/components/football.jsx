import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavLink} from 'reactstrap';

class Football extends Component {
    state = { 
        count : 0,
        codeType : -1,
        T1List : [],
        T2List : [],
        scoreT1: 0, 
        scoreT2: 0,
        result: [],
        matchTable: [],
        teamTable : [{team: 'France', played: 0, won: 0, lost: 0, drawn: 0, goalsFor: 0, goalsAgainst: 0, points: 0},
                      {team: 'England', played: 0, won: 0, lost: 0, drawn: 0, goalsFor: 0, goalsAgainst: 0, points: 0},
                      {team: 'Brazil', played: 0, won: 0, lost: 0, drawn: 0, goalsFor: 0, goalsAgainst: 0, points: 0},
                      {team: 'Germany', played: 0, won: 0, lost: 0, drawn: 0, goalsFor: 0, goalsAgainst: 0, points: 0},
                      {team: 'Argentina', played: 0, won: 0, lost: 0, drawn: 0, goalsFor: 0, goalsAgainst: 0, points: 0},] 
     }

    handleMatchOver = data => {
            this.setState({ count : this.state.count + 1})
            this.setState({ codeType : -1}) 
            console.log(data)
                   
            const team1 = this.state.T1List;
            const team2 = this.state.T2List;
            const score1 = this.state.scoreT1+'-'+this.state.scoreT2 ;
            const teamTable = [...this.state.teamTable];

            if(this.state.scoreT1 > this.state.scoreT2){
                 this.state.result.push(team1 + ' Won') ;
                 this.setState({ result : this.state.result})
                  
                    const index = teamTable.indexOf(data); 
                    console.log(data)
                    teamTable[index] = {...data};
                    teamTable[index].won++ ;
                    this.setState({ teamTable });
                    console.log(this.state.teamTable)
                  
            }else if (this.state.scoreT1 < this.state.scoreT2){
                 this.state.result.push(team2 + ' Won') ;
                 this.setState({ result : this.state.result})

                    const index = teamTable.indexOf(data);
                    teamTable[index] = {...data};
                    teamTable[index].won++ ;
                    this.setState({ teamTable });
                                    
            }else if (this.state.scoreT1 = this.state.scoreT2){
                 this.state.result.push('Match Drawn');
                 this.setState({result : this.state.result})

                    const index = teamTable.indexOf(data);
                    teamTable[index] = {...data};
                    teamTable[index].drawn++ ;
                    this.setState({ teamTable });
                 
            } else{
                    const index = teamTable.indexOf(data);
                    teamTable[index] = {...data};
                    teamTable[index].lost++ ;
                    this.setState({ teamTable });
            }

            const result1 = this.state.result;
            const obj = {'team1':team1,'team2':team2,'score':score1,'result':result1};
              
              this.state.matchTable.push(obj);
              this.setState({matchTable : this.state.matchTable})
              console.log(this.state.matchTable);

                    const index = teamTable.indexOf(data);
                    teamTable[index] = {...data};
                    teamTable[index].goalsFor = this.state.scoreT1;
                    teamTable[index].goalsAgainst = this.state.scoreT2;
                    this.setState({ teamTable });  
                          
                          
              this.setState({ result : this.state.result = [] })
              this.setState({ T1List : this.state.T1List = [] })
              this.setState({ T2List : this.state.T2List = [] })
              this.setState({ scoreT1 : this.state.scoreT1 = 0 })
              this.setState({ scoreT2 : this.state.scoreT2 = 0 })
      

    }

    scoreT1 = () => {
         this.setState({scoreT1 : this.state.scoreT1 + 1 })           
    } 

    scoreT2 = () => {
         this.setState({scoreT2 : this.state.scoreT2 + 1 })  
    } 

    handleTeam1 = (val1) => {
         this.state.T1List.push(val1.team);
         this.setState({ T1List : this.state.T1List });
         console.log(val1)

         const teamTable = [...this.state.teamTable];
         const index = teamTable.indexOf(val1);
         teamTable[index] = {...val1};
         teamTable[index].played++ ;
         teamTable[index].won++ ;
         this.setState({ teamTable });

                               
    }

    handleTeam2 = (val2) => { 
         this.state.T2List.push(val2.team);
         this.setState({ T2List : this.state.T2List });
         
         const teamTable = [...this.state.teamTable];
         const index = teamTable.indexOf(val2);
         teamTable[index] = {...val2};
         teamTable[index].played++ ;
         teamTable[index].lost++ ;
         this.setState({ teamTable });

        let len1 = this.state.T1List.length;
        let len2 = this.state.T2List.length;

        for( var i=0; i<len1; i++){ 
            for( var j=0; j<len2 ; j++){
                    if(this.state.T2List[j] === this.state.T1List[i] ){
                        this.setState({ T2List : this.state.T2List = [] }) 
                        alert('Select Different Team');
                    }
                }                
           }
        }


    handleCode1 = () => {
         this.setState({codeType : 2 })
    }
    
    handleCode2 = () => {
         this.setState({codeType : 3 })
    }

    handleCode3 = () => {
         this.setState({codeType : 0 })
    }

    handleStartMatch = () => {
         
        if(this.state.T1List.length === 0 ){
               this.setState({codeType : 0 })
               alert('Select Team 1...');
        }
        else if (this.state.T2List.length === 0 ){
               this.setState({codeType : 0 })
               alert('Select Team 2...');
        }
        else{
             
              this.setState({codeType : 1 })
        }
          
    }

    renderArray(){
         if(this.state.matchTable.length === 0) return <div className= "container">
                                     <h4 style={{textAlign: 'center'}}>There are no Matches</h4></div>

            return(  
                    <div className="container">
                        <h4 style={{textAlign: 'center'}}>Results of the Matches so far:</h4>    
                         <div class="table-responsive-md">
                            <table class="table">
                                    <thead style={{background: 'black',color:'white',textAlign: 'center'}}>
                                        <tr>
                                        <th scope="col">Team1</th>
                                        <th scope="col">Team2</th> 
                                        <th scope="col">Score</th>
                                        <th scope="col">Result</th>
                                        </tr>
                                    </thead>
                                <tbody style={{textAlign: 'center'}}>
                                    
                                     {this.state.matchTable.map((data, i) => {
                                         
                                        return( 
                                        <tr key={i}>
                                            <td> {data.team1} </td>
                                            <td> {data.team2}  </td>
                                            <td> {data.score} </td>
                                            <td> {data.result} </td>
                                            </tr>
                                        );
                                    })  } 
                                </tbody>   
                            </table> 
                        </div>
                        </div>
                    )
            }

 
  compareByTeam(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortByTeam(key) {
    let arrayCopy = [...this.state.teamTable];
    arrayCopy.sort(this.compareByTeam(key));
    this.setState({teamTable: arrayCopy});
  }

  compareByOther(key) {
    return function (a, b) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    };
  }
 
  sortByOther(key) {
    let arrayCopy = [...this.state.teamTable];
    arrayCopy.sort(this.compareByOther(key));
    this.setState({teamTable: arrayCopy});
  }
   

    render() { 
    
         if(this.state.codeType === -1 ) {
            return <div>
                        <Navbar color="dark" variant="white">
                        <NavbarBrand style={{color:'white'}} href="#home">Football Tournament</NavbarBrand>
                        <Nav className="mr-auto">
                        <NavLink  href="#home" style={{color:'grey'}}>Number of Matches <span style={{background:'blue', color:'white'}} className="badge badge-light">{this.formatCount()}</span> </NavLink>
                        </Nav>
                        </Navbar>
                   <br/>
           
                <div className="container"> 
                        <button onClick={ this.handleCode1 } class="btn btn-primary mr-5">All Matches</button>
                        <button onClick={ this.handleCode2 } class="btn btn-primary mr-5">Points Table</button> 
                        <button onClick={ this.handleCode3 } class="btn btn-primary">New Match</button><br/><br/>    
                       
                </div>
            </div> 
                
         } else if(this.state.codeType === 0 ){
             return <div>
                        <Navbar color="dark" variant="white">
                        <NavbarBrand style={{color:'white'}} href="#">Football Tournament</NavbarBrand>
                        <Nav className="mr-auto">
                        <NavLink style={{color:'grey'}} href="#">Number of Matches <span style={{background:'blue', color:'white'}} className="badge badge-light">{this.formatCount()}</span> </NavLink>
                        </Nav>
                        </Navbar>
                   <br/>
             <div className="container">
                        <button onClick={ this.handleCode1 } class="btn btn-primary mr-5">All Matches</button>
                        <button onClick={ this.handleCode2 } class="btn btn-primary mr-5">Points Table</button> 
                        <button onClick={ this.handleCode3 } class="btn btn-primary">New Match</button><br/><br/>

                        <h4 style={{textAlign: 'center'}}>{this.state.T1List.length === 0 &&  "Choose Team1"}</h4>
                        <h4 style={{textAlign: 'center'}}>{this.state.T1List.map((team1,i) => <h4 key={i}>Team1: {team1}</h4> )  }</h4>  <br/>
                        {this.state.teamTable.map((val1,i) => {
                                return (
                                <button onClick={ () => this.handleTeam1(val1) } style={{width:'15.5%'}}
                                      class="btn btn-warning btn-sm mr-5" key={i}>{val1.team}</button>
                                )
                            })}
                          <br/><br/>

                        <h4 style={{textAlign: 'center'}}>{this.state.T2List.length === 0 &&  "Choose Team2"}</h4>
                        <h4 style={{textAlign: 'center'}}>{this.state.T2List.map((team2,i) => <h4 key={i}>Team2: {team2}</h4> )  }</h4>   <br/>
                        {this.state.teamTable.map((val2,i) => {
                                return (
                                <button onClick={ () => this.handleTeam2(val2) } style={{width:'15.5%'}} 
                                      class="btn btn-warning btn-sm mr-5" key={i}>{val2.team}</button>
                                )
                            })}
                          <br/><br/>

                        <div style={{textAlign: 'center'}}>
                           <button  onClick={ this.handleStartMatch } class="btn btn-dark mr-5">Start Match</button>  
                        </div>
             </div>
             </div>
         }else if(this.state.codeType === 1 ){
             return   <div>
                        <Navbar color="dark" variant="white">
                        <NavbarBrand style={{color:'white'}} href="#home">Football Tournament</NavbarBrand>
                        <Nav className="mr-auto">
                        <NavLink style={{color:'grey'}} href="#home">Number of Matches <span style={{background:'blue', color:'white'}} className="badge badge-light">{this.formatCount()}</span> </NavLink>
                        </Nav>
                        </Navbar>
                   <br/>
                   <div className="container">
                        <h2 style={{textAlign: 'center'}}> Welcome to an exciting Match </h2><br/>
                        <div>
                        <div class="row">
                            <span style={{marginLeft:'10em'}}> <h4>{this.state.T1List}</h4></span>
                            <span style={{marginLeft:'18em'}}> <h4>{this.formatScoreT1()}</h4></span>_<span style={{ fontSize:'150%'}}><h4>{this.formatScoreT2()}</h4> </span>
                            <span style={{marginLeft:'20em'}}> <h4>{this.state.T2List}</h4></span>                 
                        </div>

                        <div class="row">
                        <div class="col-md-12 col-lg-5" style={{textAlign: 'center'}}>
                           <button  onClick={ this.scoreT1 } class="btn btn-warning mr-5">Goal Scored</button>
                        </div> 

                        <div class="col-md-12 col-lg-6" style={{textAlign: 'right'}}> 
                           <button  onClick={ this.scoreT2 } class="btn btn-warning mr-5">Goal Scored</button>
                        </div>
                        </div>
                         
                        <br/><br/>
                        <div style={{textAlign: 'center'}}>
                           <button  onClick={ () => this.handleMatchOver(this.state.teamTable) } style={{width:'15%'}} 
                                    class="btn btn-warning mr-5">Match Over</button>  
                        </div>
                        </div>
                   </div>

                   </div>
         }else if(this.state.codeType === 2 ){
                return <div>
                        <Navbar color="dark" variant="white">
                        <NavbarBrand style={{color:'white'}} href="#home">Football Tournament</NavbarBrand>
                        <Nav className="mr-auto">
                        <NavLink style={{color:'grey'}} href="#home">Number of Matches <span style={{background:'blue', color:'white'}} className="badge badge-light">{this.formatCount()}</span> </NavLink>
                        </Nav>
                        </Navbar>
                   <br/>
             <div className="container">
                        <button onClick={ this.handleCode1 } class="btn btn-primary mr-5">All Matches</button>
                        <button onClick={ this.handleCode2 } class="btn btn-primary mr-5">Points Table</button> 
                        <button onClick={ this.handleCode3 } class="btn btn-primary">New Match</button><br/><br/>
                <div>{ this.renderArray() }</div>
                      
             </div>
             </div>
         }else if(this.state.codeType === 3 ){
             return <div>
                        <Navbar color="dark" variant="white">
                        <NavbarBrand style={{color:'white'}} href="#home">Football Tournament</NavbarBrand>
                        <Nav className="mr-auto">
                        <NavLink style={{color:'grey'}} href="#home">Number of Matches <span style={{background:'blue', color:'white'}} className="badge badge-light">{this.formatCount()}</span> </NavLink>
                        </Nav>
                        </Navbar>
                   <br/>
             <div className="container">
                        <button onClick={ this.handleCode1 } class="btn btn-primary mr-5">All Matches</button>
                        <button onClick={ this.handleCode2 } class="btn btn-primary mr-5">Points Table</button> 
                        <button onClick={ this.handleCode3 } class="btn btn-primary">New Match</button><br/><br/>
                         <h3 style={{textAlign: 'center'}}> Points Table </h3> 
                         <div class="table-responsive-md">
                            <table class="table">
                                    <thead style={{background: 'black',color:'white',textAlign: 'center'}}>
                                        <tr>
                                        <th scope="col" onClick={() => this.sortByTeam('team')}>Team</th>
                                        <th scope="col" onClick={() => this.sortByOther('played')}>Played</th> 
                                        <th scope="col" onClick={() => this.sortByOther('won')}>Won</th>
                                        <th scope="col" onClick={() => this.sortByOther('lost')}>Lost</th>
                                        <th scope="col" onClick={() => this.sortByOther('drawn')}>Drawn</th>
                                        <th scope="col" onClick={() => this.sortByOther('goalsFor')}>Goals For</th>
                                        <th scope="col" onClick={() => this.sortByOther('goalsAgainst')}>Goals Against</th>
                                        <th scope="col" onClick={() => this.sortByOther('points')}>Points</th>
                                        </tr>
                                    </thead>
                                <tbody style={{textAlign: 'center'}}>
                                    {this.state.teamTable.map((data, i) => {
                                        return(
                                        <tr key={i}>
                                            <td> {data.team} </td>
                                            <td> {data.played}  </td>
                                            <td> {data.won} </td>
                                            <td> {data.lost} </td>
                                            <td> {data.drawn} </td>
                                            <td> {data.goalsFor} </td>
                                            <td> {data.goalsAgainst} </td>
                                            <td> {data.points} </td>
                                        </tr>
                                        );
                                    })  } 
                                </tbody>   
                            </table> 
                        </div>
                </div>
                </div>
         }
  
        
    }
    formatCount(){
       const { count } = this.state;
       return count === 0 ? <span>0</span> : count ; 
    }

    formatScoreT1(){
        const { scoreT1 } = this.state;
        return scoreT1 === 0 ? <h4>0</h4> : scoreT1 ; 
    }
    formatScoreT2(){
        const { scoreT2 } = this.state;
        return scoreT2 === 0 ? <h4>0</h4> : scoreT2 ; 
    }
}
 
export default Football;