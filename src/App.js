import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
      <Navbar />
       <div>
        {/* left */}
        {/* right */}
       </div>
      </div>
    </div>
  );
}

export default App;
