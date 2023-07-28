import styles from './RickAndMortyComponent.module.css'

const RickAndMortyComponent=(character)=>{
    const {id, name, status, species, gender,image}=character;
    return(
        <div className={styles.container}>
            <img src={image} alt={''}></img>
            <h2>ID: {id}, {name}</h2>
            <h3>{status} - {species}</h3>
            <h3>{gender}</h3>
        </div>
    )
}

export default RickAndMortyComponent;