<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta 
     name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0' >
    
    <!-- stylesheet -->
    <link rel="stylesheet" href="generalStyle.css" type="text/css">
    <link rel="stylesheet" href="opening.css" type="text/css">
    <link rel="stylesheet" href="home.css" type="text/css">
    <link rel="stylesheet" href="about.css" type="text/css">
    <link rel="stylesheet" href="practice.css" type="text/css">
    <link rel="stylesheet" href="learning.css" type="text/css">
    <link rel="stylesheet" href="exam.css" type="text/css">
    <link rel="stylesheet" href="lessons.css" type="text/css">
    <link rel="stylesheet" href="passwordScreen.css" type="text/css">
    
    <!-- javascript -->
    <script type="text/javascript" src="index.js"></script>
    <script type="text/javascript" src="lessons.js"></script>
    <script type="text/javascript" src="util.js"></script>
    <script type="text/javascript" src="learningContent.js"></script>
    <script type="text/javascript" src="animateDims.js"></script>

    <title>לומדת תיאוריה</title>
</head>
<body>
    <div class="main">
        
        <!-- עמוד פתיחה -->
        <div class="page opening active">
            <div class="opaning-overlay">
                <div class="expand">
                        <img class="sub-title" src="../assets/images/opening/Balmas_txt.svg"/>
                </div>
                <div class="title">חכו בסבלנות...</div>
                <div class="expand container-scrolling_icon"></div>   
                <div class="sub-title instruction-text">לחצו על המסך להמשך</div>
            </div>
        </div>
        
        <!-- עמוד ראשי -->
        <div class="page home">
            <img class="about" src="../assets/images/opening/about_btn.svg" alt="about"/>
            <img class="books" src="../assets/images/opening/homeGraphic_icon.png" alt="homeGraphic_icon"/>
            <div class="textArea">
                <div class="text">למדו את נושאי השיעור השונים</div>
                <div class="text">וברגע שתרגישו מוכנים - בחנו את עצמכם</div>
                <div class="logos">
                    <img class="logo" src="../assets/images/opening/logistic.png"/>
                    <img class="logo" src="../assets/images/opening/logo-bhd-6.png"/>
               </div>
            </div>
        </div>

        <!-- אודות -->
        <div class="page about">
            <img class="back-btn" src="../assets/images/general/back_btn.svg"/>
            <img class="about_header" src="../assets/images/opening/about_header.svg"/>
            
            <div class="card-container">
                <img class="card" src="../assets/images/opening/aboutCard.svg"/>
                <div class="text">
                    <div class="container-titles">
                        <div>מומחה תוכן</div>
                        <div>רס"ב יוסי אלוני</div>
                    </div>
                    <div class="container-titles">
                        <div>מפתחים</div>
                        <div>סמל הלה צביון, סמל תומי פוליאקוב, רב"ט דורין חתוקה</div>
                    </div>
                    <div class="container-titles">
                        <div>מעצב UX & UI</div>
                        <div>סמל דור סגיב</div>
                    </div>
                    <div class="container-titles">
                        <div>ראש תחום מו"פ וחדשנות בלמידה</div>
                        <div>סמ"ר גל גנסין</div>
                    </div>
                    <div class="container-titles">
                        <div> ראש מדור טי"ל</div>
                        <div> רס"ן מיגל לויתן</div>
                    </div>
                    <div class="container-titles">
                        <div>גרסה</div>
                        <div>דצמבר 2021</div>
                    </div>
                    <div class="container-titles">
                        <div>זכויות</div>
                        <div>השאלות לקוחות מאתר משרד הרישוי</div>
                    </div>
                    <div class="container-titles">
                        <div>צור קשר:</div>
                        <a href="mailto:madortill@gmail.com">madortill@gmail.com</a>
                    </div>
                </div>
            </div>
            
            <img class="logo" src="../assets/images/opening/madorTill_header.png"/>
        </div>
        
        <!-- עמוד נושאי הלימוד -->
        <div class="page learning subjects ">
            <div class="title"></div>
            <div class="sub-title">בחרו נושא בו תרצו להתמקד</div>
            <div class="cards-container"></div>
            <div class="gradient"></div>
            <div class="buttons">
                <img src="../assets/images/general/practice-btn-homePage.svg" alt="practice_btn" class="button practice-btn">
                <img src="../assets/images/general/exam_btn.svg" alt="" class="button exam-btn">
            </div>
        </div>

         <!-- עמוד השיעורים בתוך נושא ספיציפי -->
         <div class="page learning lessons">
            <div class="title"></div>
            <div class="sub-title">בחרו שיעור אותו תרצו ללמוד</div>
            <div class="cards-container"></div>
            <div class="gradient"></div>
        </div>
        
        <!-- עמוד תתי נושאי הלימוד -->
        <div class="page learning content">
            <div class="title"></div>
            <div class="cards-container"></div>
            <div class="gradient"></div>
            <div class="templates">
                <!-- כרטיסייה עם כותרת וטקסט -->
                <template class="text">
                    <div class="title"></div>
                    <div class="content"></div>
                </template>
                <!-- כרטיסייה עם כותרת ו2 תיבות טקסט -->
                <template class="text-two-paragraphs">
                    <div class="title"></div>
                    <div class="content text1"></div>
                    <div class="content text2"></div>
                </template>
                <!-- כרטיסייה עם כותרת ו3 תיבות טקסט -->
                <template class="text-three-paragraphs">
                    <div class="title"></div>
                    <div class="content text1"></div>
                    <div class="content text2"></div>
                    <div class="content text3"></div>
                </template>
                <!-- כרטיסייה עם כותרת, תמונה וטקסט -->
                <template class="pic-and-text">
                    <div class="title"></div>
                    <div class="content"></div>
                    <img class="pic"/>
                </template>
                <!-- כרטיסייה עם כותרת ושתי תמונות -->
                <template class="two-pics">
                    <div class="title"></div>
                    <div class="content content1"></div>
                    <img class="pic pic1"/>
                    <div class="content content2"></div>
                    <img class="pic pic2"/>
                </template>
                <!-- כרטיסייה עם כותרת וסרטון -->
                <template class="video">
                    <div class="title"></div>
                    <video class="video" controls></video>
                </template>
                <!-- כרטיסייה עם כותרת, סרטון וטקסט -->
                <template class="video-and-text">
                    <div class="title"></div>
                    <video class="video" controls></video>
                    <div class="content"></div>
                </template>
                <!-- כרטיסייה עם כותרת, תת כותרת ורשימה של שלושה בולטים-->
                <template class="list3">
                    <div class="title"></div>
                    <div class="sub-title"></div>
                    <ul class="list">
                        <li class="li1"></li>
                        <li class="li2"></li>
                        <li class="li3"></li>
                    </ul>
                </template>
                <!-- כרטיסייה עם כותרת, 3 תתי כותרות ו3 טקסטים -->
                <template class="_3titles_3text">
                    <div class="title"></div>
                    <div class="sub-title sub-title1"></div>
                    <div class="content content1"></div>
                    <div class="sub-title sub-title2"></div>
                    <div class="content content2"></div>
                    <div class="sub-title sub-title3"></div>
                    <div class="content content3"></div>
                </template>
                <!-- כרטיסייה עם כותרת, תמונה, 4 תתי כותרות ו4 טקסטים -->
                <template class="pic_4titles_4text">
                    <div class="title"></div>
                    <img class="pic"/>
                    <div class="sub-title sub-title1"></div>
                    <div class="content content1"></div>
                    <div class="sub-title sub-title2"></div>
                    <div class="content content2"></div>
                    <div class="sub-title sub-title3"></div>
                    <div class="content content3"></div>
                    <div class="sub-title sub-title4"></div>
                    <div class="content content4"></div>
                </template>
                 <!-- יוטיוב וידאו -->
                <template class="youtube">
                    <div class="title"></div>
                    <iframe width="100%" class="youtube" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </template>
                 <!-- תמונות -->
                <template class="pics">
                    <div class="title"></div>
                    <img class="pic pic1"/>
                    <img class="pic pic2"/>
                    <img class="pic pic3"/>
                </template>
                 <!-- תמונות -->
                <template class="two-pics-and-text">
                    <div class="title"></div>
                    <div class="content"></div>
                    <img class="pic pic1"/>
                    <img class="pic pic2"/>
                </template>
                 <!-- תמונות -->
                <template class="three-pics-and-text">
                    <div class="title"></div>
                    <div class="content"></div>
                    <img class="pic pic1"/>
                    <img class="pic pic2"/>
                    <img class="pic pic3"/>
                </template>
                <!-- לתמונה ריבועית -->
                <template class="square-pics-and-text">
                    <div class="title"></div>
                    <div class="content"></div>
                    <img class="square-pic squarePic"/>
                </template>
                <!--ל2 תמונות ריבועיות-->
                <template class="square-pics-and-text">
                    <div class="title"></div>
                    <div class="content"></div>
                    <img class="square-pic squarePic1"/>
                    <img class="square-pic squarePic2"/>
                </template>
                <!-- ל3 תמונות ריבועיות -->
               <template class="three-square-pics-and-text">
                   <div class="title"></div>
                   <div class="content"></div>
                   <img class="square-pic squarePic1"/>
                   <img class="square-pic squarePic2"/>
                   <img class="square-pic squarePic3"/>
               </template>
                <!-- ל3 תמונות ריבועיות -->
               <template class="two-square-pics-and-text">
                   <div class="title"></div>
                   <div class="content"></div>
                   <img class="square-pic squarePic1"/>
                   <img class="square-pic squarePic2"/>
               </template>
                <!-- גג -->
               <template class="two-pics-square">
                   <div class="title"></div>
                   <div class="content1"></div>
                   <img class="square-pic squarePic1"/>
                   <div class="content2"></div>
                   <img class="square-pic squarePic2"/>
               </template>
            </div>
        </div>
        
        <!-- עמוד תרגול -->
        <div class="page practice">
            <img class="title" src="../assets/images/practice/practice_header.svg" alt="title" />
            <div class="score">
                <div class="right-answers">
                    <div class="points">0</div>
                    <div class="points-text">נכונות</div>
                </div>
                <div class="sum-answers">
                    <div class="points"></div>
                    <div class="points-text">בסה"כ</div>
                </div>
            </div>
            
            <div class="container-questions"></div>
            <div class="buttons">
                <img class="btn half-half" src="../assets/images/practice/halfhalf_btn.svg" alt="halfhalf_btn" />
                <img class="btn show-answer" src="../assets/images/practice/show_btn.svg" alt="show_btn" />
            </div>
        </div>
        
        <!-- עמוד מבחן -->
        <div class="page exam">
            <div class="header">
                <img src="../assets/images/exam/exam_header.svg" class="title"/>
                <div class="sub-titles">
                    <div class="questionNumber">
                        <div class="questionNumber-text"></div>
                    </div>
                    <div class="timer">
                        <div class="timer-text"></div>
                    </div>
                </div>
            </div>
            <div class="questions-container"></div>
            <div class="questions-number"></div>
        </div>
    </div>

   
</body>
</html>
