import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import shipmentType from './types/shipmentType';
import Tab from './components/TabComponent/Tab';
import fetchShipments from './services/fetchShipments';
import shimpmentsStore from './stores/shipmentsStore';
import { observer } from 'mobx-react';

function App() {
  return (
    <main className="App">
      <Tab /> 
    </main>
  );
}

export default observer(App);
