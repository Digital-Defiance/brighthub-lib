import {
  BrandedMasterStringsCollection,
  ComponentConfig,
  CoreLanguageCode,
  LanguageCodes,
  type I18nComponentPackage,
} from '@digitaldefiance/i18n-lib';
import {
  BrightHubComponentId,
  BrightHubStrings,
} from '../enumerations/brightHubStrings';
import { BrightHubAmericanEnglishStrings } from './strings/englishUs';
import { BrightHubBritishEnglishStrings } from './strings/englishUK';
import { BrightHubFrenchStrings } from './strings/french';
import { BrightHubGermanStrings } from './strings/german';
import { BrightHubJapaneseStrings } from './strings/japanese';
import { BrightHubMandarinStrings } from './strings/mandarin';
import { BrightHubSpanishStrings } from './strings/spanish';
import { BrightHubUkrainianStrings } from './strings/ukrainian';

export const BrightHubComponentStrings: BrandedMasterStringsCollection<
  typeof BrightHubStrings,
  CoreLanguageCode
> = {
  [LanguageCodes.EN_US]: BrightHubAmericanEnglishStrings,
  [LanguageCodes.EN_GB]: BrightHubBritishEnglishStrings,
  [LanguageCodes.FR]: BrightHubFrenchStrings,
  [LanguageCodes.ZH_CN]: BrightHubMandarinStrings,
  [LanguageCodes.ES]: BrightHubSpanishStrings,
  [LanguageCodes.UK]: BrightHubUkrainianStrings,
  [LanguageCodes.DE]: BrightHubGermanStrings,
  [LanguageCodes.JA]: BrightHubJapaneseStrings,
};

export function createBrightHubComponentConfig(): ComponentConfig {
  return {
    id: BrightHubComponentId,
    strings: BrightHubComponentStrings,
    aliases: ['BrightHubStrings'],
  };
}

export function createBrightHubComponentPackage(): I18nComponentPackage {
  return {
    config: createBrightHubComponentConfig(),
    stringKeyEnum: BrightHubStrings,
  };
}
