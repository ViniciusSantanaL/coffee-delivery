export function useImageUrl(name: string) {
  return new URL(`${name}`, import.meta.url).href
}
