function checkForSpam(message) {
    const blackList1 = "spam";
const blackList2 = "sale";
const str = message.toLowerCase();

if (str.includes(blackList1) || str.includes(blackList2)) {
   
    return true;
} else { 
    return false
}
}
  
    console.log(checkForSpam("Latest technology news")); 
    console.log(checkForSpam("JavaScript weekly newsletter")); 
    console.log(checkForSpam("Get best sale offers now!")); 
    console.log(checkForSpam("Amazing SalE, only tonight!")); 
    console.log(checkForSpam("Trust me, this is not a spam message")); 
    console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
    console.log(checkForSpam("[SPAM] How to earn fast money?")); 