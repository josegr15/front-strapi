import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsUiArticleContent extends Struct.ComponentSchema {
  collectionName: 'components_components_ui_article_contents';
  info: {
    displayName: 'UiArticleContent';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface ComponentsUiArticleHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_ui_article_headers';
  info: {
    displayName: 'UiArticleHeader';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsUiGuideDetails extends Struct.ComponentSchema {
  collectionName: 'components_components_ui_guide_details';
  info: {
    displayName: 'UiGuideDetails';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.ui-article-content': ComponentsUiArticleContent;
      'components.ui-article-header': ComponentsUiArticleHeader;
      'components.ui-guide-details': ComponentsUiGuideDetails;
    }
  }
}
