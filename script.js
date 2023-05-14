

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();   // second hand rotation
    const minutes = now.getMinutes() + seconds/60;
    const hours = (now.getHours() %12) + minutes/60;
    console.log(seconds, minutes, hours)

    const secAng = seconds * 6;
    const minAng = minutes * 6;
    const hourAng = hours * 6;


    const secondHand = document.getElementById('seconds');
    const minsHand = document.getElementById('minutes');
    const hourHand = document.getElementById('hours');

    secondHand.setAttribute('transform', `rotate(${secAng}, 244, 251)`);
    minsHand.setAttribute('transform', `rotate(${minAng}, 244, 251)`);
    hourHand.setAttribute('transform', `rotate(${hourAng}, 244, 251)`);


    
}

setInterval(setDate, 1000);
