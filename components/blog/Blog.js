import { formatDate } from "../shared/SharedLogic";
import ImageURL from "../shared/SharedLogic";

export function authorDetails(author, post) {
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
