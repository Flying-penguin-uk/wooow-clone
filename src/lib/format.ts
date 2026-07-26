/** Shared formatting helpers. Kept out of page files so Fast Refresh stays intact. */
export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
