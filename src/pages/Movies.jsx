import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

//
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getMoviesList } from 'api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);
  //
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    //

    (async function () {
      if (!query) return;
      try {
        // handle success
        const respone = await getMoviesList({ query });
        setFetchedData(respone.data.results);
        setFetchedError(null);
        // return axios.get(queryString);
      } catch (error) {
        // handle error
        setFetchedError(`error with your query ${error.message} `);
        setFetchedData(null);
        // return `error with your query ${error} `;
      }
    })();
  }, [query, searchParams]);

  const onSubmit = (data, e) => {
    e.preventDefault();

    setSearchParams({ query: data.searchString });
  };
  return (
    <main>
      <div>
        <SearchForm onSubmit={onSubmit} />

        {fetchedData?.length > 0 && (
          <MoviesList movies={fetchedData} state={{ from: location }} />
        )}
        {fetchedError && <p> There is an fetch error {fetchedError} </p>}
      </div>
    </main>
  );
};
