import '../App.css'
import Image from '../assets/images/motherboard.jpg'

const Home =()=>{
    return (
        <div>
            <h1>John-Paul's Cyber Security Quizzes</h1>
            <p>Hello and welcome one and all to my collection of cyber security quizzes. These will have various difficulties.</p>
            <a href="/easy-cyber-security"><button id='easy'>Easy</button></a>
            <a href="/medium-cyber-security"><button id='medium'>Medium</button></a>
            <a href="/hard-cyber-security"><button id='hard'>Hard</button></a>
            <div id='homeImage'>
                <img src={Image} alt="Image of a laptop motherboard" id='motherboard'/>
                <p className='reference'>https://pixabay.com/photos/pcb-circuit-board-technology-2655766/</p>
                <p className='reference'>Accessed: 15/08/2025 at 11:56am GMT</p>
            </div>
        </div>
    )
}
export default Home