// Connexion à la base de données Supabase.
// Si un jour tu changes de projet Supabase, c'est ici et seulement ici
// qu'il faut mettre à jour les deux valeurs.
const SUPABASE_URL = "https://vlvfuqpvzopehiumkxaj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qE7WR05qdPiR72Vk_vewSA_bNekMUmK";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
