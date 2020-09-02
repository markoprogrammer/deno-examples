import React from "https://dev.jspm.io/react@16.13.1";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
      table: any;
      thead: any;
      tbody: any;
      tr: any;
      th: any;
      td: any;
    }
  }
}

const App = () => {
  const [attendees, setAttendees] = React.useState([]);

  const fetcAttendees = () => {
    const url = "http://localhost:3000/api/v1/attendees";
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setAttendees(data));
  };

  // React.useEffect(() => {
  //   fetcAttendees();
  // }, []);

  return (
    <div className="centered-rows m-6">
      <h1 className="title has-text-centered my-3">Hello Quantox conf!</h1>
      <div className="centered-rows is-full my-3">
        <button className="button is-primary" onClick={() => fetcAttendees()}>Get Attendees 🦕</button>
      </div>
      <table className="table">
        <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
          <tbody>
          {attendees.map((attendee: any, index: number) => (
            <tr key={index}>
              <th>{(index + 1) + '.'}</th>
              <td>{attendee.name}</td>
              <th>{attendee.email}</th>
              <td>{attendee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Export the component as the _default export_.
 */
export default App;
