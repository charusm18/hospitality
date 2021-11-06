import { useEffect, useState } from 'react';
import { Form } from './Form';
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState('No data :(');
  console.log(API_URL);
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/showrequests`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data[0].msg);
    }
    getData();
  }, []);

  return (
    <>
      <h1>MERN App!</h1>
      <Form></Form>
      <p>Data from server: {data}</p>
    </>
  );
}

export default App;
