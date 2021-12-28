import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { HeroesProvider } from "./context/HeroesContext";
import { UiProvider } from "./context/UiContext";
function HeroesApp() {
  return (
    <>
      <AuthProvider>
        <HeroesProvider>
          <UiProvider>
            <AppRouter />
          </UiProvider>
        </HeroesProvider>
      </AuthProvider>
    </>
  );
}

export default HeroesApp;
