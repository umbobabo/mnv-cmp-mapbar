function ecMapBar(a){var b,c,d,e,f,g="mnv-ec-mapbar";d=g+"-",this.init=function(a){var h={buttons:{reset:{label:"Reset",hoverLabel:"Zoom reset"},zoomIn:{label:"+",hoverLabel:"Zoom in"},zoomOut:{label:"-",hoverLabel:"Zoom out"}}};return e=f(h,a),c(e),b=document.querySelectorAll("."+g),0===b.length?(c("Unable to find a widget with class "+g),!1):(b=b[0],zoomIn=document.createElement("button"),zoomIn.className=d+"zoom-in",zoomIn.setAttribute("title",e.buttons.zoomIn.hoverLabel),zoomIn.innerText=e.buttons.zoomIn.label,zoomOut=document.createElement("button"),zoomOut.className=d+"zoom-out",zoomOut.setAttribute("title",e.buttons.zoomOut.hoverLabel),zoomOut.innerText=e.buttons.zoomOut.label,b.appendChild(zoomIn),e.buttons.reset&&(zoomReset=document.createElement("button"),zoomReset.className=d+"zoom-reset",zoomReset.setAttribute("title",e.buttons.reset.hoverLabel),zoomReset.innerText=e.buttons.reset.label,b.appendChild(zoomReset)),void b.appendChild(zoomOut))},c=function(a){window.console&&window.console.log&&console.log(a)},f=function(a,b){for(var c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},arguments.callee(a[c],b[c])):a[c]=b[c];return a},a||(c("You haven't provided a config object, this component will use this default settings"),c(JSON.stringify(a))),this.init(a)}var eczoombarConfig={config:{bundle:{assets:{version:"testmapbar001",host:"cdn.static-economist.com"},data:{version:"testmapbar001","url[THIS-OVERWRITE-HOST-IN-JSON-JSONP-BUNDLE]":"http://YOUR-JSON-URL",host:"localhost:3000/projects/ec-mapbar","host[PRODUCTION-RENAME-TO-HOST]":"cdn.static-economist.com",provider:"None"}}},minerva:{name:"Minerva",ns:{js:"ecmapbar",css:"ec-mapbar",folder:"ec-mapbar"},description:"Set of tools used by The Economist Front End Team",version:"0.1.0",debugMode:!0,"private":!0,homepage:"https://github.com/the-economist-editorial/minerva",author:{name:"Umberto Babini",email:"umbertobabini@economist.com"},devDependencies:{bower:"~1.2.7",express:"^4.10.6","express-handlebars":"^1.1.0","express-logger":"0.0.3",grunt:"~0.4.1","grunt-browser-sync":"^1.5.3","grunt-cli":"^0.1.13","grunt-contrib-concat":"~0.3.0","grunt-contrib-jasmine":"0.5.1","grunt-contrib-jshint":"0.6.4","grunt-contrib-uglify":"~0.2.4","grunt-contrib-watch":"^0.6.1","grunt-githooks":"~0.2.0","grunt-handlebars-compiler":"0.0.7","grunt-ngmin":"0.0.3","grunt-sass":"0.6.0","grunt-shell":"~0.5.0","grunt-usemin":"~0.1.12",url:"^0.10.1","yeoman-generator":"^0.18.4","grunt-criticalcss":"^0.5.0"},engines:{node:">=0.8.0"}}};