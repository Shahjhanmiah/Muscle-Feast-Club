import React from 'react';
import { toast } from 'react-toastify';
import './Exercies.css'

const Exercies = (props) => {
    const { cart, clickHandler2, time } = props
    let exerciesTime = 0;
    let breakeTime = 0;
    if (time){
        breakeTime = time;
    }
    for (const item of cart) {
        exerciesTime = exerciesTime + item.time
    }

    // toast showing 

    const showtoast = () => {
        toast.success('activite successfullay compleated', {
            position: 'top-container'
        })

    }
    


    return (
        <div className='exercise'>
            <div className='add-break'>
                <h4>Add A break</h4>
                <div className='buttons'>
                    <button onClick={() => clickHandler2(10)}>10s</button>
                    <button onClick={() => clickHandler2(20)}>20s</button>
                    <button onClick={() => clickHandler2(30)}>30s</button>
                    <button onClick={() => clickHandler2(40)}>40s</button>
                    <button onClick={() => clickHandler2(60)}>60s</button>

                </div>
            </div>
            <div className='exercise-details'>
                <h4>Exercise Details</h4>
                <div className='Exercise-boxes'>
                    <p><strong>Exercise Time</strong></p>
                    <p>{exerciesTime} minute</p>
                </div>
                <div className='Exercise-boxes'>
                    <p><strong>Break Time</strong></p>
                    <p>{breakeTime} second</p>
                </div>
            </div>
           
           <button onClick={showtoast}>Click</button>
            </div>
        

        
    );
};

export default Exercies;