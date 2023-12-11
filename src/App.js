import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Links from './components/Links';
import ReactPlayer from "react-player";

function App() {
    let helio = "https://www.youtube.com/watch?v=mz-18ml6byo"
    let hacking = "https://www.youtube.com/watch?v=ooee9p4P_Eg"
  return (
    <div className='structure'>
      <div className='background'>
        <ReactPlayer url={helio} controls={false} playing={true} loop={true} volume={0} muted={true} width={1920} height={1080} ></ReactPlayer>
      </div>
      <Navbar></Navbar>
      <Profile></Profile>
      <Links></Links>
    </div>
  )
}

export default App;
