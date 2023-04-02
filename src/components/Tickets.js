import React from "react";
import "../static/scss/tickets.scss";
import { tickets } from "../static";
//

export default function Tickets() {
  const [curTicket, setTicket] = React.useState(-1);

  //
  return (
    <article className="tickets">
      {list_of_ticket.map((e, i) => {
        return (
          <Ticket
            name={e.name}
            index={i}
            setTicket={setTicket}
            key={`${e.name}-${i}`}
          />
        );
      })}
      {curTicket > -1 && (
        <Modal details={list_of_ticket.at(curTicket)} setTicket={setTicket} />
      )}
    </article>
  );
}
//
function Ticket(props) {
  const [hoverTicket, setHover] = React.useState("none");

  const showDiv = { display: `${hoverTicket}` };

  return (
    <section>
      <img src={tickets[props.name]} alt="" />
      <div>
        <h1>Ticket Color</h1>
        <p>
          - As an in-app currency. <br /> - The game will be divided into three
          levels: easy, medium, and hard. In each level, you will have to get a
          corresponding ticket when you win. <br /> For example, the easy level
          gets a red ticket, the medium level gets a green ticket and the hard
          level gets a blue ticket. And every day these tickets will be random
          for each level.
        </p>
      </div>
    </section>
  );
}

const list_of_ticket = [
  {
    name: "white",
    content:
      "- As an in-app currency. <br/> - Every day when you log in to the application you will be given seven blank tickets. Or by depositing money to change to a blank ticket. The redemption level will be determined as follows: 1 ether = 21 white tickets. <br/> - To play the game you will need to draw an empty ticket. ",
  },
  {
    name: "red",
    content:
      "- As an in-app currency. <br/> - The game will be divided into three levels: easy, medium, and hard. In each level, you will have to get a corresponding ticket when you win. For example, the easy level gets a red ticket, the medium level gets a green ticket and the hard level gets a blue ticket. And every day these tickets will be random for each level. ",
  },
  {
    name: "green",
    content:
      "- As an in-app currency. <br/> - The game will be divided into three levels: easy, medium, and hard. In each level, you will have to get a corresponding ticket when you win. For example, the easy level gets a red ticket, the medium level gets a green ticket and the hard level gets a blue ticket. And every day these tickets will be random for each level. ",
  },
  {
    name: "blue",
    content:
      "- As an in-app currency. <br/> - The game will be divided into three levels: easy, medium, and hard. In each level, you will have to get a corresponding ticket when you win. For example, the easy level gets a red ticket, the medium level gets a green ticket and the hard level gets a blue ticket. And every day these tickets will be random for each level. ",
  },
  {
    name: "black",
    content:
      "- As an in-app currency. <br/> - Convert to the ether? <br/> - To get a black ticket you need to spend: 0.001 ether, a red ticket, a green ticket, and a blue ticket. <br/> - Black tickets will be used in in-store NFT exchanges. And to match a complete NFT you will have to pay a black ticket. ",
  },
];
