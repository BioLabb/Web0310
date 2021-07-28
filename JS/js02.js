var text = document.querySelectorAll(".text");
function start(){
    disPlay();  
}
start();
function disPlay(){
    do{
        let valName = prompt("Tên");
        if(valName != ""){
            text[0].innerHTML = `Chào bạn: <span>${valName}</span> `;
            break;
        }
        else if(valName==""){
            alert("Bạn chưa nhập tên");
    } 
    }while(true);

    do {
        let valOld = prompt("Tuổi");
        if(valOld == "")
            alert("Bạn chưa nhập tuổi");
        else if(Number(valOld) <= 0)
            alert("Tuổi phải lớn hơn 0");
        else if(Number.isNaN(Number(valOld)))
            alert("Không phải số");
        else{
            text[1].innerHTML=`Tuổi của bạn là: <span>${valOld}</span> `;
            break;
        } 
    } while (true);

}