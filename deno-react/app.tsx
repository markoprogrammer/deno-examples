import React from "https://dev.jspm.io/react@16.13.1";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
    }
  }
}

const App = () => {
  const [count, setCount] = React.useState(0);

  const fetcAttendees = () => {
    fetch('http://localhost:3000/api/v1/attendees')
      .then((response) => response.json());
      .then(data => console.log(data));
  }

  return (
    <div>
      <h1>Hello Quantox conf!</h1>
      <button onClick={() => fetcAttendees()}>Click the 🦕</button>
      <p>You clicked the 🦕 {count} times</p>
    </div>
  );
};

/**
 * Export the component as the _default export_.
 */
export default App;