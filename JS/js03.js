function render(){
    let a = document.querySelector("#number_a").value;
    let b = document.querySelector("#number_b").value;
    let c = document.querySelector("#number_c").value;
    let x = document.querySelector("#nghiemPt");
    let result = phuongTrinhBac2(a,b,c);
    console.log('a: ' + a, 'b: ' + b, 'c: ' + c);
    console.log(result)
    if(isEmpty(result))
        x.innerHTML = "Phương trình không có nghiệm";
    else
        {
            let soNghiem = 0;
            let inner ="";
            for(i in result){
                soNghiem++;
                inner += `<p>${i}: ${result[i].toFixed(2)}</p>`;
            }
            console.log(inner);

            x.innerHTML = `<h2>Phương trình có ${soNghiem} nghiệm</h2>`+inner;
        }
}
function resetVal(){
    document.querySelector("#number_a").value= "";
    document.querySelector("#number_b").value="";
    document.querySelector("#number_c").value="";
    document.querySelector('#nghiemPt').innerHTML = "";

}
function isEmpty(obj){
    return Object.keys(obj).length == 0;
}
function phuongTrinhBac1(a,b){
        if(a != 0)
            return {x:-b/a};
        else
         if(a == 0 )
            return {};
}
function phuongTrinhBac2(a,b,c){
    if(a == 0)
        return phuongTrinhBac1(b,c);
    else{
        let del = Math.pow(b,2) - 4*a*c;
        if(del == 0)
            return {x: -b/2*a};
        else 
        if(del < 0)
             return {};
        else{
            return {
                x1: ((-1*b - Math.sqrt(del))/(2*a)),
                x2: ((-1*b + Math.sqrt(del))/(2*a))
            }
        }
    }
}