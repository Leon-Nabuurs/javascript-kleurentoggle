document.getElementById('myhamburger').addEventListener('mouseover', function () {
        togglemenu();
    }
)

document.getElementById('mymenu').addEventListener('click', function (e) {
        const keuze = e.target.id;
        console.log(keuze);
        document.getElementById("mybody").className = keuze;
        let kleurnaam = e.target.innerHTML;
        console.log(kleurnaam);
        const mybody = document.getElementById("tekstkleur");
        mybody.innerHTML = kleurnaam;
        togglemenu();
    }
)

function togglemenu() {
    console.log('togglemenu');
    const mijnmenu = document.getElementById('mymenu');
    mijnmenu.classList.toggle('visible-menu');
}