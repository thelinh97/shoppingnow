import {storage} from './use-auth';


 export const uploadImg = (img) =>{
var uploadTask = storage.ref(`img/${img.name}`).put(img);
uploadTask.on('state_changed', function(snapshot){}, function(error) {
    // Handle unsuccessful uploads
    alert(error)
  }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
    });
  });
 }