

class YoutubeVideo {
    NoofLike:number;
    protected noofViews:number;
   protected videoName:string;
    isLiked:boolean;
   protected publishedBy:string

    constructor (NoofLike:any,noofViews:any,videoName:string,isLiked:any,publishedBy:string ){
        this.noofViews=noofViews;
        this.isLiked=isLiked;
        this.NoofLike=NoofLike;
        this.videoName=videoName;
        this.publishedBy=publishedBy;
    }
    getVideoName = () => {
        return this.videoName;
    }
    getLikeDetails = () => {
        return this.NoofLike;
    }
    getViewsDetails = () => {
        return this.noofViews;
    }
    getPublishDetails = () => {
        return this.publishedBy;
    }
} 
    class Videos extends YoutubeVideo {
        constructor(NoofLike:any,noofViews:any,videoName:string,isLiked:any,publishedBy:string ) {
            super(NoofLike,noofViews,videoName,isLiked,publishedBy);
        }
        getRelatedVideos = () => {
            //Here we can try to compare the similarity of the name of the video within our database of videos and depending on the percentage of match we can retrieve the tag of the video and display the name of the videos to the user as related video.
            //return type;
        }
}



let getDetails = () =>{
    let videoname =(<HTMLInputElement>document.getElementById("name")).value;
    let likes = (<HTMLInputElement>document.getElementById("likes")).value;
    let views = (<HTMLInputElement>document.getElementById("views")).value;
    let published = (<HTMLInputElement>document.getElementById("published")).value;
    let liked = (<HTMLInputElement>document.getElementById("liked")).value;
        
    let newVideo = new YoutubeVideo(likes,views,videoname,liked,published);


    console.log(`Name of the video is ${newVideo.getVideoName()}`);
    console.log(`Total Likes on the video is ${newVideo.getLikeDetails()}`);
    console.log(`Total views on the video is ${newVideo.getViewsDetails()}`);
    console.log(`Video is published by ${newVideo.getPublishDetails()}`);
}

    

   