// Utility function to resolve asset paths with PUBLIC_URL prefix
export const getAssetPath = (file) => {
  return `${process.env.PUBLIC_URL}/assets/${file}`;
};