// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the App component
import './index.css';
import App from './App.jsx';
import DetailsPage from "./pages/DetailsPage/DetailsPage.jsx";
import Error404Page from "./pages/error404Page/Error404Page.jsx";
import { DataProvider } from "./context/ApiContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  }
]);


const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}


createRoot(rootElement).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
);