document.addEventListener("DOMContentLoaded", () => {

    console.log("Friendship Day Website Loaded ❤️");


    const envelope = document.getElementById("openEnvelope");


    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");
    const page6 = document.getElementById("page6");
    const page7 = document.getElementById("page7");
    const page8 = document.getElementById("page8");


    const pink = document.querySelector(".pink-transition");


    const progress = document.querySelector(".heart-progress");
    const heart = document.querySelector(".moving-heart");


    // ==========================
    // BACKGROUND MUSIC
    // ==========================

    const music = document.getElementById("bgMusic");

    if (music) {

        music.volume = 0.35;

    }



    // ==========================
    // PAGE 1 → PAGE 2
    // ==========================

    envelope.addEventListener("click", () => {

        // Start music
        if (music) {

            music.play().catch(() => {});

        }


        page1.classList.add("fade-out");


        setTimeout(() => {


            page1.classList.remove("active");
            page1.classList.remove("fade-out");


            page2.classList.add("active");
            page2.classList.add("fade-in");


        }, 800);


    });






    // ==========================
    // PAGE 2 → PAGE 3
    // ==========================

    page2.addEventListener("click", () => {


        pink.classList.add("active");



        if (progress && heart) {


            progress.style.animation = "none";
            heart.style.animation = "none";


            void progress.offsetWidth;



            setTimeout(() => {


                progress.style.animation = "barFill 5s linear forwards";
                heart.style.animation = "moveHeart 5s linear forwards";


            }, 3000);


        }




        setTimeout(() => {


            page2.classList.remove("active");
            page2.classList.remove("fade-in");


            page3.classList.add("active");
            page3.classList.add("fade-in");


        }, 400);





        setTimeout(() => {


            pink.classList.remove("active");


        }, 800);



    });






    // ==========================
    // PAGE 3 → PAGE 4
    // ==========================

    page3.addEventListener("click", () => {


        pink.classList.add("active");



        setTimeout(() => {


            page3.classList.remove("active");
            page3.classList.remove("fade-in");


            page4.classList.add("active");
            page4.classList.add("fade-in");


        }, 400);





        setTimeout(() => {


            pink.classList.remove("active");


        }, 800);



    });






    // ==========================
    // PAGE 4 → PAGE 5
    // ==========================

    page4.addEventListener("click", () => {


        pink.classList.add("active");



        setTimeout(() => {


            page4.classList.remove("active");
            page4.classList.remove("fade-in");


            page5.classList.add("active");
            page5.classList.add("fade-in");



            // Restart Page 5 tag animations

            const tags = document.querySelectorAll("#page5 .tag");


            tags.forEach(tag => {


                tag.style.animation = "none";


                void tag.offsetWidth;


                tag.style.animation = "";


            });



        }, 400);





        setTimeout(() => {


            pink.classList.remove("active");


        }, 800);



    });






    // ==========================
    // PAGE 5 → PAGE 6
    // ==========================

    page5.addEventListener("click", () => {


        pink.classList.add("active");



        setTimeout(() => {


            page5.classList.remove("active");
            page5.classList.remove("fade-in");


            page6.classList.add("active");
            page6.classList.add("fade-in");


        }, 400);





        setTimeout(() => {


            pink.classList.remove("active");


        }, 800);



    });







    // ==========================
    // PAGE 6 → PAGE 7
    // ==========================

    page6.addEventListener("click", () => {


        pink.classList.add("active");



        setTimeout(() => {


            page6.classList.remove("active");
            page6.classList.remove("fade-in");


            page7.classList.add("active");
            page7.classList.add("fade-in");


        }, 400);





        setTimeout(() => {


            pink.classList.remove("active");


        }, 800);



    });






    // ==========================
    // PAGE 7 → PAGE 8
    // ==========================

    page7.addEventListener("click", () => {


        pink.classList.add("active");



        setTimeout(() => {


            page7.classList.remove("active");
            page7.classList.remove("fade-in");


            page8.classList.add("active");
            page8.classList.add("fade-in");


        }, 400);





        setTimeout(() => {


            pink.classList.remove("active");


        }, 800);



    });






    // ==========================
    // PAGE 8 → RESTART
    // ==========================

    page8.addEventListener("click", () => {

        pink.classList.add("active");

        setTimeout(() => {

            page8.classList.remove("active");
            page8.classList.remove("fade-in");

            page1.classList.add("active");
            page1.classList.add("fade-in");

        }, 400);

        setTimeout(() => {

            pink.classList.remove("active");

        }, 800);

    });

});