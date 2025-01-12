let Time = document.querySelector(".TimeSelection"); 
let Min = document.queryselector(".Min"); 
let Sec = document.querySelector(".Sec"); 
let Start = document.querySelector(".StrtBtn");
let Content = document.querySelector(".Content");
let Wrt = document.querySelector(".Wrt");
let wpm = document.querySelector(".wpm");   
let accuracy = document.querySelector(".acc");

Start.addEventListener("click", T1());
Wrt.setAttribute("disabled", "");

let words;
let count;

let StrWrt = Wrt.value;

let ideaStr = "As the sun began to set, casting a warm golden hue across the landscape, the air filled with the scent of blooming flowers and fresh grass. Birds chirped in the distance, their melodies creating a harmonious backdrop to the tranquil scene. A gentle breeze rustled the leaves of the nearby trees, adding a soothing rhythm to the evening. People strolled leisurely along the path, enjoying the beauty of nature and the simple pleasure of being outdoors. In moments like these, it becomes clear how vital it is to pause and appreciate the world around us, finding joy in the little things that often go unnoticed.In the heart of the city, where skyscrapers reached for the sky and the hustle of daily life thrived, there existed a hidden park that provided a peaceful escape. Lush greenery surrounded the winding paths, while vibrant flowers bloomed in every corner, creating a tapestry of colors that delighted the senses. Children laughed and played, their joyous voices mingling with the soft rustle of leaves overhead. Nearby, a couple sat on a bench, sharing stories and dreams as the sun dipped lower in the horizon. The golden light filtered through the branches, casting dappled shadows on the ground, and for a moment, time seemed to stand still. This oasis, untouched by the chaos beyond its borders, reminded everyone who entered of the importance of taking a step back, breathing deeply, and reconnecting with nature and each other. As dusk approached, the first stars began to twinkle in the twilight sky, promising a night filled with wonder and possibility."

let array1 = ideaStr.split("");

let array2 = [];
for(i=0; i<ideaStr.length; i++){
    if(ideaStr[i] != " "){
        array2 = array2.concat(`<p id = "ShreeRam${i}">${ideaStr[i]}</p>`);
    }else if(ideaStr[i] == " "){
        array2 = array2.concat("&#160");
    }
}

    Wrt.addEventListener("input", function(){
        let StrWrt = Wrt.value;
        for(i=0; i<ideaStr.length; i++){
            if(StrWrt[i] == ideaStr[i] && StrWrt[i] != " "){
                let ShreeRam = document.getElementById(`ShreeRam${i}`);
                ShreeRam.style.color = "red";
            }
        }
    })

function T1(){ 
    Start.setAttribute("disabled", "");
    Wrt.removeAttribute("disabled");
    Wrt.value = "";
    let T;
    words = 0;
    count = 0;
    wpm.innerHTML = "0";
    accuracy.innerHTML = "0";
    let Strt;

    let T2 = () => {
        Sec.innerHTML--;
        if(Sec.innerHTML<=9){
            Sec.innerHTML = "0" + Sec.innerHTML;
        }
        if(Sec.innerHTML == 0 && Min.innerHTML !=0){
            Sec.innerHTML = 59;
            Min.innerHTML--;
        }else if(Sec.innerHTML == 0 && Min.innerHTML ==0){
            Start.removeAttribute("disabled");
            Wrt.setAttribute("disabled", "");
            clearInterval(Strt);
            let StrWrt = Wrt.value;
            let ArrayWrt = StrWrt.split(" ");
            for(let i = 0; i<ArrayWrt.length; i++){
                if(ArrayWrt[i] != ""){
                    count++;
                }
                if(array1[i] == ArrayWrt[i]){
                    words++;
                }
            }
            wpm.innerHTML = (words/T).toFixed(0);
            accuracy.innerHTML = ((words/count)*100).toFixed(2);
        }
    }

    if(Time.value == "One Minute"){
        T = 1;
        Sec.innerHTML = 59;
        Min.innerHTML = 0;
        Strt = setInterval(T2, 1000);
    }
    if(Time.value == "Two Minute"){
        T = 2;
        Sec.innerHTML = 59;
        Min.innerHTML = 1;
        Strt = setInterval(T2, 1000);
    }
    if(Time.value == "Three Minute"){
        T = 3;
        Sec.innerHTML = 59;
        Min.innerHTML = 2;
        Strt = setInterval(T2, 1000);
    }
}