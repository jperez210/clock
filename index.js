const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-second');

function getTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`

    const minutes = now.getMinutes();
    const minuteDegree = ((minutes / 60) *360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`

    const hours = now.getHours();
    const hoursDegree = ((hours / 60)  *360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval (getTime, 1000);