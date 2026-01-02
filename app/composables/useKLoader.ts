/**
 * Creates a global state called isLoading using useState
 * useState() is Nuxt’s built-in way to create global, reactive, SSR-safe state
 */
export const useKLoader = () => {
    const isLoading = useState<boolean>('isLoading', () => false)
    const start = () => (isLoading.value = true)
    const stop = () => (isLoading.value = false)
    return { isLoading, start, stop }
}