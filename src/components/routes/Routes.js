import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import Courses from "../Courses/Courses";
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
            }
          },
          {
            path: '/courses/',
            element: <Course></Course>,
            loader: async ({params}) => {
              return fetch(`http://localhost:5000/categories/07`)
            }
          }
        ]
      },

      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ],
  },
]);
