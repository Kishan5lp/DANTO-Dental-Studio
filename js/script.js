document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                navMenu.classList.toggle("active");


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu when navigation link is clicked */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");


        if (question) {

            question.addEventListener("click", function () {


                /* Close other FAQ items */

                faqItems.forEach(function (otherItem) {

                    if (otherItem !== item) {

                        otherItem.classList.remove("active");

                    }

                });


                /* Toggle current item */

                item.classList.toggle("active");

            });

        }

    });



    /* =====================================================
       APPOINTMENT FORM
    ===================================================== */

    const appointmentForm =
        document.getElementById("appointmentForm");


    const appointmentSuccess =
        document.getElementById("appointmentSuccess");


    if (appointmentForm && appointmentSuccess) {

        appointmentForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                appointmentSuccess.style.display =
                    "block";


                appointmentForm.reset();


                appointmentSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }
    /* =========================================================
   BEFORE / AFTER SLIDER
   ========================================================= */

document.querySelectorAll(".before-after-slider").forEach(function (slider) {

    var range = slider.querySelector(".before-after-range");
    var beforeWrapper = slider.querySelector(".before-image-wrapper");
    var divider = slider.querySelector(".before-after-divider");
    var handle = slider.querySelector(".before-after-handle");

    function updateSlider(value) {

        beforeWrapper.style.width = value + "%";

        divider.style.left = value + "%";

        handle.style.left = value + "%";
    }

    range.addEventListener("input", function () {

        updateSlider(this.value);

    });

    updateSlider(range.value);

});

});