import Table from "react-bootstrap/Table";

const MuridList = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Daftar Murid</h5>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Kelas</th>
              </tr>
            </thead>
            <tbody>
              {props.dataMurid.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.nama}</td>
                    <td>{item.kelas}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MuridList;
