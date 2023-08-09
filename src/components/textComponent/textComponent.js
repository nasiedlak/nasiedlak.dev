import React from "react";
import styles from "./textComponent.module.css";

const TextComponent = ({location, text}) => {
    let textStyle;
    switch(location) {
        case "welcomeMessage":
            textStyle = styles.welcomeMessage;
            break;
        case "aboutMe":
            textStyle = styles.aboutMe;
            break;
        case "school":
            textStyle = styles.school;
            break;
        case "projects":
            textStyle = styles.projects;
            break;
        case "experiences":
            textStyle = styles.experiences;
            break;
        case "skills":
            textStyle = styles.skills;
            break;
        case "desc1":
            textStyle = styles.desc1;
            break;
        case "desc2":
            textStyle = styles.desc2;
            break;
        case "desc3":
            textStyle = styles.desc3;
            break;
        default:
            break;
    }
    return <div className={textStyle}>{text}</div>
};

export default TextComponent;