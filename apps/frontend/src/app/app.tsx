import Navbar from '../components/NavBar';
import AppRouter from '../router';
import Sidebar from '../components/SideBar';
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

