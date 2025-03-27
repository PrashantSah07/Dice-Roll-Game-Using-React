import React, { useState } from 'react'
import '../App.css'
import dice_1 from '../assets/dice_1.png'
import dice_2 from '../assets/dice_2.png'
import dice_3 from '../assets/dice_3.png'
import dice_4 from '../assets/dice_4.png'
import dice_5 from '../assets/dice_5.png'
import dice_6 from '../assets/dice_6.png'
import rollingDiceSoundEffect from '../assets/Sound Effects/rolling-dice.mp3'
import winningSoundEffect from '../assets/Sound Effects/win.mp3'
import loosingSoundEffect from '../assets/Sound Effects/loose.mp3'
import clickingSoundEffect from '../assets/Sound Effects/clicking.mp3'

const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

const RollDice = ({ rollShow, setRollShow, setDiceShow }) => {

    const [showRule, setShowRule] = useState(false);
    const [active, setActive] = useState(null);
    const [score, setScore] = useState(0);
    const [rolledValue, setRolledValue] = useState(1);
    const [error, setError] = useState(false);

    if (!rollShow) {
        return
    }

    function playRolling() {
        const audio = new Audio(rollingDiceSoundEffect);
        audio.play();
    }

    function playWin() {
        const audio = new Audio(winningSoundEffect);
        audio.play();
    }

    function playloose() {
        const audio = new Audio(loosingSoundEffect);
        audio.play();
    }

    function playClickSound() {
        const audio = new Audio(clickingSoundEffect);
        audio.play();
    }


    return (
        <>
            <div className='select-number flex justify-between mx-14 my-10'>
                <div className='flex flex-col w-fit justify-center items-center'>
                    <h1 className='text-6xl font-medium'>{score}</h1>
                    <p className='font-semibold'>Total Score</p>
                </div>
                <div className='select-number-boxes flex flex-col items-end'>
                    <div className='flex gap-3'>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <button key={num} className={`border-2 px-3 py-1.5 font-bold ${active === num ? "bg-black text-white" : "bg-gray-200"}`} onClick={function () {
                                playClickSound();
                                setActive(num)
                                setError(false);
                            }}>{num}
                            </button>
                        ))}
                    </div>
                    {error ? <p className='font-bold mt-3 text-red-600' >Please select a number first!</p> :
                        <p className='font-bold mt-3'>Select Number</p>}
                </div>
            </div>
            <div className='shadow-2xl rounded-xl flex flex-col gap-3 w-fit mx-auto py-5 px-5 text-center'>
                <div className='flex justify-center'>
                    <img className='w-30 cursor-pointer' src={diceImages[rolledValue - 1]} alt={`Dice ${rolledValue}`}
                        onClick={() => {
                            if (active === null) {
                                setError(true);
                                return;
                            }

                            playRolling();

                            let computerValue = Math.floor(Math.random() * 6) + 1;
                            setRolledValue(computerValue);

                            if (computerValue === active) {
                                setTimeout(() => {
                                    playWin();
                                }, 500);
                                setScore(prevScore => prevScore + active);
                            } else {
                                playloose();
                                setScore(prevScore => prevScore - 2);
                            }
                            setActive(null);
                        }}
                    />
                </div>
                <p>Click on Dice to roll</p>
                <button className='border-2 px-6 rounded-lg text-ms py-0.5 hover:bg-black hover:text-white border-black transition duration-200' onClick={function () {
                    playClickSound();
                    setScore(0);
                }}>Reset Score</button>
                <button className='bg-black text-white px-6 py-1 rounded-lg text-ms hover:bg-white hover:text-black border-2 border-black transition duration-200' onClick={function () {
                    playClickSound();
                    setShowRule(!showRule)
                }} >{showRule ? 'Hide Rule' : 'Show Rule'}
                </button>
            </div>
            {showRule &&
                <div className='rules bg-red-200 flex flex-col gap-4 my-10 w-180 mx-auto py-5 px-7 rounded-xl'>
                    <h2 className='font-bold text-2xl'>How to play dice game</h2>
                    <div className='text-sm'>
                        <ul className='list-decimal list-inside pl-1 flex flex-col gap-2'>
                            <li>Select any number</li>
                            <li>Click on the dice image</li>
                            <li>
                                If the selected number matches the dice number, you earn the same points as the dice.
                            </li>
                            <li>If your guess is wrong, 2 points will be deducted.</li>
                        </ul>

                    </div>
                </div>

            }
            <div className={`ml-10 mt-10 mb-10`}>
                <button className='bg-red-600 text-white px-6 py-1 rounded-lg border-2 border-red-600 hover:bg-white hover:text-red-600 transition duration-200' onClick={function () {
                    playClickSound();
                    setRollShow(false);
                    setDiceShow(true);
                }}>Quit Game</button>
            </div>
        </>
    )
}

export default RollDice
