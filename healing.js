//Healing Roulette Button and dropdown menus

const stressSelect = document.getElementById('stress');
const emoSelect = document.getElementById('emo');
const button = document.querySelector('.submit');
const result = document.getElementById('result');
result.textContent = '';



const responses = {
    "burn-anger": ["Sit down for 5 minutes and do nothing. No screens, no fixing.", "Write down: 'I don’t have to solve this right now.' Read it out loud.", "Take a 10-minute walk and name 3 things you see, 2 you hear, 1 you feel.", "Do 10 slow breaths: 4 seconds in, 6 seconds out.", "Text someone: 'I’m burned out and angry. Can I vent for 2 minutes?'"],
     /* burnout + rage*/
     "burn-rage": ["Scream into a pillow for 10 seconds, then stop.","Do 20 fast squats or push-ups to move the rage out of your body.","Write the angriest version of what you want to say, then delete it.", "Splash cold water on your face or hold ice for 30 seconds.", "Say: 'This rage is from being stretched too thin. I’m allowed to rest.'"],
// burnout + sadness 
    "burn-sad": ["Put on one sad song and let yourself cry for the whole song.", "Write: 'What would I do if I weren’t trying to be perfect?' Do one tiny thing from that list.", "Wrap yourself in a blanket and lie down for 10 minutes with no demands.", "Text someone: 'I’m feeling really low. Can you just sit with me for a bit?'", "Say: 'I’m not broken. I’m tired. Rest is allowed.'"],
// burnout + disappointment
    "burn-disap": ["Write down one thing you did that was enough today, even if it’s small.", "Say: 'I don’t have to be ahead. I just have to be here.'", "Do one 5-minute task that makes your life slightly easier (e.g., fill a glass of water).", "Look at a photo of a place or person that makes you feel safe for 2 minutes.", "Write: 'If I only had 10% energy, what would I do? Do that instead.'"],
// burnout + panic 
    "burn-panic": ["Put your feet on the floor and press down for 30 seconds, feeling the ground.", "Breathe: 4 in, 4 hold, 6 out. Repeat 5 times.", "Say: 'I’m overwhelmed, but I’m safe right now. I only need the next minute.'", "Splash cold water on your face or hold ice for 30 seconds.", "Write down the next single tiny step and do only that."],
// burnout + numbness
     "burn-numb": ["Put on a song and move your body in any way for 2 minutes.", "Hold something warm (tea, blanket) and focus on the temperature for 1 minute.", "Say: 'Numbness is protection. I’m allowed to feel nothing for now.'", "Do 5 slow stretches and name how each muscle feels.","Write one sentence: 'Right now, I feel ___. It’s okay.'"],
// conflict + anger 
    "con-anger": ["Write what you want to say, then rewrite it as: 'I feel ___ when ___ because ___.'","Take 10 slow breaths before responding to the person.", "Step away for 5 minutes and walk around, even in your room.", "Say: 'I don’t have to fix this conversation right now.'", "Do 10 push-ups or squats to move the anger through your body."],
// conflict + rage 
    "con-rage": ["Scream into a pillow, then stop and breathe for 1 minute.", "Splash cold water on your face or hold ice for 30 seconds.", "Write the most angry version, then throw that paper away.", "Do 20 fast movements (jumping, shaking arms, running in place).", "Say: 'My rage is from being hurt. I’m allowed to protect myself.'"],
// conflict + sadness 
    "con-sad": ["Cry for 5 minutes with no goal to stop.", "Text someone: 'I had a hard fight. Can I just talk?'", "Wrap yourself in a blanket and lie down for 10 minutes.", "Write: 'I’m allowed to hurt and still be okay.' Read it out loud.", "Put on one soft song and let yourself feel it."],
// conflict + disappointment
    "con-disap": ["Write: 'I wanted this to go differently. That makes sense.'", "Do one small thing that feels kind to yourself (tea, stretch, song).", "Say: 'I don’t have to fix the relationship right now.'", "Look at a photo that makes you feel safe for 2 minutes.", "Write one thing you learned from this conflict."],
// conflict + panic 
    "con-panic": ["Put feet on the floor, press down, feel the ground for 30 seconds.", "Breathe: 4 in, 4 hold, 6 out. Repeat 5 times.", "Say: 'I’m flooded, but I’m safe. I only need the next minute.'", "Step away from the person for 5 minutes and breathe.", "Write the next single tiny step and do only that."],
// conflict + numbness 
     "conflict-numb": [    "Move your body for 2 minutes (shake, stretch, dance).",    "Hold something warm and focus on the temperature for 1 minute.", "Say: 'Numbness is protection. I’m allowed to feel nothing for now.'", "Write one sentence: 'Right now, I feel ___. It’s okay.'", "Do 5 slow stretches and name how each muscle feels."],
  // time pressure + anger 
    "time-anger": [    "Say: 'I don’t have to do it all. I just need the next step.'",    "Do 10 slow breaths: 4 in, 6 out.",    "Write down the top 1 thing and do only that for 5 minutes.",    "Take a 5-minute walk and name 3 things you see.",    "Write: 'I’m allowed to be behind and still be okay.'"],
  // time pressure + rage  
    "time-rage": [    "Scream into a pillow for 10 seconds, then stop.",    "Do 20 fast squats or push-ups.",    "Splash cold water on your face or hold ice for 30 seconds.",    "Write the angriest version, then delete it.",    "Say: 'This rage is from being stretched too thin. I’m allowed to rest.'"],
  // time pressure + sadness 
     "time-sad": [    "Cry for 5 minutes with no goal to stop.",    "Put on one sad song and let yourself feel it.",    "Write: 'I’m not failing. I’m human. Rest is allowed.'",    "Wrap yourself in a blanket and lie down for 10 minutes.",    "Text someone: 'I’m overwhelmed and sad. Can I vent?'"  ],
  // time pressure + disappointment 
    "time-disap": [    "Write one thing you did that was enough today.",    "Say: 'I don’t have to be ahead. I just have to be here.'",    "Do one 5-minute task that makes life slightly easier.",    "Look at a safe photo for 2 minutes.",    "Write: 'If I only had 10% energy, what would I do? Do that.'"  ],
  // time pressure + panic  
    "time-panic": [    "Feet on floor, press down, feel ground for 30 seconds.",    "Breathe: 4 in, 4 hold, 6 out. Repeat 5 times.",    "Say: 'I’m overwhelmed, but I’m safe. I only need the next minute.'",    "Splash cold water on face or hold ice for 30 seconds.",    "Write the next single tiny step and do only that."  ],
  // time pressure + numbness  
    "time-numb": [    "Move your body for 2 minutes.",    "Hold something warm and focus on temperature for 1 minute.",    "Say: 'Numbness is protection. I’m allowed to feel nothing for now.'",    "Write one sentence: 'Right now, I feel ___. It’s okay.'",    "Do 5 slow stretches and name how each muscle feels."  ],
  // financial stress + anger  
    "fin-anger": [    "Write: 'I’m angry about money, and that makes sense.'",    "Do 10 slow breaths: 4 in, 6 out.",    "Write down one small financial action you can do today (e.g., check balance).",    "Take a 5-minute walk and name 3 things you see.",    "Say: 'I don’t have to fix my money life today. I just need one step.'"  ],
  // financial stress + rage  
    "fin-rage": [    "Scream into a pillow for 10 seconds, then stop.",    "Do 20 fast squats or push-ups.",    "Splash cold water on face or hold ice for 30 seconds.",    "Write the angriest version, then delete it.",    "Say: 'This rage is from feeling trapped. I’m allowed to rest.'"  ],
  // financial stress + sadness  
    "fin-sad": [    "Cry for 5 minutes with no goal to stop.",    "Put on one sad song and let yourself feel it.",    "Write: 'I’m not broken. Money is hard right now, and I’m still okay.'",    "Wrap yourself in a blanket and lie down for 10 minutes.",    "Text someone: 'I’m stressed about money and sad. Can I vent?'"  ],
  // financial stress + disappointment  
    "fin-disap": [    "Write one thing you did that was enough today.",    "Say: 'I don’t have to be perfect. I just have to be here.'",    "Do one 5-minute money task that makes life slightly easier.",    "Look at a safe photo for 2 minutes.",    "Write: 'If I only had 10% energy, what would I do with my money? Do that.'"  ],
  // financial stress + panic  
    "fin-panic": [    "Feet on floor, press down, feel ground for 30 seconds.",    "Breathe: 4 in, 4 hold, 6 out. Repeat 5 times.",    "Say: 'I’m overwhelmed, but I’m safe. I only need the next minute.'",    "Splash cold water on face or hold ice for 30 seconds.",    "Write the next single tiny financial step and do only that."  ],
  // financial stress + numbness  
    "fin-numb": ["Move your body for 2 minutes.", "Hold something warm and focus on temperature for 1 minute.",    "Say: 'Numbness is protection. I’m allowed to feel nothing for now.'",    "Write one sentence: 'Right now, I feel ___. It’s okay.'",    "Do 5 slow stretches and name how each muscle feels."  ]
}


button.addEventListener('click', function() {
const stress = stressSelect.value;
const emotion = emoSelect.value;
const key = `${stress}-${emotion}`;
const options = responses[key];
const randomIndex = Math.floor(Math.random() * options.length);
result.textContent = options[randomIndex];
});



