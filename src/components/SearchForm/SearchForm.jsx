import { TextField, Button } from '@mui/material';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as SC from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  useEffect(() => {
    //
    reset();
  }, [reset]);

  const submitSearch = (data, e) => {
    onSubmit(data, e);
    reset();
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <SC.Form onSubmit={handleSubmit(submitSearch)}>
      {errors.searchString && <span>This field is required</span>}
      <TextField
        id="filled-basic"
        label="Required"
        variant="filled"
        {...register('searchString', { required: true })}
      />

      <Button type="submit" variant="contained">
        Search movies
      </Button>
    </SC.Form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
