let preCin = 0;
let postCin = 0;
let preAtmos = 0;
let postAtmos = 0;
let preElec = 0;
let postElec = 0;

function hideCinematic(){
    document.getElementById('extendedListCinematic1').style.display = "none";
    document.getElementById('extendedListCinematic2').style.display = "none";
    document.getElementById('extendedListCinematic3').style.display = "none";
    document.getElementById('extendedListCinematic4').style.display = "none";
    document.getElementById('extendedListCinematic5').style.display = "none";
    document.getElementById('extendedListCinematic6').style.display = "none";
    document.getElementById('extendedListCinematic7').style.display = "none";
    document.getElementById('extendedListCinematic7').style.display = "none";

    document.getElementById('loadMoreCinematic').style.display = "block";

    resize('MusicSubPage', false, postCin-preCin);
}

function showCinematic(){
    preCin = document.getElementsByTagName("html")[0].scrollHeight;

    document.getElementById('extendedListCinematic1').style.display = "flex";
    document.getElementById('extendedListCinematic2').style.display = "flex";
    document.getElementById('extendedListCinematic3').style.display = "flex";
    document.getElementById('extendedListCinematic4').style.display = "flex";
    document.getElementById('extendedListCinematic5').style.display = "flex";
    document.getElementById('extendedListCinematic6').style.display = "flex";
    document.getElementById('extendedListCinematic7').style.display = "block";

    document.getElementById('loadMoreCinematic').style.display = "none";

    postCin = document.getElementsByTagName("html")[0].scrollHeight;
    resize('MusicSubPage', false);
}

function hideAtmos(){
    document.getElementById('extendedListAtmos1').style.display = "none";
    document.getElementById('extendedListAtmos2').style.display = "none";
    document.getElementById('extendedListAtmos3').style.display = "none";
    document.getElementById('extendedListAtmos4').style.display = "none";
    document.getElementById('extendedListAtmos5').style.display = "none";

    document.getElementById('loadMoreAtmos').style.display = "block";

    resize('MusicSubPage', false, postAtmos-preAtmos);
}

function showAtmos(){
    preAtmos = document.getElementsByTagName("html")[0].scrollHeight;
    document.getElementById('extendedListAtmos1').style.display = "flex";
    document.getElementById('extendedListAtmos2').style.display = "flex";
    document.getElementById('extendedListAtmos3').style.display = "flex";
    document.getElementById('extendedListAtmos4').style.display = "flex";
    document.getElementById('extendedListAtmos5').style.display = "block";

    document.getElementById('loadMoreAtmos').style.display = "none";

    postAtmos = document.getElementsByTagName("html")[0].scrollHeight;
    resize('MusicSubPage', false);
}

function hideElec(){
    document.getElementById('extendedListElec1').style.display = "none";
    document.getElementById('extendedListElec2').style.display = "none";

    document.getElementById('loadMoreElec').style.display = "block";

    resize('MusicSubPage', false, postElec-preElec);
}

function showElec(){
    preElec = document.getElementsByTagName("html")[0].scrollHeight;
    document.getElementById('extendedListElec1').style.display = "flex";
    document.getElementById('extendedListElec2').style.display = "block";

    document.getElementById('loadMoreElec').style.display = "none";

    postElec = document.getElementsByTagName("html")[0].scrollHeight;
    resize('MusicSubPage', false);
}

function resize(pageName, grow=true, reduce=0){
    var height = document.getElementsByTagName("html")[0].scrollHeight;
    if(grow && (pageName=='MusicSubPage' || pageName=='ShopSubPage' || pageName=='AboutSubPage')){
        height += 20;
    }
    height -= reduce;
    var messageText = "setHeight" + pageName;
    parent.postMessage([messageText, height], "*");
}

function loadPage(pageName){
    var messageText = "load" + pageName;
    parent.postMessage([messageText, 0], "*");
}

function unloadPage(pageName){
    var messageText = "unload" + pageName;
    parent.postMessage([messageText, 0], "*");
}