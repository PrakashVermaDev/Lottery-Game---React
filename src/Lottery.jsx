import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n = 3, winingSum = 15}) {
    let [ticket, setticket] = useState(genTicket(n));
    let isWining = sum(ticket) ===  winingSum;

    function genNewTicket() {
        setticket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
               <Ticket ticket={ticket}/>
            </div>
            <button onClick={genNewTicket}>Generate New Ticket</button>
            <h3>{isWining && "Congratulations, you won"}</h3>
        </div>
    )
}