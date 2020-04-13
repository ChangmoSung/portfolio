$(function() {
    const $header = $('header');
    const $projectDesktopImages = $('.projectDesktopImage').toArray();
    const $nav = $('nav');
    const $navLists = $('.navList');
    const $navLinks = $('.navLink');
    const $hoverEffectSpans = $('.hoverEffectSpan');
    const $videos = $('video').toArray();
    const $profileImage = $('.profileImage').toArray();

    $navLists.on('mouseenter', function() {
        $(this).children().last().toggleClass('showHoverEffect');
    })

    $navLists.on('mouseleave', function () {
        $(this).children().last().toggleClass('showHoverEffect');
    })

    if(window.innerWidth <= 430) {
        $videos.forEach(video => {
            video.pause();
            video.classList.add('hideVideo');
            $header.addClass('showHeaderImage');
        });
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

        $profileImage.forEach(image => showImage(image))

        $projectDesktopImages.forEach(image => showImage(image))

        function showImage(image) {
            const slideAt = (scrollTop + screenHeight) - image.offsetHeight / 2;
            const elementBottom = image.offsetTop + image.offsetHeight;
            const halfShown = slideAt > image.offsetTop;
            const notScrolledPast = scrollTop < elementBottom;

            if (halfShown && notScrolledPast) {
                image.children[0].classList.add('active');
            } else {
                image.children[0].classList.remove('active');
            }
        }
    });
});