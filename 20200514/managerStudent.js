var inputBtn=document.getElementById("btnA");
var outputBtn=document.getElementById("btnB");
var mDiv1=document.getElementById("printArea1");
var mDiv2=document.getElementById("printArea2");

var student_ary=[];

inputBtn.onclick=function(){
    
    var student={
        "이름":document.getElementById("name").value,
        "국어":document.getElementById("kor").value,
        "수학":document.getElementById("math").value,
        "영어":document.getElementById("eng").value
    };
    student.getSum = function(){
        return parseInt(this.국어)+parseInt(this.수학)+parseInt(this.영어);
    };
    student_ary.push(student);
    console.log(student_ary);
    mDiv1.innerHTML="입력 완료"
}

outputBtn.onclick=function(){
    mDiv1.innerHTML="";
    var output="";
    for (const student of student_ary) {
        for (const key in student) {
            const element = student[key];
            if(key != 'getSum'){
                output+=key+" : "+element+"<br>";
            }else{
                output+="총점 : "+student[key]()+"<br>";
            }
        }
        output+="<br>"
    }
    mDiv2.innerHTML=output;
}