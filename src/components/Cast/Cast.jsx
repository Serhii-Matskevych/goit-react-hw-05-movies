import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';

import { getMoviesCast } from 'api/api';

export const Cast = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async function () {
      try {
        // handle success
        const respone = await getMoviesCast({ id });
        setFetchedData(respone.data); // .cast
        // return axios.get(queryString);
      } catch (error) {
        // handle error
        // return `error with your query ${error} `;
        setFetchedError(`  ${error.message}  `);
      }
    })();
  }, [id]);

  return (
    <Box padding="16px">
      {fetchedData?.cast.map(({ id, name, character, profile_path }) => (
        <div key={id}>
          <img
            src={
              profile_path === null
                ? `https://via.placeholder.com/64x96`
                : `https://image.tmdb.org/t/p/w500${profile_path}`
            }
            alt={fetchedData.cast.id}
            width="64"
          />
          <p>{name}</p> <p>character: {character} </p>
        </div>
      ))}
      {fetchedError && <p>{fetchedError}</p>}
    </Box>
  );
};
