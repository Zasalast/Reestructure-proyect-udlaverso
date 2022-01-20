import React from "react";
import { Link } from "react-router-dom";

//import "./styles/TeamList.css";

class TeamListItem extends React.Component {
  render() {
    return (
      <div className="TeamListItem">
        <img
          className="TeamListItem__avatar"
          src={this.props.team.avatarUrl}
          alt={`${this.props.team.firstName} ${this.props.team.lastName}`}
        />

        <div>
          <strong>
            {this.props.team.firstName} {this.props.team.lastName}
          </strong>
          <br />@{this.props.team.twitter}
          <br />
          {this.props.team.jobTitle}
        </div>
      </div>
    );
  }
}

class TeamList extends React.Component {
  render() {
    if (this.props.teams.length == 0) {
      return (
        <div>
          <h3>No se encontro ningun miembro de equipo</h3>
          <Link className="btn btn-primary" to="/teams/new">
            {" "}
            Crear miembro
          </Link>
        </div>
      );
    }
    return (
      <div className="TeamList">
        <ul className="list-unstyled">
          {this.props.teams.map((team) => {
            return (
              <li key={team.id}>
                <TeamListItem team={team} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TeamList;
