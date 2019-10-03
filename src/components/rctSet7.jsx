import React, { Component } from 'react';
import axios from 'axios';

class RctSet7 extends Component {
    state = {
        pics: [
        "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        favorites: [],
        currentIndex: 0
    };

    handlePrev = () => {
        const { currentIndex, pics } = this.state;
        const i = currentIndex;
        if(i == 0){
            this.setState({ currentIndex: 0 })
        }else{
             this.setState({ currentIndex: i-1 })
        }                
    }

    handleNext = () => {
        const { currentIndex, pics } = this.state;
        const i = currentIndex;
        if(i < pics.length-1){
            this.setState({ currentIndex: i+1 })
        }else{
             this.setState({ currentIndex: i })
        } 
    }

    handleFav = index => {      
        if(this.state.favorites.length === 0 || this.state.favorites.find((data,i) => data === this.state.pics[index] ) === undefined){
            const fav = this.state.pics[index];
            this.state.favorites.push(fav);
            this.setState({ favorites :  this.state.favorites});
            console.log(this.state.favorites)
        } 
    }

    handleImg = data => {
        const img = this.state.favorites.filter(val => val !== data);
        this.setState({ favorites : img})
        console.log(img)
    }

    renderFav(){
        if(this.state.favorites.length === 0) return <div></div>

            return (
                <div>
                    <h4>My Favorites</h4>
                    {this.state.favorites.map(data => 
                          <img src = {data} onClick={() => this.handleImg(data)} className="m-2" width = "40" height = "40" /> 
                    )} 
                </div>
            )
    }

    render() { 
        return ( 
            <div className="container">
                <div className="text-center bg-light">
              <img src = {this.state.pics[this.state.currentIndex]} width = "700" height = "400" /><br/><br/>
              <button onClick={() => this.handleFav(this.state.currentIndex)} 
                      className="btn btn-primary btn-md float-center">Add to Favorites</button>
              </div>
              <div className="container">
              <button onClick={this.handlePrev} className="btn btn-primary btn-md float-left">Previous</button>
              <button onClick={this.handleNext} className="btn btn-primary btn-md float-right">Next</button>
              <br/><br/>
              {this.renderFav()}
              </div>
            </div>
         );
    }
}
 
export default RctSet7;