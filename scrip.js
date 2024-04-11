let borrar=false;
let newCharacter=false;
let igual=false;
function escribir(n){
    let caja2=document.f1.txtBox2.value;
    if(igual){
        igual=false;
        document.f1.txtBox1.value="";
    }
    if (borrar)
    {
        document.f1.txtBox2.value=0;
        borrar=false;
        document.f1.txtBox2.value=n;
        newCharacter=true;
    } else if(document.f1.txtBox2.value == 0 && n!="."){
        cajao = document.f1.txtBox2.value.replace("0","");
        document.f1.txtBox2.value=cajao+n;
    }else{
        document.f1.txtBox2.value=caja2+n;
    }
}
function clearCaracter(){
    let caja2 = document.f1.txtBox2.value;
    if(caja2==0 || caja2=='' || caja2.length==1){
        document.f1.txtBox2.value='0';
    }else{
        let pos=caja2.substring(0, caja2.length-1);
        document.f1.txtBox2.value=pos;
    }
}
function arit(n){
    let caja2=document.f1.txtBox2.value;
    let caja1=document.f1.txtBox1.value;
    let lastCharacter=caja1.substring(caja1.length-1);
    if(newCharacter){
        result=caja1+caja2+n;
        document.f1.txtBox1.value=caja1+caja2+n;
        document.f1.txtBox2.value=eval(result.substring(0, result.length-1));
        newCharacter=false;
        borrar=true;
    }else if (lastCharacter=='+' || lastCharacter=='-' || lastCharacter=='*' || lastCharacter=='/'){
        newValor1=caja1.substring(0, caja1.length-1)+n;
        document.f1.txtBox1.value=newValor1;
    }else{
        document.f1.txtBox1.value=caja2+n;
        borrar=true;
    }
}
function iqual(){
    let caja2=document.f1.txtBox2.value;
    let caja1=document.f1.txtBox1.value;
    if(caja1=='' || caja1==0){
        document.f1.txtBox1.value="";
        document.f1.txtBox2.value=caja2;
    }else if(newCharacter){
        document.f1.txtBox1.value=caja1+caja2;
        document.f1.txtBox2.value=eval(document.f1.txtBox1.value);
        newCharacter=false;
        borrar=true;
        igual=true;
    }else{
        //igual=true;
    }
}
function cleare(){
    document.f1.txtBox2.value=0;
}
function cleanr(){
    document.f1.txtBox1.value="";
    document.f1.txtBox2.value=0;
}
function sq(){
    val=document.f1.txtBox2.value;
    result=Math.sqrt(val);
    document.f1.txtBox1.value="√("+val+")";
    document.f1.txtBox2.value=result;
    borrar=true;
    igual=true;
}