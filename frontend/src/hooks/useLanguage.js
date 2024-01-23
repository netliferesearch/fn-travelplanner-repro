import { useRouter } from 'next/router';
import { languageDefault } from '../../config';
import { getTranslation, getTranslationSlug } from '../utils/langUtil';
import { removeQueryParams } from '../utils/removeUrlParamsUtil';

/**
 * @returns {"no" | "en" | "de"} The selected language based on the current URL.
 */
export default function useLanguage() {
  const router = useRouter();
  if (!router) return languageDefault.lang;

  const firstSegmentArray = router.asPath.split('/');
  const firstSegment = removeQueryParams(firstSegmentArray[1]);
  if (firstSegment === 'no' || firstSegment === 'en' || firstSegment === 'de') return firstSegment;
  return languageDefault.lang;
}

export function useTranslation() {
  const language = useLanguage();

  /**
   * @param {{
   *  en: string,
   *  no: string,
   *  de: string
   * } | {
   *  locSlug: {
   *   en: string,
   *   no: string,
   *   de: string
   *  }
   * }} translationObj Locale object, or object containing a locSlug object
   * @returns {string} Translated value based on the currently selected language
   */
  function translate(translationObj) {
    if (!translationObj?.locSlug) return getTranslation({ translationObj, language });
    return getTranslationSlug({ obj: translationObj, language });
  }

  return translate;
}
