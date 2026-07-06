const seekerAffirm = [
    "I give myself permission to heal at my own pace.",
 "Every small step forward is a victory worth celebrating.",
"I am learning to trust myself and my inner wisdom.",
"It’s okay to rest; rest is part of my healing.",
"I release the need to be perfect and embrace progress instead.",
"I am worthy of love, care, and compassion — especially from myself.",
"My past does not define me; I am creating a new chapter.",
"I honor my feelings without judgment.",
"I am stronger than I realize, and I grow stronger every day.",
"Healing is not linear, and that’s perfectly okay."
];

const sageAffirm = [
"I honor how far I’ve come, and I trust the path ahead.",
"I am learning to live in harmony with my past, without letting it define me.",
"My healing is not linear, and that’s perfectly okay.",
"I give myself permission to feel joy without guilt.",
"I am strong enough to face discomfort and gentle enough to nurture myself through it.",
"I release the need for perfection and embrace progress.",
"I am worthy of love, peace, and fulfillment right now — not just in the future.",
"I trust my inner wisdom to guide me toward what I need.",
"I can hold both my pain and my hope in the same heart.",
"I am becoming the version of myself I once dreamed of."
];

const guruAffirm = [
"I embody the wisdom my journey has gifted me, and I move through life with grounded grace.",
"My presence is a sanctuary — for myself and for those I encounter.",
"I trust my intuition fully, knowing it has been refined through experience and truth.",
"I no longer seek to fix; I choose to create, expand, and inspire.",
"My boundaries are not walls — they are invitations to deeper, healthier connections.",
"I honor my past without being defined by it; my story is one of transformation.",
"I radiate calm strength, even in the face of uncertainty.",
"I am fluent in the language of my body, mind, and spirit.",
"I lead with compassion, knowing that my healing uplifts the collective.",
"I am the living proof that wholeness is not a destination, but a way of being."
];


const button = document.querySelector(".deep");
const seeker = document.querySelector("#seeker");
const sage = document.querySelector("#sage");
const guru = document.querySelector("#guru");
const output = document.querySelector(".affirm");



button.addEventListener("click", function() {
const selected = document.querySelector("input[name='level']:checked");

if(!selected) {
    output.textContent = "Please choose seeker, sage, or guru.";
    return;
}
let selectedArray= [];
if(selected.value === "seeker") {
    selectedArray = seekerAffirm;
} else if(selected.value === "sage") {
    selectedArray = sageAffirm;
} else if(selected.value === "guru") {
    selectedArray = guruAffirm;
}
const randomIndex = Math.floor(Math.random() * selectedArray.length);
output.textContent = selectedArray[randomIndex];
}) 