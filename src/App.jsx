import React, { useState } from 'react'
import './App.css'
import PlayDice from './components/PlayDice'
import RollDice from './components/RollDice'

const App = () => {

    const [diceShow, setDiceShow] = useState(true);
    const [rollShow, setRollShow] = useState(false);

    return (
        <div>
            <PlayDice diceShow={diceShow} setDiceShow={setDiceShow} setRollShow={setRollShow} />
            <RollDice rollShow={rollShow} setRollShow={setRollShow} setDiceShow={setDiceShow} />
        </div>
    )
}

export default App
