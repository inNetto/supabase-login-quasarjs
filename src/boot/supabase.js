import { createClient } from "@supabase/supabase-js";
import useAuthUser from "src/composables/UseAuthUser";

const supabaseUrl = "https://rnjhclxpooiddnubqhzd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuamhjbHhwb29pZGRudWJxaHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4NjMxNzcsImV4cCI6MTk3NzQzOTE3N30.bopDB8t7-9pfgB9uFDVa1ByxoGDJ4Zdt8Dv92aPZnyE";
const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();

  user.value = session?.user || null;
});

export default function useSupabase() {
  return { supabase };
}
