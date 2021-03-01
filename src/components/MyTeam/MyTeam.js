import React from 'react';
import './MyTeam.css';

const MyTeam = (props) => {
  const getTeam = props.team;
  const totalSalary = getTeam.reduce((total, player) => total + parseInt(player.salary), 0);
  return (
    <div>
      <ul className="list-group count-section">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Member Added
          <span className="badge bg-primary rounded-pill">{props.team.length}</span>
        </li>
      </ul>
      
      <div className="py-3 px-1">
        {
          getTeam.map(player => (
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="d-flex align-items-center">
                <div className="thumb-div">
                  <img src={player.image} alt={player.name} className="thumb-image" />
                </div>
                <h3>{player.name}</h3>
              </div>
              <div>
                <h3 className="pr-0">{player.salary}</h3>
              </div>
            </div>
          ))
        }
      </div>

      <div className="d-flex justify-content-between align-items-center total-salary">
        <div>Total Salary</div>
        <div>{totalSalary}</div>
      </div>
    </div>
  );
};

export default MyTeam;