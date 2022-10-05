import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../lib/sanity";

const SampleImageComponent = ({ value, isInline }) => {
  // const { width, height } = getImageDimensions(value);
  return (
    <div className='h-96 w-full px-1 md:px-0 my-6'>
      <img
        src={urlFor(value.asset._ref).url()}
        alt={value.alt || ""}
        className='w-full h-full object-cover'
        style={{
          display: isInline ? "inline-block" : "block",
          // aspectRatio: width / height,
        }}
      />
    </div>
  );
};

export const textComponent = {
  block: {
    h1: ({ children }) => <h1 className='text-4xl py-4 lg:py-6'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-3xl py-4 lg:py-6'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-2xl py-4 lg:py-6'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-xl py-4 lg:py-6'>{children}</h4>,
    h5: ({ children }) => <h5 className='text-lg py-4 lg:py-6'>{children}</h5>,
    h6: ({ children }) => <h6 className='text-md py-4 lg:py-6'>{children}</h6>,
    normal: ({ children }) => (
      <p className='text-sm lg:text-base leading-10 lg:leading-10'>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <div className='border-l-purple-500'>
        <blockquote className=''>{children}</blockquote>
      </div>
    ),
  },
  types: {
    image: SampleImageComponent,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className='text-gray-600 font-semibold'>{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className='text-base my-3 text-blue-500'
          rel={target === "_blank" && "noindex nofollow"}>
          {children}
        </a>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className='mt-xl pl-10 py-4 list-disc leading-10'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='mt-xl pl-10 py-4 leading-10 list-decimal'>{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className='m-auto text-lg text'>{children}</ol>
    ),
  },
};
