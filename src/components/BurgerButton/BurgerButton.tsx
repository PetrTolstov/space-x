import styles from "./BurgerButton.module.css"

const BurgerButton = ({ onClick, showHeadings }: { onClick: () => void; showHeadings: boolean; }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <img src={showHeadings ?  "/Cross.svg" : "/Burger.svg" } alt="Menu" width="20" height="20" className={styles.img} />
        </button>
    )
}

export default BurgerButton