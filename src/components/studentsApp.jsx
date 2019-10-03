import React, { Component } from 'react'; 

class StudentsApp extends Component {
    state = { 
        student : { name:'', course:'', year:'' },
        students : [],
        marks : { maths:'', english:'', computers:'', science:'' },
        totalMarks : [12,52],
        codetype : 0,
        index : '',
        index1 : ''
     }

    handleChange = ({ currentTarget: input}) => {
        const student = {...this.state.student};
        student[input.name] = input.value;
        this.setState({ student });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.state.students.push(this.state.student)
        this.setState({ students : this.state.students })
        console.log(this.state.students);
        this.setState({ 
            student : this.state.student = {} ,
            codetype : 0 
        })  
    }

    handleEdit = (data) => { 
        const index = this.state.students.findIndex( val => val === data)
        const index1 = this.state.totalMarks.findIndex(val => val === data) ;
        console.log(index) 
        console.log(index1)
        this.setState({  
             index : index ,
             index1 : index1 ,
             student : data ,
             codetype : 3 
        }); 
    } 

    handleMarks = ({ currentTarget: input}) => {
        const marks = {...this.state.marks};
        marks[input.name] = input.value;
        this.setState({ marks });
    }

    handleSubmitMarks = e => {
        e.preventDefault();
        
        this.state.totalMarks.push(this.state.marks)
        const total = this.state.totalMarks.map(data => parseInt(data.maths,10) + parseInt(data.english,10) + parseInt(data.computers,10) + parseInt(data.science,10)  );
        this.setState({ totalMarks : this.state.totalMarks = total })

        const index1 = this.state.index1 ;
        const totalMarks = [...this.state.totalMarks];
        totalMarks[index1] = total;
        this.setState({ totalMarks })
        console.log(total)

        this.setState({ 
            marks : this.state.marks = {} ,
            codetype : 0 
        })  
               
    }

    handleForm = () => {
         this.setState({codetype : 2})
         this.setState({totalMarks : this.state.totalMarks = [] })
         this.setState({student : this.state.student = {}})
    }

    handleList = () => {
        this.setState({codetype : 1})       
    }

        renderMarks(){
            if(this.state.totalMarks.length === 0 ) return <div>No Data</div>
                return (
                        <div> 
                            {this.state.totalMarks.map((data,i) => data)}
                        </div>
                ) 
        }

        renderButton(){
            if(this.state.totalMarks.length === 0) return <div>Edit</div>
                return (
                        <div> 
                            Done
                        </div>
                ) 
        }

    renderTable(){
         if(this.state.students.length === 0) return <div><h5>There are Zero students</h5></div>

            return(
                <div>
                            <table class="table table-bordered table-sm">
                                    <thead style={{background: 'black',color:'white',textAlign: 'center'}}>
                                        <tr>
                                        <th scope="col" style={{width:'20%'}}>Name</th>
                                        <th scope="col" style={{width:'20%'}}>Course</th> 
                                        <th scope="col" style={{width:'20%'}}>Year</th>
                                        <th scope="col" style={{width:'20%'}}>Total Marks</th>
                                        <th scope="col" style={{width:'20%'}}>Results</th>
                                        </tr>
                                    </thead>
                                <tbody style={{textAlign: 'center'}}>
                                    
                                     {this.state.students.map((data, i) => {       
                                        return( 
                                            <tr key={i}>
                                            <td> {data.name} </td>
                                            <td> {data.course}  </td>
                                            <td> {data.year} </td>
                                            {this.state.totalMarks.map((data,i) => {
                                                return (
                                                 <tr key={i}>   
                                                <td> {this.renderMarks()}</td>
                                                <td> <button onClick={ () => this.handleEdit(data)} 
                                                className="btn btn-info btn-sm">{this.renderButton()}</button></td> 
                                                   </tr> 
                                                );
                                            })}
                                            </tr>
                                        );
                                    })  } 
                                            
                                
                                </tbody>    
                            </table> 
                </div>
            )
     }
    
    
    render() { 
        const { student } = this.state;
        const { marks } = this.state;

        if(this.state.codetype === 0){
            return  <div className="container"><br/>
                    <button onClick={this.handleForm} className="btn btn-primary btn-sm mr-2">New Student</button>
                    <button onClick={this.handleList} className="btn btn-primary btn-sm mr-2">List of Students</button>                
                    <h5>Welcome to the Student Management System</h5>
                </div>
         
        }else if(this.state.codetype === 1){
            return  <div className="container"><br/>
                    <button onClick={this.handleForm} className="btn btn-primary btn-sm mr-2">New Student</button>
                    <button onClick={this.handleList} className="btn btn-primary btn-sm mr-2">List of Students</button> <br/>               
                    {this.renderTable()}
                </div>
 
        }else if(this.state.codetype === 2){
            return  <div className="container"><br/>
                    <button onClick={this.handleForm} className="btn btn-primary btn-sm mr-2">New Student</button>
                    <button onClick={this.handleList} className="btn btn-primary btn-sm mr-2">List of Students</button>
                    
                    <form ref="myForm" className="myForm">
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                value={student.name}
                                onChange={this.handleChange}  
                                name="name"
                                id="name" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Course</label>
                            <input
                                value={student.course}
                                onChange={this.handleChange}
                                name="course" 
                                id="course" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Year</label>
                            <input
                                value={student.year}
                                onChange={this.handleChange}
                                name="year" 
                                id="year" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Submit</button>
                    </form>
                </div>           
             }else if(this.state.codetype === 3){
            return  <div className="container"><br/>
                    <button onClick={this.handleForm} className="btn btn-primary btn-sm mr-2">New Student</button>
                    <button onClick={this.handleList} className="btn btn-primary btn-sm mr-2">List of Students</button>
                    <h5>Enter Marks for {this.state.student.name}</h5>

                    <form ref="myForm" className="myForm">
                        <div className="form-group">
                            <label>Maths</label>
                            <input 
                                value={marks.maths}
                                onChange={this.handleMarks}  
                                name="maths"
                                id="maths" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label>English</label>
                            <input
                                value={marks.english}
                                onChange={this.handleMarks}
                                name="english" 
                                id="english" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Computers</label>
                            <input
                                value={marks.computers}
                                onChange={this.handleMarks}
                                name="computers" 
                                id="computers" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Science</label>
                            <input
                                value={marks.science}
                                onChange={this.handleMarks}
                                name="science" 
                                id="science" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <button onClick={this.handleSubmitMarks} className="btn btn-primary btn-sm">Submit</button>
                    </form>
                </div>           
             }
    }
}
 
export default StudentsApp;