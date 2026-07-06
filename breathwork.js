const circle = document.querySelector('.breath-circle');
const span = document.querySelector('.breath-label');
const options = document.querySelectorAll('input[name="breath-style"]');
 const instruct = document.querySelector('.instruct');
let selected = 'calm';

console.log('Circle element:', circle);
console.log('Current Selected Input:', selected);


let cycleCount= 0;

  function countdown() {

    span.textContent = 'Begin in:';

    setTimeout(() => {
        span.textContent = '3';
    }, 1000);

    setTimeout(() => {
        span.textContent = '2';
    }, 2000);

    setTimeout(() => {
        span.textContent = '1';
    }, 3000);
}

function calmLoop() {
    cycleCount++;
    circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
    circle.classList.add('inhale');
    span.textContent = 'Inhale';

    setTimeout(() => {
        span.textContent = '1';
    }, 1000);

    setTimeout(() => {
        span.textContent = '2';
    }, 2000);

    setTimeout(() => {
        span.textContent = '3';
    }, 3000);

    setTimeout(() => {
        span.textContent = '4';
    }, 4000);

    setTimeout(() => {
        circle.classList.remove('inhale');
        circle.classList.add('holdin');
        span.textContent ='Hold';
    }, 5000);

    setTimeout(() => {
        span.textContent = '1';
    }, 6000);

        setTimeout(() => {
        span.textContent = '2';
    }, 7000);

    setTimeout(() => {
        span.textContent = '3';
    }, 8000);

    setTimeout(() => {
        span.textContent = '4';
    }, 90000);

      setTimeout(() => {
        circle.classList.remove('holdin');
        circle.classList.add('exhale');
        span.textContent = 'Exhale'; 
    }, 10000);  

    setTimeout(() => {
        span.textContent = '1';
    }, 11000);

    setTimeout(() => {
        span.textContent = '2';
    }, 12000);

    setTimeout(() => {
        span.textContent = '3';
    }, 13000);

    setTimeout(() => {
        span.textContent = '4';
    }, 14000);

    setTimeout(() => {
         circle.classList.remove('exhale');
        circle.classList.add('holdout');
        span.textContent = 'Hold';
    }, 15000);

    setTimeout(() => {
        span.textContent = '1';
    }, 16000);

         setTimeout(() => {
        span.textContent = '2';
    }, 17000);

     setTimeout(() => {
        span.textContent = '3';
    }, 18000);

     setTimeout(() => {
        span.textContent = '4';
    }, 19000);
        
    setTimeout(() => {
       if(cycleCount < 10) {
        setTimeout(() => {
            calmLoop();
        }, 1000);
       } else {
        circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
        span.textContent = '';
       }
    }, 20000);
}

function anxietyLoop() {
    cycleCount++;
    circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
    circle.classList.add('inhale');
    span.textContent = 'Inhale';

    setTimeout(() => {
        span.textContent = '1';
    }, 1000);

    setTimeout(() => {
        span.textContent = '2';
    }, 2000);

    setTimeout(() => {
        span.textContent = '3';
    }, 3000);

    setTimeout(() => {
        span.textContent = '4';
    }, 4000);

    setTimeout(() => {
        span.textContent = '5';
    }, 5000);

    setTimeout(() => {
        circle.classList.remove('inhale');
        circle.classList.add('exhale');
        span.textContent = 'Exhale'; 
    }, 6000); 

    setTimeout(() => {
        span.textContent = '1';
    }, 7000);

    setTimeout(() => {
        span.textContent = '2';
    }, 8000);

    setTimeout(() => {
        span.textContent = '3';
    }, 9000);

    setTimeout(() => {
        span.textContent = '4';
    }, 10000);

    setTimeout(() => {
        span.textContent = '5';
    }, 11000);

    setTimeout(() => {
        span.textContent = '6';
    }, 12000);
    
    setTimeout(() => {
       if(cycleCount < 20) {
        setTimeout(() => {
            anxietyLoop();
        }, 1000);
    } else {
        circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
        span.textContent = '';
        }
    }, 13000);

}

function angerLoop() {
     circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
    cycleCount++;
    circle.classList.add('inhale2');
    span.textContent = 'Quick Inhale';

    setTimeout(() => {
        span.textContent = '1';
    }, 1000);

    setTimeout(() => {
        span.textContent = '2';
    }, 2000);

    setTimeout(() => {
        span.textContent = 'Quick Inhale';
    }, 3000);

    setTimeout(() => {
        span.textContent = '1';
    }, 4000);

    setTimeout(() => {
        span.textContent = '2';
    }, 5000);

    setTimeout(() => {
        circle.classList.remove('inhale2');
        circle.classList.add('pause');
        span.textContent = "Pause";
    }, 6000);

setTimeout(() => {
        span.textContent = '1';
    }, 7000);

    setTimeout(() => {
        span.textContent = '2';
    }, 8000);

    setTimeout(() => {
        circle.classList.remove('pause');
        circle.classList.add('inhale')
        span.textContent = "Quick inhale 3"
    }, 9000);

setTimeout(() => {
        span.textContent = '1';
    }, 10000);

    setTimeout(() => {
        span.textContent = '2';
    }, 11000);

    setTimeout(() => {
        circle.classList.remove('inhale');
        circle.classList.add('exhale');
        span.textContent = 'Exhale Hard'; 
    }, 12000); 

setTimeout(() => {
        span.textContent = '1';
    }, 13000);

    setTimeout(() => {
        span.textContent = '2';
    }, 14000);

    setTimeout(() => {
        span.textContent = '3';
    }, 15000);

    setTimeout(() => {
        span.textContent = '4';
    }, 16000);

    setTimeout(() => {
        span.textContent = '5';
        }, 17000);

        setTimeout(() => {
            span.textContent = '6'
        }, 18000);

     setTimeout(() => {
       if(cycleCount < 15) {
        setTimeout(() => {
            angerLoop();
       }, 1000);
       } else {
        circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
        span.textContent = '';
       }
    }, 19000);
}
function initialFour() {
    circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
 circle.classList.add('exhale');
    span.textContent = 'Empty the lungs before you begin.';
     setTimeout(() => {
        span.textContent = '1';
    }, 2000);

    setTimeout(() => {
        span.textContent = '2';
    }, 3000);

    setTimeout(() => {
        span.textContent = '3';
    }, 4000);
}

function fourLoop() {
    circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
    cycleCount++;

    circle.classList.remove('exhale');
    circle.classList.add('inhale');
    span.textContent = "Inhale";

setTimeout(() => {
        span.textContent = '1';
    }, 1000);

setTimeout(() => {
        span.textContent = '2';
    }, 2000);

    setTimeout(() => {
        span.textContent = '3';
    }, 3000);

    setTimeout(() => {
        span.textContent = '4';
    }, 4000);

setTimeout(() => {
    circle.classList.remove('inhale');
    circle.classList.add('holdin');
    span.textContent = 'Hold';
}, 5000);

setTimeout(() => {
        span.textContent = '1';
    }, 6000);

setTimeout(() => {
        span.textContent = '2';
    }, 7000);

    setTimeout(() => {
        span.textContent = '3';
    }, 8000);

    setTimeout(() => {
        span.textContent = '4';
    }, 9000);

    setTimeout(() => {
        span.textContent = '5';
    }, 10000);

setTimeout(() => {
        span.textContent = '6';
    }, 11000);

    setTimeout(() => {
        span.textContent = '7';
    }, 12000);

setTimeout(() => {
    circle.classList.remove('holdin');
    circle.classList.add('exhale');
    span.textContent = 'Exhale';
}, 13000);

setTimeout(() => {
        span.textContent = '1';
    }, 14000);

setTimeout(() => {
        span.textContent = '2';
    }, 15000);

    setTimeout(() => {
        span.textContent = '3';
    }, 16000);

    setTimeout(() => {
        span.textContent = '4';
    }, 17000);

    setTimeout(() => {
        span.textContent = '5';
    }, 18000);

    setTimeout(() => {
        span.textContent = '6';
    }, 19000);

    setTimeout(() => {
        span.textContent = '7';
    }, 20000);

    setTimeout(() => {
        span.textContent = '8';
    }, 21000);

setTimeout(() => {
       if(cycleCount < 10) {
        setTimeout(() => {
            fourLoop();
        }, 1000);
       } else {
        circle.classList.remove('inhale', 'exhale', 'holdin', 'holdout', 'inhale1', 'inhale2', 'pause');
        span.textContent = '';
       }
    }, 22000);
}

  options.forEach((option) => {
    option.addEventListener('change', function (event) {

        selected = event.target.value;

if(selected === 'calm') {
    instruct.textContent = "Box Breathing: Inhale for 4 seconds. Hold for 4 seconds. Exhale for 4 seconds. Hold for 4 seconds. Repeat 10 times."
    span.textContent = 'Press when ready';
      }
   
    else if(selected === 'anxiety') {
        instruct.textContent = "Diaphragmatic breathing: Lie down comfortably and place one hand on your chest and the other on your belly. Inhale through your nose slowly, feeling the air push your belly out while your chest stays relatively still. Then exhale slowly through pursed lips letting the belly fall. Repeat 20 times.";

        span.textContent = 'Press when ready';
    }

else if(selected === 'anger') {
    instruct.textContent = "Somatic Anger Release: Sit or stand and take a deep 2 part inhale, pause then one more inhale into the chest and then shaping your lips like an 'O' exhale audibly. You can swing your arms overhead with tight fists on the inhale and drop them with a whoosh on the the exhale to physically release tension. Repeate 15 times.";

    span.textContent = 'Press when ready';
}

else if(selected === '478') {
    instruct.textContent = "Start by exhaling all the air out of your lungs through your mouth making a whooshing sound. Then inhale through your nose for 4 seconds, followed by a 7 second hold, and finally exhaling with a whooshing sound through the mouth for 8 seconds. Repeat this 10 times.";
    span.textContent = 'Press when ready';
} else {
    instruct.textContent = "Please select your breathwork style";
}
  });
});

circle.addEventListener('click', function(event) {

    console.log('BREATH CIRCLE CLICKED');
    console.log('Current Selected Style:', selected);

    if(selected === 'calm') {
        cycleCount = 0;
        countdown();
    
    setTimeout(() => {
        calmLoop();
        }, 4000);
    }

    if(selected === 'anxiety') {
        cycleCount = 0;
            countdown();
        setTimeout(() => {
            anxietyLoop();
        }, 4000);
    }

    if(selected === 'anger') {
        cycleCount = 0;
        countdown();
    setTimeout(() => {
        angerLoop();
    }, 4000);
    }

    if(selected === '478') {
cycleCount = 0;
    countdown();
    setTimeout(() => {
        initialFour(0);
    }, 4000);

setTimeout(() => {
    fourLoop();
}, 9000);
    }
});