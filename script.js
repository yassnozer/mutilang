var language=""
function reload(){
    location.reload();
}

document.getElementById("english").addEventListener("click" , ()=>{
    language="english";
localStorage.setItem("language",language);
reload();

    });

// 
    document.getElementById("arabic").addEventListener("click" , ()=>{
        language="arabic";
    localStorage.setItem("language",language);
    reload();
    
        });


var arwebsite={
    title:"معرض اعمالي",
    direction:"rtl",
    logo: `
    <a class="navbar-brand" href="#">
                            معرض أعمالي
              </a>
    `,
    welcome:"مرحبا بك قي موقعي!",
    about:"نبذة عني",
    aboutfontSize:"1.5rem",
    abouttext:"مرحبا انا مطور ويب: اشتمل - سي اس اس - بوتستراب - جافاسكريبت",
    btn_info:"اتصل بي"
}
var engwebsite={
    title:"Portfolio",
    direction:"ltr",
    logo: `
    <a class="navbar-brand" href="#">
                            My Portfolio
              </a>
    `,
    welcome:"welcome to my website",
    about:"about me",
    aboutfontSize:"1.5rem",
    abouttext:"Hi i am a web developer: Html - Css - Bootsrap - JS",
    btn_info:"contact me"
}

onload= ()=> {
    language=localStorage.getItem("language")
    if(language==="arabic"){
        setlang(arwebsite)
    }else if(language==="english"){
        setlang(engwebsite)
    }
}

function setlang(lang){
        document.title=lang.title
        document.body.style.direction=lang.direction
        document.getElementById("logo").outerHTML= lang.logo

            document.getElementById("welcome").innerText =lang.welcome
            document.getElementById("about").innerText =lang.about
            document.getElementById('about').style.fontSize =lang.aboutfontSize;
            document.getElementById('abouttext').innerText =lang.abouttext
        document.getElementById("btn-info").innerText =lang.btn_info
    }
   