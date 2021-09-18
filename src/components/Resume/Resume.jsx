import "./Resume.css"
import {useSelector} from 'react-redux';
let Resume=()=>{

    let user = useSelector(state => state);
    console.log(user)
    
   
   
    return(
        
         <div class="wrapper">
        <div class="header">
            <div class="name">{user.name.toUpperCase()}</div>
            <div class="summary">{user.summary.toUpperCase()}</div>
            <hr/>
            <div class="personal-details">
                {/* {user.personal_details.map((e)=>{
                    return  <div>{e}</div>
                })} */}
                {user.email!="" ? <div>{user.email}</div>: ""}
                {user.phone!="" ? <div>{user.phone}</div>: ""}
                {user.github!="" ? <div>{user.github}</div>: ""}
                {user.city!="" ? <div>{user.city}</div>: ""}
               
            </div>
            <hr/>
        </div>


        {user.skills.length ? ( 
        <div class="section-heading">SKILLS
        <hr width="90%"/>
        </div>
        ) : ""}
        {user.skills.length ? ( 
             <div class="skillset">
           {user.skills.map((e)=>{
                return <div class="skill">{e}</div>
            })}
            </div>
        ) : ""}
        

        {user.experience.length ? ( 
        <div class="section-heading">EXPERIENCE
        <hr width="90%"/>
        </div>
        ) : ""}        
         
        {user.experience.length ?(
             <div class="experience">
                 {user.experience.map((e)=>{
                   return(   <div class="exp">
                
                       <div class="exp-role">{e.role}</div>
                       <div class="exp-details">
                           <div class="compname">{e.name}</div>
                           <div class="timeline">{e.from}-{e.to}</div>
                       </div>
                       <div class="exp-description">{e.description}</div>
                      
                   </div>
                   )
                 })}

             </div>
        ):""}


        

        {user.education.length ? ( 
        <div class="section-heading">EDUCATION
        <hr width="90%"/>
        </div>
        ) : ""} 
     
       {user.education.length ? ( 
        <div class="education">
                {user.education.map((e)=>{
                   return (
                    <div class="ed">
                    <div class="ed-course">{e.course}- {e.stream}</div>
                <div class="ed-details">
                    <div class="college-name">{e.college}</div>
                    <div class="timeline">{e.from}-{e.to}</div>
                </div>
                <div class="ed-description">{e.description}</div>
                </div>
                   )
                })}
         </div>):""}


        {user.projects.length ? ( <div class="section-heading">PROJECTS
            <hr width="90%"/>
        </div>):""}
  
        {user.projects.length ? ( <div class="projects">
            {user.projects.map((e)=>{
                 return (<div class="project">
                 <div class="project-details">
                     <div class="project-name">{e.project}</div>
                     {e.link!=="" ? ( <div class="project-link"> <a href={e.link}> Link</a></div>): "" }
                    
                 </div>
                 <div class="project-description">{e.description}</div>
             </div>)
            })}
        </div>):""}

       
        {user.achievements.length ? ( <div class="section-heading">ACHIEVEMENTS
            <hr width="90%"/>
        </div>):""}
         {user.achievements.length ?(<div className="acheivements">
           {user.achievements.map((e)=>{
              return( <div class="ach">
               <div class="ach-name">{e.achievement_name} :</div><div class="ach-description"> {e.description}</div>
               </div>)
           })}
        </div>):""}
     
      
    </div>
        
        
        
        
    )
}
export default Resume;