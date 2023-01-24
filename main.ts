const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn): Promise<void> {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    console.log(requestEvent);

    if (requestEvent.request.url == "http://localhost:8080/users") {
      requestEvent.respondWith(new Response("[{'a':'a'}]", { status: 200 }));
    } else {
      requestEvent.respondWith(new Response("Not founds", { status: 404 }));
    }
  }
}