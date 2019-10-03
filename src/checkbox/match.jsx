import React, { Component } from 'react';
import Form from './matchForm';

class MatchTeam extends Component {
    state = { 
        team: "TeamABC",
        names: ["Jack", "Steve", "William", "Kathy", "Edward"],
        sports: ["Football", "Cricket", "Tennis"],
        players: "",
        sport: ""
    }

    makeCbStructure(names, players) {
        let temp = names.map(n1 => ({
            name: n1,
            selected: false
        }));
        let cnames = players.split(",");
        for( let i=0; i<cnames.length; i++){
            let obj = temp.find(n1 => n1.name === cnames[i]);
            if (obj) obj.selected = true;
        };
        return temp;
    }

    makeRadioStructure(sports, sport) {
        let sportsRadio = {
            sports: sports,
            selectedSport: sport
        };
        return sportsRadio;
    }

    handleOptionChange = (namesCheckbox, sportsRadio) => {
        let filteredNames = namesCheckbox.filter(n1 => n1.selected);
        let arrayNames = filteredNames.map(n1 => n1.name);
        let players = arrayNames.join(",");
        let sport = sportsRadio.selectedSport;
        this.setState({ players: players, sport: sport })
    };

    render() { 
        let { names, players, sports, sport, team } = this.state;
        let namesCheckbox = this.makeCbStructure(names, players);
        let sportsRadio = this.makeRadioStructure(sports, sport);
        return ( 
            <div className="container">
                <div className="row border">
                    <div className="col-3 bg-light">
                        <Form 
                            namesCheckbox={namesCheckbox}
                            sportsRadio={sportsRadio}
                            onOptionChange={this.handleOptionChange}
                        />
                    </div>
                    <div className="col-9">
                        Team : {team}
                        <br/>
                        Players Selected : {players}
                        <br/>
                        Sport Selected : {sport}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MatchTeam;