import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {

  const [classCompValue, setClassCompValue] = useState(0)
  const [isClassMounted, setIsClassMounted] = useState(true)

  const [funcCompValue, setFuncCompValue] =
    useState(0)
  const [isFuncMounted, setIsFuncMounted] =
    useState(true)

  return (
    <div>
      <div>
        <h1>Class Component with Lifecycle</h1>
        <button
          onClick={isClassMounted ? () => setClassCompValue(classCompValue + 1) : null}>
          {isClassMounted ? "Click me to update class component" : "Mount the class component first before updating"}
        </button>
        <button onClick={() => setIsClassMounted(!isClassMounted)}>
          {isClassMounted ? "Click me to unmount class component" : "Click me to mount class component"}</button>
        {isClassMounted && <ClassComponent value={classCompValue} />}
      </div>

      <div>
        <h1>Function Component with useEffect</h1>
        <button onClick={() => setFuncCompValue(funcCompValue + 1)}>Click me to update function component value</button>
        <button onClick={() => setIsFuncMounted(!isFuncMounted)}>Click me to unmount function component</button>
        {isFuncMounted && <FunctionComponent value={funcCompValue} />}
      </div>
    </div>
  );
}

export default App;
