import { useEffect } from 'react';
import HeadDatas from '../Components/Header';

// atoms
import { useRecoilValue } from 'recoil';
import { dataUser } from '@/state/user';
import Loading from '@/Components/Loading';

export default function Home() {
  const datasOfUser = useRecoilValue(dataUser);

  useEffect(() => {}, []);

  return (
    <>
      <HeadDatas
        title="veuilleurduwebrdc"
        description="Un programme de l'UNICEF pour la lutte contre les fausses informations et les dicours de haine sur internet"
      />
      <main className="indexPage">
        <p className="pageText">{datasOfUser}</p>
        <Loading />
      </main>
    </>
  );
}
