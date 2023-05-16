import Navbar from '../components/NavBar/NavBar';
import AppRouter from '../router';
import Sidebar from '../components/SideBar/SideBar';
import { SIDE_CONSTANTS } from '../styles/constants';
import '../styles/index.css'

export function App() {
  return (
    <div>
      <Navbar />
      <Sidebar items={SIDE_CONSTANTS}>
        <AppRouter />
      </Sidebar>
    </div>
  );
}

export default App;

