import { sitecoreClient } from './sitecore-client';

/**
 * Factory responsible for creating a DictionaryService instance
 * Updated for Content SDK - uses centralized client
 */
export class DictionaryServiceFactory {
  /**
   * @param {string} siteName site name
   * @returns {typeof sitecoreClient.dictionary} service instance
   */
  create(siteName: string) {
    // Content SDK uses a centralized client, not separate service instances
    // The siteName is configured in sitecore.config.ts
    return sitecoreClient.dictionary;
  }
}

/** DictionaryServiceFactory singleton */
export const dictionaryServiceFactory = new DictionaryServiceFactory();
