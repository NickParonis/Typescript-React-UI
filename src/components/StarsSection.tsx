import './Stars.css'
import './StarsSection.css'
import Terminal from './terminal';

function StarsSection(){

    const stars=[
        'stars',
        'starsBig'
    ];

    return (
        <section className='starsSection'>
            <div className='biosection'>
                <div className='bio text-center'>
                    <Terminal />
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
export default StarsSection;