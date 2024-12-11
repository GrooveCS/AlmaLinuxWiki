(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{406:function(e,t,a){"use strict";a.r(t);var s=a(25),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h6",{attrs:{id:"last-updated-2024-12-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-updated-2024-12-10"}},[e._v("#")]),e._v(" last updated: 2024-12-10")]),e._v(" "),t("h1",{attrs:{id:"elevate-quickstart-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elevate-quickstart-guide"}},[e._v("#")]),e._v(" ELevate Quickstart Guide")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Before beginning, we "),t("strong",[e._v("HIGHLY")]),e._v(" recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify the upgrade worked as expected before you attempt to upgrade any production system. Please report any issues encountered to the "),t("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),t("OutboundLink")],1),e._v(" and/or "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat Migration Channel"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("This guide contains steps on how to upgrade your RHEL-based operating system to the next major version.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Please note, the ELevate project is designed to perform one-step upgrades. If you wish to perform an upgrade from CentOS7, you need to split the process. Please check the "),t("RouterLink",{attrs:{to:"/elevate/ELevating-CentOS7-to-AlmaLinux-9.html"}},[e._v("ELevating CentOS7 to AlmaLinux 9")]),e._v(" guide for more information.")],1)]),e._v(" "),t("p",[e._v("The ELevate project supports a number of 3rd party repositories:")]),e._v(" "),t("ul",[t("li",[e._v("EPEL support is currently available for upgrades to AlmaLinux OS only.")]),e._v(" "),t("li",[e._v("Docker CE - for all supported operating systems.")]),e._v(" "),t("li",[e._v("MariaDB - for all supported operating systems.")]),e._v(" "),t("li",[e._v("Microsoft Linux Package Repositories - for all supported operating systems.")]),e._v(" "),t("li",[e._v("nginx - for all supported operating systems.")]),e._v(" "),t("li",[e._v("PostgreSQL - for all supported operating systems.")]),e._v(" "),t("li",[e._v("Imunify - for upgrades to EL 8.")]),e._v(" "),t("li",[e._v("KernelCare - for all supported operating systems.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("You can contribute to the project and add more 3rd party repositories support. See more on the "),t("a",{attrs:{href:"/elevate/Contribution-guide"}},[e._v("Contribute")]),e._v(" page.")])]),e._v(" "),t("p",[e._v("Currently, the following upgrade paths are available:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ELevate.svg",alt:"image"}})]),e._v(" "),t("p",[e._v("* - upgrading from Scientific Linux 7 to AlmaLinux 8 requires a workaround. Please, see more in the "),t("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("known issues")]),e._v(". "),t("br"),e._v("\n** - upgrading to Oracle Linux 9 is available with the "),t("a",{attrs:{href:"https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle Leapp utility"),t("OutboundLink")],1),e._v(" and will not be supported by ELevate project.")]),e._v(" "),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("You need CentOS 7, Scientific Linux 7, AlmaLinux 8, CentOS Stream 8, or Rocky Linux 8 system installed to use this guide.\n"),t("strong",[e._v("NOTE:")]),e._v(" Since the CentOS 7 repositories are now offline you will need to swap to the CentOS vault, or you can use our CentOS 7 mirror that we've setup for use with ELevate:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://el7.repo.almalinux.org/centos/CentOS-Base.repo\n")])])]),t("h2",{attrs:{id:"upgrade-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-steps"}},[e._v("#")]),e._v(" Upgrade steps")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("A fully updated system is required to accomplish the upgrade. Install the latest updates and reboot your machine:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo yum update -y\nsudo reboot\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Install "),t("code",[e._v("elevate-release")]),e._v(" package with the project repo and GPG key.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Install leapp packages and upgrade data for the target OS you want to upgrade to. Possible options are:")]),e._v(" "),t("ul",[t("li",[e._v("leapp-data-almalinux")]),e._v(" "),t("li",[e._v("leapp-data-centos "),t("small",[e._v("* leapp-data-centos package is designed for upgrades to CentOS Stream.")])]),e._v(" "),t("li",[e._v("leapp-data-oraclelinux")]),e._v(" "),t("li",[e._v("leapp-data-rocky")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo yum install -y leapp-upgrade leapp-data-almalinux\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Start a preupgrade check. In the meanwhile, the Leapp utility creates a special "),t("em",[e._v("/var/log/leapp/leapp-report.txt")]),e._v(" file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Preupgrade check will fail as the default install doesn't meet all requirements for upgrade.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo leapp preupgrade\n")])])]),t("p",[e._v("This summary report will help you get a picture of whether it is possible to continue the upgrade.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("In certain configurations, Leapp generates "),t("em",[e._v("/var/log/leapp/answerfile")]),e._v(" with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.")])])]),e._v(" "),t("li",[t("p",[e._v("The following fixes from "),t("em",[e._v("the /var/log/leapp/leapp-report.txt")]),e._v(" file are the most popular ones, but it's recommended to review the whole file.")]),e._v(" "),t("ul",[t("li",[e._v("For CentOS 7:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo rmmod pata_acpi\necho PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config\nsudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True\n")])])])]),e._v(" "),t("li",[e._v("For RHEL8-based operating systems:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('sudo sed -i "s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/" /etc/firewalld/firewalld.conf\nsudo leapp answer --section check_vdo.confirm=True\n')])])])])]),e._v(" "),t("p",[e._v("Check the "),t("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("ELevate Frequent Issues")]),e._v(" page for known and frequent issues and guidance steps to solve them.")])]),e._v(" "),t("li",[t("p",[e._v("Start an upgrade. You'll be offered to reboot the system after this process is completed.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo leapp upgrade\nsudo reboot\n")])])])]),e._v(" "),t("li",[t("p",[e._v("A new entry in GRUB called "),t("code",[e._v("ELevate-Upgrade-Initramfs")]),e._v(" will appear. The system will be automatically booted into it. See how the update process goes in the console.")])]),e._v(" "),t("li",[t("p",[e._v("After reboot, login to the system and check how the upgrade went. Verify that the current OS is the one you need. Check logs and packages left from previous OS version, consider removing them or update manually.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cat /etc/redhat-release\ncat /etc/os-release\nrpm -qa | grep el7 # for 7 to 8 upgrade\nrpm -qa | grep el8 # for 8 to 9 upgrade\ncat /var/log/leapp/leapp-report.txt\ncat /var/log/leapp/leapp-upgrade.log\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"demo-video"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-video"}},[e._v("#")]),e._v(" Demo Video")]),e._v(" "),t("p",[e._v("Here we have provided a demo of a CentOS 7.x to AlmaLinux 8.x upgrade using the AlmaLinux ELevate Project.")]),e._v(" "),t("iframe",{attrs:{width:"856",height:"482",src:"https://www.youtube.com/embed/Vzl9QxG5mvo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),t("h2",{attrs:{id:"get-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-help"}},[e._v("#")]),e._v(" Get Help")]),e._v(" "),t("p",[e._v("For more help and assistance reach out to us in the ~migration channel on the "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Community Chat"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);