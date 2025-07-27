import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

let supabaseClient: any = null;

export const createSupabaseClient = (configService: ConfigService) => {
  if (supabaseClient) {
    return supabaseClient;
  }

  const supabaseUrl = configService.get<string>('supabase.url');
  const supabaseKey = configService.get<string>('supabase.key');

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'SUPABASE_URL and SUPABASE_ANON_KEY must be defined in environment variables',
    );
  }

  supabaseClient = createClient(supabaseUrl, supabaseKey);
  return supabaseClient;
};

const supabase = {
  from: () => {
    throw new Error(
      'Supabase client not initialized. Use createSupabaseClient() first.',
    );
  },
};

export default supabase;
