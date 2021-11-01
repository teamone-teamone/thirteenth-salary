import React from 'react'
import { isloggedInVar } from './apollo';

export default function Home() {
    return (
        <div>
            Home
            <button onClick={()=>isloggedInVar(false)}>logout</button>
        </div>
    )
}
