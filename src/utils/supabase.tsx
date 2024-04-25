import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://jzolbinpcnpssivunvag.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6b2xiaW5wY25wc3NpdnVudmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MTQzNzAsImV4cCI6MjAyOTQ5MDM3MH0.2VO_a52hcvjFEN-3iAqWkqKVy51Yisr3EWWzyPytGh8'
);

export default supabase;
