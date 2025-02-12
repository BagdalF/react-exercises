import { useState } from "react";
import { FaTshirt } from "react-icons/fa";
import "./Escalation.css";
import { Formation } from "../../Cup";

interface IProps {
  formation: Formation;
}

interface Player {}

const starterTeam: Player[] = [
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
  { a: "teste" },
];

const Escalation = (props: IProps) => {
  const [escalation, setEscalation] = useState<Player[]>(starterTeam);

  console.log(Object.keys(props.formation)[0]);

  // for (let i = Number(Object.keys(props.formation).length); i > 1; i--) {
  //   console.log(i);

  // }

  return (
    <section className="escalation">
      {Array.from(
        { length: Number(Object.keys(props.formation).length) },
        (_, i) => i
      ).map((_zone, _zoneIndex) => {
        if (_zoneIndex === 0) return;
        return (
          <article className={`${Object.keys(props.formation)[_zoneIndex]}`}>
            {Array.from(
              { length: Object.values(props.formation)[_zoneIndex] },
              (_, i) => i
            ).map((_player, _playerIndex) => {
              return (
                <>
                  <div className={`player`}>
                    <FaTshirt key={_playerIndex} size={96} />
                  </div>
                </>
              );
            })}
          </article>
        );
      })}
      <article className="goalkeeper">
        <div className={`player`}>
          <FaTshirt key={0} size={96} />
        </div>
      </article>
    </section>

    // <section className="escalation">
    //   <article className="attack">
    //     {Array.from({ length: props.formation.playersAttack }, (_, i) => i).map(
    //       (_player, index) => {
    //         return (
    //           <div className={`player`}>
    //             <FaTshirt key={index} size={96} />
    //           </div>
    //         );
    //       }
    //     )}
    //   </article>
    //   <article className="midfield">
    //     {Array.from(
    //       { length: props.formation.playersMidfield },
    //       (_, i) => i
    //     ).map((_player, index) => {
    //       return (
    //         <div className={`player`}>
    //           <FaTshirt key={index} size={96} />
    //         </div>
    //       );
    //     })}
    //   </article>
    //   <article className="defense">
    //     {Array.from(
    //       { length: props.formation.playersDefense },
    //       (_, i) => i
    //     ).map((_player, index) => {
    //       return (
    //         <div className={`player`}>
    //           <FaTshirt key={index} size={96} />
    //         </div>
    //       );
    //     })}
    //   </article>
    //   <article className="goalkeeper">
    //     <div className={`player`}>
    //       <FaTshirt key={0} size={96} />
    //     </div>
    //   </article>
    // </section>
  );
};

export default Escalation;
