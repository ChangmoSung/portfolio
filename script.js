$(function() {
    const $projectDescriptions = $('.description').toArray();
    const $projectDesktopImages = $('.projectDesktopImage').toArray();
    const $projectMobileImages = $('.projectMobileImage').toArray();
    const $nav = $('nav');
    const $navLists = $('.navList');
    const $navLinks = $('.navLink');
    const $hoverEffectSpans = $('.hoverEffectSpan');
    const $videos = $('video').toArray();

    $navLists.on('mouseenter', function() {
        $(this).children().last().toggleClass('showHoverEffect');
    })

    $navLists.on('mouseleave', function () {
        $(this).children().last().toggleClass('showHoverEffect');
    })

    if(window.innerWidth <= 430) {
        $videos.forEach(video => video.pause());
    }

    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        const screenHeight = $(this).innerHeight();

        if(scrollTop > screenHeight) {
            $nav.addClass('changeColour');
            $navLinks.addClass('changeColour');
            $hoverEffectSpans.addClass('changeColour');
        } else {
            $nav.removeClass('changeColour');
            $navLinks.removeClass('changeColour');
            $hoverEffectSpans.removeClass('changeColour');
        }

        $projectDescriptions.forEach(description => {
            scrollEvent(description)
        })

        $projectDesktopImages.forEach(image => {
            scrollEvent(image);
        })

        $projectMobileImages.forEach(image => {
            scrollEvent(image);
        })

        function scrollEvent(item) {
            const slideAt = (scrollTop + screenHeight) - item.offsetHeight / 2;
            const elementBottom = item.offsetTop + item.offsetHeight;
            const halfShown = slideAt > item.offsetTop;
            const notScrolledPast = scrollTop < elementBottom;

            if (halfShown && notScrolledPast) {
                item.classList.add('active');
                item.children[0].classList.add('active');
                item.children[1].classList.add('active');
            } else {
                item.classList.remove('active');
                item.children[0].classList.remove('active');
                item.children[1].classList.remove('active');
            }
        }
    });
});