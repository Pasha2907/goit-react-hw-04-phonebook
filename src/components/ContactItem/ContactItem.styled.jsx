import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  margin-left: 15px;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid lightgrey;
  border-radius: 3px;
  background-color: white;
  transition: background-color 250ms ease;
  :active,
  :hover {
    background-color: #7b68ee;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;
