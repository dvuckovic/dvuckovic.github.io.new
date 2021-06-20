(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1304:function(t,s,e){"use strict";e.r(s);var n=e(9),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("WSC.PostScript is a Windows Scripting Component for reading/writing local PostScript (PS) files. It employs "),e("RouterLink",{attrs:{to:"/2003/05/24/wsc-file/"}},[t._v("WSC.File component")]),t._v(" to read/write PS files and offers procedural access to some common PS tasks and procedures.")],1),t._v(" "),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"Permalink",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cdn.dvuckovic.com/downloads/wsc-postscript.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSC.PostScript"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"Permalink",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("Windows Script Host")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/2003/05/24/wsc-file/"}},[t._v("WSC.File component")])],1)]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"Permalink",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v('Windows Scripting Component must be registered on the end user system, in order for windows script to be able to access it. Registration is easily achieved by right clicking the WSC file in Windows Explorer, and choosing "Register" from the context menu. Windows will then enter information about the component in the registry, and enable all windows scripts (whether they are written in JScript or VBScript) to create instances of it and use its methods. Syntax is almost the same, so following JScript example can be easily rewritten in VBScript.')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.dvuckovic.com/projects/wsc-register.jpg",alt:"Register WSC"}})]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"Permalink",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("There is a "),e("code",[t._v("tryPS.js")]),t._v(" file in ZIP distribution which demonstrates quickly the use of the class. Class is used in the following way:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PostScript WSC Test")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ps "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WScript"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WSC.PostScript'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("initPS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.ps'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("coord")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("thickness")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("circle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("endPS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("All units are entered in millimeters (mm), which are defined in 72dpi resolution (1 mm = 1/25.4 x 72 pt). Class has no properties and has following methods:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("WSC.PostScript.initPS(fName, xl, yl, xu, yu)")])]),t._v(" "),e("p",[t._v("This method initializes EPS file named "),e("code",[t._v("fname")]),t._v(" and sets boundaries to "),e("code",[t._v("xl")]),t._v(", "),e("code",[t._v("yl")]),t._v(" (bottom left corner) and "),e("code",[t._v("xu")]),t._v(", "),e("code",[t._v("yu")]),t._v(" (upper right corner).")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.coord(xc, yc, xx, yx)")])]),t._v(" "),e("p",[t._v("This method sets coordinate origin to "),e("code",[t._v("xc")]),t._v(", "),e("code",[t._v("yc")]),t._v(" for all subsequent methods, and rotates the coordinate system using the x-axis point located at "),e("code",[t._v("xx")]),t._v(", "),e("code",[t._v("yx")]),t._v(".")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.line(x1, y1, x2, y2)")])]),t._v(" "),e("p",[t._v("This method draws a straight line from point "),e("code",[t._v("x1")]),t._v(", "),e("code",[t._v("y1")]),t._v(" to point "),e("code",[t._v("x2")]),t._v(", "),e("code",[t._v("y2")]),t._v(".")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.rectangle(x1, y1, x2, y2)")])]),t._v(" "),e("p",[t._v("This method draws outlined rectangle from point "),e("code",[t._v("x1")]),t._v(", "),e("code",[t._v("y1")]),t._v(" (bottom left corner) to point "),e("code",[t._v("x2")]),t._v(", "),e("code",[t._v("y2")]),t._v(" (upper right corner).")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.circle(xc, yc, r)")])]),t._v(" "),e("p",[t._v("This method draws outlined circle whose center is located at "),e("code",[t._v("xc")]),t._v(", "),e("code",[t._v("yc")]),t._v(" and whose radius is "),e("code",[t._v("r")]),t._v(".")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.thickness(thick)")])]),t._v(" "),e("p",[t._v("This method sets outline thickness to "),e("code",[t._v("thick")]),t._v(" value. Outline of all subsequent objects will have this thickness.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.style(stroke, space)")])]),t._v(" "),e("p",[t._v("This method sets dashed outline style using "),e("code",[t._v("stroke")]),t._v(" and "),e("code",[t._v("space")]),t._v(" values for all subsequent objects. Invoke this method with stroke and space set to null to clear dashed space setting.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.color(cyanred, magentagreen, yellowblue[, black])")])]),t._v(" "),e("p",[t._v("This method sets current color to supplied values. If black is set to other than "),e("code",[t._v("null")]),t._v(", color will be set in CMYK, otherwise RGB color space will be used.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.fill()")])]),t._v(" "),e("p",[t._v("This method fills last drawn object using the current color value.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.font(fontname, size)")])]),t._v(" "),e("p",[t._v("This method sets current font to "),e("code",[t._v("fontname")]),t._v(" in "),e("code",[t._v("size")]),t._v(". Keep in mind that PS file won’t have embedded fonts by default, if you want to use custom font, be sure to embed it in PS file (try using "),e("code",[t._v("eval")]),t._v(" method).")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.text(x, y, string)")])]),t._v(" "),e("p",[t._v("This method outputs "),e("code",[t._v("string")]),t._v(" at coordinates "),e("code",[t._v("x")]),t._v(", "),e("code",[t._v("y")]),t._v(" using the current font and color.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.eval(code)")])]),t._v(" "),e("p",[t._v("This method inserts additional PS code in PS file. Keep in mind it will not be validated for syntax errors, so be sure to clean up any errors before you insert it. Use "),e("code",[t._v("\\n")]),t._v(" for line breaks.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("WSC.PostScript.endPS()")])]),t._v(" "),e("p",[t._v("This method finishes up PS output and closes PS file. This method is mandatory, in order to produce valid PS file.")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);