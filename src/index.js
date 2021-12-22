import("./styles.css")
import("./images/profile-pic (26).png") 
import("./images/outline_book_white_48dp.png") 


 let mainDiv =  document.createElement("div");
 mainDiv.classList.add("mainDiv") ;

 let logoDiv = document.createElement("div"); 
 logoDiv.classList.add("logoDiv") ; 
 let image2 = document.createElement("img")
 image2.src= "src/images/outline_book_white_48dp.png" ; 
 image2.style = "height:100%" 
 logoDiv.append(image2) 
  

 
 let navbar =  document.createElement("div"); 
 navbar.classList.add("navbar");

 navbar.textContent = "WELCOME TO NOTEMAKER"
 let fileDiv =  document.createElement("div"); 
 fileDiv.classList.add("fileDiv");
 let imageDiv = document.createElement("div")

 let image = document.createElement("img")
  image.src= "src/images/profile-pic (26).png" ; 
  image.style = "height:100%" 

  let name1 = document.createElement("p")
  name1.textContent = "PABITRA SAIKIA"

  fileDiv.append(image,name1) 

 mainDiv.append(logoDiv,navbar,fileDiv)

 document.getElementById("headerDiv").append(mainDiv)
