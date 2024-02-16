//Datas

//Deign
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

interface inputDatasDefinition {
  fromPage: string;
  placehold: string;
  label: string;
  type: string;
  idField?: number;
}

const InputField = (datas: inputDatasDefinition) => {
  // states & atoms
  const [Icone, setIcone] = useState(<></>);

  useEffect(() => {
    switch (datas.label) {
      case 'email': {
        setIcone(<EnvelopeIcon className="formIcone" />);
        break;
      }
      case 'password': {
        setIcone(<LockClosedIcon className="formIcone" />);
        break;
      }
      case 'name': {
        setIcone(<UserIcon className="formIcone" />);
        break;
      }
    }
  }, []);
  return (
    <div className="FieldsContainer">
      <>{Icone}</>
      <input
        className="inputField"
        placeholder={datas.placehold}
        type={datas.type}
      />
    </div>
  );
};
export default InputField;
