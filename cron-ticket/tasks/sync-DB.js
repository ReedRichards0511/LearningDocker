

let times = 0;
const syncBD = () => {
    times++
    console.log('Tick cada 5 segundos', times);

    return times;
}

module.exports = {
    syncBD
};