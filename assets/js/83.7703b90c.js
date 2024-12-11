(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{402:function(e,t,a){"use strict";a.r(t);var r=a(25),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h6",{attrs:{id:"last-updated-2024-12-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-updated-2024-12-10"}},[e._v("#")]),e._v(" last updated: 2024-12-10")]),e._v(" "),t("h1",{attrs:{id:"elevate-changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elevate-changelog"}},[e._v("#")]),e._v(" ELevate Changelog")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(", this changelog only includes updates made from 2024-09-24 onwards, and does not include any changes made prior to this date.")]),e._v(" "),t("h2",{attrs:{id:"_2024-12-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2024-12-10"}},[e._v("#")]),e._v(" 2024-12-10")]),e._v(" "),t("ul",[t("li",[e._v("Support for EuroLinux has been discontinued due to its "),t("a",{attrs:{href:"https://docs.euro-linux.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("end-of-life as a Linux distribution in 23 October 2024"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"_2024-11-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2024-11-18"}},[e._v("#")]),e._v(" 2024-11-18")]),e._v(" "),t("p",[e._v("Released from Testing to Stable:")]),e._v(" "),t("ul",[t("li",[e._v("Update AlmaLinux leapp upgrade repository files to use "),t("code",[e._v("$releasever")]),e._v(" instead of major OS version (e.g., "),t("code",[e._v("8")]),e._v(" or "),t("code",[e._v("9")]),e._v(").")]),e._v(" "),t("li",[e._v("Add CentOS 7 ELS repos support for upgrades to Oracle Linux 8.")]),e._v(" "),t("li",[e._v("Add KernelCare vendor support for EL8 to EL9 upgrades.")]),e._v(" "),t("li",[e._v("Add support for architectures other than x86_64 by updating map files. Users can follow the standard "),t("a",{attrs:{href:"/elevate/ELevate-quickstart-guide"}},[e._v("Quickstart guide")]),e._v(" without any additional steps for these architectures.")]),e._v(" "),t("li",[e._v("Avoid creating symbolic links such as "),t("code",[e._v("/etc/leapp/repos.d/system_upgrade;67377d17")]),e._v(" and prevent conflicts between "),t("code",[e._v("leapp-upgrade-*")]),e._v(" and "),t("code",[e._v("leapp-data-*")]),e._v(" packages in the "),t("code",[e._v("/etc/leapp/repos.d/system_upgrade")]),e._v(" path when upgrading CentOS 7 to AlmaLinux OS 9. These issues occur if "),t("code",[e._v("leapp-data-*")]),e._v(" packages remain installed after upgrading from CentOS 7 to EL8. Therefore, "),t("strong",[e._v("we strongly recommend removing all ELevate-related EL7 packages before proceeding with the upgrade to EL9")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"_2024-10-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2024-10-18"}},[e._v("#")]),e._v(" 2024-10-18")]),e._v(" "),t("p",[e._v("Released from Testing to Stable:")]),e._v(" "),t("ul",[t("li",[e._v("Extend upgrade path with the ability to elevate to AlmaLinux OS 8 versions "),t("em",[e._v("8.7")]),e._v(", "),t("em",[e._v("8.8")]),e._v(", "),t("em",[e._v("8.9")]),e._v(", "),t("em",[e._v("8.10")]),e._v(", and AlmaLinux OS 9 versions "),t("em",[e._v("9.0")]),e._v(", "),t("em",[e._v("9.1")]),e._v(", "),t("em",[e._v("9.2")]),e._v(", "),t("em",[e._v("9.3")]),e._v(", "),t("em",[e._v("9.4")]),e._v(" versions with --target option set.")]),e._v(" "),t("li",[e._v("Remove the "),t("em",[e._v("9.5")]),e._v(" target version from the upgrade path for all supported operating systems until this version is released.")])]),e._v(" "),t("h2",{attrs:{id:"_2024-10-09"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2024-10-09"}},[e._v("#")]),e._v(" 2024-10-09")]),e._v(" "),t("p",[e._v("Released from Testing to Stable:")]),e._v(" "),t("ul",[t("li",[e._v("Fixed leapp actions that were causing packages removal and as so the upgrade process to fail:\n"),t("ul",[t("li",[e._v("For configurations with "),t("strong",[e._v("Imunify360")]),e._v(" repository enabled, a "),t("em",[e._v("replace")]),e._v(" leapp action will be taken for the "),t("code",[e._v("libunwind")]),e._v(" package.")]),e._v(" "),t("li",[e._v("For configurations with "),t("strong",[e._v("EPEL")]),e._v(" repository enabled, a "),t("em",[e._v("move")]),e._v(" leapp action will be taken for the "),t("code",[e._v("GeoIP")]),e._v(" package.")]),e._v(" "),t("li",[e._v("For other configurations, these packages will be removed during the upgrade process.")])])]),e._v(" "),t("li",[e._v("Added "),t("strong",[e._v("CloudLinux Imunify360 alt-php")]),e._v(" 3rd party repository support for EL7 to EL8 upgrades for all supported systems.\n"),t("ul",[t("li",[e._v("Before the upgrade, you must replace the "),t("code",[e._v("<imunify360_alt-php_token>")]),e._v(" string in the "),t("code",[e._v("/etc/yum.repos.d/imunify360-alt-php.repo")]),e._v(" config with the token from the "),t("code",[e._v("/etc/leapp/files/vendors.d/imunify360-alt-php.repo")]),e._v(".")])])]),e._v(" "),t("li",[e._v("Unnecessery "),t("code",[e._v("openssl-libs")]),e._v(" package split was removed for EL8 to EL9 upgrades for all supported systems.")])]),e._v(" "),t("h2",{attrs:{id:"_2024-09-24"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2024-09-24"}},[e._v("#")]),e._v(" 2024-09-24")]),e._v(" "),t("p",[e._v("Released from Testing to Stable:")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("strong",[e._v("Microsoft Linux Package Repositories")]),e._v(" support for all supported operating systems.")]),e._v(" "),t("li",[e._v("Added "),t("strong",[e._v("Docker CE")]),e._v(" support for all supported operating systems.")]),e._v(" "),t("li",[e._v("leapp-repository rebased to upstream version "),t("a",{attrs:{href:"https://github.com/oamg/leapp-repository/releases/tag/v0.21.0",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("0.21.0")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("leapp rebased to upstream version "),t("a",{attrs:{href:"https://github.com/oamg/leapp/releases/tag/v0.18.0",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("0.18.0")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("leapp-data:\n"),t("ul",[t("li",[e._v("Switch CentOS Stream9 repositories from mirrorlist into baseurl at "),t("a",{attrs:{href:"https://mirror.stream.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirror.stream.centos.org"),t("OutboundLink")],1),e._v(".")])])])]),e._v(" "),t("h2",{attrs:{id:"get-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-help"}},[e._v("#")]),e._v(" Get Help")]),e._v(" "),t("p",[e._v("For more help and assistance reach out to us in the ~migration channel on the "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Community Chat"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);