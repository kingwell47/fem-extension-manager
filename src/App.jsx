import MainPage from "./pages/MainPage";

function App() {
  const currentTheme = "fem-dark";

  return (
    <div data-theme={currentTheme} className="px-4 py-6">
      <MainPage />
    </div>
  );
}

export default App;
