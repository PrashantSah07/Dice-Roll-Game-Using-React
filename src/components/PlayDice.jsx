import React from 'react'
import '../App.css'
import DiceImg from '../assets/dice.png'

const PlayDice = ({ diceShow, setDiceShow, setRollShow }) => {

    if (!diceShow) {
        return
    }

    return (
        <>
            <div className='play-dice flex items-center justify-center h-screen w-full gap-5'>
                <div>
                    <img src={DiceImg} alt="dice" />
                </div>
                <div className='flex flex-col items-end gap-4'>
                    <h1 className='text-8xl font-semibold'>DICE GAME</h1>
                    <button className='bg-black text-white px-6 py-1 rounded-lg text-ms'
                        onClick={() => {
                            setDiceShow(false);
                            setRollShow(true);
                        }}>Play Now</button>
                </div>
            </div>
        </>
    )
}

export default PlayDice
