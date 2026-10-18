# Portfolio - Network Infrastructure, Observability & Automation

> Contoh materi portfolio publik. Skala operasional dinyatakan secara umum untuk membatasi pengungkapan detail infrastruktur. Peran menggambarkan kontribusi, bukan jabatan formal. Status rencana dan pengembangan tetap dicantumkan.

## About

Saya membantu tim operasional membangun dan mengelola **network infrastructure untuk lingkungan multi-site** agar lebih reliable, observable, secure, dan mudah diotomasi. Fokus saya mencakup konektivitas antara branch dan head office, remote access, observability, virtualization, serta internal tooling untuk Network Operations.

Saya terbiasa bekerja dari on-site troubleshooting hingga merancang sistem pendukung operasional, termasuk MikroTik network, WireGuard, wireless infrastructure, virtualization, monitoring, inventory, dan automation menggunakan Proxmox, Prometheus, NetBox, Ansible, serta n8n. Dalam setiap solusi, saya mengutamakan visibility, access control, documentation, dan implementasi yang realistis untuk kebutuhan tim.

## Operational Scale

Saat ini, saya mengelola dan memelihara infrastruktur jaringan yang tersebar di **ratusan site/branch**, mencakup **ratusan router MikroTik**, **ratusan wireless access point**, dan **ratusan managed switch** dari Huawei, Ruijie, Aruba, dan UniFi.

Untuk konektivitas antar-site dan remote access, saya mengelola **beberapa VPN server** di AWS dan on-premise environment yang menjalankan WireGuard dan Tailscale, dengan **ribuan peer** serta koneksi multi-site ke seluruh cabang. Saya juga mengelola **beberapa Proxmox server** yang menjalankan **puluhan production VM** untuk mendukung layanan internal.

## Core Skills

- **Network Infrastructure:** jaringan multi-site, routing, firewall, VLAN, VPN, wireless, dan troubleshooting konektivitas
- **Systems & Virtualization:** administrasi Linux, virtualisasi, container, storage, dan layanan internal
- **Monitoring & Observability:** monitoring perangkat dan layanan, dashboard, alerting, logging, serta analisis gangguan
- **Automation & Integration:** otomasi pekerjaan operasional, integrasi API, workflow, scripting, dan bot internal
- **Infrastructure Documentation:** inventaris perangkat, IPAM/DCIM, backup konfigurasi, dokumentasi topologi, dan handover
- **Internal Tools:** perancangan dan pengembangan aplikasi internal berbantuan AI untuk mendukung Network Operations

## Project Highlights

### Multi-Site VPN Infrastructure

**Status:** Active

Infrastruktur VPN yang menghubungkan kantor pusat, server, dan seluruh cabang untuk mendukung operasi jaringan, akses jarak jauh, serta pengelolaan CCTV secara terpusat.

- **Contribution:** Membangun VPN server dari nol, merancang large-scale configuration rollout, serta mengelola server, peer, routing, dan connectivity troubleshooting.
- **Implementation:** WireGuard dan Tailscale deployment, NAT, firewall, route recovery, serta peer lifecycle management.
- **Scale:** **beberapa VPN servers**, **ribuan peers**, dan **ratusan branches**.
- **Outcome:** Akses antar-site dan CCTV dapat dikelola secara terpusat melalui VPN infrastructure di AWS dan on-premise environment.
- **Tech Stack:** WireGuard, Tailscale, MikroTik RouterOS, AWS, dan Ubuntu

### Multi-Site Network & Infrastructure Monitoring

**Status:** Active & continuously developed

Monitoring availability untuk memberikan visibilitas awal terhadap kondisi server POS lokal, router, koneksi VPN, dan jalur ISP di seluruh cabang. Sistem ini dibangun untuk membantu pemantauan infrastruktur yang tersebar di ratusan lokasi, termasuk koneksi broadband tanpa IP publik.

- **Challenge:** Memastikan availability **ratusan local POS server berbasis Windows 11**, router, dan koneksi multi-ISP di setiap site. Banyak koneksi menggunakan broadband service tanpa public IP sehingga network visibility menjadi terbatas.
- **Contribution:** Membangun lightweight monitoring system menggunakan Gatus dan ICMP untuk memantau endpoint secara terpusat tanpa mengambil alih server management.
- **Implementation:** Menyusun dan memelihara ICMP health check untuk POS server, router, VPN connection, dan ISP link di setiap branch.
- **Scale:** **ratusan sites/branches**, **ratusan POS servers**, **ratusan routers**, dan **ratusan ISP connections**, dengan total **ratusan monitored endpoints**.
- **Observability pilot:** Menerapkan Prometheus, Grafana, dan Loki di office environment dengan jumlah user, bandwidth usage, dan kebutuhan operasional yang lebih tinggi.
- **Development stage:** Mengevaluasi hasil pilot dan local data collection strategy sebelum memperluas logging ke seluruh site. Centralized monitoring melalui WAN berisiko menghasilkan metric gaps ketika koneksi terputus meskipun hanya beberapa detik.
- **Outcome:** Mempermudah identifikasi awal terhadap server yang sering offline, VPN connection yang terputus, serta gangguan router atau ISP melalui satu monitoring view.
- **Tech Stack:** Gatus, ICMP, Prometheus, Grafana, Loki, MikroTik RouterOS, Windows 11, dan multi-site VPN

### Proxmox Infrastructure for Staging & Production

**Status:** Active

Infrastruktur virtualisasi yang bermula dari inisiatif memanfaatkan kembali perangkat bare metal yang tidak terpakai sebagai alternatif atas biaya cloud server. Setelah digunakan untuk kebutuhan pribadi dan pengujian awal, server ini berkembang untuk memenuhi kebutuhan staging tim development hingga menjalankan layanan production.

- **Contribution:** Menginisiasi dan membangun Proxmox environment dari nol, menyiapkan VM untuk development team, serta mengembangkan kapasitasnya untuk kebutuhan staging dan production.
- **Implementation:** Instalasi dan pengelolaan Proxmox, VM provisioning, konfigurasi bridge dan internal subnet, storage check, backup, serta maintenance host dan layanan.
- **Scale:** **beberapa Proxmox servers** dengan **puluhan production VMs**.
- **Outcome:** Perangkat yang sebelumnya tidak terpakai berkembang menjadi infrastruktur internal aktif untuk mendukung staging dan production services, sekaligus mengurangi ketergantungan pada cloud server.
- **Tech Stack:** Proxmox VE, Linux, VM, LXC, Docker, dan networking

## Projects in Development

### Orbiv Meridian - NetOps Control Plane

**Status:** Design & development

Orbiv Meridian dirancang sebagai **NetOps control plane** yang menyatukan infrastructure inventory, service status, monitoring, automation, configuration backup, dan operational activity dalam satu interface.

- **Goal:** Mengurangi fragmentasi data dan tools yang digunakan untuk mengelola multi-site network infrastructure.
- **Initial scope:** Standardisasi dan migrasi inventory **puluhan sites** ke NetBox, mencakup data lokasi, devices, IP, ISP, POS, network, CCTV, status, serta supporting documentation.
- **Planned integrations:** NetBox sebagai source of truth, Ansible untuk automation, Oxidized untuk configuration backup, serta Gatus dan Prometheus untuk monitoring.
- **Progress:** Penyusunan PRD, arsitektur, integration specification, roadmap, user roles, dan audit foundation.
- **Tech Stack:** NetBox, Ansible, Oxidized, Gatus, Prometheus, Grafana, Loki, PostgreSQL, n8n, Telegram, dan Docker

### AI Agent for Network Operations

**Status:** In development

AI assistant internal yang dirancang untuk membantu tim Network Operations memahami masalah yang lebih kompleks, mengevaluasi hasil pekerjaan, dan mengubah data operasional menjadi reporting summary yang lebih ringkas dan mudah dibaca.

- **Goal:** Mempercepat proses analisis dan evaluasi tanpa menggantikan keputusan akhir dari operator.
- **Capabilities in development:** Menggabungkan konteks dari monitoring dan operational workflow, membantu mengidentifikasi kemungkinan root cause, mengevaluasi hasil pekerjaan berdasarkan playbook, serta menyusun report summary.
- **Approach:** Agentic engineering dengan tool and workflow integration melalui n8n serta private bot. Implementasi dimulai dari read-only access, environment isolation, credential restriction, dan operator approval sebelum tindakan sensitif.
- **Progress:** Baseline agent telah di-deploy, koneksi model dan bot tersedia, serta rancangan skills, playbook, akses SSH, dan pengelolaan credential sedang dikembangkan.
- **Tech Stack:** Hermes Agent, AI Router Gateway, n8n, Telegram, Discord, Docker, Ubuntu, SSH, dan Ansible Vault

### Multi-Site CCTV AI & Edge Analytics

**Status:** Rollout & development

Implementasi AI Box yang memanfaatkan infrastruktur CCTV untuk membantu otomasi absensi karyawan, meningkatkan akurasi analitik pengunjung, dan mendukung pemantauan keamanan di lingkungan multi-site.

- **Problem:** Proses attendance masih bergantung pada kedisiplinan karyawan sehingga berisiko terlupa atau disalahgunakan melalui buddy punching. Di sisi bisnis, data jumlah dan karakteristik pengunjung, dwell time, serta performa setiap site masih terbatas.
- **Operational goal:** Mengembangkan face recognition attendance untuk mengurangi kasus lupa absen dan fraud, dengan hasil yang tetap dapat di-review oleh tim terkait.
- **Business goal:** Menyediakan visitor analytics yang lebih akurat, termasuk estimasi visitor profile dan visual attributes, visitor count, serta dwell time untuk mendukung site evaluation dan promotion planning.
- **Security goal:** Membantu security team menerima indikasi terhadap individu dalam watchlist agar kejadian yang sebelumnya tidak terpantau dapat ditindaklanjuti lebih cepat.
- **Contribution:** Merencanakan dan menjalankan infrastructure rollout secara bertahap, mencakup kesiapan cameras, AI Box, rack, switch, uplink, UPS, ISP and VPN connectivity, serta device operations and maintenance.
- **Scale:** **puluhan sites/branches**, **ratusan AI Boxes**, dan **ratusan CCTV cameras**.
- **Challenge:** Menjaga availability dan configuration consistency ratusan perangkat, memastikan kualitas input camera, serta menyiapkan access control, result validation, dan biometric data governance.
- **Tech Stack:** IP camera, AI Box, face recognition, edge computing, switching, SFP+, UPS, dan multi-site network

### Centralized Firewall for Server Infrastructure

**Status:** Research & development

Pengembangan virtual security appliance berbasis OPNsense untuk memberikan lapisan proteksi dan kontrol akses yang lebih terpusat terhadap server yang dikelola.

- **Problem:** Existing firewall control masih tersebar dan belum dikelola secara terpusat, dengan proteksi yang mengandalkan native Linux firewall serta rules pada router.
- **Goal:** Menempatkan OPNsense sebagai security gateway antara transit network dan server subnet untuk mendukung firewall standardization, network segmentation, serta administrative access control.
- **Contribution:** Melakukan OPNsense deployment di Proxmox, mempelajari rule design dan traffic flow, serta menguji integrasi dengan MikroTik routing dan WireGuard.
- **Progress:** Akses administratif dan routing pada lingkungan uji telah berhasil dijalankan. Evaluasi rule, dokumentasi, dan kesiapan implementasi ke layanan yang lebih luas masih berlangsung.
- **Next step:** Menyusun firewall policy baseline, memetakan protected services, melakukan access rule testing, dan menyiapkan rollback procedure sebelum production deployment.
- **Tech Stack:** OPNsense, Proxmox, MikroTik RouterOS, WireGuard, firewall, dan static routing
