let Time = document.querySelector(".TimerSelection"); 
let Min = document.querySelector(".Min"); 
let Sec = document.querySelector(".Sec"); 
let Start = document.querySelector(".StrtBtn");
let Content = document.querySelector(".Content");
let Wrt = document.querySelector(".Wrt");
let wpm = document.querySelector(".wpm");
let accuracy = document.querySelector(".acc");

Start.addEventListener("click", T1);
Wrt.setAttribute("disabled", "");

let ideaStr = "As the sun began to set, casting a warm golden hue across the landscape, the air filled with the scent of blooming flowers and fresh grass. Birds chirped in the distance, their melodies creating a harmonious backdrop to the tranquil scene. A gentle breeze rustled the leaves of the nearby trees, adding a soothing rhythm to the evening. People strolled leisurely along the path, enjoying the beauty of nature and the simple pleasure of being outdoors. In moments like these, it becomes clear how vital it is to pause and appreciate the world around us, finding joy in the little things that often go unnoticed.In the heart of the city, where skyscrapers reached for the sky and the hustle of daily life thrived, there existed a hidden park that provided a peaceful escape. Lush greenery surrounded the winding paths, while vibrant flowers bloomed in every corner, creating a tapestry of colors that delighted the senses. Children laughed and played, their joyous voices mingling with the soft rustle of leaves overhead. Nearby, a couple sat on a bench, sharing stories and dreams as the sun dipped lower in the horizon. The golden light filtered through the branches, casting dappled shadows on the ground, and for a moment, time seemed to stand still. This oasis, untouched by the chaos beyond its borders, reminded everyone who entered of the importance of taking a step back, breathing deeply, and reconnecting with nature and each other. As dusk approached, the first stars began to twinkle in the twilight sky, promising a night filled with wonder and possibility."
;  // Truncated for brevity
let array1 = ideaStr.split("");

let array2 = [];
for (let i = 0; i < ideaStr.length; i++) {
    if (ideaStr[i] != " ") {
        array2 = array2.concat(`<p id="ShreeRam${i}">${ideaStr[i]}</p>`);
    } else {
        array2 = array2.concat("&#160;"); // non-breaking space
    }
}

// Append the array2 elements to your content dynamically
Content.innerHTML = array2.join(''); 

Wrt.addEventListener("input", function() {
    let StrWrt = Wrt.value;
    for (let i = 0; i < StrWrt.length; i++) {
        let ShreeRam = document.getElementById(`ShreeRam${i}`);
        if (StrWrt[i] === ideaStr[i]) {
            ShreeRam.style.color = "red";
        } else {
            ShreeRam.style.color = "black"; // reset if wrong
        }
    }
});

function T1() { 
    Start.setAttribute("disabled", "");
    Wrt.removeAttribute("disabled");
    Wrt.value = "";
    let Strt;

    let T2 = () => {
        Sec.innerHTML--;
        if (Sec.innerHTML <= 9) {
            Sec.innerHTML = "0" + Sec.innerHTML;
        }
        if (Sec.innerHTML == 0 && Min.innerHTML != 0) {
            Sec.innerHTML = 59;
            Min.innerHTML--;
        } else if (Sec.innerHTML == 0 && Min.innerHTML == 0) {
            Start.removeAttribute("disabled");
            clearInterval(Strt);
            calculateWPM();  // Function to calculate WPM at the end
        }
    }

    if (Time.value == "One Minute") {
        Sec.innerHTML = 59;
        Min.innerHTML = 0;
        Strt = setInterval(T2, 1000);
    } else if (Time.value == "Two Minute") {
        Sec.innerHTML = 59;
        Min.innerHTML = 1;
        Strt = setInterval(T2, 1000);
    } else if (Time.value == "Three Minute") {
        Sec.innerHTML = 59;
        Min.innerHTML = 2;
        Strt = setInterval(T2, 1000);
    }
}

function calculateWPM() {
    let typedWords = Wrt.value.split(" ").length;
    let totalTimeInMinutes = (parseInt(Min.innerHTML) * 60 + parseInt(Sec.innerHTML)) / 60;
    let wordsPerMinute = typedWords / totalTimeInMinutes;
    wpm.innerHTML = Math.round(wordsPerMinute);

    // Calculate Accuracy
    let correctChars = 0;
    for (let i = 0; i < Wrt.value.length; i++) {
        if (Wrt.value[i] === ideaStr[i]) {
            correctChars++;
        }
    }
    let accuracyPercentage = (correctChars / ideaStr.length) * 100;
    accuracy.innerHTML = accuracyPercentage.toFixed(2) + "%";
}
