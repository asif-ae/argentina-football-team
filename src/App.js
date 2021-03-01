import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import Players from './components/Players/Players';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderSection></HeaderSection>
        <Players></Players>
        <FooterSection></FooterSection>
      </div>
    </div>
  );
}

export default App;
