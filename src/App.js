import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import Players from './components/Players/Players';

function App() {
  return (
    <div className="App">
      <div className="ps-5">
        <HeaderSection></HeaderSection>
        <Players></Players>
      </div>
    </div>
  );
}

export default App;
