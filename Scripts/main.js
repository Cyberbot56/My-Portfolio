const roleContainer = ["Penetration Tester", "Programmer", "Quant", "Physics Enthusaist"];
let roleSpan = document.getElementById("role");

let roleIndex = 0;
let charIndex = 0;

let isDelete = false;

function typeText(){
    let currentRole = roleContainer[roleIndex];

    if(!isDelete){
        roleSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex===currentRole.length){
            setTimeout(() => isDelete = true, 1000);
        }
    }

    else{
        currentRole = roleContainer[roleIndex];
        roleSpan.textContent = currentRole.substring(0, charIndex-1);
        charIndex--;

        if(charIndex === 0){
            setTimeout(() => isDelete = false, 1000);
            roleIndex = (roleIndex + 1) % roleContainer.length;
        }
    }
    setTimeout(typeText, 90);
}

typeText();
