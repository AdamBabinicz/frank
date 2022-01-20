import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe" id="subskrybuj">
      <div className="content">
        <h2>Pamiętaj o Ofiarach zbrodnii hitlerowskich!</h2>
        <form
          action="https://getform.io/f/c0044079-c601-4799-b82c-8b204c636bf6"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Wpisz swój email" />
            <button className="btn">Wyślij</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>Tak, zgadzam się na otrzymywanie wiadomości e-mail.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
