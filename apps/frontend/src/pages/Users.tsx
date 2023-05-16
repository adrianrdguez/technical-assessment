import UsersTable from '../components/UserTable/UserTable';
import Button from '../components/Buttons/Button';
import UserModal from '../components/UserModal/UserModal';

const Users = () => (
  <>
    <Button>Nuevo Estudiante</Button>
    <UsersTable />
    <UserModal
      avatar="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/26/2621da26f5c7e9163a60f0a9d1129f5e53984663.jpg"
      name="Joe Doe"
      username="Joedoe"
      email="joe.doe@example.com"
      phone="+34 6782 828 121"
      inscriptionDate="22/12/2012"
    />
  </>
)

export default Users;