export async function onRequest(context) {
  const { env } = context;

  // This pulls the ID you saved in Cloudflare Settings
  const client_id = env.GITHUB_CLIENT_ID;

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", client_id);
  url.searchParams.set("scope", "repo,user");
  
  return Response.redirect(url.href, 302);
}
