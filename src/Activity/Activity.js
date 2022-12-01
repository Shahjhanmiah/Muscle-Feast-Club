import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { activity, clickHandler } = props
    const { id, img, name, trainer, time } = activity
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <div>
                    <h5>Name : {name}</h5>
                    <p>Trainer : <strong>{trainer}</strong></p>
                    <p>Time : {time} min</p>
                </div>
                <button onClick={() => clickHandler(id)}>Add To List</button>
            </div>
        </div>
    );
};

export default Activity;