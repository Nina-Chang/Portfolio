// TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    scrollOverflow: true,
    anchors: ['section1', 'section2'],
    onLeave: (origin, destination, direction) => {
        // if (index == 2 && nextIndex == 3) {
        //     // $("#swotbox").removeClass('fadein');
        //     $("#swotbox").eq(index - 1).addClass('fadein');
        // }
        const tl = new TimelineMax({ delay: 0.5 });
        if (destination.index === 1) {
            const boxbelow = document.querySelectorAll("#swotbox");
            // tl.fromTo(boxbelow, 0.7, { transform: "translateY(0%)" }, { transform: "translateY(25%)" });
        }

    }

});