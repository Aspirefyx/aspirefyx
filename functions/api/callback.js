export async function onRequest(context) {
  const code = new URL(context.request.url).searchParams.get("code");
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "content-type": "application/json", "accept": "application/json" },
    body: JSON.stringify({
      client_id: context.env.GITHUB_CLIENT_ID,
      client_secret: context.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const result = await response.json();
  const html = `<!DOCTYPE html><html><body><script>
    window.opener.postMessage('authorization:github:success:${JSON.stringify({token: result.access_token, provider: "github"})}', "*");
  </script></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html" } });
}
