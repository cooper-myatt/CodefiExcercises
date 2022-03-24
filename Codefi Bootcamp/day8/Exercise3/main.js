/*Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

- The candidate should have completed all the questions.
- The maximum time given to complete the interview is 120 minutes.
- The maximum time given for very easy questions is 5 minutes each.
- The maximum time given for easy questions is 10 minutes each.
- The maximum time given for medium questions is 15 minutes each.
- The maximum time given for hard questions is 20 minutes each.

If all the above conditions are satisfied, return "qualified", else return "disqualified".

You will be given an array of time taken by a candidate to solve a particular question and the total time the candidate takes to complete the interview.

Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

The maximum time to complete the interview includes a buffer time of 20 minutes.*/

function interview(arr, totalTime){
    const rubric = [5,5,10,10,15,15,20,20]; // Max times each question can take

    if (arr.length <  8) {return "Disqualified - Did not answer all questions."}; //Didn't answer all questions
    if (totalTime > 120) {return "Disqualified - Took to long to complete interview."}; //Took too long to complete
    for( var i = 0; i<arr.length; i++){
        if(arr[i] > rubric[i]){ return `Disqualified - Took to long on question ${i}.`}
    }
    return 'Qualified'
}
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64)) // Qualified
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120)); //Qualified
console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120)); //Disqualified - Exceeds time limit for question
console.log(interview([5, 5, 10, 10, 15, 15, 20], 120)) // Disqualified - Did not complete all questions
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130)) // Disqualified - exceeded total Time
