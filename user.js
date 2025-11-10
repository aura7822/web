// LibreWolf user.js - Privacy hardening + route through Tor SOCKS proxy
// Paste this file into your LibreWolf profile folder (user.js)

// === Privacy & fingerprinting protections ===
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.partition.network_state", true);

user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("network.cookie.lifetimePolicy", 2); // delete on close
user_pref("network.cookie.cookieBehavior", 1);  // block third-party cookies

user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("webgl.disabled", true);
user_pref("canvas.poisondata", true);

user_pref("geo.enabled", false);
user_pref("media.peerconnection.enabled", false); // WebRTC off
user_pref("dom.battery.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("dom.push.enabled", false);

user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.IDN_show_punycode", true);

user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("layout.css.font-visibility.private", 1);
user_pref("browser.display.use_document_fonts", 0);

user_pref("dom.indexedDB.enabled", false);
user_pref("dom.storage.enabled", false);

user_pref("dom.maxHardwareConcurrency", 2);

// === Tor SOCKS proxy settings (use if Tor is running locally on 127.0.0.1:9050) ===
user_pref("network.proxy.type", 1);                // 1 = manual proxy
user_pref("network.proxy.socks", "127.0.0.1");
user_pref("network.proxy.socks_port", 9050);
user_pref("network.proxy.socks_version", 5);
user_pref("network.proxy.socks_remote_dns", true); // resolve DNS over SOCKS
user_pref("network.proxy.no_proxies_on", "");      // use proxy for all hosts

// === Additional recommended safeguards ===
user_pref("privacy.reduceTimerPrecision", true);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter", 0.01);

// Optional: prevent searchable plugin list from being exposed
user_pref("plugin.state.flash", 0);
