import React, { useState } from "react";
import MainVideo from "../../assets/2.mp4";
import "./Hero.css";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" srcset="../../assets/5.jpg" />
      </video>
      <div className="hero-text">
        <h2>אנה פרנק</h2>
        <h2>
          <span className="blue">Dziennik</span>
        </h2>
        <p>
          Anne otrzymała na 13. urodziny album, w którym rozpoczęła pisanie
          dziennika.
        </p>
        <div className="btn-group">
          <button className="btn" onClick={() => Toggle()}>
            Czytaj
          </button>
          <Modal show={modal} close={Toggle} title="Ucieczka przed Hitlerem">
            <p>
              Po przejęciu władzy w Niemczech przez Hitlera przeniosła się w
              1934 wraz z rodziną do Amsterdamu. Prześladowania Żydów dotarły
              również do Holandii wraz z napaścią Niemiec na ten kraj w maju
              1940. Anne i jej starsza siostra Margot Betti musiały przerwać
              naukę w szkole Montessori i przenieść się do liceum żydowskiego. W
              lipcu 1942 rodzina została zagrożona wywiezieniem do obozu
              koncentracyjnego; ojciec rodziny Otto Frank zorganizował wówczas z
              pomocą pracowników swojego przedsiębiorstwa kryjówkę w dawnej
              oficynie. Frankowie mieszkali tam od 6 lipca 1942 do 4 sierpnia
              1944.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Anne_Frank</em>
            </p>
          </Modal>
          {/* <button className="btn btn-outline">Documentation</button> */}
          <button className="btn btn-outline" onClick={() => Toggle1()}>
            Więcej
          </button>
          <Modal1
            show={modal1}
            close={Toggle1}
            title="Kto wydał Anne Frank, jej rodzinę i znajomych?"
          >
            <p>
              Zespół ekspertów, wśród których był również ex-agent FBI Vince
              Pankoke, odkrył, że osobą tą był najprawdopodobniej{" "}
              <b>Arnold van den Bergh</b>, członek żydowskiej społeczności
              Amsterdamu. - Gdy van der Bergh wykorzystał już wszystkie metody,
              które mogły ochronić jego rodzinę przed wywózką do obozu, musiał
              zaoferować Niemcom coś cennego, żeby sobie i żonie zapewnić
              bezpieczeństwo - mówił Pankoke. - Wydał więc Franków.
            </p>
            <br />
            <p>
              <em>
                www.rp.pl/historia-swiata/art19296351-naukowcy-wiedza-kto-wydal-nazistom-anne-frank
              </em>
            </p>
          </Modal1>
        </div>
      </div>
      <div className="bottom-text">
        <h2>
          Pisząc nie rozczula się nad sobą, zdaje się nigdy nie tracić nadziei.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
