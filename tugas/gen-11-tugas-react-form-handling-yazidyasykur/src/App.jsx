import ClassForm from "./components/ClassForm"
import FunctionForm from "./components/FunctionForm"
import "./App.css"


function App() {
 
  return (
    <div className="container">
      <FunctionForm className="functioncomp"/>
      <ClassForm  class="classcomp"/>
    </div>
  )
}

export default App
