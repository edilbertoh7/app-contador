import PropTypes from "prop-types"; //npm i prop-types
import { useState } from "react";


const Counter = ({ value }) => {
    const [Num, setNum] = useState(value)
    const handlenum = () => {
        setNum(Num + 1)
    }
    const handleSubstract = () => setNum(Num - 1);
    const handleReset = () => setNum(value);

    return (
        <main className="w-72 rounded-3xl bg-blue-300 shadow-lg">
            <div className="flex w-full items-center flex-col p-8">

                <h3 className="text-4xl">Counter App</h3>
                  <span className="text-center text-5xl mt-5">⏱️</span>
                <h2 className="text-4xl mt-5 mb-4">{Num}</h2>

            </div>
            <div className="flex w-full justify-center ">

                <button onClick={handleSubstract} 
                className=" bg-blue-600 font-bold text-white rounded-lg hover:bg-green-500 px-8 py-2 mr-5 text-3xl ml-12">-1 </button>
                <button onClick={handlenum} 
                className=" bg-blue-600 font-bold text-white rounded-lg hover:bg-green-500 px-8 py-2 mr-5 text-3xl">+1 </button>
            </div>
            <div className="flex w-full justify-center ">

                <button onClick={handleReset}
                className=" bg-yellow-500 font-bold text-white rounded-lg hover:bg-red-500 px-8 py-2 mr-5 text-3xl ml-12 mt-4 mb-4" >Reset </button>
            </div>
        </main>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

export default Counter