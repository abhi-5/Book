import React, { Component } from 'react';
import Book from './book.jsx';

class LibraryBook extends Component {
    
    render() { 
         return ( 
            <div className="container">
            
                    <div className="row">
                        {this.props.bookArr.map((book,i)  =>  ( 
                            <Book
                            key={i}
                            onIssue={this.props.onIssue}
                            book={book}
                            />
                         )) }
                         </div>
                        <br/> 
                         
               </div>        

         );
    }
}
 
export default LibraryBook;