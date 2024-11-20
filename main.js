function bmicalc(){
    const radios = document.getElementsByName("grp");
    let isChecked=false;
    const age =document.getElementById("agee").value
    const height =document.getElementById("height").value
    const weight =document.getElementById("weight").value
    for (let radio of radios) {
        if (radio.checked) {
          isChecked = true;
          break;}
        }
    if(age!=0 && height!=0 && weight!=0 && isChecked==true){
        let bmi = (weight/((height/100)**2)).toFixed(2)
        result.innerHTML=`Your BMI is : ${bmi}`
        let classification=""
        if (bmi < 18.5) {
                 classification = "underweight";
            } else if (bmi < 25) {
             classification = "normal weight";
             } else {
               classification = "overweight";
         }
        comt.innerHTML=`You are ${classification}`
    }   
    
        if(age==0){
            alert("please enter your age")
        }
        if(height==0){
            alert("please enter your height")
        }
        if(weight==0){
            alert("please enter your weight")
        }
        if(isChecked==false){
            alert("please select gender")
        }
        
    
}
 //
//  if(age==0 && height==0 && weight==0){
//     alert("please enter the data")
//  }