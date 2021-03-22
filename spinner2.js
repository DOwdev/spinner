let delay = 0;
const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '\n'];
for(let char of chars){
    setTimeout(() => {
        process.stdout.write(`\r${char}`);
      }, delay);
delay += 200;
}