document.addEventListener("click", function () {
    const music = document.getElementById("ourSong");

    if (music) {
        music.volume = 0.9;
        music.play().catch(() => {});
    }
}, { once: true });

function checkAnswers() {

    const answer1 = document
        .getElementById("answer1")
        .value
        .trim()
        .toLowerCase();

    const answer2 = document
        .getElementById("answer2")
        .value
        .trim()
        .toLowerCase();


    // Kabul edilecek cevaplar
    const correctAnswers1 = [
        "23 temmuz 18.15",
        "23 temmuz 18:15",
        "23 temmuz saat 18.15",
        "23 temmuz saat 18:15"
    ];

    const correctAnswers2 = [
        "3 temmuz 2006",
        "03 temmuz 2006",
        "3 temmuz 06",
        "03.07.2006",
        "03/07/2006",
        "3/7/2006"
    ];


    const firstCorrect = correctAnswers1.includes(answer1);
    const secondCorrect = correctAnswers2.includes(answer2);


    if (firstCorrect && secondCorrect) {

        document.getElementById("error-message").textContent = "";

        document.getElementById("quiz-screen").style.display = "none";

        document.getElementById("surprise-screen").style.display = "flex";

    } else {

        document.getElementById("error-message").textContent =
            "Hmm... Bir şeyleri yanlış hatırladın. Bir daha düşün Merve. ❤️";

    }
}
const storyPhotos = [
    {
        image: "fotoğraflar/foto1.jpeg",
        text: "Bütün güzel anılarımızın içinde en güzeli, seninle olanlarım... ❤️"
    },
    {
        image: "fotoğraflar/foto2.jpeg",
        text: "Seninle geçirdiğim her an benim için gerçekten çok değerli. 🥹❤️"
    },
    {
        image: "fotoğraflar/foto3.jpeg",
        text: "Bazen her şeyi geride bırakıp sadece ikimizin güzel günlerini düşünüyorum..."
    },
    {
        image: "fotoğraflar/foto4.jpeg",
        text: "Merve... Seni çok seviyorum. Ve bizim hikâyemizin burada bitmesini istemiyorum. ❤️"
    }
];

let currentStoryPhoto = 0;

function startStory() {
    const photoStory = document.getElementById("photoStory");
    const storyPhoto = document.getElementById("storyPhoto");
    const storyText = document.getElementById("storyText");

    photoStory.style.display = "block";

    currentStoryPhoto = 0;

    storyPhoto.src = storyPhotos[0].image;
    storyText.textContent = storyPhotos[0].text;

    const music = document.getElementById("ourSong");

    if (music) {
        music.volume = 0.7;
        music.play().catch(() => {});
    }

    photoStory.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function nextStoryPhoto() {
    currentStoryPhoto++;

    if (currentStoryPhoto >= storyPhotos.length) {
        document.getElementById("storyText").textContent =
            "Merve, seni çok seviyorum. Benimle yeniden bir şans verir misin? ❤️";

        document.getElementById("nextPhoto").style.display = "none";
        return;
    }

    const photoStory = document.getElementById("photoStory");
    const storyPhoto = document.getElementById("storyPhoto");
    const storyText = document.getElementById("storyText");

    photoStory.style.animation = "none";
    void photoStory.offsetWidth;
    photoStory.style.animation = "storyFade 0.8s ease";

    storyPhoto.src = storyPhotos[currentStoryPhoto].image;
    storyText.textContent = storyPhotos[currentStoryPhoto].text;
}
