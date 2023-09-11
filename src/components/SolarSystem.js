import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="system">
          {planets.map((planet, i) => (
            <PlanetCard
              key={ i }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
