import logo from './logo.svg';
import './App.css';






const Header = () => {
    return (
            <header>
                <nav>
                    <div className="LogoContainer">
                        <img src={logo} className="App-logo" alt="logo" width="30%"/>
                        <h2>React Facts</h2>
                    </div>
                    <ul>
                        <li>React Course - Project 1</li>
                    </ul>
                </nav>
            </header>
    )

}

const ReactList = () => {
    return (
        <ul className="ReactList">
            <li>Its a new skill</li>
            <li>You can build amazing things</li>
            <li>High demand</li>
            <li>And its fast</li>
            <li>You can also build Native apps </li>
        </ul>
    )

}

const Footer = () => {
    return(

        <small>
            <footer> @2024 DevDreams </footer>
        </small>
    )
}


function App() {
    return (
        <div className="Card">
            <Header/>
            <div style={{backgroundImage:`url(${logo})`}} className="Content">
                <div className='Bottom'>
                    <h1 className="Title">Fun Facts about react</h1>
                    <ReactList/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;

