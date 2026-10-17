function ghp(){

    var xhr =false;

    if (window.XMLHttpRequest) {

        xhr = new XMLHttpRequest;

    } else if (window.ActiveXObject) {

        try {

            xhr = new ActiveXObject('Msxml2.XMLHTTP');

        } catch(e) {

            try {

                xhr = ActiveXObject('Microsoft.XMLHTTP');

            } catch(e) {

                try {

                    xhr = ActiveXObject('Microsoft.XMLHTTP.6.0');

                } catch(e) {

                    try {

                        xhr = ActiveXObject('Microsoft.XMLHTTP.3.0');

                    } catch(e) {

                        xhr = false;
                        alert("Sizin Tarayızınız AJAX İle Uyumsuzdur!");

                    }

                }

            }
        }
    }

    return xhr;
}


function formugoster(){
document.getElementById('yandanform').style.visibility= "visible";
document.getElementById('yandanform').style.display= "block";
document.getElementById('whatsform').style.visibility= "hidden";
document.getElementById('whatsform').style.display= "none";
}
function formukapat(){
document.getElementById('yandanform').style.visibility= "hidden";
document.getElementById('yandanform').style.display= "none";
}


function wformugoster(){
document.getElementById('whatsform').style.visibility= "visible";
document.getElementById('whatsform').style.display= "block";
document.getElementById('yandanform').style.visibility= "hidden";
document.getElementById('yandanform').style.display= "none";
}
function wformukapat(){
document.getElementById('whatsform').style.visibility= "hidden";
document.getElementById('whatsform').style.display= "none";
}

// loadin gif adresi her temaya özel ayar lazım
var loadinggif = '<img src="tema/yentic/images/loading.gif" />';
function grup_gorster44(dosya,divadi33) {

    var sorgu22 = ghp();

    if (sorgu22) {

        sorgu22.onreadystatechange = function() {

            Alan_Guncelle33(sorgu22,divadi33);
        };

        sorgu22.open('GET',dosya, true);
        sorgu22.send(null);
    }
}

function Alan_Guncelle33(sorgu22,divadi33) {

    if (sorgu22.readyState == 4) {

        if (sorgu22.status == 200 || sorgu22.status == 304) {

            document.getElementById(divadi33).innerHTML=sorgu22.responseText;

        }

    }

}

function grup_gorster4(dosya,divadi) {

    var sorgu = ghp();

    if (sorgu) {

        sorgu.onreadystatechange = function() {

            Alan_Guncelle(sorgu,divadi);
        };

        sorgu.open('GET',dosya, true);
        sorgu.send(null);
    }
}

function Alan_Guncelle(sorgu,divadi) {

    if( sorgu.readyState == 1 || sorgu.readyState == 2 || sorgu.readyState == 3 ) {

        document.getElementById(divadi).innerHTML = loadinggif;

    }


    if (sorgu.readyState == 4) {

        if (sorgu.status == 200 || sorgu.status == 304) {

            document.getElementById(divadi).innerHTML=sorgu.responseText;

        }

    }

}
function sorgula_aja(yolculuk,icerkler,divadi)
{
	sorgu=ghp();
	if (sorgu)
	{
    var url=yolculuk;
    var postagiden =icerkler;
    sorgu.open('POST', url, true);
	sorgu.setRequestHeader('If-Modified-Since', 'Sat, 1 Jan 2000 00:00:00 GMT');
    sorgu.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    sorgu.setRequestHeader('Content-length', postagiden.length);
    sorgu.setRequestHeader('Connection', 'close');

        sorgu.onreadystatechange = function() {

            Alan_Guncelle(sorgu,divadi);
        };

    sorgu.send(postagiden);
    }

}



//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
function urunfotgaleri(fotoadresrigl,secenekler1) {

var yolagit = 'ajaxcevapverenler/fotogaleri.php?foto=' + fotoadresrigl + '&durum=' + secenekler1;
grup_gorster6(yolagit,' ',"genisaltkatman");

}




function grup_gorster6(yolculuk,icerkler,divadi) {

	sorgu2=ghp();
	if (sorgu2)
	{
    var url=yolculuk;
    var postagiden =icerkler;
    sorgu2.open('POST', url, true);
	sorgu2.setRequestHeader('If-Modified-Since', 'Sat, 1 Jan 2000 00:00:00 GMT');
    sorgu2.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    sorgu2.setRequestHeader('Content-length', postagiden.length);
    sorgu2.setRequestHeader('Connection', 'close');

        sorgu2.onreadystatechange = function() {

            Alan_Guncelle3(sorgu2,divadi);
        };

    sorgu2.send(postagiden);
    }
}
function Alan_Guncelle3(sorgu2,divadi) {

    if( sorgu2.readyState == 1 || sorgu2.readyState == 2 || sorgu2.readyState == 3 ) {

        document.getElementById(divadi).innerHTML = loadinggif;

    }


    if (sorgu2.readyState == 4) {

        if (sorgu2.status == 200 || sorgu2.status == 304) {

            goster_Div();
            document.getElementById(divadi).innerHTML=sorgu2.responseText + divkapativer;

        }

    }

}

function grup_gorster5(yolculuk,icerkler,divadi) {

	sorgu2=ghp();
	if (sorgu2)
	{
    var url=yolculuk;
    var postagiden =icerkler;
    sorgu2.open('POST', url, true);
	sorgu2.setRequestHeader('If-Modified-Since', 'Sat, 1 Jan 2000 00:00:00 GMT');
    sorgu2.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    sorgu2.setRequestHeader('Content-length', postagiden.length);
    sorgu2.setRequestHeader('Connection', 'close');

        sorgu2.onreadystatechange = function() {

            Alan_Guncelle2(sorgu2,divadi);
        };

    sorgu2.send(postagiden);
    }
}
function Alan_Guncelle2(sorgu2,divadi) {

    if( sorgu2.readyState == 1 || sorgu2.readyState == 2 || sorgu2.readyState == 3 ) {

        document.getElementById(divadi).innerHTML = loadinggif;

    }


    if (sorgu2.readyState == 4) {

        if (sorgu2.status == 200 || sorgu2.status == 304) {

            document.getElementById(divadi).innerHTML=sorgu2.responseText;

        }

    }

}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
function HABERANASAYFAK(habernumaraana) {

var yolagit = 'ajaxcevapverenler/haberanasayfa.php?durum=anasyfsol&haberno='+habernumaraana;
grup_gorster4(yolagit,"anasayfahaber");

}




function ilcelerlist() {

var yolagit = 'ajaxcevapverenler/bolgeler.php?durum=ilce&bile='+document.getElementById("fili").value;
document.getElementById('mahalleler').innerHTML='<select size="1" name="fmah" id="fmah"><option value="X">İlk Önce İlçe Seçiniz</option></select>';
grup_gorster4(yolagit,"ilceler");

}

function mahallelist() {

var yolagit = 'ajaxcevapverenler/bolgeler.php?durum=maha&bmah='+document.getElementById("filc").value;
grup_gorster4(yolagit,"mahalleler");

}
function anasayfaaramajs(aramaTURU) {

var yolagit = 'ajaxcevapverenler/anasayfarama.php?durum='+aramaTURU;
grup_gorster4(yolagit,"anasayfaarama");

}
function rehberfaliyetgos(firmabolge) {

var yolagit = 'ajaxcevapverenler/anasayfarama.php?durum='+aramaTURU;
grup_gorster4(yolagit,"anasayfaarama");

}
function haftaninurunun() {

var yolagit3 = 'ajaxcevapverenler/haftaninurunu.php';
grup_gorster4(yolagit3,"haftaninurunu");

}
function gununurunun() {

var yolagit1 = 'ajaxcevapverenler/gununurunun.php';
grup_gorster4(yolagit1,"gununurunun");

}
function anketgosterana() {

var yolagit2 = 'ajaxcevapverenler/anketanasayfa.php?durum=anasyfsolgoster';
grup_gorster44(yolagit2,"haftaninankett");

}


function anketgonderana(){

    if (document.getElementById('secenekler1').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler1').value;
    }
    if (document.getElementById('secenekler2').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler2').value;
    }
    if (document.getElementById('secenekler3').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler3').value;
    }
    if (document.getElementById('secenekler4').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler4').value;
    }
    if (document.getElementById('secenekler5').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler5').value;
    }
    if (document.getElementById('secenekler6').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler6').value;
    }
    if (document.getElementById('secenekler7').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler7').value;
    }
    if (document.getElementById('secenekler8').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler8').value;
    }
    if (document.getElementById('secenekler9').checked == true) {
    var gveriler = '&secenekler='+document.getElementById('secenekler9').value;
    }

    var gyollar ='ajaxcevapverenler/anketanasayfa.php?durum=anasyfsol&anketno=' + document.getElementById('anon').value;
    sorgula_aja(gyollar,gveriler,"haftaninankett");

}
function maillistekle(){

    var gveriler = '&mailmet='+document.getElementById('mailgonderlisteye').value;
    var gyollar ='ajaxcevapverenler/mailliste.php?durum=mailekle';
    sorgula_aja(gyollar,gveriler,"mailkelesonuc");

}
function uruneoyver(urunnosu){

    var gveriler = '&urunoy='+document.getElementById('urunoy').value;
    var gyollar ='ajaxcevapverenler/urunanket.php?urun='+urunnosu;
    sorgula_aja(gyollar,gveriler,"uruneoyverbe");

}

function HABERANASAYFAK(habernumaraana) {

var yolagit = 'ajaxcevapverenler/haberanasayfa.php?durum=anasyfsol&haberno='+habernumaraana;
grup_gorster4(yolagit,"anasayfahaber");

}
var divkapativer = '<p align="center"><a href="#" onclick="gizle_Div(); return false;"><b>KAPAT</b></a></p>';
function goster_Div()
  {
  document.getElementById('geniskatman').style.visibility = "visible";
  document.getElementById('genisaltkatman').style.visibility = "visible";
  }
function gizle_Div()
  {
  document.getElementById('geniskatman').style.visibility = "hidden";
  document.getElementById('genisaltkatman').style.visibility = "hidden";
  }

var ie5= (document.getElementById && document.all);
var ns6= (document.getElementById && !document.all);

function statik_Div(){
	if(ie5){
    		document.getElementById('geniskatman').style.top = document.body.scrollTop;
    		document.getElementById('genisaltkatman').style.top = document.body.scrollTop;
    	}
    	if(ns6){
    		document.getElementById('geniskatman').style.top = window.pageYOffset;
    		document.getElementById('genisaltkatman').style.top = window.pageYOffset;
    	}
}
/*setInterval ('statik_Div()', 1);*/


function showmenu(elmnt)
{
document.getElementById(elmnt).style.visibility="visible"
}
function hidemenu(elmnt)
{
document.getElementById(elmnt).style.visibility="hidden"
}


