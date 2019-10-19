import React, { Component } from "react";

class Contact extends Component {
  state = {
    subject: "",
    body: "",
    returnEmail: ""
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2>Contact</h2>
        </div>
      </div>
    );
  }
}

export default Contact;
