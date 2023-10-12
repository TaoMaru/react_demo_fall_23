import React, {useState, useEffect} from 'react'

const BodyHooks = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    useEffect(() => {
        console.log(count1)
    }, [count1])
    useEffect(() => {
        console.log(count2)
    }, [count2])
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={()=>setCount1(count1 + 1)}>
                {count1}
            </button>
            <button type="button" className="btn btn-primary" onClick={()=>setCount2(count2 + 1)}>
                {count2}
            </button>
        </>
    )
}

export default BodyHooks