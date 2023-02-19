import "./home.css";
import Sidebar from "../sidebar/Sidebar";
import Center from "../center/Center";
import Right from "../right/Calender"


export default function Home() {
  return (
    <div className="home">
        <Sidebar/>
        <Center/>
        <Right/>

       
      
    </div>
  )
}
