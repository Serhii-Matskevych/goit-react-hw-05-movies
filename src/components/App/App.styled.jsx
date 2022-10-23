import styled from '@emotion/styled';

// todo styles emotion ore styled ????

//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101',
//   }}

export const StyledNav = styled('nav')`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(5)}; ;
`;
//
export const StyledHeader = styled('header')`
  background-color: lightgray;
  padding: ${props => props.theme.spacing(3, 4)};
`;
