const input=document.getElementById("numberofwords");
const  container=document.querySelector(".container");

const genword=(n)=>{
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    for(i=0;i<n;i++){
        const random=(Math.random()*(letters.length-1)).toFixed(0);
        text+=letters[random];
      
    }
      
        return text;


};



const genpara=()=>{

    const numwords=(Number(input.value));
    console.log(numwords);
    
   

     let data="";
  for(let i=0;i<numwords;i++){
    const randomNumber=((Math.random()* 15).toFixed(0));
    genword(randomNumber);
    data+=genword(randomNumber);
    data+="  ";

    
  }

  const para=document.createElement("p");
    para.innerText=data;
    para.setAttribute("class","paras");
    container.append(para);
};
