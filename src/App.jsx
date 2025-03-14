import useGetUsers from './hooks/useGetUsers'
import CardUser from './components/CardUser'

function App() {

  const [users] = useGetUsers()

  return (
    <section>
      <ul className='user-cards'>
        {users.map((user) => (
          <li className='user__list'>
            <CardUser photo={user.avatar} name={user.name} email={user.email} position={user.role} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
