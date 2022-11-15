import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';

function App() {

  return (
    <>
      <Counter initialValue = { 100 } />
      <CounterBy />
    </>
  );
}

export default App;
