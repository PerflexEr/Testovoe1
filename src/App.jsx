
import Logo from "./components/logo/logo";
import MenuItem from "./components/menuItem/menuItem";
import Profile from "./components/profile/profile";
import profileImg from './images/profile-picture.svg'
function App() {
  return (
   <div className="">
    <Logo/>
    <Profile img={profileImg} name={'Evano'} position={'Project Manager'} />
    </div>
  );
}

export default App;
