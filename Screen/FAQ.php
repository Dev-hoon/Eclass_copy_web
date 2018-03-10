<?php
mysql_connect('localhost', 'root', '111111');
mysql_select_db('opentutorials');
$list_result = mysql_query('SELECT * FROM topic');

?>

<!doctype html>

<!--<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
-->
<html lang="ko">
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta content="한국외국어 대학교 " name>
    <meta content="noindex, nofollow" name>
    <!-- 설치된 IE중 최신버전 렌더링 설정 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="Copyright(C) IMAXSOFT" name>
    <link rel="shortcut icon" href="/ilos/favicon.ico?v=1.1" />
    <link rel="apple-touch-icon-precomposed" href="/ilos/images/m/e-Class-icon.png" />
    <title>한국외국어 대학교 e-Class System </title>

    <!-- 임의로 내가 추가!!!  -->
    <link rel="stylesheet" type="text/css" href="..\Style\menu.css">
    <link rel="stylesheet" type="text/css" href="..\Style\login.css">

    <link rel="stylesheet" href="../Style/FAQ.css">

    <link type="text/css" rel="stylesheet" href="../Style/ass.css">
    <link type="text/css" rel="stylesheet" href="../Style/green.css">
    <link type="text/css" rel="stylesheet" href="../Style/default.css">
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/ctrl.js"></script>
    <script type="text/javascript" src="../js/util.js"></script>
    <script type="text/javascript" src="../js/session_check.js"></script>
    <script type="text/javascript" src="../js/util_check.js"></script>
    <script type="text/javascript" src="../js/fck_util.js"></script>
    <script type="text/javascript" src="../js/hrd_check.js"></script>
    <script type="text/javascript" src="../js/hrd_ctrl.js"></script>
    <script type="text/javascript" src="../js/srcZoom.js"></script>

    <style>
        #top2m1,#top2m2,#top2m3 {display:none;}

        .gnb-top-class {
            width: 176px; height: 31px;
            font-family: "맑은 고딕","Malgun Gothic",verdana;
            font-size: 14px;
            font-weight: bold; text-align: center;
            padding-bottom: 6px;
            cursor: pointer;
            letter-spacing: -1px;
            /*   text-shadow: 0px 0px 2px #000; */
        }

        .gnb-top-class > div {
            width: 176px; height: 25px;
            padding-top: 6px;
        }
        .gnb-top-class > div > a { color: #fff; text-decoration: none; }
        .gnb-top-class-off  { background-color: #b6b6b6;}

        .gnb-sub-class{
            margin-right: 2px;
            background-color: #fff;
            border: 1px solid #e1e1e1;
            border-bottom:1px solid #A9A9A9;
            font-family: "맑은 고딕","Malgun Gothic",verdana;
            font-size: 11px;
            font-weight: bold;
            letter-spacing: -1;
            height: 21px;
            cursor: pointer;
            padding-top: 1px;
        }
        .gnb-sub-class > a{
            padding: 3px 15px 5px 15px;
            text-align: center;
            overflow: hidden;
            width: 100%;
            text-decoration: none;
        }
        .gnb-sub-class-last{ margin-right: 0 !important;}
    </style>
    <script>
        //top navi

        function top2menuView(a){ //2차메뉴보기
            if(this.id){
                eidStr = this.id;
                var _$aa = eidStr.lastIndexOf("m",eidStr.length)+1;
                eidNum=eidStr.substring(_$aa,eidStr.length);
                a = parseInt(eidNum);
            }
            top2menuHideAll();
            top1Menu = document.getElementById("top1m"+a);
            top2Menu = document.getElementById("top2m"+a);
            ann=a;
            if (a=0) { //메인은2차메뉴활성화안함
            } else {
                if (top1Menu) {
                    top1Menu.firstChild.className = "site-background-color";
                    if (top2Menu) { top2Menu.style.display = 'inline'; }
                }
            }
        }

        function top2menuHide(a){ //2차메뉴감추기
            if(this.id && a != 1){
                eidStr = this.id;
                var _$aa = eidStr.lastIndexOf("m",eidStr.length)+1;
                eidNum=eidStr.substring( _$aa,eidStr.length);
                a = parseInt(eidNum);
            }
            top2menuHideAll();
            top1Menu = document.getElementById("top1m"+a);
            top2Menu = document.getElementById("top2m"+a);
            top1MenuCurr = document.getElementById("top1m0");
            top2MenuCurr = document.getElementById("top2m0");
            //if(a<10){ann='0'+a;} else {ann=''+a;}
            ann=a;
            if (top1Menu) {
                top1Menu.firstChild.className = "gnb-top-class-off";
                if (top2Menu) { top2Menu.style.display = 'none'; }
                if (top1MenuCurr) {
                }
                if (top2MenuCurr) { top2MenuCurr.style.display = 'inline'; }
            }
        }

        function top2menuHideAll(){ //2차메뉴모두감추기
            top1menuEl = document.getElementById("top1menu").getElementsByTagName("ul");
            for (i=1;i<=top1menuEl.length;i++){
                top1Menu = document.getElementById("top1m"+i);
                top2Menu = document.getElementById("top2m"+i);
                //if(i<10){inn='0'+i;} else {inn=''+i;}
                inn=i;
                if (top1Menu){
                    top1Menu.firstChild.className = "gnb-top-class-off";
                    if (top2Menu) { top2Menu.style.display = 'none'; }
                }
            }
        }

        function initTopMenu() {
            top1menuEl = document.getElementById("top1menu").getElementsByTagName("ul");
            for (i=1;i<=top1menuEl.length;i++){
                top1Menu = document.getElementById("top1m"+i);
                top2Menu = document.getElementById("top2m"+i);
                if (top1Menu) {
                    top1Menu.onmouseover = top1Menu.onfocus = top2menuView;
                    top1Menu.onmouseout  = top2menuHide;
                    if (top2Menu) {
                        top2Menu.onmouseover = top2Menu.onfocus = top2menuView;
                        top2Menu.onmouseout  = top2menuHide;
                    }
                }
            }
        }

    </script>

    <script
            src="http://code.jquery.com/jquery-1.12.4.min.js"
            integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
            crossorigin="anonymous"></script><!--
<script
        src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
        crossorigin="anonymous"></script>-->
    <link type="text/css" href="../Style/jquery-ui.min.css" rel="stylesheet" />
    <!-- <script type="text/javascript" src="../js/jquery-1.11.3.min.js" ></script>-->
    <!--<script type="text/javascript" src="../js/jquery-ui-1.11.4.min.js"  ></script>-->
    <script type="text/javascript" src="../js/pop_calendar_ko.js"  ></script>
    <script type="text/JavaScript" src="../js/jqueryBlockUI.js"></script>
    <script type="text/JavaScript" src="../js/spin.js"></script>

    <script>
        // 탭 라인 길이 설정
        function setTabLine() {
            var width = $(".tab-wrap").outerWidth();
            var tabCnt = 0;
            var tabWidth = 0;

            $(".tab").each(function() {
                tabCnt++;
                tabWidth += $(this).outerWidth();
            });

            $(".tab-line").css("width", width - tabWidth + tabCnt - 1);
            $(".tab-line").css("height", $(".tab").innerHeight() + 1);
        }

    </script>

    <div id="progress" style="display: none; width: 80px; height: 80px; -webkit-border-radius: 10px; border-radius:10px; background-color: #000;"></div>
    <link type="text/css" rel="stylesheet" href="../Style/schedule.css">
    <link type="text/css" rel="stylesheet" href="../Style/main.css">

</head>
<body>

<script type="text/javascript">

    jQuery(function($){
        $('#skipNavigation li a').click(function(){
            $($('a[href^=#]').attr('href')).attr('tabindex','0').focus();
        });
    });

</script>

<ul id="skipNavigation">
    <li><a href="#containerWrap">본문내용 바로가기</a></li>
    <li><a href="#gnbIndex">주메뉴 바로가기</a></li>
</ul>
<hr>
<div style="position: absolute;  z-index:1012; top:0; left:0; display: none;" id="popup_room"></div>
<div id="wrap">
    <div id="headerWrap">

        <script type="text/javascript">
            <!--
            $(function() {
                $(window).scroll( function () {
                    $(this).scrollTop() > 400 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut();
                });

                $(".scrollup").click(function () {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                });

                $("#LANG").change( function() {
                    $.ajax({
                        url: "/ilos/main/lang_change.acl",
                        type: "POST",
                        data: {
                            LANG :  $("#LANG").val(),
                            encoding : "utf-8"
                        },
                        async: false,
                        success: function(data){
                            document.location.href = location.href;
                        },
                        error : function(html) {
                            alert("error:"+html);
                        }
                    });
                });

                $("#user").click(function() {
                    //$("#pPop").show();
                    document.location.href = "/ilos/mp/myinfo_form.acl";
                }).css("cursor","pointer");
                $("#user_photo").click(function() {
                    //$("#pPop").show();
                    document.location.href = "/ilos/mp/myinfo_form.acl";
                }).css("cursor","pointer");
                /*
                $("#pPop").mouseleave(function() {
                    $(this).fadeOut(800,"linear",function(){});
                });
                */

                //close event setting
                var closeMEevnt = function (){
                    $(document).keydown(function(e){
                        if (e.keyCode != 27) return true;
                        if($("#outerMenual").css("display") === 'block') {
                            $("#outerMenual").hide("blind",300, closeMenual );
                        }
                        return false;
                    });
                }( );
                //closeMEevnt();
            });

            function closeMenual(){
                $(".menual-full-layer").remove();
            };

            function menual_pop_close(){
                $("#outerMenual").hide("blind",300, closeMenual );
            };

            function menualPop(i,w,l,t){
                if($("#outerMenual").css("display") == 'none'){
                    $.ajax({
                        url: "/ilos/menual/menual_main_form.acl",
                        type: "POST",
                        data: {
                            SCREEN_ID : i,
                            w : w,
                            link : l,
                            t : t,
                            encoding : "utf-8"
                        },
                        async: false,
                        success: function(data){
                            if(data.isError) {
                                alert(data.message);
                            }
                            else {
                                $("#outerMenual").html(data);
                            }
                        },
                        error : function(e,o,x) {
                            alert("error:" + e.status + ":"+ o+ ":" + x);
                        }
                    });
                    $("#outerMenual").show("blind",300);
                }
                else {
                    $("#outerMenual").hide("blind",300, closeMenual );
                }
            }


            //-->
        </script>
        <div id="header">

            <h1 class="h_ko"><a href="/ilos/main/main_form.acl"><img src="/ilos/images/osms/hufs/ko/logo.gif" alt="e-class system"></a></h1>
            <div class="languages">

                <!-- 관리자일 경우-->

                <form method="post" name="langform" id="langform"  action="/ilos/main/lang_change.acl" onsubmit="return false;">


                    <select name="LANG" id="LANG" title="언어 선택" style="background-color:#4C4C4C; height: 21px;">

                        <option value="ko" selected>한국어</option>
                        <option value="en" >English</option>


                    </select>
                </form>
            </div>


            <div class="utillmenu">
                <ul>
                    <li><a href="/ilos/main/member/login_form.acl"><img src="/ilos/images/ko/utill_login.gif" alt="로그인"></a></li>


                </ul>



            </div>
            <a class="scrollup">Back to the top</a>
        </div>
        <hr>

        <!-- Start Menual form -->
        <div style="width:500px; float: right;  position: absolute; z-index: 1000; margin-left: 451px; margin-top: 129px; ">
            <div id="outerMenual" style="position:absolute; z-index: 8; display: none; padding-top: 13px; clear: both;"></div>
        </div>
        <!-- End Menual form -->


        <div id="gnbIndex" style="height: 61px;">
            <h2>주 메뉴</h2>
            <ul id="top1menu" style="margin-left: 216px; width: 543px;">
                <li style="overflow: hidden;">
                    <div class="gnb-top-class" id="top1m1" onclick="pageGo('/ilos/st/main/course_ing_list_form.acl'); return false;"><div class="gnb-top-class-off"><a href="/ilos/st/main/course_ing_list_form.acl">교육현황</a></div></div>

                    <ul id="top2m1" style="left: 216px">
                        <li class="gnb-sub-class" onclick="pageGo('/ilos/st/main/course_ing_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/st/main/course_ing_list_form.acl">개설과목검색</a>
                        </li>
                        <li class="gnb-sub-class" onclick="pageGo('/ilos/ocw/courseware_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/ocw/courseware_list_form.acl">OCW</a>
                        </li>
                        <li class="gnb-sub-class gnb-sub-class-last" onclick="pageGo('/ilos/st/schedule/academic_calendar_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/st/schedule/academic_calendar_list_form.acl">학사일정</a>
                        </li>
                    </ul>
                </li>
                <li class="space">
                    <div class="gnb-top-class" id="top1m2" onclick="pageGo('/ilos/community/notice_list_form.acl'); return false;"><div class="gnb-top-class-off"><a href="/ilos/community/notice_list_form.acl">커뮤니티</a></div></div>
                    <ul id="top2m2">
                        <li class="gnb-sub-class" onclick="pageGo('/ilos/community/notice_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/community/notice_list_form.acl">공지사항</a>
                        </li>
                        <li class="gnb-sub-class" onclick="pageGo('/ilos/community/qna_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/community/qna_list_form.acl">질의응답</a>
                        </li>
                        <li class="gnb-sub-class" onclick="pageGo('/ilos/community/material_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/community/material_list_form.acl">자료실</a>
                        </li>

                        <li class="gnb-sub-class" onclick="pageGo('/ilos/community/share_group_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/community/share_group_list_form.acl">소모임</a>
                        </li>
                        <li class="gnb-sub-class gnb-sub-class-last" onclick="pageGo('/ilos/community/total_survey_list_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/community/total_survey_list_form.acl">설문</a>
                        </li>
                    </ul>
                </li>

                <li class="space">
                    <div class="gnb-top-class" id="top1m3" onclick="pageGo('/ilos/introduce/introduce.acl'); return false;"><div class="gnb-top-class-off"><a href="/ilos/introduce/introduce.acl">소개</a></div></div>
                    <ul id="top2m3">
                        <li class="gnb-sub-class" onclick="pageGo('/ilos/introduce/introduce.acl'); return false;">
                            <a class="site-link2" href="/ilos/introduce/introduce.acl" >소개</a>
                        </li>
                        <li class="gnb-sub-class" onclick="pageGo('/ilos/guide/guide_main_form.acl'); return false;">
                            <a class="site-link2" href="/ilos/guide/guide_main_form.acl">FAQ</a>
                        </li>
                        <li class="gnb-sub-class gnb-sub-class-last" onclick="pageGo('/ilos/introduce/sitemap.acl'); return false;">
                            <a class="site-link2" href="/ilos/introduce/sitemap.acl">사이트맵</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <script type="text/javascript">
                $(function() {
                    initTopMenu();
                    $("#top2m2").css("left", (973-$("#top2m2").width())/2+"px");
                    $("#top2m3").css("left", (973-$("#top2m3").width())-213+"px");
                    top2menuHide(1);
                });
            </script>
        </div>
        <hr>

    </div>

    

    <div id="containerWrap">

        <div id="container">


            <div class="contentsIndex">


                <div class="FAQ_wrap">
                    <div class="FAQ_head">FAQ</div>

                    <div class="filter_wrap">
                        <div class="filter_main">
                            <form action="" class="filter_content"  > 대상 :
                                <input type="checkbox" id="CB_common" value="common"> 공통
                                <input type="checkbox" id="CB_professor" value="professor"> 교수
                                <input type="checkbox" id="CB_student" value="student"> 학생
                                <span style="margin-left: 100px;">검색</span>
                                <input type="text" placeholder="내용을 입력해주세요.">
                                <input type="submit" value="검색">
                            </form>
                        </div>
                    </div>


                    <div class="FAQ_main_wrap">
                        <div class="FAQ_left_wrap">

                        <div class="FAQ_content_table">
                            
                        <?php include_once "../server/FAQ-ADO.php";

                            call_left();
                        ?>

                        </div>
                        </div>

                        <div class="FAQ_right_wrap">
                           <?php include_once "../server/FAQ-ADO.php";
                            call_right();
                            ?>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
</div>




<div id="footerWrap">

    <script>
        $(function() {
        });

        function popupOpen(url) {
            var openNewWindow = window.open('about:blank');
            openNewWindow.location.href=url;
            /*
            var popUrl = "http://home.chungwoon.ac.kr/www/getHomeContents.do?target=menu07_07&page=home&tab=0";
            var popOption = "width=900, height=500, resizable=no, scrollbars=yes, status=no;";    //팝업창 옵션(optoin)
            window.open(popUrl,"",popOption);
            */
        }
    </script>
    <div id="footer">
        <h2>홈페이지이용 관련 메뉴</h2>
        <div class="left-footer">
            <div><img src="/ilos/images/osms/hufs/ko/tit_system.png" alt=""></div>
            <div class="copyright">
                <p>COPYRIGHT 2012 Hankuk Univ of Foreign Studies</p>
                <p>서울캠퍼스 (02450) 서울시 동대문구 이문로 107 <BR> 글로벌캠퍼스 (17035) 경기도 용인시 처인구 모현읍 외대로 81 <BR> e-class문의 : 02-2173-2238 | 사이버강의문의 : 02-2173-2616 </p>

            </div>
        </div>
        <div class="right-footer">

            <div class="site-map-box" style="float: right;">
                <h1>소개</h1>
                <ul>
                    <li><a href="/ilos/introduce/introduce.acl">소개</a></li>
                    <li><a href="/ilos/guide/guide_main_form.acl">FAQ</a></li>
                </ul>
            </div>
            <div class="site-map-box" style="float: right;">
                <h1>커뮤니티</h1>
                <ul>
                    <li><a href="/ilos/community/notice_list_form.acl">공지사항</a></li>
                    <li><a href="/ilos/community/qna_list_form.acl">질의응답</a></li>
                    <li><a href="/ilos/community/material_list_form.acl">자료실</a></li>

                    <li><a href="/ilos/community/share_group_list_form.acl">소모임</a></li>
                    <li><a href="/ilos/community/total_survey_list_form.acl">설문</a></li>
                </ul>
            </div>
            <div class="site-map-box" style="float: right;">
                <h1>교육현황</h1>
                <ul>
                    <li><a href="/ilos/st/main/course_ing_list_form.acl">개설과목검색</a></li>
                    <li><a href="/ilos/ocw/courseware_list_form.acl">OCW</a></li>
                    <li><a href="/ilos/st/schedule/academic_calendar_list_form.acl">학사일정</a></li>
                </ul>
            </div>

        </div>

    </div>
</div>
</div>

<div id="popup_notice"></div>

<div style="position: absolute;  z-index:9; top:0; left:0;">

    <div class="popup_notice2" id="popup_notice2_28" style="float: left;"></div>

</div>
</body>
</html>