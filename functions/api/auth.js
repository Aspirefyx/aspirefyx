export async function onRequest(context) {
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", context.env.GITHUB_CLIENT_ID);
  url.searchParams.set("scope", "repo,user");
  return Response.redirect(url.href, 302);
}
