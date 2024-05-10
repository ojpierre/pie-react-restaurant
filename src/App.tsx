import { ErrorBoundary } from "react-error-boundary";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Admin from "./Admin";
import Menu from "./Menu";
import ErrorFallback from "./shared/ErrorFallback";
import Heading from "./shared/Heading";

export default function App() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-screen"
    >
      <nav className="bg-indigo-600 p-4">
        <ul className="flex justify-center">
          <li className="mx-4">
            <Link className="text-white hover:text-gray-200" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Menu />
            </ErrorBoundary>
          }
        />

        <Route
          path="/admin"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Admin />
            </ErrorBoundary>
          }
        />
      </Routes>
    </motion.main>
  );
}
