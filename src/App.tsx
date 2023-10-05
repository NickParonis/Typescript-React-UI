import Stars from './components/Stars';
import CardList from './components/CardList.tsx';


function App(){

  return (
    <>
    <section className='bio'>
      <Stars />
    </section>
    <section className='cardlist'>
        <CardList />
    </section>
    <section className='lorem'>
        <CardList />
    </section>
    </>
  );
}
export default App;