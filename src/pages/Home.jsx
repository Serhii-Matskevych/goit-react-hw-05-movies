import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//
import { getTrendigsList } from 'api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    //
    (async function () {
      try {
        // handle success
        const respone = await getTrendigsList();
        setFetchedData(
          respone.data.results.map(({ id, title, poster_path }) => ({
            id,
            title,
            poster_path,
          }))
        );
      } catch (error) {
        // handle error
        setFetchedError(`  ${error.message}  `);
        // console.log(error);
      }
    })();
  }, []);

  return (
    <main>
      <h1>Trendings today</h1>

      {fetchedData?.length > 0 && (
        <MoviesList movies={fetchedData} state={{ from: location }} />
      )}
      {fetchedError && <p>Nothing trendings found!</p>}
    </main>
  );
};
