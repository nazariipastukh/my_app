import './App.css';
import RickAndMortyComponent from "./components/RickAndMortyComponent.jsx";
const rickAndMorty=JSON.parse(`[
    {"id":11,"name":"Albert Einstein","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/11.jpeg","episode":["https://rickandmortyapi.com/api/episode/12"],"url":"https://rickandmortyapi.com/api/character/11","created":"2017-11-04T20:20:20.965Z"},
    {"id":10,"name":"Alan Rails","status":"Dead","species":"Human","type":"Superhuman (Ghost trains summoner)","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Worldender's lair","url":"https://rickandmortyapi.com/api/location/4"},"image":"https://rickandmortyapi.com/api/character/avatar/10.jpeg","episode":["https://rickandmortyapi.com/api/episode/25"],"url":"https://rickandmortyapi.com/api/character/10","created":"2017-11-04T20:19:09.017Z"},
    {"id":9,"name":"Agency Director","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"image":"https://rickandmortyapi.com/api/character/avatar/9.jpeg","episode":["https://rickandmortyapi.com/api/episode/24"],"url":"https://rickandmortyapi.com/api/character/9","created":"2017-11-04T20:06:54.976Z"},
    {"id":8,"name":"Adjudicator Rick","status":"Dead","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/8.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/8","created":"2017-11-04T20:03:34.737Z"},
    {"id":7,"name":"Abradolf Lincler","status":"unknown","species":"Human","type":"Genetic experiment","gender":"Male","origin":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},"location":{"name":"Testicle Monster Dimension","url":"https://rickandmortyapi.com/api/location/21"},"image":"https://rickandmortyapi.com/api/character/avatar/7.jpeg","episode":["https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/11"],"url":"https://rickandmortyapi.com/api/character/7","created":"2017-11-04T19:59:20.523Z"},
    {"id":6,"name":"Abadango Cluster Princess","status":"Alive","species":"Alien","type":"","gender":"Female","origin":{"name":"Abadango","url":"https://rickandmortyapi.com/api/location/2"},"location":{"name":"Abadango","url":"https://rickandmortyapi.com/api/location/2"},"image":"https://rickandmortyapi.com/api/character/avatar/6.jpeg","episode":["https://rickandmortyapi.com/api/episode/27"],"url":"https://rickandmortyapi.com/api/character/6","created":"2017-11-04T19:50:28.250Z"}
]`)

const App = () => {
console.log(rickAndMorty)
    const characters= rickAndMorty.map((character)=>(
        <RickAndMortyComponent
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
        />
    ))
return <div className='Main'>{characters}</div>
};

export default App;
