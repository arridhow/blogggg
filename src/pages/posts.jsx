import { useEffect, useState } from "react";
import SinglePost from "../components/SinglePost";
import Spinner from "../components/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/savePosts";
import { check } from "../features/checkPosts";

const url = "https://jsonplaceholder.typicode.com/";

export default function Posts() {
  const posts = useSelector((state) => state.savePosts.posts);
  const postsAdded = useSelector((state) => state.checkPosts.added);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchPosts() {
      Promise.all([url + "posts", url + "users"].map((u) => fetch(u)))
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((results) => {
          const temp = results[0].map((a) => ({
            ...results[1].find((b) => b.id === a.userId),
            ...a,
          }));
          temp.map((e) => dispatch(add(e)));
          setLoading(false);
          dispatch(check(true));
        });
    }
    postsAdded ? setLoading(false) : fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {!loading ? (
        <>
          <ul className="flex flex-col">
            {posts.map((post) => (
              <li key={post.id} className="py-5">
                <SinglePost post={post} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="flex h-36 max-h-screen justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
