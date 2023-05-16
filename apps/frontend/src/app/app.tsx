import Navbar from '../components/NavBar/NavBar';
import AppRouter from '../router';
import Sidebar from '../components/NavBar/SideBar';
import { SIDE_CONSTANS } from '../styles/constants';
import '../styles/index.css'

export function App() {
  return (
    <div>
      <Navbar />
      <Sidebar items={SIDE_CONSTANS}>
        <AppRouter />
      </Sidebar>
    </div>
  );
}

export default App;

