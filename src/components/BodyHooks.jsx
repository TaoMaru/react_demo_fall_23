import React, {useState} from 'react'

const BodyHooks = () => {
    const [count, setCount] = useState(0)
    return (
        <button type="button" className="btn btn-dark" onClick={()=>setCount(count + 1)}>
            {count}
        </button>
    )
}

export default BodyHooks