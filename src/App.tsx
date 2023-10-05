import Stars from './components/Stars';
import CardList from './components/CardList.tsx';


function App(){

  return (
    <>
    <section className='bio'>
      <Stars />
      <div className='biocontainer'>
        <div className='aboutme'>
            NICK PARONIS
        </div>
        <div className='logoe'>
            NICK PARONIS
        </div>
      </div>
    </section>
    <section className='cardlist'>
        <CardList />
    </section>
    <section className='lorem'>

    </section>
    </>
  );
}
export default App;