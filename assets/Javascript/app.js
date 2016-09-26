 // Initialize Firebase
 console.log('hello')
 var config = {
    apiKey: "AIzaSyD52CMamxPVDa5kZM3Cos8Ue7fc5RdHwd0",
    authDomain: "train-time-e5348.firebaseapp.com",
    databaseURL: "https://train-time-e5348.firebaseio.com",
    storageBucket: "train-time-e5348.appspot.com",
    messagingSenderId: "262147100689"
  };
  firebase.initializeApp(config);

 var database = firebase.database();

database.ref().on("value", function(snapshot) {
  

  var data = snapshot.val();
  $('.crap').empty();
  $.each(data, function(key, value){
    console.log(value);
    var converted = moment(new Date(value.start)).format("X");
    var monthsDiff = moment(converted).diff(moment(), "months");
    monthsDiff = parseInt(monthsDiff)
    console.log(monthsDiff)
    var newRow = $('<tr>');

    newRow.addClass("trains")
    var nameTd = $('<td>');
    var destinationTd = $('<td>');
    var frequencyTd = $('<td>');
    var nextArrivalTd = $('<td>');
    var minsAwayTd = $('<td>');
    

    nameTd.text(value.name)
    destinationTd.text(value.destination)
    nextArrivalTd.text(value.nextArrival)
    minsAwayTd.text(value.minsAway)
 

    newRow.append(nameTd)
    newRow.append(destinationTd)
    newRow.append(nextArrivalTd)
    newRow.append(minsAwayTd)


    $('.table').append(newRow);



  });


 });

$("#addTrain").on('click', function(){

    var name = $("#nameInput").val().trim();
    var destination = $("#roleInput").val().trim();
    var frequency = $("#startDateInput").val().trim();
    var nextArrival = 8
    var minsAway= $("#nextInput").val().trim();
  

    database.ref().push({
      name:name,
      destination:destination,
      frequency:frequency,
      nextArrival:nextArrival,
      minsAway:minsAway,
      firstTime:firstTime
      
    })



return false;
})