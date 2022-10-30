import './App.css';
import FirstPage from './component/sitepage1/FirstPage';
import ForthPage from './component/sitepage2/ForthPage';
import SevenPage from './component/sitepage7/SevenPage';
import EightPage from './component/sitepage8/EightPage';
import NinthPage from './component/sitepage9/NinthPage';
import SecondPage from './component/sitepage2/SecondPage';
import SiteFooter from './component/sitepage7/header/SiteFooter';


function App() {
  return (
    <div className="App">
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ForthPage></ForthPage>
      <SevenPage></SevenPage>
      <EightPage></EightPage>
      <NinthPage></NinthPage>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
