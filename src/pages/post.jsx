import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../layout";

const url = "https://jsonplaceholder.typicode.com/";

export default function Post() {
  let params = useParams();
  const posts = useSelector((state) => state.savePosts.posts);
  const postsAdded = useSelector((state) => state.checkPosts.added);
  const { id, title, body, name } = posts[params.postId - 1];

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(url + `posts/${params.postId}/comments`)
      .then((res) => res.json())
      .then((results) => setComments(results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {postsAdded ? (
        <div className="flex flex-col gap-8">
          <PostLayout>
            <ul className={`${colorText[id % 4]} flex gap-4 flex-col`}>
              <Link to={`/${name}`} className="text-xl font-bold pb-8">
                {name} >>
              </Link>
              <li className="capitalize font-bold text-4xl">{title}</li>
              <li className="text-lg">{body}</li>
              <span className="mt-12 text-2xl font-semibold">Comments</span>
            </ul>
          </PostLayout>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`${
                colorBg[id % 4]
              } p-6 mx-10 md:mx-32 md:px-24 lg:mx-60 rounded-3xl transition-colors`}
            >
              <ul className={`${colorText[id % 4]} flex gap-2 flex-col`}>
                <li className="capitalize font-bold text-2xl">
                  {comment.name}
                </li>
                <li className="">{comment.body}</li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </Layout>
  );
}

function PostLayout({ id, children }) {
  return (
    <div
      className={`${
        colorBg[id % 4]
      } p-12 pb-0 mx-10 md:mx-32 md:px-24 lg:mx-60 rounded-3xl transition-colors`}
    >
      {children}
    </div>
  );
}

const colorBg = [
  "bg-lime-100",
  "bg-rose-100",
  "bg-yellow-100",
  "bg-violet-100",
];

const colorText = [
  "text-lime-900",
  "text-rose-900",
  "text-yellow-900",
  "text-violet-900",
];
