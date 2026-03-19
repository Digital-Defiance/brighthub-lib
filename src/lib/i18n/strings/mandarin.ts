import { StringsCollection } from '@digitaldefiance/i18n-lib';
import {
  BrightHubStringKey,
  BrightHubStrings,
} from '../../enumerations/brightHubStrings';

export const BrightHubMandarinStrings: StringsCollection<BrightHubStringKey> = {
  // PostCard
  [BrightHubStrings.PostCard_Reposted]: '已转发',
  [BrightHubStrings.PostCard_Edited]: '已编辑',
  [BrightHubStrings.PostCard_HubRestricted]: '仅Hub成员可见',
  [BrightHubStrings.PostCard_Deleted]: '此帖子已被删除。',
  [BrightHubStrings.PostCard_ReplyAriaTemplate]: '回复，{COUNT}条回复',
  [BrightHubStrings.PostCard_RepostAriaTemplate]: '转发，{COUNT}次转发',
  [BrightHubStrings.PostCard_LikeAriaTemplate]: '点赞，{COUNT}个赞',
  [BrightHubStrings.PostCard_UnlikeAriaTemplate]: '取消点赞，{COUNT}个赞',
  [BrightHubStrings.PostCard_PostByAriaTemplate]: '{NAME}的帖子',

  // PostComposer
  [BrightHubStrings.PostComposer_Placeholder]: '有什么新鲜事？',
  [BrightHubStrings.PostComposer_ReplyPlaceholder]: '发布你的回复',
  [BrightHubStrings.PostComposer_ReplyingTo]: '回复',
  [BrightHubStrings.PostComposer_CancelReply]: '取消回复',
  [BrightHubStrings.PostComposer_Bold]: '粗体',
  [BrightHubStrings.PostComposer_Italic]: '斜体',
  [BrightHubStrings.PostComposer_Code]: '代码',
  [BrightHubStrings.PostComposer_Emoji]: '插入表情',
  [BrightHubStrings.PostComposer_AttachImage]: '附加图片',
  [BrightHubStrings.PostComposer_RemoveAttachmentTemplate]: '移除附件{INDEX}',
  [BrightHubStrings.PostComposer_AttachmentAltTemplate]: '附件{INDEX}',
  [BrightHubStrings.PostComposer_VisibleTo]: '可见范围',
  [BrightHubStrings.PostComposer_MembersTemplate]: '{COUNT}位成员',
  [BrightHubStrings.PostComposer_SubmitPost]: '提交帖子',
  [BrightHubStrings.PostComposer_Post]: '发布',
  [BrightHubStrings.PostComposer_Reply]: '回复',

  // Timeline
  [BrightHubStrings.Timeline_AriaLabel]: '时间线',
  [BrightHubStrings.Timeline_FilteredByTemplate]: '筛选条件：{LABEL}',
  [BrightHubStrings.Timeline_ClearFilter]: '清除',
  [BrightHubStrings.Timeline_EmptyDefault]:
    '暂无帖子。关注一些人以在此查看他们的帖子。',
  [BrightHubStrings.Timeline_LoadingPosts]: '正在加载帖子',
  [BrightHubStrings.Timeline_AllCaughtUp]: '已全部看完',

  // ThreadView
  [BrightHubStrings.ThreadView_AriaLabel]: '讨论串',
  [BrightHubStrings.ThreadView_ParentDeleted]: '原帖已被删除',
  [BrightHubStrings.ThreadView_ReplyCountSingular]: '1条回复',
  [BrightHubStrings.ThreadView_ReplyCountPluralTemplate]: '{COUNT}条回复',
  [BrightHubStrings.ThreadView_ParticipantCountSingular]: '1位参与者',
  [BrightHubStrings.ThreadView_ParticipantCountPluralTemplate]:
    '{COUNT}位参与者',
  [BrightHubStrings.ThreadView_NoReplies]: '暂无回复。成为第一个回复的人！',

  // FollowButton
  [BrightHubStrings.FollowButton_Follow]: '关注',
  [BrightHubStrings.FollowButton_Following]: '已关注',
  [BrightHubStrings.FollowButton_Unfollow]: '取消关注',

  // LikeButton
  [BrightHubStrings.LikeButton_LikeAriaTemplate]: '点赞，{COUNT}个赞',
  [BrightHubStrings.LikeButton_UnlikeAriaTemplate]: '取消点赞，{COUNT}个赞',

  // RepostButton
  [BrightHubStrings.RepostButton_RepostAriaTemplate]: '转发，{COUNT}次转发',
  [BrightHubStrings.RepostButton_UndoRepostAriaTemplate]:
    '撤销转发，{COUNT}次转发',

  // UserProfileCard
  [BrightHubStrings.UserProfileCard_Verified]: '已认证',
  [BrightHubStrings.UserProfileCard_ProtectedAccount]: '受保护的账户',
  [BrightHubStrings.UserProfileCard_ProfileOfTemplate]: '{NAME}的个人资料',
  [BrightHubStrings.UserProfileCard_Following]: '正在关注',
  [BrightHubStrings.UserProfileCard_Followers]: '粉丝',
  [BrightHubStrings.UserProfileCard_StrongConnection]: '强连接',
  [BrightHubStrings.UserProfileCard_ModerateConnection]: '中等连接',
  [BrightHubStrings.UserProfileCard_WeakConnection]: '弱连接',
  [BrightHubStrings.UserProfileCard_DormantConnection]: '休眠连接',
  [BrightHubStrings.UserProfileCard_MutualConnectionSingular]: '1个共同好友',
  [BrightHubStrings.UserProfileCard_MutualConnectionPluralTemplate]:
    '{COUNT}个共同好友',

  // SearchResults
  [BrightHubStrings.SearchResults_AriaTemplate]: '"{QUERY}"的搜索结果',
  [BrightHubStrings.SearchResults_TabAll]: '全部',
  [BrightHubStrings.SearchResults_TabPosts]: '帖子',
  [BrightHubStrings.SearchResults_TabPostsTemplate]: '帖子（{COUNT}）',
  [BrightHubStrings.SearchResults_TabUsers]: '用户',
  [BrightHubStrings.SearchResults_TabUsersTemplate]: '用户（{COUNT}）',
  [BrightHubStrings.SearchResults_NoResultsTemplate]: '未找到"{QUERY}"的结果',
  [BrightHubStrings.SearchResults_EnterSearchTerm]:
    '输入搜索词以查找帖子和用户',
  [BrightHubStrings.SearchResults_SectionPeople]: '用户',
  [BrightHubStrings.SearchResults_SectionPosts]: '帖子',
  [BrightHubStrings.SearchResults_Loading]: '正在加载搜索结果',
  [BrightHubStrings.SearchResults_EndOfResults]: '已到底部',

    // Navigation / Sidebar
    [BrightHubStrings.Nav_Home]: '首页',
    [BrightHubStrings.Nav_Explore]: '探索',
    [BrightHubStrings.Nav_Notifications]: '通知',
    [BrightHubStrings.Nav_Messages]: '消息',
    [BrightHubStrings.Nav_Profile]: '个人资料',
    [BrightHubStrings.Nav_Connections]: '连接',
    [BrightHubStrings.Nav_Settings]: '设置',
    [BrightHubStrings.Nav_SidebarLabel]: 'BrightHub导航',
    [BrightHubStrings.Nav_SubscribedHubs]: '你的Hub',
    [BrightHubStrings.Nav_CreateHub]: '创建Hub',
    [BrightHubStrings.HubDetail_MembersTemplate]: '{COUNT}位成员',
    [BrightHubStrings.HubDetail_PostsTemplate]: '{COUNT}篇帖子',
    [BrightHubStrings.HubDetail_Join]: '加入',
    [BrightHubStrings.HubDetail_Leave]: '离开',
    [BrightHubStrings.HubDetail_Joined]: '已加入',
    [BrightHubStrings.HubDetail_TrustOpen]: '开放',
    [BrightHubStrings.HubDetail_TrustVerified]: '已验证',
    [BrightHubStrings.HubDetail_TrustEncrypted]: '加密',
    [BrightHubStrings.HubDetail_About]: '关于',
    [BrightHubStrings.HubDetail_Rules]: '规则',
    [BrightHubStrings.HubDetail_SortHot]: '热门',
    [BrightHubStrings.HubDetail_SortNew]: '最新',
    [BrightHubStrings.HubDetail_SortTop]: '最佳',
    [BrightHubStrings.HubDetail_EmptyState]: '还没有帖子。成为第一个发起讨论的人！',
    [BrightHubStrings.HubDetail_SubHubs]: '子Hub',
    [BrightHubStrings.Explore_Title]: '探索Hub',
    [BrightHubStrings.Explore_SearchPlaceholder]: '搜索Hub…',
    [BrightHubStrings.Explore_Trending]: '趋势',
    [BrightHubStrings.Explore_New]: '最新',
    [BrightHubStrings.Explore_EmptyState]: '还没有Hub。创建一个开始吧！',
    [BrightHubStrings.Explore_NoResults]: '没有匹配的Hub。',
    [BrightHubStrings.Home_TrendingHubs]: '热门Hub',
    [BrightHubStrings.Home_RecentActivity]: '最近活动',
    [BrightHubStrings.Home_YourHubs]: '你的Hub',
    [BrightHubStrings.Home_SuggestedHubs]: '推荐Hub',
    [BrightHubStrings.Home_ViewAll]: '查看全部',
    [BrightHubStrings.Home_Welcome]: '欢迎来到BrightHub',
    [BrightHubStrings.Home_WelcomeSubtitle]: '加入Hub，查看你感兴趣的社区讨论。',
    [BrightHubStrings.Home_NoHubsYet]: '你还没有加入任何Hub',
    [BrightHubStrings.Home_NoHubsHint]: '探索Hub，找到你感兴趣的社区。',
    [BrightHubStrings.CreateHub_Title]: '创建Hub',
    [BrightHubStrings.CreateHub_NameLabel]: 'Hub名称',
    [BrightHubStrings.CreateHub_NamePlaceholder]: '例如：编程',
    [BrightHubStrings.CreateHub_SlugLabel]: 'URL标识',
    [BrightHubStrings.CreateHub_SlugPlaceholder]: '例如：programming',
    [BrightHubStrings.CreateHub_DescriptionLabel]: '描述',
    [BrightHubStrings.CreateHub_DescriptionPlaceholder]: '这个Hub是关于什么的？',
    [BrightHubStrings.CreateHub_TrustTierLabel]: '信任等级',
    [BrightHubStrings.CreateHub_ParentHubLabel]: '父Hub（可选）',
    [BrightHubStrings.CreateHub_ParentHubNone]: '无（顶级Hub）',
    [BrightHubStrings.CreateHub_Submit]: '创建Hub',
    [BrightHubStrings.CreateHub_Cancel]: '取消',
    [BrightHubStrings.Nav_CreatePost]: '新帖子',
    [BrightHubStrings.Nav_Trending]: '趋势',
};
