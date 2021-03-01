import React, { useState } from 'react';
import './Players.css';
import playerData from '../../playerData/playerData.json';
import PlayerCard from '../PlayerCard/PlayerCard';
import MyTeam from '../MyTeam/MyTeam';

const Players = () => {
  const [players, setPlayers] = useState(playerData);
  return (
    <div className="row">
      <main className="col-md-8 players">
        <div className="p-5">
          <section className="player-cards">
            <div className="card-columns">
              {
                players.map(player => <PlayerCard playerInfo={player} key={player.id}></PlayerCard>)
              }
            </div>
          </section>
        </div>
      </main>
      <aside className="col-md-4">
        <div className="px-3 py-5">
          <MyTeam></MyTeam>
        </div>
      </aside>
    </div>
  );
};

export default Players;