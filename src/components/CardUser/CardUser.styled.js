import styled from 'styled-components';
import bg_img from 'images/bg_img.png';

export const Card = styled('div')`
  position: relative;

  width: 100%;
  max-width: 380px;
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${bg_img}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-size: 308px, auto;
  background-position: top 28px center, center;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 8px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;

    transform: translateY(-50%);
  }
`;
