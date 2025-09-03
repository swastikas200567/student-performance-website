function predictPerformance() {
    let attendance = parseFloat(document.getElementById("attendance").value);
    let study = parseFloat(document.getElementById("study").value);
    let assignment = parseFloat(document.getElementById("assignment").value);

    if (isNaN(attendance) || isNaN(study) || isNaN(assignment)) {
        document.getElementById("result").innerText = "⚠️ Please enter all values!";
        return;
    }

    // Simple formula for prediction (you can adjust)
    let score = (attendance * 0.3) + (study * 5) + (assignment * 0.4);

    let performance = "";
    if (score > 85) {
        performance = "Excellent 🎉";
    } else if (score > 70) {
        performance = "Good 🙂";
    } else if (score > 50) {
        performance = "Average 😐";
    } else {
        performance = "Needs Improvement 😔";
    }

    document.getElementById("result").innerText = "Predicted Performance: " + performance;
}
