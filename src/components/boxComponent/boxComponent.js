import React from "react";
import styles from "./boxComponent.module.css"

const BoxComponent = () => {
    const githubLink = "https://github.com/nasiedlak"
    const linkedinLink = "https://www.linkedin.com/in/nasiedlak/"
    const instagramLink = "https://www.instagram.com/coopnastf/"
    return (
        <div className={styles.box}>
            <div className={styles.iconWrapper}>
                <a className={styles.imageAnchor} href={githubLink}>
                    <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" className={styles.iconGitHub} />
                </a>
                <a className={styles.imageAnchor} href={linkedinLink}>
                    <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" className={styles.iconLinkedIn} />
                </a>
                <a className={styles.imageAnchor} href={instagramLink}>
                    <img src={`${process.env.PUBLIC_URL}/Instagram.png`} alt="Instagram" className={styles.iconInstagram} />
                </a>
            </div>
        </div>
    );
};

export default BoxComponent;