import Link from "next/link"
import {useState} from "react";

// if (module.hot && process.env.NODE_ENV !== 'production') {
//     module.hot.accept();
// }
const home = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count,setCount] = useState(1);
  return (
      <div>
        <Link href="/about">about</Link>

          <button onClick={()=>{setCount(count + 1)}}>
             increment {count}
          </button>
      </div>
  )
}

export default home;