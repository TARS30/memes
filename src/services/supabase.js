import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qclosokaexnazigdyyqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbG9zb2thZXhuYXppZ2R5eXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMzc3MTAsImV4cCI6MjAxMzgxMzcxMH0._HVc8if4JZ3NXgcApKPM9kP4wsPQjtghlTGo4H_Q11I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
