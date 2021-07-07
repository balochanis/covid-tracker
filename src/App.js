// import logo from '.s/logo.svg';
import {Provider} from 'react-redux';
import store from "./store";
import Home from "./Component/Home";
import './App.css';

function App() {
  return (
    <>
    <Provider store={store}>
    <Home/>
    </Provider>
    <h1>This is the Main Heading</h1>
    </>

  );
}

export default App;
