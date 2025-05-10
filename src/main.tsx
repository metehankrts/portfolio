// src/main.tsx
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Projects from "./pages/Projects";
import App from "./App";
import CV from "./pages/CV";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <App />
      </MainLayout>
    ),
  },
  {
    path: "/projects",
    element: (
      <MainLayout>
        <Projects />
      </MainLayout>
    ),
  },
  {
    path: "/cv",
    element: (
      <MainLayout>
        <CV />
      </MainLayout>
    ),
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// StrictMode'u kaldırdık
createRoot(rootElement).render(
  <RouterProvider router={router} />
);