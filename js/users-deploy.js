/* Transpiled with Babel by justin@Justin-Mac-SSD */
"use strict";(function(){function a(){var h={tcdg_leaders_one:"loader1",tcdg_leaders_two:"loader2",members_parent_one:"loader3",members_parent_two:"loader4"};for(var i in h)document.getElementById(i).removeChild(document.getElementById(h[i]))}var b=function b(h,i){var j=new XMLHttpRequest;j.onreadystatechange=function(){4==j.readyState&&200==j.status&&i(j.responseText)},j.open("GET",h,!0),j.send(null)},c=function c(h){return b("//devjoe.me/TCDG/members.php",function(i){return h(JSON.parse(i))})},d=["XeliteXirish","GilbertGobbels","Kelwing","floogulinc","Newtsrock","JoeTheHuman"],_ref=function(){var h=document.createElement("textarea");return{htmlesc:function htmlesc(i){return h.textContent=i,h.innerHTML},htmlunesc:function htmlunesc(i){return h.innerHTML=i,h.textContent}}}(),e=_ref.htmlesc,f=_ref.htmlunesc,g=function g(h){return"\n        <article class=\"media\" href=\"https://www.github.com/"+encodeURIComponent(h.login)+"\">\n            <div class=\"media-left\">\n                <figure class = \"image is-64x64\">\n                    <img src=\""+h.avatar_url+"\" alt=\"Image\" />\n                </figure>\n            </div>\n            <div class=\"media-content\">\n                <div class=\"content\">\n                <p>\n                    <strong>"+e(h.login)+"</strong> "+(h.name?"("+e(h.name)+")":"")+"\n                    <br />\n                    <small>\n                        <b> Email:</b> "+(h.email?e(h.email):"Not publicly shown")+"\n                    </small>\n                    <br />\n                    <small>\n                        <b> Website:</b> "+(h.blog?e(h.blog):"Not publicly shown")+"\n                    </small>\n                    <br />\n                    <br />\n                    <i>\n                        <b>Public Repositories:</b> "+e(e(h.public_repos))+"\n                    </i>\n                </p>\n            </div>\n            </div>\n        </article>\n    "};// Get this from the API later on!
// Not sure if the links are safe-- we need to look into this.
(function(){var i=document.getElementById("tcdg_leaders_one"),j=document.getElementById("tcdg_leaders_two"),k=document.getElementById("members_parent_one"),l=document.getElementById("members_parent_two");c(function(m){var n=1;a(),setTimeout(function(){for(var o in m){var p=m[o],q=document.createElement("div");q.innerHTML=g(p);var r=q.firstElementChild;(o<m.length/2?k:l).appendChild(r),-1<d.indexOf(p.login)&&((n<=d.length/2?i:j).appendChild(r),n++)}},100)})})()})();
