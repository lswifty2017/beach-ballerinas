import type { Asset } from "contentful";

interface AssetFile {
  url: string;
  details?: {
    image?: {
      width: number;
      height: number;
    };
  };
}

interface AssetFields {
  file?: AssetFile;
  title?: string;
  description?: string;
}

/**
 * Get optimized image URL from Contentful asset
 */
export function getImageUrl(
  asset: Asset | undefined,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "webp" | "jpg" | "png";
  }
): string {
  if (!asset) {
    return "/placeholder.jpg";
  }

  const fields = asset.fields as AssetFields | undefined;
  if (!fields?.file?.url) {
    return "/placeholder.jpg";
  }

  const url = fields.file.url;
  const params = new URLSearchParams();

  if (options?.width) params.set("w", options.width.toString());
  if (options?.height) params.set("h", options.height.toString());
  if (options?.quality) params.set("q", options.quality.toString());
  if (options?.format) params.set("fm", options.format);

  const queryString = params.toString();
  return `https:${url}${queryString ? `?${queryString}` : ""}`;
}

/**
 * Get image dimensions from Contentful asset
 */
export function getImageDimensions(asset: Asset | undefined): {
  width: number;
  height: number;
} {
  if (!asset) {
    return { width: 800, height: 600 };
  }

  const fields = asset.fields as AssetFields | undefined;
  const image = fields?.file?.details?.image;

  if (!image) {
    return { width: 800, height: 600 };
  }

  return {
    width: image.width,
    height: image.height,
  };
}

/**
 * Get image alt text from Contentful asset
 */
export function getImageAlt(asset: Asset | undefined): string {
  if (!asset) {
    return "";
  }

  const fields = asset.fields as AssetFields | undefined;
  return fields?.description || fields?.title || "";
}
