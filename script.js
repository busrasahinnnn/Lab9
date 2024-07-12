$(document).ready(function() {
    const images = [
        { src: 'https://i.natgeofe.com/n/b695a522-7013-4631-b5f4-6b32ca6031cd/NationalGeographic_1455242.jpg?w=1436&h=956', category: 'nature' },
        { src: 'https://i.natgeofe.com/n/2d24d1b4-5d23-4d5c-b11e-96ed5c1ac66b/NationalGeographic_1589748.jpg?w=2560&h=1704', category: 'nature' },
        { src: 'https://i.natgeofe.com/n/8fe3e805-9695-4cee-ae91-e9ab73e8a09c/NationalGeographic_2511869.jpg?w=1436&h=1436', category: 'city' },
        { src: 'https://i.natgeofe.com/n/83e08ad9-b57e-4c3c-8c4f-d344302fa358/NationalGeographic_450389.jpg?w=1436&h=974', category: 'city' },
        { src: 'https://i.natgeofe.com/n/a6e74d39-4796-478c-8475-16cafeb3868d/NationalGeographic_703294.jpg?w=1436&h=958', category: 'animals' },
        { src: 'https://i.natgeofe.com/n/42c7c2a0-4757-4241-8e63-45b3ac247779/NationalGeographic_2497287.jpg?w=1436&h=956', category: 'animals' }
    ];

    // Function to display images based on the filter
    function displayImages(filter) {
        $('#gallery').fadeOut(300, function() {
            $(this).empty();
            const filteredImages = images.filter(img => img.category === filter);
            filteredImages.forEach(img => {
                $(this).append(`<img src="${img.src}" data-category="${img.category}">`);
            });
            $(this).fadeIn(300);
        });
    }

    // Home button event handler
    $('#home').on('click', function() {
        $('#gallery').hide();
        $('#main-image').show();
    });

    // Category button event handlers
    $('#nature').on('click', function() {
        $('#main-image').hide();
        $('#gallery').show();
        displayImages('nature');
    });

    $('#city').on('click', function() {
        $('#main-image').hide();
        $('#gallery').show();
        displayImages('city');
    });

    $('#animals').on('click', function() {
        $('#main-image').hide();
        $('#gallery').show();
        displayImages('animals');
    });

    // Gallery image click handler
    $(document).on('click', '#gallery img', function() {
        const src = $(this).attr('src');
        $('#lightbox img').attr('src', src);
        $('#lightbox').fadeIn();
    });

    // Lightbox close handler
    $('#lightbox .close').on('click', function() {
        $('#lightbox').fadeOut();
    });
});
