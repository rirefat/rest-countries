import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <footer>
        <h4>All Rights Reserved</h4>
      </footer>
    </div>
  );
}

export default App;
