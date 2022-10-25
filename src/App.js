
import { useContext} from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AllContext } from './contexts/Context/ContextProvider';
import { routes } from './components/routes/Routes';


function App() {
  const {dark} = useContext(AllContext);
  return (
    <div className="App min-h-screen text-primary-focus" data-theme={dark?"luxury":"garden"}>
    <RouterProvider router={routes}></RouterProvider>
      
    </div>
  );
}

export default App;
