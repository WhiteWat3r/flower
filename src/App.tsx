import { Route, Routes } from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import { MobileContainer } from './components/MobileContainer';
import Start from './pages/Start';
import Tasks from './pages/Tasks';
import EndDay from './pages/EndDay';
import Settings from './pages/Settings';
import Prizes from './pages/Prizes';

export default function App() {
  return (
    <MobileContainer>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/on-boarding" element={<OnBoarding />} />
        {/* <Route path="/calc" element={<Calc />} /> */}
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/end-day" element={<EndDay />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/prizes" element={<Prizes />} />

        
      </Routes>
    </MobileContainer>
  );
}
