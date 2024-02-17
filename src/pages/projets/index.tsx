import HeadDatas from '@/Components/Header';
import NavBar from '@/Components/NavBar';
import { useEffect } from 'react';

//Recoil
import { useSetRecoilState } from 'recoil';
import { itemSelected } from '@/state/NavDatas';

const ProjetsPage = () => {
  // atoms
  const setItemSelectedValue = useSetRecoilState(itemSelected);
  useEffect(() => {
    setItemSelectedValue(3);
  }, []);
  return (
    <>
      <HeadDatas
        title="Skill of Elie Ruvinga"
        description="Skill Elie Ruvinga"
      />
      <main className="ContainerPage">
        <NavBar />
      </main>
    </>
  );
};

export default ProjetsPage;
