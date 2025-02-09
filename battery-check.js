const batteryLevel = require('battery-level');
const notifier = require('node-notifier');
const say = require('say');
// that say module lagta hae Common.js
async function checkBattery() {
    while (true) {
        const level = await batteryLevel(); 
        const charging = true; 
        console.log(`Battery Level: ${(level * 100).toFixed(0)}%`);

        if (charging && level >= 0.93) {// ese tume custom level set kar sakte hae  0.93 matlab 93% hota hae 

            notifier.notify({
                title: 'Battery Full',
                message: 'Charging is complete!', 
            });

           
            say.speak('Charging is complete');
            break;
        }

        await new Promise(resolve => setTimeout(resolve, 60000)); 
    }
}

checkBattery();
