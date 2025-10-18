import IntroductionSection from './components/IntroductionSection/IntroductionSection.tsx';
import CardList from './components/CardListSection/CardListSection.tsx';
import './index.css'
// import "./styles/global.css";
// import ChatSection from './components/ChatSection.tsx';


function App(){
  return (
    <>
      <IntroductionSection />
      <CardList />
      {/* <ChatSection /> */}
      {/* <BasicModal /> */}
    </>
  );
}
export default App;