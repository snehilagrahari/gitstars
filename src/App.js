import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios'
import DataTable from './Components/DataTable';

function App() {
  const [data,setData] = useState([]);
  const [language,setLanguage] = useState("all");
  const [L,setL] = useState(true);

  const getData = ()=>{
    setL(true);
    axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}`).then((res)=>{
      setData(res.data)
      console.log(res.data);
      setL(false);
    })
    .catch(err=>{
      console.log(err);
      setL(false);});

  }

  const setLang = (val)=>{
    setLanguage(val);
  }
  useEffect(()=>{
    getData();
  },[language,getData])
  return (
    <div className="App">
      <Navbar handleClick={setLang}/>
       <h3>selected : {language}</h3>
      <DataTable data={data} loading={L} />
    </div>
  );
}

export default App;
