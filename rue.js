/* 
iro
*/

var red= ["red[0]","red[1]","red[2]","red[3]","red[4]","red[5]","red[6]","red[7]","red[8]"];
var blue=["blue[0]","blue[1]","blue[2]","blue[3]","blue[4]","blue[5]","blue[6]","blue[7]","blue[8]"];
var green=["green[0]","green[1]","green[2]","green[3]","green[4]","green[5]","green[6]","green[7]","green[8]"];
var yellow=["yellow[0]","yellow[1]","yellow[2]","yellow[3]","yellow[4]","yellow[5]","yellow[6]","yellow[7]","yellow[8]"];
var orange=["orange[0]","orange[1]","orange[2]","orange[3]","orange[4]","orange[5]","orange[6]","orange[7]","orange[8]"];
var white=["white[0]","white[1]","white[2]","white[3]","white[4]","white[5]","white[6]","white[7]","white[8]"];
/*
menn
*/

var a=new Array(9);
for(i=0;i<9;i++)
a[i]=red[i];
var b=new Array(9);
for(i=0;i<9;i++)
b[i]=blue[i];
var c=new Array(9);

for(i=0;i<9;i++)
c[i]=green[i];
var d=new Array(9);
for(i=0;i<9;i++)
d[i]=yellow[i];
var e=new Array(9);
for(i=0;i<9;i++)
e[i]=orange[i];
var f=new Array(9);
for(i=0;i<9;i++)
f[i]=white[i];

/*
old
*/
var oa=new Array(9);
for(i=0;i<9;i++)
oa[i]=red[i];
var ob=new Array(9);
for(i=0;i<9;i++)
ob[i]=blue[i];
var oc=new Array(9);

for(i=0;i<9;i++)
oc[i]=green[i];
var od=new Array(9);
for(i=0;i<9;i++)
od[i]=yellow[i];
var oe=new Array(9);
for(i=0;i<9;i++)
oe[i]=orange[i];
var of=new Array(9);
for(i=0;i<9;i++)
of[i]=white[i];


function change(){
a[0]=oa[6];
a[1]=oa[3];
a[2]=oa[0];
a[3]=oa[7];
a[4]=oa[4];
a[5]=oa[1];
a[6]=oa[8];
a[7]=oa[5];
a[8]=oa[2];

b[0]=oc[0];
b[1]=oc[1];
b[2]=oc[2];

c[0]=od[0];
c[1]=od[1];
c[2]=od[2];

d[0]=of[0];
d[1]=of[1];
d[2]=of[2];

f[0]=ob[0];
f[1]=ob[1];
f[2]=ob[2];



oa[0]=a[0];
oa[1]=a[1];
oa[2]=a[2];
oa[3]=a[3];
oa[4]=a[4];
oa[5]=a[5];
oa[6]=a[6];
oa[7]=a[7];
oa[8]=a[8];

ob[0]=b[0];
ob[1]=b[1];
ob[2]=b[2];

oc[0]=c[0];
oc[1]=c[1];
oc[2]=c[2];

od[0]=d[0];
od[1]=d[1];
od[2]=d[2];

of[0]=f[0];
of[1]=f[1];
of[2]=f[2];



}

console.log("change before");
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);
console.log(d[0]);
console.log(d[1]);
console.log(d[2]);
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);
change();

console.log("change after");
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);
console.log(d[0]);
console.log(d[1]);
console.log(d[2]);
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);


console.log("change before");
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);
console.log(d[0]);
console.log(d[1]);
console.log(d[2]);
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);
change();

console.log("change after");
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);
console.log(d[0]);
console.log(d[1]);
console.log(d[2]);
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);



