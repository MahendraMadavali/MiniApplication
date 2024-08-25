
import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import MyMoves from './Components/MyMoves';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(()=>{
const fetchData = async () => {
const data = await fetch("https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details");
const jsonData = await data.json()
setData(jsonData);
}
fetchData();
  },[]);

  console.log(data)
  return (
    <div className="App">
      <Sidebar />
      <MyMoves data={data}/>
    </div>
  );
}

export default App;
