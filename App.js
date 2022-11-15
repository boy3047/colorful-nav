// *components
import NavBar from "./components/NavBar";
import ThemeSelector from "./components/ThemeSelector";

// *hooks
import { useTheme } from "./hooks/useTheme";

// *styles
import "./App.css";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`app ${mode}`}>
      <NavBar />
      <ThemeSelector />
    </div>
  );
}

export default App;
