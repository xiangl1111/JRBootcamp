import './App.css';
import Game from './components/Game/Game';
import './styles/global.scss';

export default function App() {
  return (
    <div className="App"> 
      <Game />
      <img src='/images/grass.png' alt=''/>
    </div>
  );
}
