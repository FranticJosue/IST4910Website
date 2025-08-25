document.getElementById("helpdeskForm").addEventListener("submit", function(e){
    e.preventDefault(); // prevent page reload

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const issue = document.getElementById("issue").value;

    // For now, we’ll just log it (simulate saving ticket)
    console.log("Ticket Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Issue:", issue);

    // Show confirmation message
    document.getElementById("confirmation").style.display = "block";

    // Clear form
    document.getElementById("helpdeskForm").reset();
});