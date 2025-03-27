import MainPage from "./pages/MainPage";

function App() {
  const currentTheme = "fem-dark";

  return (
    <div
      data-theme={currentTheme}
      className="px-4 py-6 flex flex-col justify-center items-center gap-8 font-display"
    >
      <MainPage />
    </div>
  );
}

export default App;
