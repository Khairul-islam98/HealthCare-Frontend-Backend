import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { cn } from "./lib/utils";

function App() {
  
  return (
    
    <div className={cn('min-h-screen bg-dark-300 font-sans antialiased text-white',)}>
      <ThemeProvider defaultTheme="dark">
       <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
