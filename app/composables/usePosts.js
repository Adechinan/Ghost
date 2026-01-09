export const usePosts = () => {

const posts = useState('posts', () => null);
  const { data, status } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/",{
        key: 'posts',
        cache: true,
    })

  posts.value = data;
  return { posts, status };
};
