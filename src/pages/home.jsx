import '../App.css'
import Image from '../assets/images/motherboard.jpg'

const Home =()=>{
    return (
        <div>
            <h1>John-Paul's Technical Quizzes</h1>
            <p>Hello and welcome one and all to my collection of technical quizzes. I have featured a variety of quizzes based around technology and security. These will have various difficulties with each difficulty having it's own set of conditions for completion.</p>
            <a href="/easy"><button id='easy'>Easy</button></a>
            <a href="/medium"><button id='medium'>Medium</button></a>
            <a href="/hard"><button id='hard'>Hard</button></a>
            <a href="/expert"><button id='expert'>Expert</button></a>
            <div id='homeImage'>
                <img src={Image} alt="Image of a laptop motherboard" id='motherboard'/>
                <p className='reference'>https://pixabay.com/photos/pcb-circuit-board-technology-2655766/</p>
                <p className='reference'>Accessed: 15/08/2025 at 11:56am GMT</p>
            </div>
        </div>
    )
}
export default Home