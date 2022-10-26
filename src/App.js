
import { useContext} from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AllContext } from './contexts/Context/ContextProvider';
import { routes } from './components/routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  const {dark} = useContext(AllContext);
  return (
    <div className="App min-h-screen text-primary-focus" data-theme={dark?"luxury":"garden"}>
    <Toaster/>
    <RouterProvider router={routes}></RouterProvider>
    
    </div>
  );
}

export default App;
