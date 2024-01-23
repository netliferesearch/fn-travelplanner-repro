import { isEmptyArray } from './isEmptyUtil';
import { getTranslationSlug } from './langUtil';

const defaultOptions = {
  query: {},
  germanFallback: true,
};

/**
 * @param {"no" | "en" | "de"} language - Language used to resolve path.
 * @param {string[] | object[]} segmentsArray - An array of url segments. Segments can either be a string or an object containing a valid locSlug.
 * @param {defaultOptions} options - Object of options.
 * @returns {string | null} The resolved link path, or null if the path could not be resolved.
 */
export default function resolveLink(language, segmentsArray, options = defaultOptions) {
  // Deconstruct options
  const { germanFallback, query } = { ...defaultOptions, ...options };

  // Set fallbackLanguage to handle german slugs that should fallback to english by default
  const fallbackLanguage = germanFallback && language === 'de' ? 'en' : language;

  // * Resolve the path
  let pathOutput = [language];

  segmentsArray.every(seg => {
    // Skip if segment is a falsy value
    if (!seg) return true;

    // Use values from "segmentMap" if "seg" is a string
    if (typeof seg === 'string') {
      const resolvedSeg = '';
      pathOutput.push(resolvedSeg || seg); // Fallback to the segment-string itself (useful for arbitrary values)
      return true;
    }

    // If not, try to resolve "seg" through "getTranslationSlug"
    const segmentSlug = getTranslationSlug({ obj: seg, language, noFallback: true });
    const fallbackSegmentSlug = getTranslationSlug({
      obj: seg,
      language: fallbackLanguage,
      noFallback: true,
    });

    if (segmentSlug) {
      pathOutput.push(segmentSlug);
      return true;
    }

    if (fallbackSegmentSlug) {
      pathOutput.push(fallbackSegmentSlug);
      return true;
    }

    pathOutput = [];
    return false;
  });

  // Throw error if any segment fail to resolve
  if (isEmptyArray(pathOutput)) {
    const errorObj = {
      language,
      segments: segmentsArray.map(seg => seg?.locSlug || seg),
    };
    console.error(`Could not resolve URL path: ${JSON.stringify(errorObj, null, 2)}`);

    pathOutput = [language];
  }

  const path = `/${pathOutput.join('/')}`;

  // * Resolve query string
  const resolvedQuery = new Map(Object.entries(query));

  // Get the locSlug of query values if they are not strings
  resolvedQuery.forEach((val, key) => {
    if (typeof val === 'string') return;
    resolvedQuery.set(key, getTranslationSlug({ obj: val, language }));
  });

  const queryString = new URLSearchParams(Object.fromEntries(resolvedQuery)).toString();

  // * Return resolved output
  if (!queryString) return path;
  return `${path}?${queryString}`;
}
