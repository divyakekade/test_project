import '../App.css'
import { useState,useEffect } from 'react';
import { getAllUsers } from '../api';

function UsersList(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const getUsersData = async () => {
            const res= await getAllUsers();
            console.log(res.data.users);
            setUsers(res.data.users);
        }
        getUsersData();
    },[])
    return (
        <div className="users-list">
            {users && users.map((user,index)=>(<h2 key={index}>{user.firstname} {user.lastname}</h2>))}
            {/* <h2>hello</h2> */}
        </div>
    )
}

export default UsersList