import React from "react";
import { Button } from "react-bootstrap";

export default class MuridCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      kelas: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Buat Murid</h5>
            <input
              type="text"
              placeholder="Nama"
              className="form-control"
              onChange={(event) => {
                this.setState({ nama: event.target.value });
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Kelas"
              className="form-control"
              onChange={(event) => {
                this.setState({ kelas: event.target.value });
              }}
            />
            <br />
            <Button
              onClick={() => {
                this.props.onCreateMurid(this.state);
              }}
            >
              Tambah
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// const MuridCreate = (props) => {

//   const [getInputMurid, setInputMurid] = useState('');
//   const [getInputKelas, setInputKelas] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newMurid = {
//       nama: getInputMurid,
//       kelas: getInputKelas,
//     };

//     props.onCreateMurid(newMurid);
//   }

//   const handleInputMurid = (event) => {
//     setInputMurid(event.target.value);
//   }

//   const handleInputKelas = (event) => {
//     setInputKelas(event.target.value);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Nama</label>
//         <input type="text" name="nama" onChange={handleInputMurid} />
//         <br />
//         <label>Kelas</label>
//         <input type="text" name="kelas" onChange={handleInputKelas} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default MuridCreate;
