// var minCostClimbingStairs = function(cost) {
//     cost.push(0)
//      for(let i=cost.length-4;i>=0;i--){
//          cost[i]+=Math.min(cost[i+1],cost[i+2])
//      }
//        return Math.min(cost[0],cost[1])
 
//  };

function minCostClimbingStairs(cost) {
    let n = cost.length;
    let first = cost[0];
    let second = cost[1];
    if (n <= 2) return Math.min(first, second);
    for (let i = 2; i < n; i++) {
        console.log("Before Swapping",first,second,cost[i])
        let curr = cost[i] + Math.min(first, second);
        first = second;
        second = curr;
        console.log("After Swapping Stuffs",first,second)
    }
    // return Math.min(first, second);
}
minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])