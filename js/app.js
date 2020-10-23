/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const navbarMenu = document.getElementById("navbar__list");
//select sections
const sections = document.querySelectorAll("section");




/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function isInViewport(element) {
    const distance = element.getBoundingClientRect();
    return (
        distance.top <= 100 &&
        distance.left >= 0 &&
        distance.bottom >= 90 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function createHTMLNav() {
    for (let item of sections) {
        let section = document.createElement("li");
        const id = item.id;
        section.className = "menu__link";
        //section.innerText = item.dataset.nav;
        section.innerHTML = `<a class="menu__link ${id}" href="#${id}">${item.dataset.nav}</a>`;
        navbarMenu.appendChild(section);

    };
};
createHTMLNav();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function activateSection() {
    for (const section of sections) {
        const selectedItem = document.querySelector(`.${section.id}`);
        if (isInViewport(section)) {
            section.classList.add("section-active");
            selectedItem.classList.add("link-active");
            console.log(`Section ${section.id} is active`);
        } else {
            section.classList.remove("section-active");
            selectedItem.classList.remove("link-active");
        }
    }
});

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll(".menu__link");
console.log(links);
for (const link of links) {
    link.addEventListener("click", function clickHandler(a) {
        a.preventDefault();
        const href = document.querySelector(link.getAttribute("href"));
        console.log(href);
        href.scrollIntoView({ behavior: "smooth" });
    });
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

//Event Listener for button click - uses the topFunction to scroll to top
topBtn.addEventListener('click', topFunction());

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active