
//NOTE: Every class in html is to JS as a node...
let init = () => {
  let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),//Find all the slides "jumbo-slider__slide"
    circles = document.getElementsByClassName("jumbo-slider__circle"),//Find all the circles
    links = document.getElementsByClassName("jumbo-slider__link"),//Find all the links
    current = 1,
    time = 10000;//10 seconds
  //console.log(`current: ${current}`); //debug current: 1

  //add animation class to slide
  slides[0].classList.add("jumbo-slider__slide--active");
  links[current - 1].classList.add("jumbo-slider__link--active");
  circles[current - 1].classList.add("jumbo-slider__circle--filled");

  //update elipsis and links
  let updateNav = (current) => {
    //console.log(`update current: ${current}`); //debug update current: 1
    for (let index = 0; index < slides.length; index++) {
      // stops at 3 slide
      links[index].classList.remove("jumbo-slider__link--active");
      circles[index].classList.remove("jumbo-slider__circle--filled");
    }
    links[current - 1].classList.add("jumbo-slider__link--active");
    circles[current - 1].classList.add("jumbo-slider__circle--filled");
  };
  let startSliding = () => {
    //let test = 1
    setInterval(() => {
      //runs every 10 seconds
      //test++;
      //console.log(test)
      //console.log(`update current: ${current}`);
      //remove from active from first and add it to the second slide so It can become the first side with the class activated
      slides[1].classList.add("jumbo-slider__slide--active");
      slides[0].classList.remove("jumbo-slider__slide--active");
      //clone the first slide and place on the last space
      //app.js:35 Uncaught TypeError: Cannot read properties of undefined (reading 'appendChild')at app.js:35
      container.appendChild(slides[0].cloneNode([true])); //PROBLEM//forgot to add the class container to the html file for the first slide
      //then remove the first slide after it has been cloned //Fixed
      container.removeChild(slides[0]); //PROBLEM //Fixed

      //console.log(`slides: ${slides.length}`);
      if (current < slides.length) {
        current++;
        updateNav(current);
      } else {
        current = 1;
        updateNav(current);
      }
    }, time);
  };
  startSliding();
};

init();
