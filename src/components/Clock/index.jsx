import React, { useEffect, useState } from 'react';

Clock.propTypes = {

};

function formatData(data) {
    if (!data) return '';

    const hours = `0${data.getHours()}`.slice(-2);
    const minutes = `0${data.getMinutes()}`.slice(-2);
    const seconds = `0${data.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}
function Clock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            //hh:mm:ss
            const newTimeString = formatData(now);

            setTimeString(newTimeString);
        }, 1000);

        return () => {
            console.log('Clock cleanup');
            clearInterval(clockInterval);
        };
    }, []);

    return (
        <p style={{ fontSize: '42px' }}> {timeString}</p >
    );
}

export default Clock;