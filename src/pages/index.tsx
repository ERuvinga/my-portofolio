import { useEffect } from 'react';
import HeadDatas from '../Components/Header';

// atoms
import NavBar from '@/Components/NavBar';

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <HeadDatas
        title="ElieRuvinga"
        description="Elie Ruvinga pages presenting skills, training and projects carried out"
      />
      <main className="ContainerPage">
        <NavBar />
      </main>
    </>
  );
}
