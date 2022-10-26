import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage/ErrorPage";
import FAQ from "../FAQ/FAQ";
import Login from "../Login/Login";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/courses",
        element: <PrivateRoute><Courses></Courses></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/categories'),
        children: [
          {
            path: '/courses/:courseId',
            element: <Course></Course>,
            loader: async ({params}) => {
              return fetch(`http://localhost:5000/categories/${params.courseId}`)
            },
            errorElement: <ErrorPage></ErrorPage>
          },
          {
            path: '/courses/',
            element: <Course></Course>,
            loader: async ({params}) => {
              return fetch(`http://localhost:5000/categories/07`)
            }
          }
        ],
        errorElement: <ErrorPage></ErrorPage>
      },

      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
        errorElement: <ErrorPage></ErrorPage>
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);
