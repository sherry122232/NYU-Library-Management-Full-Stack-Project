export const oktaConfig = {
    clientId : '0oa3t6g60rNJC3Lv2697',
    issuer: 'https://trial-1434309.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}