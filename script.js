$(function() {
    const projectDescriptions = $('.description').toArray()
    const projectImages = $('.projectImage').toArray();

    function slideProject() {
        projectDescriptions.forEach(description => {
            const slideAt = (window.scrollY + window.innerHeight) - description.offsetHeight / 2;
            const elementBottom = description.offsetTop + description.offsetHeight;
            const halfShown = slideAt > description.offsetTop;
            const notScrolledPast = window.scrollY < elementBottom;

            if (halfShown && notScrolledPast) {
                description.classList.add('active');
            } else {
                description.classList.remove('active');
            }
        })

        projectImages.forEach(image => {
            const slideAt = (window.scrollY + window.innerHeight) - image.offsetHeight / 2;
            const elementBottom = image.offsetTop + image.offsetHeight;
            const halfShown = slideAt > image.offsetTop;
            const notScrolledPast = window.scrollY < elementBottom;

            if (halfShown && notScrolledPast) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        })
    }

    $(window).on('scroll', slideProject);
});