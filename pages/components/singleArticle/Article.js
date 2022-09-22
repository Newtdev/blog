import { Fragment } from "react";
import { formatDate, ImageURL } from "../shared/SharedLogic";
import { textComponent } from "./PortableTextFunction";
import {
  PortableTextComponentsProvider,
  PortableText,
} from "@portabletext/react";
import { NewsUI } from "../shared/SharedComponent";

const Content = ({ post }) => {
  return (
    <div className='w-full h-full'>
      <PortableTextComponentsProvider components={textComponent}>
        <div className='w-full px-6 md:px-0 md:w-[80%] lg:w-[60%] mx-auto'>
          <PortableText value={post.body} />
        </div>
      </PortableTextComponentsProvider>
    </div>
  );
};

export function ArticleHeading({ post }) {
  const {
    title,
    author: {
      author: { name, role, image },
    },
    _createdAt,
    mainImage,
  } = post;

  return (
    <div className='flex flex-col items-center h-full py-6 mt-4'>
      <div className='w-4/5 lg:w-1/2'>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center py-6 leading-7 lg:leading-10'>
          {title}
        </h2>
      </div>
      <div className='flex items-center mb-8'>
        <div className='w-10 h-10 md:w-14 md:h-14 lg:h-16 lg:w-16 flex justify-center items-center rounded-full mr-4 my-2'>
          <ImageURL
            image={image}
            post={title}
            style={"w-full h-full object-cover rounded-full"}
          />
        </div>
        <span className='flex flex-col text-lg'>
          <span className='flex flex-col'>
            <h6 className='text:sm md:text-md lg:text-xl'>{name}</h6>
            <p className='text-xs'>{role}</p>
          </span>
          <h6 className='text-gray-500 my-1 text-sm'>
            {formatDate(_createdAt)}
          </h6>
        </span>
      </div>
      <div className='h-full lg:h-[30rem] w-full lg:w-[70%] mx-auto px-2 md:px-0 '>
        <ImageURL
          image={mainImage}
          post={title}
          style={"object-fit h-full w-full"}
        />
      </div>
    </div>
  );
}

function filterArticle(currentArticle, allArticle, author) {
  return allArticle
    .filter((article) => article.slug.current !== currentArticle.slug.current)
    .map((cur) => {
      return (
        <Fragment key={cur._id}>
          <NewsUI post_data={cur} author={author} />
        </Fragment>
      );
    });
}

function Article({ articleData: { post, allPost, author } }) {
  // console.log(post.slug.current);
  // console.log(allPost);
  return (
    <main>
      <article className='min-h-screen max-w-screen container mx-auto'>
        <ArticleHeading post={post} />
        <Content post={post} />
        <div className='w-full lg:w-[80%] h-full mt-12 mx-auto'>
          <div className='lg:w-[85%] px-10 mx-auto'>
            <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>
              Related Articles
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 py-6 gap-x-2 gap-y-6 px-4 lg:w-[85%] mx-auto'>
            {filterArticle(post, allPost, author)}
          </div>
        </div>
      </article>
    </main>
  );
}

export default Article;
