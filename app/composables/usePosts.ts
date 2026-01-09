// composables/usePosts.ts
export const usePosts = (baseUrl: string) => {
  const posts = useState<any[] | null>('posts', () => null);
  const status = ref<'idle' | 'pending' | 'success' | 'error'>('idle');
  const error = ref<string | null>(null);

  const fetchData = async (page: number = 1, limit: number = 10) => {
    status.value = 'pending';
    error.value = null;

    try {
      const { data } = await useFetch<any[]|null>(`${baseUrl}/posts`, {
        query: {
          _page: page,
          _limit: limit,
        },
        key: `posts-${page}-${limit}`,
      });

      posts.value = data.value;
      status.value = 'success';
    } catch (err: any) {
      status.value = 'error';
      error.value = err.message || 'Erreur lors du fetch des posts';
    }
  };

  return {
    posts,
    status,
    error,
    fetchData,
  };
};
