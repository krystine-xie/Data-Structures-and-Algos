// Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").

// Write a javaScript function solution that, given a string S representing the day of the week and an integer K (between 0 and 500), returns the day of the week that is K days later. For example, given S = "Wed" and K = 2, the function should return "Fri". Given S = "Sat" and K = 23, the function should return "Mon".

function solution(S, K) {
    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; 
    const day = daysOfWeek.indexOf(S); 

    const answer = (K + day) % 7; 

    return daysOfWeek[answer]; 
}

console.log(solution("Wed", 2));
console.log(solution("Sat", 23));
console.log(solution("Mon", 5));