// config/plugins.ts
export default ({ env }) => ({
    graphql: {
      enabled: true,
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        // Sandbox (landing page) is ON by default in non-prod; OFF in prod.
        // If you *must* enable it in prod (not recommended), set:
        // landingPage: true,
      },
    },
  });