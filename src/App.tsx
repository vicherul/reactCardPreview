import './App.css'
import CardPreview from './components/CardPreview/CardPreview'
import Interruptor from './components/InterruptorMagico/InterruptorMagico'
import Entrance from './components/Entrance/Entrance'
import Counter from './components/Counter/Counter'
import PassValidator from './components/PassValidator/PassValidator'
import PorteroDigital from './components/PorteroDigital/PorteroDigital'
import Guadian from './components/GuardianDeAcceso/Guardian'




function App() {

  return (
    <>
      <CardPreview />
      <Interruptor />
      <Entrance />
      <Counter />
      <PassValidator />
      <PorteroDigital />
      <Guadian />
    </>
  )
}

export default App