import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useState } from "react";
import GlobalStyle from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { NewRoom } from "./pages/NewRoom";
import { AdminRoom } from "./pages/AdminRoom";
import { Room } from "./pages/Room";
import { Home } from "./pages/Home";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route path="/rooms/:id" element={<Room />} />
            <Route path="/admin/rooms/:id" element={<AdminRoom />} />
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
