// Site geçici olarak kapalı. Panel dosyaları public/ içinde duruyor.
// Yeniden açmak için: wrangler.jsonc içinde "main" satırını kaldırıp "assets" bloğunu geri koy.
export default {
  async fetch() {
    return new Response("Bu sayfa kullanıma kapalı.", {
      status: 403,
      headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex", "cache-control": "no-store" },
    });
  },
};
