import { Search } from "@mui/icons-material";
import "./center.css";
import p1 from"./images/p1.png";
import p2 from"./images/p2.png";
import p3 from"./images/p3.png";
import person from"./images/person.jpg";


export default function Center() {
  return (
    <div className="center">
      <div className="profilename_wrap">
      <div className="profilename">
      <img src ={person} alt="person " className='person'/>
        johny Makelele
      </div>
      
      <input className="input" type={Text} name="Search" placeholder="Search"></input>
     </div>


    <div className="course-wrap">
      <div className="courses"> Courses</div>
      <div className="menutabs">
        <div className="All">All</div>
        <div className="course">courses</div>
        <div className="Pending">Pending</div>
        <div className="Completed">All</div> </div>
    </div>

    <div className="coursenamelistwrap">

    <div className="coursenamelist">
        <div className="coursename">
        <img src ={p1} alt="p1 " className='photo'/>
        <h3 className="title">Object Oriented Programming In Java</h3>
        </div>
      </div>
      
      <div className="coursenamelist">
        <div className="coursename">
        <img src ={p2} alt="p2 " className='photo'/>
        <h3 className="title">React JS</h3>
        </div>
      </div>

      <div className="coursenamelist">
        <div className="coursename">
        <img src ={p3} alt="p3 " className='photo'/>
        <h3 className="title">Visual Elements of User Interface Design</h3>
        </div>
      </div>
    </div>
    
    
    </div>
  )
}
