/**
 * FutureAutoGarage - Main Application Component
 * 
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Last Updated: 2025-11-04
 * Description: Root component that sets up the application structure, routing,
 *              theming, and global context providers. This is the entry point
 *              for the React application that orchestrates all major features.
 * 
 * Features:
 *   - Material-UI theming for consistent design
 *   - React Router for navigation
 *   - Global loading state management
 *   - Responsive layout with header, main content, and footer
 * 
 * Dependencies:
 *   - @mui/material: For theming and layout components
 *   - react-router-dom: For client-side routing
 *   - Custom theme: Application-specific design system
 *   - LoadingContext: Global loading state management
 */
// ======================
// 📦 Core React Imports
// ======================
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { customTheme } from "./theme";
import { LoadingProvider } from "./contexts/LoadingContext";
// ======================
// 🧩 Layout Components
// ======================
import Header from "./components/Header";
import Footer from "./components/Footer";
// ======================
// 📄 Page Components
// ======================
import HomePage from "./pages/HomePage";
import AllSeasonTires from "./pages/AllSeasonTires";
import WinterTires from "./pages/WinterTires";
import AutoRepairs from "./pages/AutoRepairs";
import CarMaintenance from "./pages/CarMaintenance";
import AboutUs from "./pages/AboutUs";
import ContactLocation from "./pages/ContactLocation";
import Products from "./pages/ProductLights";
import ProductRearView from "./pages/ProductRearView";
import FAQ from "./pages/FAQ";
/* Main layout structure 
  - Header Component
  - Main content area (HomePage)
  - Footer Component
*/
export default function App() {
  return (
    // ThemeProvider applies the custom Material-UI theme to all child components
    <ThemeProvider theme={customTheme}>
      {/* LoadingProvider enables global loading state management */}
      <LoadingProvider>
        {/* Router enables client-side routing for single-page application behavior */}
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header Component - Header stays at the top */}
            <Header />
            {/* Main content area (takes up remaining space) */}
            <Box component="main" sx={{ flexGrow: 1, mt: 13 }}>
                <Routes>
                    {/* Application routing configuration */}
                    <Route path="/"  element={<HomePage />} />
                    <Route path="/all-season-tires" element={<AllSeasonTires />} />
                    <Route path="/winter-tires" element={<WinterTires />} />
                    <Route path="/auto-repairs" element={<AutoRepairs />} />
                    <Route path="/car-maintenance" element={<CarMaintenance />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact-location" element={<ContactLocation />} />
                    <Route path="/product-lights" element={<Products />} />
                    <Route path="/product-rear-view" element={<ProductRearView />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </Box>
            {/* Footer Component - Footer always at bottom */}
            <Footer />
          </Box>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}