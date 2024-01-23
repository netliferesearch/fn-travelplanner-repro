export const removeQueryParams = url => {
  let output = url;
  if (url && typeof url === 'string') {
    const regex = /\?(.*)/gi; // This removes everything from the ? and after. To be used when getting language in useLanguage if indexpage has query params
    output = url.replace(regex, '');
  }
  return output;
};
