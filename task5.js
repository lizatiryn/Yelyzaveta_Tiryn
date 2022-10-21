const meeting = function (friendsList) {
  //make everything uppercase and divide a list into an array with elements of the last name and first name of the participants
  let friendsArray = friendsList.toUpperCase().split(";");
  friendsArray.forEach(
    (friend, index) => (friendsArray[index] = friend.split(":"))
  );
  friendsArray.sort(function (a, b) {
    //sort by last name
    if (a[1] < b[1]) {
      return -1;
    }
    if (b[1] < a[1]) {
      return 1;
    }

    //sort by first name
    if (a[0] < b[0]) {
      return -1;
    }
    if (b[0] < a[0]) {
      return 1;
    }

    return 0;
  });

  let res = "";
  friendsArray.forEach(
    (friend) => (res = res.concat("", `(${friend[1]}, ${friend[0]})`))
  );
  return res;
};

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
