import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import { SharedLayout } from '../SharedLayout/SharedLayout';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('components/Movies/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import(`components/pages/NotFound`))
// const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
// import { NotFound } from '../../pages/NotFound';


//

const createAsyncComponent = path => {
  // console.log(path);
  console.log(path === '../SharedLayout/SharedLayout');
  const componentName = path.match(/[a-zA-Z]+$/)[0];

  return lazy(() =>
    // import(path)
    // import('../SharedLayout/SharedLayout')
    import(`../SharedLayout/SharedLayout`)
      // import(`${path}`)
      .then(r => {
        console.log(r);
        return r;
      })
      .then(module => ({ ...module, default: module[componentName] }))
      .catch(console.log)
  );
};

// const SharedLayout = createAsyncComponent('../SharedLayout/SharedLayout.jsx');
const SharedLayout = createAsyncComponent('../SharedLayout/SharedLayout');

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
