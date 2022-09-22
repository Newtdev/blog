export const postQuery = `*[_type == 'post']{categories,_id,mainImage, title, description, author, slug, _createdAt}`;
export const categoryQuery = `*[_type == "category"]`;
export const authorQuery = `*[_type == "author"]{_id,name,image,role}`;

// export async function multipleRequest(...arg) {
//   return await Promise.all([arg]);
// }
