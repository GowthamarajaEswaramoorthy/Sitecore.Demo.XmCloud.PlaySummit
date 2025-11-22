import type { SitecoreConfig } from '@sitecore-content-sdk/nextjs';

export const sitecoreConfig: SitecoreConfig = {
  // Site configuration
  siteName: process.env.SITECORE_SITE_NAME || 'playwebsite',

  // API configuration
  apiUrl: process.env.SITECORE_API_URL || '',
  apiKey: process.env.SITECORE_API_KEY || '',

  // Editing configuration
  editingSecret: process.env.SITECORE_EDITING_SECRET || '',

  // Experience Edge configuration
  edgeUrl: process.env.NEXT_PUBLIC_SITECORE_EDGE_URL || '',
  edgeContextId: process.env.SITECORE_EDGE_CONTEXT_ID || '',

  // Default language
  defaultLanguage: process.env.DEFAULT_LANGUAGE || 'en',

  // GraphQL endpoint
  graphqlEndpoint: process.env.GRAPH_QL_ENDPOINT || '/sitecore/api/graph/edge',

  // Path generation for SSG
  generateStaticPaths: process.env.GENERATE_STATIC_PATHS === 'true',

  // Fetch mode
  fetchWith: (process.env.FETCH_WITH as 'GraphQL' | 'REST') || 'GraphQL',

  // Root placeholders
  rootPlaceholders: ['headless-header', 'headless-main', 'headless-footer'],

  // Retries for GraphQL services
  retries: parseInt(process.env.GRAPH_QL_SERVICE_RETRIES || '3', 10),
};

export default sitecoreConfig;
