// composables/userealisations.js
export const useRealisations = () => {
  const realisations = useState('achievements', () => null)
  
  const fetchRealisations = async (force = false) => {
    // Ne recharge que si les données n'existent pas ou si forcé
    if (!realisations.value || force) {
        const { data, error, pending } = await useAsyncData(
        'achievements',
        () => $fetch('/json/data.json', {
            baseURL: '',
            headers: {
            'Accept': 'application/json'
            }
        }),
        {
            server: false, // Désactiver SSR pour les fichiers statiques
            
        }
    )

    const results = computed(() => data.value?.major_achievements || [])

      results.value = data.value
    }
    return results;
  }
  
  return {
    results,
    fetchrealisations
  }
}