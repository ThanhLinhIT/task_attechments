const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  const cleanBase = API_BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return fetch(`${cleanBase}${cleanPath}`, init);
}
