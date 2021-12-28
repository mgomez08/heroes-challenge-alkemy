import { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Modal } from "../components/Others/Modal";
import { Notification } from "../components/Others/Notification";
import { AuthContext } from "../context/AuthContext";
import { HeroesTeam } from "../pages/HeroesTeam";
import { Login } from "../pages/Login";
import { SearchHeroes } from "../pages/SearchHeroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth, checkToken } = useContext(AuthContext);
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (auth.loading) return <h1>Loading...</h1>;
  return (
    <BrowserRouter>
      {auth.logged ? <Navbar /> : null}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute restricted={true}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HeroesTeam />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <SearchHeroes />
            </PrivateRoute>
          }
        />
      </Routes>
      <Notification />
      <Modal />
    </BrowserRouter>
  );
};
