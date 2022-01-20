import React from "react";
import "./Developer.css";
import Terminal from "../../assets/1.png";

const Developer = () => {
  return (
    <div className="developers" id="dziennik">
      <div className="container">
        <div className="left">
          <h2>
            Anne Frank symbolem tragicznych losów Żydów podczas II wojny
            światowej.
          </h2>
          <p>
            W Dzienniku Anne Frank
            <span className="blue"> wojna nie jest głównym tematem</span>. Anne
            opisuje codzienność w ukryciu i relacje, czasami bardzo trudne,
            pomiędzy skazanymi na siebie mieszkańcami Oficyny (jak nazywano
            kryjówkę), w której – do czasu denuncjacji i aresztowania – przeżyli
            dwa lata. Anne opisuje też własne przemyślenia, uczucia i – co
            najbardziej dojmujące – plany na przyszłość, które nigdy się nie
            spełnią, bo dziewczynka umrze na tyfus w obozie koncentracyjnym.
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Terminal} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
