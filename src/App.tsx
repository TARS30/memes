import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import "./App.css";
import AppLayout from "./ui/AppLayout";
import Meme from "./components/meme/Meme";
import Home from "./components/home/Home";
import CreateMeme from "./components/createMeme/CreateMeme";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="memes/:memeId" element={<Meme />} />
              <Route path="home" element={<Home />} />
              <Route path="create-meme" element={<CreateMeme />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          containerStyle={{ margin: "10px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
