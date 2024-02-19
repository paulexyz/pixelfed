(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[4474],{8015:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>s});const s={props:["collection-id","profile-id"],data:function(){return{config:window.App.config,loaded:!1,limit:8,step:1,title:"",description:"",collection:{title:"",description:"",visibility:"draft"},id:"",posts:[],tab:"add",tabs:["all","add","order"],recentPosts:[],selectedPost:""}},beforeMount:function(){var t=this;axios.get("/api/local/collection/"+this.collectionId).then((function(i){t.collection=i.data}))},mounted:function(){this.fetchRecentPosts(),this.fetchItems(),axios.get("/api/pixelfed/v1/accounts/verify_credentials").then((function(t){window._sharedData.curUser=t.data,window.App.util.navatar()}))},methods:{addToIds:function(t){var i=this;axios.post("/api/local/collection/item",{collection_id:this.collectionId,post_id:t}).then((function(t){i.fetchItems(),i.fetchRecentPosts(),i.tab="all",i.id=""})).catch((function(t){swal("Invalid URL","The post you entered was invalid","error"),i.id=""}))},fetchItems:function(){var t=this;axios.get("/api/local/collection/items/"+this.collectionId).then((function(i){t.posts=i.data,t.loaded=!0}))},addId:function(){var t=this.config.uploader.max_collection_length;if(this.posts.length>=t)swal("Error","You can only add "+t+" posts per collection","error");else{var i=this.id,e=window.location.origin,s=i.split("/");if(i.slice(0,e.length)!==e&&(swal("Invalid URL","You can only add posts from this instance","error"),this.id=""),i.includes("/i/web/post/")||i.includes("/p/")){var o=s[s.length-1];return console.log("adding "+o),void this.addToIds(o)}swal("Invalid URL","Invalid URL","error"),this.id=""}},previewUrl:function(t){return t.sensitive?"/storage/no-preview.png?v="+(new Date).getTime():t.media_attachments[0].preview_url},previewBackground:function(t){return"background-image: url("+this.previewUrl(t)+");background-size:cover;"},fetchRecentPosts:function(){var t=this;axios.get("/api/v1/accounts/"+this.profileId+"/statuses",{params:{only_media:!0,min_id:1,limit:40}}).then((function(i){t.recentPosts=i.data.filter((function(i){var e=t.posts.map((function(t){return t.id}));return("public"==i.visibility||"unlisted"==i.visibility)&&0==i.sensitive&&-1==e.indexOf(i.id)}))}))},selectPost:function(t){this.selectedPost=t.id,this.id=t.url},publish:function(){0!=this.posts.length?axios.post("/api/local/collection/"+this.collectionId+"/publish",{title:this.collection.title,description:this.collection.description,visibility:this.collection.visibility}).then((function(t){window.location.href=t.data.url})).catch((function(t){swal("Something went wrong","There was a problem with your request, please try again later.","error")})):swal("Error","You cannot publish an empty collection")},save:function(){axios.post("/api/local/collection/"+this.collectionId,{title:this.collection.title,description:this.collection.description,visibility:this.collection.visibility}).then((function(t){swal("Saved!","You have successfully saved this collection.","success")}))},deleteCollection:function(){window.confirm("Are you sure you want to delete this collection?")&&axios.delete("/api/local/collection/"+this.collectionId).then((function(t){window.location.href="/"}))}}}},45883:(t,i,e)=>{"use strict";e.r(i),e.d(i,{render:()=>s,staticRenderFns:()=>o});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},[t.loaded?i("div",{staticClass:"row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-12 col-md-4 pt-3"},[i("div",{staticClass:"card rounded-0 shadow-none border",staticStyle:{"min-height":"440px"}},[i("div",{staticClass:"card-body"},[i("div",[i("form",[i("div",{staticClass:"form-group"},[i("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"title"}},[t._v("Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.collection.title,expression:"collection.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Collection Title",maxlength:"50"},domProps:{value:t.collection.title},on:{input:function(i){i.target.composing||t.$set(t.collection,"title",i.target.value)}}}),t._v(" "),i("div",{staticClass:"text-right small text-muted"},[i("span",[t._v(t._s(t.collection.title?t.collection.title.length:0)+"/50")])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"description"}},[t._v("Description")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.collection.description,expression:"collection.description"}],staticClass:"form-control",attrs:{id:"description",placeholder:"Example description here",rows:"3",maxlength:"500"},domProps:{value:t.collection.description},on:{input:function(i){i.target.composing||t.$set(t.collection,"description",i.target.value)}}}),t._v(" "),i("div",{staticClass:"text-right small text-muted"},[i("span",[t._v(t._s(t.collection.description?t.collection.description.length:0)+"/500")])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"visibility"}},[t._v("Visibility")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.collection.visibility,expression:"collection.visibility"}],staticClass:"custom-select",on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.collection,"visibility",i.target.multiple?e:e[0])}}},[i("option",{attrs:{value:"public"}},[t._v("Public")]),t._v(" "),i("option",{attrs:{value:"private"}},[t._v("Followers Only")]),t._v(" "),i("option",{attrs:{value:"draft"}},[t._v("Draft")])])])]),t._v(" "),i("hr"),t._v(" "),i("p",[t.posts.length>0&&"draft"!=t.collection.visibility?i("button",{staticClass:"btn btn-primary font-weight-bold btn-block",attrs:{type:"button"},on:{click:t.publish}},[t._v("Publish")]):i("button",{staticClass:"btn btn-primary font-weight-bold btn-block disabled",attrs:{type:"button",disabled:""}},[t._v("Publish")])]),t._v(" "),i("p",[i("button",{staticClass:"btn btn-outline-primary font-weight-bold btn-block",attrs:{type:"button"},on:{click:t.save}},[t._v("Save")])]),t._v(" "),i("p",{staticClass:"mb-0"},[i("button",{staticClass:"btn btn-outline-secondary font-weight-bold btn-block",attrs:{type:"button"},on:{click:t.deleteCollection}},[t._v("Delete")])])])])])]),t._v(" "),i("div",{staticClass:"col-12 col-md-8 pt-3"},[i("div",[i("ul",{staticClass:"nav nav-tabs"},[i("li",{staticClass:"nav-item"},[i("a",{class:["add"==t.tab?"nav-link font-weight-bold bg-white active":"nav-link font-weight-bold text-muted"],attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.tab="add"}}},[t._v("Add Posts")])]),t._v(" "),i("li",{staticClass:"nav-item"},[i("a",{class:["all"==t.tab?"nav-link font-weight-bold bg-white active":"nav-link font-weight-bold text-muted"],attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.tab="all"}}},[t._v("Preview")])])])]),t._v(" "),i("div",{staticClass:"card rounded-0 shadow-none border border-top-0"},[i("div",{staticClass:"card-body",staticStyle:{"min-height":"460px"}},["all"==t.tab?i("div",{staticClass:"row"},t._l(t.posts,(function(e,s){return i("div",{staticClass:"col-4 p-1"},[i("a",{staticClass:"card info-overlay card-md-border-0",attrs:{href:e.url}},[i("div",{staticClass:"square"},["photo:album"==e.pf_type?i("span",{staticClass:"float-right mr-3 post-icon"},[i("i",{staticClass:"fas fa-images fa-2x"})]):t._e(),t._v(" "),"video"==e.pf_type?i("span",{staticClass:"float-right mr-3 post-icon"},[i("i",{staticClass:"fas fa-video fa-2x"})]):t._e(),t._v(" "),"video:album"==e.pf_type?i("span",{staticClass:"float-right mr-3 post-icon"},[i("i",{staticClass:"fas fa-film fa-2x"})]):t._e(),t._v(" "),i("div",{staticClass:"square-content",style:t.previewBackground(e)}),t._v(" "),i("div",{staticClass:"info-overlay-text"},[i("h5",{staticClass:"text-white m-auto font-weight-bold"},[i("span",[i("span",{staticClass:"far fa-heart fa-lg p-2 d-flex-inline"}),t._v(" "),i("span",{staticClass:"d-flex-inline"},[t._v(t._s(e.favourites_count))])]),t._v(" "),i("span",[i("span",{staticClass:"fas fa-retweet fa-lg p-2 d-flex-inline"}),t._v(" "),i("span",{staticClass:"d-flex-inline"},[t._v(t._s(e.reblogs_count))])])])])])])])})),0):t._e(),t._v(" "),"add"==t.tab?i("div",[i("div",{staticClass:"form-group"},[i("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"title"}},[t._v("Add Post by URL")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text",placeholder:"https://pixelfed.dev/p/admin/1"},domProps:{value:t.id},on:{input:function(i){i.target.composing||(t.id=i.target.value)}}}),t._v(" "),i("p",{staticClass:"help-text small text-muted"},[t._v("Only local, public posts can be added")])]),t._v(" "),i("div",{staticClass:"form-group pt-4"},[i("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"title"}},[t._v("Add Recent Post")]),t._v(" "),i("div",{staticStyle:{"max-height":"360px","overflow-y":"auto"}},t._l(t.recentPosts,(function(e,s){return i("div",{class:[t.selectedPost==e.id?"box-shadow border border-warning d-inline-block m-1":"d-inline-block m-1"],on:{click:function(i){return t.selectPost(e)}}},[i("div",{staticClass:"cursor-pointer",style:"width: 175px; height: 175px; "+t.previewBackground(e)})])})),0)]),t._v(" "),i("hr"),t._v(" "),i("button",{staticClass:"btn btn-primary font-weight-bold btn-block",attrs:{type:"button"},on:{click:t.addId}},[t._v("Add Post")])]):t._e(),t._v(" "),"order"==t.tab?i("div"):t._e()])])])]):t._e()])},o=[function(){var t=this._self._c;return t("div",{staticClass:"col-12 col-md-6 offset-md-3 pt-5"},[t("div",{staticClass:"text-center pb-4"},[t("h1",[this._v("Create Collection")])])])}]},41992:(t,i,e)=>{Vue.component("collection-compose",e(81537).default)},81537:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>a});var s=e(9484),o=e(38434),l={};for(const t in o)"default"!==t&&(l[t]=()=>o[t]);e.d(i,l);const a=(0,e(14486).default)(o.default,s.render,s.staticRenderFns,!1,null,null,null).exports},38434:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>l});var s=e(8015),o={};for(const t in s)"default"!==t&&(o[t]=()=>s[t]);e.d(i,o);const l=s.default},9484:(t,i,e)=>{"use strict";e.r(i);var s=e(45883),o={};for(const t in s)"default"!==t&&(o[t]=()=>s[t]);e.d(i,o)}},t=>{t.O(0,[3660],(()=>{return i=41992,t(t.s=i);var i}));t.O()}]);