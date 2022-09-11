import { useState } from "react";
import MuridCreate from "./MuridCreate";
import MuridList from "./MuridList";

const Murid = () => {
  const [getMurid, setMurid] = useState([
    { nama: "Ahmad Nad", kelas: "XII RPL 1" },
    { nama: "Defri", kelas: "XII RPL 2" },
    { nama: "Rizky", kelas: "XII RPL 2" },
    { nama: "Dea", kelas: "XII AKL 1" },
    { nama: "Nana", kelas: "XI BDP 2" },
  ]);

  const eventCreateMurid = (murid) => {
    setMurid(getMurid.concat(murid));
  }

  return (
    <div>
      <MuridCreate onCreateMurid={eventCreateMurid} />
      <br/>
      <MuridList dataMurid={getMurid} />
    </div>
  );

}

export default Murid;
