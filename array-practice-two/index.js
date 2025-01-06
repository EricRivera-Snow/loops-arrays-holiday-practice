let arr1 = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (i = arr1.length-1; i >= 0; i--){
    console.log(arr1[i])
}

let arr2 = [1, true, "hi", null, "false", 2, 5.8, "no", 100023];

for (i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    console.log(arr2[i]);
  }
  if (typeof arr2[i] !== "number") {
    console.log(arr2[i]);
  }
}

let arr3 = [
  {
    name: "Ivan Melancon",
    age: 37,
    hometown: "Milwaukee, WI",
    occupation: "programmer",
  },
  {
    name: "Sarah Johnson",
    age: 29,
    hometown: "Omaha, NE",
    occupation: "political science professor",
  },
  {
    name: "Patrick Cullen",
    age: 42,
    hometown: "London, England",
    occupation: "mechanical engineer",
  },
  {
    name: "Pierre Creduer",
    age: 55,
    hometown: "Rouen, France",
    occupation: "restaurant proprietor",
  },
];

for (i = 0; i < arr3.length; i++) {
  console.log(`${arr3[i].name} is a ${arr3[i].occupation}`);
}

for (i = 0; i < arr3.length; i++) {
  console.log(
    `Name: ${arr3[i].name}
Occupation: ${arr3[i].occupation}
Hometown: ${arr3[i].hometown}
Age: ${arr3[i].age}`
  );
}

let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for(i=0;i<arr4.length;i++){
    for(j=0;j<arr4[i].length;j++){
        console.log(arr4[i][0])
    }
}

for (i = 0; i < arr4.length; i++) {
  for (j = 0; j < arr4[i].length; j++) {
    console.log(arr4[i][j]);
  }
}

for (i = arr4.length - 1; i >= 0; i--) {
  for (j = arr4[i].length - 1; j >= 0; j--) {
    console.log(arr4[i][j]);
  }
}
