import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type NewNotificationInput = {
  __typename?: 'NewNotificationInput';
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  songs: Array<Song>;
  songsHistory: Array<Song>;
};


export type QuerySongsHistoryArgs = {
  endTime?: InputMaybe<Scalars['String']>;
};

export type Song = {
  __typename?: 'Song';
  author: Scalars['String'];
  channelId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
  id: Scalars['Int'];
  lengthSeconds: Scalars['Float'];
  startTime: Scalars['DateTime'];
  title: Scalars['String'];
  user: Scalars['String'];
  userColor: Scalars['String'];
  videoId: Scalars['String'];
  viewCount: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newNotification: NewNotificationInput;
  songAdded: Song;
  songSkipped: Song;
};

export type NotificationFragmentFragment = { __typename?: 'NewNotificationInput', text: string };

export type SongFragmentFragment = { __typename?: 'Song', author: string, channelId: string, endTime: any, id: number, lengthSeconds: number, startTime: any, title: string, user: string, userColor: string, videoId: string, viewCount: number, createdAt: any };

export type SongsQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsQuery = { __typename?: 'Query', songs: Array<{ __typename?: 'Song', author: string, channelId: string, endTime: any, id: number, lengthSeconds: number, startTime: any, title: string, user: string, userColor: string, videoId: string, viewCount: number, createdAt: any }> };

export type SongsHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsHistoryQuery = { __typename?: 'Query', songsHistory: Array<{ __typename?: 'Song', author: string, channelId: string, endTime: any, id: number, lengthSeconds: number, startTime: any, title: string, user: string, userColor: string, videoId: string, viewCount: number, createdAt: any }> };

export type NewNotificationSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewNotificationSubscription = { __typename?: 'Subscription', newNotification: { __typename?: 'NewNotificationInput', text: string } };

export type SongAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SongAddedSubscription = { __typename?: 'Subscription', songAdded: { __typename?: 'Song', author: string, channelId: string, endTime: any, id: number, lengthSeconds: number, startTime: any, title: string, user: string, userColor: string, videoId: string, viewCount: number, createdAt: any } };

export type SongSkippedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SongSkippedSubscription = { __typename?: 'Subscription', songSkipped: { __typename?: 'Song', author: string, channelId: string, endTime: any, id: number, lengthSeconds: number, startTime: any, title: string, user: string, userColor: string, videoId: string, viewCount: number, createdAt: any } };

export const NotificationFragmentFragmentDoc = gql`
    fragment NotificationFragment on NewNotificationInput {
  text
}
    `;
export const SongFragmentFragmentDoc = gql`
    fragment SongFragment on Song {
  author
  channelId
  endTime
  id
  lengthSeconds
  startTime
  title
  user
  userColor
  videoId
  viewCount
  createdAt
}
    `;
export const SongsDocument = gql`
    query Songs {
  songs {
    ...SongFragment
  }
}
    ${SongFragmentFragmentDoc}`;

/**
 * __useSongsQuery__
 *
 * To run a query within a React component, call `useSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSongsQuery(baseOptions?: Apollo.QueryHookOptions<SongsQuery, SongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
      }
export function useSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongsQuery, SongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
        }
export type SongsQueryHookResult = ReturnType<typeof useSongsQuery>;
export type SongsLazyQueryHookResult = ReturnType<typeof useSongsLazyQuery>;
export type SongsQueryResult = Apollo.QueryResult<SongsQuery, SongsQueryVariables>;
export const SongsHistoryDocument = gql`
    query SongsHistory {
  songsHistory {
    ...SongFragment
  }
}
    ${SongFragmentFragmentDoc}`;

/**
 * __useSongsHistoryQuery__
 *
 * To run a query within a React component, call `useSongsHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongsHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongsHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSongsHistoryQuery(baseOptions?: Apollo.QueryHookOptions<SongsHistoryQuery, SongsHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SongsHistoryQuery, SongsHistoryQueryVariables>(SongsHistoryDocument, options);
      }
export function useSongsHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongsHistoryQuery, SongsHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SongsHistoryQuery, SongsHistoryQueryVariables>(SongsHistoryDocument, options);
        }
export type SongsHistoryQueryHookResult = ReturnType<typeof useSongsHistoryQuery>;
export type SongsHistoryLazyQueryHookResult = ReturnType<typeof useSongsHistoryLazyQuery>;
export type SongsHistoryQueryResult = Apollo.QueryResult<SongsHistoryQuery, SongsHistoryQueryVariables>;
export const NewNotificationDocument = gql`
    subscription NewNotification {
  newNotification {
    ...NotificationFragment
  }
}
    ${NotificationFragmentFragmentDoc}`;

/**
 * __useNewNotificationSubscription__
 *
 * To run a query within a React component, call `useNewNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewNotificationSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewNotificationSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewNotificationSubscription, NewNotificationSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewNotificationSubscription, NewNotificationSubscriptionVariables>(NewNotificationDocument, options);
      }
export type NewNotificationSubscriptionHookResult = ReturnType<typeof useNewNotificationSubscription>;
export type NewNotificationSubscriptionResult = Apollo.SubscriptionResult<NewNotificationSubscription>;
export const SongAddedDocument = gql`
    subscription SongAdded {
  songAdded {
    ...SongFragment
  }
}
    ${SongFragmentFragmentDoc}`;

/**
 * __useSongAddedSubscription__
 *
 * To run a query within a React component, call `useSongAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSongAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSongAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SongAddedSubscription, SongAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SongAddedSubscription, SongAddedSubscriptionVariables>(SongAddedDocument, options);
      }
export type SongAddedSubscriptionHookResult = ReturnType<typeof useSongAddedSubscription>;
export type SongAddedSubscriptionResult = Apollo.SubscriptionResult<SongAddedSubscription>;
export const SongSkippedDocument = gql`
    subscription SongSkipped {
  songSkipped {
    ...SongFragment
  }
}
    ${SongFragmentFragmentDoc}`;

/**
 * __useSongSkippedSubscription__
 *
 * To run a query within a React component, call `useSongSkippedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSongSkippedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongSkippedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSongSkippedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SongSkippedSubscription, SongSkippedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SongSkippedSubscription, SongSkippedSubscriptionVariables>(SongSkippedDocument, options);
      }
export type SongSkippedSubscriptionHookResult = ReturnType<typeof useSongSkippedSubscription>;
export type SongSkippedSubscriptionResult = Apollo.SubscriptionResult<SongSkippedSubscription>;