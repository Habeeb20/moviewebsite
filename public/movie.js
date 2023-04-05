var settingsmenu = document.querySelector(".search");
var watch = document.getElementById("play")
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input')

left_btn.addEventListener('click', () => {
    Cards.scrollLeft += 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})

let json_url = "movie-json";

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.foreach((ele,i) => {
            let {name, imbd, data, sposter, bposter} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            Card.href = url;
            card.innerHTML = 
             <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="{sposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>${IDB}</span></h3>
                    </div>
                </div>
                

            </div> 
              
            cards.appendChild(card);               
        });
        document.getElementById('title').innerText = data[0].name;
        document.getElementById('gen').innerText = data[0].genre;
        document.getElementById('date').innerText = data[0].date;
        document.getElementById('rate').innerHTML = data[0].name;


        data.foreach(element => {
            let {name, imbd, data, sposter, bposter} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            Card.href = url;
            card.innerHTML ='' 
            <img src="${sposter}" alt="${name}" class="poster">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                         
                    </div>

            search.appendChild(card);
        });



        search_input.addEventListener('keyup', () => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementByTagName('a');

        for(let index = 0; index < a.length; index++) {
            let b = a[index].getElementByClassName('cont')[0];

            let TextValue = b.textContent || b.innerText;
            if (TextValue.toUpperCase().indexof(filter)> -1) {
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            } else{
                a[index].style.display = "none";
            }
            if (search_input.value == 0) {
                search.style.visibility = "hidden";
                search.style.opacity = 0;

            }
        }



    });

    let video = document.getElementByTagName('video')[0];
    let play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (video.paused) {
            Video.play();
            play.innerHTML = 'play'
        }else {
            video.pause();
            play.innerHTML = 'watch'
        }
        }

    })



   
    });







 