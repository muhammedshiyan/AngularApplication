const baseApiUrl = 'https://localhost:7108/api';

export const environment = {
  production: false,

  // ✅ Base URL
  baseApiUrl,
  apiUrlusers: `${baseApiUrl}/users`,
  apiUrlconfig: `${baseApiUrl}/config`,
  // ✅ Commonly used project-wide constants
  appName: 'My Angular App',
  defaultLanguage: 'en',
  dateFormat: 'YYYY-MM-DD',

  // ✅ Feature flags
  enableLogging: true,
  enableDebugTools: true,

  // ✅ Pagination defaults
  pageSize: 10,
  maxPageSize: 100,

  // ✅ External APIs
  authApi: `${baseApiUrl}/auth`,
  getUsersApi: `${baseApiUrl}/users`,   // ⬅️ use lowerCamelCase for consistency
  fileUploadApi: `${baseApiUrl}/files`,

  // ✅ Security
  tokenKey: 'app_token',
  refreshTokenKey: 'app_refresh_token',

  // ✅ Other
  retryAttempts: 3,
  timeout: 5000
};
