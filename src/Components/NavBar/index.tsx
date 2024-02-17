import Image from 'next/image';
import Link from 'next/link';

//Recoil
import { useRecoilState } from 'recoil';

//atoms
import { itemSelected } from '@/state/NavDatas';

const datasNav = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Skills',
    link: '/skills',
  },
  {
    label: 'Projets',
    link: '/projets',
  },
];

const NavBar = () => {
  const [itemSelctedValue, setItemSelectedValue] = useRecoilState(itemSelected);

  //updated itemSelected function
  const itemUpdated = (itemValue: number) => {
    setItemSelectedValue(itemValue);
  };
  return (
    <nav className="navigation">
      <Image
        alt="logoElieRuvinga"
        src={'/devElieRuv.png'}
        width={500}
        height={500}
        className="logo"
      />
      <div className="navList">
        {datasNav.map((value, index) => (
          <Link
            onClick={() => itemUpdated(index)}
            className={
              itemSelctedValue == index ? 'itemListselected' : 'itemList'
            }
            key={`${value.link}_${index}`}
            href={value.link}
          >
            {value.label}
          </Link>
        ))}
      </div>
      <Link href={'https://github.com/ERuvinga/'} className="border githubLink">
        <Image
          src={'/Icones/github.svg'}
          alt="githubIcone"
          quality={100}
          width={500}
          height={500}
          className="IconeGit"
        />
        <>Github</>
      </Link>
    </nav>
  );
};
export default NavBar;
