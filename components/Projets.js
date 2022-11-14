
import styles from '../styles/Projets.module.css';
import CardProjet from '../components/CardProjet'
import { Carousel } from '@mantine/carousel';
import LeftIcon from '../components/LeftArrow'
import RightIcon from '../components/RightArrow'

function Projets() {

let dataCard = [{name: "WeatherApp", desc: "WeatherApp est une application qui affiche la météo des villes que vous aurez saisies.", img: "/WeatherApp.png", gitFront:"https://www.gamekult.com", gitBack:"https://www.liberation.fr"},
            {name: "Site d'actu", desc: "News Of The World est une application web qui vous permet d’afficher les news récentes du journal Le Monde", img: "/NewsOfTheWorld.png", gitFront:"https://www.gamekult.com", gitBack:"https://www.lequipe.fr"},
            {name: "Movies", desc: "WeatherApp est une application qui affiche la météo des villes que vous aurez saisies.", img: "/WeatherApp.png", gitFront:"https://www.gamekult.com", gitBack:"https://www.lequipe.fr"},
            {name: "Portfolio", desc: "News Of The World est une application web qui vous permet d’afficher les news récentes du journal Le Monde", img: "/NewsOfTheWorld.png", gitFront:"https://www.gamekult.com", gitBack:"https://www.lequipe.fr"}]

const card = dataCard.map((elem, i) => {
           return <CardProjet key= {i} name={elem.name}desc={elem.desc} img={elem.img} gitFront={elem.gitFront} gitBack={elem.gitBack}/>
})

return (
    <div className={styles.main}>
      <Carousel
        loop
        withIndicators
        nextControlIcon={<RightIcon></RightIcon>} 
        previousControlIcon={<LeftIcon></LeftIcon>}     
        height={500}
        controlSize={40}
        slideSize="50%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        align="center"
        styles={{
          indicator: {
            width: 10,
            height: 7,
            borderRadius: 0,
            transition: 'width 250ms ease',
          
  
            '&[data-active]': {
              width: 20,
              height: 14,
              backgroundColor: "#f4d03f ",
            },
          },
            control: {
              backgroundColor:"transparent",
              borderColor:"transparent",
             
            }
        }}
      > 
    {card}
    </Carousel> 
    </div>
  );
}

export default Projets;
