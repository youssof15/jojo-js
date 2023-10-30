let userUl =document.querySelector(".userUl")
let head =document.querySelector(".header")
let foot =document.querySelector(".footer-fixed")
let _golp =document.querySelector("#gol-p")
let call =document.querySelector("#call")
let cart =document.querySelector("#cart")
let uLogin = document.querySelector(".login")
let newUser = document.querySelector(".new-user")
let newBtn= document.getElementById("nw")
let main = document.querySelector(".Main")
let _Main = document.getElementById("Main")
a = document.getElementsByTagName("input")[0]
b = document.getElementsByTagName("input")[1]
let nUser = document.querySelector("#nUser")
document.forms[0].onsubmit=function(ee){
    if(a.value===""||b.value===""){ee.preventDefault()}
    c = a.value.split("",a.value.indexOf("@")).join("")
    d=b.value
    if(/[A-Z]\w_\d{4}/ig.test(d)===false){ee.preventDefault();window.alert("Password looks like Tz_1265");return}
    window.sessionStorage.setItem("c",`${c}`)
    window.sessionStorage.setItem("d",`${d}`)
    window.location.reload()
}
let urr = userUl.cloneNode(true)
window.onload=()=>{
    if(nUser.innerHTML!==`<i class="fa-solid fa-horse fa-sm"></i>New User`){
        main.click()
        let vRR = document.createElement("i")
        vRR.classList.add("fa-solid")
        vRR.classList.add("fa-angle-down")
        vRR.style.setProperty("padding-left","4px")
        vRR.style.setProperty("margin-top","2px")
        nUser.appendChild(vRR)
        nUser.appendChild(urr)
        nUser.onclick=()=>{
            if(nUser.classList.contains("active")===true){
                nUser.classList.remove("active")
                urr.style.display="none"
                _Main.style.setProperty("filter", "blur(0px)")
                _golp.style.setProperty("filter", "blur(0px)")
                call.style.setProperty("filter", "blur(0px)")
                cart.style.setProperty("filter", "blur(0px)")
                foot.style.setProperty("filter", "blur(0px)")}
            else{
                    nUser.classList.add("active")
                    urr.style.display="block"
                    _Main.style.setProperty("filter", "blur(4px)")
                    _golp.style.setProperty("filter", "blur(4px)")
                    call.style.setProperty("filter", "blur(4px)")
                    cart.style.setProperty("filter", "blur(4px)")
                    foot.style.setProperty("filter", "blur(4px)")
                    }}}}
urr.children[7].onclick=()=>{
    nUser.innerHTML=`<i class="fa-solid fa-horse fa-sm"></i>New User`
    window.sessionStorage.clear()
    window.location.reload()
}
let signA =window.sessionStorage.getItem("c")
let signB =window.sessionStorage.getItem("d")
let sh_hd = document.querySelector("#sh_hd")
sh_hd.onclick=function(){
    if(sh_hd.previousElementSibling.hasAttribute("type")===true)
    sh_hd.previousElementSibling.removeAttribute("type")
else if(sh_hd.previousElementSibling.hasAttribute("type")===false)
sh_hd.previousElementSibling.setAttribute("type","password")
}
newBtn.onclick=function(){
    uLogin.style.cssText="display:none"
    newUser.style.cssText="display: flex;flex-direction: column"
}
let signIN = document.querySelector("#signIn")
signIN.onclick=function(){
    uLogin.style.cssText="display: block"
    newUser.style.cssText="display: none"
}
let gg = document.getElementById("firstN")
document.forms[1].onsubmit=function(){
        aa=gg.value
        if(aa!==null){window.sessionStorage.setItem("a",`${aa}`)}
    }
if(window.sessionStorage.getItem("a")!==null){signA=window.sessionStorage.getItem("a")}
if(signA !== null || ""){
nUser.innerHTML=`<i class="fa-solid fa-user fa-sm"></i> ${signA}`
nUser.nextElementSibling.style.cssText="pointer-events:all"
}
let photos = document.querySelectorAll(".photos")
photos.forEach((el) => {
    el.addEventListener("click",(e)=>{
        photos.forEach((g)=>{
            g.classList.remove("active")
            g.style.setProperty("border-top"," 15px solid aliceblue")
            g.style.setProperty("border-right"," 15px solid aliceblue")})
        e.currentTarget.classList.add("active")
    if (el.classList.contains("active")===true){
        el.style.setProperty("border-top"," 15px solid gold")
        el.style.setProperty("border-right"," 15px solid gold")}
})})
photos[0].onclick=function(){
    document.getElementById("img1").style.setProperty("z-index","1")
    document.getElementById("img2").style.setProperty("z-index","-1")
    document.getElementById("img3").style.setProperty("z-index","-1")
    document.getElementById("img4").style.setProperty("z-index","-1")
}
photos[1].onclick=function(){
    document.getElementById("img1").style.setProperty("z-index","-1")
    document.getElementById("img2").style.setProperty("z-index","1")
    document.getElementById("img3").style.setProperty("z-index","-1")
    document.getElementById("img4").style.setProperty("z-index","-1")
}
photos[2].onclick=function(){
    document.getElementById("img1").style.setProperty("z-index","-1")
    document.getElementById("img2").style.setProperty("z-index","-1")
    document.getElementById("img3").style.setProperty("z-index","1")
    document.getElementById("img4").style.setProperty("z-index","-1")
}
photos[3].onclick=function(){
    document.getElementById("img1").style.setProperty("z-index","-1")
    document.getElementById("img2").style.setProperty("z-index","-1")
    document.getElementById("img3").style.setProperty("z-index","-1")
    document.getElementById("img4").style.setProperty("z-index","1")
}
main.onclick=function(){
    _Main.style.setProperty("display","block")
    _golp.style.setProperty("display","none")
    uLogin.style.setProperty("display","none")
    newUser.style.setProperty("display","none")
    call.style.setProperty("display","none")
    cart.style.setProperty("display","none")
    window.scrollTo(0,0)
    photos[0].click()
}
if(nUser.innerHTML===`<i class="fa-solid fa-horse fa-sm"></i>New User`){
nUser.onclick=function(){
    newUser.style.cssText="display: flex;flex-direction: column"
    _Main.style.setProperty("display","none")
    uLogin.style.setProperty("display","none")
    _golp.style.setProperty("display","none")
    call.style.setProperty("display","none")
    cart.style.setProperty("display","none")
}}
ggp=[]
gge=[]
let prices = document.querySelectorAll(".prices")
prices.forEach((el)=>{
    ggg=parseInt(el.innerHTML.split("").map(
        function(e){return parseInt(`${e}`)}
        ).filter(function(e){return isNaN(e)===false}).join(""))
        gge.push(ggg)
        ggp.push(el.parentElement)
})
let myMap = new Map()
for(i=0;i<ggp.length;i++){
    myMap.set(ggp[i],gge[i])
}
let sortArr = document.getElementById("sortArr")
let sortArr1 = document.getElementById("sortArr1")
let sortArr2 = document.getElementById("sortArr2")
sortArr.children[0].onclick=()=>{
    sortArr.style.height="initial"
}
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
for(j=0;j<ggp.length;j++){
    ggp[j].style.setProperty("order",`${j}`)
    sortArr1.onclick=()=>{
        p1.click()
        sortArr.style.height="16.8px";
        sortArr.children[0].textContent=sortArr1.textContent
        const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
        for(i=0;i<ggp.length;i++){
            vv = Array.from(mapSort1)
            vv[i][0].style.setProperty("order",`${i}`)
        }
    }
    sortArr2.onclick=()=>{
        p1.click()
        sortArr.style.height="16.8px";
        sortArr.children[0].textContent=sortArr2.textContent
        const mapSort1 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
        vv = Array.from(mapSort1)
        for(i=0;i<ggp.length;i++){
            vv[i][0].style.setProperty("order",`${i}`)}
        }
    p1.onclick=function(){
        p1.style.pointerEvents="none"
        p2.style.pointerEvents="all"
        p3.style.pointerEvents="all"
        p1.style.backgroundColor="var(--main-color)" 
        p2.style.backgroundColor="initial" 
        p3.style.backgroundColor="initial" 
        for (i=0;i<ggp.length;i++){
            if(parseInt(ggp[i].style.order)<0){
                ggp[i].style.order=`${parseInt(ggp[i].style.order)+ggp.length}`
            }
            else if(parseInt(ggp[i].style.order)<=8){
                ggp[i].style.order=`${parseInt(ggp[i].style.order)-ggp.length}`
            }  

        window.scrollTo(0,0)
    }}
    p2.onclick=function(){
        p1.style.pointerEvents="all"
        p2.style.pointerEvents="none"
        p3.style.pointerEvents="all"
        p1.style.backgroundColor="initial" 
        p2.style.backgroundColor="var(--main-color)" 
        p3.style.backgroundColor="initial" 
        for (i=0;i<ggp.length;i++){
            if(parseInt(ggp[i].style.order)<0){
                ggp[i].style.order=`${parseInt(ggp[i].style.order)+ggp.length}`
            }
            else if(parseInt(ggp[i].style.order)>8 && parseInt(ggp[i].style.order)<=17){
                ggp[i].style.order=`${parseInt(ggp[i].style.order)-ggp.length}`
            }   

        window.scrollTo(0,0)
    }}
    p3.onclick=function(){
        p1.style.pointerEvents="all"
        p2.style.pointerEvents="all"
        p3.style.pointerEvents="none"
        p1.style.backgroundColor="initial" 
        p2.style.backgroundColor="initial" 
        p3.style.backgroundColor="var(--main-color)" 
        for (i=0;i<ggp.length;i++){
            if(parseInt(ggp[i].style.order)<0){
                ggp[i].style.order=`${parseInt(ggp[i].style.order)+ggp.length}`
            }
            else if(parseInt(ggp[i].style.order)>17){
                ggp[i].style.order=`${parseInt(ggp[i].style.order)-ggp.length}`
            } 
        window.scrollTo(0,0)
    }}}
let arrLeft = document.getElementById("arr-left")
let arrRight = document.getElementById("arr-right")
let arrA = [p1,p2,p3]
arrLeft.onclick=()=>{
    if(p1.style.backgroundColor==="var(--main-color)"){
        return false
    }
    else if(p2.style.backgroundColor==="var(--main-color)"){
        p1.click()
    }
    else if(p3.style.backgroundColor==="var(--main-color)"){
        p2.click()
    }
    }
arrRight.onclick=()=>{
    if(p1.style.backgroundColor==="var(--main-color)"){
        p2.click()
    }
    else if(p2.style.backgroundColor==="var(--main-color)"){
        p3.click()
    }
    else if(p3.style.backgroundColor==="var(--main-color)"){
        return false
    }
    }
let golp=document.querySelector(".gol-p")
golp.onclick=()=>{
    p1.click()
    newUser.style.cssText="display: none"
    _Main.style.setProperty("display","none")
    uLogin.style.setProperty("display","none")
    _golp.style.setProperty("display","block")
    call.style.setProperty("display","none")
    window.scrollTo(0,0)
    cart.style.setProperty("display","none")
}
let headerItems = document.querySelectorAll(".header-items a")
let headerIs = document.querySelectorAll(".header-items i")
let cartSpan =  document.querySelector(".cart")
let more = document.querySelector(".more")
let moreUl = document.querySelector(".moreUl")
let moreUls = document.querySelectorAll(".moreUl li")
allIs = [headerItems[0],headerItems[1],headerItems[2],headerItems[3],headerItems[5],headerIs[1],cartSpan]
console.log(allIs)
allIs.forEach((el) => {
    el.addEventListener("click",(e)=>{
        allIs.forEach((g)=>{
            g.classList.remove("active")
            if(g.classList.contains("active")===false){
                g.onmouseenter=()=>{g.style.color="var(--main-color)"}
                g.onmouseleave=()=>{g.style.color="black"}}
            g.style.setProperty("color"," rgba(0, 0, 0, 0.944)")
            more.style.setProperty("color"," rgba(0, 0, 0, 0.944)")
            moreUl.classList.remove("active")
            moreUl.style.display="none"
            newUser.style.setProperty("filter", "blur(0px)")
            _Main.style.setProperty("filter", "blur(0px)")
            uLogin.style.setProperty("filter", "blur(0px)")
            _golp.style.setProperty("filter", "blur(0px)")
            call.style.setProperty("filter", "blur(0px)")
            cart.style.setProperty("filter", "blur(0px)")
            foot.style.setProperty("filter", "blur(0px)")
        })
        e.currentTarget.classList.add("active")
    if (el.classList.contains("active")===true){
        el.style.setProperty("color"," var(--main-color)")
        el.onmouseleave=()=>{el.style.color="var(--main-color)"}
        }
})
})
more.onclick=()=>{
    if(moreUl.classList.contains("active")===true){
        more.style.color="rgba(0, 0, 0, 0.944)"
        moreUl.classList.remove("active")
        moreUl.style.display="none"
        newUser.style.setProperty("filter", "blur(0px)")
        _Main.style.setProperty("filter", "blur(0px)")
        uLogin.style.setProperty("filter", "blur(0px)")
        _golp.style.setProperty("filter", "blur(0px)")
        call.style.setProperty("filter", "blur(0px)")
        cart.style.setProperty("filter", "blur(0px)")
        foot.style.setProperty("filter", "blur(0px)")
}
    else{
    moreUl.classList.add("active")
    moreUl.style.display="block"
    more.style.color="var(--main-color)"
    newUser.style.setProperty("filter", "blur(4px)")
    _Main.style.setProperty("filter", "blur(4px)")
    uLogin.style.setProperty("filter", "blur(4px)")
    _golp.style.setProperty("filter", "blur(4px)")
    call.style.setProperty("filter", "blur(4px)")
    cart.style.setProperty("filter", "blur(4px)")
    foot.style.setProperty("filter", "blur(4px)")
}}
moreUls.forEach((el) => {
    el.addEventListener("click",()=>{
    newUser.style.setProperty("filter", "blur(0px)")
    _Main.style.setProperty("filter", "blur(0px)")
    uLogin.style.setProperty("filter", "blur(0px)")
    _golp.style.setProperty("filter", "blur(0px)")
    call.style.setProperty("filter", "blur(0px)")
    cart.style.setProperty("filter", "blur(0px)")
    foot.style.setProperty("filter", "blur(0px)")
    moreUl.classList.remove("active")
    moreUl.style.display="none"
    more.style.setProperty("color","rgba(0, 0, 0, 0.944)")
})})
let junk = document.querySelector(".call-fixed")
let btnDiv = [junk.children[0],junk.children[1],junk.children[2],junk.children[3]]
let call1=document.querySelector(".call1")
let call2=document.querySelector(".call2")
let call3=document.querySelector(".call3")
let call4=document.querySelector(".call4")
let sndMSG=document.querySelector(".sndMSG")
let sndmsg=document.querySelector(".sndmsg")
let closeX = document.getElementById("closeX")
let backTM = document.getElementById("backTM")
let callSpan=document.querySelector(".call")
let priceCalc = document.getElementById("priceCalc")
callSpan.onclick=()=>{
    btnDiv[0].click()
    newUser.style.cssText="display: none"
    _Main.style.setProperty("display","none")
    uLogin.style.setProperty("display","none")
    _golp.style.setProperty("display","none")
    call.style.setProperty("display","block")
    window.scrollTo(0,0)
    cart.style.setProperty("display", "none")
}
backTM.onclick=()=>{main.click();sndMSG.style.display="none"}
closeX.onclick=()=>{
    sndMSG.style.display="none"
}
sndmsg.onclick=()=>{
    sndMSG.style.display="block"
}
btnDiv.forEach((el) => {
    el.addEventListener("click",(e)=>{
        btnDiv.forEach((g)=>{
            g.classList.remove("active")
            g.style.setProperty("transform"," scale(1)")
            g.onmouseenter=()=>{g.style.setProperty("transform"," scale(1.05)")}
            g.onmouseleave=()=>{g.style.setProperty("transform"," scale(1)")}
            g.style.backgroundColor="antiquewhite"
            })
        e.currentTarget.classList.add("active")
    if (el.classList.contains("active")===true){
        el.style.backgroundColor="rgb(216 178 111 / 80%)"
        el.onmouseleave=()=>{el.style.setProperty("transform"," scale(1.1)")
        el.onmouseenter=()=>{el.style.setProperty("transform"," scale(1.1)")
    }}}
    if(btnDiv[0].classList.contains("active")===true){
        call1.style.setProperty("display","block")
        call2.style.setProperty("display","none")
        call3.style.setProperty("display","none")
        call4.style.setProperty("display","none")
    }
    if(btnDiv[1].classList.contains("active")===true){
        call1.style.setProperty("display","none")
        call2.style.setProperty("display","block")
        call3.style.setProperty("display","none")
        call4.style.setProperty("display","none")
    }
    if(btnDiv[2].classList.contains("active")===true){
        call1.style.setProperty("display","none")
        call2.style.setProperty("display","none")
        call3.style.setProperty("display","block")
        call4.style.setProperty("display","none")
    }
    if(btnDiv[3].classList.contains("active")===true){
        call1.style.setProperty("display","none")
        call2.style.setProperty("display","none")
        call3.style.setProperty("display","none")
        call4.style.setProperty("display","block")
    }
})})
let qA = document.getElementById("qA")
let q = document.querySelectorAll(".Q")
junk.children[3].onclick=()=>{
    q[0].click()
}
q.forEach((el)=>{
        el.addEventListener("click",(e)=>{
        q.forEach((g)=>{
            g.classList.remove("active")
            g.nextElementSibling.style.setProperty("-webkit-animation","slideDE .5s  0s 1 both ease-in-out alternate")
            g.children[0].classList.add("fa-caret-down")
            g.children[0].classList.remove("fa-caret-up")
            g.children[0].style.color="initial"
        })
        e.currentTarget.classList.add("active")
    if(el.classList.contains("active")===true){
        el.children[0].classList.remove("fa-caret-down")
        el.children[0].classList.add("fa-caret-up")
        el.nextElementSibling.style.setProperty("-webkit-animation","slideD .8s  0s 1 both ease-out alternate")
        el.children[0].style.color="rgb(223 193 139)"
}})})
let plusM=document.querySelector(".plus-minus")
plusM.children[2].onclick=()=>{if(parseInt(plusM.children[1].textContent)>9){return};plusM.children[1].textContent=`${parseInt(plusM.children[1].textContent)+1}`;}
plusM.children[0].onclick=()=>{if(parseInt(plusM.children[1].textContent)<=1){return};plusM.children[1].textContent=`${parseInt(plusM.children[1].textContent)-1}`}
let createI = document.createElement("i")
createI.classList.add("fa-solid")
createI.classList.add("fa-trash-can")
createI.classList.add("fa-2xl")
createI.style.cssText="color:#ff0000ba;position:absolute;right:15px;top:50%"
let npts = document.querySelector(".npts")
let bItems= document.querySelectorAll("#bItems div")
let products = document.getElementById("products")
let total= document.getElementById("total")
let crtspn = cartSpan.children[1]
let aaa = []
bItems.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        let msgClone= sndMSG.cloneNode(true)
        _golp.style.setProperty("pointer-events","none")
        _golp.style.setProperty("filter","blur(4px)")
        document.body.appendChild(msgClone)
        msgClone.style.setProperty("display","block")
        msgClone.style.setProperty("position","fixed")
        msgClone.style.setProperty("pointer-events","all")
        msgClone.style.setProperty("filter","blur(0px)")
        foot.style.setProperty("pointer-events","none")
        foot.style.setProperty("filter","blur(4px)")
        head.style.setProperty("pointer-events","none")
        head.style.setProperty("filter","blur(4px)")
        msgClone.children[0].onclick=(e)=>{
            _golp.style.setProperty("pointer-events","all")
            _golp.style.setProperty("filter","blur(0px)")
            foot.style.setProperty("pointer-events","all")
            foot.style.setProperty("filter","blur(0px)")
            head.style.setProperty("pointer-events","all")
            head.style.setProperty("filter","blur(0px)")
            if(products.innerHTML===""){
                products.appendChild(npts)}
            e.currentTarget.parentElement.remove()} 
        msgClone.children[5].classList.add("fa-cart-shopping")
        msgClone.children[6].textContent=""
        msgClone.children[7].textContent="Add To Cart"
        msgClone.children[7].style.setProperty("margin-top","25px")
        let pM = plusM.cloneNode(true)
        pM.style.setProperty("display","block")
        let clone= e.currentTarget.cloneNode(true)
        clone.classList.add("clone")
        clone.style.cssText="border: 1px solid rgba(57, 57, 57, 0.12);padding-bottom: 15px;font-size: 12px;position: relative;padding-left: 150px;"
        clone.children[0].style.cssText="height: calc(100% - 20px);position: absolute;top: 10px;left: 10px;"
        clone.children[2].style.cssText="margin:0"
        let cloneI=createI.cloneNode(true)
        cloneI.onmouseenter=(e)=>{e.currentTarget.style.setProperty("transform","scale(1.05)")}
        cloneI.onmouseleave=(e)=>{e.currentTarget.style.setProperty("transform","scale(1)")}
        clone.appendChild(cloneI)
        clone.appendChild(pM)
        let plusP= parseInt(clone.children[3].innerHTML)
        cloneI.onclick=(d)=>{          
            d.currentTarget.parentElement.remove()      
            if(aaa.length > 0){
                if(products.innerHTML===""){
                    total.innerHTML=`100`
                    priceCalc.innerHTML=`0`
                    crtspn.innerHTML="Cart"
                    crtspn.style.removeProperty("color")
                    products.appendChild(npts)}
                
                aaa.splice(aaa.indexOf(plusP),1)
                priceCalc.innerHTML=`${aaa.reduce((a,b)=>{return`${+a + +b}`})}`
                crtspn.innerHTML=`${aaa.reduce((a,b)=>{return`${+a + +b}`})} R.S`
                crtspn.style.color="var(--main-color)"
                total.innerHTML=`${parseInt(crtspn.innerHTML)+100}`
                console.log(plusP)
                console.log(aaa)
            }}
            msgClone.children[7].onclick=()=>{
                aaa.push(parseInt(clone.children[3].innerHTML))
                if(aaa.length > 0){
                    crtspn.style.color="var(--main-color)"
                    crtspn.innerHTML=`${aaa.reduce((a,b)=>{return`${+a + +b}`})} R.S`
                    priceCalc.innerHTML=`${aaa.reduce((a,b)=>{return`${+a + +b}`})}`
                    total.innerHTML=`${parseInt(crtspn.innerHTML)+100}`
                }
            pM.children[2].onclick=()=>{
                if(parseInt(pM.children[1].textContent)>9){return}
                pM.children[1].textContent=`${parseInt(pM.children[1].textContent)+1}`
                let myVarr = pM.parentElement.children[3].textContent
                clone.children[3].innerHTML = `${parseInt(myVarr) + plusP} R.S`
                priceCalc.innerHTML = `${parseInt(priceCalc.innerHTML) + plusP}`
                crtspn.innerHTML=`${parseInt(priceCalc.innerHTML)} R.S`
                total.innerHTML=`${parseInt(priceCalc.innerHTML)+100}`
            }
            pM.children[0].onclick=()=>{
                if(parseInt(pM.children[1].textContent)<=1){return}
                pM.children[1].textContent=`${parseInt(pM.children[1].textContent)-1}`
                let myVarr = pM.parentElement.children[3].textContent
                clone.children[3].innerHTML = `${parseInt(myVarr) - plusP} R.S`
                priceCalc.innerHTML = `${parseInt(priceCalc.innerHTML) - plusP}`
                crtspn.innerHTML=`${parseInt(priceCalc.innerHTML)} R.S`
                total.innerHTML=`${parseInt(priceCalc.innerHTML)+100}`
            }
            _golp.style.setProperty("pointer-events","all")
            _golp.style.setProperty("filter","blur(0px)")
            foot.style.setProperty("pointer-events","all")
            foot.style.setProperty("filter","blur(0px)")
            head.style.setProperty("pointer-events","all")
            head.style.setProperty("filter","blur(0px)")
            msgClone.remove()
            products.appendChild(clone)}
        if(products.innerHTML===`<span class="npts">No Products To Show</span>`)
        {products.removeChild(npts)}
    })
})
cartSpan.onclick=()=>{
    newUser.style.cssText="display: none"
    _Main.style.setProperty("display","none")
    uLogin.style.setProperty("display","none")
    _golp.style.setProperty("display","none")
    call.style.setProperty("display","none")
    cart.style.setProperty("display","block")
    window.scrollTo(0,0)
}
let radioD = document.querySelector(".radio")
let radio = document.querySelectorAll(".radio div")
products.parentElement.children[3].onclick=(e)=>{
    e.currentTarget.children[1].classList.add("fa-caret-down")
    radioD.style.setProperty("display","flex")
}
radio.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        radio.forEach((g)=>{
        g.classList.remove("active")
        g.children[0].classList.remove("fa-circle-dot")
        g.children[0].classList.add("fa-circle")
        g.children[0].style.setProperty("color","var(--main-color)")
        g.children[1].style.setProperty("color","black")})
        e.currentTarget.classList.add("active")
        if(el.classList.contains("active")===true){
            el.children[0].classList.remove("fa-circle")
            el.children[0].classList.add("fa-circle-dot")
            el.children[0].style.setProperty("color","var(--main-color)")
            el.children[1].style.setProperty("color","var(--main-color)")
        }
    })
})
let srch=document.querySelector(".fa-search")
srch.onclick=()=>{
    let myVrr = sndMSG.cloneNode(true)
    myVrr.style.setProperty("display","block")
    myVrr.style.setProperty("position","fixed")
    myVrr.style.setProperty("top","300px")
    myVrr.children[5].remove()
    let inp =document.createElement("input")
    inp.setAttribute("type","text")
    myVrr.appendChild(inp)
    myVrr.children[5].textContent="Search What You Want"
    myVrr.children[6].remove()
    myVrr.children[1].remove()
    myVrr.children[2].remove()
    myVrr.children[0].onclick=(e)=>{e.currentTarget.parentElement.style.display="none";srch.style.color="black"}
    document.body.appendChild(myVrr)
}
let noti=document.getElementById("noti")
let notification = document.querySelector(".notification")
let nf = notification.cloneNode(true)
document.body.appendChild(nf)
noti.onclick=()=>{
    if(noti.classList.contains("active")===true){
        noti.classList.remove("active")
        nf.style.setProperty("display","none")
        _Main.style.setProperty("filter", "blur(0px)")
        _golp.style.setProperty("filter", "blur(0px)")
        call.style.setProperty("filter", "blur(0px)")
        cart.style.setProperty("filter", "blur(0px)")
        foot.style.setProperty("filter", "blur(0px)")}
    else{
        noti.classList.add("active")
        nf.style.setProperty("display","flex")
        _Main.style.setProperty("filter", "blur(4px)")
        _golp.style.setProperty("filter", "blur(4px)")
        call.style.setProperty("filter", "blur(4px)")
        cart.style.setProperty("filter", "blur(4px)")
        foot.style.setProperty("filter", "blur(4px)")
        }
}
let nfss = document.querySelectorAll(".pip")
nfss.forEach((el)=>{
    el.onmouseenter=()=>{el.style.backgroundColor="antiquewhite"}
    el.onmouseleave=()=>{el.style.backgroundColor="initial"}
    el.addEventListener("click",(e)=>{
        e.currentTarget.remove()
        if(nf.children.length === 0){
            nf.innerHTML="No Notification To Show"
            nf.style.setProperty("text-align","center")}
        })})
