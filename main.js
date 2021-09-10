class Wallpaper{
    constructor(message, colorCode, imgUrl, vertical, level){
        this.message = message;
        this.colorCode = colorCode;
        this.imgUrl = imgUrl;
        this.vertical = vertical;
        this.level = level;
    }
}

function motivationalSpeechWallpaper(wallpaper){
    //垂直と水平方向のテーブル作成
    let verticalTable = {"top":"align-items-start",
                         "center":"align-items-center",
                         "bottom":"align-items-end"};
    let levelTable = {"left":"justify-content-start",
                      "center":"justify-content-center",
                      "right":"justify-content-end"};

    //targetの上に乗せる土台divを作成
    let tutaiDiv = document.createElement("div");
    tutaiDiv.classList.add("d-flex", "justify-content-center");

    //背景画像のdivを作成
    let imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage="url(" + wallpaper.imgUrl + ")";
    imgDiv.style.backgroundSize = "cover";
    imgDiv.style.backgroundRepeat = "no-repeat";
    imgDiv.style.backgroundPosition =" center";
    imgDiv.classList.add("bg-imgSize", "p-4", "m-3", "d-flex", verticalTable[wallpaper.vertical], levelTable[wallpaper.level]);
    tutaiDiv.append(imgDiv);

    //h5タグを作成
    let h5 = document.createElement("h5");
    h5.innerHTML = wallpaper.message;
    h5.style.color = "#" + wallpaper.colorCode;
    h5.classList.add("col-6");
    imgDiv.append(h5);

    return tutaiDiv;
}


let domObj = document.getElementById("target");
let wallpaper1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center");
let wallpaper2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left");
let wallpaper3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right");

let wallpapers = [wallpaper1, wallpaper2, wallpaper3];
wallpapers.map(wallpaper => domObj.append(motivationalSpeechWallpaper(wallpaper)));