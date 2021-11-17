/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "לומדת כרטיסיות";

/****     הכנס כמות כוללת מקסימלית של שאלות למבחן. יש לשים לב לכמות השאלות הקיימות מהבהד - שלא כמות שלא קיימת   *******/
// const AMOUNT_EXAM_QUESTIONS = 10;

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "10:00";

const DATA = { 
    // // דוגמה לנושא
    // "נושא 1": {
    //     "icon":  "../assets/images/learning/Artboard 4.svg",
    //     // שאלות לנושא הזה
    //     "questionsExam": [
    //         {
    //             type: "multiple",
    //             question: "דוגמה לשאלה אמריקאית מתרגלת שיש לה 4 תשובות?",
    //             ans1: "תשובה ראשונה ולא נכונה",
    //             ans2: "תשובה שנייה נכונה!",
    //             ans3: "תשובה שלישית ולא נכונה",
    //             ans4: "תשובה רביעית לא נכונה",
    //             correctAns: "ans2"
    //         },
    //         {
    //             type: "binary",
    //             sentence: "דוגמה לשאלה מתרגלת נכונה של נכון או לא נכון",
    //             trueOrFalse: true
    //         }
    //     ],
    //     "questionsPractice": [
    //         {
    //             type: "multiple",
    //             question: "דוגמה לשאלה אמריקאית בוחנת שיש לה 4 תשובות?",
    //             ans1: "תשובה ראשונה ולא נכונה",
    //             ans2: "תשובה שנייה נכונה!",
    //             ans3: "תשובה שלישית ולא נכונה",
    //             ans4: "תשובה רביעית לא נכונה",
    //             correctAns: "ans2"
    //         },
    //         {
    //             type: "binary",
    //             sentence: "דוגמה לשאלה בוחנת נכונה של נכון או לא נכון",
    //             trueOrFalse: true
    //         }
    //     ],
    //     "amountOfQuestions": 2,
    //     "lessons": {
    //         "שיעור 1": {
    //             "learningContent": {
    //                 "נושא למידה 1": {
    //                     "כרטיסייה ראשונה מסוג טקסט": [ 
    //                         {
    //                             cardType: "text",
    //                             content: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים."
    //                         },
    //                         {
    //                             cardType: "textTwoParagraphs",
    //                             text1: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים.",
    //                             text2: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים. זוהי הפסקה השנייה של התוכן."
    //                         },
    //                         {
    //                             cardType: "textThreeParagraphs",
    //                             text1: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים.",
    //                             text2: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים. זוהי הפסקה השנייה של התוכן.",
    //                             text3: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים. זוהי הפסקה השלישית של התוכן."
    //                         }
    //                     ],
    //                     "כרטיסייה שנייה": [
    //                         {
    //                             cardType: "twoPics",
    //                             pic1: "../assets/images/pic.png",
    //                             content1: "דוגמה לכותרת לתמונה הראשונה",
    //                             pic2: "../assets/images/pic.png",
    //                             content2: "דוגמה לכותרת לתמונה השנייה"
    //                         },
    //                         {
    //                             cardType: "picAndText",
    //                             pic: "../assets/images/pic.png",
    //                             content: "דוגמה לכותרת לתמונה הראשונה",
    //                         }
    //                     ],
    //                     'כרטיסייה עם הרבה תוכן וגלילה': [
    //                         {
    //                             cardType: "pic_4titles_4text",
    //                             pic: "../assets/images/pic.png",
    //                             subTitle1: "כותרת ראשונה",
    //                             content1: "תשובה לכותרת הראשונה במשפט.",
    //                             subTitle2: "כותרת שנייה",
    //                             content2: "תוכן המפרט על הכותרת השנייה.",
    //                             subTitle3: "כותרת שלישית",
    //                             content3: "תוכן תוכן תוכן תוכן.",
    //                             subTitle4: "כותרת רביעית ואחרונה לכרטיסייה",
    //                             content4: "תשובה אחרונה לכותרת הרביעית. ניתן להוסיף עוד משפטים כמובן.",
    //                         },
    //                         {
    //                             cardType: "_3titles_3text",
    //                             subTitle1: "אפשרות לכותרות ותוכן בלי תמונות",
    //                             content1: "ולכל כותרת יש תוכן כמובן",
    //                             subTitle2: "כותרת שנייה",
    //                             content2: "תשובה לכותרת השנייה",
    //                             subTitle3: "כותרת שלישית ואחרונה",
    //                             content3: "תוכן אחרון לתת נושא זה. מוזמנים לעבור לתת נושא הבא!",
    //                         },
        
    //                     ],
        
    //                 },
    //                 "נושא למידה 2": {
    //                     "כרטיסייה שלישית מסוג וידאו": [
    //                         {
    //                             cardType: "video",
    //                             video: "../assets/images/פתיח.mp4"
    //                         },
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     "כרטיסייה רביעית": [
    //                         {
    //                             cardType: "text",
    //                             content: "מלא מילים של נושא ספיציפי, שנראה לי שייצא יפה אבל בואו נגלה יחדיו!"
    //                         }
    //                     ]
    //                 },
    //                 "נושא למידה 3": {
    //                     "תת תת נושא 12": [
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     "תת תת נושא 23": [
    //                         {
    //                             cardType: "list3",
    //                             subTitle: "כותרת לרשימה:",
    //                             li1:"משפט ראשון ברשימה, זה לדוגמה משט יחסית ארוך משאר המשפטים ויש נקודה בסוף המשפט.",
    //                             li2:"משפט שני ברשימה",
    //                             li3:"משפט שלישי ברשימה",
    //                         }
    //                     ]
    //                 },
    //                 "נושא למידה 4": {
    //                     "תת תת נושא 12": [
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     // "תת תת נושא 23": [
    //                     //     {
    //                     //         cardType: "twoPics",
    //                     //         pic1: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         // subTitle1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         pic2: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //         // subTitle2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //     }
    //                     // ]
    //                 },
    //                 "נושא למידה 5": {
    //                     "תת תת נושא 12": [
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     // "תת תת נושא 23": [
    //                     //     {
    //                     //         cardType: "twoPics",
    //                     //         pic1: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         // subTitle1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         pic2: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //         // subTitle2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //     }
    //                     // ]
    //                 }
    //             },
    //         },
    //         "שיעור 2": {
    //             "learningContent": {
    //                 "נושא למידה 1": {
    //                     "כרטיסייה ראשונה מסוג טקסט": [ 
    //                         {
    //                             cardType: "text",
    //                             content: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים."
    //                         },
    //                         {
    //                             cardType: "textTwoParagraphs",
    //                             text1: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים.",
    //                             text2: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים. זוהי הפסקה השנייה של התוכן."
    //                         },
    //                         {
    //                             cardType: "textThreeParagraphs",
    //                             text1: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים.",
    //                             text2: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים. זוהי הפסקה השנייה של התוכן.",
    //                             text3: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים. זוהי הפסקה השלישית של התוכן."
    //                         }
    //                     ],
    //                     "כרטיסייה שנייה": [
    //                         {
    //                             cardType: "twoPics",
    //                             pic1: "../assets/images/pic.png",
    //                             content1: "דוגמה לכותרת לתמונה הראשונה",
    //                             pic2: "../assets/images/pic.png",
    //                             content2: "דוגמה לכותרת לתמונה השנייה"
    //                         },
    //                         {
    //                             cardType: "picAndText",
    //                             pic: "../assets/images/pic.png",
    //                             content: "דוגמה לכותרת לתמונה הראשונה",
    //                         }
    //                     ],
    //                     'כרטיסייה עם הרבה תוכן וגלילה': [
    //                         {
    //                             cardType: "pic_4titles_4text",
    //                             pic: "../assets/images/pic.png",
    //                             subTitle1: "כותרת ראשונה",
    //                             content1: "תשובה לכותרת הראשונה במשפט.",
    //                             subTitle2: "כותרת שנייה",
    //                             content2: "תוכן המפרט על הכותרת השנייה.",
    //                             subTitle3: "כותרת שלישית",
    //                             content3: "תוכן תוכן תוכן תוכן.",
    //                             subTitle4: "כותרת רביעית ואחרונה לכרטיסייה",
    //                             content4: "תשובה אחרונה לכותרת הרביעית. ניתן להוסיף עוד משפטים כמובן.",
    //                         },
    //                         {
    //                             cardType: "_3titles_3text",
    //                             subTitle1: "אפשרות לכותרות ותוכן בלי תמונות",
    //                             content1: "ולכל כותרת יש תוכן כמובן",
    //                             subTitle2: "כותרת שנייה",
    //                             content2: "תשובה לכותרת השנייה",
    //                             subTitle3: "כותרת שלישית ואחרונה",
    //                             content3: "תוכן אחרון לתת נושא זה. מוזמנים לעבור לתת נושא הבא!",
    //                         },
        
    //                     ],
        
    //                 },
    //                 "נושא למידה 2": {
    //                     "כרטיסייה שלישית מסוג וידאו": [
    //                         {
    //                             cardType: "video",
    //                             video: "../assets/images/פתיח.mp4"
    //                         },
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     "כרטיסייה רביעית": [
    //                         {
    //                             cardType: "text",
    //                             content: "מלא מילים של נושא ספיציפי, שנראה לי שייצא יפה אבל בואו נגלה יחדיו!"
    //                         }
    //                     ]
    //                 },
    //                 "נושא למידה 3": {
    //                     "תת תת נושא 12": [
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     "תת תת נושא 23": [
    //                         {
    //                             cardType: "list3",
    //                             subTitle: "כותרת לרשימה:",
    //                             li1:"משפט ראשון ברשימה, זה לדוגמה משט יחסית ארוך משאר המשפטים ויש נקודה בסוף המשפט.",
    //                             li2:"משפט שני ברשימה",
    //                             li3:"משפט שלישי ברשימה",
    //                         }
    //                     ]
    //                 },
    //                 "נושא למידה 4": {
    //                     "תת תת נושא 12": [
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     // "תת תת נושא 23": [
    //                     //     {
    //                     //         cardType: "twoPics",
    //                     //         pic1: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         // subTitle1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         pic2: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //         // subTitle2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //     }
    //                     // ]
    //                 },
    //                 "נושא למידה 5": {
    //                     "תת תת נושא 12": [
    //                         {
    //                             cardType: "videoAndText",
    //                             video: "../assets/images/פתיח.mp4",
    //                             content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
    //                         }
    //                     ],
    //                     // "תת תת נושא 23": [
    //                     //     {
    //                     //         cardType: "twoPics",
    //                     //         pic1: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         // subTitle1: "זה דוגמה לתמונה מוצלחת ראשונה",
    //                     //         pic2: "../assets/images/Artboard 1 copy 2@2x.png",
    //                     //         content2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //         // subTitle2: "זה דוגמה לתמונה מוצלחת שנייה"
    //                     //     }
    //                     // ]
    //                 }
    //             },
    //         },
    //     },
    // },

    "חוק ותמרורים": {
        "icon": "",
        "questions": [
            {
                type: "multiple",
                img: `../assets/images/image_example.jpg`,
                question: `11111 road`,
                ans1: `c`,
                ans2: `c`,
                ans3: `c`,
                ans4: `c`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                img: `../assets/images/imageee.jpg`,
                question: `2222 bird`,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: "ans2"
            },
            {
                type: "multiple",
                img: `../assets/images/imageee.jpg`,
                question: `4444444 also a bird`,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: "ans2"
            },
            // {
            //     type: "binary",
            //     sentence: `333`,
            //     trueOrFalse: true
            // }
        ],
        "amountOfQuestions": 3,
        lessons: {
            "הגדרת מושגים": {
                "learningContent": {
                    "הקדמה": {
                        "הקדמה": [ 
                            {
                                cardType: `text`,
                                content: `בפרק זה נגדיר מספר מונחים אותם עליך להכיר.
                                מטרתן של ההגדרות היא לתת תיאור מדויק ככל האפשר של מונחים מתחום התעבורה, כפי שהמחוקק התכוון אליהם. <br><br>
                                לעיתים יש הבדל בין ההגדרה "העממית" השגורה בפי כל, לבין ההגדרה "החוקית", כלומר ההגדרות שבפקודת התעבורה או בתקנות ומכאן חשיבותו של פרק זה. 
                                כך למשל, לא תהיה תמיד הגדרת "דרך" בתקנות, זהה למונח, כפי שהוא מוכר לך מחיי היומיום.`
                            }
                        ],
                    },
                    "כלי רכב": {
                        "כלי רכב הנעים בכביש" : [
                            {
                                cardType: `textTwoParagraphs`,
                                text1: `"<b>רכב</b>" – רכב הנע בכוח מכני או הנגרר על ידי רכב כזה או על ידי בהמה, וכן מכונה או מתקן, הנעים או הנגררים כאמור, כולל אופניים ותלת-אופן, ולמעט רכב ששר התחבורה פטר אותו בצו מהוראות פקודה זו כולן או מקצתן.`,
                                text2: `"<b>רכב נוסעים פרטי</b>" – רכב מנועי פרטי המיועד להסיע נוסעים אשר צוין ברישיון הרכב שלו סיווג אישי 1.M
                                שים לב – <b>רשות הרישוי</b> היא המגדירה את <b>סוג הרכב</b> ולא יצרן הרכב. כך למשל, ניתן לראות רכב המוגדר ברישיונו כ"רכב נוסעים פרטי", לצד אותו רכב בדיוק, שיוגדר ברישיונו כ"מונית". 
                                רשות הרישוי תגדיר לרוב רכב כ"רכב נוסעים פרטי", אם הוא מיועד להסיע על פי מבנהו עד 8 נוסעים, כולל על הנהג.`
                            },
                            {
                                cardType: `text`,
                                content: `"<b>כלי רכב מסחריים</b>" - יוגדרו על פי רוב באמצעות תיאור מפורט יחסית של מבנה הרכב. 
                                כך למשל יאופיין "טנדר" בכך שתתקיים הפרדה בין תא הנהג לבין תא המטען והוא ייקרא "רכב מסחרי בלתי אחוד", להבדיל מה-VAN  שיוגדר כ"רכב מסחרי אחוד".`,
                            },
                        ],
                    },
                    "כבישים ודרכים": {
                        "כביש" : [
                            {
                                cardType: `textTwoParagraphs`,
                                text1: `"<b>רכב</b>" – רכב הנע בכוח מכני או הנגרר על ידי רכב כזה או על ידי בהמה, וכן מכונה או מתקן, הנעים או הנגררים כאמור, כולל אופניים ותלת-אופן, ולמעט רכב ששר התחבורה פטר אותו בצו מהוראות פקודה זו כולן או מקצתן.`,
                                text2: `"<b>רכב נוסעים פרטי</b>" – רכב מנועי פרטי המיועד להסיע נוסעים אשר צוין ברישיון הרכב שלו סיווג אישי 1.M
                                שים לב – <b>רשות הרישוי</b> היא המגדירה את <b>סוג הרכב</b> ולא יצרן הרכב. כך למשל, ניתן לראות רכב המוגדר ברישיונו כ"רכב נוסעים פרטי", לצד אותו רכב בדיוק, שיוגדר ברישיונו כ"מונית". 
                                רשות הרישוי תגדיר לרוב רכב כ"רכב נוסעים פרטי", אם הוא מיועד להסיע על פי מבנהו עד 8 נוסעים, כולל על הנהג.`
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road1.png`,
                                content: `חלק הדרך המיועד לתנועת כלי הרכב, שנסלל או שופר לשם כך, או שתנועת כלי רכב נוהגת לעבור בו, למעט שולי דרך.
                                כלומר, כביש אינו בהכרח סלול אספלט.
                                די בכך <b>שתנועת כלי רכב נוהגת לעבור בו</b> על מנת שייחשב "כביש". על פי התקנות.
                                אין לנהוג בכביש ברכב המשמיע רעש בלתי סביר ורועש במיוחד.`},
                        ],
                        "כביש חד סטרי" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road2.png`,
                                content: `כל כביש שתנועת כלי רכב מותרת בו בכיוון אחד בלבד.
                                תנועה <b>בניגוד</b> לכיוון בדרך חד סטרית מותרת רק על פי <b> הוראת שוטר </b>, או <b> לרכב ביטחון בתפקיד </b>.`
                            },
                        ],
                        "שולי הכביש" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road3.png`,
                                content: `השטח שאין לצידו מדרכה <b>הסמוך לשפת הכביש</b>, עד לרוחב של שלושה מטרים או עד לקצה תעלת ניקוז, כאשר דופן התעלה מצוי פחות משלושה מטרים משפת הכביש. <br>
                                שול הכביש, יכול שהיה סלול, או לא, לעיתים יש הפרש גבהים בינו לבין הכביש, אולם הוא תחום בין שפת הכביש לבין תעלת הניקוז. אם המרחק בינה לבין שפת הכביש עולה על 4 מטר, אזי רק ארבעת המטרים הצמודים לשפת הכביש ייחשבו כ"שול" ( "שול – יחיד, שוליים" – רבים).`
                            },
                        ],
                        "שביל" : [
                            {
                                cardType: `picAndText`,
                                // חסרה תמונה
                                pic: `../assets/images/pics/road4.png`,
                                content: `דרך או חלק מדרך <b>שאינו כביש</b> שהוקצה לסוג עוברי דרך. <br>
                                כך למשל שביל להולכי רגל, או שביל לאופניים בלבד.`
                            },
                        ],
                        "נתיב" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road5.png`,
                                content: `חלק מרוחבו של כביש, בין שסומן ובין שלא סומן, המספיק לתנועת טור אחד של כלי רכב, למעט רכב הנע של שני גלגלים. <br>
                                כלומר, נתיב אינו מוגדר במטרים ואינו חייב להיות מסומן. <br> 
                                די בכך שיש מקום לתנועת טור אחד של כלי רכב ארבעה גלגליים, על מנת שיוגדר כנתיב. <br>
                                כמובן שאם קיים סימון בכביש, הרי הנתיב תחום ע"י הסימון.`
                            },
                        ],
                        "מעבר חצייה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road6.png`,
                                content: `חלק מהכביש המסומן כמיועד לחצייתו על ידי הולכי רגל.`
                            },
                        ],
                        "שטח הפרדה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road7.png`,
                                content: `כל מבנה, אי תנועה, סימון שטח על פני הדרך, גינה, שטח לא סלול וכיוצא באלה, <b>המחלקים את הדרך לאורכה</b>. <br>
                                שטח הפרדה כשלעצמו, יכול שיקבע באמצעות סימון בלבד ואינו חייב להיות בנוי אבן.`
                            },
                        ],
                        "שטח הפרדה בנוי" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road8.png`,
                                content: `שטח הפרדה המחלק את הדרך לאורכה באמצעות <b>התקן מוגבה מעל הכביש</b> כגון אבן מוגבהת, מעקה בטיחות או צמחיה. <br>
                                זהו שטח הפרדה המוכר לנו בשמו העממי "אי תנועה".<br>
                                שטח הפרדה, מחלק כביש דו סטרי, לשני כבישים חד סטריים. <br>
                                <b>תפקידו ליצור הפרדה בין כיווני תנועה מנוגדים</b>.<br>
                                <b>אסור</b> לחנות או לעצור בו ויש לנהוג תמיד מציידו הימני, אלא אם תמרור מורה אחרת.`
                            },
                        ],
                    },
                },
            },
        }
    },

    // "בטיחות": {

    // },
    // "הכרת הרכב": {

    // },
    // "רכב משא": {

    // },
}




/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}

CARD_TYPES.list3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}
CARD_TYPES.youtube = {
    init(card, json) {
        card.querySelector(".youtube").src = json.youtube;
  
    }
}
