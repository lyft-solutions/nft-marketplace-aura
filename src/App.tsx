import { Outlet } from "@tanstack/react-router";
import { useTheme } from "./context/ThemeContext";
import "./App.css";
function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <Outlet />
    </div>
  );
}

export default App;
