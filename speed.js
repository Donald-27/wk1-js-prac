// Speed Detector
function speedDetector(speed) {
    const speedLimit = 70;
    const vehicleSpeed = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {let points = (speed - speedLimit) / vehicleSpeed;
        return points > 12 ? "License suspended" : "Points: " + points;
        
    }
}
let speed = 80; 
console.log(speedDetector(speed));
