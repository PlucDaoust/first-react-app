import './App.css'
import Greeter from "./Greeter";
import Die from './Die';
import ListPicker from './ListPicker';

function App() {
  return (
    <>
      <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a","b","c"]}/>
      {/* <Die numSides={20} />
      <Die numSides={5}/>
      <Die /> */}
    </>
  )
}

export default App
