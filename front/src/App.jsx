import { useState } from 'react'

import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'

export default function App() {
  // Estados
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  // Ctes
  const btnValues = [
    ["C","/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "="],
  ];
  const valid_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const valid_signs = ["+", "-", "X", "/"]
  // Funciones
  const resetClickHandler = () => {

    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };
              
  const numberToString = (num) => num.toString()

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML; // Para obtener el valor que entrega el onClick
    if (valid_numbers.includes(value)) {
      if (numberToString(calc.num).length < 16) {
        setCalc({
          ...calc,
          num: 
            calc.num === 0 && value === "0"
            ? "0"
            : numberToString(calc.num) % 1 === 0
            ? Number(numberToString(calc.num + value))
            : calc.num + value,
          res: !calc.sign ? 0 : calc.res,
        })
      }
    }

    
  }

  const signClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      if (valid_signs.includes(value)) {
        setCalc({
          ...calc,
          sign: value,
          res: calc.num, // Se muestra el numero ingresado antes de presionar el signo
          num: 0, // Se resetea el num a 0, para que después de apretar el botón se escriba un número nuevo
        });
      } else {
        setCalc({
          ...calc,
          sign: "",
          res: 0,
          num: 0,
        });
      }
    };    

  const equalsClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (value === '=') {
      if (calc.sign === "+") {
        fetch(`http://localhost:3000/suma/${calc.res}/${calc.num}`)
        .then(res => res.json())
        .then(data => 
          setCalc({
            ...calc,
            num: 0,
            res: data.result
          }))
        .catch(err => {
          console.log(err.status);
          setCalc({
            ...calc,
            sign: "",
            res: 0,
            num: 0,
          })
        })
      } else if (calc.sign === 'X') {
        fetch(`http://localhost:3000/multiplicacion/${calc.res}/${calc.num}`)
        .then(res => res.json())
        .then(data => 
          setCalc({
            ...calc,
            num: 0,
            res: data.result
          }))
        .catch(err => {
          console.log(err.status);
          setCalc({
            ...calc,
            sign: "",
            res: 0,
            num: 0,
          })
        })
      } else if (calc.sign === '-') {
        fetch('http://localhost:3000/resta/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            param1: calc.res,
            param2: calc.num
          })
      })
        .then(res => res.json())
        .then(data => 
          setCalc({
            ...calc,
            num: 0,
            res: data.result
          }))
        .catch(err => {
          console.log(err.status);
          setCalc({
            ...calc,
            sign: "",
            res: 0,
            num: 0,
          })
        })
      } else if (calc.sign === '/') {
        fetch('http://localhost:3000/division/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            param1: calc.res,
            param2: calc.num
          })
      })
        .then(res => res.json())
        .then(data => 
          setCalc({
            ...calc,
            num: 0,
            res: data.result
          }))
        .catch(err => {
          console.log(err.status);
          setCalc({
            ...calc,
            sign: "",
            res: 0,
            num: 0,
          })
        })
      } 
    } else {
      setCalc({
        ...calc,
        sign: "",
        res: 0,
        num: 0,
      })
    }

  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
      {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : btn === "X" ? "sign" : btn === "+" ? "sign" : btn === "-" ? "sign" : btn === "/" ? "sign" : btn === "C" ? "c" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : numClickHandler
              }
            />
          );
        })}        
      </ButtonBox>
    </Wrapper>
  )
}

