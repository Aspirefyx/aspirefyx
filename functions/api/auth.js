export async function onRequest(context) {
  // Hard-coding your Client ID to ensure there is no mismatch
  const client_id = "Ov23liYaLNWQZRYXvED"; 

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", client_id);
  url.searchParams.set("scope", "repo,user");
  
  // This redirect tells GitHub which app is asking for permission
  return Response.redirect(url.href, 302);
}
