(window.webpackJsonp=window.webpackJsonp||[]).push([[16,21],{1311:function(t,n,a){"use strict";a.r(n);var e={extends:a(568).default,data:function(){return{type:"doughnut",colors:["#ff6384","#f771ae","#e485d1","#c899ea","#aaaaf7","#91b9fa","#84c5f5","#87ceeb","#5dd2e2","#40d5ca","#51d4a5","#78d078","#a4c74a","#d1b821","#ffa119","#ff940d","#ff8604","#ff7700"]}},methods:{datasetOptions:function(){return{backgroundColor:this.colors,borderWidth:.75}},dataOptions:function(t){return{datasets:t,labels:this.labels}},chartOptions:function(){return{legend:{position:"right",align:"end",labels:{fontFamily:'"Inter", sans-serif',fontColor:"#888",fontSize:13,usePointStyle:!0}}}}}},i=a(9),s=Object(i.a)(e,void 0,void 0,!1,null,null,null);n.default=s.exports},557:function(t,n,a){},563:function(t,n,a){"use strict";a(557)},568:function(t,n,a){"use strict";a.r(n);a(62),a(63);var e=a(564),i=a(570),s=a.n(i),o=(a(576),{props:{data:{type:null},labels:{type:Array}},data:function(){return{type:null}},chart:null,watch:{data:function(t){this.initChart(t)},labels:function(){this.initChart(this.data)}},mounted:function(){this.initChart(this.data)},beforeDestroy:function(){this.$options.chart=null},methods:{initChart:function(t){var n=this;if(t&&t.length){var a=[];t.forEach((function(i,s){a.push(Object(e.a)(Object(e.a)({},n.datasetOptions(s,t)),{},{data:i}))})),this.$options.chart=new s.a(this.$refs.chart.getContext("2d"),{type:this.type,data:this.dataOptions(a),options:Object(e.a)(Object(e.a)({},this.chartOptions()),{},{elements:{line:{tension:0}},tooltips:{intersect:!1,displayColors:!1},plugins:{deferred:{yOffset:"50%"}}})})}},datasetOptions:function(){return{}},dataOptions:function(t){return{datasets:t}},chartOptions:function(){return{}}}}),r=(a(563),a(9)),c=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"chart",staticClass:"chart"})}),[],!1,null,null,null);n.default=c.exports}}]);