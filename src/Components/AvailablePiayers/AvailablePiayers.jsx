import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePiayers = ({playerPromise,setAvailable,available,setSelectedPlayers,selectedPlayers}) => {
    const playerData = use(playerPromise)
    // console.log(playerData)
    return (
        <div className='max-w-[1280px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

{
    playerData.map(player=><PlayerCard selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}  available={available} setAvailable={setAvailable} player = {player}></PlayerCard>  )
}



          
        </div>
    );
};

export default AvailablePiayers;