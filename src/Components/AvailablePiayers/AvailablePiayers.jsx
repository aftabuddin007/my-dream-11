import React, { use } from 'react';
import userImg from '../../images/user1.svg'
import flagImg from '../../images/report1.svg'

const AvailablePiayers = ({playerPromise}) => {
    const playerData = use(playerPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1280px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

{
    playerData.map(player=>  <div > 
            <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={player.player_img}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title"> <img src={userImg} alt="" />{player.player_name}</h2>
    <div className='flex justify-between border-b-2 border-gray-400'>
        <p class="card-title"> <img src={flagImg} alt="" />{player.country}</p>
        <p>{player.playing_type}</p>
    </div>
    <h3 className='font-bold text-lg'>Rating</h3>
    <div className='flex justify-between border-b-2 border-gray-400  my-3'>
        <p className='font-bold'>{player.batting_style}</p>
        <p>{player.bowling_style}</p>
    </div>
   
    <div class="card-actions justify-end items-center">
        <p>Price: $<span>{player.player_price}</span></p>
      <button class="btn btn-primary ">Choose player</button>
    </div>
  </div>
</div>
        </div>)
}



          
        </div>
    );
};

export default AvailablePiayers;