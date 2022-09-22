import Link from "next/link";
// import { Paragraph } from "../blog/Blog";
import Paragraph from "../blog/Paragraph";
import ImageURL from "./SharedLogic";

function NewsUI({ post_data, author }) {
  // const author = useContext(authorContext);
  return (
    <div className='w-[95%] flex justify-between md:flex-row px-3 flex-col mx-auto transition hover:shadow-lg cursor-pointer'>
      <Link href={`/${post_data.slug.current}`}>
        <div className='w-full flex flex-col pt-3 '>
          <div className='w-full h-56 bg-green-700'>
            <ImageURL
              image={post_data.mainImage}
              post={post_data.title}
              style={"object-cover h-full w-full"}
            />
          </div>
          <Paragraph author={author} post={post_data} />
        </div>
      </Link>
    </div>
  );
}
export default NewsUI;
