import Troll_Face from './assets/Troll Face.png';
import './style.css';

export default function Nav(){
    return (
        <nav>
            <img src={Troll_Face} className='troll-face'></img>
            <h2>Meme Generator</h2>
        </nav>
    );
}