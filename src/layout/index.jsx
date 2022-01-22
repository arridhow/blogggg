import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to="/">
          <h3 className="text-center text-5xl font-extrabold my-10 text-slate-800">
            Bloggg.
          </h3>
        </Link>
      </nav>
      <main className="mb-12">{children}</main>
    </>
  );
}
