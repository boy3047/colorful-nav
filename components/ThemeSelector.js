import { useTheme } from "../hooks/useTheme";

//* theme icon
import modeTheme from "../assets/mode-theme.svg";

// *styles
import "./ThemeSelector.css";

function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const themeColor = ["#023e8a", "#fb8500", "#8d99ae"];

  // const toggleMode = () => {
  //   changeMode(mode === "dark" ? "light" : "dark");
  // };

  console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-icon">
        <img
          onClick={() => changeMode(mode === "dark" ? "light" : "dark")}
          src={modeTheme}
          alt="dark/light theme"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColor.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
