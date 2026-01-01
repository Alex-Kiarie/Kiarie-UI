/**
 * useCookie is SSR-safe — works on server and client
 */
export const useKAuth = () => {
  const authUserCookie = useCookie<string>('authUser')
  /**
   * Get authUser as an object
   */
  const authUser = computed(() => {
    try {
      return authUserCookie.value ? JSON.parse(authUserCookie.value) : null
    } catch {
      return null
    }
  })

  /**
   * Set authUser as object
   */
  const setAuthUser = (user: Record<string, any>) => {
    authUserCookie.value = JSON.stringify(user)
  }

  /**
   * Clear authUser
   */
  const clearAuthUser = () => {
    authUserCookie.value = ''
  }

  return { authUser, setAuthUser, clearAuthUser }
}