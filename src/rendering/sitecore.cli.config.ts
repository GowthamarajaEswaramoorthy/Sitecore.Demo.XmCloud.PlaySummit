import type { SitecoreCliConfig } from '@sitecore-content-sdk/cli';
import sitecoreConfig from './sitecore.config';

export const cliConfig: SitecoreCliConfig = {
  // Inherit from main config
  ...sitecoreConfig,

  // CLI-specific settings
  componentPaths: ['src/components/**/*.tsx'],
  
  // Output paths for generated files
  outputPath: 'src/lib',
  
  // Template generation options
  templates: {
    component: 'src/templates/component.template.tsx',
  },
};

export default cliConfig;
