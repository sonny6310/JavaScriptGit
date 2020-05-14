var student={};
student.이름="박명회";
student.성별="남자";
student.취미="등산";
student.특기="게임";
student.장래희망="책저자";

student.toString=function(){
    var output="";
    for (const key in this) {
        
        if (key!="toString") {
            const element = this[key];
            output+=key+" : "+element+"</br>";
        }
    }
    return output;
};
student.toString();