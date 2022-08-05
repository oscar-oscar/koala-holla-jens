console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready


function sendKoalaToServer(){
  console.log('in sendKoalasToServer');
  //sending info 
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: {
      name: $('#nameIn').val(),
      age:  $('#ageIn').val(),
      gender: $('#genderIn').val(),
      ready: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    }
  }).then(function (response){
    getSongs();

  }).catch(function (error){
    console.log(error);
    alert('something went wrong');
  });
}

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
   }).then({
    function(response){
      console.log(response);
      $('#viewKoalas').empty();
      for(let koala of response) {
        $('#viewKoalas').append(`
        <tr>
          <td>${koala.name}</td>
          <td>${koala.gender}</td>
          <td>${koala.age}</td>
          <td>${koala.ready}</td>
          <td>${koala.notes}</td>
        </tr>
        `)
      }
    }
   }).catch(function(error){
    console.log('error');
    alert('Something went wrong!');
   });
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}