let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let i in statistics) {
    if (i.startsWith('r') || statistics[i] % 2 !== 0) {
        console.log(i + ": " + statistics[i]);
    }
}