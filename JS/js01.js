var valueOld= document.getElementById("old");
var valueName = document.getElementById("name")
var form = document.getElementById("form");
var displayName = document.getElementById("display-name");
var displayOld = document.getElementById("display-old");
function processDisplay(){
    if(valueName.value == "")
        alert("Bạn chưa nhập tên");
    if(valueOld.value == "")
        alert("Bạn chưa nhập tuổi");
    else if(valueOld.value < 1)
        alert("Tuổi phải lớn hơn 0");
    if(valueName.value != "" && valueOld.value != "" && valueOld.value >= 1)
    {
        displayName.innerHTML = `Chào bạn ${valueName.value}!`;
        displayOld.innerHTML = `Tuổi của bạn là ${valueOld.value}`;
    }
}
