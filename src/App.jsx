import './App.css';

import { Navbar, Hero, BeforeShedule, Schedule, Prizes } from './components';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <BeforeShedule />
      <div className='p-4'>
        <Schedule />
        <Prizes />
      </div>
    </>
  )
}

export default App
