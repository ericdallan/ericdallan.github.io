const translations = {
  en: {
    // Header
    tag: "Technical Portfolio",
    subtitle:
      "Full Stack Developer — External Audit<br>PT. Integrasindo Multi Kreasi — 2025–Present",
    "link-company": "🌐 Company Profile",
    "link-gdrive": "📁 System Analyst Portfolio",
    // Nav
    "nav-demos": "Live Demo",
    "nav-sync": "POS Sync Engine",
    "nav-wac": "WAC Inventory",
    "nav-licensing": "Licensing Ecosystem",
    "nav-desktop": "Hybrid Desktop",
    "nav-analyst": "System Analyst",
    // Live Demo section
    "demo-label": "Live Applications",
    "demo-title": "Try the Apps — Live Demo",
    "akun-tag": "Accounting App",
    "akun-title": "inni Akun Digi",
    "akun-desc":
      "Full-featured accounting application for business financial management — vouchers, general ledger, P&L reports, and more.",
    "pos-tag": "Point of Sale",
    "pos-title": "inni POS",
    "pos-desc":
      "Modern cashier system — fast transactions, multi-payment methods, complete sales reports, and stock management.",
    "full-tag": "Full Version",
    "full-title": "Accounting + POS<br>Integrated",
    "full-desc":
      "Complete business ecosystem — POS transactions automatically posted to accounting journals without manual input.",
    // Case 1
    "c1-label": "System Integration",
    "c1-problem":
      "POS transactions and accounting records lived in separate systems. Journal entries were created manually by staff, creating a high risk of human error, data inconsistency, and time-consuming reconciliation at month-end.",
    "c1-built":
      "A synchronization engine that listens to completed POS transactions and automatically converts them into double-entry accounting journal entries — debit, credit, and all related accounts — without any human intervention.",
    "c1-challenge":
      "<strong>Race condition</strong> — multiple transactions fired simultaneously caused duplicate or partial journal entries. Solved using database-level locking combined with transaction rollback, ensuring each sync operation is atomic and idempotent.",
    // Case 2
    "c2-label": "Inventory Engineering",
    "c2-problem":
      "Inventory asset values were static and not recalculated when new stock arrived at different prices. This caused inaccurate COGS (Cost of Goods Sold) reports and unreliable balance sheets, which is a critical issue for financial compliance.",
    "c2-built":
      "A real-time inventory valuation system using the Weighted Average Cost (WAC) method. Every incoming Purchase transaction automatically recalculates the average unit cost across all existing stock, keeping asset values accurate at all times.",
    "c2-challenge":
      "Ensuring <strong>returns are handled correctly</strong> — a Purchase Return must reverse the WAC recalculation proportionally, not just subtract quantity. Required careful handling of floating-point precision to prevent rounding errors accumulating over hundreds of transactions.",
    // Case 3
    "c3-label": "Product Security",
    "c3-problem":
      "The company's POS and Accounting software was distributed to clients with no mechanism to prevent unauthorized copying or redistribution. There was also no internal tooling to manage, track, or audit which clients had been issued licenses — everything was manual.",
    "c3-built":
      "A two-part licensing ecosystem: (1) a <strong>License Generator Web App</strong> — a secured internal admin tool for issuing, managing, and exporting license keys per client, and (2) a <strong>middleware-based verification layer</strong> embedded inside every distributed desktop application that validates the license on startup and blocks unauthorized access.",
    "c3-challenge":
      "The license key must be <strong>client-specific and non-transferable</strong> — a key for Client A cannot work on Client B's machine. Solved by encoding device/client-specific parameters into the key, verified by the middleware on every app launch. The generator app itself is additionally secured with <strong>OTP two-factor authentication</strong> to prevent unauthorized key issuance.",
    "c3-featureset": "License Generator App — Feature Set",
    // Case 4
    "c4-label": "Software Architecture",
    "c4-problem":
      "Clients needed to run POS and Accounting software in locations with unreliable or no internet access. The application was built as a web app (Laravel), but clients expected a traditional desktop installation experience — not a local server setup. Additionally, each installed copy needed to be license-controlled so it couldn't be freely copied between machines.",
    "c4-built":
      "A hybrid packaging pipeline that bundles the Laravel web application, a local PHP server (Laragon-based), and the database into a single Windows installer (.exe). Each installer ships with an embedded license middleware — so the app validates its license key on every launch before granting access. Clients install it like any desktop app: double-click, next, finish.",
    "c4-challenge":
      "Managing <strong>4 product modules</strong> (Basic, Full, Retail, Manufacturing) each with different feature sets, database schemas, and license tiers — all needing independent installers without code duplication. Solved with a shared core codebase, module-level feature flags, and separate DB migration sets per module. Each module's installer also embeds its own license validation scope.",
    // SA section
    "sa-label": "System Analyst Portfolio",
    "sa-title": "Analysis & Design Projects",
    "sa-subtitle":
      "Requirement analysis, system design, UML modeling, and digital solution blueprinting for various business domains.",
    "sa-gdrive": "📁 View Full System Analyst Portfolio on Google Drive ↗",
    // Connect
    "connect-label": "Connect",
    "connect-title": "Get in Touch",
    "connect-gdrive": "System Analyst Portfolio",
    "connect-company": "Company Profile",
    // Footer
    footer: "© 2025 Subagja Eric Dallan · Cianjur, Jawa Barat, Indonesia",
    // Demo feat badges
    "feat-balance-sheet": "Balance Sheet",
    "feat-ar-ap": "AR &amp; AP",
    "feat-stock-prod": "Stock &amp; Production",
    "feat-multi-wh": "Multi-Warehouse",
    "feat-sales-return": "Sales Return",
    "feat-cashflow": "Cash Flow Report",
    // Result metric labels — case 1
    "m1-1": "Data discrepancy between POS &amp; accounting",
    "m1-2": "Journal entries automated, zero manual input",
    "m1-3": "Month-end reconciliation time drastically reduced",
    // Result metric labels — case 2
    "m2-1": "Asset value updated on every transaction",
    "m2-2": "Transaction types handled (buy, sell, return×2)",
    "m2-3": "Compliant with standard accounting principles",
    // Result metric labels — case 3
    "m3-1": "Separate apps: Generator + Verifier middleware",
    "m3-2": "Unique, non-transferable license keys",
    "m3-3": "Export formats: CSV, Excel, PDF",
    // Result metric labels — case 4
    "m4-1": "Independent installers, one per product module",
    "m4-2": "Fully operational without internet connection",
    "m4-3": "Each copy tied to a specific client device",
    // SA Cards
    "sa1-label": "Project 01 · Internship — PT. Jasamarga Related Business",
    "sa1-title": "Digital Ad Booking System",
    "sa1-desc":
      "A digital platform for booking and managing advertising slots for PT. Jasa Marga Related Business. Automates the booking process, price negotiation, survey scheduling, and online payment that were previously handled manually.",
    "sa2-label": "Project 02 · Doc District",
    "sa2-title": "Village Document Submission System",
    "sa2-desc":
      "A digital platform for online submission of official village documents. Replaces slow manual processes, allows residents to submit documents from anywhere, and provides real-time status tracking to reduce village staff workload.",
    "sa3-label": "Project 03 · Elaeis — PT. Inti Indosawit Subur",
    "sa3-title": "Palm Oil E-Commerce System",
    "sa3-desc":
      "A B2B e-commerce platform for selling palm oil products from PT. Inti Indosawit Subur. Expands market reach online with a complete product catalog, multi-payment methods, real-time order tracking, and a sales analytics dashboard.",
    "sa4-label": "Project 04 · Final Project — Telkom University",
    "sa4-title": "Babagi Travel — Umrah Travel Agency Crowdsourcing",
    "sa4-desc":
      "A crowdsourcing app to help prospective Umrah pilgrims choose trusted travel agencies from thousands of listings registered in the Ministry of Religious Affairs' SIMPU database. Features integrated data verification via the Kemenag API, package comparison, and community reviews. Developed using the Iterative Incremental method — focused on the Verification Module.",
    "sa4-feat1": "SIMPU Kemenag Verification",
    "sa4-docs": "&#128193; Full Docs &#8599;",
    "lbl-problem": "Problem",
    "lbl-built": "What I Built",
    "lbl-flow": "Architecture Flow",
    "lbl-challenge": "Key Challenge",
    "lbl-stack": "Tech Stack",
    "lbl-result": "Result",
    "lbl-wac-formula": "WAC Formula",
    "lbl-tx-coverage": "Transaction Coverage",
    "lbl-sys-arch": "System Architecture",
    "lbl-license-flow": "License Flow Inside Desktop App",
    "lbl-pkg-pipeline": "Packaging Pipeline",
  },
  id: {
    tag: "Portofolio Teknis",
    subtitle:
      "Full Stack Developer — Audit Eksternal<br>PT. Integrasindo Multi Kreasi — 2025–Sekarang",
    "link-company": "🌐 Profil Perusahaan",
    "link-gdrive": "📁 Portfolio Analis Sistem",
    "nav-demos": "Demo Langsung",
    "nav-sync": "POS Sync Engine",
    "nav-wac": "Harga Rata-rata Stok",
    "nav-licensing": "Sistem Lisensi",
    "nav-desktop": "Desktop Offline",
    "nav-analyst": "Analis Sistem",
    "demo-label": "Coba Langsung",
    "demo-title": "Aplikasi Siap Pakai — Demo Gratis",
    "akun-tag": "Aplikasi Akuntansi",
    "akun-title": "inni Akun Digi",
    "akun-desc":
      "Aplikasi keuangan bisnis lengkap — catat voucher, lihat buku besar, laporan laba rugi, dan masih banyak lagi.",
    "pos-tag": "Kasir (POS)",
    "pos-title": "inni POS",
    "pos-desc":
      "Sistem kasir yang simpel tapi powerful — transaksi cepat, bisa bayar QRIS atau e-wallet, laporan penjualan otomatis, dan manajemen stok.",
    "full-tag": "Versi Lengkap",
    "full-title": "Akuntansi + Kasir<br>Terhubung Otomatis",
    "full-desc":
      "Paket bisnis all-in-one — setiap transaksi di kasir langsung masuk ke jurnal akuntansi. Nggak perlu input ulang.",
    "c1-label": "Integrasi Sistem",
    "c1-problem":
      "Data kasir dan data akuntansi tersimpan di dua sistem yang berbeda. Staf harus input jurnal keuangan secara manual setiap ada transaksi — rawan salah ketik, data nggak sinkron, dan rekap akhir bulan jadi pekerjaan besar.",
    "c1-built":
      'Saya bikin sistem yang otomatis "membaca" setiap transaksi kasir yang selesai, lalu langsung mengubahnya jadi jurnal akuntansi double-entry (debit & kredit) — tanpa perlu ada yang input manual sama sekali.',
    "c1-challenge":
      "<strong>Race condition</strong> — kalau banyak transaksi masuk barengan, bisa terjadi jurnal ganda atau jurnal yang isinya cuma setengah. Solusinya: setiap proses dikunci dulu di level database, dan kalau ada yang gagal di tengah jalan, semua dibatalkan dan diulang dari awal.",
    "c2-label": "Manajemen Stok",
    "c2-problem":
      "Nilai stok di sistem nggak pernah diupdate waktu ada barang masuk dengan harga beda. Akibatnya laporan HPP (Harga Pokok Penjualan) jadi nggak akurat, dan neraca keuangan nggak bisa diandalkan.",
    "c2-built":
      "Sistem yang otomatis hitung ulang harga rata-rata stok setiap ada pembelian baru. Jadi kalau beli barang dengan harga berbeda-beda, sistem selalu tahu berapa harga rata-rata stok saat ini — dan laporan keuangan pun tetap akurat.",
    "c2-challenge":
      "Bagian paling tricky-nya adalah <strong>retur pembelian</strong> — harga rata-rata harus dikembalikan secara proporsional, bukan asal kurangi jumlah barang. Butuh kalkulasi yang presisi supaya nggak ada kesalahan pembulatan yang menumpuk lama-lama.",
    "c3-label": "Keamanan Software",
    "c3-problem":
      "Software kasir dan akuntansi yang dibagikan ke klien bisa dicopy bebas ke komputer lain. Nggak ada kontrol sama sekali — siapa yang punya software, bisa pakai di mana saja. Belum lagi nggak ada catatan klien mana yang sudah dapat lisensi.",
    "c3-built":
      "Saya bikin dua hal sekaligus: (1) <strong>Aplikasi khusus untuk generate lisensi</strong> — dipakai tim internal untuk bikin dan kelola kunci lisensi per klien, lengkap dengan fitur ekspor dan log aktivitas. (2) <strong>Sistem verifikasi yang tertanam di aplikasi klien</strong> — setiap kali aplikasi dibuka, otomatis dicek apakah lisensinya valid di komputer itu.",
    "c3-challenge":
      "Kunci lisensinya harus <strong>terikat ke komputer klien tertentu</strong> — jadi kunci milik Klien A nggak bisa dipakai di komputer Klien B. Ini diselesaikan dengan cara menyisipkan identitas perangkat ke dalam kunci lisensi. Aplikasi generate lisensinya juga dilindungi OTP biar nggak sembarangan orang bisa bikin kunci baru.",
    "c3-featureset": "Fitur Aplikasi Generate Lisensi",
    "c4-label": "Packaging Software",
    "c4-problem":
      "Banyak klien yang tokonya di lokasi tanpa internet stabil — tapi butuh aplikasi kasir dan akuntansi yang tetap bisa jalan. Aplikasinya dibangun pakai Laravel (berbasis web), tapi klien maunya bisa install seperti software biasa, bukan harus setup server sendiri.",
    "c4-built":
      'Saya "kemas" aplikasi Laravel beserta server PHP lokal dan database-nya jadi satu file installer Windows (.exe). Klien tinggal klik dua kali, install seperti biasa, dan aplikasinya langsung bisa jalan — tanpa internet, tanpa konfigurasi teknis. Di dalamnya sudah termasuk sistem cek lisensi yang otomatis berjalan setiap aplikasi dibuka.',
    "c4-challenge":
      "Ada <strong>4 varian produk</strong> (Basic, Full, Retail, Manufacturing) yang masing-masing punya fitur dan database berbeda — tapi semuanya harus jadi installer yang berdiri sendiri tanpa copy-paste kode. Solusinya: satu codebase inti, fitur diaktifkan lewat flag, dan tiap varian punya skema database-nya sendiri.",
    "sa-label": "Portfolio Analis Sistem",
    "sa-title": "Proyek Analisis & Desain Sistem",
    "sa-subtitle":
      "Mulai dari riset kebutuhan, desain alur sistem, pemodelan UML, sampai rancangan solusi digital untuk berbagai kebutuhan bisnis.",
    "sa-gdrive": "📁 Lihat Portfolio Lengkap di Google Drive ↗",
    "connect-label": "Kontak",
    "connect-title": "Hubungi Saya",
    "connect-gdrive": "Portfolio Analis Sistem",
    "connect-company": "Profil Perusahaan",
    footer: "© 2025 Subagja Eric Dallan · Cianjur, Jawa Barat, Indonesia",
    // Demo feat badges
    "feat-balance-sheet": "Neraca Keuangan",
    "feat-ar-ap": "Piutang &amp; Hutang",
    "feat-stock-prod": "Stok &amp; Produksi",
    "feat-multi-wh": "Multi-Gudang",
    "feat-sales-return": "Retur Penjualan",
    "feat-cashflow": "Laporan Arus Kas",
    // Result metric labels — case 1
    "m1-1": "Tidak ada perbedaan data antara POS &amp; akuntansi",
    "m1-2": "Jurnal otomatis 100%, tanpa input manual",
    "m1-3": "Waktu rekonsiliasi akhir bulan berkurang drastis",
    // Result metric labels — case 2
    "m2-1": "Nilai aset diperbarui di setiap transaksi",
    "m2-2": "Jenis transaksi yang ditangani (beli, jual, retur×2)",
    "m2-3": "Sesuai standar prinsip akuntansi",
    // Result metric labels — case 3
    "m3-1": "Dua aplikasi terpisah: Generator + Middleware verifikasi",
    "m3-2": "Kunci lisensi unik, tidak bisa dipindah antar klien",
    "m3-3": "Format ekspor: CSV, Excel, PDF",
    // Result metric labels — case 4
    "m4-1": "Installer terpisah untuk setiap modul produk",
    "m4-2": "Berjalan penuh tanpa koneksi internet",
    "m4-3": "Setiap salinan terkunci ke perangkat klien tertentu",
    // SA Cards
    "sa1-label": "Project 01 · Magang — PT. Jasamarga Related Business",
    "sa1-title": "Sistem Pemesanan Iklan Digital",
    "sa1-desc":
      "Platform digital untuk pemesanan dan pengelolaan slot iklan PT. Jasa Marga Related Business. Mengotomatisasi proses pemesanan, negosiasi harga, penjadwalan survei, dan pembayaran online yang sebelumnya dilakukan secara manual.",
    "sa2-label": "Project 02 · Doc District",
    "sa2-title": "Sistem Informasi Pengajuan Dokumen Desa",
    "sa2-desc":
      "Platform digital untuk pengajuan dokumen resmi desa secara online. Menggantikan proses manual yang lambat, memungkinkan warga mengajukan dokumen dari mana saja, dan menyediakan pelacakan status real-time untuk mengurangi beban kerja staf desa.",
    "sa3-label": "Project 03 · Elaeis — PT. Inti Indosawit Subur",
    "sa3-title": "Sistem E-Commerce Minyak Sawit",
    "sa3-desc":
      "Platform e-commerce B2B untuk penjualan produk minyak sawit PT. Inti Indosawit Subur. Memperluas jangkauan pasar secara online dengan katalog produk lengkap, multi-metode pembayaran, pelacakan pesanan real-time, dan dashboard analitik penjualan.",
    "sa4-label": "Project 04 · Tugas Akhir — Universitas Telkom",
    "sa4-title": "Babagi Travel — Crowdsourcing Pemilihan Travel Umrah",
    "sa4-desc":
      "Aplikasi crowdsourcing untuk membantu calon jamaah Umrah memilih biro travel terpercaya dari ribuan pilihan yang terdaftar di SIMPU Kemenag. Sistem verifikasi data terintegrasi API Kemenag, perbandingan paket, dan review komunitas. Dikembangkan menggunakan metode Iterative Incremental — fokus pada Modul Verifikasi.",
    "sa4-feat1": "Verifikasi SIMPU Kemenag",
    "sa4-docs": "&#128193; Dokumen Lengkap &#8599;",
    "lbl-problem": "Masalahnya",
    "lbl-built": "Yang Saya Buat",
    "lbl-flow": "Alur Sistem",
    "lbl-challenge": "Tantangan Terbesar",
    "lbl-stack": "Teknologi yang Dipakai",
    "lbl-result": "Hasilnya",
    "lbl-wac-formula": "Rumus WAC",
    "lbl-tx-coverage": "Jenis Transaksi yang Ditangani",
    "lbl-sys-arch": "Alur Arsitektur",
    "lbl-license-flow": "Alur Cek Lisensi di Aplikasi",
    "lbl-pkg-pipeline": "Proses Packaging",
  },
};
