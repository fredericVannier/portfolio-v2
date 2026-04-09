import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// StrictMode removed — react-reveal uses findDOMNode which is incompatible with React 18 StrictMode
createRoot(document.getElementById("root")!).render(<App />);
