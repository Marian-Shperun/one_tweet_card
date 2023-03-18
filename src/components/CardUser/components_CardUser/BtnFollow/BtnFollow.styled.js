import styled from 'styled-components';

export const Btn = styled('button')`
  width: 196px;
  padding: 14px 26px;
  margin-bottom: 36px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  background-color: ${({ active }) => (active ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 250ms linear;

  @media (min-width: 1024px) {
    :hover {
      background-color: #9fdec7;
    }
  }
`;
