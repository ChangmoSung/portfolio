$(function() {
    const $projectDescriptions = $('.description').toArray()
    const $projectImages = $('.projectImage').toArray();
    const $overlayImages = $('.overlayImage').toArray();
    let previousScroll;

    function slideProject() {
        const scrollTop = $(this).scrollTop();

        // $overlayImages.forEach(image => {
        //     if (scrollTop > previousScroll) {
        //         image.classList.add('active');
        //     } else {
        //         image.classList.remove('active');
        //     }
        // })

        // previousScroll = scrollTop;

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

        $projectImages.forEach(image => {
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
        })
    }

    $(window).on('scroll', slideProject);
});