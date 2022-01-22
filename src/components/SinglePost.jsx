import { Link } from "react-router-dom";

export default function SinglePost({ post }) {
  const { id, title, body, name, company } = post;
  return (
    <div
      className={`${
        colorBg[id % 4]
      } p-12 mx-10 md:mx-32 md:px-24 lg:mx-60 rounded-3xl hover:bg-gray-700 transition-colors`}
    >
      <Link to={`/posts/${id}`}>
        <ul
          className={`${
            colorText[id % 4]
          } hover:text-white flex gap-4 flex-col`}
        >
          <li className="capitalize font-bold text-4xl">{title}</li>
          <li className="text-lg">{body}</li>
          <li className="text-sm">
            By <span className="font-semibold">{name}</span> ({company.name})
          </li>
        </ul>
      </Link>
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
