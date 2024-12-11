(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{383:function(a,e,t){"use strict";t.r(e);var s=t(25),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"package-signing-key-generation-and-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package-signing-key-generation-and-handling"}},[a._v("#")]),a._v(" Package Signing Key Generation and Handling")]),a._v(" "),e("p",[a._v("Last updated 2024-07-10.")]),a._v(" "),e("h2",{attrs:{id:"owernship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#owernship"}},[a._v("#")]),a._v(" Owernship")]),a._v(" "),e("p",[a._v("Certificate and key generation and handling is overseen by ALESCo.")]),a._v(" "),e("h2",{attrs:{id:"key-generation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-generation"}},[a._v("#")]),a._v(" Key Generation")]),a._v(" "),e("p",[a._v("This is a slow and tedious process.  It is important that no corners are cut and the utmost care is taken validating security through every step of the process.")]),a._v(" "),e("h3",{attrs:{id:"prepare-a-secure-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prepare-a-secure-environment"}},[a._v("#")]),a._v(" Prepare a Secure Environment")]),a._v(" "),e("p",[a._v("Download latest AlmaLinux live ISO from "),e("code",[a._v("https://repo.almalinux.org/")]),a._v(".  Using default Gnome mini for this guide as to not have any 3rd-party binaries present (EPEL).")]),a._v(" "),e("p",[a._v("In the folder where you download the ISO, look at the "),e("code",[a._v("CHECKSUM")]),a._v(" and "),e("code",[a._v("CHECKSUM.asc")]),a._v(" files.  First let's verify that it is properly signed and that its contents can be authenticated.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://repo.almalinux.org/almalinux/9/live/x86_64/CHECKSUM\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://repo.almalinux.org/almalinux/9/live/x86_64/CHECKSUM.asc\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9\ngpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v(" RPM-GPG-KEY-AlmaLinux-9\ngpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verify")]),a._v(" CHECKSUM.asc CHECKSUM\n")])])]),e("p",[a._v("Now verify the downloaded ISO's sha256 checksum against that contained in the "),e("code",[a._v("CHECKSUM")]),a._v(" file.")]),a._v(" "),e("p",[a._v("Copy the ISO file to a flash drive.")]),a._v(" "),e("p",[e("code",[a._v("dd if=almalinux.iso of=/dev/sdX")])]),a._v(" "),e("p",[a._v("Boot the image.  Connect to the internet temporarily to run a single command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" pcsc-lite\n")])])]),e("h4",{attrs:{id:"download-gpg-public-keys-of-recipients"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-gpg-public-keys-of-recipients"}},[a._v("#")]),a._v(" Download GPG Public Keys of Recipients")]),a._v(" "),e("p",[a._v("If you are doing key exports as part of this, grab the public keys of all recipients.")]),a._v(" "),e("p",[a._v("These keys are accurate at the time of this writing.  Verify them prior to use, of course.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v("\n")])])]),e("p",[a._v("It may also be helpful to open a copy of this guide in the browser before disconnecting from the internet.")]),a._v(" "),e("p",[e("strong",[a._v("Disconnect from the internet and do not connect again.  Everything from here on out has to be done fully air-gapped and the generated private keys can never be connected to a machine with network access.")])]),a._v(" "),e("h3",{attrs:{id:"generate-keys-and-certificates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-keys-and-certificates"}},[a._v("#")]),a._v(" Generate Keys and Certificates")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Prepare GPG Environment:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/.gnupg/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EOF'"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ~/.gnupg/gpg.conf")]),a._v("\npersonal-cipher-preferences AES256 AES192 AES\npersonal-digest-preferences SHA512 SHA384 SHA256\npersonal-compress-preferences ZLIB BZIP2 ZIP Uncompressed\ndefault-preference-list SHA512 SHA384 SHA256 AES256 AES192 AES ZLIB BZIP2 ZIP Uncompressed\ncert-digest-algo SHA512\ns2k-digest-algo SHA512\ns2k-cipher-algo AES256\ncharset utf-8\nno-comments\nno-emit-version\nno-greeting\nkeyid-format 0xlong\nlist-options show-uid-validity\nverify-options show-uid-validity\nwith-fingerprint\nrequire-cross-certification\nno-symkey-cache\narmor\nuse-agent\nthrow-keyids\nEOF")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Generate the key:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IDENTITY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"AlmaLinux OS 10 <packager@almalinux.org>"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEY_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rsa4096\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CERTIFY_PASS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LC_ALL")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("C "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dc")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'A-Z1-9'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" /dev/urandom "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1IOS5U"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("fold")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-es/./ /"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("26")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" -c2- "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CERTIFY_PASS")]),a._v('"')]),a._v("\ngpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--batch")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--passphrase")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CERTIFY_PASS")]),a._v('"')]),a._v(" --quick-generate-key "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IDENTITY")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$KEY_TYPE")]),a._v('"')]),a._v(" sign never\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEYID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-k")]),a._v(" --with-colons "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IDENTITY")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" -F: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/^pub:/ { print $5; exit }'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEYFP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-k")]),a._v(" --with-colons "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IDENTITY")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" -F: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/^fpr:/ { print $10; exit }'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v("Key ID: %40s"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v("Key FP: %40s"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$KEYID")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$KEYFP")]),a._v('"')]),a._v("\n")])])]),e("p",[e("strong",[a._v("Make sure to securely store the passphrase in Vaultwarden.")])])]),a._v(" "),e("li",[e("p",[a._v("Export Public and Private Keys")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--armor")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$KEYID")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" almalinux10.asc\ngpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--batch")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--armor")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--passphrase")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CERTIFY_PASS")]),a._v('"')]),a._v(" --pinentry-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("loopback --export-secret-keys "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$KEYID")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" almalinux10-privkey.asc\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Configure (new) Yubikey")]),a._v(" "),e("p",[a._v("Generate Pins")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# generate pins")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_PIN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LC_ALL")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("C "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dc")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0-9'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" /dev/urandom "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("fold")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w8")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_PIN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LC_ALL")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("C "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dc")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0-9'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" /dev/urandom "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("fold")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w6")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v("Admin PIN: %12s"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v("User PIN: %13s"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADMIN_PIN")]),a._v('"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$USER_PIN")]),a._v('"')]),a._v("\n")])])]),e("p",[e("strong",[a._v("Make sure to securely store the admin and user pins in Vaultwarden.")])]),a._v(" "),e("p",[a._v("Set pins")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set admin pin")]),a._v("\ngpg --command-fd"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" --pinentry-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("loopback --change-pin "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF\n3\n12345678\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADMIN_PIN")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADMIN_PIN")]),a._v("\nq\nEOF")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set user pin")]),a._v("\ngpg --command-fd"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" --pinentry-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("loopback --change-pin "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF\n1\n123456\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$USER_PIN")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$USER_PIN")]),a._v("\nq\nEOF")]),a._v("\n")])])]),e("p",[a._v("Set basic info on the Yubikey")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gpg --command-fd"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" --pinentry-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("loopback --edit-card "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF\nadmin\nlogin\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$IDENTITY")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADMIN_PIN")]),a._v("\nforcesig\nurl\nhttps://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-10\nquit\nEOF")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Copy private key to Yubikey.  This is a destructive proces so we need to make a backup of the private keys before we proceed and use that to write to the Yubikey.  If we're only writing to a single Yubikey the backup is not necessary as we have already exported the key into armored format which will not be impacted.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" ~/.gnupg ~/.gnupg.keytocard\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GNUPGHOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=~")]),a._v("/.gnupg.keytocard gpg --command-fd"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" --pinentry-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("loopback --edit-key "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$KEYID")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF\nkeytocard\ny\n1\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CERTIFY_PASS")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADMIN_PIN")]),a._v("\nsave\nEOF")]),a._v("\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"copy-keys-and-certificates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-keys-and-certificates"}},[a._v("#")]),a._v(" Copy Keys and Certificates")]),a._v(" "),e("p",[a._v("DO NOT DO NOT DO NOT connect to the internet to copy the files.")]),a._v(" "),e("h4",{attrs:{id:"public-certificates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-certificates"}},[a._v("#")]),a._v(" Public Certificates")]),a._v(" "),e("p",[a._v("Copy the public key ("),e("code",[a._v("almalinux10.asc")]),a._v(" if copy/pasting commands from this guide) to a flash drive.  This drive can then be connected to a machine with networking and distributed as necessary - there is nothing secret about them.")]),a._v(" "),e("h4",{attrs:{id:"private-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-keys"}},[a._v("#")]),a._v(" Private Keys")]),a._v(" "),e("p",[a._v("Encrypt the private keys using GPG.  The GPG-encrypted files are the only ones that can be distributed to key holders via offline methods.  It's recommended that they keys remain encrypted at rest.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("recipient-gpg-email"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("recipient-gpg-email"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" almalinux10-privkey.asc\n")])])]),e("p",[a._v("Copy the .asc (public/private) keys and GPG-encrypted version of the private key to a blank flash drive.  The drive must never be connected to a networked or untrusted system.  It should only ever be connected to an air-gapped blank OS install.")]),a._v(" "),e("h2",{attrs:{id:"removal-of-custodianship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removal-of-custodianship"}},[a._v("#")]),a._v(" Removal of Custodianship")]),a._v(" "),e("p",[a._v("We need to define how we handle if a keyholder leaves AlmaLinux.")]),a._v(" "),e("h2",{attrs:{id:"distribution-of-keys-to-key-holders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#distribution-of-keys-to-key-holders"}},[a._v("#")]),a._v(" Distribution of Keys to Key Holders")]),a._v(" "),e("p",[a._v("Keys will be distributed to key holders only via physical medium - never via the internet.  Our SOP is for the key generator to encrypt the keys with GPG and place them on a hardware-encrypted (FIPS-140 certified), self-destructing (if brute force or disassembly are attempted) USB key.  These may then be mailed to the key holder or delivered in person at, for example, a conference.")]),a._v(" "),e("p",[a._v("The unlock code for the flash drive will be provided by the key generator to the key holder upon their recipient of the flash drive, and confirmation of that receipt via a GPG-signed email.")]),a._v(" "),e("p",[a._v("The hardware unlock code may be provided via the internet using encrypted means - either AlmaLinux's internal password manager (Vaultwarden) or GPG-encrypted email.")]),a._v(" "),e("h2",{attrs:{id:"storage-of-keys-by-key-holders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage-of-keys-by-key-holders"}},[a._v("#")]),a._v(" Storage of Keys by Key Holders")]),a._v(" "),e("p",[a._v("Keys should be stored offline and encrypted at rest via GPG and the hardware encryption of the flash drive.  It should be stored in a fire resistant lock box/safe or bank safety deposit box.")]),a._v(" "),e("h2",{attrs:{id:"key-generation-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-generation-log"}},[a._v("#")]),a._v(" Key Generation Log")]),a._v(" "),e("h3",{attrs:{id:"almalinux-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-10"}},[a._v("#")]),a._v(" AlmaLinux 10")]),a._v(" "),e("p",[a._v("Package signing keys generated on 2024-07-10 using policy dated 2024-07-03.  These keys and certs will be used for package signing in AlmaLinux 10, including testing/beta builds.")]),a._v(" "),e("h2",{attrs:{id:"changelog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[a._v("#")]),a._v(" Changelog")]),a._v(" "),e("h3",{attrs:{id:"_2024-07-03"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2024-07-03"}},[a._v("#")]),a._v(" 2024-07-03")]),a._v(" "),e("p",[a._v("Initial ratification")])])}),[],!1,null,null,null);e.default=r.exports}}]);