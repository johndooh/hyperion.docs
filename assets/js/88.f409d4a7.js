(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{388:function(t,a,e){"use strict";e.r(a);var s=e(12),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"advanced"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),a("p",[t._v("Specific topics with details")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#led-layout"}},[t._v("LED Layout")]),a("ul",[a("li",[a("a",{attrs:{href:"#additional-properties"}},[t._v("Additional properties")])]),a("li",[a("a",{attrs:{href:"#edit-with-web-configuration"}},[t._v("Edit with Web Configuration")])])])]),a("li",[a("a",{attrs:{href:"#blackbar-detection"}},[t._v("Blackbar detection")])]),a("li",[a("a",{attrs:{href:"#gamma-curve"}},[t._v("Gamma Curve")])]),a("li",[a("a",{attrs:{href:"#cli"}},[t._v("CLI")]),a("ul",[a("li",[a("a",{attrs:{href:"#hyperiond"}},[t._v("hyperiond")])]),a("li",[a("a",{attrs:{href:"#hyperion-remote"}},[t._v("hyperion-remote")])]),a("li",[a("a",{attrs:{href:"#hyperion-capture"}},[t._v("hyperion-capture")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"led-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#led-layout"}},[t._v("#")]),t._v(" LED Layout")]),t._v(" "),a("p",[t._v("Hyperion assigns each single led a specific position at the picture. These positions are squares and to create a square you need 4 values (top edge, bottom edge, left edge, right edge). These edges are reflected in "),a("code",[t._v("hmin")]),t._v(", "),a("code",[t._v("hmax")]),t._v(" for horizontal and "),a("code",[t._v("vmin")]),t._v(", "),a("code",[t._v("vmax")]),t._v(" for vertical. They have a value range from "),a("code",[t._v("0.0")]),t._v(" to "),a("code",[t._v("1.0")]),t._v(".")]),t._v(" "),a("ImageWrap",{attrs:{src:"/images/en/user_ledlayout.jpg",alt:"Hyperion Led Layout"}},[a("p",[t._v("Assignment of LED edges")])]),t._v(" "),a("p",[t._v("So let's have a closer look. Following a single led definition:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Let's visualize the example above!")]),t._v(" "),a("ImageWrap",{attrs:{src:"/images/en/user_ledlayout1.jpg",alt:"Hyperion Led Layout"}},[a("p",[t._v("A single led definition")])]),t._v(" "),a("p",[t._v("So let us add 2 more leds to make it more clear "),a("br"),t._v(" "),a("strong",[t._v("The order is important! The first entry is the first led, the second the second led, ...")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ImageWrap",{attrs:{src:"/images/en/user_ledlayout2.jpg",alt:"Hyperion Led Layout"}},[a("p",[t._v("Now with three LEDs")])]),t._v(" "),a("h3",{attrs:{id:"additional-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-properties"}},[t._v("#")]),t._v(" Additional properties")]),t._v(" "),a("p",[t._v("You may connected different led stripe charges with different RGB byte orders. You can overwrite the global RGB byte order by adding a "),a("code",[t._v("colorOrder")]),t._v(" property to all leds that require a different one.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colorOrder"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gbr"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmax"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vmin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In this example the first led will be "),a("code",[t._v("gbr")]),t._v(", the other leds will be assigned to the global RGB order that has been defined at the led hardware section.")]),t._v(" "),a("h3",{attrs:{id:"edit-with-web-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-with-web-configuration"}},[t._v("#")]),t._v(" Edit with Web Configuration")]),t._v(" "),a("p",[t._v("While editing these values in a local texteditor is a little bit weird, you could edit them at the web configuration!")]),t._v(" "),a("ul",[a("li",[t._v("Make sure you raised the "),a("RouterLink",{attrs:{to:"/en/user/Configuration.html#settings-level"}},[t._v("Hyperion Settings level")]),t._v(" to "),a("strong",[t._v("Advanced")]),t._v(".")],1),t._v(" "),a("li",[t._v("Navigate to Configuration -> LED Hardware and switch to the LED Layout tab. You will notice a new section "),a("strong",[t._v("Generated/Current LED Configuration")]),t._v(".")])]),t._v(" "),a("ImageWrap",{attrs:{src:"/images/en/user_ledlayout3.jpg",alt:"Hyperion Led Layout"}}),t._v(" "),a("p",[t._v("You could freely edit the values, show a preview on the right side by clicking "),a("strong",[t._v("Update Preview")]),t._v(". When you are happy with the changes don't forget to save.")]),t._v(" "),a("h2",{attrs:{id:"blackbar-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blackbar-detection"}},[t._v("#")]),t._v(" Blackbar detection")]),t._v(" "),a("p",[t._v("Explain the differences between the available modes for blackbar detection.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Default:")]),t._v(" 3 scanlines in each direction (X Y) - fastest detection")]),t._v(" "),a("li",[a("strong",[t._v("Classic:")]),t._v(" The original implementation - lower cpu time (legacy for RPi 1) just scan the top one third of the picture which leads to a  slow detection and trouble with TV channel logo.")]),t._v(" "),a("li",[a("strong",[t._v("OSD:")]),t._v(" Based on the default mode - not that effective but prevents border switching which may caused of OSD overlays (program infos and volume bar).")]),t._v(" "),a("li",[a("strong",[t._v("Letterbox:")]),t._v(" Based on the default mode - only considers blackbars at the top and bottom of the picture, ignoring the sides.")])]),t._v(" "),a("ImageWrap",{attrs:{src:"/images/en/user_bbmodes.jpg",alt:"Hyperion Blackbar detection modes"}}),t._v(" "),a("h2",{attrs:{id:"gamma-curve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gamma-curve"}},[t._v("#")]),t._v(" Gamma Curve")]),t._v(" "),a("p",[t._v("Gamma values in a graphic. AS you see 1.0 is neutral. Lower than 1.0 increase the color, higher reduce color.")]),t._v(" "),a("ImageWrap",{attrs:{src:"/images/en/user_gammacurve.png",alt:"Hyperion Gamma Curve"}}),t._v(" "),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),a("p",[t._v("All executables shipped with Hyperion have some command line arguments/options")]),t._v(" "),a("h3",{attrs:{id:"hyperiond"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hyperiond"}},[t._v("#")]),t._v(" hyperiond")]),t._v(" "),a("p",[t._v("The heart of Hyperion")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Show the version/build date/commit of Hyperion ")]),t._v("\nhyperiond "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Reset current adminstration password back to 'hyperion'")]),t._v("\nhyperiond "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--resetPassword")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Overwrite the path for user data (which defaults to your home directory)")]),t._v("\nhyperiond "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--userdata")]),t._v(" /temp/anotherDir\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Overwrite log level temporarily: hyperiond -s for silent -v for verbose and -d for debug")]),t._v("\nhyperiond "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Export effects to directory")]),t._v("\nhyperiond --export-effects /tmp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run Hyperion in desktop mode")]),t._v("\nhyperiond "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--desktop")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If a path name contains spaces, surround it with "),a("code",[t._v("“")]),t._v(" . "),a("br"),t._v(" "),a("code",[t._v('hyperiond --userdata "/temp/another Dir"')])])]),t._v(" "),a("h3",{attrs:{id:"hyperion-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-remote"}},[t._v("#")]),t._v(" hyperion-remote")]),t._v(" "),a("p",[t._v("hyperion-remote is a command line tool which translates given arguments to JSON commands and sends them to the Hyperion JSON-RPC. Easy to use for scripts. It supports nearly all commands that Hyperion provides.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get a list of all available commands")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set a color by using HTML color names")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" aqua\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set color with hex value")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" FF7F50\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set color with a duration of 5 seconds instead endless ")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" FF7F50 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start an effect")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rainbow swirl"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# with a duration of 8 seconds instead endless")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rainbow swirl"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Target a specific instance")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ATTENTION: Hyperion instances will synchronize with the Instance Syncing feature by default")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can configure the behaviour for each instance")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-I")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My cool instance name"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--instance")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My cool instance name"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example set effect for instance")]),t._v("\nhyperion-remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--instance")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My cool instance name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rainbow swirl"')]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Hyperion remote will search for a Hyperion server automatically. So you can even use that on another device in your local network without providing a ip/port")])]),t._v(" "),a("h3",{attrs:{id:"hyperion-capture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-capture"}},[t._v("#")]),t._v(" hyperion-capture")]),t._v(" "),a("p",[t._v("We deliver also stand alone capture apps right in your Hyperion directory. They are called hyperion-dispmanx, hyperion-osx, hyperion-x11, hyperion-amlogic, hyperion-framebuffer, hyperion-qt. Depending on your platform you have more or less.")]),t._v(" "),a("p",[t._v("All these application can be started independent from Hyperion and all of these have slightly different options. They communicate with the flatbuffer interface of Hyperion. So let's start one of them! In this example i use dispmanx for Raspberry Pi, so let us check the available options.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("hyprion-dispmanx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v("\n  -f, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--framerate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("framerate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  Capture frame rate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              Width of the captured image "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--height")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("            Height of the captured image "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--screenshot")]),t._v("                 Take a single screenshot, save it to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" and quit\n  -a, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("      Set the address of the hyperion server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:19445"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  -p, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--priority")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    Use the provided priority channel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("suggested "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("-199"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --skip-reply                 Do not receive and check reply messages from Hyperion\n  -h, "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("                   Show this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  --crop-left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("      pixels to remove on left after grabbing\n  --crop-right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    pixels to remove on right after grabbing\n  --crop-top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-top"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        pixels to remove on "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v(" after grabbing\n  --crop-bottom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-bottom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  pixels to remove on bottom after grabbing\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--3DSBS")]),t._v("                      Interpret the incoming video stream as 3D side-by-side\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--3DTAB")]),t._v("                      Interpret the incoming video stream as 3D top-and-bottom\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Let's start with capture interval of 15, width of 100 and a height of 100")]),t._v("\nhyperion-dispmanx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.20:19445 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--height")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);