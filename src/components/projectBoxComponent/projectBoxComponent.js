import React from "react";
import styles from "./projectBoxComponent.module.css"

const ProjectBoxComponent = ({date, title, description, link}) => {
    return <div className={styles.box}>
                <time className={styles.projectDate}>{date}</time>
                <a className={styles.githubAnchor}href={link} target="_blank" rel="noreferrer">{title}</a>
                <p className={styles.desc}>{description}</p>
            </div>
};

export default ProjectBoxComponent;