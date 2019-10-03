import React, { Component } from 'react';

class EmpViews extends Component {
    state = { 
        employees: [
            { name:'Jack Smith', level: 2, dept:'Tech', designation:'Manager', salary:24000 },
            { name:'Mary Robbins', level: 3, dept:'Fin', designation:'Manager', salary:28000 },
            { name:'Steve Williams', level: 4, dept:'Ops', designation:'President', salary:35000 },
            { name:'Bob Andrews', level: 1, dept:'Fin', designation:'Trainee', salary:16500 },
            { name:'Dave Martin', level: 2, dept:'Fin', designation:'Manager', salary:21700 },
            { name:'Julia Clarke', level: 3, dept:'Ops', designation:'Manager', salary:26900 },
            { name:'Kathy Jones', level: 4, dept:'Tech', designation:'President', salary:42500 },
            { name:'Tom Bresnan', level: 2, dept:'Tech', designation:'Manager', salary:22000 }, 
        ]
     }

    render() { 

        return ( 
        <div className="container">
            <h4 className="text-center">Welcome to the Employee Portal</h4>
            <div className="row">
            {this.state.employees.map(employee => (
                <div className="col-6 border bg-light text-center">
                    <h5>{employee.name}</h5>
                        Department : {employee.dept}<br/>
                        Designation : {employee.designation} 
                </div>
            ))}
            </div>
            <div className="row bg-warning">
              <div className="col-6 text-center">
                <h5>Employee Details</h5>
                   Number of employee : 8<br/>
                   Tech : 3<br/>
                   Fin : 3<br/>
                   Ops : 2
              </div>
              <div className="col-6 text-center">
                  <h5>Salary Details</h5>
                  Total Salary : 216800<br/>
                  Average Salary : 27100<br/>
                  Max Salary : 42500<br/>
                  Min Salary : 16500
              </div>
            </div> 
            <div className="row text-center border p-3">
                <div className="col-12">
                    <button className="btn btn-primary">Click For More Details</button>
                </div>
            </div>
        </div>
         );
    }
}
 
export default EmpViews;



{/* <div className="row bg-primary text-white text-center">
                <div className="col-5 border">Name</div>
                <div className="col-1 border">Level</div>
                <div className="col-2 border">Department</div>
                <div className="col-2 border">Designation</div>
                <div className="col-2 border">Salary</div>
            </div> */}
