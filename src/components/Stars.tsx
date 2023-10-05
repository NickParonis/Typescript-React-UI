import './Stars.css'

function Stars(){

    const stars=[
        'stars',
        'stars2'
    ];

    return (
        <>
            <div className="bg-animation">
                {stars.map( (item) => (
                    <div key={item} id={item}></div>
                ))}
            </div>
        </>
    );
}
export default Stars;