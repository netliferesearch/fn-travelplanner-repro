/* eslint-disable */
import { config, languages, languageDefault, languageSelect } from './config';

const { guestUserId, adDfpNetworkId, adSite, gtmId } = config;

describe('config', () => {
  it(`should return correct value for 'languages'`, () => {
    const testInput = languages;
    const testOutput = [
      { name: 'no', title: 'Norwegian', lang: 'no', path: '/' },
      { name: 'en_GB', title: 'English (UK)', lang: 'en', path: '/en/' },
      { name: 'de_DE', title: 'German', lang: 'de', path: '/de/' },
    ];
    expect(testInput).toEqual(testOutput);
  });
  it(`should return correct value for 'languageDefault'`, () => {
    const testInput = languageDefault;
    const testOutput = { name: 'no', title: 'Norwegian', lang: 'no', path: '/' };
    expect(testInput).toEqual(testOutput);
  });
  it(`should return correct value for 'languageSelect('no')'`, () => {
    const testInput = languageSelect('no');
    const testOutput = { name: 'no', title: 'Norwegian', lang: 'no', path: '/' };
    expect(testInput).toEqual(testOutput);
  });
  it(`should return correct value for 'languageSelect('en')'`, () => {
    const testInput = languageSelect('en');
    const testOutput = { name: 'en_GB', title: 'English (UK)', lang: 'en', path: '/en/' };
    expect(testInput).toEqual(testOutput);
  });
  it(`should return correct value for 'languageSelect('de')'`, () => {
    const testInput = languageSelect('de');
    const testOutput = { name: 'de_DE', title: 'German', lang: 'de', path: '/de/' };
    expect(testInput).toEqual(testOutput);
  });
  it(`should return correct value for 'guestUserId'`, () => {
    const testInput = guestUserId;
    const testOutput = '25456c09-7ee2-45d8-9f68-fd939d116b77';
    expect(testInput).toEqual(testOutput);
  });
  // Google Ads
  it(`should return correct 'DFP Network' ID`, () => {
    const testInput = adDfpNetworkId;
    const testOutput = '22381252584';
    expect(testInput).toEqual(testOutput);
  });
  it(`should return correct DFP ad unit 'site' param value`, () => {
    const testInput = adSite;
    const testOutput = 'fjordnorway';
    expect(testInput).toEqual(testOutput);
  });
  // Google Tag Manager
  it(`should return correct 'Google Tag Manager' id`, () => {
    const testInput = gtmId;
    const testOutput = 'GTM-NBTRKT';
    expect(testInput).toEqual(testOutput);
  });
});
