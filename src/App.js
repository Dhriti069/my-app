
import './App.css';
import Header from "./Mycomponents/Header";
// import {TodoItem} from "./Mycomponents/TodoItem"
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";

function App() {
  let todos = [
    {
      sno:1,
      title:"go to market",
      desc:"u need to go market",
    }
  ]


  return (
    <>
     <Header title = "ABOUT ME"/>

     <Todos todos = {todos}/>
     <Footer/>
    </>
  );
}

export default App;
