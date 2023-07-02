import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducers from "./reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <I18nextProvider i18n={i18n}>
     <BrowserRouter basename="">
      <App/>
    </BrowserRouter>
     </I18nextProvider>
   
</Provider>
);
