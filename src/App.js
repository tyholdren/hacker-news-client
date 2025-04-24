import './App.css';
import NavPanel from './NavPanel.js';
import NewPage from './NewPage.js';

const start = 0;
const size = 50;

function App() {
  return (
    <div className="App">
      <NavPanel />
      <NewPage startingIndex={start} pageSize={size} />
    </div>
  );
}

export default App;
