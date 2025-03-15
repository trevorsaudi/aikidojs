const sn=Math.PI,en=2*sn,O=1e-6,fn=en-O;function un(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function cn(){return new un}un.prototype=cn.prototype={constructor:un,moveTo:function(n,u){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+u)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,u){this._+="L"+(this._x1=+n)+","+(this._y1=+u)},quadraticCurveTo:function(n,u,a,f){this._+="Q"+ +n+","+ +u+","+(this._x1=+a)+","+(this._y1=+f)},bezierCurveTo:function(n,u,a,f,c,g){this._+="C"+ +n+","+ +u+","+ +a+","+ +f+","+(this._x1=+c)+","+(this._y1=+g)},arcTo:function(n,u,a,f,c){n=+n,u=+u,a=+a,f=+f,c=+c;var g=this._x1,A=this._y1,s=a-n,o=f-u,t=g-n,y=A-u,e=t*t+y*y;if(c<0)throw new Error("negative radius: "+c);if(this._x1===null)this._+="M"+(this._x1=n)+","+(this._y1=u);else if(e>O)if(!(Math.abs(y*s-o*t)>O)||!c)this._+="L"+(this._x1=n)+","+(this._y1=u);else{var r=a-g,_=f-A,p=s*s+o*o,b=r*r+_*_,l=Math.sqrt(p),R=Math.sqrt(e),m=c*Math.tan((sn-Math.acos((p+e-b)/(2*l*R)))/2),x=m/R,M=m/l;Math.abs(x-1)>O&&(this._+="L"+(n+x*t)+","+(u+x*y)),this._+="A"+c+","+c+",0,0,"+ +(y*r>t*_)+","+(this._x1=n+M*s)+","+(this._y1=u+M*o)}},arc:function(n,u,a,f,c,g){n=+n,u=+u,a=+a,g=!!g;var A=a*Math.cos(f),s=a*Math.sin(f),o=n+A,t=u+s,y=1^g,e=g?f-c:c-f;if(a<0)throw new Error("negative radius: "+a);this._x1===null?this._+="M"+o+","+t:(Math.abs(this._x1-o)>O||Math.abs(this._y1-t)>O)&&(this._+="L"+o+","+t),a&&(e<0&&(e=e%en+en),e>fn?this._+="A"+a+","+a+",0,1,"+y+","+(n-A)+","+(u-s)+"A"+a+","+a+",0,1,"+y+","+(this._x1=o)+","+(this._y1=t):e>O&&(this._+="A"+a+","+a+",0,"+ +(e>=sn)+","+y+","+(this._x1=n+a*Math.cos(c))+","+(this._y1=u+a*Math.sin(c))))},rect:function(n,u,a,f){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+u)+"h"+ +a+"v"+ +f+"h"+-a+"Z"},toString:function(){return this._}};function S(n){return function(){return n}}const rn=Math.abs,d=Math.atan2,D=Math.cos,ln=Math.max,tn=Math.min,L=Math.sin,B=Math.sqrt,v=1e-12,F=Math.PI,U=F/2,yn=2*F;function gn(n){return n>1?0:n<-1?F:Math.acos(n)}function hn(n){return n>=1?U:n<=-1?-U:Math.asin(n)}function _n(n){return n.innerRadius}function pn(n){return n.outerRadius}function xn(n){return n.startAngle}function dn(n){return n.endAngle}function mn(n){return n&&n.padAngle}function Mn(n,u,a,f,c,g,A,s){var o=a-n,t=f-u,y=A-c,e=s-g,r=e*o-y*t;if(!(r*r<v))return r=(y*(u-g)-e*(n-c))/r,[n+r*o,u+r*t]}function N(n,u,a,f,c,g,A){var s=n-a,o=u-f,t=(A?g:-g)/B(s*s+o*o),y=t*o,e=-t*s,r=n+y,_=u+e,p=a+y,b=f+e,l=(r+p)/2,R=(_+b)/2,m=p-r,x=b-_,M=m*m+x*x,C=c-g,E=r*b-p*_,I=(x<0?-1:1)*B(ln(0,C*C*M-E*E)),$=(E*x-m*I)/M,T=(-E*m-x*I)/M,P=(E*x+m*I)/M,q=(-E*m+x*I)/M,i=$-l,h=T-R,Z=P-l,z=q-R;return i*i+h*h>Z*Z+z*z&&($=P,T=q),{cx:$,cy:T,x01:-y,y01:-e,x11:$*(c/C-1),y11:T*(c/C-1)}}function vn(){var n=_n,u=pn,a=S(0),f=null,c=xn,g=dn,A=mn,s=null;function o(){var t,y,e=+n.apply(this,arguments),r=+u.apply(this,arguments),_=c.apply(this,arguments)-U,p=g.apply(this,arguments)-U,b=rn(p-_),l=p>_;if(s||(s=t=cn()),r<e&&(y=r,r=e,e=y),!(r>v))s.moveTo(0,0);else if(b>yn-v)s.moveTo(r*D(_),r*L(_)),s.arc(0,0,r,_,p,!l),e>v&&(s.moveTo(e*D(p),e*L(p)),s.arc(0,0,e,p,_,l));else{var R=_,m=p,x=_,M=p,C=b,E=b,I=A.apply(this,arguments)/2,$=I>v&&(f?+f.apply(this,arguments):B(e*e+r*r)),T=tn(rn(r-e)/2,+a.apply(this,arguments)),P=T,q=T,i,h;if($>v){var Z=hn($/e*L(I)),z=hn($/r*L(I));(C-=Z*2)>v?(Z*=l?1:-1,x+=Z,M-=Z):(C=0,x=M=(_+p)/2),(E-=z*2)>v?(z*=l?1:-1,R+=z,m-=z):(E=0,R=m=(_+p)/2)}var Q=r*D(R),j=r*L(R),G=e*D(M),H=e*L(M);if(T>v){var J=r*D(m),K=r*L(m),V=e*D(x),W=e*L(x),w;if(b<F&&(w=Mn(Q,j,V,W,J,K,G,H))){var X=Q-w[0],Y=j-w[1],k=J-w[0],nn=K-w[1],an=1/L(gn((X*k+Y*nn)/(B(X*X+Y*Y)*B(k*k+nn*nn)))/2),on=B(w[0]*w[0]+w[1]*w[1]);P=tn(T,(e-on)/(an-1)),q=tn(T,(r-on)/(an+1))}}E>v?q>v?(i=N(V,W,Q,j,r,q,l),h=N(J,K,G,H,r,q,l),s.moveTo(i.cx+i.x01,i.cy+i.y01),q<T?s.arc(i.cx,i.cy,q,d(i.y01,i.x01),d(h.y01,h.x01),!l):(s.arc(i.cx,i.cy,q,d(i.y01,i.x01),d(i.y11,i.x11),!l),s.arc(0,0,r,d(i.cy+i.y11,i.cx+i.x11),d(h.cy+h.y11,h.cx+h.x11),!l),s.arc(h.cx,h.cy,q,d(h.y11,h.x11),d(h.y01,h.x01),!l))):(s.moveTo(Q,j),s.arc(0,0,r,R,m,!l)):s.moveTo(Q,j),!(e>v)||!(C>v)?s.lineTo(G,H):P>v?(i=N(G,H,J,K,e,-P,l),h=N(Q,j,V,W,e,-P,l),s.lineTo(i.cx+i.x01,i.cy+i.y01),P<T?s.arc(i.cx,i.cy,P,d(i.y01,i.x01),d(h.y01,h.x01),!l):(s.arc(i.cx,i.cy,P,d(i.y01,i.x01),d(i.y11,i.x11),!l),s.arc(0,0,e,d(i.cy+i.y11,i.cx+i.x11),d(h.cy+h.y11,h.cx+h.x11),l),s.arc(h.cx,h.cy,P,d(h.y11,h.x11),d(h.y01,h.x01),!l))):s.arc(0,0,e,M,x,l)}if(s.closePath(),t)return s=null,t+""||null}return o.centroid=function(){var t=(+n.apply(this,arguments)+ +u.apply(this,arguments))/2,y=(+c.apply(this,arguments)+ +g.apply(this,arguments))/2-F/2;return[D(y)*t,L(y)*t]},o.innerRadius=function(t){return arguments.length?(n=typeof t=="function"?t:S(+t),o):n},o.outerRadius=function(t){return arguments.length?(u=typeof t=="function"?t:S(+t),o):u},o.cornerRadius=function(t){return arguments.length?(a=typeof t=="function"?t:S(+t),o):a},o.padRadius=function(t){return arguments.length?(f=t==null?null:typeof t=="function"?t:S(+t),o):f},o.startAngle=function(t){return arguments.length?(c=typeof t=="function"?t:S(+t),o):c},o.endAngle=function(t){return arguments.length?(g=typeof t=="function"?t:S(+t),o):g},o.padAngle=function(t){return arguments.length?(A=typeof t=="function"?t:S(+t),o):A},o.context=function(t){return arguments.length?(s=t??null,o):s},o}export{vn as a,S as c,yn as t};
