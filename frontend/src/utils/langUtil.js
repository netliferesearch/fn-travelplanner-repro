/* eslint-disable no-nested-ternary */
// - 'langObjGlobal': The 'language' object set globally, by '/src/data/language.json'.
// - 'langObjLocal': The 'language' object set locally. When passed, it overrides the global 'langObjGlobal'.
// - 'term': The language definition consumed by the app.
// - 'language': The language 'locale', equivalent to
//               'config -> languages -> lang' (ie. 'no', 'en', 'de', etc.).
//               We do set this manually when using it within other utils, but in the app
//               it is usually set by the 'LanguageContext -> language' context.

import { languages, languageDefault } from './../../config';

export const getLanguageFallback = language => {
  const fallbackObj = languages.filter(f => f.lang === language)[0];
  // * Resolve fallbacks, conditionally. Unless specified otherwise, every language falls back to English, but English falls back to Norwegian
  // Resolve explicitly defined fallbacks first
  if (fallbackObj?.fallback) {
    return fallbackObj.fallback;
  }
  // Everything else falls back to 'en'
  if (language !== 'en' && language !== languageDefault.lang) {
    // Sometimes 'translationObj.en' is falsey, so we need a fallback here too
    return 'en';
  }
  // Ultimately, fallback to the default language
  return languageDefault.lang;
};

/**
 * @typedef TermValues
 * @type {keyof langObjGlobal}
 *
 * @param {TermValues} term
 * @param {"en" | "no" | "de"} language
 * @param {any} langObjLocal
 * @returns {string} Translated term
 */
export const lang = term => term;
export const getUrlLang = () => 'en';
export const getTranslationSlug = () => 'something';
export const resolveLink = () => 'something';
export const getTranslation = ({ translationObj }) => translationObj?.en || 'TRANSLATION MISSING';
