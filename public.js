// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme === "dark") {
    // ...then use the .dark-theme class
    $("#themeSwitch").text("sunny");
    $("#themeSheet").attr("href", "public/CSS/darkMode.css");
}

$("#themeMode").click(function(){
    let theme = "light"; // Define theme variable here to save the chosen theme to localStorage
    if ( $("#themeSwitch").text() === "dark_mode" ) {
        $("#themeSwitch").text("sunny");
        $("#themeSheet").attr("href", "public/CSS/darkMode.css");
        $("#topLogo").attr("src", "public/Assets/images/dark_mode_design.svg" )
        $("#phone").attr("src", "public/Assets/images/phoneD.svg" )
        $("#email").attr("src", "public/Assets/images/emailD.svg" )
        theme = "dark"; // Set theme to "dark" if switching to dark mode
    }
    else {
        $("#themeSwitch").text("dark_mode");
        $("#themeSheet").attr("href", "public/CSS/lightMode.css");
        $("#topLogo").attr("src", "public/Assets/images/light_mode_design.svg" )
        $("#phone").attr("src", "public/Assets/images/phoneL.svg" )
        $("#email").attr("src", "public/Assets/images/emailL.svg" )
    }
    localStorage.setItem("theme", theme); // Save the chosen theme to localStorage
});




$("#navMenu").click(function(event){
    event.stopPropagation(); // Prevent click event from propagating to parent elements
    $(".navMenu").toggleClass("hidden");
});

// Close the menu when clicking outside of it
$(document).click(function(event) {
    if (!$(event.target).closest('.navMenu').length) {
        $(".navMenu").addClass("hidden");
    }
});
