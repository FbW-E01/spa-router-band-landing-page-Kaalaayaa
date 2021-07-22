import { Route, Switch } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import Vocals from './pages/Vocals'
import Guitar from './pages/Guitar'
import Keyboard from './pages/Keyboard'
import Bass from './pages/Bass'
import Drums from './pages/Drums'
import Home from './pages/Home'
import Error from './pages/Error'
import './App.css'
import useSound from 'use-sound'
import Girl from './girl.mp3'


export default function App() {

    const [play] = useSound(Girl);


    return(
        <div className="page">
            
            <h1><NavLink exact to="/">THE INTERNET</NavLink></h1>
            <NavBar />
            <button onClick={play}>Play some music!</button>
            <Switch>
                <Route path="/vocals">
                    <Vocals />
                </Route>
                <Route path="/guitar">
                    <Guitar />
                </Route>
                <Route path="/keyboard">
                    <Keyboard />
                </Route>
                <Route path="/bass">
                    <Bass />
                </Route>
                <Route path="/drums">
                    <Drums />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </div>
    )
}