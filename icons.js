function addIcons(func, cb) {
  var icons = 'bread,carrot,cheese,chef,cow,fish,heart,leaf,leek,pear,pepper,pig,pot,pumpkin,lettuce,shrimp,time,tomato,zuchinni'
  .split(',');

  var $tpl = document.getElementById('template'),
  $icons = document.querySelector('div.icons'),
  $icon;
  document.body.removeChild(template);

  function setIcons() {
    for (var i=0; i<icons.length; i++) {
      $icon = $tpl.cloneNode(true);
      func(icons, $icon, i);
      $icon.children[1].children[0].innerHTML += icons[i];
      $icons.appendChild($icon);
    }

    if (cb) cb();
  }
  setIcons();

  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 71) {
      $icons.classList.toggle('popchef');
    }
    else if (e.keyCode === 83 ) {
      icons.sort(() => .5 - Math.random());
      while ($icons.lastChild) $icons.lastChild.remove();
      setIcons();
    }
  });
}