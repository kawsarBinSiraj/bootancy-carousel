/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // Bootstrap carousel
    // for Main carousel
    $(function () {
        // $('.carousel').carousel({
        //     interval: 5000,
        //     cycle: true,
        //     pause: "null"
        // })

        // Grab your carousels
        const myCarouselOne = document.querySelector('#segment-1')
        const myCarouselTwo = document.querySelector('#segment-2')

        // Get either the existing Bootstrap Carousel instance or create a new one
        const carouselOne = bootstrap.Carousel.getOrCreateInstance(myCarouselOne);
        const carouselTwo = bootstrap.Carousel.getOrCreateInstance(myCarouselTwo);

        // Grab your radio indicators, the previous and next buttons/arrows
        const indicatorsAll = document.querySelectorAll('.carousel-indicators');
        const prevCarouselBtn = document.querySelector('.carousel-control-prev');
        const nextCarouselBtn = document.querySelector('.carousel-control-next');

        // Add event listeners to your indicators, previous and next buttons/arrows
        indicatorsAll.forEach(IndicatorBtn => IndicatorBtn.addEventListener("click", goToIndicatorCarousels));
        prevCarouselBtn.addEventListener('click', prevCarousels);
        nextCarouselBtn.addEventListener('click', nextCarousels);

        // Call the Bootstrap 'to' function for both Carousels to go to the indicator page that was clicked
        function goToIndicatorCarousels(e) {
            let clickedIndicator = e.target.attributes[1].value;
            carouselOne.to(clickedIndicator);
            carouselTwo.to(clickedIndicator);
        }

        // Call the Bootstrap 'prev' function for both Carousels to go to the previous page
        function prevCarousels() {
            carouselOne.prev();
            carouselTwo.prev();
        }

        // Call the Bootstrap 'next' function for both Carousels to go to the next page
        function nextCarousels() {
            carouselOne.next();
            carouselTwo.next();
        }
    });

});
