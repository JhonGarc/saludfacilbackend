export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
  },
});
