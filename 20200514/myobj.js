var obj={
    a:10,
    b:20,
    c:30,
    d:function(){
        alert("obj.d 메서드 입니다.")
    }
};

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log("key = "+key);
        console.log("element = "+element);
        if(key=="d"){
            element();
        }
    }
}

var aa={};
aa.a=100;
aa.b=200;
alert(aa.a);
alert(aa.b);