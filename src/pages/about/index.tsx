import HeadDatas from '@/Components/Header';
import NavBar from '@/Components/NavBar';
import { useEffect } from 'react';

//Recoil
import { useSetRecoilState } from 'recoil';
import { itemSelected } from '@/state/NavDatas';

const AboutPage = () => {
  // atoms
  const setItemSelectedValue = useSetRecoilState(itemSelected);
  useEffect(() => {
    setItemSelectedValue(1);
  }, []);
  return (
    <>
      <HeadDatas title="About Elie Ruvinga" description="About Elie Ruvinga" />
      <main className="ContainerPage">
        <NavBar />
      </main>
    </>
  );
};

export default AboutPage;
