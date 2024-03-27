import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/Slices/counterSlice";

const TakeAbsencesPage = () => {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch(increment());
    }

    const handleDec = () => {
        dispatch(decrement());
    }

    return ( 
        <div>
            <p>{count}</p>
            <button className="border rounded-full mr-5 p-2 bg-slate-500 text-white" onClick={handleInc}>INCREMENTER</button>
            <button className="border rounded-full p-2 bg-slate-500 text-white" onClick={handleDec}>DECREMENTER</button>
        </div>
    );
}

export default TakeAbsencesPage;