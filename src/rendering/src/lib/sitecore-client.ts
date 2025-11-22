import { createClient } from '@sitecore-content-sdk/nextjs';
import sitecoreConfig from '../../sitecore.config';

/**
 * Sitecore Content SDK client instance
 * This replaces JSS layout and dictionary services
 */
export const sitecoreClient = createClient({
  siteName: sitecoreConfig.siteName,
  apiUrl: sitecoreConfig.apiUrl,
  apiKey: sitecoreConfig.apiKey,
  edgeUrl: sitecoreConfig.edgeUrl,
  edgeContextId: sitecoreConfig.edgeContextId,
  defaultLanguage: sitecoreConfig.defaultLanguage,
  graphqlEndpoint: sitecoreConfig.graphqlEndpoint,
});

export default sitecoreClient;
