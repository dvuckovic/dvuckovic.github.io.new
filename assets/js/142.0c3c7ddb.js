(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1308:function(t,e,n){"use strict";n.r(e);var s=n(9),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("So, I needed an installation of Linux in order to try something development related. Recently I tried several major LiveCD distributions in order to see which one has evolved significantly, and I thought that Fedora and SuSE did a good job, but was not completely satisfied. Somehow I managed to miss Ubuntu in these tests, and by hearing some good things about it recently, I managed to grab some time and try it.")]),t._v(" "),n("p",[t._v("Ubuntu Linux comes in several varieties, and Desktop seemed to suit my needs. Bootable ISO also contains LiveCD version for trying it first, so after a quick test I installed it in a virtual machine. It is pretty elegant and easy to configure, but a little too much easy by my standards. A simple task such as changing a runlevel mode was deemed impossible to achieve in GUI, so I turned to console.")]),t._v(" "),n("p",[t._v("After a quick & dirty look at conf dirs, I figured out that all user runlevel modes (2-5) were the same, at least in configuration. A quick test with runlevel command in terminal returned runlevel "),n("code",[t._v("N 2")]),t._v(" as a setting. But configuration in "),n("code",[t._v("/etc/rc2.d/")]),t._v(" showed that gdm process was not supposed to be running in this runlevel (imagine my surprise to read this in a terminal application within Gnome Desktop 😃. Something was fishy about this, so I searched for help on the web.")]),t._v(" "),n("p",[t._v("It turns out that the runlevels were simply circumvented in Ubuntu Desktop editions, and something called Upstart was now responsible for start sequence. It seems simple enough, new folder with startup scripts and symbolic links to startup scripts. But it wasn’t obvious what to do in order to skip X on startup, and I simply didn’t want to try and experiment with a new runlevel app before learning more about it.")]),t._v(" "),n("p",[t._v("While searching for more I stumbled upon an interesting thread on Ubuntu forums, which pointed out an interesting option in grub bootloader: text mode. In order to try it, you will need a shell access (whether in GUI terminal application, or console - try "),n("em",[t._v("Ctrl+Alt+F1")]),t._v("). Login with a regular user if you need to, and enter following commands:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("user@ubuntu:~$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/default\nuser@ubuntu:~$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" grub\n")])])]),n("p",[t._v("After entering root password (it should be the same as a first user you created during the Ubuntu installation), you will end up in nano editor editing grub configuration file. Simply comment the existing line that starts with "),n("code",[t._v("GRUB_CMDLINE_LINUX_DEFAULT=...")]),t._v(" with a "),n("code",[t._v("#")]),t._v(", and add a new line below, like this:")]),t._v(" "),n("div",{staticClass:"language-apacheconf extra-class"},[n("pre",{pre:!0,attrs:{class:"language-apacheconf"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"')]),t._v("\nGRUB_CMDLINE_LINUX_DEFAULT="),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n")])])]),n("p",[t._v("Save the file with "),n("em",[t._v("Ctrl+O")]),t._v(" command, confirm with "),n("em",[t._v("Y")]),t._v(", and in shell type:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("user@ubuntu:~$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("update-grub")]),t._v("\n")])])]),n("p",[t._v("Now you can reboot your computer, and enjoy in text-only mode by default. In order to start GUI, just type "),n("code",[t._v("startx")]),t._v(" command.")]),t._v(" "),n("p",[t._v("Source: "),n("a",{attrs:{href:"http://ubuntuforums.org/showthread.php?t=1305659&page=3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Forums post"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/ubuntu-nano-grub.jpg#nozoom",alt:"sudo nano grub"}}),t._v(" "),n("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/ubuntu-text-mode.jpg#nozoom",alt:"grub text mode"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);