(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{510:function(e,t,r){"use strict";r.r(t);var s=r(6),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"postgresql11-2数据恢复记录-from-physical-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#postgresql11-2数据恢复记录-from-physical-files"}},[e._v("#")]),e._v(" PostgreSQL11.2数据恢复记录（From Physical Files）")]),e._v(" "),r("blockquote",[r("p",[e._v("记录一下PostgreSQL11.2的数据恢复，场景是这样的，我们在A主机（windows server 2008）上安装一个PostgreSQL11.2，突然有一天A主机坏掉了，只能将磁盘卸载下来挂载到新的主机上，但是如何才能快速有效的将之前磁盘中的数据恢复呢？")])]),e._v(" "),r("h2",{attrs:{id:"重新注册为windows服务-失败"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重新注册为windows服务-失败"}},[e._v("#")]),e._v(" 重新注册为windows服务（失败）")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("这里我使用主机B（windows server 2012 R2）进行重新注册\n")])])]),r("p",[e._v("参考"),r("a",{attrs:{href:"https://blog.csdn.net/weixin_33700350/article/details/92542638",target:"_blank",rel:"noopener noreferrer"}},[e._v("重新注册PostgreSQL服务"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("ol",[r("li",[e._v("找到并PostgreSQL的安装路径，在此启动命令行工具")]),e._v(" "),r("li",[e._v("使用"),r("strong",[e._v("pg_ctl")]),e._v("命令将PostgreSQL11.2重新注册为服务，该命令的具体用法和写法可以查看pg_ctl帮助文档（pg_ctl --help）")])])]),e._v(" "),r("p",[e._v("结果很现实，没有能够成功，具体的原因未知，返回提示消息为："),r("em",[e._v("无法注册服务，错误码1783")])]),e._v(" "),r("p",[e._v("此路不通，那我只能换一种方式。")]),e._v(" "),r("h2",{attrs:{id:"替换postgresql的数据目录-成功"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#替换postgresql的数据目录-成功"}},[e._v("#")]),e._v(" 替换PostgreSQL的数据目录（成功）")]),e._v(" "),r("p",[e._v("PostgreSQL的数据是存储到"),r("strong",[e._v("data")]),e._v("目录下，具体的目录是服务安装的时候指定的，默认是在服务的安装目录下。只要你还拥有完整的"),r("strong",[e._v("data")]),e._v("目录，那么你是完全可以从这一份原始物理文件进行数据恢复的。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("在这里我使用主机C（windows10）作为测试机\n")])])]),r("ol",[r("li",[e._v("先在C主机上安装PostgreSQL11.2")]),e._v(" "),r("li",[e._v("将原始"),r("strong",[e._v("data")]),e._v("目录拷贝到C主机PostgreSQL数据存在目录（即data）的同级目录，并重命名为data-bak（命名随意，符合规则且不冲突就行）")]),e._v(" "),r("li",[e._v("然后参照"),r("a",{attrs:{href:"https://wiki.postgresql.org/wiki/Change_the_default_PGDATA_directory_on_Windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("Change the default PGDATA directory on Windows"),r("OutboundLink")],1),e._v("完成剩余替换步骤\n"),r("ul",[r("li",[e._v("停止C主机的PostgreSQl11.2服务")]),e._v(" "),r("li",[e._v("修改注册表，用意为重新指定服务使用的"),r("strong",[e._v("data")]),e._v("目录，替换为我拷贝的"),r("strong",[e._v("data-bak")]),e._v("目录，注册表路径：HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\pgsql-some version，修改ImagePath项的value值中 "),r("strong",[e._v("-D")]),e._v(" 参数")]),e._v(" "),r("li",[e._v("到windows服务管理中查看PostgreSQL服务属性，检验可执行文件路径中是否已经指向了"),r("strong",[e._v("data-bak")]),e._v("路径")]),e._v(" "),r("li",[e._v("重启PostgreSQL服务")])])])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("这里有坑，请注意！\n如果出现服务启动后停止，请进行以下检查：\n\n1. 检查 data-bak 目录权限，确保该目录和同级的 data 目录的权限一致\n\n2. 检查 是否存在 postmaster.pid 文件，如果存在将其删除（这个未测试，听说可以哦）\n\n3. 检查 postgresql.conf 文件，保持端口号、语言环境（lc_messages、lc_monetary、lc_numeric、lc_time）等基础配置和当前的服务一致，避免配置异常导致启动失败\n\n4. 检查 pg_hba.conf 文件\n")])])]),r("hr"),e._v(" "),r("p",[e._v("我按照步骤完成了以上操作，但是发现还是无法在服务管理中启动服务，我通过事件查看器查看日志，也只是看到"),r("strong",[e._v("超时")]),e._v("导致启动失败，遂又google+baidu一把，获取链接一个"),r("a",{attrs:{href:"https://www.cnblogs.com/telwanggs/p/12599238.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("postgresql 在等待服务器启动时超时"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("在这里提到需要执行一个命令："),r("strong",[e._v("pg_resetwal -f E:\\Server\\PostgreSQL\\11\\data-bak")]),e._v("\n执行成功会得到打印信息："),r("strong",[e._v("Write-ahead log reset")])]),e._v(" "),r("p",[e._v("然后可以直接在命令行验证是否可以正常启动："),r("strong",[e._v("pg_ctl -D E:\\Server\\PostgreSQL\\11\\data-bak")])]),e._v(" "),r("p",[r("strong",[e._v("登录密码应该是旧的密码，我这里是直接使用刚安装PostgreSQL产生的postgresql.conf 替换了data-bak中的postgresql.conf ，所以我的登录密码是新设置的，你实在不知道你就改嘛")])]),e._v(" "),r("p",[r("strong",[e._v("我到这里已经能够成功启动了，但是还有坑，还是因为语言环境导致的，如果你的语言环境都一致，那么应该没啥问题了，问题解决方案看后记，最下面")])]),e._v(" "),r("p",[e._v("以下部分为pg_resetwal命令的网络解释"),r("a",{attrs:{href:"http://www.postgres.cn/docs/10/app-pgresetwal.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("pg_resetwal"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("pg_resetwal — 重置一个PostgreSQL数据库集簇的预写式日志以及其他控制信息\n\npg_resetwal [-f] [-n] [option...] {[-D] datadir}\n\n\npg_resetwal会清除预写式日志（WAL）并且有选择地重置存储在 pg_control文件中的一些其他控制信息。如果这些文件已经被损坏， 某些时候就需要这个功能。当服务器由于这样的损坏而无法启动时， 这只应该被用作最后的手段。在运行这个命令之后，就应该可以启动服务器， 但是记住数据库可能包含由于部分提交事务产生的不一致数据。 你应当立刻转储你的数据、运行initdb并且重新载入。重新载入后， 检查不一致并且根据需要修复之。这个工具只能被安装服务器的用户运行，因为它要求对数据目录的读写访问。 出于安全原因，你必须在命令行中指定数据目录。pg_resetwal 不使用环境变量PGDATA。如果pg_resetwal抱怨它无法为pg_control 决定合法数据，你可以通过指定-f（强制）选项强制它继续。 在这种情况下，丢失的数据将被替换为看似合理的值。可以期望大部分域是匹配的， 但是下一个 OID、下一个事务 ID 和纪元、下一个多事务 ID 和偏移以及 WAL 开始地址域可能还是需要人工协助。这些域可以使用下面讨论的选项设置。 如果你不能为所有这些域决定正确的值，-f还是可以被使用， 但是恢复的数据库还是值得怀疑：一次立即的转储和重新载入是势在必行的。 在你转储之前不要在该数据库中执行任何数据修改操作， 因为任何这样的动作都可能使破坏更严重。\n")])])]),r("h2",{attrs:{id:"后记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[e._v("#")]),e._v(" 后记")]),e._v(" "),r("p",[e._v("通过替换"),r("strong",[e._v("data")]),e._v("目录的方式，我已经成功启动了PostgreSQL服务，但是我在登录的时候出现了错误，提示信息如下：\n"),r("strong",[e._v('数据库集群是以 LC_COLLATE "Chinese (Simplified)_People\'s Republic of China.936"来初始化的，这个排序规则无法由setlocale()识别')])]),e._v(" "),r("p",[e._v("没错，我之前确实是将"),r("strong",[e._v("postgresql.conf")]),e._v("配置文件中的语言环境从"),r("strong",[e._v("Chinese (Simplified)_People's Republic of China.936")]),e._v("修改为"),r("strong",[e._v("Chinese (Simplified)_China.936")]),e._v("，不然服务没有办法启动。")]),e._v(" "),r("p",[e._v("我......，就差这临门一脚，怎么办，先看看能不能在我的windows10笔记本上切换语言环境。")]),e._v(" "),r("p",[e._v("然后 ...... ...... ...... ......")]),e._v(" "),r("p",[e._v("算了，这个肯定不是什么好办法，我不能设置环境，那我找一个支持的环境总行了吧，原始环境我是没治了，好像win7的语言环境和原始环境一致（"),r("strong",[e._v("Chinese (Simplified)_People's Republic of China.936")]),e._v("），好好好，看到了希望的曙光")]),e._v(" "),r("p",[e._v("咳咳，搜索引擎诚不欺我也，哈哈哈！恢复完成。")]),e._v(" "),r("p",[e._v("其实，一开始就可以先看看官方的文档的......，Mark一下"),r("a",{attrs:{href:"http://www.postgres.cn/docs/11/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL 11.2 手册"),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("参考链接：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://stackoverrun.com/cn/q/742407",target:"_blank",rel:"noopener noreferrer"}},[e._v("Recover postgreSQL databases from raw physical files"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://wiki.postgresql.org/wiki/Change_the_default_PGDATA_directory_on_Windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("Change the default PGDATA directory on Windows"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/telwanggs/p/12599238.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("postgresql 在等待服务器启动时超时"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.postgres.cn/docs/10/app-pgresetwal.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("pg_resetwal"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://kb.kutu66.com/database/post_1092134",target:"_blank",rel:"noopener noreferrer"}},[e._v("postgresql - 从原始物理文件恢复PostgreSQL数据库"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.mamicode.com/info-detail-3048854.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("无效的语言环境名称 Chinese (Simplified)_People''s Republic of China.936"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_33700350/article/details/92542638",target:"_blank",rel:"noopener noreferrer"}},[e._v("重新注册PostgreSQL服务"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);