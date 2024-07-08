import "./globals.css";
import Header from "../components/layout/Header";
import ErrorBoundary from "../components/ErrorBoundary";

import Provider, { AppProvider } from "../components/AppContext";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "L8 روف کافه ",
  description: "projec by mehrad roham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" className=" scroll-smooth">
      <body id="body">
        <div className="max-w-full	">
        <ErrorBoundary>
            <Provider>
              <Toaster />
              <div className="max-w-full	">
              <Header />
              </div>
             
              {children}
            </Provider>
          </ErrorBoundary>
        
        </div>
         
      </body>
    </html>
  );
}
