import React from 'react';
import Calendar from 'react-calendar';



const Calendar1=({selectedDay})=>{
    const cal={
        width: '80%',
        height: '100%'
    }
    // var selectedDay=function(m){
    //     alert(m.toString());
    // }
    return(
        <div>
            <Calendar onDaySelected={selectedDay} style={cal}/>
        </div>
    );
}
export default Calendar1;