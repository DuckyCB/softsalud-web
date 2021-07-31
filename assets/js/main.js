
let lang = localStorage.getItem("softSaludLangCurrent");
if (lang !== null) {
    setLang(lang);
} else {
    setLang("es");
}


function setLang(langSelected) {
    let langToHide = langSelected === "es" ? "en" : "es";

    console.log("Hides elements "+langToHide);
    let elementsToHide = document.getElementsByClassName(langToHide);
    for (let i = 0;  i < elementsToHide.length;  i++){
        elementsToHide[i].style.display = "none";
    }

    console.log("Shows elements "+langSelected);
    let elementsToShow = document.getElementsByClassName(langSelected);
    for(let i = 0;  i < elementsToShow.length;  i++){
        elementsToShow[i].style.display = "block";
    }
    localStorage.setItem("softSaludLangCurrent", langSelected)
}
