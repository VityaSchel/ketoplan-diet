export async function fetchAPI<T>(endpoint: string, method: 'GET', body: undefined, headers?: { [key: string]: any }, options?: { parseBody: true }): Promise<{ response: T, request: Response } >
export async function fetchAPI(endpoint: string, method: string, body?: { [key: string]: any }, headers?: { [key: string]: any }, options?: { parseBody: false }): Promise<{ request: Response } >
export async function fetchAPI<T>(endpoint: string, method: string, body?: { [key: string]: any }, headers?: { [key: string]: any }, options?: { parseBody: true }): Promise<{ response: T, request: Response } >
export async function fetchAPI(endpoint: string, method: string, body?: { [key: string]: any }, headers?: { [key: string]: any }, options?: { parseBody: false }): Promise<{ request: Response } >
export async function fetchAPI<T>(endpoint: string, method = 'GET', body?: { [key: string]: any }, headers = {}, options = { parseBody: true }): Promise<{ response: T, request: Response } > {
  const request = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + endpoint, {
    method,
    ...(method !== 'GET' && {
      body: JSON.stringify(body),
    }),
    headers: {
      ...(method !== 'GET' && {
        'Content-Type': 'application/json'
      }),
      ...headers
    }
  })
  if(options?.parseBody) {
    const response = await request.json()
    return { response, request: request }
  } else {
    // @ts-ignore
    return { request: request }
  }
}