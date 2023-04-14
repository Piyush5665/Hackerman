let commands = [];

for (let i = 1; i <= 8; i++) {
  commands[i - 1] = document.getElementById(`cmd_${i}`);
}

let PCNG = Math.floor(Math.random() * 125418);


async function f1() {
    setTimeout(() => {
        commands[0].innerHTML = "$-> Initializing Network";
      }, 1000);
      setTimeout(() => {
        commands[0].innerHTML = "$-> Initializing Network.";
      }, 1500);
      setTimeout(() => {
        commands[0].innerHTML = "$-> Initializing Network..";
      }, 2000);
      setTimeout(() => {
        commands[0].innerHTML = "$-> Initializing Network...";
      }, 2500);
}

async function f2() {
  setTimeout(() => {
    commands[1].innerHTML = "$-> Connecting to service";
  }, 4500);
  setTimeout(() => {
    commands[1].innerHTML = "$-> Connecting to service.";
  }, 5000);
  setTimeout(() => {
    commands[1].innerHTML = "$-> Connecting to service..";
  }, 5500);
  setTimeout(() => {
    commands[1].innerHTML = "$-> Connecting to service...";
  }, 6000);
}

async function f3() {
  setTimeout(() => {
    commands[2].innerHTML = "$-> Retreiving username";
  }, 8000);
  setTimeout(() => {
    commands[2].innerHTML = "$-> Retreiving username.";
  }, 8500);
  setTimeout(() => {
    commands[2].innerHTML = "$-> Retreiving username..";
  }, 9000);
  setTimeout(() => {
    commands[2].innerHTML = "$-> Retreiving username...";
  }, 9500);
}

async function f4() {
  setTimeout(() => {
    commands[3].innerHTML = `$-> Username found`;
  }, 11500);
  setTimeout(() => {
    commands[3].innerHTML = `$-> Username found.`;
  }, 12000);
  setTimeout(() => {
    commands[3].innerHTML = `$-> Username found..`;
  }, 12500);
  setTimeout(() => {
    commands[3].innerHTML = `$-> Username found...`;
  }, 13000);
}

async function f5() {
  setTimeout(() => {
    commands[4].innerHTML = "$-> Trying a combination of 4.5 Trillion passwords";
  }, 13500);
  setTimeout(() => {
    commands[4].innerHTML = "$-> Trying a combination of 4.5 Trillion passwords.";
  }, 14000);
  setTimeout(() => {
    commands[4].innerHTML = "$-> Trying a combination of 4.5 Trillion passwords..";
  }, 14500);
  setTimeout(() => {
    commands[4].innerHTML = "$-> Trying a combination of 4.5 Trillion passwords...";
  }, 15000);
}

async function f6() {
  setTimeout(() => {
    commands[5].innerHTML = "$-> Password found";
  }, 17000);
  setTimeout(() => {
    commands[5].innerHTML = "$-> Password found.";
  }, 17500);
  setTimeout(() => {
    commands[5].innerHTML = "$-> Password found..";
  }, 18000);
  setTimeout(() => {
    commands[5].innerHTML = "$-> Password found: " + PCNG;
  }, 18500);
}

async function f7() {
  setTimeout(() => {
    commands[6].innerHTML = "$-> Connecting to Facebook";
  }, 20500);
  setTimeout(() => {
    commands[6].innerHTML = "$-> Connecting to Facebook.";
  }, 21000);
  setTimeout(() => {
    commands[6].innerHTML = "$-> Connecting to Facebook..";
  }, 21500);
  setTimeout(() => {
    commands[6].innerHTML = "$-> Connecting to Facebook...";
  }, 22000);
}

async function f8() {
  setTimeout(() => {
    commands[7].innerHTML = "$-> Hacked";
  }, 24000);
 
}

async function run() {
  await f1();
  await f2();
  await f3();
  await f4();
  await f5();
  await f6();
  await f7();
  await f8();
}

run();
