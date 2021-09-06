import React,{useState,useEffect} from 'react';
import Map from './Map';


function MapContainer() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('Final_data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item,i)=><p key={i}>{item.about}</p>)
     }
     { data && data.length>0 && <Map data = {data}></Map>}
    </div>
  );
}

export default MapContainer;