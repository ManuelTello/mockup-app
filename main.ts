import { serve } from "https://deno.land/std@0.173.0/http/mod.ts";

const handler = (req: Request): Response => {
    return new Response(null, { status: 200 });
};

serve(handler,{port:8080});