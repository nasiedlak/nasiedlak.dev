import React from "react";
import styles from "./dropdownComponent.module.css"

const DropdownComponent = ({title, date}) => {
    return (
            <div className={styles.dropdown}>
                <h3 className={styles.title}>{title}</h3>
                <time className={styles.date}>{date}</time>
            </div>
    );    
};

export default DropdownComponent;