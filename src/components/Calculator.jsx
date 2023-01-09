import React, { useState } from "react";
import { MdBackspace } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

const Calculator = () => {

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    const inputNum = (e) => {
        let input = e.target.value
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    const clear = () => {
        setNum(0);
    }

    const porcentagem = (e) => {
        setNum(num / 100);
    }

    const operatorHandler = (e) => {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    const calculate = () => {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        } else if(num == 0) {
            setNum(0)
        }
    }

    const backClick = () => {
        if (num === 0) {
            return
        } else {
            const value = num.slice(0, -1)
            if (value == 0) {
                setNum(0)
            }
            else {
                setNum(value)
            }
        }
    }

    return (
        <div className="container-fluid text-center mt-5">
            <h3 className="mb-3 text-danger">MohammadTaghipour</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                    <div className="calculator">
                        <input id="inpuVal" type='text' value={num} />
                        <div className="back-click d-flex mt-2">
                            <button className="back-btn" onClick={backClick}><MdBackspace /></button>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="more-number-btn d-flex flex-column">
                                <button className="c-color" onClick={operatorHandler} value={'X'}><AiOutlineClose /></button>
                                <button className="c-color" onClick={operatorHandler} value={'-'}>-</button>
                                <button className="c-color" onClick={operatorHandler} value={'+'}>+</button>
                                <button className="entry-point" onClick={calculate}>=</button>
                            </div>
                            <div className="number-btn flex-wrap">
                                <div className="row">
                                    <div className="col-4"><button onClick={operatorHandler} value={'/'} className="c-color">/</button></div>
                                    <div className="col-4"><button onClick={porcentagem} className="c-color">%</button></div>
                                    <div className="col-4"><button onClick={clear} className="c-red">C</button></div>
                                    <div className="col-4"> <button onClick={inputNum} value={9}>9</button></div>
                                    <div className="col-4"> <button onClick={inputNum} value={8}>8</button></div>
                                    <div className="col-4"><button onClick={inputNum} value={7}>7</button></div>
                                    <div className="col-4"><button onClick={inputNum} value={6}>6</button></div>
                                    <div className="col-4"><button onClick={inputNum} value={5}>5</button></div>
                                    <div className="col-4"><button onClick={inputNum} value={4}>4</button></div>
                                    <div className="col-4"><button onClick={inputNum} value={3}>3</button></div>
                                    <div className="col-4"> <button onClick={inputNum} value={2}>2</button></div>
                                    <div className="col-4"><button onClick={inputNum} value={1}>1</button></div>
                                    <div className="col-4 m-auto"><button onClick={inputNum} value={0}>0</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;