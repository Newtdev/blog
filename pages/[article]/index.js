import { useRouter } from "next/router";
import { usePreviewSubscription } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import { postQuery, authorQuery } from "../../request/Request";
import Article from "../components/singleArticle/Article";
// import { multipleRequest } from "../../rq/Api";

const articleRequest = `*[_type == "post" && slug.current == $slug][0]{_createdAt,title,slug,body,mainImage,'author':{author ->}}`;

const ArticleContent = ({ data, preview }) => {
  const router = useRouter();
  const { data: post } = usePreviewSubscription(articleRequest, {
    params: { article: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });
  if (!router.isFallback && !data.post?.slug) {
    return;
  }
  return <Article articleData={data} />;
};

function fetchQuery(preview, query) {
  return getClient(preview).fetch(query);
}

export async function getServerSideProps({ params, preview = true }) {
  try {
    var post = await getClient(preview).fetch(articleRequest, {
      slug: params.article,
    });
    var allPost = await fetchQuery(preview, postQuery);
    var author = await fetchQuery(preview, authorQuery);
  } catch (error) {
    throw Error(error);
  }
  if (!post) {
    return {
      post: [],
      notFound: true,
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data: { post, author, allPost } },
  };
}
// }

export default ArticleContent;
