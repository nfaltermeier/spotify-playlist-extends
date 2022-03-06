import { Route, Routes, HashRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import Homepage from './routes/Homepage';
import EditPlaylist from './routes/EditPlaylist';
import Callback from './routes/Callback';
import StateError from './routes/StateError';
import NotFound from './routes/NotFound';

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="playlist/:playlistId" element={<EditPlaylist />} />
          <Route path="callback" element={<Callback />} />
          <Route path="state-error" element={<StateError />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
