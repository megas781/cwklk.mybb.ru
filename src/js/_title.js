let panelNavs = document.querySelectorAll('#pun-announcement tr:nth-child(1) td:nth-child(1), #pun-announcement tr:nth-child(1) td:nth-child(3)');
let panelNavLinks = document.querySelectorAll('#pun-announcement tr:nth-child(1) td:nth-child(1) a, #pun-announcement tr:nth-child(1) td:nth-child(3) a');

function hideAllNavItems(e = null) {

    if (e && e.target.closest('#pun-announcement tr:nth-child(1) td:nth-child(1), #pun-announcement tr:nth-child(1) td:nth-child(3)')) {
        // console.log('не выполняй!');
    } else {
        panelNavLinks.forEach(function (link) {
            link.style.display = 'none';
        })
    }

}
// hideAllNavItems();
document.addEventListener('click', hideAllNavItems);

panelNavs.forEach(function (cell) {
    // hideAllNavItems();

    cell.addEventListener('click', function (e) {

        e.preventDefault();
        console.log('only nav');

        this.querySelectorAll('a').forEach(function (link) {
            if (link.style.display === 'block') {
                console.log('set none');
                link.style.display = 'none';
            } else {
                console.log('set block');
                link.style.display = 'block';
            }
        })
    })
});


