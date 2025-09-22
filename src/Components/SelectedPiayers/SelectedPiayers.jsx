import React from 'react';
import SelecterCard from '../SelectedCard/SelecterCard';

const SelectedPiayers = ({selectedPlayers,removePlayer}) => {
    // console.log(selectedPlayers)
    return (
        <div className='max-w-[1280px] mx-auto p-4'>
            {
                selectedPlayers.map(player=><SelecterCard player={player} removePlayer={removePlayer}></SelecterCard>)
            }

        </div>
    );
};

export default SelectedPiayers;