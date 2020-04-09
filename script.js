$(function() {
    const $projectDescriptions = $('.description').toArray()
    const $projectDesktopImages = $('.projectDesktopImage').toArray();
    const $projectMobileImages = $('.projectMobileImage').toArray();
    const $nav = $('nav');
    const $navLists = $('.navList');
    const $navLinks = $('.navLink');
    const $hoverEffectSpans = $('.hoverEffectSpan');

    $navLists.on('mouseenter', function() {
        $(this).children().last().toggleClass('showHoverEffect');
    })

    $navLists.on('mouseleave', function () {
        $(this).children().last().toggleClass('showHoverEffect');
    })

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
            const slideAt = (scrollTop + screenHeight) - description.offsetHeight / 2;
            const elementBottom = description.offsetTop + description.offsetHeight;
            const halfShown = slideAt > description.offsetTop;
            const notScrolledPast = scrollTop < elementBottom;

            if (halfShown && notScrolledPast) {
                description.classList.add('active');
            } else {
                description.classList.remove('active');
            }
        })

        // ----- to spin flowers at certain pixel point ----- //
        $projectDesktopImages.forEach(image => {
            spinFlower(image);
        })

        $projectMobileImages.forEach(image => {
            spinFlower(image);
        })

        function spinFlower(image) {
            const slideAt = (scrollTop + screenHeight) - image.offsetHeight / 2;
            const elementBottom = image.offsetTop + image.offsetHeight;
            const halfShown = slideAt > image.offsetTop;
            const notScrolledPast = scrollTop < elementBottom;

            if (halfShown && notScrolledPast) {
                image.children[0].classList.add('active');
                image.children[1].classList.add('active');
                image.classList.add('active');
            } else {
                image.classList.remove('active');
                image.children[0].classList.remove('active');
                image.children[1].classList.remove('active');
            }
        }
    });
});