import React, { useState } from 'react';
import './Players.css';
import playerData from '../../playerData/playerData.json';
import PlayerCard from '../PlayerCard/PlayerCard';
import MyTeam from '../MyTeam/MyTeam';

const Players = () => {
  const [players, setPlayers] = useState(playerData);
  return (
    <div className="container-fluid m-0 p-0">
      <div className="total-members">
        <h2 className="text-center p-3">Team Members: <span className="text-primary">{players.length}</span></h2>
      </div>
      <div className="row">
        <main className="col-md-8 players">
          <div className="p-5">
            <section className="player-cards">
              <div className="row">
                {
                  players.map(player => <PlayerCard playerInfo={player} key={player.id}></PlayerCard>)
                }
              </div>
            </section>
          </div>
        </main>
        <aside className="col-md-4 aside-item">
          <div className="px-3 py-5">
            <MyTeam playerInfo={players} key={players.id}></MyTeam>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Players;