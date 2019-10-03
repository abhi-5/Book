import React, { Component } from 'react';
import Book from './book.jsx';
import { Container, Row, Col } from 'reactstrap';

class LibrarySystem extends Component {
    state = { 
        bookArr: [
            { name: "Harry Potter", author: "JK Rowling" },
            { name: "War and Peace", author: "Leo Tolstoy"},
            { name: "Malgudi Days", author: "RK Narayan"},
            { name: "Gitanjali", author: "RN Tagore" }
        ], 
        issued : [],
     }
      
       handleIssue = (val) => {
            const bookArr = this.state.bookArr.filter( book => book !== val );
            this.setState({ bookArr }); 

            this.state.issued.push(val);
            console.log(val)
            this.setState({ issued : this.state.issued });
            console.log(this.state.issued)
    
       }  

       handleReturn = (book) => {
           const issued = this.state.issued.filter( val => val !== book );
           console.log(book)
           this.setState({ issued  });

           this.state.bookArr.push(book);
           this.setState({ bookArr : this.state.bookArr}); 
           console.log(this.state.bookArr)  
       }

       render() {  
        return ( 
            <div className="container">
            
                    <div style={{textAlign: 'center'}}> <h3>Books In Library</h3></div>
                     <h4>{this.state.bookArr.length === 0 &&  "Library Is Empty"}</h4>

                    <div className="row">
                        {this.state.bookArr.map((book,i)  =>  ( 
                            <Book
                            key={i}
                            onIssue={this.handleIssue}
                            book={book}
                            />
                         )) }
                         </div>
                        <br/> 
                         
                        <h4>Issued Books</h4>
                        <h6>{this.state.issued.length === 0 &&  "No Book has been Issued"}</h6>
                        <ul>{this.state.issued.map((book,i) => <li  key={i}>
                            {book.name}
                            <button onClick={ () => this.handleReturn(book)} className="btn btn-secondary btn-sm m-2">Return</button>
                            </li> )} 
                        </ul>          
            </div>        
         );
    }
}
 
export default LibrarySystem ;

  

