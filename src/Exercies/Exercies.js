import React from 'react';
import toast from 'react-hot-toast';
import './Exercies.css'

const Exercies = (props) => {
    const { cart, clickHandler2, time } = props
    let exerciseTime = 0;
    let breakTime = 0;
    if (time) {
        breakTime = time;
    }
    for (const item of cart) {
        exerciseTime = exerciseTime + item.time
    }

    // toast showing 

    // const showtoast = () => {
    //     toast.success('activite successfullay compleated', {
    //         position: 'top-container'
    //     })

    // }
    const handlClick = ()=>{
        toast.success('Acctive succefullay')
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
                    <p>{exerciseTime} minute</p>
                </div>
                <div className='Exercise-boxes'>
                    <p><strong>Break Time</strong></p>
                    <p>{breakTime} second</p>
                </div>
            </div>
           
           <div className='Activity-button'>
           <button onClick={handlClick}>Activity</button>
           </div>
            </div>
        

        
    );
};

export default Exercies;