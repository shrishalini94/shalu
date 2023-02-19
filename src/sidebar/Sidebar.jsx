import "./sidebar.css";
import Sidemenu from "./Sidemenu";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo">
            Task Techfully
        </div>
        <Sidemenu/>

        <button  className="button">
          Logout
        </button>
        
    

    </div>
  )
}
