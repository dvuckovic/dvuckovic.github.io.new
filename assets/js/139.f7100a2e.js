(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1306:function(e,t,a){"use strict";a.r(t);var s=a(9),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("em",[e._v("UPDATE: For a guide on PGP encryption for Gmail, checkout "),a("RouterLink",{attrs:{to:"/posts/setup-pgp-encryption-gmail.html"}},[e._v("a separate post here")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("It’s a sad truth that not one of the big email providers like "),a("em",[e._v("Gmail")]),e._v(" support the "),a("em",[e._v("S/MIME encryption")]),e._v(" in their products on a free plan. For a technology that dates back to 1990s, it’s almost trivial to implement it, but it looks like they decided to target mostly enterprise with this and similar security features.")]),e._v(" "),a("p",[e._v("Which is probably non-sense: the corporate world would almost certainly have this up & running on their own, as security is not something you would like to off-load to third parties.")]),e._v(" "),a("h2",{attrs:{id:"shoddy-industry-practice"}},[a("a",{staticClass:"Permalink",attrs:{href:"#shoddy-industry-practice"}},[e._v("#")]),e._v(" Shoddy Industry Practice")]),e._v(" "),a("p",[e._v("Another unfortunate thing is that most of the certificate authorities out there have stopped with issuing free S/MIME certificates. At one point, all of the bigger names in the industry had a free plan which, while limited to a year or so, was still a viable option for many.")]),e._v(" "),a("p",[e._v("At the end of year 2020, things are quite bad: "),a("em",[e._v("Comodo")]),e._v(" was the last big name "),a("a",{attrs:{href:"https://secure.nurd.com/products/purchase.php?area=SecureEmailCertificate",target:"_blank",rel:"noopener noreferrer"}},[e._v("to stop issuing free certificates"),a("OutboundLink")],1),e._v(" at some point, and "),a("em",[e._v("Actalis")]),e._v(" has "),a("a",{attrs:{href:"https://extrassl.actalis.it/portal/uapub/freemail",target:"_blank",rel:"noopener noreferrer"}},[e._v("an awful practice"),a("OutboundLink")],1),e._v(" of not allowing you to generate and keep a private key on your side.")]),e._v(" "),a("p",[e._v("The thing is, unless you really need for a third party to identify your identity, you can still benefit from signing/encrypting emails on your own. You can be your own certificate authority 😉")]),e._v(" "),a("h2",{attrs:{id:"checklist"}},[a("a",{staticClass:"Permalink",attrs:{href:"#checklist"}},[e._v("#")]),e._v(" Checklist")]),e._v(" "),a("p",[e._v("Well, the good news is that if you want to implement an S/MIME encryption workflow you are probably already good to go! All that you would need is:")]),e._v(" "),a("ul",[a("li",[e._v("Access to "),a("em",[e._v("Gmail")]),e._v(" or a similar email service")]),e._v(" "),a("li",[e._v("Relatively recent "),a("em",[e._v("OpenSSL")]),e._v(" installation")]),e._v(" "),a("li",[e._v("Some secure backup storage for sensitive data")]),e._v(" "),a("li",[a("em",[e._v("Thunderbird")]),e._v(" or a similar email client")])]),e._v(" "),a("h2",{attrs:{id:"openssl-setup"}},[a("a",{staticClass:"Permalink",attrs:{href:"#openssl-setup"}},[e._v("#")]),e._v(" OpenSSL Setup")]),e._v(" "),a("p",[e._v("First, you need up & running "),a("em",[e._v("OpenSSL")]),e._v(" setup. You are most likely to already have it installed, you can verify with the following console command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ openssl version\nLibreSSL "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.8")]),e._v(".3\n")])])]),a("p",[e._v("In this case, command was run on a recent "),a("em",[e._v("macOS")]),e._v(" system, and you can see that it’s using a "),a("em",[e._v("LibreSSL")]),e._v(" variant.")]),e._v(" "),a("p",[e._v("Using "),a("em",[e._v("OpenSSL")]),e._v(" can be very daunting, but one way to simplify it is to prepare a configuration file that you will use for most of the actions that require many options to be defined.")]),e._v(" "),a("p",[e._v("To do this for S/MIME certificate generation, simply put the following in a file called "),a("code",[e._v("smime.conf")]),e._v(" in a folder of your choice:")]),e._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[req]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("distinguished_name")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" req_distinguished_name")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[req_distinguished_name]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("countryName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" Country Name (2 letter code)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("countryName_default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("countryName_min")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 2")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("countryName_max")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 2")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("stateOrProvinceName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" State or Province Name (full name)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("stateOrProvinceName_default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("localityName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" Locality Name (eg, city)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("localityName_default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("0.organizationName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" Organization Name (eg, company)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("0.organizationName_default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("organizationalUnitName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" Organizational Unit Name (eg, section)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("organizationalUnitName_default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("commonName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" Common Name (e.g. server FQDN or YOUR name)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("commonName_default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("commonName_max")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 64")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("emailAddress")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" Email Address")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("emailAddress_default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("emailAddress_max")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 40")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[smime]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("basicConstraints")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" CA:FALSE")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("keyUsage")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" nonRepudiation, digitalSignature, keyEncipherment")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("subjectKeyIdentifier")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" hash")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("authorityKeyIdentifier")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" keyid:always,issuer")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("subjectAltName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" email:copy")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("extendedKeyUsage")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" emailProtection")]),e._v("\n")])])]),a("p",[e._v("Note that each of the fields can have a "),a("code",[e._v("*_default")]),e._v(" value set, so whatever you put in there will be used out of box (however you can change it at the time of invocation).")]),e._v(" "),a("p",[e._v("With config file in place, you can set an environment variable that points to it, so it will be used for remainder of your console session:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("OPENSSL_CONF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/path/to/smime.conf\n")])])]),a("h2",{attrs:{id:"generate-certificate-authority"}},[a("a",{staticClass:"Permalink",attrs:{href:"#generate-certificate-authority"}},[e._v("#")]),e._v(" Generate Certificate Authority")]),e._v(" "),a("p",[a("em",[e._v("NOTE: You will need a separate CA for "),a("em",[e._v("each")]),e._v(" self-signed certificate you create! I learned this the hard way, and it could be a bug in Thunderbird or something, but by sticking to this rule, you will probably have fewer issues down the line.")])]),e._v(" "),a("p",[e._v("First, generate a private key just for the purpose of your own certificate authority:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("openssl genrsa -aes256 -out ca.key "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v("\n")])])]),a("p",[e._v("Provide a strong passphrase when asked, it will be used to secure your private key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Generating RSA private key, 4096 bit long modulus\n........................................................................................................................................................++\n...........................................................................................................................++\ne is 65537 (0x10001)\nEnter pass phrase for ca.key:\nVerifying - Enter pass phrase for ca.key:\n")])])]),a("p",[e._v("Next, generate a self-signed certificate for the certificate authority:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("openssl req -new -x509 -days "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3650")]),e._v(" -key ca.key -out ca.crt\n")])])]),a("p",[e._v("You can choose which certificate fields you want to set, but keep in mind that "),a("em",[e._v("Common Name")]),e._v(" ("),a("code",[e._v("commonName")]),e._v(") should be set to something senseful, like "),a("strong",[e._v("My Certificate Authority")]),e._v(". Additionally, please keep the "),a("em",[e._v("Email Address")]),e._v(" ("),a("code",[e._v("emailAddress")]),e._v(") empty (in case there is a default value, you can blank it by putting a dot "),a("code",[e._v(".")]),e._v(" when prompted).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Enter pass phrase for ca.key:\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) []:GB\nState or Province Name (full name) []:Berkshire\nLocality Name (eg, city) []:Reading\nOrganization Name (eg, company) []:\nOrganizational Unit Name (eg, section) []:\nCommon Name (e.g. server FQDN or YOUR name) []:My Certificate Authority\nEmail Address []:\n")])])]),a("h2",{attrs:{id:"generate-s-mime-certificate"}},[a("a",{staticClass:"Permalink",attrs:{href:"#generate-s-mime-certificate"}},[e._v("#")]),e._v(" Generate S/MIME Certificate")]),e._v(" "),a("p",[e._v("Finally, we are ready to generate personal S/MIME certificate. We start by generating another private key for it:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("openssl genrsa -aes256 -out smime.key "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v("\n")])])]),a("p",[e._v("Provide a strong passphrase when asked, it will be used to secure your private key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Generating RSA private key, 4096 bit long modulus\n......................................................................++\n......................++\ne is 65537 (0x10001)\nEnter pass phrase for smime.key:\nVerifying - Enter pass phrase for smime.key:\n")])])]),a("p",[e._v("Next, we can create a certificate signing request:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("openssl req -new -key smime.key -out smime.csr\n")])])]),a("p",[e._v("You can choose which certificate fields you want to set, but keep in mind that "),a("em",[e._v("Common Name")]),e._v(" ("),a("code",[e._v("commonName")]),e._v(") should be set to something senseful, like your full name. Additionally, please enter your account’s email address in the "),a("em",[e._v("Email Address")]),e._v(" ("),a("code",[e._v("emailAddress")]),e._v(") field.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Enter pass phrase for smime.key:\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) []:GB\nState or Province Name (full name) []:Berkshire\nLocality Name (eg, city) []:Reading\nOrganization Name (eg, company) []:\nOrganizational Unit Name (eg, section) []:\nCommon Name (e.g. server FQDN or YOUR name) []:John Doe\nEmail Address []:jdoe@example.com\n")])])]),a("p",[e._v("Then, we can sign the certificate using the certificate authority we created in the previous step:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("openssl x509 -req -days "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3650")]),e._v(" -in smime.csr -CA ca.crt -CAkey ca.key -out smime.crt -set_serial "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -addtrust emailProtection -addreject clientAuth -addreject serverAuth -trustout\n")])])]),a("p",[e._v("In this case, we will create a certificate valid for "),a("em",[e._v("10")]),e._v(" years ("),a("em",[e._v("3650")]),e._v(" days), but you can change this value at this time.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Signature ok\nsubject=/C=GB/ST=Berkshire/L=Reading/CN=John Doe/emailAddress=jdoe@example.com\nGetting CA Private Key\nEnter pass phrase for ca.key:\n")])])]),a("p",[e._v("Finally, we can package the certificate into the widely recognized PKCS12 format:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("openssl pkcs12 -export -in smime.crt -inkey smime.key -out smime.p12\n")])])]),a("p",[e._v("You will need to armor the certificate export with an additional passphrase, since it will contain the private key as well.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Enter pass phrase for smime.key:\nEnter Export Password:\nVerifying - Enter Export Password:\n")])])]),a("h2",{attrs:{id:"thunderbird-setup"}},[a("a",{staticClass:"Permalink",attrs:{href:"#thunderbird-setup"}},[e._v("#")]),e._v(" Thunderbird Setup")]),e._v(" "),a("p",[e._v("This guide assumes you already have your "),a("em",[e._v("Gmail")]),e._v(" account setup in "),a("em",[e._v("Thunderbird")]),e._v(". It can be either via "),a("em",[e._v("IMAP")]),e._v(" or "),a("em",[e._v("POP3")]),e._v(" protocol, it doesn’t really matter. In case you are having trouble with this, check your settings in the "),a("em",[e._v("Gmail")]),e._v(" web interface, and make sure the desired protocol is enabled. You can then use the new account wizard in "),a("em",[e._v("Thunderbird")]),e._v(" for connecting your account and authenticating via "),a("em",[e._v("OAuth2")]),e._v(".")]),e._v(" "),a("p",[e._v("Once the account is setup, go to the "),a("strong",[e._v("Tools > Account Settings")]),e._v(" screen, and on "),a("strong",[e._v("End-To-End Encryption")]),e._v(" under your account click on the "),a("strong",[e._v("Manage S/MIME Certificates")]),e._v(" button:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-account-settings.png#nozoom",alt:"Account Settings"}})]),e._v(" "),a("p",[e._v("Next, click on the "),a("strong",[e._v("Your Certificates")]),e._v(" tab and then on the "),a("strong",[e._v("Import")]),e._v(" button:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-import-certificate.png#nozoom",alt:"Import Certificate"}})]),e._v(" "),a("p",[e._v("Point it to your PKCS12 file generated in the previous step ("),a("code",[e._v("smime.p12")]),e._v(") and click "),a("strong",[e._v("Open")]),e._v(".")]),e._v(" "),a("p",[e._v("Then, you need to also import your certificate authority, by going to the "),a("strong",[e._v("Authorities")]),e._v(" tab and clicking on "),a("strong",[e._v("Import")]),e._v(" button below. Point to the previously generated "),a("code",[e._v("ca.crt")]),e._v(" file and click "),a("strong",[e._v("Open")]),e._v(". In the next dialog, you can adjust the trust of your certificate authority, by marking the checkbox "),a("strong",[e._v("Trust this CA to identify email users.")]),e._v(" and confirm with "),a("strong",[e._v("OK")]),e._v(". Close the dialog with another "),a("strong",[e._v("OK")]),e._v(", and you will be back in the "),a("strong",[e._v("Account Settings")]),e._v(" screen.")]),e._v(" "),a("p",[e._v("Finally, select your certificate in both signing and encryption fields by clicking "),a("strong",[e._v("Select")]),e._v(" next to each. Your certificate name should be easily identifiable via its "),a("strong",[e._v("Common Name")]),e._v(" field you set in one of the previous steps.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-select-certificate.png#nozoom",alt:"Select Certificate"}})]),e._v(" "),a("p",[e._v("That’s it! You are now ready for some encryption tests.")]),e._v(" "),a("h2",{attrs:{id:"test-signing"}},[a("a",{staticClass:"Permalink",attrs:{href:"#test-signing"}},[e._v("#")]),e._v(" Test Signing")]),e._v(" "),a("p",[e._v("Just fire off the write email button, and choose the "),a("strong",[e._v("Digitally Sign This Message")]),e._v(" option from the "),a("strong",[e._v("Security")]),e._v(" toolbar button. In case you don’t have the PGP mechanism set up, the "),a("strong",[e._v("Encryption Technology")]),e._v(" will default to "),a("strong",[e._v("S/MIME")]),e._v(" for you automatically.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-message-signing.png#nozoom",alt:"Signing Message"}})]),e._v(" "),a("p",[e._v("Make sure the email is being sent out from you email address. For signing messages, the recipient does not have to have their S/MIME certificate set up.")]),e._v(" "),a("p",[e._v("You can also just save a draft of the message, and check if it’s signed correctly without actually sending it. Look for a small sign badge in the upper right corner of the message preview, for a confirmation that signing was successful.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-message-signed.png#nozoom",alt:"Signed Message Badge"}})]),e._v(" "),a("h2",{attrs:{id:"test-encryption"}},[a("a",{staticClass:"Permalink",attrs:{href:"#test-encryption"}},[e._v("#")]),e._v(" Test Encryption")]),e._v(" "),a("p",[e._v("To properly test the encryption with the certificate you just generated, you will need access to a second email account. To encrypt for the first email address, you actually need to add that address to the recipients (not the sender!).")]),e._v(" "),a("p",[e._v("Similarly to the signing, you can write a message and activate "),a("strong",[e._v("Require Encryption")]),e._v(" option from the "),a("strong",[e._v("Security")]),e._v(" toolbar button.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-message-encryption.png#nozoom",alt:"Encrypting Message"}})]),e._v(" "),a("p",[e._v("Saving the message as a draft will do the encryption for you, and you can check for confirmation again in the message preview header, where a suitable encrypted badge will be shown.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-message-encrypted.png#nozoom",alt:"Encrypted Message Badge"}})]),e._v(" "),a("h2",{attrs:{id:"test-signing-encryption"}},[a("a",{staticClass:"Permalink",attrs:{href:"#test-signing-encryption"}},[e._v("#")]),e._v(" Test Signing & Encryption")]),e._v(" "),a("p",[e._v("Full test can be pulled off by combining both options ("),a("strong",[e._v("Digitally Sign This Message")]),e._v(" and "),a("strong",[e._v("Require Encryption")]),e._v("), but you need to understand it will be impossible to test both the signature and encryption with the same certificate. They are mutually exclusive, since you will always be signing only messages from your, and only incoming messages will be encrypted.")]),e._v(" "),a("p",[e._v("However, in case you have access to another email account that has its own pair of certificates set up, you can at least simulate signed & encrypted conversation. In that case, messages will be marked with a combined badge in their preview header.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.dvuckovic.com/posts/smime-message-signed-encrypted.png#nozoom",alt:"Signed & Encrypted Message Badge"}})]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"Permalink",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Although it's not available for the web interface, approach outlined above is a viable way to have an S/MIME encryption workflow integrated in "),a("em",[e._v("Gmail")]),e._v(" or other email services. Especially if seldomly used, in case of some sensitive correspondence.")]),e._v(" "),a("p",[e._v("With certificates packaged and ready, you can also use them on other systems, for example on "),a("em",[e._v("Android")]),e._v(" via a suitable app (warm recommendation for the "),a("a",{attrs:{href:"https://email.faircode.eu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FairEmail"),a("OutboundLink")],1),e._v(" app, which supports S/MIME encryption, although as a premium feature).")]),e._v(" "),a("p",[a("small",[a("em",[e._v("Reference: "),a("a",{attrs:{href:"https://www.dalesandro.net/create-self-signed-smime-certificates/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create Self-Signed S/MIME Certificates"),a("OutboundLink")],1),e._v(" by John Dalesandro")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);