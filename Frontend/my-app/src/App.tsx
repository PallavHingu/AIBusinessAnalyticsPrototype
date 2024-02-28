import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashboardInitial from "./pages/DashboardInitial";
import { useEffect } from "react";
import ChatInitial from "./pages/ChatInitial";
import DynamicChatbot from "./pages/testPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DashboardInitial />} />
      <Route path="/dashboard" element={<DashboardInitial />} />
      <Route path="/chat" element={<ChatInitial />} />
      <Route path="/test" element={<DynamicChatbot />} />
    </Routes>
  );
}
export default App;
