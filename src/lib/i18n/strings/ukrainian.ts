import { StringsCollection } from '@digitaldefiance/i18n-lib';
import {
  BrightHubStringKey,
  BrightHubStrings,
} from '../../enumerations/brightHubStrings';

export const BrightHubUkrainianStrings: StringsCollection<BrightHubStringKey> =
  {
    // PostCard
    [BrightHubStrings.PostCard_Reposted]: 'Поширено',
    [BrightHubStrings.PostCard_Edited]: 'Відредаговано',
    [BrightHubStrings.PostCard_HubRestricted]:
      'Видимий лише для учасників хабу',
    [BrightHubStrings.PostCard_Deleted]: 'Цей допис було видалено.',
    [BrightHubStrings.PostCard_ReplyAriaTemplate]:
      'Відповісти, {COUNT} відповідей',
    [BrightHubStrings.PostCard_RepostAriaTemplate]:
      'Поширити, {COUNT} поширень',
    [BrightHubStrings.PostCard_LikeAriaTemplate]:
      'Вподобати, {COUNT} вподобань',
    [BrightHubStrings.PostCard_UnlikeAriaTemplate]:
      'Прибрати вподобання, {COUNT} вподобань',
    [BrightHubStrings.PostCard_PostByAriaTemplate]: 'Допис від {NAME}',

    // PostComposer
    [BrightHubStrings.PostComposer_Placeholder]: 'Що нового?',
    [BrightHubStrings.PostComposer_ReplyPlaceholder]:
      'Опублікуйте вашу відповідь',
    [BrightHubStrings.PostComposer_ReplyingTo]: 'Відповідь для',
    [BrightHubStrings.PostComposer_CancelReply]: 'Скасувати відповідь',
    [BrightHubStrings.PostComposer_Bold]: 'Жирний',
    [BrightHubStrings.PostComposer_Italic]: 'Курсив',
    [BrightHubStrings.PostComposer_Code]: 'Код',
    [BrightHubStrings.PostComposer_Emoji]: 'Вставити емодзі',
    [BrightHubStrings.PostComposer_AttachImage]: 'Прикріпити зображення',
    [BrightHubStrings.PostComposer_RemoveAttachmentTemplate]:
      'Видалити вкладення {INDEX}',
    [BrightHubStrings.PostComposer_AttachmentAltTemplate]: 'Вкладення {INDEX}',
    [BrightHubStrings.PostComposer_VisibleTo]: 'Видимий для',
    [BrightHubStrings.PostComposer_MembersTemplate]: '{COUNT} учасників',
    [BrightHubStrings.PostComposer_SubmitPost]: 'Надіслати допис',
    [BrightHubStrings.PostComposer_Post]: 'Опублікувати',
    [BrightHubStrings.PostComposer_Reply]: 'Відповісти',

    // Timeline
    [BrightHubStrings.Timeline_AriaLabel]: 'Стрічка',
    [BrightHubStrings.Timeline_FilteredByTemplate]: 'Фільтр: {LABEL}',
    [BrightHubStrings.Timeline_ClearFilter]: 'Очистити',
    [BrightHubStrings.Timeline_EmptyDefault]:
      'Ще немає дописів. Підпишіться на когось, щоб бачити їхні дописи тут.',
    [BrightHubStrings.Timeline_LoadingPosts]: 'Завантаження дописів',
    [BrightHubStrings.Timeline_AllCaughtUp]: 'Ви все переглянули',

    // ThreadView
    [BrightHubStrings.ThreadView_AriaLabel]: 'Гілка обговорення',
    [BrightHubStrings.ThreadView_ParentDeleted]:
      'Батьківський допис було видалено',
    [BrightHubStrings.ThreadView_ReplyCountSingular]: '1 відповідь',
    [BrightHubStrings.ThreadView_ReplyCountPluralTemplate]:
      '{COUNT} відповідей',
    [BrightHubStrings.ThreadView_ParticipantCountSingular]: '1 учасник',
    [BrightHubStrings.ThreadView_ParticipantCountPluralTemplate]:
      '{COUNT} учасників',
    [BrightHubStrings.ThreadView_NoReplies]:
      'Ще немає відповідей. Будьте першим!',

    // FollowButton
    [BrightHubStrings.FollowButton_Follow]: 'Підписатися',
    [BrightHubStrings.FollowButton_Following]: 'Підписаний',
    [BrightHubStrings.FollowButton_Unfollow]: 'Відписатися',

    // LikeButton
    [BrightHubStrings.LikeButton_LikeAriaTemplate]:
      'Вподобати, {COUNT} вподобань',
    [BrightHubStrings.LikeButton_UnlikeAriaTemplate]:
      'Прибрати вподобання, {COUNT} вподобань',

    // RepostButton
    [BrightHubStrings.RepostButton_RepostAriaTemplate]:
      'Поширити, {COUNT} поширень',
    [BrightHubStrings.RepostButton_UndoRepostAriaTemplate]:
      'Скасувати поширення, {COUNT} поширень',

    // UserProfileCard
    [BrightHubStrings.UserProfileCard_Verified]: 'Підтверджений',
    [BrightHubStrings.UserProfileCard_ProtectedAccount]:
      'Захищений обліковий запис',
    [BrightHubStrings.UserProfileCard_ProfileOfTemplate]: 'Профіль {NAME}',
    [BrightHubStrings.UserProfileCard_Following]: 'Підписки',
    [BrightHubStrings.UserProfileCard_Followers]: 'Підписники',
    [BrightHubStrings.UserProfileCard_StrongConnection]: "Сильний зв'язок",
    [BrightHubStrings.UserProfileCard_ModerateConnection]: "Помірний зв'язок",
    [BrightHubStrings.UserProfileCard_WeakConnection]: "Слабкий зв'язок",
    [BrightHubStrings.UserProfileCard_DormantConnection]: "Неактивний зв'язок",
    [BrightHubStrings.UserProfileCard_MutualConnectionSingular]:
      '1 спільний контакт',
    [BrightHubStrings.UserProfileCard_MutualConnectionPluralTemplate]:
      '{COUNT} спільних контактів',

    // SearchResults
    [BrightHubStrings.SearchResults_AriaTemplate]:
      'Результати пошуку для «{QUERY}»',
    [BrightHubStrings.SearchResults_TabAll]: 'Усе',
    [BrightHubStrings.SearchResults_TabPosts]: 'Дописи',
    [BrightHubStrings.SearchResults_TabPostsTemplate]: 'Дописи ({COUNT})',
    [BrightHubStrings.SearchResults_TabUsers]: 'Користувачі',
    [BrightHubStrings.SearchResults_TabUsersTemplate]: 'Користувачі ({COUNT})',
    [BrightHubStrings.SearchResults_NoResultsTemplate]:
      'Не знайдено результатів для «{QUERY}»',
    [BrightHubStrings.SearchResults_EnterSearchTerm]:
      'Введіть пошуковий запит, щоб знайти дописи та людей',
    [BrightHubStrings.SearchResults_SectionPeople]: 'Люди',
    [BrightHubStrings.SearchResults_SectionPosts]: 'Дописи',
    [BrightHubStrings.SearchResults_Loading]: 'Завантаження результатів пошуку',
    [BrightHubStrings.SearchResults_EndOfResults]: 'Кінець результатів',

    // Navigation / Sidebar
    [BrightHubStrings.Nav_Home]: 'Головна',
    [BrightHubStrings.Nav_Explore]: 'Огляд',
    [BrightHubStrings.Nav_Notifications]: 'Сповіщення',
    [BrightHubStrings.Nav_Messages]: 'Повідомлення',
    [BrightHubStrings.Nav_Profile]: 'Профіль',
    [BrightHubStrings.Nav_Connections]: "Зв'язки",
    [BrightHubStrings.Nav_Settings]: 'Налаштування',
    [BrightHubStrings.Nav_SidebarLabel]: 'Навігація BrightHub',
    [BrightHubStrings.Nav_SubscribedHubs]: 'Ваші Hubs',
    [BrightHubStrings.Nav_CreateHub]: 'Створити Hub',
    [BrightHubStrings.HubDetail_MembersTemplate]: '{COUNT} учасників',
    [BrightHubStrings.HubDetail_PostsTemplate]: '{COUNT} публікацій',
    [BrightHubStrings.HubDetail_Join]: 'Приєднатися',
    [BrightHubStrings.HubDetail_Leave]: 'Вийти',
    [BrightHubStrings.HubDetail_Joined]: 'Приєднано',
    [BrightHubStrings.HubDetail_TrustOpen]: 'Відкритий',
    [BrightHubStrings.HubDetail_TrustVerified]: 'Верифікований',
    [BrightHubStrings.HubDetail_TrustEncrypted]: 'Зашифрований',
    [BrightHubStrings.HubDetail_About]: 'Про',
    [BrightHubStrings.HubDetail_Rules]: 'Правила',
    [BrightHubStrings.HubDetail_SortHot]: 'Популярне',
    [BrightHubStrings.HubDetail_SortNew]: 'Нове',
    [BrightHubStrings.HubDetail_SortTop]: 'Найкраще',
    [BrightHubStrings.HubDetail_EmptyState]: 'Ще немає публікацій. Будьте першим, хто розпочне обговорення!',
    [BrightHubStrings.HubDetail_SubHubs]: 'Під-хаби',
    [BrightHubStrings.Explore_Title]: 'Огляд Hubs',
    [BrightHubStrings.Explore_SearchPlaceholder]: 'Шукати hubs…',
    [BrightHubStrings.Explore_Trending]: 'Тренди',
    [BrightHubStrings.Explore_New]: 'Нове',
    [BrightHubStrings.Explore_EmptyState]: 'Ще немає hubs. Створіть один, щоб почати!',
    [BrightHubStrings.Explore_NoResults]: 'Жоден hub не відповідає вашому пошуку.',
    [BrightHubStrings.Home_TrendingHubs]: 'Популярні Hubs',
    [BrightHubStrings.Home_RecentActivity]: 'Остання активність',
    [BrightHubStrings.Home_YourHubs]: 'Ваші Hubs',
    [BrightHubStrings.Home_SuggestedHubs]: 'Рекомендовані Hubs',
    [BrightHubStrings.Home_ViewAll]: 'Переглянути все',
    [BrightHubStrings.Home_Welcome]: 'Ласкаво просимо до BrightHub',
    [BrightHubStrings.Home_WelcomeSubtitle]: 'Приєднуйтесь до hubs, щоб бачити обговорення спільнот, які вас цікавлять.',
    [BrightHubStrings.Home_NoHubsYet]: 'Ви ще не приєдналися до жодного hub',
    [BrightHubStrings.Home_NoHubsHint]: 'Досліджуйте hubs, щоб знайти спільноти, які вас цікавлять.',
    [BrightHubStrings.CreateHub_Title]: 'Створити Hub',
    [BrightHubStrings.CreateHub_NameLabel]: 'Назва hub',
    [BrightHubStrings.CreateHub_NamePlaceholder]: 'напр. Програмування',
    [BrightHubStrings.CreateHub_SlugLabel]: 'URL-ідентифікатор',
    [BrightHubStrings.CreateHub_SlugPlaceholder]: 'напр. programming',
    [BrightHubStrings.CreateHub_DescriptionLabel]: 'Опис',
    [BrightHubStrings.CreateHub_DescriptionPlaceholder]: 'Про що цей hub?',
    [BrightHubStrings.CreateHub_TrustTierLabel]: 'Рівень довіри',
    [BrightHubStrings.CreateHub_ParentHubLabel]: 'Батьківський hub (необов.)',
    [BrightHubStrings.CreateHub_ParentHubNone]: 'Немає (hub верхнього рівня)',
    [BrightHubStrings.CreateHub_Submit]: 'Створити Hub',
    [BrightHubStrings.CreateHub_Cancel]: 'Скасувати',
    [BrightHubStrings.Nav_CreatePost]: 'Новий допис',
    [BrightHubStrings.Nav_Trending]: 'Тренди',
  };
