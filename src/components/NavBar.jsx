import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function(){
    return(
        <ul className="nav">
            <li><NavLink to="/vocals">Vocals</NavLink></li>
            <li><NavLink to="/guitar">Guitar</NavLink></li>
            <li><NavLink to="/keyboard">Keyboard</NavLink></li>
            <li><NavLink to="/bass">Bass</NavLink></li>
            <li><NavLink to="/drums">Drums</NavLink></li>
            {/* <li><NavLink to="/rwtwtw">Error test</NavLink></li> */}

        </ul>
    )
}