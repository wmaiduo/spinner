let spinner = ['|', '/', '-', '\\'];
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i%3]}`);
  }, i * 200 + 100)
};
  