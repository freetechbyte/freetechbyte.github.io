

// Simple JavaScript for enhancing user experience
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website Loaded!");
});
    
        function togglePrivacyPolicy() {
            var policy = document.getElementById("privacyPolicy");
            if (policy.style.display === "none" || policy.style.display === "") {
                policy.style.display = "block"; // Show the policy
            } else {
 policy.style.display = "none"; // Hide the policy
            }
        }

let i = 1
function dark() {
    if (i%2 == 0){
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color  = "black";
    }
    else {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color  = "white";
    }
    i++;
}
