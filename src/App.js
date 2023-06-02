import { Home } from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";


function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={3000} position="top-left" />
      <Home />
    </div>
  );
}

export default App;
