import React, {useState} from 'react'
import PowerupButton from './powerup-button'
import Image from 'next/image'
import { motion } from "framer-motion";

const PowerUpModal = ({toggleModal, coins, setCoins, setPowerUps}) => {
     
    const handlePurchase = (powerUp, cost) => {
        if (coins >= cost) {
          setCoins(coins - cost);
          setPowerUps(prev => ({
            ...prev,
            [powerUp]: prev[powerUp] + 1,
          }));
          
          alert(`${powerUp} power-up purchased!`);
        } else {
          alert('Insufficient coins!');
        }
      };

  return (
    <div className="fixed -inset-10 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg w-96">
            
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">Power-ups</h2>
                <button onClick={toggleModal} className="text-4xl font-bold text-gray-700">&times;</button>
            </div>
            
            <div className="space-y-4">
                <span className="flex items-center space-x-1 ml-1 font-semibold">
                    <span>Coin Balance : {coins}</span>
                    <Image src="/coin.png" width={20} height={20} alt="coin" />
                </span>
            
                <PowerupButton text={"50/50 :"} onClick={() => handlePurchase('50/50', 5)} coinsRequired={5} coins={coins}/>
                <PowerupButton text={"Skip :"} onClick={() => handlePurchase('Skip', 3)} coinsRequired={3} coins={coins}/>
                <PowerupButton text={"Hint :"} onClick={() => handlePurchase('Hint', 2)} coinsRequired={2} coins={coins}/>
                <PowerupButton text={"Freeze Time 30s :"} onClick={() => handlePurchase('Freeze Timer', 2)} coinsRequired={2} coins={coins}/>
        
            </div>
        
        </div>
    </div>
  )
}

export default PowerUpModal