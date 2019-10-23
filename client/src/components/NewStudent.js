import React from "react";
import axios from "axios";

class NewStudent extends React.Component {
  state = {
    last_name: "",
    first_name: "",
    gender: "",
    height: "",
  };

  handleChange(event, property) {
    this.setState({ [property]: event.target.value });
  }

  handleSubmit(event) {
      alert(`Added ${this.state.last_name}, ${this.state.first_name}`)
      axios.post('/students/new', {
          last_name: this.state.last_name,
          first_name: this.state.first_name,
          gender: this.state.gender,
          height: this.state.height
      }).then(function (res) {
          console.log(res.data)
          res.send(res.data)
      }).catch(function (err) {
          console.log(err)
      })
      event.preventDefault()
  }

  render() {
    return (
      <form
        className="needs-validation"
        onSubmit={event => this.handleSubmit(event)}
      >
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={this.state.first_name}
              onChange={event => this.handleChange(event, "first_name")}
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={this.state.last_name}
              onChange={event => this.handleChange(event, "last_name")}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              required
              value={this.state.gender}
              onChange={event => this.handleChange(event, "gender")}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Height</label>
            <input
              type="number"
              className="form-control"
              id="height"
              required
              value={this.state.height}
              onChange={event => this.handleChange(event, "height")}
            />
            <div className="invalid-feedback">Valid height is required.</div>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Add New Student
          </button>
        </div>
      </form>
    );
  }
}

export default NewStudent;
