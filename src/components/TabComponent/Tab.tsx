import { useEffect, useState } from "react"
import calcBays from "../../services/calcBays"
import shimpmentsStore from "../../stores/shipmentsStore"
import { observer } from "mobx-react"
import styles from "./Tab.module.css"
import BurgerButton from "../BurgerButton/BurgerButton"

const TabComponent = () => {
    const [showHeadings, setShowHeadings] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth > 500)
    const [bays, setBays] = useState<number[][] | null>([])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth > 500)
            if (window.innerWidth > 500) {
                setShowHeadings(true)
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (shimpmentsStore.current) setBays(calcBays(shimpmentsStore.current!.boxes))
    }, [shimpmentsStore.current]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={styles.tabContainer}>
            {shimpmentsStore.list ? <>
                <div className={styles.tabHeadingContainer} style={{ display: showHeadings ? "flex" : "none" }}>
                    <h2 className={styles.tabHeadingOfHeadings}>SHIPMENT LIST</h2>
                    {shimpmentsStore.list.map((el) => (
                        <button className={[styles.tabHeading, el.id === shimpmentsStore.current?.id && styles.tabHeadingCurrent].join(" ")} onClick={() => {
                            shimpmentsStore.setCurrent(el)
                            if (!isMobile) setShowHeadings(false)
                        }} key={el.id}>{el.name}</button>
                    ))
                    }
                </div>
                <div className={styles.tabContentContainer}>
                    <h3 className={styles.companyName}>{shimpmentsStore.current?.name}</h3>
                    <p className={styles.companyEmail}>{shimpmentsStore.current?.email}</p>
                    <p className={styles.cargoBoxesHeading}>CARGO BOXES</p>
                    <p className={styles.cargoBoxes}>{shimpmentsStore.current?.boxes}</p>
                    <h4 className={styles.boxesHeading}>NUMBER OF REQUIRED CARGO BAYS</h4>
                    <p className={styles.amountOfBoxes} style={{color : bays ? "" : "red"}}>{bays ? bays.length : "One or more boxes over 10"}</p>
                    <div className={styles.boxesContainer}>
                        {bays ? bays.map((el) => (<span className={styles.box} key={el.join("-")}>{el.join(" | ")}</span>)) : ""}
                    </div>
                </div>
                <BurgerButton onClick={() => setShowHeadings((prevState) => !prevState)} showHeadings={showHeadings} />
            </> : <p> Loading...</p >}

        </div>)
}

export default observer(TabComponent)