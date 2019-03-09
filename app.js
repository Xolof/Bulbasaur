window.onload = function() {

    var three = document.getElementById("three");
    three.onclick = function() {
            var audio = document.getElementById("audio");
            audio.play();
            console.log('Bulbasaur säger "Hej!"');
            var info = document.getElementById("info");
            info.innerHTML += '<p>Bulbasaur säger "Hej!"</p>';
    }
    clear.onclick = function() {
        info.innerHTML = "<h2>Info</h2><p>Styr Bulbasaur med piltangenterna.</p><p>Klicka på Bulbasaur om du vill säga hej.</p>";
    }
}

    document.addEventListener("keydown", function(event) {

        var bulbasaur = document.getElementById("bulbasaur");
        var key = event.key;
        var top = three.offsetTop;
        var left = three.offsetLeft;
        var step = 30;
        var content = document.getElementById("content");
        console.log("clienheight: " + content.clientHeight);
        console.log("clientwidth: " + content.clientWidth);

        if (key == "ArrowUp" && top > 20) {
            event.preventDefault();
            three.style.top = (top - step) + "px";
        }
        if (key == "ArrowDown" && top < content.clientHeight - 180) {
            event.preventDefault();
            three.style.top = (top + step) + "px";
        }
        if ((key == "ArrowLeft") && (left > 20)) {
            event.preventDefault();
            three.style.left = (left - step) + "px";
            bulbasaur.src = "bulbasaur_reverse.png";
        }
        if (key == "ArrowRight" && left < content.clientWidth -190) {
            event.preventDefault();
            three.style.left = (left + step) + "px";
            bulbasaur.src = "bulbasaur.png";
        }


        //console.log(event);
        //console.log("event.key: " + key);
        console.log("top: " + top);
        console.log("left: " + left);
    });




