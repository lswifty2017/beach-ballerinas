import { createClient, type ContentfulClientApi } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN;

// Check if Contentful is configured
export const isContentfulConfigured = !!(space && accessToken);

// Lazy initialization to avoid errors when credentials are missing
let _contentfulClient: ContentfulClientApi<undefined> | null = null;
let _contentfulPreviewClient: ContentfulClientApi<undefined> | null = null;

function getContentfulClient(): ContentfulClientApi<undefined> | null {
  if (!isContentfulConfigured) {
    return null;
  }

  if (!_contentfulClient) {
    _contentfulClient = createClient({
      space: space!,
      accessToken: accessToken!,
    });
  }

  return _contentfulClient;
}

function getContentfulPreviewClient(): ContentfulClientApi<undefined> | null {
  if (!space || !previewToken) {
    return null;
  }

  if (!_contentfulPreviewClient) {
    _contentfulPreviewClient = createClient({
      space,
      accessToken: previewToken,
      host: "preview.contentful.com",
    });
  }

  return _contentfulPreviewClient;
}

export function getClient(preview = false): ContentfulClientApi<undefined> | null {
  if (preview) {
    return getContentfulPreviewClient() || getContentfulClient();
  }
  return getContentfulClient();
}
