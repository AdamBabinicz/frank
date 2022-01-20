import React, { useState } from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { GiWoodCabin } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import AboutCard from "./AboutCard";
import Modal from "../Portal/Modal";

const About = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="about" id="anne">
      <div className="container">
        <h2>"Nadal wierzę, że ludzie są z natury dobrzy."</h2>
        <p>
          Anne Frank zmarła na tyfus w lutym 1945 krótko przed wyzwoleniem obozu
          Bergen-Belsen przez Brytyjczyków.
        </p>
        <div className="card-container">
          <div className="card">
            <AboutCard
              icon={<BsBook className="icon" />}
              heading="Dziennik Anne Frank"
              text="Pamiętnik Anne, przechowany przez Holenderkę Miep Gies, jedną z osób zaangażowanych w pomoc rodzinie Franków, został opublikowany po raz pierwszy przez Ottona Franka w 1947. W kolejnych latach historię Anne przetłumaczono na 30 języków oraz przeniesiono na ekran."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<GiWoodCabin className="icon" />}
              heading="Dom przy Prinsengracht 263"
              text="Dom, gdzie Frankowie ukrywali się przez dwa lata, zamieniono w muzeum. W 2007 roku muzeum odwiedziło ponad milion osób. Budynek był dwukrotnie remontowany w 1970 i 1999 roku. 28 września 1999 królowa Holandii Beatrycze dokonała ponownego otwarcia muzeum."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiStrapi className="icon" />}
              heading="Upamiętnienie"
              text="By upamiętnić imię Anne Frank, Międzynarodowa Unia Astronomiczna nazwała jej imieniem jedną z planetoid ((5535) Annefrank) oraz jeden z kraterów na Wenus (Frank)."
            />
          </div>
        </div>
        <a onClick={() => Toggle()} className="btn">
          Czytaj
        </a>
      </div>
      <Modal
        show={modal}
        close={Toggle}
        title="Zdrajca okazał się członkiem społeczności żydowskiej"
      >
        <p>
          Naukowcy przyznali, że z trudem zaakceptowali fakt, że zdrajcą okazał
          się także Żyd. Ale znaleziono wskazówki, które sugerują, że o tym, kto
          był donosicielem, wiedział także Otto Frank - w dokumentach z
          poprzednich śledztw znaleziono kopię anonimowego listu do Otto Franka,
          którego autor właśnie van der Bergha wskazywał jako zdrajcę.
          Holenderska gazeta "De Volkskrant" pisze, że Arnold van der Bergh
          zmarł w 1950 roku.
        </p>
        <br />
        <p>
          <em>
            www.rp.pl/historia-swiata/art19296351-naukowcy-wiedza-kto-wydal-nazistom-anne-frank
          </em>
        </p>
      </Modal>
    </div>
  );
};

export default About;
