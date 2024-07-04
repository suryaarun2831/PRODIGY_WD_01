const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

//header container
ScrollReveal().reveal(".Home h1",scrollRevealOption);
ScrollReveal().reveal(".Home h4",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".Home .btn",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".About_us h1",scrollRevealOption);
ScrollReveal().reveal(".About_us p  ",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".About_us .btn",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".Discover p",scrollRevealOption);
ScrollReveal().reveal(".Discover .places",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".Journals .destination",scrollRevealOption);