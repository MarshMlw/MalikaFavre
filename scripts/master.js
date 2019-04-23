$(document).ready(function(){

    var ulInsertAfter = $('.footer-first-nav nav ul:first-child');
    var filetFooter = $('<img>').attr({
        'src': './images/stroke-footer.svg',
        'alt': 'filet footer'
        });
    var filetFooterWrapper = $('<div>').addClass('filet-footer');

    filetFooterWrapper.append(filetFooter);
    ulInsertAfter.after(filetFooterWrapper);
})