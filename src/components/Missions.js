import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        {missions.map((mission, i) => (
          <MissionCard
            key={ i }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
