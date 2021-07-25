const prefixFileUrlWithBackendUrl = fileURL => {
  return !!fileURL && fileURL.startsWith('/') ? `${siapi.backendURL}${fileURL}` : fileURL;
};

export default prefixFileUrlWithBackendUrl;
