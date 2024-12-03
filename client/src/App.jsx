import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { useData } from './context/ApiContext';

function App() {
  const { data } = useData();
  console.log(data);

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
