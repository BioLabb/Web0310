function render(){
    String.prototype.number = function(){
        return Number(this);
    }
    let number1 = document.querySelector("#number1").value.number();
    let number2= document.querySelector("#number2").value.number();
    let phepTinh = ktPheptinh();
    let result ; 
    let err = document.querySelector("#err");
    if(phepTinh !== null)
        {
            result = tinhToan(number1,number2,phepTinh);
            err.innerHTML=""
            if(Number.isNaN(result))
                err.innerHTML="Phép tính không hợp lệ";
            else 
                document.querySelector("#dapAn").innerHTML=result;
        }
        else {
            err.innerHTML = "Chưa chọn phép tính";
            console.log("pt null");
        }
}
function cong(a,b){
    return a+b;
}
function tru(a,b){
    return a -b;
}
function nhan(a,b){
    return a * b;
}
function chia(a,b){
    if(b != 0)
      return (a/b).toFixed(2);
      else return NaN;
}
// trả về phép tinh được chọn
function ktPheptinh(){
    let phepTinh = document.getElementsByName("phepTinh");
    for( i = 0;i < phepTinh.length;i++)
        if(phepTinh[i].checked == true)
            return phepTinh[i].value;
    return null;
}
function tinhToan(a,b,phepTinh){
    switch(phepTinh){
        case "cong":
            return cong(a,b);
        case "tru":
            return tru(a,b);
        case "nhan":
            return nhan(a,b);
        case "chia":
            return chia(a,b);
    }
    return NaN;
}