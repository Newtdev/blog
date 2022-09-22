import { useContext } from "react";
import { ImageURL, formatDate, shortDescription } from "../shared/SharedLogic";
import Link from "next/link";
import { authorContext } from "../../../context/Author";

function authorDetails(author, post) {
  if (!author || !post.author) {
    return;
  }
  return author
    .filter(({ _id }) => _id === post.author._ref)
    .map((cur) => {
      return (
        <div className='flex items-center' key={cur._id}>
          <div className='h-12 w-12 flex justify-center items-center rounded-full mr-3 my-2'>
            <ImageURL
              image={cur.image}
              post={post}
              style={"w-full h-full object-cover rounded-full"}
            />
          </div>
          <span className='flex flex-col text-xs'>
            <span className='flex'>
              <h6 className='mr-1'>{cur.name} </h6> |
              <p className='ml-1'>{cur.role}</p>
            </span>
            <h6>{formatDate(post._createdAt)}</h6>
          </span>
        </div>
      );
    });
}

export function Paragraph({ author, post }) {
  if (!post || !author) {
    return;
  }
  return (
    <div className='py-1'>
      {authorDetails(author, post)}
      <h2 className='text-lg lg:text-2xl py-2 font-bold'>{post.title}</h2>
      <p className='text-md font-thin'>{shortDescription(post.description)}</p>
    </div>
  );
}

export function SpecialEdition({ post }) {
  const author = useContext(authorContext);

  const {
    mainImage,
    slug: { current },
  } = post;

  return (
    <div className='max-w-screen transtion hover:shadow-xl lg:w-[70%] py-2 flex justify-between md:flex-row px-3 py-3 flex-col mx-auto px-4 cursor-pointer'>
      <Link href={`/${current}`}>
        <div className=''>
          <div className='w-full md:h-[25rem] px-1'>
            <ImageURL
              image={mainImage}
              post={post.title}
              style={"object-fit h-full w-full"}
            />
          </div>
          <Paragraph author={author} post={post} />
        </div>
      </Link>
    </div>
  );
}
