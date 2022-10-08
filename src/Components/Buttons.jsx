

const Buttons = ({ ChangeNumberValues, ChangeOperator, MakeZero, CalculateAnswer, ChangeComma }) => {
    return (
        <div className='Buttons'>
            <button onClick={() => MakeZero()} className='AC'>AC</button>
            <button onClick={() => ChangeOperator("/")} >/</button>
            <button onClick={() => ChangeOperator("x")}>x</button>
            <button onClick={() => ChangeNumberValues("7")}>7</button>
            <button onClick={() => ChangeNumberValues("8")}>8</button>
            <button onClick={() => ChangeNumberValues("9")}>9</button>
            <button onClick={() => ChangeOperator("-")}>-</button>
            <button onClick={() => ChangeNumberValues("4")}>4</button>
            <button onClick={() => ChangeNumberValues("5")}>5</button>
            <button onClick={() => ChangeNumberValues("6")}>6</button>
            <button onClick={() => ChangeOperator("+")}>+</button>
            <button onClick={() => ChangeNumberValues("1")}>1</button>
            <button onClick={() => ChangeNumberValues("2")}>2</button>
            <button onClick={() => ChangeNumberValues("3")}>3</button>
            <button onClick={() => CalculateAnswer()} id="equals" className='Equal'>=</button>
            <button onClick={() => ChangeNumberValues("0")} className='Null'>0</button>
            <button onClick={() => ChangeComma(".")}>.</button>
        </div>
    )
}

export default Buttons;