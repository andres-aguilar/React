(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports={categories:[{id:1,description:"Lo mejor de la semana",title:"Destacados",playlist:[{title:"\xbfQu\xe9 es responsive Design?",author:"LeonidasEsteban",type:"video",cover:"./images/covers/responsive.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:1},{title:"C\xf3mo optimzar la carga de un website",author:"LeonidasEsteban",type:"video",cover:"./images/covers/optimizar.jpg",src:"http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",id:2},{title:"Qu\xe9 es Bitcoin",author:"Yograterol",type:"video",cover:"./images/covers/bitcoin.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:3},{title:"Que pas\xf3 con HTML5",author:"Freddier",type:"video",cover:"./images/covers/html5.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:4},{title:"Lo mejor de Mejorando.la",author:"Cvander",type:"video",cover:"./images/covers/mejorandola.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:5}]},{id:2,description:"Lo mejor para concentrarte",title:"Para programar",playlist:[{title:"One more time",author:"Daft Punk",type:"video",cover:"./images/covers/one-more-time.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:1},{title:"Midnight City",author:"M83",type:"video",cover:"./images/covers/midnight.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:5},{title:"Solar Sailer",author:"Daft Punk",type:"video",cover:"./images/covers/solar-sailer.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:2},{title:"The social network",author:"The social network",type:"video",cover:"./images/covers/social.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:4},{title:"No vaya a ser",author:"Pablo Alboran",type:"video",cover:"./images/covers/no-vaya-a-ser.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:3}]},{id:3,description:"Si no te queda de otra",title:"Regueton",playlist:[{title:"Despacito",author:"Luis Fonsi",type:"video",cover:"./images/covers/despacito.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:1},{title:"Echame la culpa",author:"Luis fonsi",type:"video",cover:"./images/covers/echame-la-culpa.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:3},{title:"Mi Gente",author:"J Bavil",type:"video",cover:"./images/covers/mi-gente.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:2},{title:"Felices los 4",author:"Maluma",type:"video",cover:"./images/covers/felices.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:4},{title:"Me Reh\xfaso",author:"Danny Ocean",type:"video",cover:"./images/covers/rehuso.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:5}]}]}},function(e,t,a){e.exports=a(52)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/volume.9a4acab4.svg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=(a(15),a(1)),l=a(2),s=a(4),u=a(3),d=a(5);a(17);var h=function(e){return r.a.createElement("section",{className:"HomeLayout"},e.children)},m=(a(19),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={author:a.props.author},a.handleClick=function(e){a.props.handleClick(a.props)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Media",onClick:this.handleClick},r.a.createElement("div",{className:"Media-cover"},r.a.createElement("img",{className:"Media-image",src:this.props.cover,alt:this.props.title,width:260,height:160}),r.a.createElement("h3",{className:"Media-title"}," ",this.props.title," "),r.a.createElement("p",{className:"Media-author"}," ",this.props.author," ")))}}]),t}(n.PureComponent));a(21);var p=function(e){return r.a.createElement("div",{className:"Playlist"},e.playlist.map(function(t){return r.a.createElement(m,Object.assign({key:t.id,handleClick:e.handleOpenModal},t))}))};a(23);var v=function(e){return r.a.createElement("div",{className:"Category"},r.a.createElement("p",{className:"Category-description"}," ",e.description," "),r.a.createElement("h2",{className:"Category-title"}," ",e.title," "),r.a.createElement(p,{handleOpenModal:e.handleOpenModal,playlist:e.playlist}))};a(25);var g=function(e){return r.a.createElement("form",{className:"Search",onSubmit:e.handleSubmit},r.a.createElement("input",{ref:e.setRef,className:"Search-input",type:"text",placeholder:"Search..."}))},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),console.log(a.input.value)},a.setInputRef=function(e){a.input=e},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g,{setRef:this.setInputRef,handleSubmit:this.handleSubmit})}}]),t}(n.Component);a(27);var f=function(e){return r.a.createElement("div",{className:"Categories"},r.a.createElement(b,null),e.categories.map(function(t){return r.a.createElement(v,Object.assign({key:t.id,handleOpenModal:e.handleOpenModal},t))}))};a(29);var y=function(e){return r.a.createElement("div",{className:"Related"},r.a.createElement("img",{src:"./images/logo.png",width:250,alt:""}))},E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return Object(i.createPortal)(this.props.children,document.querySelector("#modal-container"))}}]),t}(n.Component);a(31);var k=function(e){return r.a.createElement("div",{className:"Modal"},e.children,r.a.createElement("button",{className:"Modal-close",onClick:e.handleClick}))};var j=function(e){return r.a.createElement("h1",{style:{color:"white"}}," Ha ocurrido un error ")},B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={handleError:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({handleError:!0})}},{key:"render",value:function(){return this.state.handleError?r.a.createElement(j,null):this.props.children}}]),t}(n.Component),C=(a(33),function(e){return r.a.createElement("div",{className:"VideoPlayer",ref:e.setRef},e.children)}),O=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setRef=function(e){a.video=e},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.pause!==this.props.pause&&this.togglePlay()}},{key:"togglePlay",value:function(){this.props.pause?this.video.play():this.video.pause()}},{key:"render",value:function(){var e=this.props,t=e.handleLoadedMetadata,a=e.handleTimeUpdate,n=e.handleSeeking,i=e.handleSeeked;return r.a.createElement("div",{className:"Video"},r.a.createElement("video",{ref:this.setRef,autoPlay:this.props.autoplay,src:this.props.src,onLoadedMetadata:t,onTimeUpdate:a,onSeeking:n,onSeeked:i}))}}]),t}(n.Component));a(37);var w=function(e){return r.a.createElement("div",{className:"Title"},r.a.createElement("h2",null," ",e.title," "))};var S=function(e){var t=e.color,a=e.size;return r.a.createElement("svg",{fill:t,height:a,width:a,viewBox:"0 0 32 32"},e.children)};var M=function(e){return r.a.createElement(S,e,r.a.createElement("path",{d:"M6 4l20 12-20 12z"}))};var N=function(e){return r.a.createElement(S,e,r.a.createElement("path",{d:"M4 4h10v24h-10zM18 4h10v24h-10z"}))};a(39);var _=function(e){return r.a.createElement("div",{className:"PlayPause"},e.pause?r.a.createElement("button",{onClick:e.handleClick}," ",r.a.createElement(M,{size:25,color:"white"})," "):r.a.createElement("button",{onClick:e.handleClick}," ",r.a.createElement(N,{size:25,color:"white"})," "))};a(41);function z(e){return"00".substring(0,"00".length-e.length)+e}function x(e){var t=parseInt(e/60,10),a=parseInt(e%60,10);return"".concat(z(t.toString()),":").concat(z(a.toString()))}var P=function(e){return r.a.createElement("div",{className:"Timer"},r.a.createElement("p",null," ",r.a.createElement("span",null," ",x(e.currentTime)," / ",x(e.duration))," "))};a(43);var T=function(e){return r.a.createElement("div",{className:"VideoPlayerControls"}," ",e.children," ")};a(45);var R=function(e){return r.a.createElement("div",{className:"ProgressBar "},r.a.createElement("input",{type:"range",min:0,max:e.duration,value:e.currentTime,onChange:e.handleProgressChange}))};a(47);var L=function(e){return e.active?r.a.createElement("div",{className:"Spinner"},r.a.createElement("span",null," Cargando...")):null},V=(a(49),function(e){return r.a.createElement(S,e,r.a.createElement("path",{d:"M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"}),r.a.createElement("path",{d:"M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"}))});a(50);var F=function(e){return r.a.createElement("button",{className:"Volume"},r.a.createElement(V,{size:25,color:"white"}),r.a.createElement("div",{className:"Volume-range"},r.a.createElement("input",{type:"range",min:0,max:1,step:.05,onChange:e.handleVolumeChange})))};var D=function(e){return r.a.createElement(S,e,r.a.createElement("path",{d:"M32 0h-13l5 5-6 6 3 3 6-6 5 5z"}),r.a.createElement("path",{d:"M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"}),r.a.createElement("path",{d:"M0 32h13l-5-5 6-6-3-3-6 6-5-5z"}),r.a.createElement("path",{d:"M0 0v13l5-5 6 6 3-3-6-6 5-5z"}))};var A=function(e){return r.a.createElement("div",{className:"FullScreenx",onClick:e.handleFullScreenClick},r.a.createElement(D,{size:25,color:"white"}))},I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pause:!0,duration:0,currentTime:0,loading:!1},a.togglePlay=function(e){a.setState({pause:!a.state.pause})},a.handleLoadedMetadata=function(e){a.video=e.target,a.setState({duration:a.video.duration})},a.handleTimeUpdate=function(e){a.setState({currentTime:a.video.currentTime})},a.handleProgressChange=function(e){a.video.currentTime=e.target.value},a.handleSeeking=function(e){a.setState({loading:!0})},a.handleSeeked=function(e){a.setState({loading:!1})},a.handleVolumeChange=function(e){a.video.volume=e.target.value},a.handleFullScreenClick=function(e){document.mozFullScreen?document.mozCancelFullScreen():a.player.mozRequestFullScreen()},a.setRef=function(e){a.player=e},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({pause:!this.props.autoplay})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{setRef:this.setRef},r.a.createElement(w,{title:this.props.title}),r.a.createElement(T,null,r.a.createElement(_,{handleClick:this.togglePlay,pause:this.state.pause}),r.a.createElement(P,{duration:this.state.duration,currentTime:this.state.currentTime}),r.a.createElement(R,{duration:this.state.duration,currentTime:this.state.currentTime,handleProgressChange:this.handleProgressChange}),r.a.createElement(F,{handleVolumeChange:this.handleVolumeChange}),r.a.createElement(A,{handleFullScreenClick:this.handleFullScreenClick})),r.a.createElement(L,{active:this.state.loading}),r.a.createElement(O,{handleLoadedMetadata:this.handleLoadedMetadata,handleTimeUpdate:this.handleTimeUpdate,autoplay:this.props.autoplay,pause:this.state.pause,handleSeeking:this.handleSeeking,handleSeeked:this.handleSeeked,src:this.props.src})))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modalVisible:!1,handreError:!1},a.handleOpenModal=function(e){a.setState({modalVisible:!0,media:e})},a.handleCloseModal=function(){a.setState({modalVisible:!1})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(B,null,r.a.createElement(h,null,r.a.createElement(y,null),r.a.createElement(f,{categories:this.props.data.categories,handleOpenModal:this.handleOpenModal}),this.state.modalVisible&&r.a.createElement(E,null,r.a.createElement(k,{handleClick:this.handleCloseModal},r.a.createElement(I,{autoplay:!0,src:this.state.media.src,title:this.state.media.title})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(8),H=document.getElementById("root");o.a.render(r.a.createElement(U,{data:q}),H),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.7155da1c.chunk.js.map