self.addEventListener("fetch", (event) => {
  if (!(event.request.url.startsWith("https://cdn.jsdelivr.net") && event.request.url.includes(".html"))) {
    return false;
  }
  event.respondWith(async () => {
    const response = await fetch(event.request);
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Content-Type", "text/html; charset=utf-8");
    return new Response(response.body, {status: response.status, statusText: response.statusText, headers: newHeaders});
  });
  return true;
});
