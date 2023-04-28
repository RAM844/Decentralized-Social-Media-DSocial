import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from './auth-fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockchainData: any;
  BroadcastId: any;
  ChainId: any;
  CollectModuleData: any;
  ContentEncryptionKey: any;
  ContractAddress: any;
  CreateHandle: any;
  Cursor: any;
  DateTime: any;
  EncryptedValueScalar: any;
  Ens: any;
  EthereumAddress: any;
  FollowModuleData: any;
  Handle: any;
  HandleClaimIdScalar: any;
  InternalPublicationId: any;
  IpfsCid: any;
  Jwt: any;
  LimitScalar: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  NftGalleryId: any;
  NftGalleryName: any;
  NftOwnershipId: any;
  Nonce: any;
  NotificationId: any;
  ProfileId: any;
  ProfileInterest: any;
  ProxyActionId: any;
  PublicationId: any;
  PublicationTag: any;
  PublicationUrl: any;
  ReactionId: any;
  ReferenceModuleData: any;
  Search: any;
  Signature: any;
  Sources: any;
  TimestampScalar: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  UnixTimestamp: any;
  Url: any;
  Void: any;
};

export type AaveFeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  collectLimit?: InputMaybe<Scalars['String']>;
  endTimestamp?: InputMaybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
};

export type AaveFeeCollectModuleSettings = {
  __typename?: 'AaveFeeCollectModuleSettings';
  amount: ModuleFeeAmount;
  collectLimit?: Maybe<Scalars['String']>;
  contractAddress: Scalars['ContractAddress'];
  endTimestamp?: Maybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
  type: CollectModules;
};

export type AccessConditionInput = {
  and?: InputMaybe<AndConditionInput>;
  collect?: InputMaybe<CollectConditionInput>;
  eoa?: InputMaybe<EoaOwnershipInput>;
  follow?: InputMaybe<FollowConditionInput>;
  nft?: InputMaybe<NftOwnershipInput>;
  or?: InputMaybe<OrConditionInput>;
  profile?: InputMaybe<ProfileOwnershipInput>;
  token?: InputMaybe<Erc20OwnershipInput>;
};

export type AccessConditionOutput = {
  __typename?: 'AccessConditionOutput';
  and?: Maybe<AndConditionOutput>;
  collect?: Maybe<CollectConditionOutput>;
  eoa?: Maybe<EoaOwnershipOutput>;
  follow?: Maybe<FollowConditionOutput>;
  nft?: Maybe<NftOwnershipOutput>;
  or?: Maybe<OrConditionOutput>;
  profile?: Maybe<ProfileOwnershipOutput>;
  token?: Maybe<Erc20OwnershipOutput>;
};

export type AchRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  freeTextHandle?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Scalars['CreateHandle']>;
  overrideAlreadyClaimed: Scalars['Boolean'];
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type AddProfileInterestsRequest = {
  interests: Array<Scalars['ProfileInterest']>;
  profileId: Scalars['ProfileId'];
};

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sort: TagSortCriteria;
  source?: InputMaybe<Scalars['Sources']>;
};

export type AndConditionInput = {
  criteria: Array<AccessConditionInput>;
};

export type AndConditionOutput = {
  __typename?: 'AndConditionOutput';
  criteria: Array<AccessConditionOutput>;
};

export type ApprovedAllowanceAmount = {
  __typename?: 'ApprovedAllowanceAmount';
  allowance: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  currency: Scalars['ContractAddress'];
  module: Scalars['String'];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>;
  currencies: Array<Scalars['ContractAddress']>;
  followModules?: InputMaybe<Array<FollowModules>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
};

export type Attribute = {
  __typename?: 'Attribute';
  displayType?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  traitType?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  text: Scalars['String'];
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  accessToken: Scalars['Jwt'];
  refreshToken: Scalars['Jwt'];
};

export type BroadcastRequest = {
  id: Scalars['BroadcastId'];
  signature: Scalars['Signature'];
};

export type BurnProfileRequest = {
  profileId: Scalars['ProfileId'];
};

export type CanCommentResponse = {
  __typename?: 'CanCommentResponse';
  result: Scalars['Boolean'];
};

export type CanDecryptResponse = {
  __typename?: 'CanDecryptResponse';
  extraDetails?: Maybe<Scalars['String']>;
  reasons?: Maybe<Array<DecryptFailReason>>;
  result: Scalars['Boolean'];
};

export type CanMirrorResponse = {
  __typename?: 'CanMirrorResponse';
  result: Scalars['Boolean'];
};

export type ChallengeRequest = {
  address: Scalars['EthereumAddress'];
};

export type ClaimHandleRequest = {
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['HandleClaimIdScalar']>;
};

export enum ClaimStatus {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

export type ClaimableHandles = {
  __typename?: 'ClaimableHandles';
  canClaimFreeTextHandle: Scalars['Boolean'];
  reservedHandles: Array<ReservedClaimableHandle>;
};

export type CollectConditionInput = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  thisPublication?: InputMaybe<Scalars['Boolean']>;
};

export type CollectConditionOutput = {
  __typename?: 'CollectConditionOutput';
  publicationId?: Maybe<Scalars['InternalPublicationId']>;
  thisPublication?: Maybe<Scalars['Boolean']>;
};

export type CollectModule = AaveFeeCollectModuleSettings | Erc4626FeeCollectModuleSettings | FeeCollectModuleSettings | FreeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | MultirecipientFeeCollectModuleSettings | RevertCollectModuleSettings | TimedFeeCollectModuleSettings | UnknownCollectModuleSettings;

export type CollectModuleParams = {
  aaveFeeCollectModule?: InputMaybe<AaveFeeCollectModuleParams>;
  erc4626FeeCollectModule?: InputMaybe<Erc4626FeeCollectModuleParams>;
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  multirecipientFeeCollectModule?: InputMaybe<MultirecipientFeeCollectModuleParams>;
  revertCollectModule?: InputMaybe<Scalars['Boolean']>;
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

export enum CollectModules {
  AaveFeeCollectModule = 'AaveFeeCollectModule',
  Erc4626FeeCollectModule = 'ERC4626FeeCollectModule',
  FeeCollectModule = 'FeeCollectModule',
  FreeCollectModule = 'FreeCollectModule',
  LimitedFeeCollectModule = 'LimitedFeeCollectModule',
  LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
  MultirecipientFeeCollectModule = 'MultirecipientFeeCollectModule',
  RevertCollectModule = 'RevertCollectModule',
  TimedFeeCollectModule = 'TimedFeeCollectModule',
  UnknownCollectModule = 'UnknownCollectModule'
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type CollectedEvent = {
  __typename?: 'CollectedEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type Comment = {
  __typename?: 'Comment';
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  collectModule: CollectModule;
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  collectedBy?: Maybe<Wallet>;
  commentOn?: Maybe<Publication>;
  createdAt: Scalars['DateTime'];
  dataAvailabilityProofs?: Maybe<Scalars['String']>;
  firstComment?: Maybe<Comment>;
  hasCollectedByMe: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  id: Scalars['InternalPublicationId'];
  isDataAvailability: Scalars['Boolean'];
  isGated: Scalars['Boolean'];
  mainPost: MainPostReference;
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']>;
  onChainContentURI: Scalars['String'];
  profile: Profile;
  rankingScore?: Maybe<Scalars['Float']>;
  reaction?: Maybe<ReactionTypes>;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
};


export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type CommentCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type CommentHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export enum CommentOrderingTypes {
  Desc = 'DESC',
  Ranking = 'RANKING'
}

export enum CommentRankingFilter {
  NoneRelevant = 'NONE_RELEVANT',
  Relevant = 'RELEVANT'
}

export enum ContractType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type CreateBurnEip712TypedData = {
  __typename?: 'CreateBurnEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateBurnEip712TypedDataTypes;
  value: CreateBurnEip712TypedDataValue;
};

export type CreateBurnEip712TypedDataTypes = {
  __typename?: 'CreateBurnEIP712TypedDataTypes';
  BurnWithSig: Array<Eip712TypedDataField>;
};

export type CreateBurnEip712TypedDataValue = {
  __typename?: 'CreateBurnEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  tokenId: Scalars['String'];
};

export type CreateBurnProfileBroadcastItemResult = {
  __typename?: 'CreateBurnProfileBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateBurnEip712TypedData;
};

export type CreateCollectBroadcastItemResult = {
  __typename?: 'CreateCollectBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateCollectEip712TypedData;
};

export type CreateCollectEip712TypedData = {
  __typename?: 'CreateCollectEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateCollectEip712TypedDataTypes;
  value: CreateCollectEip712TypedDataValue;
};

export type CreateCollectEip712TypedDataTypes = {
  __typename?: 'CreateCollectEIP712TypedDataTypes';
  CollectWithSig: Array<Eip712TypedDataField>;
};

export type CreateCollectEip712TypedDataValue = {
  __typename?: 'CreateCollectEIP712TypedDataValue';
  data: Scalars['BlockchainData'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  pubId: Scalars['PublicationId'];
};

export type CreateCollectRequest = {
  publicationId: Scalars['InternalPublicationId'];
  unknownModuleData?: InputMaybe<Scalars['BlockchainData']>;
};

export type CreateCommentBroadcastItemResult = {
  __typename?: 'CreateCommentBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateCommentEip712TypedData;
};

export type CreateCommentEip712TypedData = {
  __typename?: 'CreateCommentEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateCommentEip712TypedDataTypes;
  value: CreateCommentEip712TypedDataValue;
};

export type CreateCommentEip712TypedDataTypes = {
  __typename?: 'CreateCommentEIP712TypedDataTypes';
  CommentWithSig: Array<Eip712TypedDataField>;
};

export type CreateCommentEip712TypedDataValue = {
  __typename?: 'CreateCommentEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateFollowEip712TypedData;
};

export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateFollowEip712TypedDataTypes;
  value: CreateFollowEip712TypedDataValue;
};

export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  FollowWithSig: Array<Eip712TypedDataField>;
};

export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']>;
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

export type CreateMirrorBroadcastItemResult = {
  __typename?: 'CreateMirrorBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateMirrorEip712TypedData;
};

export type CreateMirrorEip712TypedData = {
  __typename?: 'CreateMirrorEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateMirrorEip712TypedDataTypes;
  value: CreateMirrorEip712TypedDataValue;
};

export type CreateMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMirrorEIP712TypedDataTypes';
  MirrorWithSig: Array<Eip712TypedDataField>;
};

export type CreateMirrorEip712TypedDataValue = {
  __typename?: 'CreateMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreateMirrorRequest = {
  profileId: Scalars['ProfileId'];
  publicationId: Scalars['InternalPublicationId'];
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePostBroadcastItemResult = {
  __typename?: 'CreatePostBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreatePostEip712TypedData;
};

export type CreatePostEip712TypedData = {
  __typename?: 'CreatePostEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreatePostEip712TypedDataTypes;
  value: CreatePostEip712TypedDataValue;
};

export type CreatePostEip712TypedDataTypes = {
  __typename?: 'CreatePostEIP712TypedDataTypes';
  PostWithSig: Array<Eip712TypedDataField>;
};

export type CreatePostEip712TypedDataValue = {
  __typename?: 'CreatePostEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreatePublicCommentRequest = {
  collectModule: CollectModuleParams;
  contentURI: Scalars['Url'];
  gated?: InputMaybe<GatedPublicationParamsInput>;
  profileId: Scalars['ProfileId'];
  publicationId: Scalars['InternalPublicationId'];
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  collectModule: CollectModuleParams;
  contentURI: Scalars['Url'];
  gated?: InputMaybe<GatedPublicationParamsInput>;
  profileId: Scalars['ProfileId'];
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicSetProfileMetadataUriRequest = {
  metadata: Scalars['Url'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetDefaultProfileRequest = {
  profileId: Scalars['ProfileId'];
};

export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: 'CreateSetDispatcherBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateSetDispatcherEip712TypedData;
};

export type CreateSetDispatcherEip712TypedData = {
  __typename?: 'CreateSetDispatcherEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateSetDispatcherEip712TypedDataTypes;
  value: CreateSetDispatcherEip712TypedDataValue;
};

export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataTypes';
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  dispatcher: Scalars['EthereumAddress'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateSetFollowModuleEip712TypedData;
};

export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateSetFollowModuleEip712TypedDataTypes;
  value: CreateSetFollowModuleEip712TypedDataValue;
};

export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followModule: Scalars['ContractAddress'];
  followModuleInitData: Scalars['FollowModuleData'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowModuleRequest = {
  followModule: FollowModuleParams;
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: 'CreateSetFollowNFTUriBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateSetFollowNftUriEip712TypedData;
};

export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes';
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followNFTURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowNftUriRequest = {
  followNFTURI?: InputMaybe<Scalars['Url']>;
  profileId: Scalars['ProfileId'];
};

export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileImageUriBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateSetProfileImageUriEip712TypedData;
};

export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes';
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  imageURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes';
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadata: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateToggleFollowBroadcastItemResult = {
  __typename?: 'CreateToggleFollowBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateToggleFollowEip712TypedData;
};

export type CreateToggleFollowEip712TypedData = {
  __typename?: 'CreateToggleFollowEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: CreateToggleFollowEip712TypedDataTypes;
  value: CreateToggleFollowEip712TypedDataValue;
};

export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: 'CreateToggleFollowEIP712TypedDataTypes';
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: 'CreateToggleFollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  enables: Array<Scalars['Boolean']>;
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars['Boolean']>;
  profileIds: Array<Scalars['ProfileId']>;
};

export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: CreateBurnEip712TypedData;
};

export type CurRequest = {
  secret: Scalars['String'];
};

export enum CustomFiltersTypes {
  Gardeners = 'GARDENERS'
}

export enum DecryptFailReason {
  CanNotDecrypt = 'CAN_NOT_DECRYPT',
  CollectNotFinalisedOnChain = 'COLLECT_NOT_FINALISED_ON_CHAIN',
  DoesNotFollowProfile = 'DOES_NOT_FOLLOW_PROFILE',
  DoesNotOwnNft = 'DOES_NOT_OWN_NFT',
  DoesNotOwnProfile = 'DOES_NOT_OWN_PROFILE',
  FollowNotFinalisedOnChain = 'FOLLOW_NOT_FINALISED_ON_CHAIN',
  HasNotCollectedPublication = 'HAS_NOT_COLLECTED_PUBLICATION',
  MissingEncryptionParams = 'MISSING_ENCRYPTION_PARAMS',
  ProfileDoesNotExist = 'PROFILE_DOES_NOT_EXIST',
  UnauthorizedAddress = 'UNAUTHORIZED_ADDRESS',
  UnauthorizedBalance = 'UNAUTHORIZED_BALANCE'
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
};

export type DegreesOfSeparationReferenceModuleParams = {
  commentsRestricted: Scalars['Boolean'];
  degreesOfSeparation: Scalars['Int'];
  mirrorsRestricted: Scalars['Boolean'];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings';
  commentsRestricted: Scalars['Boolean'];
  contractAddress: Scalars['ContractAddress'];
  degreesOfSeparation: Scalars['Int'];
  mirrorsRestricted: Scalars['Boolean'];
  type: ReferenceModules;
};

export type DismissRecommendedProfilesRequest = {
  profileIds: Array<Scalars['ProfileId']>;
};

export type Dispatcher = {
  __typename?: 'Dispatcher';
  address: Scalars['EthereumAddress'];
  canUseRelay: Scalars['Boolean'];
};

export type DoesFollow = {
  followerAddress: Scalars['EthereumAddress'];
  profileId: Scalars['ProfileId'];
};

export type DoesFollowRequest = {
  followInfos: Array<DoesFollow>;
};

export type DoesFollowResponse = {
  __typename?: 'DoesFollowResponse';
  followerAddress: Scalars['EthereumAddress'];
  follows: Scalars['Boolean'];
  isFinalisedOnChain: Scalars['Boolean'];
  profileId: Scalars['ProfileId'];
};

export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  chainId: Scalars['ChainId'];
  name: Scalars['String'];
  verifyingContract: Scalars['ContractAddress'];
  version: Scalars['String'];
};

export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Erc4626FeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  collectLimit?: InputMaybe<Scalars['String']>;
  endTimestamp?: InputMaybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee?: InputMaybe<Scalars['Float']>;
  vault: Scalars['ContractAddress'];
};

export type Erc4626FeeCollectModuleSettings = {
  __typename?: 'ERC4626FeeCollectModuleSettings';
  amount: ModuleFeeAmount;
  collectLimit?: Maybe<Scalars['String']>;
  contractAddress: Scalars['ContractAddress'];
  endTimestamp?: Maybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
  type: CollectModules;
  vault: Scalars['ContractAddress'];
};

export type ElectedMirror = {
  __typename?: 'ElectedMirror';
  mirrorId: Scalars['InternalPublicationId'];
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type EnabledModule = {
  __typename?: 'EnabledModule';
  contractAddress: Scalars['ContractAddress'];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

export type EnabledModules = {
  __typename?: 'EnabledModules';
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

export type EncryptedFieldsOutput = {
  __typename?: 'EncryptedFieldsOutput';
  animation_url?: Maybe<Scalars['EncryptedValueScalar']>;
  content?: Maybe<Scalars['EncryptedValueScalar']>;
  external_url?: Maybe<Scalars['EncryptedValueScalar']>;
  image?: Maybe<Scalars['EncryptedValueScalar']>;
  media?: Maybe<Array<EncryptedMediaSet>>;
};

export type EncryptedMedia = {
  __typename?: 'EncryptedMedia';
  altTag?: Maybe<Scalars['EncryptedValueScalar']>;
  cover?: Maybe<Scalars['EncryptedValueScalar']>;
  height?: Maybe<Scalars['Int']>;
  mimeType?: Maybe<Scalars['MimeType']>;
  size?: Maybe<Scalars['Int']>;
  url: Scalars['Url'];
  width?: Maybe<Scalars['Int']>;
};

export type EncryptedMediaSet = {
  __typename?: 'EncryptedMediaSet';
  /** @deprecated should not be used will always be null */
  medium?: Maybe<EncryptedMedia>;
  original: EncryptedMedia;
  /** @deprecated should not be used will always be null */
  small?: Maybe<EncryptedMedia>;
};

export type EncryptionParamsOutput = {
  __typename?: 'EncryptionParamsOutput';
  accessCondition: AccessConditionOutput;
  encryptedFields: EncryptedFieldsOutput;
  encryptionProvider: EncryptionProvider;
  providerSpecificParams: ProviderSpecificParamsOutput;
};

export enum EncryptionProvider {
  LitProtocol = 'LIT_PROTOCOL'
}

export type EnsOnChainIdentity = {
  __typename?: 'EnsOnChainIdentity';
  name?: Maybe<Scalars['Ens']>;
};

export type EoaOwnershipInput = {
  address: Scalars['EthereumAddress'];
};

export type EoaOwnershipOutput = {
  __typename?: 'EoaOwnershipOutput';
  address: Scalars['EthereumAddress'];
};

export type Erc20 = {
  __typename?: 'Erc20';
  address: Scalars['ContractAddress'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type Erc20Amount = {
  __typename?: 'Erc20Amount';
  asset: Erc20;
  value: Scalars['String'];
};

export type Erc20OwnershipInput = {
  amount: Scalars['String'];
  chainID: Scalars['ChainId'];
  condition: ScalarOperator;
  contractAddress: Scalars['ContractAddress'];
  decimals: Scalars['Float'];
};

export type Erc20OwnershipOutput = {
  __typename?: 'Erc20OwnershipOutput';
  amount: Scalars['String'];
  chainID: Scalars['ChainId'];
  condition: ScalarOperator;
  contractAddress: Scalars['ContractAddress'];
  decimals: Scalars['Float'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type ExploreProfileResult = {
  __typename?: 'ExploreProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sortCriteria: ProfileSortCriteria;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  noRandomize?: InputMaybe<Scalars['Boolean']>;
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

export type ExplorePublicationResult = {
  __typename?: 'ExplorePublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
};

export type FeeCollectModuleSettings = {
  __typename?: 'FeeCollectModuleSettings';
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  amount: ModuleFeeAmountParams;
  recipient: Scalars['EthereumAddress'];
};

export type FeeFollowModuleRedeemParams = {
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  recipient: Scalars['EthereumAddress'];
  type: FollowModules;
};

export enum FeedEventItemType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  profileId: Scalars['ProfileId'];
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  collects: Array<CollectedEvent>;
  comments?: Maybe<Array<Comment>>;
  electedMirror?: Maybe<ElectedMirror>;
  mirrors: Array<MirrorEvent>;
  reactions: Array<ReactionEvent>;
  root: FeedItemRoot;
};

export type FeedItemRoot = Comment | Post;

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  profileId: Scalars['ProfileId'];
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars['ProfileId'];
};

export type FollowConditionInput = {
  profileId: Scalars['ProfileId'];
};

export type FollowConditionOutput = {
  __typename?: 'FollowConditionOutput';
  profileId: Scalars['ProfileId'];
};

export type FollowModule = FeeFollowModuleSettings | ProfileFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FollowModuleParams = {
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  profileFollowModule?: InputMaybe<Scalars['Boolean']>;
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

export enum FollowModules {
  FeeFollowModule = 'FeeFollowModule',
  ProfileFollowModule = 'ProfileFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  type: ReferenceModules;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult';
  revenues: Array<RevenueAggregate>;
};

export type Follower = {
  __typename?: 'Follower';
  totalAmountOfTimesFollowed: Scalars['Int'];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: 'FollowerNftOwnedTokenIds';
  followerNftAddress: Scalars['ContractAddress'];
  tokensIds: Array<Scalars['String']>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars['EthereumAddress'];
  profileId: Scalars['ProfileId'];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  profileId: Scalars['ProfileId'];
};

export type Following = {
  __typename?: 'Following';
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars['Int'];
};

export type FollowingRequest = {
  address: Scalars['EthereumAddress'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FreeCollectModuleParams = {
  followerOnly: Scalars['Boolean'];
};

export type FreeCollectModuleSettings = {
  __typename?: 'FreeCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  followerOnly: Scalars['Boolean'];
  type: CollectModules;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars['InternalPublicationId'];
};

export type FreeFollowProxyAction = {
  profileId: Scalars['ProfileId'];
};

export type GatedPublicationParamsInput = {
  and?: InputMaybe<AndConditionInput>;
  collect?: InputMaybe<CollectConditionInput>;
  encryptedSymmetricKey: Scalars['ContentEncryptionKey'];
  eoa?: InputMaybe<EoaOwnershipInput>;
  follow?: InputMaybe<FollowConditionInput>;
  nft?: InputMaybe<NftOwnershipInput>;
  or?: InputMaybe<OrConditionInput>;
  profile?: InputMaybe<ProfileOwnershipInput>;
  token?: InputMaybe<Erc20OwnershipInput>;
};

export type GciRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type GcrRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
  ttt: Scalars['String'];
};

export type GctRequest = {
  hhh: Scalars['String'];
  secret: Scalars['String'];
};

export type GddRequest = {
  domain: Scalars['Url'];
  secret: Scalars['String'];
};

export type GdmRequest = {
  secret: Scalars['String'];
};

export type GenerateModuleCurrencyApproval = {
  __typename?: 'GenerateModuleCurrencyApproval';
  data: Scalars['BlockchainData'];
  from: Scalars['EthereumAddress'];
  to: Scalars['ContractAddress'];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars['ContractAddress'];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownCollectModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownFollowModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownReferenceModule?: InputMaybe<Scalars['ContractAddress']>;
  value: Scalars['String'];
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  txHash?: InputMaybe<Scalars['TxHash']>;
  txId?: InputMaybe<Scalars['TxId']>;
};

export type GlobalProtocolStats = {
  __typename?: 'GlobalProtocolStats';
  totalBurntProfiles: Scalars['Int'];
  totalCollects: Scalars['Int'];
  totalComments: Scalars['Int'];
  totalFollows: Scalars['Int'];
  totalMirrors: Scalars['Int'];
  totalPosts: Scalars['Int'];
  totalProfiles: Scalars['Int'];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type HasTxHashBeenIndexedRequest = {
  txHash?: InputMaybe<Scalars['TxHash']>;
  txId?: InputMaybe<Scalars['TxId']>;
};

export type HelRequest = {
  handle: Scalars['Handle'];
  remove: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type HidePublicationRequest = {
  publicationId: Scalars['InternalPublicationId'];
};

export type IdKitPhoneVerifyWebhookRequest = {
  sharedSecret: Scalars['String'];
  worldcoin?: InputMaybe<WorldcoinPhoneVerifyWebhookRequest>;
};

export enum IdKitPhoneVerifyWebhookResultStatusType {
  AlreadyVerified = 'ALREADY_VERIFIED',
  Success = 'SUCCESS'
}

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type InternalPublicationsFilterRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  fromDate: Scalars['String'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
  secret: Scalars['String'];
  source: Scalars['Sources'];
  toDate: Scalars['String'];
};

export type LimitedFeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  collectLimit: Scalars['String'];
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: 'LimitedFeeCollectModuleSettings';
  amount: ModuleFeeAmount;
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  collectLimit: Scalars['String'];
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings';
  amount: ModuleFeeAmount;
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  endTimestamp: Scalars['DateTime'];
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
  type: CollectModules;
};

export type Log = {
  __typename?: 'Log';
  address: Scalars['ContractAddress'];
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  data: Scalars['String'];
  logIndex: Scalars['Int'];
  removed: Scalars['Boolean'];
  topics: Array<Scalars['String']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
};

export type MainPostReference = Mirror | Post;

export type Media = {
  __typename?: 'Media';
  altTag?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['Url']>;
  height?: Maybe<Scalars['Int']>;
  mimeType?: Maybe<Scalars['MimeType']>;
  size?: Maybe<Scalars['Int']>;
  url: Scalars['Url'];
  width?: Maybe<Scalars['Int']>;
};

export type MediaOutput = {
  __typename?: 'MediaOutput';
  altTag?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['Url']>;
  item: Scalars['Url'];
  source?: Maybe<PublicationMediaSource>;
  type?: Maybe<Scalars['MimeType']>;
};

export type MediaSet = {
  __typename?: 'MediaSet';
  /** @deprecated should not be used will always be null */
  medium?: Maybe<Media>;
  original: Media;
  /** @deprecated should not be used will always be null */
  small?: Maybe<Media>;
};

export type MentionPublication = Comment | Post;

export type MetadataAttributeInput = {
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  traitType: Scalars['String'];
  value: Scalars['String'];
};

export type MetadataAttributeOutput = {
  __typename?: 'MetadataAttributeOutput';
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MetadataOutput = {
  __typename?: 'MetadataOutput';
  animatedUrl?: Maybe<Scalars['Url']>;
  attributes: Array<MetadataAttributeOutput>;
  content?: Maybe<Scalars['Markdown']>;
  contentWarning?: Maybe<PublicationContentWarning>;
  cover?: Maybe<MediaSet>;
  description?: Maybe<Scalars['Markdown']>;
  encryptionParams?: Maybe<EncryptionParamsOutput>;
  image?: Maybe<Scalars['Url']>;
  locale?: Maybe<Scalars['Locale']>;
  mainContentFocus: PublicationMainFocus;
  media: Array<MediaSet>;
  name?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
};

export type Mirror = {
  __typename?: 'Mirror';
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  collectModule: CollectModule;
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  createdAt: Scalars['DateTime'];
  dataAvailabilityProofs?: Maybe<Scalars['String']>;
  hasCollectedByMe: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  id: Scalars['InternalPublicationId'];
  isDataAvailability: Scalars['Boolean'];
  isGated: Scalars['Boolean'];
  metadata: MetadataOutput;
  mirrorOf: MirrorablePublication;
  onChainContentURI: Scalars['String'];
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
};


export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type MirrorCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type MirrorHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type MirrorEvent = {
  __typename?: 'MirrorEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type MirrorablePublication = Comment | Post;

export type ModuleFeeAmount = {
  __typename?: 'ModuleFeeAmount';
  asset: Erc20;
  value: Scalars['String'];
};

export type ModuleFeeAmountParams = {
  currency: Scalars['ContractAddress'];
  value: Scalars['String'];
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type MultirecipientFeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  collectLimit?: InputMaybe<Scalars['String']>;
  endTimestamp?: InputMaybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipients: Array<RecipientDataInput>;
  referralFee?: InputMaybe<Scalars['Float']>;
};

export type MultirecipientFeeCollectModuleSettings = {
  __typename?: 'MultirecipientFeeCollectModuleSettings';
  amount: ModuleFeeAmount;
  collectLimit?: Maybe<Scalars['String']>;
  contractAddress: Scalars['ContractAddress'];
  endTimestamp?: Maybe<Scalars['DateTime']>;
  followerOnly: Scalars['Boolean'];
  recipients: Array<RecipientDataOutput>;
  referralFee: Scalars['Float'];
  type: CollectModules;
};

export type Mutation = {
  __typename?: 'Mutation';
  ach?: Maybe<Scalars['Void']>;
  addProfileInterests?: Maybe<Scalars['Void']>;
  addReaction?: Maybe<Scalars['Void']>;
  authenticate: AuthenticationResult;
  broadcast: RelayResult;
  claim: RelayResult;
  createAttachMediaData: PublicMediaResults;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createMirrorViaDispatcher: RelayResult;
  createNftGallery: Scalars['NftGalleryId'];
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetFollowNFTUriViaDispatcher: RelayResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  deleteNftGallery?: Maybe<Scalars['Void']>;
  dismissRecommendedProfiles?: Maybe<Scalars['Void']>;
  gci?: Maybe<Scalars['Void']>;
  gcr?: Maybe<Scalars['Void']>;
  gdi?: Maybe<Scalars['Void']>;
  hel?: Maybe<Scalars['Void']>;
  hidePublication?: Maybe<Scalars['Void']>;
  idKitPhoneVerifyWebhook: IdKitPhoneVerifyWebhookResultStatusType;
  proxyAction: Scalars['ProxyActionId'];
  refresh: AuthenticationResult;
  removeProfileInterests?: Maybe<Scalars['Void']>;
  removeReaction?: Maybe<Scalars['Void']>;
  reportPublication?: Maybe<Scalars['Void']>;
  updateNftGalleryInfo?: Maybe<Scalars['Void']>;
  updateNftGalleryItems?: Maybe<Scalars['Void']>;
  updateNftGalleryOrder?: Maybe<Scalars['Void']>;
};


export type MutationAchArgs = {
  request: AchRequest;
};


export type MutationAddProfileInterestsArgs = {
  request: AddProfileInterestsRequest;
};


export type MutationAddReactionArgs = {
  request: ReactionRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};


export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};


export type MutationCreateAttachMediaDataArgs = {
  request: PublicMediaRequest;
};


export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};


export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};


export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};


export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};


export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};


export type MutationCreateNftGalleryArgs = {
  request: NftGalleryCreateRequest;
};


export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};


export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};


export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};


export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};


export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetFollowNftUriViaDispatcherArgs = {
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};


export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};


export type MutationDismissRecommendedProfilesArgs = {
  request: DismissRecommendedProfilesRequest;
};


export type MutationGciArgs = {
  request: GciRequest;
};


export type MutationGcrArgs = {
  request: GcrRequest;
};


export type MutationGdiArgs = {
  request: GddRequest;
};


export type MutationHelArgs = {
  request: HelRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationIdKitPhoneVerifyWebhookArgs = {
  request: IdKitPhoneVerifyWebhookRequest;
};


export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRemoveProfileInterestsArgs = {
  request: RemoveProfileInterestsRequest;
};


export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};


export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};


export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};


export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  viewingProfileId: Scalars['ProfileId'];
  yourProfileId: Scalars['ProfileId'];
};

export type Nft = {
  __typename?: 'NFT';
  chainId: Scalars['ChainId'];
  collectionName: Scalars['String'];
  contentURI: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  contractName: Scalars['String'];
  description: Scalars['String'];
  ercType: Scalars['String'];
  name: Scalars['String'];
  originalContent: NftContent;
  owners: Array<Owner>;
  symbol: Scalars['String'];
  tokenId: Scalars['String'];
};

export type NftContent = {
  __typename?: 'NFTContent';
  animatedUrl?: Maybe<Scalars['String']>;
  metaType: Scalars['String'];
  uri: Scalars['String'];
};

export type NftData = {
  id: Scalars['NftOwnershipId'];
  signature: Scalars['Signature'];
};

export type NfTsRequest = {
  chainIds: Array<Scalars['ChainId']>;
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  ownerAddress: Scalars['EthereumAddress'];
};

export type NfTsResult = {
  __typename?: 'NFTsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: 'NewCollectNotification';
  collectedPublication: Publication;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: 'NewCommentNotification';
  comment: Comment;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification';
  createdAt: Scalars['DateTime'];
  isFollowedByMe: Scalars['Boolean'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewMentionNotification = {
  __typename?: 'NewMentionNotification';
  createdAt: Scalars['DateTime'];
  mentionPublication: MentionPublication;
  notificationId: Scalars['NotificationId'];
};

export type NewMirrorNotification = {
  __typename?: 'NewMirrorNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewReactionNotification = {
  __typename?: 'NewReactionNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  profile: Profile;
  publication: Publication;
  reaction: ReactionTypes;
};

export type NftGalleriesRequest = {
  profileId: Scalars['ProfileId'];
};

export type NftGallery = {
  __typename?: 'NftGallery';
  createdAt: Scalars['DateTime'];
  id: Scalars['NftGalleryId'];
  items: Array<Nft>;
  name: Scalars['String'];
  profileId: Scalars['ProfileId'];
  updatedAt: Scalars['DateTime'];
};

export type NftGalleryCreateRequest = {
  items: Array<NftInput>;
  name: Scalars['NftGalleryName'];
  profileId: Scalars['ProfileId'];
};

export type NftGalleryDeleteRequest = {
  galleryId: Scalars['NftGalleryId'];
  profileId: Scalars['ProfileId'];
};

export type NftGalleryUpdateInfoRequest = {
  galleryId: Scalars['NftGalleryId'];
  name: Scalars['NftGalleryName'];
  profileId: Scalars['ProfileId'];
};

export type NftGalleryUpdateItemOrderRequest = {
  galleryId: Scalars['NftGalleryId'];
  profileId: Scalars['ProfileId'];
  updates: Array<NftUpdateItemOrder>;
};

export type NftGalleryUpdateItemsRequest = {
  galleryId: Scalars['NftGalleryId'];
  profileId: Scalars['ProfileId'];
  toAdd?: InputMaybe<Array<NftInput>>;
  toRemove?: InputMaybe<Array<NftInput>>;
};

export type NftImage = {
  __typename?: 'NftImage';
  chainId: Scalars['Int'];
  contractAddress: Scalars['ContractAddress'];
  tokenId: Scalars['String'];
  uri: Scalars['Url'];
  verified: Scalars['Boolean'];
};

export type NftInput = {
  chainId: Scalars['ChainId'];
  contractAddress: Scalars['ContractAddress'];
  tokenId: Scalars['String'];
};

export type NftOwnershipChallenge = {
  chainId: Scalars['ChainId'];
  contractAddress: Scalars['ContractAddress'];
  tokenId: Scalars['String'];
};

export type NftOwnershipChallengeRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  nfts: Array<NftOwnershipChallenge>;
};

export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  id: Scalars['NftOwnershipId'];
  text: Scalars['String'];
  timeout: Scalars['TimestampScalar'];
};

export type NftOwnershipInput = {
  chainID: Scalars['ChainId'];
  contractAddress: Scalars['ContractAddress'];
  contractType: ContractType;
  tokenIds?: InputMaybe<Array<Scalars['TokenId']>>;
};

export type NftOwnershipOutput = {
  __typename?: 'NftOwnershipOutput';
  chainID: Scalars['ChainId'];
  contractAddress: Scalars['ContractAddress'];
  contractType: ContractType;
  tokenIds?: Maybe<Array<Scalars['TokenId']>>;
};

export type NftUpdateItemOrder = {
  chainId: Scalars['ChainId'];
  contractAddress: Scalars['ContractAddress'];
  newOrder: Scalars['Int'];
  tokenId: Scalars['String'];
};

export type Notification = NewCollectNotification | NewCommentNotification | NewFollowerNotification | NewMentionNotification | NewMirrorNotification | NewReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  highSignalFilter?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  profileId: Scalars['ProfileId'];
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export enum NotificationTypes {
  CollectedComment = 'COLLECTED_COMMENT',
  CollectedPost = 'COLLECTED_POST',
  CommentedComment = 'COMMENTED_COMMENT',
  CommentedPost = 'COMMENTED_POST',
  Followed = 'FOLLOWED',
  MentionComment = 'MENTION_COMMENT',
  MentionPost = 'MENTION_POST',
  MirroredComment = 'MIRRORED_COMMENT',
  MirroredPost = 'MIRRORED_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type OnChainIdentity = {
  __typename?: 'OnChainIdentity';
  ens?: Maybe<EnsOnChainIdentity>;
  proofOfHumanity: Scalars['Boolean'];
  sybilDotOrg: SybilDotOrgIdentity;
  worldcoin: WorldcoinIdentity;
};

export type OrConditionInput = {
  criteria: Array<AccessConditionInput>;
};

export type OrConditionOutput = {
  __typename?: 'OrConditionOutput';
  criteria: Array<AccessConditionOutput>;
};

export type Owner = {
  __typename?: 'Owner';
  address: Scalars['EthereumAddress'];
  amount: Scalars['Float'];
};

export type PaginatedAllPublicationsTagsResult = {
  __typename?: 'PaginatedAllPublicationsTagsResult';
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult';
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: 'PaginatedProfilePublicationsForSaleResult';
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPublicationResult = {
  __typename?: 'PaginatedPublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  next?: Maybe<Scalars['Cursor']>;
  prev?: Maybe<Scalars['Cursor']>;
  /** @deprecated Total counts is expensive and in dynamic nature of queries it slows stuff down. Most the time you do not need this you can just use the `next` property to see if there is more data. This will be removed soon. The only use case anyone is using this right now is on notification query, this should be changed to query the notifications and cache the last notification id. You can then keep checking if the id changes you know more notifications. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoCollectedResult = {
  __typename?: 'PaginatedWhoCollectedResult';
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type PendingApproveFollowsResult = {
  __typename?: 'PendingApproveFollowsResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type Post = {
  __typename?: 'Post';
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  collectModule: CollectModule;
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field. */
  collectedBy?: Maybe<Wallet>;
  createdAt: Scalars['DateTime'];
  dataAvailabilityProofs?: Maybe<Scalars['String']>;
  hasCollectedByMe: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  id: Scalars['InternalPublicationId'];
  isDataAvailability: Scalars['Boolean'];
  isGated: Scalars['Boolean'];
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']>;
  onChainContentURI: Scalars['String'];
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  referenceModule?: Maybe<ReferenceModule>;
  stats: PublicationStats;
};


export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type PostCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


export type PostHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type Profile = {
  __typename?: 'Profile';
  attributes?: Maybe<Array<Attribute>>;
  bio?: Maybe<Scalars['String']>;
  coverPicture?: Maybe<ProfileMedia>;
  dispatcher?: Maybe<Dispatcher>;
  followModule?: Maybe<FollowModule>;
  followNftAddress?: Maybe<Scalars['ContractAddress']>;
  handle: Scalars['Handle'];
  id: Scalars['ProfileId'];
  interests?: Maybe<Array<Scalars['ProfileInterest']>>;
  isDefault: Scalars['Boolean'];
  isFollowedByMe: Scalars['Boolean'];
  isFollowing: Scalars['Boolean'];
  metadata?: Maybe<Scalars['Url']>;
  name?: Maybe<Scalars['String']>;
  onChainIdentity: OnChainIdentity;
  ownedBy: Scalars['EthereumAddress'];
  picture?: Maybe<ProfileMedia>;
  stats: ProfileStats;
};


export type ProfileIsFollowedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars['ProfileId']>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars['ProfileId'];
  redeemingProfileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleRedeemParams = {
  profileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleSettings = {
  __typename?: 'ProfileFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  type: FollowModules;
};

export type ProfileFollowRevenueQueryRequest = {
  profileId: Scalars['ProfileId'];
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars['ProfileId']>;
};

export type ProfileOwnershipInput = {
  profileId: Scalars['ProfileId'];
};

export type ProfileOwnershipOutput = {
  __typename?: 'ProfileOwnershipOutput';
  profileId: Scalars['ProfileId'];
};

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  profileId: Scalars['ProfileId'];
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  types?: InputMaybe<Array<PublicationTypes>>;
};

export type ProfilePublicationRevenueResult = {
  __typename?: 'ProfilePublicationRevenueResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  profileId: Scalars['ProfileId'];
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>;
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>;
};

export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export enum ProfileSortCriteria {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

export type ProfileStats = {
  __typename?: 'ProfileStats';
  commentsTotal: Scalars['Int'];
  id: Scalars['ProfileId'];
  mirrorsTotal: Scalars['Int'];
  postsTotal: Scalars['Int'];
  publicationsTotal: Scalars['Int'];
  totalCollects: Scalars['Int'];
  totalComments: Scalars['Int'];
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  totalMirrors: Scalars['Int'];
  totalPosts: Scalars['Int'];
  totalPublications: Scalars['Int'];
};


export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

export type ProviderSpecificParamsOutput = {
  __typename?: 'ProviderSpecificParamsOutput';
  encryptionKey: Scalars['ContentEncryptionKey'];
};

export type ProxyActionError = {
  __typename?: 'ProxyActionError';
  lastKnownTxId?: Maybe<Scalars['TxId']>;
  reason: Scalars['String'];
};

export type ProxyActionQueued = {
  __typename?: 'ProxyActionQueued';
  queuedAt: Scalars['DateTime'];
};

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>;
  follow?: InputMaybe<FollowProxyAction>;
};

export type ProxyActionStatusResult = {
  __typename?: 'ProxyActionStatusResult';
  status: ProxyActionStatusTypes;
  txHash: Scalars['TxHash'];
  txId: Scalars['TxId'];
};

export type ProxyActionStatusResultUnion = ProxyActionError | ProxyActionQueued | ProxyActionStatusResult;

export enum ProxyActionStatusTypes {
  Complete = 'COMPLETE',
  Minting = 'MINTING',
  Transferring = 'TRANSFERRING'
}

export type PublicMediaRequest = {
  altTag?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['Url']>;
  itemCid: Scalars['IpfsCid'];
  type?: InputMaybe<Scalars['MimeType']>;
};

export type PublicMediaResults = {
  __typename?: 'PublicMediaResults';
  media: MediaOutput;
  signedUrl: Scalars['String'];
};

export type Publication = Comment | Mirror | Post;

export enum PublicationContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationForSale = Comment | Post;

export enum PublicationMainFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  Embed = 'EMBED',
  Image = 'IMAGE',
  Link = 'LINK',
  TextOnly = 'TEXT_ONLY',
  Video = 'VIDEO'
}

export enum PublicationMediaSource {
  Lens = 'LENS'
}

export type PublicationMetadataContentWarningFilter = {
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

export enum PublicationMetadataDisplayTypes {
  Date = 'date',
  Number = 'number',
  String = 'string'
}

export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  locale?: InputMaybe<Scalars['Locale']>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

export type PublicationMetadataMediaInput = {
  altTag?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['Url']>;
  item: Scalars['Url'];
  source?: InputMaybe<PublicationMediaSource>;
  type?: InputMaybe<Scalars['MimeType']>;
};

export type PublicationMetadataStatus = {
  __typename?: 'PublicationMetadataStatus';
  reason?: Maybe<Scalars['String']>;
  status: PublicationMetadataStatusType;
};

export enum PublicationMetadataStatusType {
  MetadataValidationFailed = 'METADATA_VALIDATION_FAILED',
  NotFound = 'NOT_FOUND',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type PublicationMetadataTagsFilter = {
  all?: InputMaybe<Array<Scalars['String']>>;
  oneOf?: InputMaybe<Array<Scalars['String']>>;
};

export type PublicationMetadataV1Input = {
  animation_url?: InputMaybe<Scalars['Url']>;
  appId?: InputMaybe<Scalars['Sources']>;
  attributes: Array<MetadataAttributeInput>;
  content?: InputMaybe<Scalars['Markdown']>;
  description?: InputMaybe<Scalars['Markdown']>;
  external_url?: InputMaybe<Scalars['Url']>;
  image?: InputMaybe<Scalars['Url']>;
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  metadata_id: Scalars['String'];
  name: Scalars['String'];
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  version: Scalars['String'];
};

export type PublicationMetadataV2Input = {
  animation_url?: InputMaybe<Scalars['Url']>;
  appId?: InputMaybe<Scalars['Sources']>;
  attributes: Array<MetadataAttributeInput>;
  content?: InputMaybe<Scalars['Markdown']>;
  contentWarning?: InputMaybe<PublicationContentWarning>;
  description?: InputMaybe<Scalars['Markdown']>;
  external_url?: InputMaybe<Scalars['Url']>;
  image?: InputMaybe<Scalars['Url']>;
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  locale: Scalars['Locale'];
  mainContentFocus: PublicationMainFocus;
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  metadata_id: Scalars['String'];
  name: Scalars['String'];
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  version: Scalars['String'];
};

export type PublicationQueryRequest = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  txHash?: InputMaybe<Scalars['TxHash']>;
};

export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: Publication;
  revenue: RevenueAggregate;
};

export type PublicationRevenueQueryRequest = {
  publicationId: Scalars['InternalPublicationId'];
};

export type PublicationSearchResult = {
  __typename?: 'PublicationSearchResult';
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

export type PublicationSignatureContextInput = {
  signature: Scalars['String'];
};

export enum PublicationSortCriteria {
  CuratedProfiles = 'CURATED_PROFILES',
  Latest = 'LATEST',
  TopCollected = 'TOP_COLLECTED',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED'
}

export type PublicationStats = {
  __typename?: 'PublicationStats';
  commentsTotal: Scalars['Int'];
  id: Scalars['InternalPublicationId'];
  totalAmountOfCollects: Scalars['Int'];
  totalAmountOfComments: Scalars['Int'];
  totalAmountOfMirrors: Scalars['Int'];
  totalDownvotes: Scalars['Int'];
  totalUpvotes: Scalars['Int'];
};


export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

export enum PublicationTypes {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  reason?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PublicationsQueryRequest = {
  collectedBy?: InputMaybe<Scalars['EthereumAddress']>;
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']>;
  commentsOfOrdering?: InputMaybe<CommentOrderingTypes>;
  commentsRankingFilter?: InputMaybe<CommentRankingFilter>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>;
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Query = {
  __typename?: 'Query';
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  cur: Array<Scalars['String']>;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  exploreProfiles: ExploreProfileResult;
  explorePublications: ExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  gct: Array<Scalars['String']>;
  gdm: Array<Scalars['Url']>;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasTxHashBeenIndexed: TransactionResult;
  internalPublicationFilter: PaginatedPublicationResult;
  isIDKitPhoneVerified: Scalars['Boolean'];
  mutualFollowersProfiles: PaginatedProfileResult;
  nftGalleries: Array<NftGallery>;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars['String'];
  profile?: Maybe<Profile>;
  profileFollowModuleBeenRedeemed: Scalars['Boolean'];
  profileFollowRevenue: FollowRevenueResult;
  profileInterests: Array<Scalars['ProfileInterest']>;
  profileOnChainIdentity: Array<OnChainIdentity>;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  profiles: PaginatedProfileResult;
  proxyActionStatus: ProxyActionStatusResultUnion;
  publication?: Maybe<Publication>;
  publicationMetadataStatus: PublicationMetadataStatus;
  publicationRevenue?: Maybe<PublicationRevenue>;
  publications: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  rel?: Maybe<Scalars['Void']>;
  relayQueues: Array<RelayQueueResult>;
  search: SearchResult;
  txIdToTxHash: Scalars['TxHash'];
  unknownEnabledModules: EnabledModules;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean'];
  whoCollectedPublication: PaginatedWhoCollectedResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};


export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryCurArgs = {
  request: CurRequest;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};


export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};


export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGctArgs = {
  request: GctRequest;
};


export type QueryGdmArgs = {
  request: GdmRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};


export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};


export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest;
};


export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};


export type QueryNftGalleriesArgs = {
  request: NftGalleriesRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNftsArgs = {
  request: NfTsRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};


export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};


export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};


export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};


export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};


export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};


export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};


export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};


export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars['ProxyActionId'];
};


export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};


export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};


export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};


export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};


export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};


export type QueryRelArgs = {
  request: RelRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QueryTxIdToTxHashArgs = {
  txId: Scalars['TxId'];
};


export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};


export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars['DateTime'];
};

export type ReactionFieldResolverRequest = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type ReactionRequest = {
  profileId: Scalars['ProfileId'];
  publicationId: Scalars['InternalPublicationId'];
  reaction: ReactionTypes;
};

export enum ReactionTypes {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type RecipientDataInput = {
  recipient: Scalars['EthereumAddress'];
  split: Scalars['Float'];
};

export type RecipientDataOutput = {
  __typename?: 'RecipientDataOutput';
  recipient: Scalars['EthereumAddress'];
  split: Scalars['Float'];
};

export type RecommendedProfileOptions = {
  disableML?: InputMaybe<Scalars['Boolean']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ReferenceModule = DegreesOfSeparationReferenceModuleSettings | FollowOnlyReferenceModuleSettings | UnknownReferenceModuleSettings;

export type ReferenceModuleParams = {
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
};

export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

export type RefreshRequest = {
  refreshToken: Scalars['Jwt'];
};

export type RelRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  secret: Scalars['String'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasons;
};

export enum RelayErrorReasons {
  Expired = 'EXPIRED',
  HandleTaken = 'HANDLE_TAKEN',
  NotAllowed = 'NOT_ALLOWED',
  Rejected = 'REJECTED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayQueueResult = {
  __typename?: 'RelayQueueResult';
  address: Scalars['EthereumAddress'];
  queue: Scalars['Float'];
  relayer: RelayRoleKey;
};

export type RelayResult = RelayError | RelayerResult;

export enum RelayRoleKey {
  CreateProfile = 'CREATE_PROFILE',
  Dispatcher_1 = 'DISPATCHER_1',
  Dispatcher_2 = 'DISPATCHER_2',
  Dispatcher_3 = 'DISPATCHER_3',
  Dispatcher_4 = 'DISPATCHER_4',
  Dispatcher_5 = 'DISPATCHER_5',
  Dispatcher_6 = 'DISPATCHER_6',
  Dispatcher_7 = 'DISPATCHER_7',
  Dispatcher_8 = 'DISPATCHER_8',
  Dispatcher_9 = 'DISPATCHER_9',
  Dispatcher_10 = 'DISPATCHER_10',
  ProxyActionCollect_1 = 'PROXY_ACTION_COLLECT_1',
  ProxyActionCollect_2 = 'PROXY_ACTION_COLLECT_2',
  ProxyActionCollect_3 = 'PROXY_ACTION_COLLECT_3',
  ProxyActionCollect_4 = 'PROXY_ACTION_COLLECT_4',
  ProxyActionCollect_5 = 'PROXY_ACTION_COLLECT_5',
  ProxyActionCollect_6 = 'PROXY_ACTION_COLLECT_6',
  ProxyActionFollow_1 = 'PROXY_ACTION_FOLLOW_1',
  ProxyActionFollow_2 = 'PROXY_ACTION_FOLLOW_2',
  ProxyActionFollow_3 = 'PROXY_ACTION_FOLLOW_3',
  ProxyActionFollow_4 = 'PROXY_ACTION_FOLLOW_4',
  ProxyActionFollow_5 = 'PROXY_ACTION_FOLLOW_5',
  ProxyActionFollow_6 = 'PROXY_ACTION_FOLLOW_6',
  ProxyActionFollow_7 = 'PROXY_ACTION_FOLLOW_7',
  ProxyActionFollow_8 = 'PROXY_ACTION_FOLLOW_8',
  ProxyActionFollow_9 = 'PROXY_ACTION_FOLLOW_9',
  ProxyActionFollow_10 = 'PROXY_ACTION_FOLLOW_10',
  WithSig_1 = 'WITH_SIG_1',
  WithSig_2 = 'WITH_SIG_2',
  WithSig_3 = 'WITH_SIG_3'
}

export type RelayerResult = {
  __typename?: 'RelayerResult';
  txHash: Scalars['TxHash'];
  txId: Scalars['TxId'];
};

export type RemoveProfileInterestsRequest = {
  interests: Array<Scalars['ProfileInterest']>;
  profileId: Scalars['ProfileId'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>;
  publicationId: Scalars['InternalPublicationId'];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: 'ReservedClaimableHandle';
  expiry: Scalars['DateTime'];
  handle: Scalars['Handle'];
  id: Scalars['HandleClaimIdScalar'];
  source: Scalars['String'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Erc20Amount;
};

export type RevertCollectModuleSettings = {
  __typename?: 'RevertCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  type: CollectModules;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  type: FollowModules;
};

export enum ScalarOperator {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  query: Scalars['Search'];
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  type: SearchRequestTypes;
};

export enum SearchRequestTypes {
  Profile = 'PROFILE',
  Publication = 'PUBLICATION'
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

export type SetDefaultProfileBroadcastItemResult = {
  __typename?: 'SetDefaultProfileBroadcastItemResult';
  expiresAt: Scalars['DateTime'];
  id: Scalars['BroadcastId'];
  typedData: SetDefaultProfileEip712TypedData;
};

export type SetDefaultProfileEip712TypedData = {
  __typename?: 'SetDefaultProfileEIP712TypedData';
  domain: Eip712TypedDataDomain;
  types: SetDefaultProfileEip712TypedDataTypes;
  value: SetDefaultProfileEip712TypedDataValue;
};

export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: 'SetDefaultProfileEIP712TypedDataTypes';
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: 'SetDefaultProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  wallet: Scalars['EthereumAddress'];
};

export type SetDispatcherRequest = {
  dispatcher?: InputMaybe<Scalars['EthereumAddress']>;
  enable?: InputMaybe<Scalars['Boolean']>;
  profileId: Scalars['ProfileId'];
};

export type SignedAuthChallenge = {
  address: Scalars['EthereumAddress'];
  signature: Scalars['Signature'];
};

export type SingleProfileQueryRequest = {
  handle?: InputMaybe<Scalars['Handle']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity';
  source: SybilDotOrgIdentitySource;
  verified: Scalars['Boolean'];
};

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource';
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity';
  handle?: Maybe<Scalars['String']>;
};

export type TagResult = {
  __typename?: 'TagResult';
  tag: Scalars['PublicationTag'];
  total: Scalars['Int'];
};

export enum TagSortCriteria {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TimedFeeCollectModuleParams = {
  amount: ModuleFeeAmountParams;
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: 'TimedFeeCollectModuleSettings';
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  endTimestamp: Scalars['DateTime'];
  followerOnly: Scalars['Boolean'];
  recipient: Scalars['EthereumAddress'];
  referralFee: Scalars['Float'];
  type: CollectModules;
};

export type TransactionError = {
  __typename?: 'TransactionError';
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

export enum TransactionErrorReasons {
  Reverted = 'REVERTED'
}

export type TransactionIndexedResult = {
  __typename?: 'TransactionIndexedResult';
  indexed: Scalars['Boolean'];
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txHash: Scalars['TxHash'];
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt';
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  byzantium: Scalars['Boolean'];
  confirmations: Scalars['Int'];
  contractAddress?: Maybe<Scalars['ContractAddress']>;
  cumulativeGasUsed: Scalars['String'];
  effectiveGasPrice: Scalars['String'];
  from: Scalars['EthereumAddress'];
  gasUsed: Scalars['String'];
  logs: Array<Log>;
  logsBloom: Scalars['String'];
  root?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['EthereumAddress']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
  type: Scalars['Int'];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  overrideSigNonce: Scalars['Nonce'];
};

export type UnfollowRequest = {
  profile: Scalars['ProfileId'];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownCollectModuleSettings = {
  __typename?: 'UnknownCollectModuleSettings';
  collectModuleReturnData: Scalars['CollectModuleData'];
  contractAddress: Scalars['ContractAddress'];
  type: CollectModules;
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleRedeemParams = {
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  followModuleReturnData: Scalars['FollowModuleData'];
  type: FollowModules;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  data: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  referenceModuleReturnData: Scalars['ReferenceModuleData'];
  type: ReferenceModules;
};

export type UpdateProfileImageRequest = {
  nftData?: InputMaybe<NftData>;
  profileId: Scalars['ProfileId'];
  url?: InputMaybe<Scalars['Url']>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnChainSigNonce: Scalars['Nonce'];
  peripheryOnChainSigNonce: Scalars['Nonce'];
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

export type VerifyRequest = {
  accessToken: Scalars['Jwt'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['EthereumAddress'];
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  publicationId: Scalars['InternalPublicationId'];
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  publicationId: Scalars['InternalPublicationId'];
};

export type WhoReactedResult = {
  __typename?: 'WhoReactedResult';
  profile: Profile;
  reaction: ReactionTypes;
  reactionAt: Scalars['DateTime'];
  reactionId: Scalars['ReactionId'];
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  isHuman: Scalars['Boolean'];
};

export enum WorldcoinPhoneVerifyType {
  Orb = 'ORB',
  Phone = 'PHONE'
}

export type WorldcoinPhoneVerifyWebhookRequest = {
  nullifierHash: Scalars['String'];
  signal: Scalars['EthereumAddress'];
  signalType: WorldcoinPhoneVerifyType;
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;


export type ChallengeQuery = { __typename?: 'Query', challenge: { __typename?: 'AuthChallengeResult', text: string } };

export type MediaFieldsFragment = { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } };

export type PublicationStatsFieldsFragment = { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number };

export type MetadataOutputFieldsFragment = { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null };

export type Erc20FieldsFragment = { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any };

export type PostFieldsFragment = { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type MirrorBaseFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type MirrorFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentBaseFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentMirrorOfFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type TxReceiptFieldsFragment = { __typename?: 'TransactionReceipt', to?: any | null, from: any, contractAddress?: any | null, transactionIndex: number, root?: string | null, gasUsed: string, logsBloom: string, blockHash: string, transactionHash: any, blockNumber: number, confirmations: number, cumulativeGasUsed: string, effectiveGasPrice: string, byzantium: boolean, type: number, status?: number | null, logs: Array<{ __typename?: 'Log', blockNumber: number, blockHash: string, transactionIndex: number, removed: boolean, address: any, data: string, topics: Array<string>, transactionHash: any, logIndex: number }> };

export type WalletFieldsFragment = { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } } | null };

export type CommonPaginatedResultInfoFieldsFragment = { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount?: number | null };

type FollowModuleFields_FeeFollowModuleSettings_Fragment = { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type FollowModuleFields_ProfileFollowModuleSettings_Fragment = { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any };

type FollowModuleFields_RevertFollowModuleSettings_Fragment = { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any };

type FollowModuleFields_UnknownFollowModuleSettings_Fragment = { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any };

export type FollowModuleFieldsFragment = FollowModuleFields_FeeFollowModuleSettings_Fragment | FollowModuleFields_ProfileFollowModuleSettings_Fragment | FollowModuleFields_RevertFollowModuleSettings_Fragment | FollowModuleFields_UnknownFollowModuleSettings_Fragment;

type CollectModuleFields_AaveFeeCollectModuleSettings_Fragment = { __typename: 'AaveFeeCollectModuleSettings' };

type CollectModuleFields_Erc4626FeeCollectModuleSettings_Fragment = { __typename: 'ERC4626FeeCollectModuleSettings' };

type CollectModuleFields_FeeCollectModuleSettings_Fragment = { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_FreeCollectModuleSettings_Fragment = { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any };

type CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_MultirecipientFeeCollectModuleSettings_Fragment = { __typename: 'MultirecipientFeeCollectModuleSettings' };

type CollectModuleFields_RevertCollectModuleSettings_Fragment = { __typename: 'RevertCollectModuleSettings', type: CollectModules };

type CollectModuleFields_TimedFeeCollectModuleSettings_Fragment = { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_UnknownCollectModuleSettings_Fragment = { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any };

export type CollectModuleFieldsFragment = CollectModuleFields_AaveFeeCollectModuleSettings_Fragment | CollectModuleFields_Erc4626FeeCollectModuleSettings_Fragment | CollectModuleFields_FeeCollectModuleSettings_Fragment | CollectModuleFields_FreeCollectModuleSettings_Fragment | CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment | CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment | CollectModuleFields_MultirecipientFeeCollectModuleSettings_Fragment | CollectModuleFields_RevertCollectModuleSettings_Fragment | CollectModuleFields_TimedFeeCollectModuleSettings_Fragment | CollectModuleFields_UnknownCollectModuleSettings_Fragment;

type ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment = { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number };

type ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment = { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any };

type ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment = { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any };

export type ReferenceModuleFieldsFragment = ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment | ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment | ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment;

export type Erc20OwnershipFieldsFragment = { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number };

export type EoaOwnershipFieldsFragment = { __typename?: 'EoaOwnershipOutput', address: any };

export type NftOwnershipFieldsFragment = { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null };

export type ProfileOwnershipFieldsFragment = { __typename?: 'ProfileOwnershipOutput', profileId: any };

export type FollowConditionFieldsFragment = { __typename?: 'FollowConditionOutput', profileId: any };

export type CollectConditionFieldsFragment = { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null };

export type AndConditionFieldsFragment = { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }> };

export type OrConditionFieldsFragment = { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }> };

export type AndConditionFieldsNoRecursiveFragment = { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> };

export type OrConditionFieldsNoRecursiveFragment = { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> };

export type SimpleConditionFieldsFragment = { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null };

export type BooleanConditionFieldsRecursiveFragment = { __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null };

export type AccessConditionFieldsFragment = { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null };

export type EncryptedMediaFieldsFragment = { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null };

export type EncryptedMediaSetFieldsFragment = { __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null };

export type ExplorePublicationsQueryVariables = Exact<{
  request: ExplorePublicationRequest;
}>;


export type ExplorePublicationsQuery = { __typename?: 'Query', explorePublications: { __typename?: 'ExplorePublicationResult', items: Array<{ __typename: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount?: number | null } } };

export type RefreshMutationVariables = Exact<{
  request: RefreshRequest;
}>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export const MediaFieldsFragmentDoc = `
    fragment MediaFields on Media {
  url
  width
  height
  mimeType
}
    `;
export const FollowModuleFieldsFragmentDoc = `
    fragment FollowModuleFields on FollowModule {
  ... on FeeFollowModuleSettings {
    type
    amount {
      asset {
        name
        symbol
        decimals
        address
      }
      value
    }
    recipient
  }
  ... on ProfileFollowModuleSettings {
    type
    contractAddress
  }
  ... on RevertFollowModuleSettings {
    type
    contractAddress
  }
  ... on UnknownFollowModuleSettings {
    type
    contractAddress
    followModuleReturnData
  }
}
    `;
export const ProfileFieldsFragmentDoc = `
    fragment ProfileFields on Profile {
  id
  name
  bio
  attributes {
    displayType
    traitType
    key
    value
  }
  isFollowedByMe
  isFollowing(who: null)
  followNftAddress
  metadata
  isDefault
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
    canUseRelay
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ...FollowModuleFields
  }
  onChainIdentity {
    ens {
      name
    }
    proofOfHumanity
    sybilDotOrg {
      verified
      source {
        twitter {
          handle
        }
      }
    }
    worldcoin {
      isHuman
    }
  }
}
    `;
export const PublicationStatsFieldsFragmentDoc = `
    fragment PublicationStatsFields on PublicationStats {
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}
    `;
export const NftOwnershipFieldsFragmentDoc = `
    fragment NftOwnershipFields on NftOwnershipOutput {
  contractAddress
  chainID
  contractType
  tokenIds
}
    `;
export const EoaOwnershipFieldsFragmentDoc = `
    fragment EoaOwnershipFields on EoaOwnershipOutput {
  address
}
    `;
export const Erc20OwnershipFieldsFragmentDoc = `
    fragment Erc20OwnershipFields on Erc20OwnershipOutput {
  contractAddress
  amount
  chainID
  condition
  decimals
}
    `;
export const ProfileOwnershipFieldsFragmentDoc = `
    fragment ProfileOwnershipFields on ProfileOwnershipOutput {
  profileId
}
    `;
export const FollowConditionFieldsFragmentDoc = `
    fragment FollowConditionFields on FollowConditionOutput {
  profileId
}
    `;
export const CollectConditionFieldsFragmentDoc = `
    fragment CollectConditionFields on CollectConditionOutput {
  publicationId
  thisPublication
}
    `;
export const SimpleConditionFieldsFragmentDoc = `
    fragment SimpleConditionFields on AccessConditionOutput {
  nft {
    ...NftOwnershipFields
  }
  eoa {
    ...EoaOwnershipFields
  }
  token {
    ...Erc20OwnershipFields
  }
  profile {
    ...ProfileOwnershipFields
  }
  follow {
    ...FollowConditionFields
  }
  collect {
    ...CollectConditionFields
  }
}
    `;
export const BooleanConditionFieldsRecursiveFragmentDoc = `
    fragment BooleanConditionFieldsRecursive on AccessConditionOutput {
  and {
    criteria {
      ...SimpleConditionFields
      and {
        criteria {
          ...SimpleConditionFields
        }
      }
      or {
        criteria {
          ...SimpleConditionFields
        }
      }
    }
  }
  or {
    criteria {
      ...SimpleConditionFields
      and {
        criteria {
          ...SimpleConditionFields
        }
      }
      or {
        criteria {
          ...SimpleConditionFields
        }
      }
    }
  }
}
    `;
export const AccessConditionFieldsFragmentDoc = `
    fragment AccessConditionFields on AccessConditionOutput {
  ...SimpleConditionFields
  ...BooleanConditionFieldsRecursive
}
    `;
export const EncryptedMediaFieldsFragmentDoc = `
    fragment EncryptedMediaFields on EncryptedMedia {
  url
  width
  height
  mimeType
}
    `;
export const EncryptedMediaSetFieldsFragmentDoc = `
    fragment EncryptedMediaSetFields on EncryptedMediaSet {
  original {
    ...EncryptedMediaFields
  }
  small {
    ...EncryptedMediaFields
  }
  medium {
    ...EncryptedMediaFields
  }
}
    `;
export const MetadataOutputFieldsFragmentDoc = `
    fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
    small {
      ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
  encryptionParams {
    providerSpecificParams {
      encryptionKey
    }
    accessCondition {
      ...AccessConditionFields
    }
    encryptedFields {
      animation_url
      content
      external_url
      image
      media {
        ...EncryptedMediaSetFields
      }
    }
  }
}
    `;
export const Erc20FieldsFragmentDoc = `
    fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}
    `;
export const CollectModuleFieldsFragmentDoc = `
    fragment CollectModuleFields on CollectModule {
  __typename
  ... on FreeCollectModuleSettings {
    type
    followerOnly
    contractAddress
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on UnknownCollectModuleSettings {
    type
    contractAddress
    collectModuleReturnData
  }
}
    `;
export const ReferenceModuleFieldsFragmentDoc = `
    fragment ReferenceModuleFields on ReferenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
    contractAddress
  }
  ... on UnknownReferenceModuleSettings {
    type
    contractAddress
    referenceModuleReturnData
  }
  ... on DegreesOfSeparationReferenceModuleSettings {
    type
    contractAddress
    commentsRestricted
    mirrorsRestricted
    degreesOfSeparation
  }
}
    `;
export const MirrorBaseFieldsFragmentDoc = `
    fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  hasCollectedByMe
  isGated
}
    `;
export const PostFieldsFragmentDoc = `
    fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
  isGated
}
    `;
export const CommentBaseFieldsFragmentDoc = `
    fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
  isGated
}
    `;
export const CommentMirrorOfFieldsFragmentDoc = `
    fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
    }
  }
}
    `;
export const CommentFieldsFragmentDoc = `
    fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentMirrorOfFields
        }
      }
    }
  }
}
    `;
export const MirrorFieldsFragmentDoc = `
    fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    `;
export const TxReceiptFieldsFragmentDoc = `
    fragment TxReceiptFields on TransactionReceipt {
  to
  from
  contractAddress
  transactionIndex
  root
  gasUsed
  logsBloom
  blockHash
  transactionHash
  blockNumber
  confirmations
  cumulativeGasUsed
  effectiveGasPrice
  byzantium
  type
  status
  logs {
    blockNumber
    blockHash
    transactionIndex
    removed
    address
    data
    topics
    transactionHash
    logIndex
  }
}
    `;
export const WalletFieldsFragmentDoc = `
    fragment WalletFields on Wallet {
  address
  defaultProfile {
    ...ProfileFields
  }
}
    `;
export const CommonPaginatedResultInfoFieldsFragmentDoc = `
    fragment CommonPaginatedResultInfoFields on PaginatedResultInfo {
  prev
  next
  totalCount
}
    `;
export const AndConditionFieldsFragmentDoc = `
    fragment AndConditionFields on AndConditionOutput {
  criteria {
    ...AccessConditionFields
  }
}
    `;
export const OrConditionFieldsFragmentDoc = `
    fragment OrConditionFields on OrConditionOutput {
  criteria {
    ...AccessConditionFields
  }
}
    `;
export const AndConditionFieldsNoRecursiveFragmentDoc = `
    fragment AndConditionFieldsNoRecursive on AndConditionOutput {
  criteria {
    ...SimpleConditionFields
  }
}
    `;
export const OrConditionFieldsNoRecursiveFragmentDoc = `
    fragment OrConditionFieldsNoRecursive on OrConditionOutput {
  criteria {
    ...SimpleConditionFields
  }
}
    `;
export const AuthenticateDocument = `
    mutation authenticate($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export const useAuthenticateMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>) =>
    useMutation<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>(
      ['authenticate'],
      (variables?: AuthenticateMutationVariables) => fetcher<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, variables)(),
      options
    );
export const ChallengeDocument = `
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;
export const useChallengeQuery = <
      TData = ChallengeQuery,
      TError = unknown
    >(
      variables: ChallengeQueryVariables,
      options?: UseQueryOptions<ChallengeQuery, TError, TData>
    ) =>
    useQuery<ChallengeQuery, TError, TData>(
      ['Challenge', variables],
      fetcher<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, variables),
      options
    );
export const ExplorePublicationsDocument = `
    query ExplorePublications($request: ExplorePublicationRequest!) {
  explorePublications(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${MediaFieldsFragmentDoc}
${FollowModuleFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${AccessConditionFieldsFragmentDoc}
${SimpleConditionFieldsFragmentDoc}
${NftOwnershipFieldsFragmentDoc}
${EoaOwnershipFieldsFragmentDoc}
${Erc20OwnershipFieldsFragmentDoc}
${ProfileOwnershipFieldsFragmentDoc}
${FollowConditionFieldsFragmentDoc}
${CollectConditionFieldsFragmentDoc}
${BooleanConditionFieldsRecursiveFragmentDoc}
${EncryptedMediaSetFieldsFragmentDoc}
${EncryptedMediaFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${Erc20FieldsFragmentDoc}
${ReferenceModuleFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${CommentBaseFieldsFragmentDoc}
${MirrorBaseFieldsFragmentDoc}
${CommentMirrorOfFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
export const useExplorePublicationsQuery = <
      TData = ExplorePublicationsQuery,
      TError = unknown
    >(
      variables: ExplorePublicationsQueryVariables,
      options?: UseQueryOptions<ExplorePublicationsQuery, TError, TData>
    ) =>
    useQuery<ExplorePublicationsQuery, TError, TData>(
      ['ExplorePublications', variables],
      fetcher<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>(ExplorePublicationsDocument, variables),
      options
    );
export const RefreshDocument = `
    mutation Refresh($request: RefreshRequest!) {
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export const useRefreshMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RefreshMutation, TError, RefreshMutationVariables, TContext>) =>
    useMutation<RefreshMutation, TError, RefreshMutationVariables, TContext>(
      ['Refresh'],
      (variables?: RefreshMutationVariables) => fetcher<RefreshMutation, RefreshMutationVariables>(RefreshDocument, variables)(),
      options
    );

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "CollectModule": [
      "AaveFeeCollectModuleSettings",
      "ERC4626FeeCollectModuleSettings",
      "FeeCollectModuleSettings",
      "FreeCollectModuleSettings",
      "LimitedFeeCollectModuleSettings",
      "LimitedTimedFeeCollectModuleSettings",
      "MultirecipientFeeCollectModuleSettings",
      "RevertCollectModuleSettings",
      "TimedFeeCollectModuleSettings",
      "UnknownCollectModuleSettings"
    ],
    "FeedItemRoot": [
      "Comment",
      "Post"
    ],
    "FollowModule": [
      "FeeFollowModuleSettings",
      "ProfileFollowModuleSettings",
      "RevertFollowModuleSettings",
      "UnknownFollowModuleSettings"
    ],
    "MainPostReference": [
      "Mirror",
      "Post"
    ],
    "MentionPublication": [
      "Comment",
      "Post"
    ],
    "MirrorablePublication": [
      "Comment",
      "Post"
    ],
    "Notification": [
      "NewCollectNotification",
      "NewCommentNotification",
      "NewFollowerNotification",
      "NewMentionNotification",
      "NewMirrorNotification",
      "NewReactionNotification"
    ],
    "ProfileMedia": [
      "MediaSet",
      "NftImage"
    ],
    "ProxyActionStatusResultUnion": [
      "ProxyActionError",
      "ProxyActionQueued",
      "ProxyActionStatusResult"
    ],
    "Publication": [
      "Comment",
      "Mirror",
      "Post"
    ],
    "PublicationForSale": [
      "Comment",
      "Post"
    ],
    "PublicationSearchResultItem": [
      "Comment",
      "Post"
    ],
    "ReferenceModule": [
      "DegreesOfSeparationReferenceModuleSettings",
      "FollowOnlyReferenceModuleSettings",
      "UnknownReferenceModuleSettings"
    ],
    "RelayResult": [
      "RelayError",
      "RelayerResult"
    ],
    "SearchResult": [
      "ProfileSearchResult",
      "PublicationSearchResult"
    ],
    "TransactionResult": [
      "TransactionError",
      "TransactionIndexedResult"
    ]
  }
};
      export default result;
    