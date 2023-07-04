import styles from "./SimpsonsComponent.module.css";

const SimpsonsComponent =(simpson)=>{
    const {name,surname,age,info,photo}=simpson;
    return(
        <div className={styles.container}>
            <div className={styles.photo}> <img src={photo} alt={'simpson'}></img>  </div>
            <h2>{name} {surname}</h2>
            <h4>Age: {age}</h4>
            <h5>{info}</h5>
        </div>
    )
}

export default SimpsonsComponent;