import React,{useState,useEffect} from 'react'
import axios from 'axios'

export const AssignMentorsContext = React.createContext();

export const AssignMentorProvider = ({children}) => {
    const [students,setStudents] = useState([]);
    const [mentors,setMentors] = useState([]);
    const BaseURL = `https://student-mentor-p7hy.onrender.com`;
    const fetchData = async () => {
        await axios.get(`https://student-mentor-p7hy.onrender.com/Mentors`)
        .then(response => setMentors(response.data)).then(() => console.log(mentors));

        await axios.get(`https://student-mentor-p7hy.onrender.com/Students`)
        .then((response) => setStudents(response.data)).then(() => console.log(students))
    }
    useEffect(() => {
        fetchData();
        return () => {
            <></>
        }
    },[])
    return(
        <>
        {console.log(mentors,students)}
        <AssignMentorsContext.Provider value = {[mentors,setMentors,students,setStudents]}>
            {children}
        </AssignMentorsContext.Provider></>
    )
}