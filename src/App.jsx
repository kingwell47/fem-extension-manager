import MainPage from "./pages/MainPage";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { theme } = useThemeStore();

  return (
    <div
      data-theme={theme}
      className="px-4 py-6 flex flex-col justify-center items-center gap-8 font-display bg-(image:--bg-gradient)"
    >
      <MainPage />
    </div>
  );
}

export default App;
