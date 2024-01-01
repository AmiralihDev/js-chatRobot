
// developer name = amirali
// date = 31 septeber
// teacher = ostad khateri
// E-mail = ophmmh.uib@gmail.com
// github = AmiralihDev
let soalList = []
let ban = true
let soalCount = 0
let soalCount2 = 5
// function quistion
function quistion(soal){
    // quistion
    if (soal == "salam chetori"){
        alert("salam man khobam to chetori 😊");
        soalCount += 1
        soalList.push(soal)
    }
        
    else if (soal == "salam jewad"){
        alert("salam parsa jan 😊")
        soalCount += 1
        soalList.push(soal)

    }
    else if (soal == "khobi"){

        alert("khobam ")
        soalCount += 1
        soalList.push(soal)


    }
    else if (soal == "che khabar"){

        alert("khabar salamatit")
        soalCount += 1
        soalList.push(soal)

    }
    
    else if (soal == "esmet chie"){

        alert("man yek robotam va hich esmi nadaram")
        soalCount += 1
        soalList.push(soal)

    }
    else if (soal == "chand salete "){

        alert("man yek robotam va man seni nadaram ")
        soalCount += 1
        soalList.push(soal)
    }
    else if (soal == "esm developeret chie"){
        alert("nemidonsm")
        
        soalCount += 1
        soalList.push(soal)

    }
    else if (soal == "soal ham chia bodan") {
        alert("soal hat inan : ")
        alert(soalList)
        soalCount += 1
        soalList.push(soal)

    }
    else if (soal == "salam"){

        alert("salam")
        soalCount += 1
        soalList.push(soal)

    }
    
    else if (soal == ""){

        alert("shoam hich chisi naneveshtid !")
        

    }
    else if (soal == "chera brake mishi"){

        alert("chon kastam shode")
        soalCount += 1
        soalList.push(soal)
    }
    else if (soal == "hoselam sar rafte"){

        alert("khob nare 😂")
        soalCount += 1
        soalList.push(soal)
    }
    else if (soal == "chi baladi"){

        alert("chisaii ke developeram az gable baram neveshte")
        soalCount += 1
        soalList.push(soal)

    }
    






    // developer mode 
    else if (soal == "developer mode"){
        soalList.push(soal)
        alert("developer mode is selected !✔️")
        developerSoal = prompt("farman bede : ")
        
        if (developerSoal == "soalCount"){

            alert("soal accses, 0 shod ✔️")
            soalCount = 0
            soalList.push(developerSoal)
    
        }
        else if (developerSoal == "soalCount2"){
            
            developerSoalCount2 = Number(prompt("adad bego baraye soalCount2 : "))
            if (developerSoalCount2 == Number){
                soalCount2 = developerSoalCount2
                alert("valiu tagir kard,,   new valui : ",soalCount2)

            }
            else if (developerSoalCount2 != Number){
                alert("adad shoma Number nist")
                
            }
            soalList.push(developerSoal)

        }
        
        else if (developerSoal == "break false"){
            ban = false
            soalList.push(developerSoal)
        }
        else if (developerSoal == "break true"){
            ban = true
            alert("ok")
            soalCount += 99999999999
            soalList.push(developerSoal)
            
    
        }
        else {
            soalList.push(developerSoal)
            soalCount += 1
            alert("hamchin dastori nist")
            
        }
    }
    else {
        soalList.push(soal)
            soalCount += 1
            alert("nemidonam")
            
    }
}







for (i = 0;i <= 9999999;i ++){ 
    
    if (soalCount >= soalCount2){
        // alert("dige khastam shode nemitonam behet javab bedam")
        // alert("be omid didar mojadad ")
        if (ban == true){
            alert("dige khastam shode nemitonam behet javab bedam")
            alert("be omid didar mojadad ")
            break
        }
        if (ban == false){
            alert("haif ke ejaze ban nadaram vagarna chon khastam shode banet mikhardam")
        }
        
    }

    quistion(prompt("soal khodeto bepors age balad basham migam ❤️😊"))
    edame = prompt("mikhay dobare soal beporsi ?  y/n")
    if (edame == "y"){
        continue
    }
    else if (edame == "n"){
        
        if (ban == true){
            alert("be omid didar mojadad ")
            break
        }
        else if (ban == false){
            alert("haif ke ejaze ban nadaram vagarna ban bodi")
        }

    }
    else if (edame != "n" && edame != "y"){
        alert("lotfa pasokh khodet ro ba y/n java bede !!")
        edame = prompt("mikhay dobare soal beporsi ?  y/n")
        if (edame != "n" && edame != "y"){
            
        }
        else if (edame == "y"){
            continue

        }
        else if (edame = "n"){
            if (ban == true){
                alert("be omid didar mojadad ")
                break
            }
            else if (ban == false){
                alert("haif ke ejaze ban nadaram vagarna ban bodi")
            }
    
        }
    }
    
}  
