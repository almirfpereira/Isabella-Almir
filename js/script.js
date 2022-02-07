function setupFooter() {
    var pageHeight = $('.tm-site-header-container').height() + $('footer').height() + 100;

    var main = $('.tm-main-content');

    if($(window).height() < pageHeight) {
        main.addClass('tm-footer-relative');
    }
    else {
        main.removeClass('tm-footer-relative');   
    }
}

$(function(){

    setupFooter();

    $(window).resize(function(){
        setupFooter();
    });

    $('.tm-current-year').text(new Date().getFullYear());          
});

function lista1() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529072", "_blank");
}

function lista2() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529094", "_blank");
}

function lista3() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529096", "_blank");
}

function lista4() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529098", "_blank");
}

function lista5() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529103", "_blank");
}

function lista6() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529105", "_blank");
}

function lista7() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529106", "_blank");
}

function lista8() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529108", "_blank");
}

function lista9() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/pages/26529109", "_blank");
}

function confirmar() {
    window.open(
      "https://sites.icasei.com.br/isabellaealmir/rsvp", "_blank");
}

function pix50() {
    window.open(
      "https://nubank.com.br/pagar/17ln8f/gucJfFclBI", "_blank");
}

function pix100() {
    window.open(
      "https://nubank.com.br/pagar/17ln8f/ssIBfaKgbK", "_blank");
}

function pix200() {
    window.open(
      "https://nubank.com.br/pagar/17ln8f/cxLVMxGCA6", "_blank");
}

var sound = new Howl({
  src: ['https://drive.google.com/file/d/1GHrnn4DAFjsgE1vFtDp6UN_M7uiHYqcu/view?usp=sharing'],
  volume: 1.0,
  onend: function () {
    alert('We finished with the setup!');
  }
});
sound.play()var sound = new Howl({
  src: ['https://drive.google.com/file/d/1GHrnn4DAFjsgE1vFtDp6UN_M7uiHYqcu/view?usp=sharing'],
  volume: 1.0,
  onend: function () {
    alert('We finished with the setup!');
  }
});
sound.play()
