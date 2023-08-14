import ListGroup from "./components/listGroup"
let items = ["Adama", "Huruta", "Dhera", "Shashemenne"];
let heading = "Cities"
function App(){
  return <div><ListGroup items = {items} heading = {heading} /></div>
} 

export default App