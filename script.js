let mobile_menu = document.createElement('div');
mobile_menu.className='mobile-menu';
mobile_menu.innerHTML='<img></p><ul class="menu"><li><a>Portfolio</a></li><li><a>About</a></li><li><a>Contact</a></li></ul>';
document.body.appendChild(mobile_menu);
mobile_menu.style.paddingTop='33px';
mobile_menu.style.boxSizing='border-box';
mobile_menu.children[0].src="Icons/cencel.png";
mobile_menu.children[0].style.float='right';
mobile_menu.children[0].style.marginRight='38px';
mobile_menu.children[1].style.display='flex';
mobile_menu.children[1].style.flexDirection='column';
mobile_menu.children[1].style.alignItems='center';
mobile_menu.children[1].style.padding='0';
for(let taps of document.querySelectorAll('ul.menu > li')){
    taps.className='taps';
    taps.style.listStyle='none';
    taps.firstChild.style.fontSize='32px';
    taps.firstChild.style.fontWeight='700';
    taps.firstChild.style.color='#fff5e1';
    taps.style.padding='15px';
    taps.style.marginTop='9px';
    taps.style.borderBottom='1px solid white';
    taps.style.width='80%';
}
mobile_menu.style.backgroundColor='#3c3a39';
mobile_menu.style.height='755px';
