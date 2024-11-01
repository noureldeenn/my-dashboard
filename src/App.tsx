import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import {
  lightTheme,
  darkTheme,
  defaultTheme,
  blueTheme,
  greenTheme,
  indigoTheme,
} from "./theme/theme";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Analytics from "./pages/Analytics";
import Sass from "./pages/Saas";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
import Chat from "./pages/Chat";
import Projects from "./pages/Projects";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import InvoicesList from "./pages/InvoicesList";
import InvoiceDetails from "./pages/InvoiceDetails";
import Tasks from "./pages/Tasks";
import Calender from "./pages/Calendar";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import SignInCover from "./pages/SignInCover";
import SignUp from "./pages/SignUp";
import SignUpCover from "./pages/SignUpCover";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordCover from "./pages/ResetPasswordCover";
import NotFoundPage from "./pages/page404";
import ServerPage from "./pages/page500";

const App: React.FC = () => {
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );
  const themeMap: { [key: string]: any } = {
    light: lightTheme,
    dark: darkTheme,
    default: defaultTheme,
    blue: blueTheme,
    green: greenTheme,
    indigo: indigoTheme,
  };
  return (
    <ThemeProvider theme={themeMap[selectedTheme] || lightTheme}>
      <CssBaseline />
      <Router>
      <Routes>
        <Route path="auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-in-cover" element={<SignInCover />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-up-cover" element={<SignUpCover />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/auth/reset-password-cover" element={<ResetPasswordCover />} />
        <Route path="/auth/404-page" element={<NotFoundPage />} />
        <Route path="/auth/500-page" element={<ServerPage />} />

        {/* All other routes wrapped with Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/dashboard/default" element={<Default />} />
                <Route path="/dashboard/analytics" element={<Analytics />} />
                <Route path="/dashboard/saas" element={<Sass />} />
                <Route path="/pages/profile" element={<Profile />} />
                <Route path="/pages/settings" element={<Settings />} />
                <Route path="/pages/pricing" element={<Pricing />} />
                <Route path="/pages/chat" element={<Chat />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/invoices/list" element={<InvoicesList />} />
                <Route path="/invoices/details" element={<InvoiceDetails />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/calendar" element={<Calender />} />
              </Routes>
            </Layout>
          }
        />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
