// ==== Privacy & Security Hardened Firefox Settings ====
// go to about:config
//look for profile folder -> open folder and place this file there
// === Resist Fingerprinting ===
user_pref("privacy.resistFingerprinting", true);

// === Cookies & Tracking ===
user_pref("network.cookie.cookieBehavior", 1); // 1 = block 3rd-party cookies
user_pref("network.cookie.lifetimePolicy", 2); // 2 = ask every time
user_pref("privacy.trackingprotection.enabled", true);

// === Referer Control ===
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// === Disable Telemetry & Data Collection ===
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// === WebRTC / IP Leak Prevention ===
user_pref("media.peerconnection.enabled", false);

// === Geolocation ===
user_pref("geo.enabled", false);
user_pref("browser.search.geoip.url", "");

// === Prefetching & Caching ===
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);

// === Web Notifications ===
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.push.enabled", false);

// === Telemetry & Studies ===
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("experiments.enabled", false);
user_pref("browser.discovery.enabled", false);

// === Misc ===
user_pref("browser.send_pings", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
