const sentence = "hello there from lighthouse labs";
let timeout = 0;
for (const char of sentence) {
  timeout += 50;
  setTimeout(() => {
    process.stdout.write(char + '\n')
  }, timeout) 
}