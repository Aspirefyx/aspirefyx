export async function onRequest(context) {
  const code = new URL(context.request.url).searchParams.get("code");
  
  // Replace the text below with your actual Client Secret from GitHub
  const client_id = "Ov23liYaLNWQZRYXvED";
  const client_secret = context.env.GITHUB_CLIENT_SECRET; 

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });

  const result = await response.json();
  
  // This script sends the token back to your CMS window
  const html = `
    <!DOCTYPE html>
    <html>
    <body>
      <script>
        const res = ${JSON.stringify({
          token: result.access_token,
          provider: "github",
        })};
        window.opener.postMessage('authorization:github:success:' + JSON.stringify(res), "*");
      </script>
    </body>
    </html>`;

  return new Response(html, { headers: { "content-type": "text/html" } });
}
