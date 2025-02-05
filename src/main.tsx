import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/style/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
