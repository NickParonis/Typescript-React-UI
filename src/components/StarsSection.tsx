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