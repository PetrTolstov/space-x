import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import shipmentType from './types/shipmentType';
import Tab from './components/TabComponent/Tab';
import fetchShipments from './services/fetchShipments';

function App() {
    const [shipments, setShipment] = useState<shipmentType[] | null>(null)

    useEffect(() => {
        fetchShipments().then((list) => {
            if(list){
                setShipment(list)
            }else{
                //Create toast
            }
        })
    }, [])


  return (
    <main className="App">
      {shipments ? <Tab shipments={shipments}/> : <p>Loading...</p>}
    </main>
  );
}

export default App;
