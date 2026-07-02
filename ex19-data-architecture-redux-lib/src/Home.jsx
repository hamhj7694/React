import First from "./components/First"
import MyButton from "./components/MyButton"

function Home(){
    return(
        <div style={{padding:16}}>
            <h1>HOME</h1>
            <First></First>
            <hr />
            <MyButton></MyButton>
        </div>
    )
}
export default Home