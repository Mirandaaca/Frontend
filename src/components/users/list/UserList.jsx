import { useEffect, useState } from "react"
import { getUserList } from "../../../services/userService"


export default function UserList({handleUserSelected, deleteUser}){
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUserList()
        .then((data) => {
            setUsers(data)
        })
        .catch((error) => console.error(error))
    },[])
    return(
        <>
            <div>
                <h4>User List</h4>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleUserSelected(user)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}
