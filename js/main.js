document.getElementById("button").onclick = makeReq;

function makeReq(){
  var artistName = document.getElementById("artistsList").value;
  var request = new XMLHttpRequest();
  request.open('GET', '/api?artist='+ artistName, true);
  request.onload = function() {
      console.log("works")
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("artistName").innerHTML = data.name
        document.getElementById("song").innerHTML = data.song
        document.getElementById("lyric").innerHTML = data.lyric
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
}
