import Stars from './components/Stars';
import CardList from './components/CardList.tsx';
import BasicModal from './components/MuiModal.tsx';


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
        <BasicModal />
      </section>
    </>
  );
}
export default App;