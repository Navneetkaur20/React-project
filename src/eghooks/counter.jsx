import React, { useState } from 'react';

const Counter=()=>{
 const a=10;
    const [num,setnum] = useState(a);
  return(
    <>
<h1>hedaing {num}</h1>
<button onClick={()=>setnum(num+1)} > set    </button>
{/* <button onClick={()=>bnum(num+1)}></button> */}
   </>

    )
}

export default Counter;

