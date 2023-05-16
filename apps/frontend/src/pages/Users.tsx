import UsersTable from '../components/UserTable';

const Users = () => (
  <>
    <button onClick={() => console.log('Button clicked!')}>Nuevo Estudiante</button>
    <UsersTable />
  </>
)

export default Users;