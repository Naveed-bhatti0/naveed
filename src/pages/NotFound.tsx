import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      {/* Optional illustration */}
      <div className="mb-8">
        <svg
          className="mx-auto h-40 w-40 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M12 20.25c4.005 0 7.25-3.245 7.25-7.25S16.005 5.75 12 5.75 4.75 8.995 4.75 13 7.995 20.25 12 20.25z"
          />
        </svg>
      </div>

      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">
          Oops! Page Not Found
        </h2>
        <p className="mb-6 text-gray-500">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate("/")}
          className="rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
