var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(NoofLike, noofViews, videoName, isLiked, publishedBy) {
        var _this = this;
        this.getVideoName = function () {
            return _this.videoName;
        };
        this.getLikeDetails = function () {
            return _this.NoofLike;
        };
        this.getViewsDetails = function () {
            return _this.noofViews;
        };
        this.getPublishDetails = function () {
            return _this.publishedBy;
        };
        this.noofViews = noofViews;
        this.isLiked = isLiked;
        this.NoofLike = NoofLike;
        this.videoName = videoName;
        this.publishedBy = publishedBy;
    }
    return YoutubeVideo;
}());
var Videos = /** @class */ (function (_super) {
    __extends(Videos, _super);
    function Videos(NoofLike, noofViews, videoName, isLiked, publishedBy) {
        var _this = _super.call(this, NoofLike, noofViews, videoName, isLiked, publishedBy) || this;
        _this.getRelatedVideos = function () {
            //Here we can try to compare the similarity of the name of the video within our database of videos and depending on the percentage of match we can retrieve the tag of the video and display the name of the videos to the user as related video.
            //return type;
        };
        return _this;
    }
    return Videos;
}(YoutubeVideo));
var getDetails = function () {
    var videoname = document.getElementById("name").value;
    var likes = document.getElementById("likes").value;
    var views = document.getElementById("views").value;
    var published = document.getElementById("published").value;
    var liked = document.getElementById("liked").value;
    var newVideo = new YoutubeVideo(likes, views, videoname, liked, published);
    console.log("Name of the video is " + newVideo.getVideoName());
    console.log("Total Likes on the video is " + newVideo.getLikeDetails());
    console.log("Total views on the video is " + newVideo.getViewsDetails());
    console.log("Video is published by " + newVideo.getPublishDetails());
};
