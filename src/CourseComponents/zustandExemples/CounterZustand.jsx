import useCounterStore from "../../Zustand/counter_store";

export default function CounterZustand(){
    const {count , addOne,decrement,reset} = useCounterStore();
    return <>
     <p>la veleur  du count {count}</p>
     <button onClick={addOne}>Add one</button>
     <button onClick={reset}>Reset</button>
    </>
}