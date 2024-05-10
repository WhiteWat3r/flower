import { Route, Routes, useLocation } from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import { MobileContainer } from './components/MobileContainer';
import Start from './pages/Start';
import Tasks from './pages/Tasks';
import EndDay from './pages/EndDay';
import Settings from './pages/Settings';
import Prizes from './pages/Prizes';
import Result from './pages/Result.tsx';
import { useEffect, useState } from 'react';
import { useGetUserInfoQuery, useRegisterMutation } from './api/mainApi.tsx';
import { ApiResponse } from './types/responses.ts';
import { useAppDispatch } from './store/store.ts';
import { setFlower, setProfile } from './store/mainSlice.ts';

export default function App() {
  const [animations, setAnimations] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [haveUuid, setHaveUuid] = useState(false);
  const [register, progress] = useRegisterMutation();
  const dispath = useAppDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const user_id = params.get('user_id');
  const { data, isLoading } = useGetUserInfoQuery('');

  // console.log(data);

  useEffect(() => {
    dispath(setProfile(data?.user));
    dispath(setFlower(data?.flower));
  }, [data, progress?.isLoading]);

  useEffect(() => {
    const fetchAnimations = async () => {
      //название анимации - 1_2_2  --- 1 ДЕНЬ, 2 действие, 2 - id цветка - красный
      const fetchedAnimations = [];

      const day1Animations = await Promise.all([
        fetch('/assets/animations/1/animation1_1.json').then((response) => response.json()),
        fetch('/assets/animations/1/animation1_2.json').then((response) => response.json()),
        fetch('/assets/animations/1/default1.json').then((response) => response.json()),
      ]);

      fetchedAnimations.push({
        firstAction: [day1Animations[0], day1Animations[0], day1Animations[0]],
        secondAction: [day1Animations[1], day1Animations[1], day1Animations[1]],
        thirdAction: [null, null, null],
        default: [day1Animations[2], day1Animations[2], day1Animations[2]],
      });

      const day2Animations = await Promise.all([
        fetch('/assets/animations/2/missions/yellow/2nd_day_Yellow_window.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/white/2nd_day_White_window.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/red/2nd_day_Red_window.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/yellow/2nd_day_Yellow_food.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/white/2nd_day_White_food.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/red/2nd_day_Red_food.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/yellow/2nd_day_Yellow_song.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/white/2nd_day_White_song.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/missions/red/2nd_day_Red_song.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/2/default/yellow/2nd_day_Yellow_default_flower.json').then(
          (response) => response.json(),
        ),
        fetch('/assets/animations/2/default/white/2nd_day_White_default_flower.json').then(
          (response) => response.json(),
        ),
        fetch('/assets/animations/2/default/red/2nd_day_Red_default_flower.json').then((response) =>
          response.json(),
        ),
      ]);

      fetchedAnimations.push({
        firstAction: day2Animations.slice(0, 3),
        secondAction: day2Animations.slice(3, 6),
        thirdAction: day2Animations.slice(6, 9),
        default: day2Animations.slice(9),
      });

      const day3Animations = await Promise.all([
        fetch('/assets/animations/3/missions/yellow/3rd_day_Yellow_window_open.json').then(
          (response) => response.json(),
        ),
        fetch('/assets/animations/3/missions/white/3rd_day_White_window_open.json').then(
          (response) => response.json(),
        ),
        fetch('/assets/animations/3/missions/red/3rd_day_Red_window_open.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/3/missions/yellow/3rd_day_Yellow_water.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/3/missions/white/3rd_day_White_water.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/3/missions/red/3rd_day_Red_water.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/3/missions/yellow/3rd_day_Yellow_rave.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/3/missions/white/3rd_day_White_rave.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/3/missions/red/3rd_day_Red_rave.json').then((response) =>
          response.json(),
        ),
        fetch('/assets/animations/3/default/yellow/3rd_day_Yellow_default_flower.json').then(
          (response) => response.json(),
        ),
        fetch('/assets/animations/3/default/white/3rd_day_White_default_flower.json').then(
          (response) => response.json(),
        ),
        fetch('/assets/animations/3/default/red/3rd_day_Red_default_flower.json').then((response) =>
          response.json(),
        ),
      ]);

      fetchedAnimations.push({
        firstAction: day3Animations.slice(0, 3),
        secondAction: day3Animations.slice(3, 6),
        thirdAction: day3Animations.slice(6, 9),
        default: day3Animations.slice(9),
      });

      setAnimations(fetchedAnimations);
      setLoaded(true);
    };

    fetchAnimations();
  }, []);

  const handleRegister = async () => {
    let response: ApiResponse;
    try {
      response = await register({ uuid: '2311213211212221' });
      console.log(response);
      if ('data' in response) {
        const data = response.data;
        sessionStorage.setItem('uuid', data.uuid);
      }
    } catch (error) {
      console.log('ошибка регистрации');
    }
  };

  useEffect(() => {
    if (user_id) {
      setHaveUuid(true);
      handleRegister();
    }
  }, []);

  return (
    !isLoading &&
    haveUuid && (
      <MobileContainer>
        <Routes>
          <Route path="/" element={<Start flowerData={data?.flower} />} />
          <Route path="/on-boarding" element={<OnBoarding />} />
          <Route path="/tasks" element={<Tasks animations={animations} loaded={loaded} />} />
          <Route path="/end-day" element={<EndDay />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </MobileContainer>
    )
  );
}
