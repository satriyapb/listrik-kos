// Konfigurasi Supabase untuk app Listrik Kos.
// Key di bawah adalah "publishable key" (memang dirancang untuk dipakai di browser).
window.APP_CONFIG = {
  SUPABASE_URL: "https://lsaoaajbuwkfnvyzynew.supabase.co",
  SUPABASE_KEY: "sb_publishable_E93KNKLKeyRIqZlSwL3ZRQ_ulgQGw4p",
  // Dipakai kalau belum ada data topup. Rp per kWh (dari Rp200rb = 144,5 kWh).
  DEFAULT_RP_PER_KWH: 1384
};