


function flashcardGit(){ //https://github.com/cc22ji/FlashCard-Frontend
    var url = 'https://github.com/cc22ji/FlashCard-Frontend';
    window.open(url, '_blank');
}

function flashcardLive(){   //https://wondrous-shortbread-3bf122.netlify.app/
    var url = 'https://wondrous-shortbread-3bf122.netlify.app/';
    window.open(url, '_blank');
}

function YoutubeGit(){ //frontend-- https://github.com/cc22ji/YouTubeSubscriber-Frontend
    var url = 'https://github.com/cc22ji/YoutubeSubscriber-Backend';     
    window.open(url, '_blank');  // //backend -- https://github.com/cc22ji/YoutubeSubscriber-Backend

}

function youtubeLive(){     //backend -- https://youtubesubscriber-backend-rhdu.onrender.com/
    var url = 'https://youtubesubscriber-frontend.onrender.com/';
    window.open(url, '_blank');  // // frontend -- https://youtubesubscriber-frontend.onrender.com/
}


document.getElementById('downloadButton').addEventListener('click', function() {
            var pdfPath = '/assets/cv/cv.pdf';
            var link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'cv.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
