$(document).ready(function(){

    //var full_path = window.location.pathname;
    var full_path_no_file_name = window.location.pathname.replace(/[^\\\/]*$/, '');
    //console.log(full_path);
    console.log(full_path_no_file_name);


    var exactdirectory = full_path_no_file_name+"assetshome/photos/";

    //Json array  for  images src
    SrcImgPaths = {
                   Home  :  exactdirectory+"iPhone5s_homelogo.png",
                   Contact :  exactdirectory+"fond_contact.jpg",
                   Works : exactdirectory+"gifhomev2_loop.gif",
                   About : exactdirectory+"fond_about.jpg"
                   }




    //next ---> width:0;
    //IMAHE HOME BY DEFAULT
    $("[data-animation='imageIn']").append( "<img src=\'"+SrcImgPaths.Home +"\' style=\'margin-top:5%;margin-left:30%;height:80%;width:30%;position:absolute;\'>");

    //$("[data-animation='imageIn']").append( "<img src=\'"+full_path_no_file_name+"assetshome/photos/img_fjords.jpg\' style=\'height:100%;width:100%;position:absolute;\'>");
    //$("[data-animation='imageIn']").append( "<img src='"+full_path_no_file_name+"assetshome/photos/la.jpg' style='height:100%;width:100%;position:absolute;'>");
    //$("[data-animation='imageIn']").append( "<img src='"+full_path_no_file_name+"assetshome/photos/chicago.jpg' style='height:100%;width:100%;position:absolute;-webkit-clip-path: polygon(100% 0%, 100% 100%, 100% 100%,100% 0%);'">");

    // CONTACT START
    $("#Contact").mouseover(function(){

        // si la photo vient d'être ajouter et se trouve donc en dernière position
        // derrière la photo par défaut ne rien faire
        if($("[src='"+SrcImgPaths.Contact+"']").is(':last-child')) {

        }
        //si la photo n'est pas en seconde position l'effacer la rajouter et l'afficher en slide
        else {
            //REMOVE THE IMAGE IF ITS EXISTED
            $("[src='"+SrcImgPaths.Contact+"']").remove();
            //insert THE IMAGE TO THE DOM AFTER the defaut image EACH MOUSEOVER


            //$("[data-animation='imageIn']").attr('src',"/assetshome/photos/la.jpg");

            //$("[data-animation='imageIn']").append("<img src='"+full_path_no_file_name+"assetshome//photos//la.jpg");

            $("[data-animation='imageIn']").append("<img src=\'"+SrcImgPaths.Contact +"\' style='height:110%;width:100%;position:absolute;" +
                "-webkit-clip-path: polygon(100% 0%, 100% 100%, 100% 100%,100% 0%);" +
                "clip-path: polygon(100% 0%, 100% 100%, 100% 100%,100% 0%)';>");
            console.log("these image is here but not visible");


            /*$("[data-animation='imageIn']").append("<img src='"+full_path_no_file_name+"assetshome/photos/la.jpg' style='height:100%;width:100%;position:absolute;" +
                "-webkit-clip-path: polygon(100% 0%, 100% 100%, 100% 100%,100% 0%) clip-path: polygon(100% 0%, 100% 100%, 100% 100%,100% 0%');>");*/



            //right to left:
            //clip-path:polygon(100% 0, 100% 100%, 100% 100%, 100% 0);
            var arr1 = [100,0, 100,100 ,100,100, 100,0];

            //clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
            var arr2 = [0,0, 0,100, 100,100, 100,0];


            console.log("Don't forget to put the correct path for src image !!!! ");
            arr2.onUpdate = function() {
                TweenMax.set("[src=\'"+SrcImgPaths.Contact +"\']", {webkitClipPath:'polygon('+arr1[0]+'%'+arr1[1]+'%,'+arr1[2]+'%'+arr1[3]+'%,'+
                arr1[4]+'%'+arr1[5]+'%,'+arr1[6]+'%'+arr1[7]+'%'});
            };
            console.log("these image is visible after the animation clip path");

            TweenLite.to(arr1,0.6, arr2);
        }

    });
    // CONTACT END

    // PORTRAIT START    fond_work2.gif

    $("#Works").mouseover(function(){

        // si la photo vient d'être ajouter et se trouve donc en dernière position
        // la position est visible
        // la derniere photo(4) est celle qu'on voit  1->2->3->4(top)

        if($("[src='"+SrcImgPaths.Works+"']").is(':last-child')) {

        }
        //si la photo n'est pas en seconde position l'effacer la rajouter et l'afficher en slide
        else {
            //REMOVE THE IMAGE IF ITS EXISTED
            $("[src='"+SrcImgPaths.Works+"']").remove();
            //insert THE IMAGE TO THE DOM AFTER the defaut image EACH MOUSEOVER
            $("[data-animation='imageIn']").append("<img src=\'"+SrcImgPaths.Works +"\' style='height:110%;width:100%;position:absolute;"  +
                "-webkit-clip-path: polygon(100% 0%, 100% 100%, 100% 100%,100% 0%);" +
                "clip-path: polygon(100% 0%, 100% 100%, 100% 100%,100% 0%');>");

            //right to left:
            //clip-path:polygon(100% 0, 100% 100%, 100% 100%, 100% 0);
            var arr1 = [100,0, 100,100 ,100,100, 100,0];

            //clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
            var arr2 = [0,0, 0,100, 100,100, 100,0];


            arr2.onUpdate = function() {
                TweenMax.set("[src=\'"+SrcImgPaths.Works+"\']", {webkitClipPath:'polygon('+arr1[0]+'%'+arr1[1]+'%,'+arr1[2]+'%'+arr1[3]+'%,'+
                arr1[4]+'%'+arr1[5]+'%,'+arr1[6]+'%'+arr1[7]+'%'});
            };


            TweenLite.to(arr1,0.6, arr2);
        }

    });

    // <!-- PORTRAIT END -->

    // <!-- ABOUT START -->
    $("#about").mouseover(function(){

        // si la photo vient d'être ajouter et se trouve donc en dernière position
        // derrière la photo par défaut ne rien faire
        if($("[src='"+SrcImgPaths.About+"']").is(':last-child')) {

        }
        //si la photo n'est pas en seconde position l'effacer la rajouter et l'afficher en slide
        else {
            //REMOVE THE IMAGE IF ITS EXISTED
            $("[src='"+SrcImgPaths.About+"']").remove();
            //insert THE IMAGE TO THE DOM AFTER the defaut image EACH MOUSEOVER
            $("[data-animation='imageIn']").append("<img src=\'"+SrcImgPaths.About +"\' style='height:110%;width:100%;position:absolute;" +
                "-webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);" +
                "clip-path: polygon(0 0, 0 0, 0 100%, 0 100%');>");

            //RIGHT TO LEFT:
            //clip-path:polygon(100% 0, 100% 100%, 100% 100%, 100% 0);
            var arr1 = [0,0, 0,0 ,0,100, 0,100];

            //clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
            var arr2 = [100,0, 0, 0, 0 ,100, 100,100];



            arr2.onUpdate = function() {
                TweenMax.set("[src=\'"+SrcImgPaths.About+"\']", {webkitClipPath:'polygon('+arr1[0]+'%'+arr1[1]+'%,'+arr1[2]+'%'+arr1[3]+'%,'+
                arr1[4]+'%'+arr1[5]+'%,'+arr1[6]+'%'+arr1[7]+'%'});
            };

            TweenLite.to(arr1,0.6, arr2);
        }

    });
    // <!-- ABOUT END -->

    // <!-- HOME START-->
    //$("[href='/Home']").mouseover(function(){
        $("#Home").mouseover(function(){

        // si la photo vient d'être ajouter et se trouve donc en dernière position
        // derrière la photo par défaut ne rien faire
        if($("[src='"+SrcImgPaths.Home+"']").is(':last-child')) {

        }
        //si la photo n'est pas en seconde position l'effacer la rajouter et l'afficher en slide
        else {
            //REMOVE THE IMAGE IF ITS EXISTED
            $("[src='"+SrcImgPaths.Home+"']").remove();
            //insert THE IMAGE TO THE DOM AFTER the defaut image EACH MOUSEOVER
            $("[data-animation='imageIn']").append(
                "<div id='white_background' style='height:110%;width:100%;position:absolute;background-color:white;"  +
                "-webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);" +
                "clip-path: polygon(0 0, 0 0, 0 100%, 0 100%');></div>"+

                "<img src=\'"+SrcImgPaths.Home +"\' style='margin-left:30%;margin-top:5%;height:80%;width:30%;position:absolute;"  +
                "-webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);" +
                "clip-path: polygon(0 0, 0 0, 0 100%, 0 100%');>");

            //RIGHT TO LEFT:
            //clip-path:polygon(100% 0, 100% 100%, 100% 100%, 100% 0);
            var arr1 = [0,0, 0,0 ,0,100, 0,100];

            //clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
            var arr2 = [100,0, 0, 0, 0 ,100, 100,100];



            arr2.onUpdate = function() {
                TweenMax.set("[src=\'"+SrcImgPaths.Home+"\'],#white_background", {webkitClipPath:'polygon('+arr1[0]+'%'+arr1[1]+'%,'+arr1[2]+'%'+arr1[3]+'%,'+
                arr1[4]+'%'+arr1[5]+'%,'+arr1[6]+'%'+arr1[7]+'%'});
            };

            TweenLite.to(arr1,0.6, arr2);
        }

    });
    // <!-- HOME END -->


});//THE MOST IMPORT THING

