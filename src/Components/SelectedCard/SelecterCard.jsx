import React from 'react';

const SelecterCard = ({player,removePlayer}) => {
    console.log(player)
const handleRemove = ()=>{
    removePlayer(player)
}

    return (
        <div className='flex justify-between items-center border-2 border-gray-400 px-4 rounded-xl'>
               <div className='flex gap-4 items-center'>
                <div>
                    <img className='h-[50px w-[50px] rounded-xl'  src={player.player_img} alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>{player.player_name}</h2>
                    <h4>{player.batting_style}</h4>
                </div>
               </div>
                <div onClick={handleRemove}>
                     X
                </div>
            </div>
    );
};

export default SelecterCard;