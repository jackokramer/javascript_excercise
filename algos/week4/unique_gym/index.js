// Gymbro is at a Unique gym with unique bars for Bench pressing. Bars are made up of 40 hyphens ('-') each weighing 0.5kg, represented like this: ----------------------------------------

// The plates are represented in the format '|Xkg|', where 'X' is the weight of the plate. For Example: ['|4kg|', '|22kg|', '|10kg|', '|24kg|', '|171kg|']

// Plates weighing less than 10 kg have length of 5 hyphens, plates weighing between 10 kg and 99 kg have length of 6 hyphens and Plates weighing between 100 kg and 999 kg have length of 7 hyphens.

// Gymbro has a desired weight w he wants to benchpress, for that he has to put plates on the bar, but You don't actually put plates on the bar, rather, you replace hyphens with plates,

// For example, if you put a 4 kg plate on the bar, it would look like this: --|4kg|--------------------------------- length of the bar is still 40

// 5 hyphens were replaced by 4kg plate. To calculate the new weight of the bar after adding a plate, you need to subtract the weight of the mini bars that the plate replaces. For instance, if you replaced 5 hyphens (20 kg - 5 * 0.5 kg = 17.5 kg) with a 4 kg plate, the bar's new weight would be 17.5 kg + 4 kg = 21.5 kg.

function configureBar(targetSum,weightList) {
  return ":("
}