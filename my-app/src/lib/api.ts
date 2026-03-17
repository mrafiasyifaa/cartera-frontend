const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('AUTH_FAILED')
  }
}

export class AuthError extends Error{
    constructor(public status:number){
        super('AUTH_ERROR')
        this.name = 'AuthError'
    }
}

export async function apiFetch(path: string, options?: RequestInit){
    const res = await fetch(`${BASE_URL}${path}`,{
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    })

    if (res.status === 401){
        throw new AuthError(401)
    }

    if(!res.ok){
        throw new Error(`API_ERROR_${res.status}`)
    }

    return res.json()
}