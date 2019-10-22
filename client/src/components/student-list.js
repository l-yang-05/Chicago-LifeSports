import React from "react";
import axios from "axios";

class Students extends React.Component {
  state = {
    students: [],
  };

  fetchStudents = () => {
    axios
      .get("/students")
      .then(res => {
        this.setState({ students: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchStudents();
    console.log("hey mount");
  }

  render() {
    console.log("hi render");
    return (
      <React.Fragment>
        {console.log("hey")}
        {console.log(this.state.students)}
        {this.state.students.map((student, index) => <p key={index}>{student.last_name}</p>)}
      </React.Fragment>
    );
  }
}

export default Students;
