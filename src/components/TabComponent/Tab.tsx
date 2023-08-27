import { useEffect, useState } from "react"
import shipmentType from "../../types/shipmentType"
import calcBays from "../../services/calcBays"
import shimpmentsStore from "../../stores/shipmentsStore"
import { observer } from "mobx-react"
import styles from "./Tab.module.css"
import BurgerButton from "../BurgerButton/BurgerButton"

const TabComponent = () => {
    const [showHeadings, setShowHeadings] = useState(true)
    const [isMobile, setIsMobile] = useState(true)

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


    return (
        <div className={styles.tabContainer}>
            {shimpmentsStore.list ? <>
                <div className={styles.tabHeadingContainer} style={{ display: showHeadings ? "flex" : "none" }}>
                    <h2 className={styles.tabHeadingOfHeadings}>SHIPMENT LIST</h2>
                    {shimpmentsStore.list.map((el) => (
                        <button className={[styles.tabHeading, el.id == shimpmentsStore.current?.id && styles.tabHeadingCurrent].join(" ")} onClick={() => {
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
                    <p className={styles.amountOfBoxes}>{calcBays(shimpmentsStore.current!.boxes).length}</p>
                    <div className={styles.boxesContainer}>
                        {calcBays(shimpmentsStore.current!.boxes).map((el) => (<span className={styles.box}>{el.join(" | ")}</span>))}
                    </div>
                </div>
                <BurgerButton onClick={() => setShowHeadings((prevState) => !prevState)} showHeadings={showHeadings} />
            </> : <p> Loading...</p >}

        </div>)
}

export default observer(TabComponent)