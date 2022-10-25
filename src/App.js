
import { useContext} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { AllContext } from './contexts/Context/ContextProvider';


function App() {
  const {dark} = useContext(AllContext);
  return (
    <div className="App h-screen" data-theme={dark?"dark":"light"}>
    <Header></Header>
      
    </div>
  );
}

export default App;
