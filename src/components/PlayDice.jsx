import React from 'react'
import '../App.css'
import DiceImg from '../assets/dice.png'
import clickingSoundEffect from '../assets/Sound Effects/clicking.mp3'

const PlayDice = ({ diceShow, setDiceShow, setRollShow }) => {

    if (!diceShow) {
        return
    }

    function playClickSound() {
        const audio = new Audio(clickingSoundEffect);
        audio.play();
    }

    return (
        <>
            <div className='play-dice flex items-center justify-center h-screen w-full gap-5'>
                <div>
                    <img src={DiceImg} alt="dice" />
                </div>
                <div className='flex flex-col items-end gap-4'>
                    <h1 className='text-8xl font-semibold'>DICE GAME</h1>
                    <button className='bg-black text-white px-6 py-1 rounded-lg text-ms hover:bg-white hover:text-black border-2 border-black transition duration-300'
                        onClick={() => {
                            playClickSound();
                            setDiceShow(false);
                            setRollShow(true);
                        }}>Play Now</button>
                </div>
            </div>
        </>
    )
}

export default PlayDice
