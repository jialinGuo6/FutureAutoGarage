/**
 * FutureAutoGarage - index Component - 主入口 Main entry point
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description: Main entry point for the application.
 * 主入口文件，用于应用的主入口。
 * @returns {JSX.Element} The fully configured application root element
 */
import App from "./App";
import { createRoot } from "react-dom/client";
import './utils/axiosConfig';

const container = document.getElementById("app");

// check if the root element exists 添加null检查
if (!container) {
    throw new Error("Root element 'app' not found. Check your HTML file.");
}

const root = createRoot(container);
root.render(<App />);
