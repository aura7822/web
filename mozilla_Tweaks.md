Setting:	                                Value:         Purpose:
                                	
privacy.resistFingerprinting	                true	Masks window size, user agent, timezone, fonts, etc.
privacy.resistFingerprinting.letterboxing	true	Adds gray borders to normalize window dimensions.
privacy.trackingprotection.enabled	        true    Enables built-in tracking protection.
privacy.firstparty.isolate	                true    Isolates cookies, cache, and storage per domain (like Tor).
privacy.partition.network_state	                true    Prevents shared connections across sites.
privacy.clearOnShutdown.cookies	                true	Clears cookies on exit.
network.cookie.cookieBehavior	                 1	Blocks third-party cookies.
dom.event.clipboardevents.enabled	        false   Prevents sites from detecting clipboard actions.
dom.gamepad.enabled	                        false	Blocks gamepad APIs used in fingerprinting.
dom.webaudio.enabled	                        false   Blocks WebAudio fingerprinting.
webgl.disabled	                                true	Blocks WebGL entirely.
canvas.poisondata	                        true	Adds noise to canvas fingerprinting.
geo.enabled	                                false	Disables geolocation.
media.peerconnection.enabled	                false	Disables WebRTC (IP leak prevention).
dom.battery.enabled	                        false	Blocks battery API leaks.
dom.telephony.enabled	                        false	Stops mobile number API access.
dom.push.enabled	                        false	Blocks push notifications.
browser.safebrowsing.malware.enabled	        false	Avoids Google connections.
browser.safebrowsing.downloads.enabled	        false	Same reason — no Google download pings.
network.http.referer.XOriginPolicy	         2	Blocks cross-site referrers.
network.http.referer.trimmingPolicy	         2	Trims referrer info.
network.IDN_show_punycode	                true	Prevents homograph phishing (fake domains).
gfx.downloadable_fonts.enabled                  false
layout.css.font-visibility.private               1
webgl.disabled                                  true
dom.indexedDB.enabled                           false
dom.storage.enabled                             false
dom.maxHardwareConcurrency                       2
network.cookie.lifetimePolicy                    2
__________________________________________________________________________________________________________________________________________________________________________


	                
Extension:	               Purpose:   	                                  Settings to tweak:
	                 	                                   
uBlock Origin	        Blocks trackers, ads, cryptominers.	                   Add extra filter lists: EasyPrivacy, Peter Lowe’s, Fanboy’s Enhanced Tracking.
CanvasBlocker	        Masks canvas, audio, and DOM fingerprinting.	           Mode: Block everything; add noise randomization.
NoScript	        Blocks all JavaScript by default.	                   Allow scripts only for sites you explicitly trust.
Decentraleyes	        Replaces CDN requests with local resources.	           Auto mode: Enabled.
Temporary Containers	Auto-isolates every tab in its own container (like Tor).   Set to auto-delete containers on close.

____________________________________________________________________________________________________________________________________________________________________________

Route all LibreWolf traffic through Tor :
	       `sudo dnf install tor
		sudo systemctl start tor`
		
LibreWolf ➪ settings ➪ General ➪ NetworkSettings ➪ ManualProxyConfiguration
Set : ✓ SOCKS Host 127.0.0.1
      ✓ PORT 9050
      
🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚🝚
