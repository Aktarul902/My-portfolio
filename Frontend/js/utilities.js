let pencil = document.querySelector(".pencil")
let uploadimg= document.querySelector(".upload-img")
let profilephoto= document.querySelector("#photo")
uploadimg.addEventListener("mouseover",(e)=>{
    console.log("work")
    // console.log(e)
    pencil.style.display = "block"
  uploadimg.classList.add("color")

})
uploadimg.addEventListener("mouseleave",(e)=>{
    console.log("work")
    // console.log(e)
    pencil.style.display = "none"
    pencil.style.color="#3DCFD3"
    uploadimg.classList.remove("color")
})
pencil.addEventListener("click",(e)=>{
       e.preventDefault();
       profilephoto.click()
})
