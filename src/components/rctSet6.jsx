import React, { Component } from 'react';

class RctSet6 extends Component {
    state = { 
			 posts: [
						{
								postId: 255,
								heading: "World	Cup	Semi-final",
								postedBy: "Vishal",
								numOfLikes: 45,
								numOfShares: 10,
								txt: "India	lost	to	New	Zealand	in	the	world	cup.	Very	Bad."
						},
						{
								postId: 377,
								heading: "What	a	final",
								postedBy: "Mohit",
								numOfLikes: 18,
								numOfShares: 4,
								txt: "Was	anyone	awake	to	see	the	final.	England	won	by	boundary	count."
                        },
                        {
								postId: 391,
								heading: "Was	it	5	runs	on	6	six	runs",
								postedBy: "Preeti",
								numOfLikes: 29,
								numOfShares: 7,
								txt:"I	feed	sorry	for	New	Zealand.	If	the	ball	had	not	hit	the	bat	and	no	overthrows,	New	Zealand	would	have	won."
						},
						{
								postId: 417,
								heading: "Will	Dhoni	retire",
								postedBy: "Hemant",
								numOfLikes: 66,
								numOfShares: 24,
								txt:"Is	this	Dhoni's	final	match.	Will	be	ever	see	Dhoni	playing	for	India."
						}
				]
        
            
     }

    handleInLike = data => {
         const posts = [...this.state.posts];
         const index = posts.indexOf(data);
         posts[index] = {...data};
         posts[index].numOfLikes++ ;
         this.setState({ posts });
    }

    handleInShare = data => {
         const posts = [...this.state.posts];
         const index = posts.indexOf(data);
         posts[index] = {...data};
         posts[index].numOfShares++ ;
         this.setState({ posts });
    }

    render() { 
        return ( 
            <div className="container"><br/>
                <div className="row border bg-light">
                    {this.state.posts.map((data,i) => {
                        return (   
                            <div key={i} className="col-12 border">
                                <h5>{data.heading}</h5>
                                <h6>Shared By : {data.postedBy}</h6>
                                {data.txt}<br/>
                                Likes : {data.numOfLikes} <button onClick={() => this.handleInLike(data)} 
                                                                  className="btn btn-primary m-2">Like</button>
                                Shared : {data.numOfShares} <button onClick={() => this.handleInShare(data)}
                                                                    className="btn btn-primary m-2">Share</button>
                            </div>
                        );
                    } )}
                    
                </div>

            </div>
         );
    }

    
}
 
export default RctSet6;