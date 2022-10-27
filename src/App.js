import logo from './logo.svg';
import './App.css';
import FirstPage from './component/sitepage1/FirstPage';
import SecondPage from './component/sitepage2/SecondPage';
import PakageCard from './component/sitepage2/PakageCard';
import DesignCard from './component/sitepage2/DesignCard';
import ReviewCard from './component/sitepage2/ReviewCard';
import ThirdPage from './component/sitepage3/ThirdPage';


function App() {
  return (
    <div className="App">
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <DesignCard></DesignCard>
      <ReviewCard></ReviewCard>
    </div>
  );
}

export default App;
