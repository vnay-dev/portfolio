const whatsappBlobBaseUrl = process.env.NEXT_PUBLIC_WHATSAPP_BLOB_BASE_URL?.trim();
const personalBlobBaseUrl = process.env.NEXT_PUBLIC_PERSONAL_BLOB_BASE_URL?.trim();
const tdbridgeBlobBaseUrl = process.env.NEXT_PUBLIC_TDBRIDGE_BLOB_BASE_URL?.trim();

const normalizedWhatsappBlobBaseUrl = whatsappBlobBaseUrl
  ? whatsappBlobBaseUrl.replace(/\/+$/, "")
  : "";
const normalizedPersonalBlobBaseUrl = personalBlobBaseUrl
  ? personalBlobBaseUrl.replace(/\/+$/, "")
  : "";
const normalizedTDBridgeBlobBaseUrl = tdbridgeBlobBaseUrl
  ? tdbridgeBlobBaseUrl.replace(/\/+$/, "")
  : "";

export const getWhatsAppAssetUrl = (assetName: string) => {
  const normalizedAssetName = assetName.replace(/^\/+/, "");

  if (!normalizedWhatsappBlobBaseUrl) {
    return `/images/whatsapp/${normalizedAssetName}`;
  }

  return `${normalizedWhatsappBlobBaseUrl}/images/whatsapp/${normalizedAssetName}`;
};

export const getPersonalAssetUrl = (assetName: string) => {
  const normalizedAssetName = assetName.replace(/^\/+/, "");

  if (!normalizedPersonalBlobBaseUrl) {
    return `/images/personal/${normalizedAssetName}`;
  }

  return `${normalizedPersonalBlobBaseUrl}/images/personal/${normalizedAssetName}`;
};

export const getTDBridgeAssetUrl = (assetName: string) => {
  const normalizedAssetName = assetName.replace(/^\/+/, "");

  if (!normalizedTDBridgeBlobBaseUrl) {
    return `/images/tdbridge/${normalizedAssetName}`;
  }

  return `${normalizedTDBridgeBlobBaseUrl}/images/tdbridge/${normalizedAssetName}`;
};
