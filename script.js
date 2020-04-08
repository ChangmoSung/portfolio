$(function() {
    const $projectDescriptions = $('.description').toArray()
    const $projectDesktopImages = $('.projectDesktopImage').toArray();
    const $projectMobileImages = $('.projectMobileImage').toArray();
    const $nav = $('nav');
    const $navLinks = $('nav a').toArray();

    function slideProject() {
        const scrollTop = $(this).scrollTop();
        if(scrollTop > window.innerHeight - 60) {
            $nav.addClass('changeColour');

            $navLinks.forEach(link => {
                link.classList.add('changeColour');
            })
        } else {
            $nav.removeClass('changeColour');

            $navLinks.forEach(link => {
                link.classList.remove('changeColour');
            })
        }

        $projectDescriptions.forEach(description => {
            const slideAt = (scrollTop + window.innerHeight) - description.offsetHeight / 2;
            const elementBottom = description.offsetTop + description.offsetHeight;
            const halfShown = slideAt > description.offsetTop;
            const notScrolledPast = scrollTop < elementBottom;

            if (halfShown && notScrolledPast) {
                description.classList.add('active');
            } else {
                description.classList.remove('active');
            }
        })

        $projectDesktopImages.forEach(image => {
            spinFlower(image);
        })

        $projectMobileImages.forEach(image => {
            spinFlower(image);
        })

        function spinFlower(image) {
            const slideAt = (scrollTop + window.innerHeight) - image.offsetHeight / 2;
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
    }

    $(window).on('scroll', slideProject);
});