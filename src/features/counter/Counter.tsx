import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { decrement, increment, incrementByAmount } from "./counterSlice"

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

  return (
    <>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increament</button>
        <button onClick={() => dispatch(decrement())}>Decreament</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increament by 5</button>
    </>
  )
}

export default Counter