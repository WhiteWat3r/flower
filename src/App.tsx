import { Route, Routes } from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import Calc from './pages/Calc';
import { MobileContainer } from './components/MobileContainer';
import Check from './pages/Check';

export default function App() {
  return (
    <MobileContainer>
      <Routes>
        <Route path="/" element={<Check />} />
        <Route path="/on-boarding" element={<OnBoarding />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
    </MobileContainer>
  );
}
