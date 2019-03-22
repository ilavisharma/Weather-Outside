import { useState, useEffect } from 'react';

export default () => {
    // there is no input
    // but there is some lattitude or the error message as output
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude), // succes callback
            err => setErrorMessage(err.message) // for any errors
        );
    }, []); // [] because we only want to run this function once

    return [lat, errorMessage];
};
