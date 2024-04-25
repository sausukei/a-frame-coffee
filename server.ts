import { listenAndServe } from "https://deno.land/std@0.108.0/http/mod.ts";

const main = async () => {
  // fileを読み込み
  const body = await Deno.readTextFile("./index.html");

  listenAndServe(":8000", (req) => {
    if (req.url === "http://0.0.0.0:8000/") {
      return new Response(body, {
        status: 200,
        headers: new Headers({ "content-type": "text/html" }),
      });
    } 
  });
}

main()
