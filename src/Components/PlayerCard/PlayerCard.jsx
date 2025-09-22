import React from 'react';
import userImg from '../../images/user1.svg'
import flagImg from '../../images/report1.svg'
import { useState } from 'react';
import { toast } from 'react-toastify';
const PlayerCard = ({player,setAvailable,available,setSelectedPlayers,selectedPlayers}) => {
    const [isSelected,setIsSelected] = useState(false)
    const handleSelected =(playerData1)=>{
        const playerPrice = parseInt(playerData1.player_price)
        if(available<playerPrice){
            toast("You don't have enough balance")
            return;
        }
        if(selectedPlayers.length ===6){
            toast("you already selected 6 players   ")
            return;
        }
        setIsSelected(true)
        setAvailable(available-playerPrice)
        setSelectedPlayers([...selectedPlayers,playerData1])
        toast("Player added successfully")
    }
    return (
        <div>
            <div > 
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
      <button disabled={isSelected} onClick={()=>{handleSelected(player)
        }
        } class="btn btn-primary ">{isSelected=== true?"selected":"choose player"}</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default PlayerCard;