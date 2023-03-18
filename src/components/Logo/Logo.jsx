import { LogoEl } from './Logo.styled';

import logo from 'images/Logo.png';

export default function Logo() {
  return (
    <LogoEl to="https://goit.global/ua/" target="_blank">
      <img src={logo} alt="logo GoIt" />
    </LogoEl>
  );
}
