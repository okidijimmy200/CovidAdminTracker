import { Provider } from 'react-redux'
import {store} from './state/index'
import Content from './core/content';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
          <div data-testid='container' className="container">
      <div className="content">
      <Content />
      </div>
      
    </div>
     </Provider>

  );
}

export default App;
