import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="name">{name}</p>
        <p data-testid="mission-year" className="year">{year}</p>
        <p data-testid="mission-country" className="country">{country}</p>
        <p data-testid="mission-destination" className="destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
