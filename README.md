# Çınar Suit · Rezervasyon paneli

Tek sayfalık resepsiyon paneli: boş oda arama, aylık tablo, günlük saat görünümü, kat görevlisi ekranı, fiyat ayarları.

- Kaynak: `public/index.html` (bağımlılık yok)
- Yayın: Cloudflare Workers (statik varlıklar), `main`'e her push'ta `npx wrangler deploy`
- Veri: şimdilik tarayıcının yerel hafızasında. Ayarlar → Yedeği indir ile her gün yedek alın. Supabase bağlantısı sonra eklenecek.
- Devir ile hiçbir bağı yoktur.
