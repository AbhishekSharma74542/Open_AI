import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import Loader from './components/Shared/Loader';
import { storeInstance } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
