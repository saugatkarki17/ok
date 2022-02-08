//name


   

    const infoAsk = document.querySelector(".info");
    const infoAskForm = document.querySelector(".na");
    const nameIn = document.querySelector(".name");
    const namebtn = document.querySelector(".lego");
    const mainDivBox = document.querySelector(".mainDiv");
    const addTask = document.querySelector(".inputBox");
    const addBtn = document.querySelector(".add");
    const listDiv = document.querySelector(".list");
    const sp = document.querySelector(".wel");





function nameok() {

    namebtn.addEventListener('click', () =>{

        if(nameIn.value.length < 2 ){

            window.alert("Invalid Name" );
            nameIn.value = "";

           


        }
       
        else if(nameIn.value == "Subham" || nameIn.value == "subham"){
            mainDivBox.classList.add("mainAfter");
    
            infoAsk.classList.add("infoAfter");
            sp.innerText ="Welcome " + "CHAUDHARY " + "! start adding tasks you pussy" ;
    
        }
        else if(nameIn.value == "Spandan" || nameIn.value == "spandan"){
            mainDivBox.classList.add("mainAfter");
    
            infoAsk.classList.add("infoAfter");
            sp.innerText ="Welcome " + "BHANDARI " + "! start adding tasks & FU" ;
    
        }
        else if(nameIn.value == "Shashwat" || nameIn.value == "shashwat"){
            mainDivBox.classList.add("mainAfter");
    
            infoAsk.classList.add("infoAfter");
            sp.innerText ="Welcome " + "SAPPU " + "! start adding tasks MAYALU" ;
    
        }
        else if(nameIn.value == "Sahil" || nameIn.value == "sahil"){
            mainDivBox.classList.add("mainAfter");
    
            infoAsk.classList.add("infoAfter");
            sp.innerText ="Welcome " + nameIn.value + " magar " + "! start adding tasks" ;
    
        }
       
       

        else {
                
            mainDivBox.classList.add("mainAfter");
  
            infoAsk.classList.add("infoAfter");
    sp.innerText ="Welcome " + nameIn.value + ", start adding tasks" ;
    

        
    }
     
        
       

      });
}
nameok();

addBtn.addEventListener("click", (addlist));

function addlist(event) {
    event.preventDefault();

  
    if(addTask.value.length >=30 || addTask.value.length == 0) {
        window.alert("Letters counr should be greater than 0 and less than 30");
        addTask.value = "";

    }
    else {

            //lineBox of list

            const listMain = document.createElement("div");
            listMain.classList.add("listBox");
            listDiv.appendChild(listMain);

            //for the entered work to be saved below

            const taskBelow = document.createElement("p");
            taskBelow.classList.add("addedtask");
            listMain.appendChild(taskBelow);
            taskBelow.innerText = addTask.value;
            addTask.value = "";

            // btns for done or delete
            const doneBtn = document.createElement("button");
            const congr = document.querySelector(".cong");
            const kBtn = document.querySelector(".keepG")
            doneBtn.innerHTML = '<i class="fa fa-check"></i>';

            doneBtn.classList.add("tickBtn");
            listMain.appendChild(doneBtn);
                doneBtn.addEventListener('click', () =>{
                    congr.classList.add("congAdd");
                    document.body.style.background = "rgb(226, 226, 226)"
                    kBtn.addEventListener('click',() => {
                        congr.classList.remove("congAdd");
                   listDiv.removeChild(listMain);

                        document.body.style.backgroundImage =    " linear-gradient(90deg,rgb(153,179,214),#a3bcf1)  ";
     
                         } );
                   


             });

            const deleteBtn = document.createElement("button");
            const warRem = document.querySelector(".warningR");
            const yesR = document.querySelector(".yesRem");
            const noR = document.querySelector(".noRem");

            deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';

            deleteBtn.classList.add("delBtn");
            listMain.appendChild(deleteBtn);
                deleteBtn.addEventListener('click', () =>{

                    warRem.classList.add("warRe");
                    document.body.style.background = "rgb(226, 226, 226)"

                    yesR.addEventListener('click',() => {
                   listDiv.removeChild(listMain);
                   warRem.classList.remove("warRe");
                   document.body.style.backgroundImage =    " linear-gradient(90deg,rgb(153,179,214),#a3bcf1)  ";

                    } );
                    noR.addEventListener('click',() => {
                   warRem.classList.remove("warRe");
                   document.body.style.backgroundImage =    " linear-gradient(90deg,rgb(153,179,214),#a3bcf1)  ";

                    } );


                     


                   
             });
           
           
           
            






    }

}
addlist();


    