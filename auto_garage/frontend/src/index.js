/**
 * FutureAutoGarage - index Component - 主入口
 * 
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Last Updated: 2025-11-04
 * 
 * 主入口文件
 * 
 * @returns {JSX.Element} The fully configured application root element
 */
import App from "./App";
import { createRoot } from "react-dom/client";
import './utils/axiosConfig';

const container = document.getElementById("app");

// 添加null检查
if (!container) {
    throw new Error("Root element 'app' not found. Check your HTML file.");
}

const root = createRoot(container);
root.render(<App />);
