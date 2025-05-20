import { axiosInstance, axiosPrivateInstance } from "../utils/axios";
import {useAuthStore} from "../stores/auth";
import { watchEffect } from "vue";
import type { AxiosInstance } from "axios";

export function useApiPrivate(): AxiosInstance {
  const authStore = useAuthStore()

  watchEffect(() => {
    axiosPrivateInstance.interceptors.request.use(
      config => {
        if (!config.headers['Authorization'] && authStore.accessToken) {
          config.headers['Authorization'] = `Bearer ${authStore.accessToken}`
        }
        return config
      },
      err => Promise.reject(err)
    )

    axiosPrivateInstance.interceptors.response.use(
      res => res,
      async err => {
        const prevRequest = err.config
        const url = prevRequest?.url || ''
        const publicPaths = [
          '/api/auth/register',
          '/api/auth/login',
          '/api/auth/check-email',
          '/api/auth/refresh',
          '/api/auth/verify-email'
        ]

        if (
          (err.response?.status === 401 || err.response?.status === 403) &&
          !prevRequest.sent &&
          !publicPaths.some(path => url.includes(path))
        ) {
          prevRequest.sent = true
          await authStore.refresh()
          prevRequest.headers['Authorization'] = `Bearer ${authStore.accessToken}`
          return axiosPrivateInstance(prevRequest)
        }

        return Promise.reject(err)
      }
    )
  })

  return axiosPrivateInstance
}

export function useApi(){
    return axiosInstance;
}

