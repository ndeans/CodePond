// ==UserScript==
// @name        NFLRanking
// @namespace   http://www.deans.us
// @include     http://www.nfl.com/standings
// @version     1
// @grant       none
// @noframes
// ==/UserScript==

console.log("NFL Ranking Script Loaded...");

document.addEventListener('DOMContentLoaded', function() {
    
    console.log(">> EVENT : DOMContentLoaded :");
    init(1);
   
});

document.addEventListener('keydown', function(event) {
    
    if (event.keyCode == 113) {
        console.log("EVENT : keyCode-113 (F2) : single page extraction test requested.");
        init(2);  // start single page extraction (test)
    }
    
});

function init(opt) {

    if (opt == 1) {
        console.log("NFLRanking Initialized...");
        return;
    }

    if (opt == 2) {

        console.log("NFLRanking Calculate Conference Rank...");
        
        var top_ads = document.querySelector("div#page-top-ad");
        if(top_ads){
            top_ads.parentNode.removeChild(top_ads);
        }
        
        var view = document.createElement('div');
        view.id = "rank_view";
        view.innerHTML = "Conference Ranking";
        view.style.width = "160";
        view.style.height = "600";
        view.style.backgroundColor = "#222";
        view.style.color = "#CCFFCC";
        view.padding = "5px";
        
        var ads0 = document.querySelector("div.ad-container");
        var ads1 = document.querySelector("p.ad-below");
        var ads2 = document.querySelector("div.adcontainer");

        if(ads1){
            ads1.parentNode.removeChild(ads1);
        }
        if(ads2){
            ads2.parentNode.removeChild(ads2);
        }

var data_table = document.querySelector('.data-table1');
        if(data_table){
            
            var node_list = data_table.querySelectorAll('.tbdy1');
            var i=1;
            var c=0;
            var report = "";
            
            while ( i < (node_list.length)+1) {
                var pct = node_list[i-1].querySelector('.sorted').innerHTML.substring(1,4);
                var pct_value = parseInt(pct,10);
                console.log(pct_value);
                c = c + pct_value;
                if(i==4){ 
                    console.log("AFC East : " + c ); 
                    c = 0;    
                }
                if(i==8){ 
                    console.log("AFC North : " + c ); 
                    c = 0;
                }    
                if(i==12){ 
                    console.log("AFC South : " + c ); 
                    c = 0;
                }    
                if(i==16){ 
                    console.log("AFC West : " + c ); 
                    c = 0;
                }    
                if(i==20){ 
                    console.log("NFC East : " + c ); 
                    c = 0;
                }    
                if(i==24){ 
                    console.log("NFC North : " + c ); 
                    c = 0;
                }    
                if(i==28){ 
                    console.log("NFC South : " + c ); 
                    c = 0;
                }    
                if(i==32){ 
                    console.log("NFC 4 West " + c ); 
                    c = 0;
                }    

                      

//                console.log("pct " + i + " = " + pct);
                i++;
            }
        }
        
        
        ads0.appendChild(view);
        
            
        
        
        return;
    }
    
    
    
    
    
    
}

