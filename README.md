# Ihza Rafi Maulana

**Network Infrastructure · Observability · Automation**

I run network infrastructure for multi-site operations: branch-to-HQ connectivity, remote access, wireless, virtualization and monitoring. The work spans on-site troubleshooting to designing the systems a Network Operations team relies on every day, with a focus on visibility, access control, documentation, and solutions sized for the team that runs them.

Website: [rafi.web.id](https://rafi.web.id) · Email: [ihzarfm12@gmail.com](mailto:ihzarfm12@gmail.com)

---

## Operational scale

| At the branches | | Servers & VPN | |
|---|---|---|---|
| Sites / branches | **100+** | VPN servers (AWS + on-prem) | **5** |
| MikroTik routers | **100+** | VPN peers (WireGuard, Tailscale) | **1,000+** |
| Wireless access points | **500+** | Proxmox servers | **2** |
| Managed switches (Huawei, Ruijie, Aruba, UniFi) | **200+** | Production VMs | **20+** |

## Featured projects

### Multi-Site VPN Infrastructure for 100+ Branches · `Active`
VPN infrastructure linking head office, servers and every branch, used for network operations, remote access and centralized CCTV management.
- Built the VPN servers from scratch, designed a large-scale config rollout, and run the servers, peers, routing and troubleshooting.
- WireGuard and Tailscale, NAT, firewall, route recovery, peer lifecycle management.
- **5 VPN servers · 1,000+ peers · 100+ branches**, across AWS and on-prem.

`WireGuard` `Tailscale` `MikroTik RouterOS` `AWS` `Ubuntu`

### Multi-Site Network & Infrastructure Monitoring · `Active`
Availability monitoring for local POS servers, routers, VPN links and ISP lines across 100+ locations, including broadband links with no public IP.
- Lightweight monitoring on Gatus and ICMP that watches every endpoint from one place, without taking over server management.
- **400+ endpoints**: 100+ POS servers (Windows 11), 100+ routers, 200+ ISP links.
- Observability pilot with Prometheus, Grafana and Loki in the office environment. Next step is a local data-collection strategy, since centralized monitoring over WAN leaves metric gaps whenever a link drops.

`Gatus` `ICMP` `Prometheus` `Grafana` `Loki` `MikroTik RouterOS`

### Proxmox Infrastructure for Staging & Production · `Active`
Started as a way to reuse idle bare-metal hardware instead of paying for cloud servers. It grew from personal testing into the dev team's staging environment, and now runs production services.
- Built the environment from zero: VM provisioning, bridges and internal subnets, storage checks, backups, host maintenance.
- **2 Proxmox servers · 20+ production VMs**, with less reliance on cloud servers.

`Proxmox VE` `Linux` `LXC` `Docker`

## In the works

| Project | Status | Summary |
|---|---|---|
| **Orbiv Meridian**: NetOps control plane | Design & development | One interface for inventory, service status, monitoring, automation and config backup. Starting with migrating the inventory of 80+ sites into NetBox. Planned integrations: Ansible, Oxidized, Gatus, Prometheus. |
| **AI Agent for Network Operations** | In development | Internal assistant for root-cause analysis, reviewing work against playbooks, and report summaries. Read-only access, isolated environment, operator approval before anything sensitive. |
| **Multi-Site CCTV AI & Edge Analytics** | Rollout & development | AI Boxes on existing CCTV for face-recognition attendance, visitor analytics and watchlist alerts. Rollout across 80+ sites, 100+ AI Boxes, 300+ cameras. |
| **Centralized Firewall for Server Infrastructure** | Research & development | OPNsense on Proxmox as the security gateway between the transit network and server subnets. Admin access and routing work in the test environment. |

## Core skills

- **Network infrastructure**: multi-site routing, firewall, VLAN, VPN, wireless, connectivity troubleshooting
- **Systems & virtualization**: Linux, Proxmox, VM/LXC, Docker, OPNsense
- **Monitoring & observability**: Prometheus, Grafana, Loki, Gatus, Alertmanager, SNMP
- **Automation & integration**: Ansible, n8n, Bash, REST APIs, Telegram bots
- **Infrastructure documentation**: NetBox, IPAM/DCIM, Oxidized, topology docs, handovers
- **Internal tools**: AI-assisted apps for Network Operations

## Experience

[HW Group](https://new.hwgroup.id/) · [Duta Kalingga Pratama](https://www.sgp-dkp.com/) · [Quantum Tera Network](https://www.quantum.net.id/)

---

<sub>This repo is the source for [rafi.web.id](https://rafi.web.id), a static site served by GitHub Pages.</sub>
