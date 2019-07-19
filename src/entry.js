require('./style/compose.scss');
require('./style_cs/compose_cs.scss');

document.querySelectorAll('#pun-announcement tr:nth-child(1) td:nth-child(1), #pun-announcement tr:nth-child(1) td:nth-child(3)').forEach(function (cell) {
    cell.addEventListener('click', function (e) {
        console.log('click!');
        this.querySelectorAll('a').forEach(function (link) {
            if (link.style.display === 'block') {
                link.style.display = 'none';
            } else {
                link.style.display = 'block';
            }
        })
    })
});
