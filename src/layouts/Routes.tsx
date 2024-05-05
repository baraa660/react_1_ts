import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/home/Home";
import AddBlogPage from "../components/addBlogPage/AddBlogPage";
import BlogPage from "../components/blogPage/BlogPage";
import EditPlogPage from "../components/editBlogPage/EditBlogPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
          {
              path:"/",
              element:<Home/>,
              
          },
          {
              path:'blogs',
              element:<Home/>
          },
          {
              path:'addBlog',
              element:<AddBlogPage/>
          },
          {
              path:'blog/:id',
              element:<BlogPage/>
          },
          {
              path:'editBlog/:id',
              element:<EditPlogPage/>
          }
      ],
    },
  ]);
  