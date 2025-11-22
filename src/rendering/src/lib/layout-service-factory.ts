import { sitecoreClient } from './sitecore-client';

/**
 * Factory responsible for creating a LayoutService instance
 * Updated for Content SDK - uses centralized client
 */
export class LayoutServiceFactory {
  /**
   * @param {string} siteName site name
   * @returns {typeof sitecoreClient.layout} service instance
   */
  create(siteName: string) {
    // Content SDK uses a centralized client, not separate service instances
    // The siteName is configured in sitecore.config.ts
    return sitecoreClient.layout;
  }
}

/** LayoutServiceFactory singleton */
export const layoutServiceFactory = new LayoutServiceFactory();
