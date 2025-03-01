console.clear();

var flipContainer = $('.flipster'),
    flipItemContainer = flipContainer.find('.flip-items'),
    flipItem = flipContainer.find('li');

flipContainer.flipster({
  itemContainer: flipItemContainer,
  itemSelector: flipItem,
  loop: true,
  autoplay: 1000,
  style: 'carousel',
  spacing: -0.5,
  scrollwheel: false,
  //nav: 'after',
  buttons: false
});

