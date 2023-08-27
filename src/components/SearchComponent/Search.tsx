import { observer } from "mobx-react"
import { ChangeEvent, useState } from "react";
import shimpmentsStore from "../../stores/shipmentsStore";
import shipmentType from "../../types/shipmentType";
import styles from "./Search.module.css"


const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<shipmentType[]>([]);


    const getSuggestions = (value: string): shipmentType[] => {
        const inputValueLower = value.toLowerCase();
        if(value === "") return []
        if (shimpmentsStore.list) {
            return shimpmentsStore.list?.filter(suggestion =>
                suggestion.name.toLowerCase().includes(inputValueLower)
            );
        }
        return []
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setSuggestions(getSuggestions(value));
    };

    const handleSuggestionClick = (suggestion: shipmentType) => {
        setInputValue(suggestion.name);
        setSuggestions([]);
        shimpmentsStore.setCurrent(suggestion)
    };

    return (
        <div className={styles.searchContainer}>
            <form className={styles.searchForm}>
                <input
                    type="search"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search"
                    className={styles.input}
                /></form>
            <ul className={styles.suggestionsList}>
                {suggestions.map((suggestion, index) => (
                    <li className={styles.suggestionItem} key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default observer(Search)