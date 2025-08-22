import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scrolltotop"; // <- scroll component import karo

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ScrollToTop will listen to route changes */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
