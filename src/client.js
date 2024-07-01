import { createClient } from '@supabase/supabase-js';

const URL = 'https://spsrzrmshlcpwocrzrnj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwc3J6cm1zaGxjcHdvY3J6cm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNjM4NjksImV4cCI6MjAzNDgzOTg2OX0.ZhF4-RtMrJF16j-galQH9sgEkU5CdmWQPsyarldkX_4';
export const supabase = createClient(URL, API_KEY);