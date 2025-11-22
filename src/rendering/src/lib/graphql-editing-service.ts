import { sitecoreClient } from './sitecore-client';

/**
 * Editing Service instance for Content SDK
 * Used to fetch editing data in Pages preview (editing) Metadata Edit Mode.
 */
export const graphQLEditingService = sitecoreClient.editing;

