import { StringsCollection } from '@digitaldefiance/i18n-lib';
import {
  BrightHubStringKey,
  BrightHubStrings,
} from '../../enumerations/brightHubStrings';

export const BrightHubJapaneseStrings: StringsCollection<BrightHubStringKey> = {
  // PostCard
  [BrightHubStrings.PostCard_Reposted]: 'リポスト済み',
  [BrightHubStrings.PostCard_Edited]: '編集済み',
  [BrightHubStrings.PostCard_HubRestricted]: 'ハブメンバーのみに表示',
  [BrightHubStrings.PostCard_Deleted]: 'この投稿は削除されました。',
  [BrightHubStrings.PostCard_ReplyAriaTemplate]: '返信、{COUNT}件の返信',
  [BrightHubStrings.PostCard_RepostAriaTemplate]:
    'リポスト、{COUNT}件のリポスト',
  [BrightHubStrings.PostCard_LikeAriaTemplate]: 'いいね、{COUNT}件のいいね',
  [BrightHubStrings.PostCard_UnlikeAriaTemplate]:
    'いいね取消、{COUNT}件のいいね',
  [BrightHubStrings.PostCard_PostByAriaTemplate]: '{NAME}の投稿',

  // PostComposer
  [BrightHubStrings.PostComposer_Placeholder]: '何が起きていますか？',
  [BrightHubStrings.PostComposer_ReplyPlaceholder]: '返信を投稿',
  [BrightHubStrings.PostComposer_ReplyingTo]: '返信先',
  [BrightHubStrings.PostComposer_CancelReply]: '返信をキャンセル',
  [BrightHubStrings.PostComposer_Bold]: '太字',
  [BrightHubStrings.PostComposer_Italic]: '斜体',
  [BrightHubStrings.PostComposer_Code]: 'コード',
  [BrightHubStrings.PostComposer_Emoji]: '絵文字を挿入',
  [BrightHubStrings.PostComposer_AttachImage]: '画像を添付',
  [BrightHubStrings.PostComposer_RemoveAttachmentTemplate]:
    '添付ファイル{INDEX}を削除',
  [BrightHubStrings.PostComposer_AttachmentAltTemplate]: '添付ファイル{INDEX}',
  [BrightHubStrings.PostComposer_VisibleTo]: '公開範囲',
  [BrightHubStrings.PostComposer_MembersTemplate]: '{COUNT}人のメンバー',
  [BrightHubStrings.PostComposer_SubmitPost]: '投稿を送信',
  [BrightHubStrings.PostComposer_Post]: '投稿',
  [BrightHubStrings.PostComposer_Reply]: '返信',
  [BrightHubStrings.PostComposer_Preview]: 'プレビュー',
  [BrightHubStrings.PostComposer_PreviewAriaLabel]: '投稿内容のプレビュー',
  [BrightHubStrings.PostComposer_MarkupHelp]: '書式ヘルプ',
  [BrightHubStrings.PostComposer_MarkupHelpAriaLabel]:
    '投稿の書式とマークアップリファレンス',
  [BrightHubStrings.PostComposer_MarkupHelpClose]: '閉じる',
  [BrightHubStrings.PostComposer_MarkupHelpTabPost]: '投稿の書式',
  [BrightHubStrings.PostComposer_MarkupHelpTabIcons]: 'アイコンマークアップ',

  // Timeline
  [BrightHubStrings.Timeline_AriaLabel]: 'タイムライン',
  [BrightHubStrings.Timeline_FilteredByTemplate]: 'フィルター：{LABEL}',
  [BrightHubStrings.Timeline_ClearFilter]: 'クリア',
  [BrightHubStrings.Timeline_EmptyDefault]:
    'まだ投稿がありません。フォローして投稿を表示しましょう。',
  [BrightHubStrings.Timeline_LoadingPosts]: '投稿を読み込み中',
  [BrightHubStrings.Timeline_AllCaughtUp]: 'すべて確認済みです',

  // ThreadView
  [BrightHubStrings.ThreadView_AriaLabel]: 'スレッド',
  [BrightHubStrings.ThreadView_ParentDeleted]: '元の投稿は削除されました',
  [BrightHubStrings.ThreadView_ReplyCountSingular]: '1件の返信',
  [BrightHubStrings.ThreadView_ReplyCountPluralTemplate]: '{COUNT}件の返信',
  [BrightHubStrings.ThreadView_ParticipantCountSingular]: '1人の参加者',
  [BrightHubStrings.ThreadView_ParticipantCountPluralTemplate]:
    '{COUNT}人の参加者',
  [BrightHubStrings.ThreadView_NoReplies]:
    'まだ返信がありません。最初に返信しましょう！',

  // FollowButton
  [BrightHubStrings.FollowButton_Follow]: 'フォロー',
  [BrightHubStrings.FollowButton_Following]: 'フォロー中',
  [BrightHubStrings.FollowButton_Unfollow]: 'フォロー解除',

  // LikeButton
  [BrightHubStrings.LikeButton_LikeAriaTemplate]: 'いいね、{COUNT}件のいいね',
  [BrightHubStrings.LikeButton_UnlikeAriaTemplate]:
    'いいね取消、{COUNT}件のいいね',

  // RepostButton
  [BrightHubStrings.RepostButton_RepostAriaTemplate]:
    'リポスト、{COUNT}件のリポスト',
  [BrightHubStrings.RepostButton_UndoRepostAriaTemplate]:
    'リポスト取消、{COUNT}件のリポスト',

  // UserProfileCard
  [BrightHubStrings.UserProfileCard_Verified]: '認証済み',
  [BrightHubStrings.UserProfileCard_ProtectedAccount]: '保護されたアカウント',
  [BrightHubStrings.UserProfileCard_ProfileOfTemplate]: '{NAME}のプロフィール',
  [BrightHubStrings.UserProfileCard_Following]: 'フォロー中',
  [BrightHubStrings.UserProfileCard_Followers]: 'フォロワー',
  [BrightHubStrings.UserProfileCard_StrongConnection]: '強いつながり',
  [BrightHubStrings.UserProfileCard_ModerateConnection]: '中程度のつながり',
  [BrightHubStrings.UserProfileCard_WeakConnection]: '弱いつながり',
  [BrightHubStrings.UserProfileCard_DormantConnection]: '休止中のつながり',
  [BrightHubStrings.UserProfileCard_MutualConnectionSingular]:
    '1人の共通のつながり',
  [BrightHubStrings.UserProfileCard_MutualConnectionPluralTemplate]:
    '{COUNT}人の共通のつながり',

  // SearchResults
  [BrightHubStrings.SearchResults_AriaTemplate]: '「{QUERY}」の検索結果',
  [BrightHubStrings.SearchResults_TabAll]: 'すべて',
  [BrightHubStrings.SearchResults_TabPosts]: '投稿',
  [BrightHubStrings.SearchResults_TabPostsTemplate]: '投稿（{COUNT}）',
  [BrightHubStrings.SearchResults_TabUsers]: 'ユーザー',
  [BrightHubStrings.SearchResults_TabUsersTemplate]: 'ユーザー（{COUNT}）',
  [BrightHubStrings.SearchResults_NoResultsTemplate]:
    '「{QUERY}」の結果が見つかりません',
  [BrightHubStrings.SearchResults_EnterSearchTerm]:
    '検索語を入力して投稿やユーザーを検索',
  [BrightHubStrings.SearchResults_SectionPeople]: 'ユーザー',
  [BrightHubStrings.SearchResults_SectionPosts]: '投稿',
  [BrightHubStrings.SearchResults_Loading]: '検索結果を読み込み中',
  [BrightHubStrings.SearchResults_EndOfResults]: '結果の最後',

    // Navigation / Sidebar
    [BrightHubStrings.Nav_Home]: 'ホーム',
    [BrightHubStrings.Nav_Explore]: '探索',
    [BrightHubStrings.Nav_Notifications]: '通知',
    [BrightHubStrings.Nav_Messages]: 'メッセージ',
    [BrightHubStrings.Nav_Profile]: 'プロフィール',
    [BrightHubStrings.Nav_Connections]: 'つながり',
    [BrightHubStrings.Nav_Settings]: '設定',
    [BrightHubStrings.Nav_SidebarLabel]: 'BrightHubナビゲーション',
    [BrightHubStrings.Nav_SubscribedHubs]: 'あなたのHub',
    [BrightHubStrings.Nav_CreateHub]: 'Hubを作成',
    [BrightHubStrings.HubDetail_MembersTemplate]: '{COUNT}人のメンバー',
    [BrightHubStrings.HubDetail_PostsTemplate]: '{COUNT}件の投稿',
    [BrightHubStrings.HubDetail_Join]: '参加',
    [BrightHubStrings.HubDetail_Leave]: '退出',
    [BrightHubStrings.HubDetail_Joined]: '参加済み',
    [BrightHubStrings.HubDetail_TrustOpen]: 'オープン',
    [BrightHubStrings.HubDetail_TrustVerified]: '認証済み',
    [BrightHubStrings.HubDetail_TrustEncrypted]: '暗号化',
    [BrightHubStrings.HubDetail_About]: '概要',
    [BrightHubStrings.HubDetail_Rules]: 'ルール',
    [BrightHubStrings.HubDetail_SortHot]: '人気',
    [BrightHubStrings.HubDetail_SortNew]: '新着',
    [BrightHubStrings.HubDetail_SortTop]: 'トップ',
    [BrightHubStrings.HubDetail_EmptyState]: 'まだ投稿がありません。最初のディスカッションを始めましょう！',
    [BrightHubStrings.HubDetail_SubHubs]: 'サブHub',
    [BrightHubStrings.Explore_Title]: 'Hubを探索',
    [BrightHubStrings.Explore_SearchPlaceholder]: 'Hubを検索…',
    [BrightHubStrings.Explore_Trending]: 'トレンド',
    [BrightHubStrings.Explore_New]: '新着',
    [BrightHubStrings.Explore_EmptyState]: 'まだHubがありません。作成して始めましょう！',
    [BrightHubStrings.Explore_NoResults]: '検索に一致するHubはありません。',
    [BrightHubStrings.Home_TrendingHubs]: 'トレンドHub',
    [BrightHubStrings.Home_RecentActivity]: '最近のアクティビティ',
    [BrightHubStrings.Home_YourHubs]: 'あなたのHub',
    [BrightHubStrings.Home_SuggestedHubs]: 'おすすめHub',
    [BrightHubStrings.Home_ViewAll]: 'すべて表示',
    [BrightHubStrings.Home_Welcome]: 'BrightHubへようこそ',
    [BrightHubStrings.Home_WelcomeSubtitle]: 'Hubに参加して、興味のあるコミュニティのディスカッションを見ましょう。',
    [BrightHubStrings.Home_NoHubsYet]: 'まだHubに参加していません',
    [BrightHubStrings.Home_NoHubsHint]: 'Hubを探索して、興味のあるコミュニティを見つけましょう。',
    [BrightHubStrings.CreateHub_Title]: 'Hubを作成',
    [BrightHubStrings.CreateHub_NameLabel]: 'Hub名',
    [BrightHubStrings.CreateHub_NamePlaceholder]: '例：プログラミング',
    [BrightHubStrings.CreateHub_SlugLabel]: 'URLスラッグ',
    [BrightHubStrings.CreateHub_SlugPlaceholder]: '例：programming',
    [BrightHubStrings.CreateHub_DescriptionLabel]: '説明',
    [BrightHubStrings.CreateHub_DescriptionPlaceholder]: 'このHubは何についてですか？',
    [BrightHubStrings.CreateHub_TrustTierLabel]: '信頼レベル',
    [BrightHubStrings.CreateHub_ParentHubLabel]: '親Hub（オプション）',
    [BrightHubStrings.CreateHub_ParentHubNone]: 'なし（トップレベルHub）',
    [BrightHubStrings.CreateHub_Submit]: 'Hubを作成',
    [BrightHubStrings.CreateHub_Cancel]: 'キャンセル',
    [BrightHubStrings.Nav_CreatePost]: '新規投稿',
    [BrightHubStrings.Nav_Trending]: 'トレンド',
};
