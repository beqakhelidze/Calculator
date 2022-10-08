import { useState, useCallback,React } from "react";
import Buttons from "./Components/Buttons";
import Screen from "./Components/Screen";
import "./App.scss";

const Patterns = {
  isOperator : /[/+⋅^-]+/,
  isNumber: /[0-9.]+/,
  isNumberComma: /[0-9.]+/,
  Trimmer: /(^[/+^]+)|([/+^-]+$)/g,
  Equal : /=/,
}



const App = () =>{

  const [Whole, setWhole] = useState("0");
  
  const [Current, setCurrent] = useState("0");

  const [hasComma, setComma] = useState(false);

  const CheckIfAnswered = (Value)=>{
    if (Patterns.Equal.test(Whole)){
      if (Value == "." && Current%1!=0){
          Value = "";
      }
      setWhole(Current+Value);
      setCurrent(Current + Value);
      return true;
    }else{
      return false;
    }
  }

  const NumberLimit = (Value) =>{
    if (Current != "DIGIT LIMIT MET"){
      setCurrent("DIGIT LIMIT MET");
      setTimeout(() => {
        setCurrent(Value);
      }, 1300);
    }
  }

  const ChangeNumberValues = (Value) =>{
    if (CheckIfAnswered(Value)){
      return;
    };
    if (Current.length >= 18 || Current == "DIGIT LIMIT MET"){
      NumberLimit(Current);
      return;
    }
    if (Current === "0"){
      let replace = Whole.slice(0, -1) + Value;
      setWhole(replace);
      setCurrent(Value);
    }else{
      if (Patterns.isNumber.test(Current)){
        setCurrent(Current+Value);
      }else{
        setCurrent(Value);
      }
      setWhole(Whole+Value);
    }
  }

  const ChangeOperator = (Value) =>{
     if (CheckIfAnswered(Value)){
        return;
     };
     
     Value = Value.replace("x", "⋅");

     if (Whole == "0" || (Whole.length == 1 && Patterns.isOperator.test(Whole))){
       setWhole(Value);
       setCurrent(Value);
       return;
     }
     
     if (!(Patterns.isNumber.test(Current)) && !(Value == "-" && Current != "-" )){

      if (!Patterns.isNumber.test(Whole[Whole.length-2]) && Value!="-"){
        const replaced = Whole.slice(0,-2)+Value;
        setWhole(replaced);
      }else{
        const replaced = Whole.slice(0,-1)+Value;
        setWhole(replaced);
      }
     }else{
       setWhole(Whole+Value);
       setComma(false);
     }
     setCurrent(Value);
  }

  const ChangeComma = () =>{
    if (CheckIfAnswered(".")){
      return;
   };
    if (Current === "." || hasComma){
      return;
    }else{
      if (!Patterns.isNumber.test(Current)){
          setWhole(Whole+"0.")
          setCurrent(Current+"0.");
      }else{
        setWhole(Whole+".");
        setCurrent(Current+".");
      }
      setComma(true);
    }
  }

  const MakeZero = () =>{
    setCurrent("0");
    setWhole("0");
    setComma(false);
  } 

  const CalculateAnswer = () =>{
      const Value = Whole.replace(Patterns.Trimmer,"")
                          .replace("⋅","*");               
      let result = eval(Value);
      setCurrent(result);
      setWhole(Whole+"="+result);
  }

  return (  

    <div className='Calculator'>
      <Screen Equation = {Whole} Answer={Current}/>
      <Buttons ChangeNumberValues = {ChangeNumberValues}
                ChangeOperator = {ChangeOperator}
                MakeZero = {MakeZero}
                CalculateAnswer = {CalculateAnswer}
                ChangeComma = {ChangeComma}
       />
    </div>

  )
}


export default App;