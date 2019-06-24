const Event = require('events');
const ev = new Event();
// ev.on('search')
['search'].forEach(evName => {
    const fn = require(`./lib/${evName}`);
    ev.on(evName,async function(...args) {
        const res = fn(...args);
        console.log(res)
    })
})
function main() {
    const argv = process.argv.slice(2);
    let keyWord = argv[0];
    ev.emit('search',keyWord);
    console.log(keyWord)
}
main();