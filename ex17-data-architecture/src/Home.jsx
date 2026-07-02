import { useState } from "react"
import First from "./components/First";

function Home(){

    const [msg, setMsg] = useState('Hello react');

    return(
        <div>
            <h2>Home</h2>
            <p>메시지: {msg}</p>
            <First msg={msg} setMsg={setMsg} />

        </div>
    )
}
export default Home