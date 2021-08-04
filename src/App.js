import './App.css';
import store from './component/redux/store';
import { Provider } from 'react-redux';
import {HooksContainerCakes, HooksContainerIce} from './component/hooksCake';
import NewContainer from './component/newContainer';
import ItemContainer from './component/itemContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer/>
        <HooksContainerCakes/>
        <HooksContainerIce/>
        <NewContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
      </div>
    </Provider>
  );
}

export default App;
