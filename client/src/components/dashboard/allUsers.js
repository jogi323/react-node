import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { allUsersDetails } from '../../actions/AllActions';

class AllUsers extends Component {
  componentWillMount(){
    this.props.allUsersDetails(); 
  }
  render() {
    return (
      <React.Fragment>
        <h2>All users list:</h2>
        <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Mobile number</th>
            </tr>
          </thead>
          <tbody>
            {this.props.allUsers.map((item,index)=>{
              return (
                <tr key={index}>
                  <td key={index}>{index+1}</td>
                  <td key={item.firstname}>{item.firstname}</td>
                  <td key={item.lastname}>{item.lastname}</td>
                  <td key={item.email}>{item.email}</td>  
                  <td key={item.mobile}>{item.mobile}</td>                                                    
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      </React.Fragment>
      
    )
  }
}
const mapStateToProps = (state) => {
  return {
    allUsers : state.all.allUsers
  }
} 

export default withRouter(connect(mapStateToProps,{allUsersDetails})(AllUsers));
