const mobileMenu  =  document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = '<img></p><ul class = "menu"><li><a>Portfolio</a></li><li><a>About</a></li><li><a>Contact</a></li></ul>';
document.body.appendChild(mobileMenu);
mobileMenu.style.paddingTop = '33px';
mobileMenu.style.boxSizing = 'border-box';
mobileMenu.children[0].src = 'Icons/cencel.png';
mobileMenu.children[0].style.float = 'right';
mobileMenu.children[0].style.marginRight = '38px';
mobileMenu.children[1].style.display = 'flex';
mobileMenu.children[1].style.flexDirection = 'column';
mobileMenu.children[1].style.alignItems = 'center';
mobileMenu.children[1].style.padding = '0';
for (const taps of document.querySelectorAll('ul.menu > li')) {
  taps.className = 'taps';
  taps.style.listStyle = 'none';
  taps.firstChild.style.fontSize = '32px';
  taps.firstChild.style.fontWeight = '700';
  taps.firstChild.style.color = '#fff5e1';
  taps.style.padding = '15px';
  taps.style.marginTop = '9px';
  taps.style.borderBottom = '1px solid white';
  taps.style.width = '80%';
}
mobileMenu.style.backgroundColor = '#3c3a39';
mobileMenu.style.height = '755px';
