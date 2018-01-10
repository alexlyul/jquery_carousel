$(window).on('load', (() => {
    $('.slider').toggle();
    const dots = $('.dot');
    let current = 0;
    $(dots[current]).css({background: 'white'});

    function changeCaptionBack(slider) {
        if (slider.classList.contains('current')) {
            $(slider).find('.slide-caption').slideDown(200).animate({'border-top-right-radius': '0%',}, 200);

        } else {
            $(slider).find('.slide-caption').slideUp(200).animate({'border-top-right-radius': '40%',}, 200);
        }
    }

    $('.slide').each(function () {
        $(this).css({
            backgroundImage: `url(${this.dataset.imageurl})`,
        });
        changeCaptionBack(this);
    });


    $(dots).each(function () {
        $(this).click(function () {
            const id = parseInt(this.dataset.id);
            if (id !== current) {
                $(dots).each(function () {
                    $(this).css({
                        background: 'transparent',
                    });
                });
                $(this).css({
                    background: '#fff',
                });

                const showMe = $(`.slide[data-sliderid=${id}]`)[0];
                const hideMe = $(`.slide[data-sliderid=${current}]`)[0];

                $(showMe).css({zIndex: 4});
                $(hideMe)
                    .animate({top: '30%'}, 300)
                    .animate({top: '100%', zIndex: 2}, 300, null, () => {
                        hideMe.classList.remove('current');
                        showMe.classList.add('current');
                        $(hideMe).css({top: '0%',});
                        $(showMe).css({top: '0%', zIndex: 5});
                        changeCaptionBack(hideMe);
                        changeCaptionBack(showMe);
                    });
                current = id;
            }
        });
    });
}));