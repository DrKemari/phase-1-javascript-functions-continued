// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  saturdayFun(); // returns "This Saturday, I want to roller-skate!"
  saturdayFun("bathe my dog"); // returns "This Saturday, I want to bathe my dog!"
  
  let mondayWork = function(act = "go to the office") {
    return `This Monday, I will ${act}.`;
  };
  
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."

  function wrapAdjective(adj = "*") {
    return function (msg = "a hard worker") {
      return `You are ${adj}${msg}${adj}!`;
    };
  }
  
  const encouraging = wrapAdjective("*");
  console.log(encouraging("a hard worker"));           // "You are *a hard worker*!"
  
  const motivating = wrapAdjective("||");
  console.log(motivating("a dedicated programmer"));   // "You are ||a dedicated programmer||!"
  

  
