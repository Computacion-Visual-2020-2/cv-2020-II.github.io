(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,n){"use strict";n.r(t);var i=n("JX7q"),a=n("dI71"),l=n("q1tI"),c=n.n(l),o=n("Bl7J"),r=function(e){return c.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},c.a.createElement("div",{className:"logo"},c.a.createElement("span",{className:"icon fa-code"})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"inner"},c.a.createElement("h1",null,"Computación Visual"),c.a.createElement("h3",null,"Bienvenid@"),c.a.createElement("p",null,"En este sitio encontrarás las actividades de la asignatura"," ",c.a.createElement("a",{href:"https://visualcomputing.github.io/"},"computación visual"),c.a.createElement("br",null),"desarrolladas por el equipo de estudiantes que se presentan a continuación."))),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("valentina-castano")}},"Valentina Castaño")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("julio-ovalle")}},"Julio Ovalle")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("fabio-tovar")}},"Fabio Tovar")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("brandon-avilan")}},"Brandon Avilán")))),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("Trabajos")}},"Informes")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("about")}},"About")))),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("convolution")}},"Convolución")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("BlackAndWhite")}},"B/N")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){e.onOpenArticle("histogram")}},"Histograma")))))},s=n("eC7B"),u=n("JwsL"),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(Object(i.a)(n)),n.handleCloseArticle=n.handleCloseArticle.bind(Object(i.a)(n)),n.setWrapperRef=n.setWrapperRef.bind(Object(i.a)(n)),n.handleClickOutside=n.handleClickOutside.bind(Object(i.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},n.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},n.render=function(){return c.a.createElement(o.a,{location:this.props.location},c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.a.createElement("div",{id:"wrapper"},c.a.createElement(r,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),c.a.createElement(s.a,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),c.a.createElement(u.a,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"})))},t}(c.a.Component);t.default=m}}]);
//# sourceMappingURL=component---src-pages-index-js-83783d1367cf6824d753.js.map