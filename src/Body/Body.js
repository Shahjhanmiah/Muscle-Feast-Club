import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Exercies from '../Exercies/Exercies';
import { addToDb, getSavedTime } from '../utilities/fakedb';
import './Body.css'

const Body = () => {
    // 
    const [activities,setactivities] = useState([])
    const [cart,setcart] = useState([])
    let[time,setTime] = useState(0)
    useEffect(()=>{
        fetch('player.json')
        .then(res=>res.json())
        .then(data=>setactivities(data))
    },[])
    // useEffect
    useEffect(() => {
        const storedTime = getSavedTime()
        setTime(storedTime)
    }, [])

    const addTolist = (id) => {
        const selectedItems = activities.find(player=>player.id===id)
        const newCart = [...cart,selectedItems]
        setcart(newCart)
    }
    const addBreakTime = (value) => {
        time = value;
        setTime(time)
        addToDb(value)
    }
    
    return (
        <div className='body'>
            <div className='activities'>
                {
                    activities.map(activity=><Activity
                    key={activity.id}
                    activity={activity}
                    clickHandler={addTolist}>

                    </Activity>)
                }

            </div>
            <div>
                <Exercies

                cart={cart}
                clickHandler2={addBreakTime}
                time={time}>
                    
                </Exercies>
            </div>
            
        </div>
    );
};

export default Body;