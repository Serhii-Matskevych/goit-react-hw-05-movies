//
import styled from '@emotion/styled';

export const MoviesContainer = styled('ul')`
  width: 320px;
  background: ${props => props.theme.palette.error.light};
  background: #b2dfdb;
  color: ${props => props.theme.palette.secondary};

  padding: ${props => props.theme.spacing(2)};
  margin: ${props => props.theme.spacing(1, 2)};
  list-style: none;
`;

export const MovieThumb = styled('div')`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: ${props => props.theme.spacing(4)};
  border-bottom: 2px solid grey;
`;
