cp .env.example .env.local
pnpm run supabase:start
status_output=$(pnpm run supabase:status)
anon_key=$(echo "$status_output" | grep "anon key:" | awk '{print $3}')
service_role_key=$(echo "$status_output" | grep "service_role key:" | awk '{print $3}')
printf '\n' >> .env.local
echo "# Supabase" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=$anon_key" >> .env.local
echo "SUPABASE_SERVICE_ROLE_KEY=$service_role_key" >> .env.local