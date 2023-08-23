import './App.css';
import Tab from './components/TabComponent/Tab';
import { observer } from 'mobx-react';
import Search from './components/SearchComponent/Search'


function App() {
  return (
    <main className="App">
      <Tab /> 
      <Search/>
    </main>
  );
}

export default observer(App);
