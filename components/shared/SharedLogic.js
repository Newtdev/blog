import { urlFor } from "../../lib/sanity";

export function formatDate(date) {
  return date.split("T")[0];
}

export function shortDescription(desc) {
  const shorten = desc.split(" ");
  return shorten.length < 17
    ? shorten.join(" ")
    : shorten.slice(0, 17).join(" ") + " ...";
}

function ImageURL({ image, post, style }) {
  if (!image || !post) {
    return;
  }
  return (
    <img
      src={urlFor(image.asset._ref).url()}
      alt={post.title}
      className={style}
    />
  );
}
export default ImageURL;
