import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import Users from './pages/Users';


const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Users />} />
    </Routes>
  );
};

export default AppRouter;
