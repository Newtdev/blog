import Link from "next/link";
import ImageURL from "../shared/SharedLogic";
import Paragraph from "./Paragraph";
import { authorContext } from "../../context/Author";
import { useContext } from "react";

function SpecialEdition({ post }) {
  const author = useContext(authorContext);

  const {
    mainImage,
    slug: { current },
  } = post;

  return (
    <div className='max-w-screen transtion hover:shadow-xl lg:w-[70%] py-2 flex justify-between md:flex-row px-3 flex-col mx-auto px-4 cursor-pointer'>
      <Link href={`/${current}`}>
        <div className=' mx-auto py-4 px-3 '>
          <div className='w-full md:h-[25rem] px-1'>
            <ImageURL
              image={mainImage}
              post={post.title}
              style={"object-fit  h-full w-full"}
            />
          </div>
          <Paragraph author={author} post={post} />
        </div>
      </Link>
    </div>
  );
}
export default SpecialEdition;
