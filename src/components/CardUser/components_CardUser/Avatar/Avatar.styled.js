import styled from 'styled-components';

export const Wrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(80px);
  height: calc(80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  z-index: 2;

  &,
  div {
    border-radius: 50%;
    overflow: hidden;
  }

  div,
  div img {
    display: block;
    width: calc(80px - 16px);
    height: calc(80px - 16px);
    background-color: #5736a3;
    object-fit: cover;
  }
`;
