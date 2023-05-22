import { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/NavBar';
import AppRouter from '../router';
import Sidebar from '../components/SideBar/SideBar';
import { SIDE_CONSTANTS } from '../styles/constants';
import '../styles/index.css';

export function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar isMobile={isMobile} sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isHidden={isMobile && !isSidebarOpen} items={SIDE_CONSTANTS}>
        <AppRouter />
      </Sidebar>
    </div>
  );
}

export default App;


