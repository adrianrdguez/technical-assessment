import Navbar from '../components/NavBar/NavBar';
import AppRouter from '../router';
import Sidebar from '../components/NavBar/SideBar';
import '../styles/index.css'

export function App() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <AppRouter />
      </Sidebar>
    </div>
  );
}

export default App;

