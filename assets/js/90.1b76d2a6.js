(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{556:function(e,t,r){"use strict";r.r(t);var s=r(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("Hyperion supports many different controllers and LED devices. Also network communication is possible, therefore we also support Philips Hue, WLED and more.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("In case your LED device is not working or shows as being disabled in the Dashboard or Remote Control,\ncheck Hyperion's log for errors first!")]),e._v(" "),r("p",[e._v('The error might already provide you a good indication what went wrong.\nThe log can be found under the "System" menu entry or you follow the link at the device\'s configuration page.')])]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("By default, not all configuration items are displayed to allow quick and easy setup.")]),e._v(" "),r("p",[e._v("To display additional configuration items, change the "),r("RouterLink",{attrs:{to:"/en/user/Configuration.html#settings-level"}},[e._v("settings-level")]),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"general-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#general-settings"}},[e._v("#")]),e._v(" General Settings")]),e._v(" "),r("p",[e._v("General settings you will find at every LED device type.")]),e._v(" "),r("h5",{attrs:{id:"hardware-led-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-led-count"}},[e._v("#")]),e._v(" Hardware LED Count")]),e._v(" "),r("p",[e._v("The number of physical LEDs the device allows to be addressed.")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("In case the Hardware LED Count is disabled")]),e._v(" "),r("p",[e._v("For some devices the input element is disabled as the number of LEDs is resolved automatically.")]),e._v(" "),r("p",[e._v("Failing to get a device's properties result in an error message provided to you. Check the configuration done or refresh the page.")])]),e._v(" "),r("h4",{attrs:{id:"advanced-expert-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#advanced-expert-settings"}},[e._v("#")]),e._v(" Advanced/Expert Settings")]),e._v(" "),r("h5",{attrs:{id:"rgb-byte-order"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rgb-byte-order"}},[e._v("#")]),e._v(" RGB Byte Order")]),e._v(" "),r("p",[e._v('The RGB byte order is configurable per LED device type. If you want to check or modify this value, use the "RGB Byte Order wizard" (Magic Wand).')]),e._v(" "),r("h5",{attrs:{id:"autostart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#autostart"}},[e._v("#")]),e._v(" Autostart")]),e._v(" "),r("p",[e._v("An LED device is started when Hyperion is brought up per default.\nIn case autostart is disabled, the device is to be switched on later manually or via API.")]),e._v(" "),r("h5",{attrs:{id:"connection-attempts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connection-attempts"}},[e._v("#")]),e._v(" Connection attempts")]),e._v(" "),r("p",[e._v("Each LED device provides a retry to open capability.\nIf the number of connection attempts is exceeded the LED device will get in error state.")]),e._v(" "),r("h5",{attrs:{id:"retry-interval"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#retry-interval"}},[e._v("#")]),e._v(" Retry interval")]),e._v(" "),r("p",[e._v("The number of seconds to be passed until the next retry attempt for connection is done.")]),e._v(" "),r("h3",{attrs:{id:"specific-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specific-settings"}},[e._v("#")]),e._v(" Specific Settings")]),e._v(" "),r("p",[e._v("Each LED device supports additional, device specific settings.\nSome settings are common across the different device categories.")]),e._v(" "),r("h3",{attrs:{id:"actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),r("h5",{attrs:{id:"save-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#save-settings"}},[e._v("#")]),e._v(" Save settings")]),e._v(" "),r("p",[e._v("Allows to save the settings if the configuration is valid.\nIn case you have not configured an "),r("RouterLink",{attrs:{to:"/en/user/advanced/Advanced.html#led-layout"}},[e._v("LED-Layout")]),e._v(" yet, you have the option creating a default one and refine it later.\nIf the LEDs configured by the layout exceed the number of the hardware LED count, check and refine the configuration or the layout.")],1),e._v(" "),r("h5",{attrs:{id:"identify"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#identify"}},[e._v("#")]),e._v(" Identify")]),e._v(" "),r("p",[e._v("For some LED device types you can test the technical settings before saving or let the LEDs of the device light up for identification.")]),e._v(" "),r("p",[e._v('The button "Identify" is only activated, if the current configuration is valid.')]),e._v(" "),r("h2",{attrs:{id:"controller-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controller-types"}},[e._v("#")]),e._v(" Controller Types")]),e._v(" "),r("p",[e._v("Hyperion supports multiple different LED devices which fall into four main categories:")]),e._v(" "),r("h3",{attrs:{id:"spi-pwm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi-pwm"}},[e._v("#")]),e._v(" SPI/PWM")]),e._v(" "),r("p",[e._v("Are 3 or 4 wire LEDs which can be powered via SPI or PWM (Pulse Width Modulation) of a Raspberry Pi or an Arduino (which is USB connected to your computer/HTPC/Pi).")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/apa102"}},[e._v("APA102")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/apa104"}},[e._v("APA104")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/lpd6803"}},[e._v("LPD6803")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/lpd8806"}},[e._v("LPD8806")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/p9813"}},[e._v("P9813")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/SK6812"}},[e._v("SK6812")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/SK9822"}},[e._v("SK9822")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/ws2801"}},[e._v("WS2801")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/ws2812"}},[e._v("WS2812")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/spi_pwm/piblaster"}},[e._v("pi-blaster")])])]),e._v(" "),r("h3",{attrs:{id:"usb-serial"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usb-serial"}},[e._v("#")]),e._v(" USB/Serial")]),e._v(" "),r("p",[e._v("Plug and play. The following controllers are supported.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/adalight"}},[e._v("Adalight")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/atmo"}},[e._v("Atmo")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/dmx"}},[e._v("DMX")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/hyperion-usbasp"}},[e._v("Hyperion-USBasp")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/karate"}},[e._v("Karate")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/lightpack"}},[e._v("Lightpack")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/multilightpack"}},[e._v("Multi-Lightpack")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/paintpack"}},[e._v("Paintpack")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/rawhid"}},[e._v("RawHID")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/sedu"}},[e._v("SEDU")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/usb/tpm2"}},[e._v("TPM2")])])]),e._v(" "),r("h3",{attrs:{id:"network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" Network")]),e._v(" "),r("p",[e._v("Everything that is reachable over network.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/atmoorb"}},[e._v("AtmoOrb")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/cololight"}},[e._v("Cololight")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/fadecandy"}},[e._v("FadeCandy")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/nanoleaf"}},[e._v("Nanoleaf")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/philipshue"}},[e._v("Philips Hue")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/razer"}},[e._v("Razer Chroma")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/tinkerforge"}},[e._v("Tinkerforge")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/tpm2net"}},[e._v("TPM2.NET")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/udpartnet"}},[e._v("UDP ArtNet")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/udpddp"}},[e._v("UDP DDP")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/udpe131"}},[e._v("UDP E1.31")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/udpraw"}},[e._v("UDP Raw")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/wled"}},[e._v("WLED")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/en/user/leddevices/network/yeelight"}},[e._v("Yeelight")])])]),e._v(" "),r("h3",{attrs:{id:"others"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[e._v("#")]),e._v(" Others")]),e._v(" "),r("p",[e._v("All other devices that do not fit into any categories.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/en/user/leddevices/others/debug"}},[e._v("File")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);