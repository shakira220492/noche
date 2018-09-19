//super global variables
var current_video_id = "";
var current_video_name = "";
var current_video_description = "";
var current_video_image = "";
var current_video_content = "";
var current_video_updateDate = "";
var current_video_amount_views = "";
var current_video_amount_comments = "";
var current_video_likes = "";
var current_video_dislikes = "";

var current_specificlistId = "";
var current_videoPosition = "";

//previous and next video
var next_video_image = "";
var previous_video_image = "";

//screen
var total_screen_mode = "incomplete";

//lyrics
var firstLineValue = 150;
var secondLineValue = 100;
var thirdLineValue = 50;
var fourthLineValue = 0;
var fifthLineValue = -50;
    
    
    
var d_estrofas = 0;
var e_palabras = 0;
    
//var lyricsWord = 
//        [
//            [[],[],[],[],[],[],[],[],[],[],[],[]],
//            [[],[],[],[],[],[],[],[],[],[],[],[]],
//            [[],[],[],[],[],[],[],[],[],[],[],[]],
//            [[],[],[],[],[],[],[],[],[],[],[],[]],
//            [[],[],[],[],[],[],[],[],[],[],[],[]],
//            [[],[],[],[],[],[],[],[],[],[],[],[]],
//            [[],[],[],[],[],[],[],[],[],[],[],[]],
//            [[],[],[],[],[],[],[],[],[],[],[],[]]
//        ];

// variable: filas
// variable: columnas 
// 12 datos imprescindibles

var estrofaAmount = 40; // es la cantidad de estrofas
var palabraAmount = 40; // este valor varia segun la estrofa... 

var lyricsWord = new Array(estrofaAmount);
for (var i=0; i<lyricsWord.length; i++)
{
    lyricsWord[i] = new Array(palabraAmount);
    
    for (var j=0; j<lyricsWord[i].length; j++)
    {
        lyricsWord[i][j] = new Array(12);
    }
}





        
var people = [
    ["john", 16, "Male", ["blue", "black1234567"]],
    ["edison", 11, "Male"],
    ["laura", 162, "Female"],
    ["tatiana", 126, "Female"],
    ["michael", 161, "Male"],
    ["manuel", 16, "Male"],
    ["julian", 6, "Male"]
];

function showVideo(
            videoId, 
            videoName, 
            videoDescription, 
            videoImage, 
            videoContent, 
            videoUpdateDate, 
            videoAmountViews, 
            videoAmountComments, 
            videoLikes, 
            videoDislikes 
        )
{
    current_video_id = videoId;
    current_video_name = videoName;
    current_video_description = videoDescription;
    current_video_image = videoImage;
    current_video_content = videoContent;
    current_video_updateDate = videoUpdateDate;
    current_video_amount_views = videoAmountViews;
    current_video_amount_comments = videoAmountComments;
    current_video_likes = videoLikes;
    current_video_dislikes = videoDislikes;
    
    var my_video = document.getElementById("my_video_environment");
    my_video.innerHTML =
        "<div id='my_video_environment'>" +
        "<video id='my_video' width='100%' autoplay='true'>" +
        "<source src='files/videos/" + videoContent + "') }}' type='video/mp4'> " +
        "</video>" +
        "</div>";
    
//    get_video_lyric();
    
//    ALL INFORMATION ABOUT THE VIDEO: 
//    update the options about the respectly video
//    SongBundle: Comment section, user's information, 
//    ArtistBundle: Available only with login session 
//    lyrics section
    
}

//FUNCTION THAT CALL DIFFERENT METHODS WHEN USER PLAY A NEW VIDEO
//-songBundle (and its subBundles: @CommentVideo)
//-artistBundle (and its subBundles: )
//-presentationBundle (and its subBundles: )

//METHODS THAT ARE AVAILABLE ONLY WHEN USER LOGIN
//-profileBundle (and its subBundles:  )
//    @ListBundle: Available only with login session (default option)... event cathed when user click on the icon
//    @EditProfile: Available only with login session... event cathed when user click on the icon
//    @DataminingBundle: Available only with login session... event cathed when user click on the icon
//    @HistoryBundle: Available only with login session... event cathed when user click on the icon
//    @UploadBundle: Available only with login session... event cathed when user click on the icon
//    @LyricsBundle:Available only with login session... event cathed when user click on the icon

//Can play VideoBundle
//PODER REPRODUCIR EL OPTIONVIDEOBUNDLE DIRECTAMENTE



function updateVideoInformation(videoName, userName)
{
    var songIconButton = document.getElementById("songIconButton");
    var artistIconButton = document.getElementById("artistIconButton");

    songIconButton.innerHTML = videoName;
    artistIconButton.innerHTML = userName;
}

function highlightPortrait(videoId)
{
    document.getElementById(videoId).style.transitionProperty = "all";
    document.getElementById(videoId).style.transitionDuration = "0.4s";
    document.getElementById(videoId).style.opacity = 1;
}

function hidePortrait(videoId)
{
    document.getElementById(videoId).style.transitionProperty = "all";
    document.getElementById(videoId).style.transitionDuration = "0.4s";
    document.getElementById(videoId).style.opacity = 0.4;
}