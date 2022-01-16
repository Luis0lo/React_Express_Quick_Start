import './index.css';

import { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
    console.log(backendData);
  }, []);

  return backendData.users ? (
    <div className="App">
      <h1>Backend Data</h1>
      {backendData.users.map((user, i) => {
        console.log(user);
        return <p key={i}>{user}</p>;
      })}
    </div>
  ) : (
    <div>Loading....</div>
  );
}

export default App;
