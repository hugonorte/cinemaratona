import { useAuthStore } from '@/store/useAuthStore'
import { refreshTokenApi } from '@/api/refreshTokenApi'

export async function fetchWithAuthRetry(query: string, variables = {}) {
  const auth = useAuthStore.getState()

  const makeRequest = async (token: string) => {
    return await fetch(`${import.meta.env.VITE_BASE_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify({ query, variables }),
    })
  }

  let response = await makeRequest(auth.accessToken!)

  if (response.status === 401) {
    try {
      const data = await refreshTokenApi()
      useAuthStore.getState().setAuth(data.access_token, data.user)
      response = await makeRequest(data.access_token)
    } catch (error) {
      console.error('Erro ao renovar token:', error)
      useAuthStore.getState().clearAuth()
      throw error
    }
  }

  const json = await response.json()

  if (json.errors) {
    throw new Error(json.errors[0].message)
  }

  return json.data
}
