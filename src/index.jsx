import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'
import './kaerukaeru-master/fonts/webfonts/kaerukaeru-Regular.woff'

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.querySelector("#root")
);