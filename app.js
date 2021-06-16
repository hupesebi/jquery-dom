$(document).ready(function(){
    console.log('Let’s get ready to party with jQuery!')
});

$('article img').addClass('image-center');

$('article p').last().remove();

$('#title').css('font-size', Math.floor(Math.random()*101));

$('ol').append('<li>blub blub</li>');

$('aside').empty().append('<p> Sorry for the list</p>');

$('.form-control').on('keyup change', function(){
let colors = $('.form-control').toArray().map(item=>item.value);
console.log(colors)
$('body').css('background-color', 'rgb('+colors[0]+', '+colors[1]+', '+colors[2]+')');
});

$('img').on('click', function(){
    $(this).remove();
})