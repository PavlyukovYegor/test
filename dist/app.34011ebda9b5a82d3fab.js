webpackJsonp([1],{123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function DataService(){this.data=["../assets/Angular2.png","../assets/github.png","../assets/webpack.png"]}return DataService.prototype.getData=function(){return this.data},DataService}();t.DataService=o},193:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var i=n(23),r=n(57),c=n(87),a=n(201),s=n(200),p=n(203),l=[{path:"",component:a.HomeComponent},{path:"random-content",component:p.RandomContentComponent}],u=function(){function AppModule(){}return AppModule}();u=o([i.NgModule({imports:[r.BrowserModule,c.RouterModule.forRoot(l)],declarations:[s.AppComponent,a.HomeComponent,p.RandomContentComponent],bootstrap:[s.AppComponent]})],u),t.AppModule=u},200:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var i=n(23);n(88),n(356);var r=function(){function AppComponent(){}return AppComponent}();r=o([i.Component({selector:"my-app",template:"<router-outlet></router-outlet>"})],r),t.AppComponent=r},201:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),c=n(87),a=n(123),s=function(){function HomeComponent(e,t){this.router=e,this.dataService=t,this.count=0,this.reloadCount=5,this.imageSRC="",this.ngOnInit(),this.imageSRC=this.images[this.count],this.timer(),this.timerRedirect()}return HomeComponent.prototype.ngOnInit=function(){this.images=this.dataService.getData()},HomeComponent.prototype.timer=function(){var e=this;setInterval(function(){e.count++,e.count>2&&(e.count=0),e.imageSRC=e.images[e.count]},2500)},HomeComponent.prototype.timerRedirect=function(){var e=this;setInterval(function(){1==--e.reloadCount&&e.redirectToNewPage()},1e3)},HomeComponent.prototype.redirectToNewPage=function(){this.router.navigate(["random-content"])},HomeComponent.prototype.counterDec=function(){this.count--,this.count<0&&(this.count=2),this.imageSRC=this.images[this.count]},HomeComponent.prototype.counterInc=function(){this.count++,this.count>2&&(this.count=0),this.imageSRC=this.images[this.count]},HomeComponent}();s=o([r.Component({selector:"home-app",template:n(359),styles:[n(361)],providers:[a.DataService]}),i("design:paramtypes",[c.Router,a.DataService])],s),t.HomeComponent=s},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(89),i=n(193);o.platformBrowserDynamic().bootstrapModule(i.AppModule)},203:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),c=n(123),a=function(){function RandomContentComponent(e){this.dataService=e}return RandomContentComponent.prototype.ngOnInit=function(){this.images=this.dataService.getData()},RandomContentComponent}();a=o([r.Component({selector:"randomcontent-app",template:n(360),styles:[n(362)],providers:[c.DataService]}),i("design:paramtypes",[c.DataService])],a),t.RandomContentComponent=a},356:function(e,t){},357:function(e,t,n){e.exports=n.p+"assets/left-arrow.png"},358:function(e,t,n){e.exports=n.p+"assets/right-arrow.png"},359:function(e,t,n){e.exports='<div class="row">\n  <div class="col-md-1 slider_control flexing" (click)="counterDec()">\n    <img src="'+n(357)+'" class="floating_image" alt="">\n  </div>\n  <div class="slider col-md-10 flexing ">\n    \x3c!-- <div *ngFor="let image of this.images, let i = index"> --\x3e\n      \x3c!-- <img *ngFor="let image of this.images, let i = index" src={{image}}/> --\x3e\n    \x3c!-- </div> --\x3e\n    <img src={{imageSRC}} alt="">\n  </div>\n  <div class="col-md-1 slider_control flexing" (click)="counterInc()">\n    <img src="'+n(358)+'" class="floating_image" alt="">\n  </div>\n</div>\n<div class="row">\n  <h1>Reload after....   {{reloadCount}}</h1>\n</div>\n\x3c!-- Картинки можно было сделать через *ngFor="#item of items, #i = index",\nно я не работал еще c ngSwitch, по этому решил сделать так --\x3e\n'},360:function(e,t){e.exports='<div class="row">\n  <div class="col-md-12 ">\n    <h1>Картинки, которые участвовали в слайдере:</h1>\n  </div>\n  <div class="col-md-10 col-md-offset-1 body_car">\n    <img *ngFor="let image of this.images, let i = index" src={{image}} class="item_car" />\n  </div>\n</div>\n'},361:function(e,t){e.exports=".slider_control {\n  background-color: rgba(73, 77, 77, 0.5);\n  height: 550px;\n}\n\n.slider_control:hover{\n  background-color: rgba(73, 77, 77, 0.7);\n}\n\n.flexing {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"},362:function(e,t){e.exports=".body_car{\n  height: 550px;\n  white-space: nowrap;\n  overflow-x: scroll;\n}\n\n.item_car{\n  display: inline-block;\n  white-space: nowrap;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n"}},[202]);