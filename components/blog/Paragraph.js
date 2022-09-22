import { authorDetails } from "../blog/Blog";
import { shortDescription } from "../shared/SharedLogic";

function Paragraph({ author, post }) {
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

export default Paragraph;
