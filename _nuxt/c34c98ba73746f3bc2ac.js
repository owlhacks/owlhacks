(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{348:function(t,e,o){var content=o(357);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("7b0d0778",content,!0,{sourceMap:!1})},349:function(t,e,o){var content=o(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("b8080660",content,!0,{sourceMap:!1})},350:function(t,e,o){var content=o(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("12253278",content,!0,{sourceMap:!1})},355:function(t,e,o){var n=o(13);n(n.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},356:function(t,e,o){"use strict";var n=o(348);o.n(n).a},357:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".countdown{display:flex;flex-direction:row;justify-content:center}.block{display:flex;flex-direction:column;margin:0 5px;padding:5px 10px;background:#a41e35;border-radius:3px}.block p{margin:0}.text{font-size:20px;font-weight:40;margin-bottom:5px}.digit,.text{color:#ecf0f1;text-align:center}.digit{font-size:30px;font-weight:100;margin:0}",""])},358:function(t,e,o){"use strict";var n=o(349);o.n(n).a},359:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".jumbo{text-align:center;background:#a41e35;height:100%;position:relative}@media (min-width:992px){.jumbo{padding-top:4%;padding-bottom:2%;text-align:left}.countdown{margin-right:40px}#owl{margin-top:2%}}#owl:hover{-webkit-filter:brightness(120%);filter:brightness(120%);cursor:pointer}@media (max-width:992px){#owl{max-width:300px;max-height:300px}.btn-red{background:#99132a}}@media (max-width:992px){.video-container{display:none}}.video-container{position:absolute;top:0;bottom:0;width:100%;height:100%;overflow:hidden;opacity:.3}.video-container video{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},360:function(t,e,o){"use strict";var n=o(350);o.n(n).a},361:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".logos-ctn{justify-content:center}.logos-ctn img{margin:5px 10px}.text-red{color:#a41e35;font-size:2.3rem}",""])},362:function(t,e,o){"use strict";o.r(e);o(170),o(355),o(171),o(172);var n={filters:{twoDigits:function(t){return t<0?"00":t.toString().length<=1?"0".concat(t):t}},props:{date:{type:String}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3)}},computed:{dateInMilliseconds:function(){return Math.trunc(Date.parse(this.date)/1e3)},seconds:function(){return(this.dateInMilliseconds-this.now)%60},minutes:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60)%60},hours:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60/60)%24},days:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60/60/24)}},mounted:function(){var t=this,e=this.date.split(/[- :]/);this.date=new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5]),window.setInterval(function(){t.now=Math.trunc((new Date).getTime()/1e3)},1e3)}},r=(o(356),o(31)),l={components:{CountdownTimer:Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"countdown"},[o("div",{staticClass:"block"},[o("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),t._v(" "),o("p",{staticClass:"text"},[t._v("Days")])]),t._v(" "),o("div",{staticClass:"block"},[o("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),t._v(" "),o("p",{staticClass:"text"},[t._v("Hrs")])]),t._v(" "),o("div",{staticClass:"block"},[o("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),t._v(" "),o("p",{staticClass:"text"},[t._v("Mins")])]),t._v(" "),o("div",{staticClass:"block"},[o("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),t._v(" "),o("p",{staticClass:"text"},[t._v("Secs")])])])},[],!1,null,null,null).exports},methods:{toggleVideo:function(){var video=document.getElementById("video");video.paused?video.play():video.pause()}}},c=(o(358),Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"jumbo"},[t._m(0),t._v(" "),o("div",{staticClass:"container text-light"},[o("div",{staticClass:"row py-5"},[o("div",{staticClass:"col-xl-7 my-3"},[o("h1",{staticClass:"display-4"},[t._v("OwlHacks")]),t._v(" "),o("p",{staticStyle:{"font-size":"24px"}},[t._v("Temple University's 12 Hour Hackathon")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),o("p",[o("nuxt-link",{staticClass:"btn btn-red btn-lg",attrs:{role:"button",to:"sponsorshipGuide"}},[t._v("Sponsorship Guide")])],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("p",[t._v("Organized by Temple ACM / Temple ACM-W / TUDev")])]),t._v(" "),o("div",{staticClass:"col-xl-5"},[o("img",{attrs:{id:"owl",src:"/owlhacks-logo.png",alt:"owlhacks logo",width:"400",height:"400"},on:{click:t.toggleVideo}}),t._v(" "),o("CountdownTimer",{attrs:{date:"2019-03-30 08:00:00"}})],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-container"},[e("video",{attrs:{id:"video"}},[e("source",{attrs:{src:"/Phillytest2",type:"video/mp4"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("b",[t._v("Who:")]),t._v(" College students with a passion for technology\n          "),o("br"),t._v(" "),o("b",[t._v("Where:")]),t._v(" "),o("a",{attrs:{href:"https://goo.gl/maps/YnJN7i4jKjp",target:"__blank"}},[t._v("SERC Lobby - Temple University, Philadelphia, PA")]),t._v(" "),o("br"),t._v(" "),o("b",[t._v("When:")]),t._v(" Saturday, March 30th, 2019 from 8AM - 10PM\n          "),o("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"btn btn-red btn-lg",attrs:{href:"https://goo.gl/forms/iode42v8iq3S7qqI3",target:"__blank",role:"button"}},[this._v("Register")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"my-0"},[this._v("\n          Questions? Please contact\n          "),e("a",{attrs:{href:"mailto:tudev@temple.edu"}},[this._v("tudev@temple.edu")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"margin-bottom":"2rem"}},[this._v("\n          Interested in sponsoring? Please email\n          "),e("a",{attrs:{href:"mailto:mcginnr@temple.edu"}},[this._v("mcginnr@temple.edu")])])}],!1,null,null,null).exports),d=(o(360),{components:{MainJumbotron:c,SponsorLogos:Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-light py-2"},[o("div",{staticClass:"text-center"},[o("h2",{staticClass:"text-red"},[t._v("Sponsors")]),t._v(" "),o("div",{staticClass:"logos-ctn"},[o("h3",{staticStyle:{color:"#99d1ff"}},[t._v("Title")]),t._v(" "),o("div",{staticClass:"col-xl-12"},[o("img",{attrs:{src:"/sponsors/title/vanguard-logo.png",width:"250",height:"60"}}),t._v(" "),o("img",{attrs:{src:"/sponsors/title/cigna-logo.png",width:"250",height:"80"}}),t._v(" "),o("img",{attrs:{src:"/sponsors/title/elsevier-logo.png",width:"140",height:"140"}}),t._v(" "),o("img",{attrs:{src:"/sponsors/title/lockheedmartin-logo.png",width:"250",height:"120"}}),t._v(" "),o("img",{attrs:{src:"/sponsors/title/lincolnfinancial-logo.png",width:"280",height:"90"}})])]),t._v(" "),o("div",{staticClass:"logos-ctn"},[o("h3",{staticStyle:{"margin-top":"15px",color:"#FFD700"}},[t._v("Gold")]),t._v(" "),o("div",{staticClass:"col-xl-12"},[o("img",{attrs:{src:"/sponsors/gold/brooksource-logo.png",width:"270",height:"110"}}),t._v(" "),o("img",{attrs:{src:"/sponsors/gold/emoney-logo.png",width:"250",height:"70"}})])]),t._v(" "),o("div",{staticClass:"logos-ctn"},[o("h3",{staticStyle:{color:"#aeb3b7"}},[t._v("Silver")]),t._v(" "),o("div",{staticClass:"col-xl-12"},[o("img",{attrs:{src:"/sponsors/silver/google-logo.png",width:"240",height:"80"}}),t._v(" "),o("img",{staticClass:"mx-0",attrs:{src:"/sponsors/silver/almac-logo.png",width:"240",height:"100"}}),t._v(" "),o("img",{attrs:{src:"/sponsors/silver/guru-logo.png",width:"220",height:"48"}}),t._v(" "),o("img",{attrs:{src:"/sponsors/silver/linode-logo.png",width:"220",height:"80"}})])])])])}],!1,null,null,null).exports}}),h=Object(r.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MainJumbotron"),this._v(" "),e("SponsorLogos")],1)},[],!1,null,null,null);e.default=h.exports}}]);