/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = [];
// sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */




$(document).ready(function() {

  console.log('app.js loaded!');
  $.get('/api/albums').success(function (albums) {
    albums.forEach(function (album) {
      renderAlbum(album);
    });
  });

  $('#album-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/albums', formData, function(album) {
      console.log('album after POST', album);
      renderAlbum(album);  //render the server's response
    });
    $(this).trigger("reset");
  });

  //displays add song modal
  $('#albums').on('click', '.add-song', handleAddSongClick);
  //submits song
  $('#saveSong').on('click', handleNewSongSubmit);

});

//handles add song click
function handleAddSongClick(e) {
  console.log('add-song clicked!');
  var id= $(this).closest('.album').data('album-id');
  console.log('id',id);
  $('#songModal').data('album-id', id);
  $('#songModal').modal();
}

//on form submission
function handleNewSongSubmit(e) {
  e.preventDefault();
  //get data from modal fields
  var $modal = $('#songModal');
  var $songNameModal = $modal.find('#songName');
  var $trackNumberModal = $modal.find('#trackNumber');

  var dataToPost = {
    name: $songNameModal.val(),
    trackNumber: $trackNumberModal.val()
  };
  //get album ID
  var albumId = $modal.data('albumId');
  console.log(albumId + ': ' + dataToPost);
  //POST to SERVER
  var urlToPostServer = '/api/albums' + albumId + '/songs';
  //ajax post
  $.post(urlToPostServer, dataToPost, function(data) {
    // clear form
    $songNameModal.val('');
    $trackNumberModal.val('');

    // close modal
    $modal.modal('hide');

    // update the correct album to show the new song
    $.get('/api/albums' + albumId, function(data) {
      //erases current album data instance
      $('[data-album-id=' + albumId + ']').remove();
      //rerenders it with new album data
      renderAlbum(data);
    });
  }).error(function(err) {  //error handling
    console.log('ERROR. sorry, post attempt resulted in error', err);
  });
}

// $("form").on("submit", function handleClick(event) {
//   event.preventDefault();
//   console.log($(this).serialize());
// });



// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var albumHtml = $('#album-template').html();
  var albumsTemplate = Handlebars.compile(albumHtml);
  var html = albumsTemplate(album);
  $('#albums').prepend(html);
}
