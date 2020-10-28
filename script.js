const nav = document.querySelector("nav");
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");


function handleEnter() {

    this.classList.add('trigger-enter');

    //we need to set timeout to allow animation
    //the && is to not add the active class if the trigger-enter isn't added.
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

    background.classList.add("open");

    const dropdown = this.querySelector(".dropdown");

    dropdownCoordinates = dropdown.getBoundingClientRect();
    navCoordinates = nav.getBoundingClientRect();

    coords = {
        height: dropdownCoordinates.height,
        width: dropdownCoordinates.width,
        top: dropdownCoordinates.top - navCoordinates.top,     //to make it relative to nav;
        left: dropdownCoordinates.left - navCoordinates.left,
    }


    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}


function handleLeave() {
    this.classList.remove('trigger-enter', "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(li => li.addEventListener("mouseenter", handleEnter));
triggers.forEach(li => li.addEventListener("mouseleave", handleLeave));