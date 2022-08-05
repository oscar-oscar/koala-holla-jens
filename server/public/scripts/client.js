console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {

    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function (response) {
    $('#viewKoalas').empty();
    for (let koala of response) {
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
  }).catch (function (error){
    console.log('error');
    alert('Something Is Wrong');
  })
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
} // end saveKoala

function sendKoalaToServer () {
  console.log('in sendKoalaToServer');

  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      ready: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    }
  }).then(function (response) {
    getKoalas();
  }).catch (function (error){
    console.log('error');
    alert('Something Is Wrong');
  })
}