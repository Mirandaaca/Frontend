import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/users/list/UserList'
import CreateUser from './components/users/create/CreateUser'

function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [userSelected, setUserSelected] = useState(null)

  return (
    <>
      <div>
        <div>
          <button type='button' onClick={()=>setIsActive(true)}>Create User</button>
          <button type='button' onClick={()=>setIsActive(false)}>User List</button>
        </div>
        {isActive ?  
        <CreateUser setIsActive={setIsActive}  userSelected={setUserSelected} handleUserSelected={handleUserSelected}/> 
        : <UserList />
        }
      
      </div>
    </>
  )
}

export default App
