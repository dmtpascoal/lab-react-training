import React from 'react';

class IdCard extends React.Component {
  state = {
    lastName: this.props.lastName,
    firstName: this.props.firstName,
    gender: this.props.gender,
    height: this.props.height,
    birth: this.props.birth,
    picture: this.props.picture
  };

  render() {
      return (
        <div className="idCardBox">
          <img src={this.props.picture} />
          <div className="details">
            <strong>First Name</strong>: {this.props.firstName}
            <br />
            <strong>Last Name</strong>: {this.props.lastName}
            <br />
            <strong>Gender</strong>: {this.props.gender}
            <br />
            <strong>Height</strong>: {this.props.height}
            <br />
            <strong>Birth</strong>: {this.props.birth}
          </div>
        </div>
      );
  }
}

export default IdCard;