import {
  EnumLanguageTranslation,
  i18nEngine,
} from '@brightchain/brightchain-lib';
import { LanguageCodes } from '@digitaldefiance/i18n-lib';
import { SuggestionReason } from '../enumerations/suggestion-reason';

export type SuggestionReasonLanguageTranslation =
  EnumLanguageTranslation<SuggestionReason>;

export const SuggestionReasonTranslations: SuggestionReasonLanguageTranslation =
  i18nEngine.registerEnum(
    SuggestionReason,
    {
      [LanguageCodes.DE]: {
        [SuggestionReason.MutualConnections]: 'Gemeinsame Verbindungen',
        [SuggestionReason.SimilarInterests]: 'Ähnliche Interessen',
        [SuggestionReason.SimilarToUser]: 'Ähnlich wie Benutzer',
      },
      [LanguageCodes.EN_GB]: {
        [SuggestionReason.MutualConnections]: 'Mutual Connections',
        [SuggestionReason.SimilarInterests]: 'Similar Interests',
        [SuggestionReason.SimilarToUser]: 'Similar to User',
      },
      [LanguageCodes.EN_US]: {
        [SuggestionReason.MutualConnections]: 'Mutual Connections',
        [SuggestionReason.SimilarInterests]: 'Similar Interests',
        [SuggestionReason.SimilarToUser]: 'Similar to User',
      },
      [LanguageCodes.ES]: {
        [SuggestionReason.MutualConnections]: 'Conexiones mutuas',
        [SuggestionReason.SimilarInterests]: 'Intereses similares',
        [SuggestionReason.SimilarToUser]: 'Similar a usuario',
      },
      [LanguageCodes.FR]: {
        [SuggestionReason.MutualConnections]: 'Connexions mutuelles',
        [SuggestionReason.SimilarInterests]: 'Intérêts similaires',
        [SuggestionReason.SimilarToUser]: 'Similaire à un utilisateur',
      },
      [LanguageCodes.JA]: {
        [SuggestionReason.MutualConnections]: '共通のつながり',
        [SuggestionReason.SimilarInterests]: '似た興味',
        [SuggestionReason.SimilarToUser]: 'ユーザーに類似',
      },
      [LanguageCodes.UK]: {
        [SuggestionReason.MutualConnections]: "Спільні зв'язки",
        [SuggestionReason.SimilarInterests]: 'Схожі інтереси',
        [SuggestionReason.SimilarToUser]: 'Схожий на користувача',
      },
      [LanguageCodes.ZH_CN]: {
        [SuggestionReason.MutualConnections]: '共同好友',
        [SuggestionReason.SimilarInterests]: '相似兴趣',
        [SuggestionReason.SimilarToUser]: '与用户相似',
      },
    },
    'SuggestionReason',
  );
