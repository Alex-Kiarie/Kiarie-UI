import type { Ref } from 'vue'
import { watch } from 'vue'
import { useKLoader } from './useKLoader'
import { useKAuth } from './useKAuth'
import { useKTestAppConfig } from './useKTestAppConfig'

interface UseApiOptions {
    appConfig: Record<string, any>
}
export const useKApi = (options?: UseApiOptions) => {
    const loader = useKLoader() // use your loader composable
    const testAppConfig = useKTestAppConfig()
    // Use provided baseUrl or fallback to host app config
    if(options == undefined)
    {
        options = {appConfig: testAppConfig.appConfig}
    }
    const baseUrl = options.appConfig.baseApiUrl
    const getSession = useKAuth().authUser != null? JSON.stringify(useKAuth().authUser.value):""
    /**
     * Track pending state and toggle loader automatically
     */
    const trackLoading = (pending: Ref<boolean>) => {
        watch(pending, (v) => {
            if (v) loader.start()
            else loader.stop()
        })
    }

    /**
     * GET request
     */
    const get = <T = any>(url: string) => {
        const { data, pending, error } = useFetch<T>(`${baseUrl}${url}`, {
            headers: {
                'X-User-Session': getSession,
                'Content-Type': 'application/json',
            },
        })

        trackLoading(pending)

        return { data, pending, error }
    }

    /**
     * POST request
     */
    const post = async <T = any>(url: string, body?: any) => {
        loader.start()
        try {
            const data = await $fetch<T>(`${baseUrl}${url}`, {
                method: 'POST',
                body,
                headers: {
                    'X-User-Session': getSession,
                    'Content-Type': 'application/json',
                },
            })
            return { data, error: null }
        } catch (error) {
            return { data: null, error }
        } finally {
            loader.stop()
        }
    }
    return { get, post, loader }
}
