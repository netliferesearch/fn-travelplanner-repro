import { useRouter } from 'next/router';

/** @param {string} key - Key of for the url query. For example "category". */
export default function useUrlState(key) {
  const router = useRouter();

  // Return fallback before router is ready
  if (!router.isReady) return ['', () => {}];

  const urlState = router.query[key] || '';

  /** @param {string} newValue */
  function setUrlState(newValue) {
    const currentQuery = { ...router.query };

    if (newValue) {
      router.push({ query: { ...currentQuery, [key]: newValue } }, undefined, { shallow: true });
    } else {
      delete currentQuery[key];
      router.push({ query: { ...currentQuery } }, undefined, { shallow: true });
    }
  }

  return [urlState, setUrlState];
}
