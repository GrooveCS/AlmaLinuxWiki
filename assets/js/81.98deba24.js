(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{399:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"windows-subsystem-for-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-subsystem-for-linux"}},[t._v("#")]),t._v(" Windows Subsystem for Linux")]),t._v(" "),s("h2",{attrs:{id:"about-wsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#about-wsl"}},[t._v("#")]),t._v(" About WSL")]),t._v(" "),s("p",[t._v("Windows Subsystem for Linux (WSL) is designed as integration between Windows and Linux. You can now run the AlmaLinux terminal environment on a Windows machine. It doesn't require a dual-boot or a VM.")]),t._v(" "),s("h4",{attrs:{id:"supported-versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions"}},[t._v("#")]),t._v(" Supported versions:")]),t._v(" "),s("p",[t._v("You can get an image from the Microsoft Store:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://apps.microsoft.com/store/detail/almalinux-8-wsl/9NMD96XJJ19F",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlmaLinux OS 8"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://apps.microsoft.com/store/detail/almalinux-9/9P5RWLM70SN9",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlmaLinux OS 9"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("or using the direct links:")]),t._v(" "),s("table",{attrs:{align:"center"}},[s("tr",[s("td",{attrs:{align:"center"}},[t._v("AlmaLinux 8")]),t._v(" "),s("td",{attrs:{align:"center"}},[s("a",{attrs:{href:"https://wsl.almalinux.org/8/AlmaLinuxOS-8_latest_x64.appx"}},[t._v("Intel/AMD (x86_64)")])]),t._v(" "),s("td",{attrs:{align:"center"}},[s("a",{attrs:{href:"https://wsl.almalinux.org/8/AlmaLinuxOS-8_latest_ARM64.appx"}},[t._v("ARM64 (AArch64)")])])]),t._v(" "),s("tr",[s("td",{attrs:{align:"center"}},[t._v("AlmaLinux 9")]),t._v(" "),s("td",{attrs:{align:"center"}},[s("a",{attrs:{href:"https://wsl.almalinux.org/9/AlmaLinuxOS-9_latest_x64.appx"}},[t._v("Intel/AMD (x86_64)")])]),t._v(" "),s("td",{attrs:{align:"center"}},[s("a",{attrs:{href:"https://wsl.almalinux.org/9/AlmaLinuxOS-9_latest_ARM64.appx"}},[t._v("ARM64 (AArch64)")])])])]),t._v(" "),s("h2",{attrs:{id:"installation-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps"}},[t._v("#")]),t._v(" Installation steps")]),t._v(" "),s("p",[t._v("Follow these steps to get AlmaLinux for WSL.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("To start with, let's check what is the Windows build number. Press "),s("strong",[t._v("Win + R")]),t._v(". Run "),s("code",[t._v("winver")]),t._v(" command and press "),s("strong",[t._v("OK")]),t._v(" or "),s("strong",[t._v("Enter")]),t._v(". You'll get "),s("em",[t._v("About Windows")]),t._v(" information saying Microsoft Windows version. If "),s("em",[t._v("OS Build")]),t._v(" is 19041 or higher, continue. If not, please, check "),s("a",{attrs:{href:"#popular-issues"}},[t._v("popular issues")]),t._v(" section.")])]),t._v(" "),s("li",[s("p",[t._v("Find "),s("strong",[t._v("PowerShell")]),t._v(" in the Windows search bar. Choose "),s("em",[t._v("Run as administrator option")]),t._v(".\n"),s("img",{attrs:{src:"/images/wsl-powershell.png",alt:"image"}})])]),t._v(" "),s("li",[s("p",[t._v("Run "),s("code",[t._v("wsl --install")]),t._v(" command. This command will automatically install "),s("em",[t._v("Virtual Machine Platform")]),t._v(", "),s("em",[t._v("Windows Subsystem for Linux")]),t._v(" and download "),s("em",[t._v("WSL Kernel")]),t._v(". It will also set your default WSL version to WSL2.\n"),s("img",{attrs:{src:"/images/wsl-install.png",alt:"image"}})])]),t._v(" "),s("li",[s("p",[t._v("After WSL installations are completed, you need to reboot the system.")])]),t._v(" "),s("li",[s("p",[t._v("Now open "),s("strong",[t._v("Microsoft Store")]),t._v(" and search for AlmaLinux 8 WSL or AlmaLinux 9 app. Press "),s("em",[t._v("Get")]),t._v(". Installation of the app will begin.\n"),s("img",{attrs:{src:"/images/wsl-ms-store.png",alt:"image"}})])]),t._v(" "),s("li",[s("p",[t._v("When the installation is finished, you'll get a notification. You can launch AlmaLinux WSL app now.")])]),t._v(" "),s("li",[s("p",[t._v("A terminal will be opened with the AlmaLinux installation process. You'll need to create a username and password.")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("These username and password don't have to match with your Windows user credentials.")])]),t._v(" "),s("ul",[s("li",[t._v("After installation is finished successfully, congratulations, you can now run AlmaLinux terminal on your Windows machine.\n"),s("img",{attrs:{src:"/images/wsl-alma.png",alt:"image"}})])]),t._v(" "),s("h2",{attrs:{id:"popular-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#popular-issues"}},[t._v("#")]),t._v(" Popular issues")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If your Windows build version is older than 19041, you'll have to perform a few manual steps to setup WSL. Check the "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Guide"),s("OutboundLink")],1),t._v(" for the details.")])]),t._v(" "),s("li",[s("p",[t._v("If you get an error during AlmaLinux WSL installation, please, check in the BIOS menu that the "),s("em",[t._v("Virtualization")]),t._v(" option is enabled.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);