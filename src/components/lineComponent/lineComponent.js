import React from "react";
import styles from "./lineComponent.module.css";

const LineComponent = ({position}) => {
    const lineStyle = {
        top: position === "top" ? "45px" : "unset",
        bottom: position === "bottom" ? "45px" : "unset",
    };
    return <div className={styles.lineComponent} style={lineStyle}></div>;
};

export default LineComponent;