(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{233:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(49),n(11),n(28),n(33),n(173),n(1).a.extend({auth:"guest",mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$auth.strategy,r=e.$auth.ctx.query,(o=new URLSearchParams).append("code",r.code),o.append("client_id",n.options.clientId),o.append("client_secret","u0TV9N/LsjwBz1vQ/DrZ+8ofZ9DY/YmYCR/yCFEdZlTc68hi3/8JrBboYRozQVzb"),o.append("redirect_uri",n.options.redirectUri),o.append("grant_type",n.options.grantType),t.next=10,e.$axios.$post(n.options.endpoints.token,o,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 10:return c=t.sent,t.next=13,e.$auth.setUserToken(c.access_token,c.refresh_token);case 13:return t.next=15,e.$router.push("/");case 15:case"end":return t.stop()}}),t)})))()},methods:{login:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.loginWith("gaidge");case 2:case"end":return t.stop()}}),t)})))()}}})),c=n(46),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.login}},[e._v("Login with Gaidge")])])}),[],!1,null,null,null);t.default=component.exports}}]);