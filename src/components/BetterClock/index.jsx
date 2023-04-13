import React from 'react';
import useClock from '../../hook/useClock';
import "./BetterClock.scss"

BetterClock.propTypes = {

};


function BetterClock() {
    const { timeString } = useClock();

    return (
        <div>
            <div className='better-clock'>
                <p className='better-clock__time'>{timeString}</p>
            </div>
        </div>
    );
}

export default BetterClock;