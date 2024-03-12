import './Stars.css'
import './StarsSection.css'

function Stars(){

    const stars=[
        'stars',
        'stars2'
    ];

    return (
        <section className='starsSection'>
            <div className='biosection'>
                <div className='bio text-center'>
                    <div className='image'></div>
                    <div className='title'>Nikolaos Paronis</div>
                    <div className="par ">
                        Hail and well met, fellow wanderer! <br /> 
                        I am known as Nick, a seasoned software sage of 34 winters. 
                        My travels have taken me through the fabled lands of Greece and the Netherlands, where I've wielded my coding craft for three cycles of the moon. 
                        Yet, when not ensnared in the arcane mysteries of software, you'll oft find me amidst the fray of the court or lost in the depths of gaming realms. <br /> <br /> <br />
                        Join me, intrepid adventurers, as we embark on a grand quest through the realms of code, where each line is a spell woven and every challenge a dragon to be slain. 
                        Together, let us script our own saga and etch our names into the scrolls of technological lore!
                    </div>
                </div>
            </div>
            <div className="bg-animation">
                {stars.map( (item) => (
                    <div key={item} id={item}></div>
                ))}
            </div>
        </section>
    );
}
export default Stars;