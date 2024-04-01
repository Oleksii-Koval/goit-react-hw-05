import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigation from "./Navigation/Navigation.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews.jsx"));

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navigation />

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

// b17cabf732b3eb779d6b0514baee4f95

// ключ доступа к апи eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTdjYWJmNzMyYjNlYjc3OWQ2YjA1MTRiYWVlNGY5NSIsInN1YiI6IjY2MGFiNjllMTVkZWEwMDE3YzMzNjNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WALXp8g9HALVrRvDd4denS0xE2qLZDqaX1_mVhj_7hE
