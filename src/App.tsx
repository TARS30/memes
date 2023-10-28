import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
              {/* <Route path="memes" element={<Meme />} /> */}
              <Route path="memes/:memeId" element={<Meme />} />
              <Route path="home" element={<Home />} />
              <Route path="create-meme" element={<CreateMeme />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;

{
  /* <Route
  path="/home"
  element={memes?.map((meme) => (
    <Meme isLoading={isLoading} meme={meme} key={meme.id} />
  ))}
/> */
}
