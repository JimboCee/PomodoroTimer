import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import {useState} from "react";
import SettingsContext from "./SettingsContext";
import Title from './Title';
import SocialFollow from './SocialFollow';



function App() {

  
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(10);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <main>
      <Title />
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
      <SocialFollow />

    </main>
  );
}

export default App;
