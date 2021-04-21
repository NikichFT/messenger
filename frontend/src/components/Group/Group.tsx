import React from 'react';
import './Group.scss';

import templateImg from '../../images/template-group.png';

function Group() {
  return (
    <li className="group">
      <img className="group__img" src={templateImg} alt="картинка сервера" />
    </li>
  );
}

export default Group;
