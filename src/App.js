import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { ActivationPage } from "./pages/ActivationPage";
import { ActivationSuccessfullyPage } from "./pages/ActivationSuccessfullyPage";
import { DashboardPage } from "./pages/DashboardPage";
import { InvoicesTabs } from "./components/InvoicesTabs";
import {ReactQueryDevtools} from 'react-query/devtools'
import { InvoicePaidSuccessfullyPage } from "./pages/InvoicePaidSuccessfullyPage";
import { ProtectRoute } from "./protectRoute/ProtectRoute";


const theme = createTheme({
  palette: {
    primary: {
      main: "#373773",
      light: "#5f5f8f",
      dark: "#262650",
    },
    secondary: {
      main: "#2EA4A5",
      light: "#57b6b7",
      dark: "#207273",
    },
  },
});
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/activation-page" element={<ActivationPage />} />
              <Route
                path="/activation-successfully/:userId"
                element={<ActivationSuccessfullyPage />}
              />
              <Route 
                path="/dashboard" 
                element={<ProtectRoute>
                          <DashboardPage/>
                        </ProtectRoute>}
                >
                <Route path="clinet-invoices/:id" element={<InvoicesTabs />} />
              </Route>
              <Route path="/invoice-paid-successfully/:invoiceId" element={<InvoicePaidSuccessfullyPage />} />
            </Routes>
          </div>
        </LocalizationProvider>
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
