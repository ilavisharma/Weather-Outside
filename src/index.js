import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = props => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude), // succes callback
      err => setErrorMessage(err.message) // for any errors
    );
  }, []); // [] because we only want to run this function once

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  }
  else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  }
  else {
    content = <Spinner message="Please accept the location request" />;
  }

  return (
    <div className="border red">{content}</div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
