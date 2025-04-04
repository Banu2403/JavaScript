const persons = [
    { firstname: "Elvin", lastname: "Huseynov" },
    { firstname: "Ruslan", lastname: "Mammadov" },
    { firstname: "Jessica", lastname: "Isgenderli" }
  ];
  
  function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
  }
  
  const fullNames = persons.map(getFullName);
  
  console.log(fullNames); 
  