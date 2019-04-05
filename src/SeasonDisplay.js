import React from 'react';

const getSeason = (lat,month)=> {
    if(month>2 && month <9){
        return lat>0 ?'summer':'winter'
    }
    else{
        return lat>0?'winter':'summer'
    }
}

const SeasonDisplay=(props) =>{
    const season=getSeason(props.lit, new Date().getMonth());
    const text= season==='winter'?'Burr, Its Chilly': 'lets hit the beach';
    const icon= season==='winter'?'snowflake':'sun';
    console.log(season);
    return(
    <div>
        <i className={` massive icon-left ${icon} icon`} />
        <h1>{text}</h1>
        <i className={` massive icon-right ${icon} icon`} />
    </div>
    );
};
export default SeasonDisplay;