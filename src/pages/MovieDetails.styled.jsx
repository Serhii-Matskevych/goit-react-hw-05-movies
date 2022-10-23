import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')`
  display: grid;
  grid-template-columns: 320px 1fr;
`;

export const Info = styled('div')`
  padding: 16px;
  padding: ${props => props.theme.spacing(4)};
  background-color: '#07c';
`;

export const GoBack = styled(NavLink)`
  display: inline-flex;
  margin: 8px;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.palette.common.white};
  background-color: ${props => props.theme.palette.secondary.light};
  text-decoration: none;
  font-size: 2em;
  border-radius: 15px;

  &:hover {
    background-color: ${props => props.theme.palette.secondary.dark};
  }
`;
