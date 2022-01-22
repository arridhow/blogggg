import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages";
import Post from "./pages/post";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="posts" element={<Home />}></Route>
      <Route path="posts/:postId" element={<Post />} />
      <Route
        path="*"
        element={
          <Layout>
            <main className="flex h-12 justify-center items-center">
              <p>There's nothing here!</p>
            </main>
          </Layout>
        }
      />
    </Routes>
  );
}
