(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1301:function(t,e,s){"use strict";s.r(e);var n=s(9),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("WSC.File is a Windows Scripting Component for intuitive I/O operations using "),s("code",[t._v("FileSystemObject")]),t._v(" (FSO). FSO ships with Windows Script Host and serves as a basic file I/O class, but it’s usage is non-intuitive and often confusing. WSC.File is a class that tries to simplify usage of FSO, by offering intuitive methods and parameters.")]),t._v(" "),s("h2",{attrs:{id:"download"}},[s("a",{staticClass:"Permalink",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.dvuckovic.com/downloads/wsc-file.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSC.File"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"Permalink",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("ul",[s("li",[t._v("Windows Script Host")])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"Permalink",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v('Windows Scripting Component must be registered on the end user system, in order for windows script to be able to access it. Registration is easily achieved by right clicking the WSC file in Windows Explorer, and choosing "Register" from the context menu. Windows will then enter information about the component in the registry, and enable all windows scripts (whether they are written in JScript or VBScript) to create instances of it and use it’s methods. Syntax is almost the same, so following JScript example can be easily rewritten in VBScript.')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.dvuckovic.com/projects/wsc-register.jpg",alt:"Register WSC"}})]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"Permalink",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("There is a "),s("code",[t._v("tryFile.js")]),t._v(" file in ZIP distribution which demonstrates quickly the use of the class. Class is used in the following way:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WScript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WSC.File'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello_world.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eof"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nWScript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Echo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Class has a following property:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("WSC.File.eof")])]),t._v(" "),s("p",[t._v('This boolean will return "true" if the end of file (EOF) is encountered during file processing.')])])]),t._v(" "),s("p",[t._v("Class has following methods:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("WSC.File.open(fname, iomode)")])]),t._v(" "),s("p",[t._v("This method opens the file named "),s("code",[t._v("fname")]),t._v(" in specified "),s("code",[t._v("iomode")]),t._v(" (one of the following: "),s("code",[t._v("append")]),t._v(", "),s("code",[t._v("overwrite")]),t._v(", "),s("code",[t._v("read")]),t._v(").")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("WSC.File.readLn()")])]),t._v(" "),s("p",[t._v("This method returns read line as string at the current pointer from the opened file.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("WSC.File.writeLn(writetext)")])]),t._v(" "),s("p",[t._v("This method writes supplied string parameter "),s("code",[t._v("writetext")]),t._v(" at the end of opened file.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("WSC.File.close()")])]),t._v(" "),s("p",[t._v("This method closes the currently opened file.")])])]),t._v(" "),s("p",[t._v("If any errors are encountered, they will be logged at the end of file "),s("code",[t._v("errfile.err")]),t._v(" in working directory.")])])}),[],!1,null,null,null);e.default=a.exports}}]);