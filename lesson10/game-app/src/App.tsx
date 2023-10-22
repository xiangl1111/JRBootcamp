import Game from './components/Game/Game';
import './styles/global.scss';
import {Provider} from 'react-redux';
import {store} from '../src/redux/index'
function App() {
  return (
    <Provider store={store}> 
      <Game />
    </Provider>
  );
}

export default App;