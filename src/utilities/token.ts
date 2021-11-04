/**
 * Save token to session storage.
 *
 * @param {string} value Token string.
 * @param {string} [key='token'] Token cache key.
 */
export function saveToken(value: string, key: string = 'token'): void {
  sessionStorage.setItem(key, value);
}
