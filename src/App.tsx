import styles from './App.module.css';
import Tab from './components/TabComponent/Tab';
import { observer } from 'mobx-react';
import Search from './components/SearchComponent/Search'


function App() {
    return (
        <>
            <header className={styles.header} >
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src='logo.svg' alt='SpaceX' />
                </div>
                <Search />
            </header>
            <main className="App">

                <Tab />
            </main>
        </>
    );
}

export default observer(App);
