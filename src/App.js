import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/actions';
import './App.css';

function App() {
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
