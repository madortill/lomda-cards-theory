/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "נוהגים 6/6 לומדים תיאוריה";

/****     הכנס כמות כוללת מקסימלית של שאלות למבחן. יש לשים לב לכמות השאלות הקיימות מהבהד - שלא כמות שלא קיימת   *******/
const AMOUNT_EXAM_QUESTIONS = 30;

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "30:00";

const DATA = { 
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
        "amountOfQuestions": 9,
        lessons: {
            //תמרורים
            "תמרורים": {
                learningContent: {
                    "אזהרה ותמרורים": {
                        "101" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/101.png`,
                                content: `כביש משובש.`
                            },
                        ],
                        "102" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/102.png`,
                                content: `עקומה חדה ימינה או
                                שמאלה, בהתאמה. `
                            },
                        ],
                        "103" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/103.png`,
                                content: `עקומה חדה ימינה או
                                שמאלה, בהתאמה. `
                            },
                        ],
                        "104" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/104.png`,
                                content: `עקומה ימינה ואח"כ
                                שמאלה או שמאלה
                                ואח"כ ימינה, בהתאמה. `
                            },
                        ],
                        "105" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/105.png`,
                                content: `עקומה ימינה ואח"כ
                                שמאלה או שמאלה
                                ואח"כ ימינה, בהתאמה.`
                            },
                        ],
                        "106" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/106.png`,
                                content: `דרך מפותלת `
                            },
                        ],
                        "107" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/107.png`,
                                content: `אזהרה והדרכה בעקומה חדה: המשך הדרך בכוון המסומן בחצים שעל התמרור, עבור לפני התמרור. `
                            },
                        ],
                        "108" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/108.png`,
                                content: `אזהרה והדרכה בעקומה חדה: המשך הדרך בכוון המסומן בחצים שעל התמרור, עבור לפני התמרור.`
                            },
                        ],
                        "109" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/109.png`,
                                content: `הכביש הולך וצר.`
                            },
                        ],
                        "110" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/110.png`,
                                content: `הכביש הולך וצר מצד
                                ימין או מצד שמאל,
                                בהתאמה. `
                            },
                        ],
                        "111" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/111.png`,
                                content: `הכביש הולך וצר מצד
                                ימין או מצד שמאל,
                                בהתאמה. `
                            },
                        ],
                        "112" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/112.png`,
                                content: `מעבר צר או מכשול:
                                הוצב התמרור בצד אחד
                                של הדרך בלבד, פירושו
                                מכשול באותו צד של
                                הדרך. הקוים
                                האלכסוניים מוטים
                                מטה כלפי מרכז הנתיב
                                הסמוך. `
                            },
                        ],
                        "113" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/113.png`,
                                content: `מכשול גובה:
                                מעבר בגובה שמתחת
                                ל- 80.4 מטר`
                            },
                        ],
                        "114" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/114.png`,
                                content: `צומת הצטלבות. `
                            },
                        ],
                        "115" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/115.png`,
                                content: `צומת קמץ:
                                ימינה או שמאלה ,
                                בהתאמה.`
                            },
                        ],
                        "116" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/116.png`,
                                content: `צומת קמץ:
                                ימינה או שמאלה ,
                                בהתאמה.`
                            },
                        ],
                        "117" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/117.png`,
                                content: `צומת קמץ `
                            },
                        ],
                        "118" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/118.png`,
                                content: `אזהרה והדרכה בצומת
                                קמץ:
                                המשך הדרך בכוונים
                                המסומנים בחצים שעל
                                התמרור,
                                עבור לפני התמרור. `
                            },
                        ],
                        "119" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/119.png`,
                                content: `צמתי קמץ: ימינה ולאחר מכן שמאלה או שמאלה ולאחר מכן ימינה, בהתאמה.
                                `
                            },
                        ],
                        "120" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/120.png`,
                                content: `צמתי קמץ: ימינה ולאחר מכן שמאלה או שמאלה ולאחר מכן ימינה, בהתאמה.
                                `
                            },
                        ],
                        "121" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/121.png`,
                                content: `מעגל תנועה. `
                            },
                        ],
                        "122" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/122.png`,
                                content: ` רמזור. `
                            },
                        ],
                        "123" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/123.png`,
                                content: `התמזגות של כביש שבו
                                זכות קדימה עם דרך
                                צדדית מימין או
                                משמאל, בהתאמה.
                                אין פניה לדרך הצדדית.`
                            },
                        ],
                        "124" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/124.png`,
                                content: `התמזגות של כביש שבו
                                זכות קדימה עם דרך
                                צדדית מימין או
                                משמאל, בהתאמה.
                                אין פניה לדרך הצדדית.`
                            },
                        ],
                        "125" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/125.png`,
                                content: `התמזגות עם כביש שבו
                                זכות קדימה מימין או
                                משמאל, בהתאמה.
                                אין פניה ימינה או
                                שמאלה.  `
                            },
                        ],
                        "126" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/126.png`,
                                content: `התמזגות עם כביש שבו
                                זכות קדימה מימין או
                                משמאל, בהתאמה.
                                אין פניה ימינה או
                                שמאלה.  `
                            },
                        ],
                        "127" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/127.png`,
                                content: `גודש בתנועה לפניך. `
                            },
                        ],
                        "127פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/127p.png`,
                                content: `גודש בתנועה לפניך. `
                            },
                        ],
                        "128" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/128.png`,
                                content: `רכבת מקומית חוצה..
                                `
                            },
                        ],
                        "129" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/129.png`,
                                content: `מפגש מסילת ברזל. `
                            },
                        ],
                        "130" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/130.png`,
                                content: `מפגש מסילת ברזל במרחק של כ- 300 מטר, אלא אם כן צוין אחרת בתמרור מס' 630 מתחתיו.
                                `
                            },
                        ],
                        "131" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/131.png`,
                                content: `מפגש מסילת ברזל במרחק של כ- 200 מטר, אלא אם כן צוין אחרת בתמרור מס' 630 מתחתיו.
                                `
                            },
                        ],
                        "132" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/132.png`,
                                content: `מפגש מסילת ברזל במרחק של כ- 100 מטר, אלא אם כן צוין אחרת בתמרור מס' 630 מתחתיו
                                `
                            },
                        ],
                        "133" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/133.png`,
                                content: `מקום מפגש מסילת ברזל - מסילה אחת. 
                                `
                            },
                        ],
                        "134" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/134.png`,
                                content: `מקום מפגש מסילת ברזל - יותר ממסילה אחת.
                                `
                            },
                        ],
                        "135" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/135.png`,
                                content: `מעבר חצי יה להולכי רגל בקרבת מקום. 
                                `
                            },
                        ],
                        "136" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/136.png`,
                                content: `הולכי רגל בקרבת מקום.
                                `
                            },
                        ],
                        "137" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/137.png`,
                                content: `תנועת אופניים בקרבת מקום; לענין זה, "אופניים" - כהגדרתם בסעיף 1 להודעה זו;.
                                `
                            },
                        ],
                        "138" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/138.png`,
                                content: ` מנהרה.
                                `
                            },
                        ],
                        "139" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/139.png`,
                                content: `תמרור "עצור" 302 בהמשך הדרך. 
                                `
                            },
                        ],
                        "140" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/140.png`,
                                content: `ירידה תלולה.
                                `
                            },
                        ],
                        "141" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/141.png`,
                                content: `סכנת החלקה.
                                `
                            },
                        ],
                        "142" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/142.png`,
                                content: `אבנים מ ידרדרות מימין
                                או משמאל, בהתאמה. `
                            },
                        ],
                        "143" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/143.png`,
                                content: `אבנים מ ידרדרות מימין
                                או משמאל, בהתאמה. `
                            },
                        ],
                        "144" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/144.png`,
                                content: `פסי האטה. `
                            },
                        ],
                        "145" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/145.png`,
                                content: `תנועה דו-סטרית
                                `
                            },
                        ],
                        "146" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/146.png`,
                                content: ` בעלי חיים `
                            },
                        ],
                        "147" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/147.png`,
                                content: `רכב עבודה או טרקטור חוצה.
                                `
                            },
                        ],
                        "148" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/148.png`,
                                content: `עמודי הכונה ואזהרה
                                בצד הכביש:
                                מחזיר אור מרובע-
                                צד ימין של הכביש.
                                שני מחזירי אור עגולים-
                                צד שמאל של הכביש.`
                            },
                        ],
                        "149" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/149.png`,
                                content: `עמודון להכוונה או להפרדה.
                                `
                            },
                        ],
                        "150" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/150.png`,
                                content: `מקום מסוכן שלגביו לא נקבע תמרור מיוחד. 
                                `
                            },
                        ],
                        "150פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/150p.png`,
                                content: `מקום מסוכן שלגביו לא נקבע תמרור מיוחד. 
                                `
                            },
                        ],
                        "151" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/151.png`,
                                content: `תאונה `
                            },
                        ],
                        "151פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/151p.png`,
                                content: `תאונה `
                            },
                        ],
                        "152" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/152.png`,
                                content: ` רוח צד`
                            },
                        ],
                    },
                    "תמרורי הוריה": {
                        "201" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/201.png`,
                                content: `סע ישר או ימינה.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                פנית פרסה ימינה
                                מותרת, אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                בחירת הנתיבים תהיה
                                על פי תמרור 813 או
                                 .926`
                            },
                        ],
                        "202" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/202.png`,
                                content: `סע ישר או שמאלה.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                פנית פרסה שמאלה
                                מותרת, אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                בחירת הנתיבים תהיה
                                על פי תמרור 813 או
                                 .926`
                            },
                        ],
                        "203" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/203.png`,
                                content: `סע ישר.
                                אם החץ מופיע בכיוון
                                אלכסוני, סע בכיוון
                                החץ.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                פנית פרסה אסורה.
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 .`
                            },
                        ],
                        "204" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/204.png`,
                                content: `סע ימינה.
                                פנה לפני התמרור.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                הוצב התמרור מעל
                                רמזור יחולו הוראות
                                הרמזור על התנועה
                                המותרת על פי התמרור.
                                פנית פרסה ימינה
                                מותרת, אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 .`
                            },
                        ],
                        "205" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/205.png`,
                                content: `סע שמאלה.
                                פנה לפני התמרור.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                הוצב התמרור מעל
                                רמזור יחולו הוראות
                                הרמזור על התנועה
                                המותרת על פי התמרור.
                                פנית פרסה שמאלה
                                מותרת, אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 `
                            },
                        ],
                        "206" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/206.png`,
                                content: `סע ימינה.
                                פנה אחרי התמרור.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                פנית פרסה ימינה
                                מותרת, אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                בחירת הנתיבים תהיה
                                על פי סימון 813 א ו 926 .`
                            },
                        ],
                        "207" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/207.png`,
                                content: `סע שמאלה.
                                פנה אחרי התמרור.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                פנית פרסה שמאלה
                                מותרת, אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926`
                            },
                        ],
                        "208" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/208.png`,
                                content: `סע ימינה או שמאלה.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                פנית פרסה ימינה או
                                שמאלה מותרת, אלא
                                אם הדבר נאסר ע"י
                                תמרור אחר.
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 .`
                            },
                        ],
                        "209" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/209.png`,
                                content: `סע ישר או בפנית פרסה
                                ימינה, פנית פרסה
                                שמאלה אסורה.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 `
                            },
                        ],
                        "210" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/210.png`,
                                content: `סע ישר או בפנית פרסה
                                שמאלה, פנית פרסה
                                ימינה אסורה.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 .`
                            },
                        ],
                        "211" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/211.png`,
                                content: `סע בפניית פרסה ימינה
                                או שמאלה, בהתאמה.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 `
                            },
                        ],
                        "212" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/212.png`,
                                content: `סע בפניית פרסה ימינה
                                או שמאלה, בהתאמה.
                                חץ בצבע צהוב מורה על
                                כיוון הנסיעה לתחבורה
                                ציבורית כמפורט
                                בתמרור 501 .
                                בחירת הנתיבים תהיה
                                על פי סימון 813 או 926 `
                            },
                        ],
                        "213" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/213.png`,
                                content: `עבור את המקום
                                המסומן מימין או
                                משמאל.
                                חץ בצבע צהוב מורה על
                                כוון הנסיעה לתחבורה
                                ציבורית בלבד. `
                            },
                        ],
                        "214" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/214.png`,
                                content: `עבור את המקום
                                המסומן מצדו הימני או
                                השמאלי, בהתאמה.
                                חץ בצבע צהוב מורה על
                                כוון הנסיעה לתחבורה
                                ציבורית בלבד. `
                            },
                        ],
                        "215" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/215.png`,
                                content: `עבור את המקום
                                המסומן מצדו הימני או
                                השמאלי, בהתאמה.
                                חץ בצבע צהוב מורה על
                                כוון הנסיעה לתחבורה
                                ציבורית בלבד.  `
                            },
                        ],
                        "216" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/216.png`,
                                content: `כניסה לדרך מהירה:
                                אסורה הכניסה להולכי
                                רגל, לאופניים כהגדרתם
                                בסעיף 1 להודעה זו,
                                לרכב איטי, לעגלות יד,
                                לבעלי חיים או לכל רכב
                                אשר אינו מסוגל או
                                מורשה לנוע במהירות
                                שצויינה בתמרור 218
                                המוצב לפני הכניסה
                                לדרך המהירה.  `
                            },
                        ],
                        "217" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/217.png`,
                                content: `קצה הדרך המהירה.`
                            },
                        ],
                        "218" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/218.png`,
                                content: `דרך לרכב מנועי שמסוגל
                                ומורשה לנוע במהירות
                                שאינה פחותה מזו
                                שצויינה בתמרור
                                בקמ"ש`
                            },
                        ],
                        "219" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/219.png`,
                                content: `דרך לרכב מנועי בלבד.`
                            },
                        ],
                        "220" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/220.png`,
                                content: `רחוב משולב `
                            },
                        ],
                        "221" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/221.png`,
                                content: `קצה רחוב משולב. `
                            },
                        ],
                        "222" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/222.png`,
                                content: `אזור מיתון תנועה.`
                            },
                        ],
                        "223" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/223.png`,
                                content: ` קצה אזור מיתון תנועה.`
                            },
                        ],
                        "224" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/224.png`,
                                content: `נתיב חד -סטרי לתנועת
                                אופניים, כהגדרתם
                                בסעיף 1 להודעה זו;
                                הנסיעה מותרת בכיוון
                                המסומן בלבד באמצעות
                                סימון 804 `
                            },
                        ],
                        "225" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/225.png`,
                                content: `קצה הנתיב לאופניים,
                                כהגדרתם בסעיף 1
                                להודעה זו. `
                            },
                        ],
                        "226" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/226.png`,
                                content: `שביל להולכי רגל בלבד. `
                            },
                        ],
                        "227" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/227.png`,
                                content: `שביל משותף להולכי רגל
                                ולתנועת אופניים, לעניין
                                זה, "אופניים" -
                                כהגדרתם בסעיף 1
                                להודעה זו; `
                            },
                        ],
                        "228" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/228.png`,
                                content: `שביל נפרד להולכי רגל
                                בלבד, ושביל נפרד
                                לתנועת אופניים בלבד,
                                בהתאמה; לעניין זה,
                                "אופניים" - כהגדרתם
                                בסעיף 1 להודעה זו;`
                            },
                        ],
                        "229" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/229.png`,
                                content: `שביל נפרד להולכי רגל
                                בלבד, ושביל נפרד
                                לתנועת אופניים בלבד,
                                בהתאמה; לעניין זה,
                                "אופניים" - כהגדרתם
                                בסעיף 1 להודעה זו;`
                            },
                        ],
                        "230" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/230.png`,
                                content: `כביש או נתיב אגרה:
                                הנסיעה בכביש או בנתיב
                                מותרת למשלם אגרה על
                                פי החוק התקף במק ום.
                                הנסיעה בכביש או בנתיב
                                פטורה מתשלום אגרה
                                לאוטובוס, לרכב המסיע
                                את מספר הנוסעים
                                לרבות הנהג, לפחות,
                                כמצוין בתמרור, לרכב
                                הנוסע לחניון חנה וסע
                                הצמוד לנתיב או לכביש
                                או לרכב המוריד או
                                מעלה נוסעים שאינו
                                ממשיך בנסיעה בכביש
                                או בנתיב, אם צוין
                                בתמרור`
                            },
                        ],
                        "231" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/231.png`,
                                content: `קצה כביש או נתיב אגרה. `
                            },
                        ],
                    },
                    "תמרורי זכות קדימה": {
                        "301" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/301.png`,
                                content: `תן זכות קדימה לתנועה
                                בדרך החוצה לרבות
                                מסילה. `
                            },
                        ],
                        "302" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/302.png`,
                                content: `עצור!
                                תן זכות קדימה לתנועה
                                בדרך החוצה לרבות
                                מסילה. `
                            },
                        ],
                        "303" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/303.png`,
                                content: `מעגל תנועה:
                                תן זכות קדימה לתנועה
                                החוצה את דרכך במעגל
                                התנועה או במסילה.
                                עבור את מעגל התנועה
                                מצידו הימני. `
                            },
                        ],
                        "304" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/304.png`,
                                content: `עצור!
                                )תמרור נייד(. `
                            },
                        ],
                        "305" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/305.png`,
                                content: `התקדם בזהירות
                                )תמרור נייד(.  `
                            },
                        ],
                        "306" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/306.png`,
                                content: `תן זכות קדימה להולכי
                                הרגל החוצים. `
                            },
                        ],
                        "307" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/307.png`,
                                content: `תן זכות קדימה ב קטע
                                דרך צרה לתנועה
                                מהכיוון הנגדי.`
                            },
                        ],
                        "308" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/308.png`,
                                content: `לך זכות קדימה בקטע
                                דרך צרה לגבי התנועה
                                מהכיוון הנגדי. `
                            },
                        ],
                        "309" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/309.png`,
                                content: ` לך זכות קדימה בדרך. `
                            },
                        ],
                        "310" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/310.png`,
                                content: `קצה הדרך שבה יש לך
                                זכות קדימה.  `
                            },
                        ],
                    },
                    "תמרורי איסורים והגבלות": {
                        "401" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/401.png`,
                                content: `כביש סגור - בשני
                                הכוונים - בפני כל רכב.
                                הוצב תמרור מעל
                                הרמזור – הנסיעה ישר
                                אסורה`
                            },
                        ],
                        "401פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/401p.png`,
                                content: `כביש סגור - בשני
                                הכוונים - בפני כל רכב.
                                הוצב תמרור מעל
                                הרמזור – הנסיעה ישר
                                אסורה.  `
                            },
                        ],
                        "402" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/402.png`,
                                content: `אסורה הכניסה לכל
                                רכב.`
                            },
                        ],
                        "403" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/403.png`,
                                content: `מחסום:
                                הדרך חסומה.
                                הוצב תמרור המורה על
                                כוון, מותר להתקדם רק
                                בכוון המצוין בתמרור. `
                            },
                        ],
                        "404" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/404.png`,
                                content: `מחסום לפני מפגש
                                מסילת ברזל:
                                נמצא המחסום בשלב
                                הורדה, עליה או במצב
                                אופקי, עצור לפניו ו אל
                                תמשיך בדרך, כל עוד
                                המחסום נמצא במצב
                                זה. `
                            },
                        ],
                        "405" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/405.png`,
                                content: `אסורה הכניסה לכל רכב
                                מנועי. `
                            },
                        ],
                        "406" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/406.png`,
                                content: `אסורה הכניסה לרכב
                                מנועי מסחרי שמשקלו
                                הכולל המותר בטונות
                                עולה על הרשום
                                בתמרור.  `
                            },
                        ],
                        "407" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/407.png`,
                                content: `אסורה הכניסה לרכב
                                המוביל חומר מסוכן
                                החייב בסימון על פי דין,
                                למעט אספקת דלק וגז.  `
                            },
                        ],
                        "408" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/408.png`,
                                content: `אסורה הכניסה לרכב
                                מנועי, למעט רכב דו-
                                גלגלי. `
                            },
                        ],
                        "409" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/409.png`,
                                content: `אסורה הכניסה לאופנוע. `
                            },
                        ],
                        "410" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/410.png`,
                                content: `אסורה הכניסה לרכב
                                עבודה ולטרקטור.  `
                            },
                        ],
                        "411" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/411.png`,
                                content: `אסורה הכניסה לבעלי
                                חיים.   `
                            },
                        ],
                        "412" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/310.png`,
                                content: `אסורה הכניסה
                                לאופניים, כהגדרתם
                                בסעיף 1 להודעה זו;  `
                            },
                        ],
                        "413" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/413.png`,
                                content: `אסורה הכניסה להולכי רגל.
                                `
                            },
                        ],
                        "414" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/414.png`,
                                content: `אסורה הכניסה להולכי
                                רגל, לרכב עבודה,
                                לטרקטור, לבעלי חיים,
                                או לאופניים; הוראות
                                התמרור יחולו על
                                המשתמשים כמצוין בו
                                ומספרם לא יעלה על
                                שלושה; לעניין זה,
                                "אופניים" – כהגדרתם
                                בסעיף 1 להודעה זו; `
                            },
                        ],
                        "415" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/415.png`,
                                content: `אסורה הכניסה לכל
                                רכב, שמשקלו הכולל
                                המותר בטונות עולה על
                                הרשום בתמרור `
                            },
                        ],
                        "416" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/416.png`,
                                content: `אסורה הכניסה לרכב
                                שגבהו –כולל המטען -
                                עולה על מספר המטרים
                                הרשום בתמרור.  `
                            },
                        ],
                        "417" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/417.png`,
                                content: `אסורה הכניסה לרכב
                                שרחבו –כולל המטען-
                                עולה על מספר המטרים
                                הרשום בתמרור. `
                            },
                        ],
                        "418" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/418.png`,
                                content: `אזור אסור ללימוד נהיגה. 
                                `
                            },
                        ],
                        "419" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/419.png`,
                                content: `קצה האזור האסור
                            ללימוד נהיגה. `
                            },
                        ],
                        "420" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/420.png`,
                                content: `אסור לעקוף או לעבור
                                על פניו של רכב מנועי
                                הנע על יותר משני
                                גלגלים באותו כיוון
                                נסיעה.`
                            },
                        ],
                        "421" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/421.png`,
                                content: `קצה קטע הדרך שעליו
                                 חל איסור העקיפה. `
                            },
                        ],
                        "422" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/422.png`,
                                content: `אסור לרכב שמשקלו
                                הכולל המותר עולה על 4
                                טון לעקוף או לעבור על
                                פניו של רכב מנועי הנע
                                על יותר משני גלגלים
                                באותו כיוון נסיעה. `
                            },
                        ],
                        "423" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/423.png`,
                                content: `קצה קטע הדרך שעליו
                                 חל איסור העקיפה. `
                            },
                        ],
                        "424" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/424.png`,
                                content: `אזור דרכים עירוניות. `
                            },
                        ],
                        "425" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/425.png`,
                                content: `קצה אזור דרכים
                                עירוניות. `
                            },
                        ],
                        "426" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/426.png`,
                                content: `מהירות מיוחדת:
                                אסורה הנסיעה
                                במהירות העולה על
                                מספר הקמ"ש הרשום
                                בתמרור.`
                            },
                        ],
                        "426פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/426p.png`,
                                content: `מהירות מיוחדת:
                                אסורה הנסיעה
                                במהירות העולה על
                                מספר הקמ"ש הרשום
                                בתמרור. `
                            },
                        ],
                        "427" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/427.png`,
                                content: `קצה הקטע של מהירות
                                מיוחדת.`
                            },
                        ],
                        "428" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/428.png`,
                                content: `אסורה הפניה ימינה או
                                שמאלה, בהתאמה,
                                בפניה הקרובה.
                                הוצב תמרור מעל
                                הרמזור, אסורה הפנייה
                                לרבות פניית פרסה.  `
                            },
                        ],
                        "429" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/429.png`,
                                content: `אסורה הפניה ימינה או
                                שמאלה, בהתאמה,
                                בפניה הקרובה.
                                הוצב תמרור מעל
                                הרמזור, אסורה הפנייה
                                לרבות פניית פרסה. `
                            },
                        ],
                        "430" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/430.png`,
                                content: `אסורה פנית פרסה
                                לימין או לשמאל,
                                בהתאמה, בפניה
                                הקרובה. `
                            },
                        ],
                        "431" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/431.png`,
                                content: `אסורה פנית פרסה
                                לימין או לשמאל,
                                בהתאמה, בפניה
                                הקרובה.  `
                            },
                        ],
                        "432" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/432.png`,
                                content: `אסורה חניית רכב
                                בדרך בצד שבו הוצב
                                התמרור. `
                            },
                        ],
                        "433" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/433.png`,
                                content: `אסורה כל עצירה
                                וחניה של רכב בדרך
                                בצד שבו הוצב
                                התמרור, אלא אם
                                דרוש הדבר למילוי
                                הוראות כל דין. `
                            },
                        ],
                        "434" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/434.png`,
                                content: `קצה קטע הוראות 433 ,432 התמרורים בלבד.
                                `
                            },
                        ],
                        "435" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/435.png`,
                                content: `אזור אסור לחנית רכב
                                שמשקלו הכולל המותר
                                עולה על 000,10 ק"ג.
                                 `
                            },
                        ],
                        "436" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/436.png`,
                                content: `קצה האזור האסור
                                לחניית רכב מסחרי
                                שמשקלו הכולל המותר
                                עולה על 000,10 ק"ג.  `
                            },
                        ],
                        "437" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/437.png`,
                                content: `חנייה בלעדית לרכב של נכה הנושא תג נכה מקורי תקף, בעת שהרכב משמש את הנכה שלו ניתן התג.
                                `
                            },
                        ],
                        "438" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/438.png`,
                                content: `עצור! בקורת מכס. 
                                `
                            },
                        ],
                        "439" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/439.png`,
                                content: `תמרור למסר מחייב
                                שלגביו אין תמרור בלוח
                                התמרורים.
                                הוצב התמרור מתחת
                                ובצמוד לתמרור אחר –
                                יחול האמור בו בתוספת
                                לתמרור שמעליו ובצמוד
                                לו.`
                            },
                        ],
                        "440" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/440.png`,
                                content: `אזור שבו אסורה
                                הכניסה לרכב מזהם, לפי
                                חוק אוויר נקי,
                                התשס"ח- 2008 ,לפי חוק
                                העזר המקומי שחל
                                בתחום הרשות
                                המקומית שבה מוצב
                                התמרור. `
                            },
                        ],
                        "441" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/441.png`,
                                content: `קצה האזור שבו אסורה
                                 הכניסה לרכב מזהם `
                            },
                        ],
                    },
                    "תמרורי תחבורה ציבורית": {
                        "501" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/501.png`,
                                content: `כביש או נתיב או שול
                                לתחבורה ציבורית:
                                הנסיעה בכביש או
                                בנתיב, או בשול מותרת
                                ל-
                                סומנה צלמית רכבת
                                מקומית )ס -43 - )לרכבת
                                מקומית;
                                סומנה צלמית אוטובוס
                                )ס-44 )בצבע צהוב -
                                לאוטובוס הנוסע בקו
                                שירות;
                                סומנה צלמית אוטובוס
                                )ס-44 )בצבע לבן - לכל
                                אוטובוס;
                                סומנה צלמית מונית -
                                לכל מונית;
                                סומנה צלמית אופנוע
                                )ס-48 – )לאופנוע;
                                סומנה ספרה בצירוף
                                הסימון "+" - לרכב -
                                למעט רכב מסחרי
                                שמשקלו הכולל המותר
                                עולה על 5.3 טון - המסיע
                                לפחות כמה נוסעים,
                                לרבות הנהג, הנקוב
                                בתמרור;
                                צוינו אחד או יותר מסוגי
                                הרכב בתמרור, יחולו
                                הוראות התמרור על פי
                                המצוין בו.
                                עצירה או חניי ה של כלי
                                רכב בנתיב אסורה אלא
                                אם צוין אחרת. `
                            },
                        ],
                        "502" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/502.png`,
                                content: `קצה הכביש או הנתיב
                                או השול לתחבורה
                                ציבורית. `
                            },
                        ],
                        "503" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/503.png`,
                                content: `נתיב לתחבורה ציבורית:
                                קו קטעים כפול משולב
                                עם מעוינים בצבע צהוב.
                                הנסיעה בנתיב מותרת
                                לרכב על פי המצוין
                                בתמרור 501 או רכב
                                הפונה בצומת הקרוב, על
                                פי סימון 514 .
                                לא הוצב תמרור 501
                                הנסיעה בנתיב מותרת
                                לרכב ציבורי בקווי
                                שירות בלבד.
                                עצירה או חניית כלי רכב
                                בנתיב אסורים, אלא אם
                                צוין אחרת`
                            },
                        ],
                        "504" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/504.png`,
                                content: `התנועה בכוון המסומן
                                בחץ הלבן מותרת לכל
                                כלי הרכב.
                                לרכב שנסי עתו הותרה
                                לפי תמרור 501 מותרת
                                גם הנסיעה בכוון הנגדי. `
                            },
                        ],
                        "505" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/505.png`,
                                content: `תחנת אוטובוסים
                                ציבוריים:
                                על גב התמרור יירשם
                                האמור בו באותה
                                המתכונת בשפה אחרת.
                                שולב סמל "נכה" –
                                האוטובוסים בקו זה
                                הותאמו לאנשים עם
                                מוגבלות; שולב סמל
                                "רכבת" - הקו מוביל אל
                                תחנת רכבת; שולב סמל
                                "קוי תחבורה ציבורית
                                בשעות הלילה" –
                                האוטובוסים בקו זה
                                פועלים בשעות הלילה.`
                            },
                        ],
                        "506" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/506.png`,
                                content: `תחנת רכבת מקומית:
                                על גב התמרור יירשם
                                האמור בו באותה
                                מתכונת בשפה אחרת.`
                            },
                        ],
                        "507" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/507.png`,
                                content: `תחנת מוניות:
                                אסורה עצירה וחניית כל
                                רכב אחר, פרט להורדת
                                נוסעים. צויינו מספרי
                                זיהוי של מוניות או
                                תווים שנקבעו בידי
                                רשות תמרור מקומית
                                בתמרור 439 מתחת
                                לתמרור, תהיה החניה
                                מותרת למוניות שצוינו
                                בלבד`
                            },
                        ],
                        "508" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/508.png`,
                                content: `קצה תחום תחנת
                                מוניות. `
                            },
                        ],
                        "509" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/509.png`,
                                content: `מקום עצירה למונית
                                להעלאת והורדת נוסעים
                                בלבד.
                                אסורה עצירה וחנית כל
                                רכב אחר.
                                צוינו מספרי מוניות או
                                מספרי קווי שרות על גבי
                                תמרור 439 מתחתיו,
                                הורדת הנוסעים
                                והעלאתם מותרת
                                למוניות שצוינו בלבד `
                            },
                        ],
                        "510" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/510.png`,
                                content: `תחנת הסעה לחיילים
                                להעלאה ולהורדה בלבד`
                            },
                        ],
                        "511" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/511.png`,
                                content: `מקום עצירה לסוג
                                מסויים של רכב ליד
                                אבני שפה צבועות אדום -
                                צהוב:
                                אסורה עצירה, למעט
                                סוג הרכב שעצירתו
                                הותרה על ידי תמרור
                                לשם העלאה והורדת
                                נוסעים בלבד.`
                            },
                        ],
                        "512" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/512.png`,
                                content: `מקום עצירה לסוג
                                מסויים של רכב במקום
                                בו קיים מפרץ ואבני
                                שפה:
                                אסורה עצ ירה בתוך
                                המפרץ או ליד קו
                                הקטעים, למעט סוג
                                הרכב שעצירתו הותרה
                                ע"י תמרור, לשם העלאה
                                והורדת נוסעים בלבד.`
                            },
                        ],
                        "513" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/513.png`,
                                content: `מקום עצירה לסוג
                                מסויים של רכב במקום
                                בו אין מפרץ ואבן השפה
                                אינה מסומנת או אין
                                אבן שפה:
                                אסורה עצירה למעט סוג
                                הרכב שעצירתו הותרה
                                על ידי תמרור לשם
                                העלאה והורדת נוסעים
                                בלבד.`
                            },
                        ],
                        "514" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/514.png`,
                                content: `כיווני הנסיעה המותרים
                                בנתיב – חצים על פני
                                הדרך בצבע צהוב, עם או
                                בלי חצים בצבע לבן או
                                כתום.
                                החץ הצהוב מורה לכלי
                                הרכב המצוינים בתמרור
                                501 בלבד: היכנ ס
                                לצומת ועבור בו רק
                                בכיוון החץ שסומן
                                בנתיב שממנו נכנסת
                                לצומת.
                                אם לא הוצב תמרור
                                501 :החץ הצהוב מורה
                                לרכב ציבורי בקווי
                                שירות בלבד: היכנס
                                לצומת ועבור בו בכוון
                                החץ שסומן בנתיב
                                שממנו נכנסת לצומת.
                                סומן גם חץ בצבע לבן או
                                כתום, החץ מורה לכל
                                כלי הרכב: היכנס
                                לצומת ועבור בו רק
                                בכיוון החץ שסומן
                                בנתיב שממנו נכנסת
                                לצומת.
                                חצים בצבע כתום מורים
                                על כיווני נסיעה אל או
                                בתוך אתר עבודה.`
                            },
                        ],
                        "515" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/515.png`,
                                content: `קו רציף כפול משולב עם
                                מעוינים בצבע צהוב –
                                חציית הקווים אסורה.
                                הנסיעה בנתיב מותרת
                                לרכב על פי המצוין
                                בתמרור 501 או לרכב
                                הפונה בצומת הקרוב, על
                                פי סימון 514 .
                                לא הוצב תמרור 501 ,
                                הנסיעה בנתיב מותרת
                                לרכב ציבורי בקווי
                                שירות בלבד.
                                עצירה או חניית כלי רכב
                                בנתיב אסורים, אלא אם
                                צויין אחרת.`
                            },
                        ],
                        "516" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/516.png`,
                                content: `נתיב לתחבורה ציבורית,
                                חציה אל ומהנתיב:
                                קו קטעים ליד קו רציף
                                משולב עם מעוינים
                                בצבע צהוב.
                                חציית הקווים מותרת
                                רק אם חציית קו
                                הקטעים קודמת לחציית
                                הקו הרציף.
                                הנסיעה בנתיב מותרת
                                לרכב על פי המצוין
                                בתמרור 501 או רכב
                                הפונה בצומת הקרוב, על
                                פי סימון 514 .
                                לא הוצב תמרור 501 ,
                                הנסיעה בנתיב מ ותרת
                                לרכב ציבורי בקווי
                                שירות בלבד.
                                עצירה או חניה של כלי
                                רכב בנתיב אסורים,
                                אלא אם צוין אחרת.`
                            },
                        ],
                
                    },
                    "תמרורי מודיעין והדרכה": {
                        "601" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/601.png`,
                                content: `שם המחלף או הצומת:
                                בדרך מהירה – באותיות
                                לבנות על רקע כחול,
                                בדרך אחרת – באותיות
                                לבנות על רקע ירוק.
                                המספר בתמרור 630
                                מציין את המרחק
                                במטרים. `
                            },
                        ],
                        "602" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/602.png`,
                                content: `הכוונה ליעדים או ליעדי
                                ביניים מעל הנתיבים
                                לפני מחלף בדרך שאינה
                                עירונית.
                                בדרך מהירה – באותיות
                                לבנות על רקע כחול,
                                בדרכים אחרות –
                                באותיות לבנות על רקע
                                ירוק. `
                            },
                        ],
                        "603" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/603.png`,
                                content: `הכוונה ליעדים או ליעדי
                                ביניים מעל הנתיבים
                                לפני צומת בדרך שאינה
                                עירונית.
                                הכוונה לאתרי תיירות –
                                באותיות לבנות על רקע
                                חום.  `
                            },
                        ],
                        "604" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/604.png`,
                                content: `הכוונה מוקדמת ליעדים
                                או ליעדי ביניים לפני
                                צומת בדרך שאינה
                                עירונית.
                                הכוונה לאתרי תיירות –
                                באותיות לבנות על רקע
                                חום. `
                            },
                        ],
                        "605" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/605.png`,
                                content: `שתי יציאות עוקבות
                                וסמוכות:
                                בהכוונה לדרך מהירה –
                                באותיות לבנות על רקע
                                כחול, בבהכוונה לדרכים
                                אחרות – באותיות
                                לבנות על רקע ירוק.  `
                            },
                        ],
                        "606" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/606.png`,
                                content: `הכוונה ליציאה מהדרך: במחלף שלפניך.
                                בהכוונה לדרך מהירה –
                                באותיות לבנות על רקע
                                כחול, בהכוונה לדרכים
                                אחרות – באותיות
                                לבנות על רקע ירוק`
                            },
                        ],
                        "607" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/607.png`,
                                content: `הכוונה ליציאה בלבד: מעל לנתיב בהכוונה לדרך מהירה – באותיות לבנות על רקע כחול, בהכוונה לדרכים אחרות – באותיות לבנות על רקע ירוק.
                                `
                            },
                        ],
                        "608" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/608.png`,
                                content: `מקום היציאה מהדרך.`
                            },
                        ],
                        "609" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/609.png`,
                                content: `היציאות הבאות: בדרך מהירה - באותיות לבנות על רקע כחול. בדרכים אחרות – באותיות לבנות על רקע ירוק. המספר מציין את המרחק בקילומטרים עד היציאה
                                `
                            },
                        ],
                        "610" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/610.png`,
                                content: `יעדים או יעדי ביניים בדרכים שאינן עירו ניות: בדרך מהירה – באותיות לבנות על רקע כחול, בדרכים אחרות - באותיות לבנות על רקע ירוק. המספר מציין את המרחק בקילומטרים עד מרכז היעד. 
                                `
                            },
                        ],
                        "611" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/611.png`,
                                content: `מספרה של דרך: בדרך מהירה – בצבע כחול, בדרך ראשית – בצבע אדום, בדרך איזורית – בצבע ירוק, ובדרך מקומ ית – בצבע שחור. הוצב תמרור 629 מתחתיו – מציין את כוון הנסיעה הכללי
                                `
                            },
                        ],
                        "612" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/612.png`,
                                content: `מספר הקילומטר בדרך: בדרך מהירה – בצבע כחול, בדרך ראשית – בצבע אדום, בדרך איזורית – בצבע ירוק ובדרך מקומית – בצבע שחור. החץ מראה את סדר המיספור )עולה או יורד( של הקילומטרים בכוון הנסיעה.
                                    `
                            },
                        ],
                        "613" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/613.png`,
                                content: `הגדרת תנועות בנתיבים:
                                בדרך מהירה – בחצים
                                לבנים על רקע כחול,
                                בדרכים אחרות –
                                בחצים לבנים על רקע
                                ירוק.
                                חץ בצבע צהוב –נתיב
                                לתחבורה ציבורית
                                כמפורט בתמרור 501 .`
                            },
                        ],
                        "614" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/614.png`,
                                content: `הכוונה ליעדים או ליעדי
                                ביניים בדרכים
                                עירוניות:
                                יעדים מחוץ להן –
                                באותיות לבנות על רקע
                                כחול, יעדים בתחומן –
                                באותיות לבנות על רקע
                                ירוק. אתרי תיירות –
                                באותיות לבנות על רקע
                                חום. `
                            },
                        ],
                        "615" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/615.png`,
                                content: `הכוונה מעל הנתיבים
                                לפני מחלף בדרך
                                עירונית:
                                יעדים או יעדי ביניים
                                מחוץ לה – באותיות
                                לבנות על רקע כחול.
                                יעדים או יעדי ביניים
                                בתחומה – באתיות
                                לבנות על רקע ירוק.
                                אתרי תיירות – באותיות
                                לבנות על רקע חום`
                            },
                        ],
                        "616" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/616.png`,
                                content: `הכוונה מעל הנתיבים
                                לפני צומת בדרך
                                עירונית:
                                יעדים או יעדי ביניים
                                שמחוץ לה – באותיות
                                לבנות על רקע כחול.
                                יעדים או יעדי ביניים
                                בתחומה – באותיות
                                לבנות על רקע ירוק.
                                אתרי תיירות – באותיות
                                לבנות על רקע חום.  `
                            },
                        ],
                        "617" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/617.png`,
                                content: `מורה דרך בצומת או במחלף: בהכוונה לדרך מהירה – באותיות בצבע לבן על רקע כחול. בהכוונה לדרכים אחרות- באותיות שחורות על רקע לבן. בהכוונה לאתר תיירותי – באותיות לבנות על רקע חום.
                                `
                            },
                        ],
                        "618" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/618.png`,
                                content: `כביש חד סטרי:
                                כניסה לקטע כביש שבו
                                התנועה מותרת רק בכוון
                                המסומן בחץ.  `
                            },
                        ],
                        "619" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/619.png`,
                                content: `שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וגדל, מימין או
                                משמאל, בהתאמה. `
                            },
                        ],
                        "620" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/620.png`,
                                content: `שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וגדל, מימין או
                                משמאל, בהתאמה. `
                            },
                        ],
                        "621" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/621.png`,
                                content: `שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וקטן, מימין או
                                משמאל, בהתאמה.`
                            },
                        ],
                        "622" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/622.png`,
                                content: `שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וקטן, מימין או
                                משמאל, בהתאמה. `
                            },
                        ],
                        "623" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/623.png`,
                                content: `כביש ללא מוצא. `
                            },
                        ],
                        "624" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/624.png`,
                                content: `כביש ללא מוצא מימין
                                או משמאל, בהתאמה.  `
                            },
                        ],
                        "625" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/625.png`,
                                content: `כביש ללא מוצא מימין
                                או משמאל, בהתאמה. `
                            },
                        ],
                        "626" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/626.png`,
                                content: `חניה לכלי רכב, זולת –
                                )1 )בתחנת אוטובוסים
                                ציבוריים או
                                בתחנת רכבת
                                מקומית שסומנו
                                בתמרורים 505 או
                                506 ,בהתאמה;
                                )2 )אם נאסרה החניה
                                על פי תמרור 507 ,
                                 ,511 ,510 ,509
                                 או 818 ,513 ,512
                                 ;820
                                צוין סוג כלי רכב מתחת
                                לתמרור- חניה לכלי רכב
                                מהסוג המצויין בלבד.`
                            },
                        ],
                        "627" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/627.png`,
                                content: `מותרת ה חניה על
                                המדרכה לרכב שמשקלו
                                הכולל המותר עד 2200
                                ק"ג, בהתאם למסומן
                                ובלי לחסום את המעבר
                                ברוחב סביר להולכי רגל
                                ולכסא גלגלים לנכה,
                                זולת –
                                )1 )בתחנת אוטובוסים
                                ציבוריים או
                                בתחנת רכבת
                                מקומית שסומנו
                                בתמרורים 505 או
                                506 ,בהתאמה;
                                )2 )אם נאסרה החניה
                                על פי תמרור 507 ,
                                 ,511 ,510 ,509
                                 או 818 ,513 ,512
                                 . `
                            },
                        ],
                        "628" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/628.png`,
                                content: `קצה המקום או הקטע
                                המותר לחניה על
                                הכביש, או על המדרכה,
                                על פי תמרור 626 או
                                 .627 `
                            },
                        ],
                        "629" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/629.png`,
                                content: `תמרור לאזהרה או
                                להודעה רק למסר
                                שלגביו אין תמרור בלוח
                                התמרורים.
                                הוצב התמרור מתחת
                                ובצמוד לתמרור אחר-
                                יחול האמור בו בתוספת
                                לתמרור שמעליו ובצמוד
                                לו.  `
                            },
                        ],
                        "629פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/629p.png`,
                                content: `תמרור לאזהרה או
                                להודעה רק למסר
                                שלגביו אין תמרור בלוח
                                התמרורים.
                                הוצב התמרור מתחת
                                ובצמוד לתמרור אחר-
                                יחול האמור בו בתוספת
                                לתמרור שמעליו ובצמוד
                                לו. `
                            },
                        ],
                        "630" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/630.png`,
                                content: `במרחק הנקוב במטרים, יחול האמור בתמרור שמעליו או בתוכו הוצב. 
                                `
                            },
                        ],
                        "631" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/631.png`,
                                content: `לאורך הקטע שלפניך במטרים, יחול האמור בתמרור שמעליו. 
                                `
                            },
                        ],
                        "632" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/632.png`,
                                content: `המסר בתמרור שמעליו מיועד לפונה בכוון החץ
                                `
                            },
                        ],
                        "633" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/633.png`,
                                content: `מנהרה`
                            },
                        ],
                        "634" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/634.png`,
                                content: `קצה המנהרה`
                            },
                        ],
                        "635" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/635.png`,
                                content: ` סכנת שריפות. `
                            },
                        ],
                        "636" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/636.png`,
                                content: `כביש חד סטרי לרכב
                                מנועי:
                                לאופניים, כהגדרתם
                                בסעיף 1 להודעה זו,
                                מותרת הנסיעה גם בכוון
                                הנגדי. `
                            },
                        ],
                        "637" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/637.png`,
                                content: `מפרץ לעצירה במצב חירום. `
                            },
                        ],
                    },
                    "רמזורים ובקרת נתיבים": {
                        "701" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/701.png`,
                                content: `אור אדום:
                                עצור!
                                הוצב תמרור הוריה
                                בצורת חץ או חצים מעל
                                הרמזור, יחול האמור בו
                                על התנועות המסומנות
                                בתמרור.
                                סומן קו עצירה – עצור
                                לפני קו העצירה,
                                סומן מעבר חציה – עצור
                                לפני מעבר החציה,
                                לא סומן קו עצירה או
                                מעבר חציה – עצור
                                בסמוך לרמזור הקרוב.
                                אסור לעבור את קו
                                העצירה או את מעבר
                                החציה או להיכנס
                                לצומת כל עוד האור
                                האדום דולק.`
                            },
                        ],
                        "702" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/702.png`,
                                content: `אור אדום ואור צהוב
                                יחד:
                                עצור כאמור ב-701 עד
                                להופעת אור ירוק.
                                אסור לעבור את קו
                                העצירה או את מעבר
                                החצייה או להיכנס
                                לצומת כל עוד האור
                                האדום והאור הצהוב
                                דולקים יחד.
                                היכון לנסיעה עם
                                התחלף האור. `
                            },
                        ],
                        "703" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/703.png`,
                                content: `אור ירוק:
                                התקדם.
                                מותר לנסוע ישר, ימינה,
                                שמאלה או פרסה אלא
                                אם תמרור הוריה
                                המורכב מעל לרמזור
                                מורה אחרת.
                                אם מופיע אור ירוק
                                מהבהב – האור הירוק
                                מסתיים ועומד להופיע
                                האור הצהוב 705 .
                                בחירת הנתיבים תהיה
                                על פי המסומן על ידי
                                סימון 813 או 926 .`
                            },
                        ],
                        "704" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/704.png`,
                                content: `חץ ירוק לכלי רכב:
                                התקדם.
                                מותר לנסוע רק בכיוון
                                המסומן על ידי החץ.
                                פנית פרסה מותרת בכוון
                                החץ אלא אם הדבר
                                נאסר על ידי תמרור
                                אחר. אם מופיע אור
                                ירוק מהבהב – האור
                                הירוק מסתיים ועומד
                                להופיע האור הצהוב
                                 .705
                                בחירת הנתיבים תהיה
                                על פי המסומן על ידי
                                תמרור 813 או 926 .`
                            },
                        ],
                        "705" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/705.png`,
                                content: `אור צהוב:
                                עצור כאמור ב-701.
                                אם אינך יכול לעצור
                                לפני הצומת בבטחה או
                                שנכנסת אליו, השלם את
                                מעבר הצומת ופנהו מיד
                                כאמור ב-703 או 704.`
                            },
                        ],
                        "706" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/706.png`,
                                content: `אור צהוב מהבהב:
                                התקדם בזהירות תוך
                                שמירת הוראות כל דין,
                                בחירת הנתיבים תהיה
                                על פי המסומן על ידי
                                סימון
                                813 או 926 .הוצב
                                הרמזור ליד מעבר חציה
                                להולכי רגל או לרוכבי
                                אופנים -תן להולך הרגל
                                או לרוכב האופניים
                                לחצות בבטחה את
                                הכביש. לעניין זה,
                                "אופניים" – כהגדרתם
                                בסעיף 1 להודעה זו;`
                            },
                        ],
                        "707" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/707.png`,
                                content: `אור צהוב מהבהב:
                                התקדם בזהירות תוך
                                שמירת הוראות כל דין,
                                בחירת הנתיבים תהיה
                                על פי המסומן על ידי
                                סימון
                                813 או 926 .הוצב
                                הרמזור ליד מעבר חציה
                                להולכי רגל או לרוכבי
                                אופנים -תן להולך הרגל
                                או לרוכב האופניים
                                לחצות בבטחה את
                                הכביש. לעניין זה,
                                "אופניים" – כהגדרתם
                                בסעיף 1 להודעה זו;`
                            },
                        ],
                        "708" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/708.png`,
                                content: `אור לבן מלבני אופקי:
                                עצור!
                                סומן קו עצירה – עצור
                                לפני קו העצירה, סומן
                                מעבר חציה – עצור לפני
                                מעבר החצייה, לא סומן
                                קו עצירה או מעבר חציה
                                – עצור בסמוך לרמזור
                                הקרוב, אסור לעבור את
                                קו העצירה או את מעבר
                                החצייה או להיכנס
                                לצומת כל עוד האור
                                הלבן המלבני האופקי
                                בפנס העליון דולק.  `
                            },
                        ],
                        "709" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/709.png`,
                                content: `אור לבן מלבני אופקי
                                ואור לבן עגול יחד:
                                עצור כאמור ב-708 עד
                                להופעת האור הלבן
                                האנכי או המוטה.
                                אסור לעבור את קו
                                העצירה או את מעבר
                                החצייה או להיכנס
                                לצומת כל עוד האור
                                הלבן המלבני האופקי
                                והאור הלבן העגול
                                דולקים יחד.
                                היכון לנסיעה עם
                                התחלף האות. `
                            },
                        ],
                        "710" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/710.png`,
                                content: `אור לבן מלבני אנכי:
                                התקדם.
                                סע ישר. אם האור
                                מהבהב – האות מסתיים
                                ועומד להופיע האות
                                 .716 `
                            },
                        ],
                        "711" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/711.png`,
                                content: `אור לבן מלבני מוטה:
                                התקדם.
                                סע ימינה או שמאלה,
                                בהתאמה לכוון הנטיה
                                של קצהו העליון של
                                האור הלבן המלבני.
                                פנית פרסה מותרת בכוון
                                הנטיה אלא אם הדבר
                                נאסר על ידי תמרור
                                אחר.
                                אם האור מהבהב –
                                האות מסתיים ועומד
                                להופיע האות 716 `
                            },
                        ],
                        "712" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/712.png`,
                                content: `אור לבן מלבני מוטה:
                                התקדם.
                                סע ימינה או שמאלה,
                                בהתאמה לכוון הנטיה
                                של קצהו העליון של
                                האור הלבן המלבני.
                                פנית פרסה מותרת בכוון
                                הנטיה אלא אם הדבר
                                נאסר על ידי תמרור
                                אחר.
                                אם האור מהבהב –
                                האות מסתיים ועומד
                                להופיע האות 716 `
                            },
                        ],
                        "712" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/712.png`,
                                content: `אור לבן מלבני מוטה:
                                התקדם.
                                סע ימינה או שמאלה,
                                בהתאמה לכוון הנטיה
                                של קצהו העליון של
                                האור הלבן המלבני.
                                פנית פרסה מותרת בכוון
                                הנטיה אלא אם הדבר
                                נאסר על ידי תמרור
                                אחר.
                                אם האור מהבהב –
                                האות מסתיים ועומד
                                להופיע האות 716 .`
                            },
                        ],
                        "713" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/713.png`,
                                content: `אור לבן מלבני אנכי
                                ואור לבן מלבני מוטה:
                                התקדם.
                                סע ישר או ימינה, או
                                ישר או שמאלה, לכוון
                                הנטיה של קצהו העליון
                                של האור הלבן המלבני
                                המוטה, בהתאמה.
                                פנית פרסה מ ותרת בכוון
                                הנטיה אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                אם האור מהבהב –
                                האות מסתיים ועומד
                                להופיע האות 716 `
                            },
                        ],
                        "714" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/714.png`,
                                content: `אור לבן מלבני אנכי
                                ואור לבן מלבני מוטה:
                                התקדם.
                                סע ישר או ימינה, או
                                ישר או שמאלה, לכוון
                                הנטיה של קצהו העליון
                                של האור הלבן המלבני
                                המוטה, בהתאמה.
                                פנית פרסה מ ותרת בכוון
                                הנטיה אלא אם הדבר
                                נאסר ע"י תמרור אחר.
                                אם האור מהבהב –
                                האות מסתיים ועומד
                                להופיע האות 716  `
                            },
                        ],
                        "715" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/715.png`,
                                content: `אור לבן מלבני אנכי
                                ואורות לבנים מלבניים
                                מוטים:
                                התקדם.
                                סע ישר, ימינה או
                                שמאלה, פנית פרסה
                                מותרת אלא אם הדבר
                                נאסר בתמרור אחר.
                                אם האור מהבהב –
                                האות מסתיים ועומד
                                להופיע האות 716 . `
                            },
                        ],
                        "716" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/716.png`,
                                content: `אור לבן עגול:
                                עצור כאמור
                                ב-708 .
                                אם אינך יכול לעצור
                                לפני הצומת בבטחה, או
                                נכנסת אליו, השלם את
                                מעבר הצומת ופנהו מיד
                                כאמור
                                 ,713 ,712 ,711 ,710– ב
                                 .715 או, 714 `
                            },
                        ],
                        "717" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/717.png`,
                                content: `אור לבן מהבהב:
                                התקדם בזהירות תוך
                                 שמירת הוראות כל דין. `
                            },
                        ],
                        "718" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/718.png`,
                                content: `דמות הולך רגל עומד
                                בצבע אדום:
                                אל תתחיל בחציית
                                הכביש ואם אתה נ מצא
                                בכביש פנהו מיד. `
                            },
                        ],
                        "719" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/719.png`,
                                content: `דמות הולך רגל בצבע
                                ירוק: מותר לחצות את
                                הכביש בזהירות. `
                            },
                        ],
                        "720" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/721.png`,
                                content: `צורת אופניים בצבע
                                אדום:
                                אל תתחיל בחציית
                                הכביש ואם אתה נמצא
                                בכביש פנהו מיד. `
                            },
                        ],
                        "721" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/721.png`,
                                content: `צורת אופ ניים בצבע
                                ירוק:
                                מותר לחצות את הכביש
                                בזהירות.  `
                            },
                        ],
                        "722" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/722.png`,
                                content: `אור אדום מהבהב כפול
                                לפני מפגש מסילת ברזל:
                                עצור לפני קו העצירה,
                                באין קו עצירה, עצור
                                לפני המחסום הקרוב
                                )תמרור 404 )ובאין
                                מחסום, במרחק 4 מ'
                                לפחות מפס המסילה
                                הקרוב. אסור לחצות את
                                המסילה עד להפסקת
                                האור האדום המהבהב
                                הכפול ועלית המחסום.
                                אם אינך יכול לעצור
                                בבטחה לפני המפגש
                                כמפורט לעיל או נכנסת
                                אליו, השלם את מעבר
                                המפגש ופנהו מיד. `
                            },
                        ],
                        "723" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/723.png`,
                                content: `נתיב סגור:
                                אסור לנסוע בנתיב
                                שמעליו הוצב תמרור זה,
                                ממקום הצבת התמרור
                                ועד תמרור 426פ או 724
                                או 724פ או עד הצומת
                                הקרוב. `
                            },
                        ],
                        "723פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/723p.png`,
                                content: `נתיב סגור:
                                אסור לנסוע בנתיב
                                שמעליו הוצב תמרור זה,
                                ממקום הצבת התמרור
                                ועד תמרור 426פ או 724
                                או 724פ או עד הצומת
                                הקרוב. `
                            },
                        ],
                        "724" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/724.png`,
                                content: `נתיב פתוח:
                                מותר לנסוע בנתיב
                                שמעליו הוצב תמרור זה.  `
                            },
                        ],
                        "724פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/724p.png`,
                                content: `נתיב פתוח:
                                מותר לנסוע בנתיב
                                שמעליו הוצב תמרור זה.  `
                            },
                        ],
                        "725" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/725.png`,
                                content: `מעבר לנתיב סמוך:
                                השתלב בתנועה שבנתיב
                                הסמוך לנתיב שמעליו
                                הוצב התמרור מימין או
                                משמאל, בהתאמה,
                                כאשר תנאי התנועה
                                מאפשרים זאת. `
                            },
                        ],
                        "725פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/725p.png`,
                                content: `מעבר לנתיב סמוך:
                                השתלב בתנועה שבנתיב
                                הסמוך לנתיב שמעליו
                                הוצב התמרור מימין או
                                משמאל, בהתאמה,
                                כאשר תנאי התנועה
                                מאפשרים זאת. `
                            },
                        ],
                        "726" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/726.png`,
                                content: `נתיב יציאה:
                                ליציאה מן הכביש סע
                                בנתיב שמעליו הוצב
                                תמרור זה. `
                            },
                        ],
                        "726פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/726p.png`,
                                content: `נתיב יציאה:
                                ליציאה מן הכביש סע
                                בנתיב שמעליו הוצב
                                תמרור זה. `
                            },
                        ],
                        "727" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/727.png`,
                                content: `אור אדום; עצור !
                                הוצב תמרור הוריה
                                בצורת חץ או חצים מעל
                                הרמזור, יחול האמור בו
                                על התנועות המסומנות
                                בתמרור;
                                סומן קו עצירה – עצור
                                לפני קו העצירה;
                                סומן מעבר חציה – עצור
                                לפני מעבר החציה;
                                לא סומן קו עצירה או
                                מעבר חציה – עצור
                                בסמוך לרמזור הקרוב;
                                אסור לעבור את קו
                                העצירה או את מעבר
                                החציה או להיכנס
                                לצומת כל עוד האור
                                האדום דולק.  `
                            },
                        ],
                        "728" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/728.png`,
                                content: `אור ירוק – התקדם;
                                מותר לנסוע ישר, ימינה,
                                שמאלה או פרסה, א לא
                                אם כן תמרור הוריה
                                המורכב מעל הרמזור
                                מורה אחרת. `
                            },
                        ],
                        "729" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/729.png`,
                                content: `אור צהוב; עצור כאמור
                                בתמרור 727 ;
                                אם אינך יכול לעצור
                                לפני הצומת בבטחה או
                                שנכנסת אליו, השלם את
                                מעבר הצומת ופנהו מיד
                                כאמור בתמרור 728. `
                            },
                        ],
                        
                
                    },
                    "סימון על פני הדרך": {
                        "801" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/801.png`,
                                content: `קו נתיב או קו ציר הכביש - קו קטעים בצבע
                                לבן:
                                נהג בנתיב הימני ביותר, אל תעבור את הקו
                                בגוף הרכב או בחלקו, אלא לשם עקיפה או
                                לשם בצוע הוראות כל דין אחר ותוך שמירת
                                הוראות כל דין.`
                            },
                        ],
                        "802" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/802.png`,
                                content: `כביש או נתיב מתחלף - קו קטעים כפול בצבע
                                לבן:
                                אל תיסע בנתיב זה, אלא אם הוצב מעליו
                                תמרור 201 עד 203 ,206 עד 212 או 724 עד
                                724פ. `
                            },
                        ],
                        "803" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/803.png`,
                                content: `קו הפרדה רצוף כפול בצבע לבן:
                                נהג בצידם הימני של הקוים, אל תעבור את
                                 הקוים בגוף הרכב או בחלקו.`
                            },
                        ],
                        "804" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/804.png`,
                                content: `שביל או נתיב המיועד לאופניים, כהגדרתם
                                בסעיף 1 להודעה זו; סע בכוון החץ בלבד`
                            },
                        ],
                        "805" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/805.png`,
                                content: `קו קטעים צפוף בצבע לבן - אזהרה לפני הופעת
                                קו הפרדה רצוף כפול:
                                עבור לנתיב הימני לפני התחלת קו ההפרדה
                                הרצוף הכפול `
                            },
                        ],
                        "806" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/806.png`,
                                content: `קו קטעים ליד קו רצוף בצבע לבן:
                                מותר לעבור את הקוים, אם קו הקטעים הוא
                                מצידו הימני של הקו הרצוף, והדרך פנויה.  `
                            },
                        ],
                        "807" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/807.png`,
                                content: `קו רצוף בצבע צהוב:
                                קו שפת הכביש, במקום שאין בו אבני שפה,
                                נהג בצידו השמאלי של הקו ואל תעבור לצידו
                                הימני אלא כדי למנוע תאונה או עיכוב לתנועה
                                כשאתה נוסע לאט, או לשמירת הוראות כל
                                דין.`
                            },
                        ],
                        "808" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/808.png`,
                                content: `קו מלבנים בצבע לבן:
                                נתיב לפניה בלעדית ימינה או שמאלה, או נתיב
                                האצה, האטה או השתזרות או נתיב המשנה
                                את ייעודו. סע בהתאם לייעוד הנתיב. `
                            },
                        ],
                        "809" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/809.png`,
                                content: `קו קטעים בצבע לבן – פניה בצומת:
                                לפניה, סע במקביל לקו הקטעים.
                                פנית פרסה מותרת אלא אם הדבר נאסר על ידי
                                תמרור אחר.`
                            },
                        ],
                        "810" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/810.png`,
                                content: `קו עצירה – קו לבן לרוחב הנתיב:
                                מקום עצירת הרכב או בעל החיים, לפני הקו
                                וסמוך לו, כאשר יש חובת עצירה.`
                            },
                        ],
                        "811" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/811.png`,
                                content: `מעבר חציה להולכי רגל:
                                חולק מעבר חציה רחב לשניים, חצה בחצי
                                הימני של מעבר החציה `
                            },
                        ],
                        "812" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/812.png`,
                                content: `מעבר חציה לאופניים, כהגדרתם בסעיף 1
                               להודעה זו; `
                            },
                        ],
                        "813" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/813.png`,
                                content: `כווני הנסיעה המותרים בנתיב - חצים על פני
                                הדרך בצבע לבן:
                                היכנס לצומת ועבור בו רק בכוון החץ שסומן
                                בנתיב שממנו נכנסת לצומת.  `
                            },
                        ],
                        "814" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/814.png`,
                                content: `נתיב נסיעה העומד להסתיים - חצים
                                אלכסוניים בצבע לבן:
                                 עבור לנתיב הסמוך בכוון החץ`
                            },
                        ],
                        "815" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/815.png`,
                                content: `איי תנועה )בצורות שונות(, מסומנים על
                                    הכביש בצבע לבן:
                                    אסור לעבור, לעצור או לחנות עליהם. `
                            },
                        ],
                        "816" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/816.png`,
                                content: `אבני שפה צבועות שחור-לבן:
                                להבלטה והדגשה של מדרכות, מפרדות ואיי
                                תנועה בנויים. `
                            },
                        ],
                        "817" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/817.png`,
                                content: `אבני שפה צבועות לסירוגין בצבע כחול:
                                החנייה מותרת בתשלום על הכביש שליד אבני
                                השפה או על המדרכה על פי הוראות תמרור
                                439 בצמוד ומתחת לתמרורים 626 או 627.`
                            },
                        ],
                        "818" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/818.png`,
                                content: `אבני שפה צבועות אדום -לבן:
                                אסורה כל עצירה או חניה של רכב בכביש שליד
                                אבני השפה, אלא אם הדבר דרוש למילוי
                                הוראות כל די ן. `
                            },
                        ],
                        "819" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/819.png`,
                                content: `מקומות חניה לכלי רכב מסומנים בצבע לבן:
                                החניה במקום תהיה רק בתחומי השטח
                                המסומן על פני הדרך. הוצב תמרור 627 וסומן
                                שטח על המדרכה, מותר לרכב פרטי, פרטי דו -
                                שימושי ומסחרי שמשקלו הכולל המותר הוא
                                עד 2200 ק"ג, לחנות על המדרכה בתחום
                                השטח המסומן על פניה, מבלי לחסום את
                                המעבר להולכי רגל ולכסא גלגלים לנכים. `
                            },
                        ],
                        "820" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/820.png`,
                                content: `מקום אסור לחניה מסומן בצבע לבן:
                                אסורה חניה בתוך השטח המסומן. `
                            },
                        ],
                        "821" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/821.png`,
                                content: ` מקום פס האטה.  `
                            },
                        ],
                    },
                    "תמרורים באתר עבודה": {
                        "901" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/901.png`,
                                content: `אתר עבודה בדרך.
                                סע על פי הסימון בצבע
                                כתום, אם סומן. `
                            },
                        ],
                        "901פ" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/901p.png`,
                                content: ` אתר עבודה בדרך.
                                סע על פי הסימון בצבע
                                כתום, אם סומן. `
                            },
                        ],
                        "902" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/902.png`,
                                content: ` קצה אתר עבודה וכל
                                ההגבלות והאיסורים
                                בתוכו. `
                            },
                        ],
                        "903" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/903.png`,
                                content: `אזהרה והדרכה בעקומה
                                חדה:
                                האט וה משך רק בכוון
                                המסומ ן בחצים שעל
                                התמרור, עבור לפני
                                התמרור.  `
                            },
                        ],
                        "904" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/90.png`,
                                content: ` אזהרה והדרכה בצומת
                                קמץ:
                                האט וה משך רק בכוונים
                                המסומ נים בחצים שעל
                                התמרור, עבור לפני
                                התמרור. `
                            },
                        ],
                        "905" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/905.png`,
                                content: ` הכביש הולך וצר. `
                            },
                        ],
                        "906" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/906.png`,
                                content: ` הכביש הולך וצר מצד
                                ימין או מצד שמאל,
                                בהתאמה.  `
                            },
                        ],
                        "907" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/907.png`,
                                content: ` הכביש הולך וצר מצד
                                ימין או מצד שמאל,
                                בהתאמה.  `
                            },
                        ],
                        "908" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/908.png`,
                                content: `מעבר צר או מכשול:
                                הוצב התמרור בצד אחד
                                של הדרך בלבד, פירושו
                                מכשול באותו צד של
                                הדרך.
                                הקוים האלכסוניים
                                מוטים מטה כלפי מרכז
                                הנתיב הסמוך. `
                            },
                        ],
                        "909" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/909.png`,
                                content: `תנועה
                                דו-סטרית.`
                            },
                        ],
                        "910" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/910.png`,
                                content: ` שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וגדל, מימין או
                                משמאל, בהתאמה.`
                            },
                        ],
                        "911" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/911.png`,
                                content: `שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וגדל, מימין או
                                משמאל, בהתאמה.`
                            },
                        ],
                        "912" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/912.png`,
                                content: `שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וקטן, מימין או
                                משמאל, בהתאמה. `
                            },
                        ],
                        "913" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/913.png`,
                                content: `שינוי במספר הנתיבים:
                                מספר הנתיבים בכביש
                                הולך וקטן, מימין או
                                משמאל, בהתאמה. `
                            },
                        ],
                        "914" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/914.png`,
                                content: `  מעקף. `
                            },
                        ],
                        "915" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/915.png`,
                                content: `תמרור לאזהרה,
                                להוריה,לאיסור או
                                להודעה רק למסר
                                שלגביו אין תמרור בלוח
                                התמרורים.
                                הוצב התמרור מתחת
                                ובצמוד לתמרור אחר –
                                יחול האמור בו בתוספת
                                לתמרור שמעליו ובצמוד
                                לו. `
                            },
                        ],
                        "916" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/916.png`,
                                content: `במרחק הנקוב במטרים,
                                יחול האמור בתמרור
                                שמעליו או בתוכו הוצב. `
                            },
                        ],
                        "917" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/917.png`,
                                content: `לאורך הקטע שלפניך
                                במטרים, יחול האמור
                                בתמרור שמעליו. `
                            },
                        ],
                        "918" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/918.png`,
                                content: `קו נתיב או קו ציר
                                הכביש – קו קטעים
                                בצבע כתום:
                                נהג בנתיב הימני ביותר
                                ואל תעבור את הקו בגוף
                                הרכב או בחלקו, אלא
                                לשם עקיפה או לשם
                                בצוע הוראות כל דין
                                אחר ותוך שמירת
                                הוראות כל דין. `
                            },
                        ],
                        "919" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/919.png`,
                                content: `כביש או נתיב מתחלף -
                                קו קטעים כפול בצבע
                                כתום:
                                הנסיעה בכביש או בנתיב
                                אסורה אלא אם הוצב
                                מעליו תמרור 201 עד
                                 724 או 212 עד 206 ,203
                                עד 724פ. `
                            },
                        ],
                        "920" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/920.png`,
                                content: `קו הפרדה רצוף כפול
                                בצבע כתום:
                                נהג בצידם הימני של
                                הקוים, אל תעבור את
                                הקוים בגוף הרכב או
                                בחלקו.  `
                            },
                        ],
                        "921" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/921.png`,
                                content: ` קו קטעים צפוף בצבע
                                כתום -
                                אזהרה לפני הופעת קו
                                הפרדה רצוף כפול:
                                עבור לנתיב הימני לפני
                                התחלת קו ה הפרדה
                                הרצוף הכפול. `
                            },
                        ],
                        "922" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/922.png`,
                                content: `קו קטעים ליד קו רצוף
                                בצבע כתום:
                                מותר לעבור את הקוים,
                                אם קו הקטעים הוא
                                מצידו הימני של קו
                                ההפרדה הרצוף, והדרך
                                פנויה.`
                            },
                        ],
                        "923" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/923.png`,
                                content: `קו מלבנים בצבע כתום:
                                נתיב לפניה בלעדית
                                ימינה או שמאלה, או
                                נתיב האצה, האטה או
                                השתזרות, או נתיב
                                המשנה את ייעודו.
                                סע בהתאם ליעוד
                                הנתיב. `
                            },
                        ],
                        "924" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/924.png`,
                                content: `קו קטעים בצבע כתום –
                                פניה בצומת:
                                סע במקביל לקו
                                הקטעים.
                                פנית פרסה מותרת אלא
                                אם הדבר נאסר על ידי
                                תמרור אחר.`
                            },
                        ],
                        "925" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/925.png`,
                                content: `קו עצירה –קו כתום
                                לרוחב הנתיב:
                                מקום עצירת הרכב או
                                בעל החיים, לפני הקו
                                וסמוך לו, כאשר יש
                                חובת עצירה. `
                            },
                        ],
                        "926" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/926.png`,
                                content: `כווני הנסיעה המותרים
                                בנתיב - חצים על פני
                                הדרך בצבע כתום, עם
                                ובלי חצים בצבע לבן:
                                הכנס לצומת ועבור בו
                                רק בכוון החץ שסומן
                                בנתיב שממנו נכנסת
                                לצומת.
                                חצים בצבע לבן מורים
                                על כווני הנסיעה שמחוץ
                                לאתר העבודה. `
                            },
                        ],
                        "927" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/927.png`,
                                content: `נתיב נסיעה העומד
                                להסתיים - חצים
                                אלכסוניים בצבע כתום:
                                עבור לנתיב הסמוך בכוון
                                החץ.`
                            },
                        ],
                        "928" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/928.png`,
                                content: `איי תנועה )בצורות
                                שונות(, מסומנים על
                                הכביש בצבע כתום:
                                אסור לעבור, לעצור או
                                לחנות עליהם.`
                            },
                        ],
                        "929" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/929.png`,
                                content: `מחסום:
                                הדרך חסומה.
                                הוצב תמרור המורה על
                                כוון, מותר להתקדם רק
                                בכוון המצוין בתמרור.`
                            },
                        ],
                        "930" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/930.png`,
                                content: `עמודי הכוונה, בצד
                                הכביש:
                                הקוים האלכסוניים
                                מוטים למטה כלפי מרכז
                                הנתיב הסמוך. `
                            },
                        ],
                        "931" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/931.png`,
                                content: `חרוט להכוונה או
                                לסימון מכשול:
                                סע על פי אופן הצבת
                                החרוטים.
                                אסור לעלות על המכשול
                                המסומן בחרוט.`
                            },
                        ],
                        "932" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/932.png`,
                                content: `פנס מהבהב בצבע כתום
                                 לסימון, איתות ואזהרה.  `
                            },
                        ],
                        "933" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/933.png`,
                                content: ` לוח נייד מהבהב:
                                איתות, אזהרה והכוונה. `
                            },
                        ],
                        "934" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/934.png`,
                                content: `לוח נייד מהבהב:
                                הכביש סגור. `
                            },
                        ],
                        "935" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/935.png`,
                                content: `מפרץ לעצירה במצב חירום באתר עבודה. `
                            },
                        ],
                    },
                    "סמלים": {
                        "ס-4" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/4.png`,
                                content: `מרכז האזור, העיר, המקום. `
                            },
                        ],
                        "ס-5" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/5.png`,
                                content: ` כביש או נתיב אגרה.  `
                            },
                        ],
                        "ס-6" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/6.png`,
                                content: `מעבר עילי להולכי רגל )עם מדרגות(.  `
                            },
                        ],
                        "ס-7" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/7.png`,
                                content: `מעבר עילי להולכי רגל )עם כבש(. `
                            },
                        ],
                        "ס-8" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/8.png`,
                                content: `מעבר תחתי להולכי רגל )עם מדרגות(.  `
                            },
                        ],
                        "ס-9" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/9.png`,
                                content: `מעבר תחתי להולכי רגל )עם כבש(.`
                            },
                        ],
                        "ס-10" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/10.png`,
                                content: `הולכי רגל.`
                            },
                        ],
                        "ס-11" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/11.png`,
                                content: `לחצן הולכי רגל לצורך חציה. `
                            },
                        ],
                        "ס-12" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/12.png`,
                                content: ` נגישות לנכים. `
                            },
                        ],
                        "ס-13" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/13.png`,
                                content: `מצלמה למטרות אכיפה. `
                            },
                        ],
                        "ס-14" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/14.png`,
                                content: `גרירת רכב.`
                            },
                        ],
                        "15-ס" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/15.png`,
                                content: `יחידת משטרה `
                            },
                        ],
                        "ס-16" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/16.png`,
                                content: `מנהרה  `
                            },
                        ],
                        "ס-17" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/17.png`,
                                content: `מעבר גבול.`
                            },
                        ],
                        "ס-20" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/20.png`,
                                content: `מחלף`
                            },
                        ],
                        "ס-21" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/21.png`,
                                content: `צומת הצטלבות  `
                            },
                        ],
                        "ס-22" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/22.png`,
                                content: `צומת קמץ ימינה `
                            },
                        ],
                        "ס-23" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/23.png`,
                                content: `צומת קמץ שמאלה `
                            },
                        ],
                        "ס-24" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/24.png`,
                                content: `צומת קמץ  `
                            },
                        ],
                        "ס-25" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/25.png`,
                                content: `צומת קמץ ימינה ואחר כך שמאלה  `
                            },
                        ],
                        "ס-26" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/26.png`,
                                content: `צומת קמץ שמאלה ואחר כך ימינה  `
                            },
                        ],
                        "ס-27" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/27.png`,
                                content: `צומת קמץ לפנים ואחר כך משמאל `
                            },
                        ],
                        "ס-28" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/28.png`,
                                content: `צומת קמץ לפנים ואחר כך מימין `
                            },
                        ],
                        "ס-29" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/29.png`,
                                content: `מעגל תנועה `
                            },
                        ],
                        "ס-30" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/30.png`,
                                content: `תחנת תידלוק.`
                            },
                        ],
                        "ס-31" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/31.png`,
                                content: `פתוח 24 שעות `
                            },
                        ],
                        "ס-32" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/32.png`,
                                content: `דלק, שרות עצמי.`
                            },
                        ],
                        "ס-33" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/33.png`,
                                content: `תיקון תקרים. `
                            },
                        ],
                        "ס-34" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/34.png`,
                                content: `מוסך, תיקוני דרך, סיכה.`
                            },
                        ],
                        "ס-35" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/35.png`,
                                content: `רחיצת רכב. `
                            },
                        ],
                
                        "ס-36" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/36.png`,
                                content: `דלקן – דלק. `
                            },
                        ],
                        "ס-37" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/37.png`,
                                content: ` פזומט.  `
                            },
                        ],
                
                        "ס-38" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/38.png`,
                                content: `ספידומט.`
                            },
                        ],
                        "ס-39" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/39.png`,
                                content: `דלקן – סונול. `
                            },
                        ],
                
                        "ס-40" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/40.png`,
                                content: `שדה תעופה. `
                            },
                        ],
                        "ס-41" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/41.png`,
                                content: `נמל.`
                            },
                        ],
                
                        "ס-42" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/42.png`,
                                content: `רכבת.`
                            },
                        ],
                        "ס-43" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/43.png`,
                                content: `רכבת מקומית. `
                            },
                        ],
                        "ס-44" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/44.png`,
                                content: `אוטובוס. `
                            },
                        ],
                
                        "ס-45" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/45.png`,
                                content: `מונית. `
                            },
                        ],
                        "ס-46" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/46.png`,
                                content: `רכב פרטי `
                            },
                        ],
                
                        "ס-47" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/47.png`,
                                content: `משאית. `
                            },
                        ],
                        "ס-48" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/48.png`,
                                content: `אופנוע. `
                            },
                        ],
                        "ס-49" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/49.png`,
                                content: `אופניים, כהדרתם בסעיף 1 להודעה זו.`
                            },
                        ],
                
                        "ס-50" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/50.png`,
                                content: `רכבל `
                            },
                        ],
                        "ס-51" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/51.png`,
                                content: ` חניה.  `
                            },
                        ],
                        "ס-52" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/52.png`,
                                content: `חניה מקורה. `
                            },
                        ],
                        "ס-53" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/53.png`,
                                content: ` חנה וסע. `
                            },
                        ],
                
                        "ס-54" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/54.png`,
                                content: `מסוף מטענים.`
                            },
                        ],
                        "ס-55" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/55.png`,
                                content: ` אזור תעשיה. `
                            },
                        ],
                
                        "ס-56" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/56.png`,
                                content: `מסוף לטיסות נוחתות.  `
                            },
                        ],
                        "ס-57" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/57.png`,
                                content: `מסוף לטיסות ממריאות. `
                            },
                        ],
                        "ס-58" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/58.png`,
                                content: `בית חולים ללא חדר מיון. `
                            },
                        ],
                
                        "ס-59" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/59.png`,
                                content: ` בית חולים עם חדר מיון כללי `
                            },
                        ],
                
                        "ס-60" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/60.png`,
                                content: ` עזרה ראשונה`
                            },
                        ],
                        "ס-61" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/61.png`,
                                content: `טלפון`
                            },
                        ],
                
                        "ס-62" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/62.png`,
                                content: `מסעדה `
                            },
                        ],
                        "ס-63" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/63.png`,
                                content: `בית קפה/מזנון.`
                            },
                        ],
                        "ס-64" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/64.png`,
                                content: `קוי תחבורה ציבורית בשעות הלילה. `
                            },
                        ],
                        "ס-65" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/65.png`,
                                content: `השכרת רכב. `
                            },
                        ],
                        "ס-66" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/66.png`,
                                content: `אזור מנוחה.`
                            },
                        ],
                        "ס-67" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/67.png`,
                                content: ` מקום להעלאה ולהורדת נוסעים.  `
                            },
                        ],
                        "ס-68" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/68.png`,
                                content: `עמדת תשלום.  `
                            },
                        ],
                        "ס-69" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/69.png`,
                                content: ` מוסד אקדמי. `
                            },
                        ],
                        "ס-70" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/70.png`,
                                content: `עמדת מודיעין או תחנת מידע למטייל.`
                            },
                        ],
                        "ס-71" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/71.png`,
                                content: `מלון או בית הארח ה או כפר נופש.`
                            },
                        ],
                        "ס-72" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/72.png`,
                                content: ` אכסניה או אכסניית נוער. `
                            },
                        ],
                        "ס-73" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/73.png`,
                                content: `אתר מחנאות )קמפינג( או חניון לילה. `
                            },
                        ],
                        "ס-74" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/74.png`,
                                content: `חקלאות תיירותית. `
                            },
                        ],
                        "ס-75" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/75.png`,
                                content: `לינה כפרית. `
                            },
                        ],
                        "ס-80" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/80.png`,
                                content: `אתר תיירות.  `
                            },
                        ],
                        "ס-81" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/81.png`,
                                content: `אתר ארכיאולוגי או עתיקות .`
                            },
                        ],
                        "ס-82" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/82.png`,
                                content: `אתר קדוש ליהודים. `
                            },
                        ],
                        "ס-83" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/83.png`,
                                content: `אתר קדוש למוסלמים.`
                            },
                        ],
                        "ס-84" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/84.png`,
                                content: `אתר קדוש לדרוזים. `
                            },
                        ],
                        "ס-85" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/85.png`,
                                content: `אתר קדוש לנוצרים. `
                            },
                        ],
                        "ס-86" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/86.png`,
                                content: `מבנה או אזור בעל עניין היסטורי או
                                 אדריכלי.  `
                            },
                        ],
                        "ס-87" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/87.png`,
                                content: `אתר הנצחה. `
                            },
                        ],
                        "ס-88" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/88.png`,
                                content: ` מוזיאון. `
                            },
                        ],
                        "ס-89" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/89.png`,
                                content: `גלריה או סדנא לדברי אמנות יד. `
                            },
                        ],
                        "ס-90" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/90.png`,
                                content: `גן לאומי או שמורת טבע. `
                            },
                        ],
                        "ס-91" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/91.png`,
                                content: `שביל תנ"ך. `
                            },
                        ],
                        "ס-92" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/92.png`,
                                content: `אתר מורשת עולמית.  `
                            },
                        ],
                        "ס-93" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/93.png`,
                                content: `יקב.`
                            },
                        ],
                        "ס-100" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/100.png`,
                                content: `דרך מסומנת לטיול המיועדת לרכב 4X4
                                בלבד. `
                            },
                        ],
                        "ס-101" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/101s.png`,
                                content: `יער, חורש או פארק שהוכשר לביקורי
                                 מטיילים.`
                            },
                        ],
                        "ס-102" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/102s.png`,
                                content: `מרינה או מעגן מוסדר. `
                            },
                        ],
                        "ס-103" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/103s.png`,
                                content: `אתר מרחצאות מוסדר. `
                            },
                        ],
                        "ס-104" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/104s.png`,
                                content: `מצפה או נקודת תצפית נוף.  `
                            },
                        ],
                        "ס-105" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/105s.png`,
                                content: `אתר בילוי ואכילה בשטח פתוח. `
                            },
                        ],
                        "ס-106" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/106s.png`,
                                content: `טיולי ג'יפים.  `
                            },
                        ],
                        "ס-107" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/107s.png`,
                                content: ` מסלול הליכה מוסדר.  `
                            },
                        ],
                        "ס-108" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/108s.png`,
                                content: `מקום מוסדר לטיפוס הרים או גלישת חבל.  `
                            },
                        ],
                        "ס-109" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/109s.png`,
                                content: `חוות סוסים או שירותי רכיבה. `
                            },
                        ],
                        "ס-110" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/110s.png`,
                                content: `אתר מוסדר לדאייה בגלשן או מצנחי רחיפה.  `
                            },
                        ],
                        "ס-111" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/111s.png`,
                                content: `נחל `
                            },
                        ],
                        "ס-112" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/112s.png`,
                                content: `מקום מוסדר לדייג. `
                            },
                        ],
                        "ס-113" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/113s.png`,
                                content: `אתר צפרות. `
                            },
                        ],
                        "ס-114" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/114s.png`,
                                content: `גן חיות`
                            },
                        ],
                        "ס-115" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/115s.png`,
                                content: `חוף רחצה מוסדר. `
                            }                     
                          ],
                        "ס-116" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/116s.png`,
                                content: ` בריכת שחייה לרשות הציבור.`
                            },
                        ],
                        "ס-117" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/117s.png`,
                                content: `אתר ספורט ימי.  `
                            },
                        ],
                        "ס-118" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/118s.png`,
                                content: ` מסלול לרכיבה על אופני הרים. `
                            },
                        ],
                        "ס-119" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/119s.png`,
                                content: ` מרכז ספורט. `
                            },
                        ],
                        "ס-120" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/120s.png`,
                                content: `אתר גלישה.`
                            },
                        ],
                        "ס-130" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/130s.png`,
                                content: ` עמדת טעינה לרכב חשמלי `
                            },
                        ],
                        "ס-131" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/131s.png`,
                                content: `תחנת החלפת מצבר לרכב חשמלי `
                            },
                        ],
                        "ס-132" : [
                            {
                                cardType: `squarePicsAndText`,
                                pic: `../assets/images/signs/132s.png`,
                                content: ` תחנת טעינה והחלפת מצבר לרכב חשמלי `
                            },
                        ],
                
                    },
                }
            },
            //מצגת 1
            "הגדרת מושגים": {
                learningContent: {
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
                                תנועה <b>בניגוד</b> לכיוון בדרך חד סטרית מותרת רק על פי <b> הוראת שוטר </b>, או <b> לרכב ביטחון בתפקיד</b>.`
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
                        "צומת" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road9.png`,
                                content: `הגדרת הצומת מחריגה שורת מפגשים של כבישים עם משטחים סלולים אחרים, דוגמת התמזגויות, כניסה לחצרות ולתחנות דלק ועוד. <br>
                                הסיבה לכך – תקנות רבות, עליהן נדון בהמשך, מטילות על הנהג חובות רבות בעת התקרבו לצומת ובעוברו בו. <br>כל אלה לא יחולו באותם האזורים שלא יוגדרו כ"צומת", ומכאן חשיבותה של ההגדרה.`
                            },
                        ],
                        "מחלף" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road10.png`,
                                content: `<b>מפגש של שני כבישים שלא באותו מפלס.</b> <br>
                                כלומר מפגש דרכים במפלסים שונים הכולל את הדרכים המחברות בין המפגש.`
                            },
                        ],
                        "מפגש מסילת רכבת" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road11.png`,
                                content: `מקום <b>שדרך ומסילת ברזל חוצים זו את זו במפלס אחד </b> והוא מסומן בתמרור שנקבע לכך.` },
                        ],
                        "קו עצירה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road12.png`,
                                content: `קו לרוחב הכביש או בחלק מרוחבו, <b>המסמן גבול לשם עצירת רכב</b> סמוך לרמזור או לתמרור עצירה או לפני מפגש מסילת ברזל, או במקום שבו שוטר מכוון את התנועה.<br>
                                כלומר קו עצירה כשלעצמו, אינו מחייב עצירה. הוא מסמן לנהג היכן עליו לעצור, אם הוא נדרש לעשות כן, על פי <b> הוראה חוקית כלשהי </b> (כגון רמזור, תמרור וכו'). <br>
                                תמרור ייחשב "חוקי" ותקף אם הוצב כחוק, כלומר הצבתו אושרה על ידי רשות תמרור מרכזית , או רשות תמרור מקומית.`
                            },
                        ],
                        "אזור מיתון תנועה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road13.png`,
                                content: `אזור שבו המהירות המרבית המותרת <b> אינה </b> עולה על <b> 30 קמ"ש </b> והוא מסומן בתמרור 222 בכניסה ואליו ו – 223 ביציאה ממנו.`
                            },
                        ],
                        "רחוב משולב" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road14.png`,
                                content: `דרך המיועדת <b>למשחקי ילדים, להולכי רגל ולרכב </b>ואשר בכניסה אליה הוצב תמרור המורה על רחוב משולב. <br>
                                עקרונית, רצוי להימנע ככל האפשר מנהיגה ברחוב כזה. אולם אם לא ניתן להימנע מנהיגה בו, יש לנהוג באופן <b>שלא יגרם סיכון לעוברי הדרך בה ולא תופרע פעילותם</b> של עוברי הדרך והילדים המשחקים במקום. <br>
                                מהירות הנסיעה המרבית המותרת ברחוב משולב – <b>30 קמ"ש</b>.`
                            },
                        ],
                    },
                    "רכבים": {
                        "רכב מיושן" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road15.png`,
                                content: `רכב ישן, נקרא בלשון המחוקק "רכב מיושן", אולם לא כל רכב שהיה מכונה כך בלשון העם, יוגדר כזה על ידי המחוקק:
                                <br>
                                "<b>רכב מיושן</b>" –
                                <ol>
                                <b><li>רכב</b>, למעט טרקטור, גרור או אוטובוס, שבמועד חידוש רישיונו, <b>מלאו 19 שנים</b> משנת ייצורו. </li>
                                <li> <b>אוטובוס</b> שממועד חידוש רישיונו <b>מלאו 15 שנים</b> משנת ייצורו.
                                </li>
                                </ol>`
                            },
                        ],
                        "רכב שטח" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road16.png`,
                                content: `רכב מנועי המיועד לפני מבנהו לנוע <b>בדרכי עפר בלבד</b>, ומתקיימים בו אלה:
                                <ul>
                                <li> נע על <b>4 גלגלים לפחות</b>.
                                <li> נפח מנועו אינו עולה על 750 סמ"ק.
                                <li> משקלו העצמי <b>אינו</b> עולה על 750 ק"ג.
                                <li> ההיגוי שבו נעשה באמצעות <b>הגה</b>.
                                <li> הוא <b>צוין ברישיון הרכב כרכב שטח</b>.
                                </ul>`
                            },
                        ],
                        "רכב בטחון" : [
                            {
                                cardType: `text`,
                                content: `<b>רכבי הבטחון הם:</b> <br>
                                אמבולנס של מגן דוד אדום, או אמבולנס שניתן לגביו אישור על היותו רכב בטחון מאת מנהל משרד הבריאות או מטעמו, אופנוע להגשת עזרה ראשונה רכב של משטרת ישראל או של צבא הגנה לישראל, רכב לכיבוי שריפות ורכב אחר שאושר על ידי רשות הרישוי כרכב בטחון, כשהם <b>מפיצים בפנס מיוחד אור </b>מהבהב אדום, כחול או אדום-כחול <b>ומשמיעים את האזעקה בסירנה </b>.`
                            },
                            {
                                cardType: `pics`,
                                pic1: `../assets/images/pics/car1.png`,
                                pic2: `../assets/images/pics/car2.png`,
                                pic3: `../assets/images/pics/car3.png`,
                            },
                        ],
                        "רכב תפעולי" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car8.png`,
                                content: `כלי רכב המשמשים על פי רוב לעבודה. רכב תפעולי אינו מוגדר כרכב פרטי, או ציבורי, חלות עליו מגבלות מיוחדות וככלל, הוא <b>רשאי לנוע רק באזורים מוגדרים</b> המכונים "איזור רכב תפעולי". <br>
                                כך למשל כלי רכב ייעודים הנעים בנמלי אוויר, נמלי ים וכו'.`
                            },
                        ],
                        "מכונה ניידת" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car4.png`,
                                content: `רכב מנועי שלפי מבנהו <b>מיועד לביצוע עבודות</b> ואינו מיועד לגרירה.`
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car5.png`,
                                content: `"מלגזה" – מכונה ניידת בעלת תורן או זרוע שליפה, שלהם מחובר מזלג או התקן אחר המיועדים להרמה ולשינוע של משאות, אשר צוינה ברישיונה כמלגזה.`
                            },
                        ],
                        "טרקטור" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car6.png`,
                                content: `רכב מנועי המיועד לפי מבנהו <b>לגרירה</b> או <b>לגרירה ולביצוע עבודות</b>, שצוין ברישיון הרכב כטרקטור. `
                            },
                            {
                                cardType: `text`,
                                content: `"<b>טרקטור משא</b>" – טרקטור שנתקיימו בו כל אלו:
                                <ul>
                                <li>נע על <b>4 גלגלים לפחות</b>. </li>
                                <li>משקלו הכולל המותר <b>לא עולה על 1,500 ק"ג</b>. </li>
                                <li> ההיגוי שבו נעשה באמצעות <b>ההגה</b>. </li>
                                <li> מצויד <b>בדיפרנציאל</b> </li>
                                <li> <b>בעל משטח הטענה</b> שהרכיב היצרן בתהליך ייצורו, המיועד לגרירה ולהובלת טובין. </li>
                                <li>צוין ברישיון הרכב כטרקטור משא. </li>
                                </ul>`
                            },
                        ],
                       "טרקטורון" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road16.png`,
                                content: `טרקטורון הוא טרקטור <b>שנתקיימו בו כל אלה</b>:
                                <ul>
                                <li>הוא נע על <b> 4 גלגלים לפחות</b>.</li>
                                <li>אופן הישיבה עליו הוא כשרגלי הנהג <b>משני צידי המושב</b>.</li>
                                <li>ההיגוי בו נעשה באמצעות<b> כידון</b>.</li>
                                <li>הוא <b>צוין ברישיון</b> הרכב כטרקטורון. </li>
                                </ul>`
                            },
                        ],
                        "רכב איטי" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car8.png`,
                                content: `רכב מנועי שלגביו נקבעה מהירות מקסימלית שאינה עולה על<b> 40 קמ"ש </b>על ידי רשות הרישוי ברישיונו של הרכב או בתקנות אלה.`
                            },
                        ],
                        "משקל כולל מותר" : [
                            {
                                cardType: `twoPicsAndText`,
                                pic1: `../assets/images/pics/car10.png`,
                                pic2: `../assets/images/pics/car11.jpg`,
                                content: `המשקל העצמי בתוספת משקל האנשים והמטען <b>שהתירה רשות רישוי לרכב הנדון</b> להסיע או להוביל. <br>
                                "<b>משקל עצמי</b>" – משקל הרכב ללא מטען וללא נהג, לרבות משקל כל אבזרי הרכב ומשקל הדלק, המים והשמן שבו. `
                            },
                        ],
                        "מושב בטיחות" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/chair.png`,
                                content: `מושב הרתום לרכב באמצעות חגורת בטיחות <b>המיועד להסעת ילדים </b> ברכב, שמותקנות בו חגורות המיועדות לרתימת הילד אליו, העומד בתקן. <br>
                                על מנת לפשט – מושב הבטיחות עצמו – לא הילד היושב עליו – <b>מעוגן למושב הרכב הרגיל </b>, באמצעות חגורות הבטיחות הרגילות שברכב. בנוסף, מותקנות במושב הבטיחות חגורות, המיועדות <b> לרתום אליו את הילד </b> המוסע בו.`
                            },
                        ],
                        "מושב מגביה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/chair2.png`,
                                content: `מושב המיועד להסעת ילדים <b>בגילאי 3 עד 8</b> ברכב כשהילד היושב אליו רתום בחגורת הבטיחות של הרכב והעומד בתקן. <br>
                                בניגוד ל"מושב הבטיחות", אין במושב זה חגורות מיוחדות – זהו מושב המיועד להסעת ילדים גדולים יותר, המאפשר לחגור ילדים אלה בחגורות הבטיחות הרגילות של הרכב, באמצעות הגבהת המושב המקורי שברכב.`
                            },
                        ],
                    },
                    "השפעות חיצוניות": {
                        "זמן תאורה" : [
                            {
                                cardType: `text`,
                                content: `זמן הלילה וכן זמן אחר שבו הראות לקויה מחמת תנאי מזג האוויר, או מחמת סיבות אחרות.
                                זהו הזמן שבו נדרש הנוהג <b>להדליק אורות ברכב</b>.<br> 
                                הנהג נדרש להדליק את אורות הרכב, לא רק בלילה, אלא לעיתים גם בשעת הצהריים, למשל עקב קיומם של תנאי ראות לקויים. כך למשל <b> מחייבות התקנות הדלקת אורות בחורף, בין 1 נובמבר ועד 31 במרץ</b> בכל שנה.`
                            },
                        ],
                        "לילה" : [
                            {
                                cardType: `text`,
                                content: `פרק הזמן שבין תום רבע שבע <b>לאחר שקיעת השמש</b> לבין תחילת רבע שעה לפני זריחתה. <br>
                                הסבר פשוט – גם לאחר ששקע גלגל השמש, קיימת תאורה מספקת ואין עדיין צורך בהדלקת אורות. רק רבע שעה מאוחר יותר, נעשה חשוך ואז מתחיל ה"לילה" במובנו התחבורתי. <br>כך גם בבוקר – גם לאחר שעלה גלגל השמש, עדיין חשוך וה"לילה" התחבורתי נמשך ואסור עדיין לנהוג ללא אורות. רק רבע שעה מאוחר יותר, משעולה השחר והתאורה הופכת לחזקה יותר, ניתן לכבות את האורות. `
                            },
                        ],
                        "עמעום" : [
                            {
                                cardType: `text`,
                                content: `כיבוי אור הדרך בפנסי החזית, והדלקת אור המעבר, כשמשמעותם בתקנה. <br>
                                עקרונית מצויד הרכב בשלושה סוגי אורות:
                                <ul>
                                <li>אור חניה, המיועד לחניה בלבד ולא לנסיעה. 
                                <span><img class="sml-pic" src="../assets/images/pics/light1.png"/></span>
                                </li>

                                <li> אור נמוך. 
                                <span><img class="sml-pic" src="../assets/images/pics/light2.png"/></span>
                                </li>

                                <li> אור דרך ("האור הגבוה"). 
                                <span><img class="sml-pic" src="../assets/images/pics/light3.png"/></span>
                                </li>
                                </ul>

                                <b>ה"עמעום" מחליף את אור הדרך באור נמוך.</b>`
                            },
                        ],
                        "עוברי הדרך" : [
                            {
                                cardType: `text`,
                                content: `לא רק לנהגים לעשות שימוש בדרך, אלא גם להולכי רגל, לרוכבי אופניים, נוהגי בעלי חיים וכו'. כל הנ"ל מכונים בשם הכללי "עוברי דרך" והם מוגדרים באופן הבא: <br>
                                <b>"עובר דרך</b>" – המשתמש בדרך לנסיעה, להליכה, לעמידה, או לכל מטרה אחרת.`
                            },
                        ],
                        "מתן זכות קדימה" : [
                            {
                                cardType: `text`,
                                content: `אי-המשכת הנסיעה או התחלתה כאשר על ידי כך הנהג ברכב הנדרש לתת זכות קדימה לנוהגים ברכב אחר לאלצם לסטות מקו נסיעתם או לשנות את מהירות נסיעתם.`
                            },
                        ]
                    }
                },
            },
            // מצגת 2
            "רישיונות והיתרים": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נסקור מספר הנחיות כלליות הנוגעות לשימוש ברכב ואשר חלות על בעליו של הרכב, על מי השליטה ברכב נמצאת בידו וכמובן על נהג הרכב. <br>
                                כמו כן נסקור את סמכויותיה של רשות הרישיוי, בכל הנוגע ליחסים שבינה לבין בעלי רישיונות נהיגה ובעלי רכב. `
                            },
                        ],
                    },
                    "רשות הרישוי": {
                        "רשות הרישוי" : [
                            {
                                cardType: `text`,
                                content: `הגוף היחידי הרשאי להנפיק רישיון נהיגה ורישיון רכב הוא <b>רשות הרישוי</b>, והיחיד שיכול לשנות אותם. <br>
                                הנהג עצמו אינו רשאי לבצע שום שינוי ברישיון הנהיגה או רישיון הרכב. <br>
                                רשות הרישוי היא גם היחידה הרשאית להנפיק " <b> רישיון סחר </b> " וזאת לצורך בדיקת רכב לקראת קנייתו. <br>
                                במקרים של שינוי מסוים במצב בריאותו של הנהג (מחלת לב, מגבלות במערכת העצבים, העצמות, הראיה והשמיעה), חייב הנהג להודיע על השינוי לרשות הרישוי בתוך 15 ימים מהרגע שקרה.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `<b>לרשות הרישוי סמכויות נוספות כגון:</b>
                                <ol>
                                <li>קבלת דיווחים בדבר עבירות שביצעו נהגים. <b>חשוב לזכור</b> – כל נהג רשאי לדווח לרשות הרישוי על עבירות שביצע נהג אחר, אולם רשות הרישוי תקל דיווח כזה, רק אם מדובר בסוג מסוים של עבירות ובתנאי שהנהג המתלונן נכח בעצמו בעת ביצוע העבירה. </li>
                                <li>מתן אישור להסעת נוסעים בשכר ברכב פרטי (באמצעות "הוראת שעה").</li>
                                <li>להזמין נהג לבירור ולהוסיף תנאים ברישיון הנהיגה שלו.</li>
                                <li>לזמן נהגים לעבור השתלמות או הדרכה בנהיגה.</li>
                                </ol>`
                            },
                            {
                                cardType: `text`,
                                content: `<ol start="5">
                                <li>לזמן רכב לביצוע<b> בדיקה טכני </b>. סמכות זו נתונה גם לבוחן של <b>משטרת ישראל</b>. בוחנים אלה, רשאים גם למסור לנהג "הודעת אי שימוש" ברכב, אם הם מוצאים בבדיקה, כי הרכב מסכן את התנועה.</li>
                                <li>לאשר העברת בעלות ברכב, כשהיא נוכחת ששולם כל מס ואגרה וכן כי הרכב אינו מעוקל או משועבד. <b>יש לזכור</b> - החובה לדאוג להעברת הבעלות על רכב בעת מכירתו, חלה על <b>בעל הרכב</b> (לא על הקונה ולא על רשות הרישוי, שרק מאשרת את העברת הבעלות, אך אינה יוזמת אותה). </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `<ol start="7">
                                <li> לאשר לנהג <b>להקפיא</b> את רישיון הרכב – אם מספיק בעל הרכב לעשות שימוש ברכבו למשך תקופה העולה על חודש ימים, עליו להודיע על כך לרשות הרישוי.
                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "רישוי נהגים": {
                        "מי יכול להוציא רישיון נהיגה?" : [
                            {
                                cardType: `text`,
                                content: `עקרונית, זכותו של כל אדם לקבל רישיון נהיגה לרכב. <br>
                                יוצאים מן הכלל הם אנשים שהתגלו אצלם ליקויי בריאות כשמתגלים ליקויים בריאותיים אצל בעלי רישיון נהיגה, מוסמכת רשות הרישוי לפסול את רישיונם של אנשים אלה.
                                `
                            },
                        ],
                        "גיל מינימלי לקבלת רישיון" : [
                            {
                                cardType: `text`,
                                content: `
                                הגיל המינימלי לקבלת רישיון נהיגה, משתנה בהתאם <b>לסוג הרכב</b> בו מדובר:
                                <ul>
                                <li>על מנת לנהוג <b>בטרקטורון</b>, <b>טרקטור ומכונה ניידת</b>, יש צורך בקבלת רישיון נהיגה דרגה 1, שהגיל המינימלי לקבלתו הוא <b>16</b>.
                                </li>
                                <li>על מנת לנהוג ברכב נוסעים <b>פרטי</b> וברכב <b>מסחרי</b> שמשקלו הכולל המותר לא עולה על 3,500 ק"ג, יש צורך ברישיון נהיגה מדרגה B, שהגיל המינימלי לקבלתו הוא <b>16 ו-9 חודשים</b>. בעל רישיון נהיגה מדרגה B רשאי גם לגרור גרור, שמשקלו עד 1,500 ק"ג.
                                </li>
                                <li>על מנת לנהוג ברכב <b>ביטחון</b>, או רכב <b>חילוץ</b>, יש צורך <b>בהיתר מיוחד</b>, הניתן ע"י רשות הרישוי.
                                </li>
                                </ul>
                                `
                            },
                        ],
                    },
                    "רישיון נהיגה ומסמכים": {
                        "נהיגה ברכב" : [
                            {
                                cardType: `text`,
                                content: `אדם רשאי לנהוג ברכב, רק אם יש לו <b>רישיון נהיגה תקף</b> לאותו סוג רכב ובהתאם למגבלות המצוינות ברישיון הנהיגה, (אם וככל שמצוינות כאלה). <br>
                                כך למשל, אם צוינה מגבלה המחייבת הרכבת משקפיים, או עדשות מגע בעת נהיגה, אין לנהוג בלעדיהן. <br>
                                יתירה מזאת, גם לבעל רכב, או למי שהשליטה ברכב בידיו, <b>אסור</b> לאפשר לאחר לנהוג, אם הוא יודע שאין בידי האחר רישיון נהיגה תקף לאותו סוג רכב.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `הגדרת "נהיגה" - אדם הדוחף רכב ייחשב כמי שנוהג בו לכל עניין הקשור בחובת הציות לדיני התעבורה. כל למשל, אסור לאדם שאין לו רישיון נהיגה לאופנוע, להסיע אופנוע בכוח הגוף.`
                            },
                        ],
                        "מסמכים" : [
                            {
                                cardType: `text`,
                                content: `בעת הנהיגה חייב נהג להחזיק ברשותו <b>רישיון רכב תקף ותעודת ביטוח חובה תקפה ומשולמת</b>, כשהמסמכים במצב תקין, נקי וקריא. <br>
                                עקרונית, <b>אין</b> להסתפק בתצלום בלבד, אלא אם כן מדובר ברכב השייך לחברה, שבה קיים קצין בטיחות, המאשר בחתימתו ובחותמו את תפוקתם של המסמכים המצולמים.`
                            },
                            {
                                cardType: `text`,
                                content: `בעת הוצאת רישיון רכב, או בעת חידושו של רישיון כזה, נדרש הנהג להציג תעודת ביטוח תקפה, גם בפני רשות הרישוי (או מכון הרישוי, בו מבוצע המבחן השנתי ואשר משמש כנציגה של רשות הרישוי לעניין זה).
                                `
                            },
                        ],
                    },
                    "סמכויות שוטרים וקציני משטרה": {
                        "פסילה מנהלית" : [
                            {
                                cardType: `text`,
                                content: `
                                ישנם מקרים, בהם רשאי קצין משטרה <b>לפסול</b> מנהלית את רישיון הנהיגה:
                                <ol>
                                <li>לתקופה בת <b>30</b> יום – אם הנהג ביצע עבירה שיש בה <b>סיכון הולך רגל במעבר חציה</b>.
                                </li>
                                <li>לתקופה בת <b>60</b> יום – אם היה הנהג <b>מעורב בתאונה</b> בה נגרמה <b>חבלה לאדם או שנגרם נזק לרכוש</b>.
                                </li>
                                <li>לתקופה בת <b>90</b> יום – אם היה הנהג <b>מעורב בתאונות דרכים</b>, שבה נהרג אדם</b>.
                                </li>
                                </ol>
                                `
                            },
                        ],
                        "הודעת אי שימוש ברכב מסחרי" : [
                            {
                                cardType: `text`,
                                content: `כשמדובר ברכב מסחרי ושוטר מגלה בבדיקה כי מובל מטען שמשקלו עולה על המותר, רשאי השוטר למסור לנהג "<b>הודעת איסור שימוש</b>" ברכב ולקחת מהנהג את רישיון הנהיגה שלו, כל זאת למשך <b>30</b> יום. <br>
                                אם זו הודעה שניה בתוך תקופה של 3 שנים תארך תקופת האי שימוש 60 יום. <br>
                                זכור: נהג שייתפס נוהג בעת <b>שלילה</b>, עלול לשלם על כך עד <b>3 שנות מאסר בפועל</b>.
                                `
                            },
                        ],
                    },
                    "נהג חדש": {
                        "חובות הנהג חדש" : [
                            {
                                cardType: `text`,
                                content: `בשנתיים הראשונות לנהיגתו, נחשב נוהג רכב ל"נהג חדש". בתקופה זו (ובכל עת אחרת בה הוא מוגדר כ"נהג חדש"), חייב נהג להצמיד <b>תווית "נהג חדש"</b> לשוליו התחתונים של חלון הרכב האחורי, כך שתיראה ע"י הנוהג מאחוריו. <br>
                                בשלושת החודשים הראשונים לנהיגתו, חייב נהג חדש לנהוג <b>בליווי מלווה היושב במושב שלצד הנהג</b>, שבידו רישיון נהיגה לאותו סוג רכב בו הנהג החדש נוהג. 
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/sign1.png`,
                                content: `נוהג חדש, שגילו צעיר מ-21 אינו רשאי להסיע יותר מ-2 נוסעים (אלא אם נמצא ברכב מלווה).
                                `
                            },
                        ],
                        "מלווה לנהג חדש" : [
                            {
                                cardType: `text`,
                                content: `
                                המלווה, אם אינו מורה נהיגה, <b>חייב להיות אדם העונה על אחת מהאפשרויות הבאות</b>: 
                                <ol>
                                <li>בן 24 שנים ויש בידו רישיון נהיגה לאותו סוג רכב, 5 שנים לפחות.
                                </li>
                                <li>בן 30 שנים ויש בידו רישיון נהיגה לאותו סוג רכב, 3 שנים לפחות.
                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "הכניסה לרכב והנסיעה": {
                        "תקינות הרכב" : [
                            {
                                cardType: `text`,
                                content: `ככלל, אין לנהוג ברכב שאינו תקין, או ברכב ששדה הראיה שלו בו מוגבל. 
                                החריג לכך – אם ההגבלה קלה וזניחה. <br>
                                ברכב שלא ניתן לראות מבעד לשמשה האחורית שלו, יש להתקין מראות תשקיף מציידי הרכב.<br>
                                כשהרכב חונה בציידו הימני של הכביש ויש להתקדם על הכביש לקראתו, עדיף להתקרב אליו מלפנים, אל מול פני התנועה המתקרבת.
                                `
                            },
                        ],
                        "נסיעה חדשה" : [
                            {
                                cardType: `text`,
                                content: `
                                לפני תחילת כל נסיעה, על הנהג לוודא קיומם של אביזרים מסוימים ברכב:
                                <ol>
                                    <li><b>גלגל חלופי ומגבה</b> (חייבים להימצא בכל רכב הנע על גלגל גומי, למעט טרקטור, תומך ומכונה ניידת שמשקלה עולה על 400 ק"ג). 
                                    </li>
                                    <li><b>משולש אזהרה</b> (חייב להימצא בכל רכב מנועי למעט אופנוע) וכן בנתמך, <b>אפוד זוהר</b>.
                                    </li>
                                    <li><b>מטף לכיבוי אש</b> (חייב להימצא בכל רכב מנועי, למעט רכב נוסעים פרטי, טרקטור ואופנוע).
                                    </li>
                                    <li><b>סל אשפה</b> (חייב להימצא בכל רכב נוסעים פרטי).
                                    </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="5">
                                <li>לבדוק את <b>תקינות הפנסים</b>, השמשות והמגבים ואת ניקיונם. אם אחת מנורות הרכב אינה מאירה, יש להחלפה ולוודא שהנתיך הקשור אליה תקין.
                                </li>
                                <li>לבדוק את <b>הנוזלים והשמנים</b> ברכב, (שמן מנוע, נוזל קירור, נוזל ניקיון השמשות).
                                </li>
                                <li>לבדוק את <b>לחצי האוויר בצמיגים</b>, כולל בצמיג החלופי.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `שימו לב - יש לנהוג ברכב <b>רק במידה והנהג מכיר את הרכב ואת מערכותיו השונות</b>.  <br>
                                אם זו הפעם הראשונה בה הנך נכנס לרכב מסוים חובה עליך להכיר היטב את מערכות התפעול, לפני תחילת הנסיעה. הכרה ובקיאות במערכות הרכב חיונית. מי שחייב משקפיים, או בעדשות מגע, </b>חייב להרכיבם</b> בכל עת שהוא נוהג ברכב. 
                                `
                            },
                        ],
                        "כיוון המושבים" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/seats1.png`,
                                content: `יש לכוון את מושב הנהג, כך שיתאים למידות גופך ואת משענת הראש, כך שיוכל לתמוך בראשך בעת פגיעה מאחור. כך תוכל להגיע בנוחות אל ההגה, הדוושות ושאר מנופי התפעול ותקבל שדה ראיה מרבי, תפעול נוח ויעיל של מערכות הרכב ונהיגה מעייפת פחות.
                                הקפד על מרחק מתאים מההגה. <br>
                                
                                אחיזה נכונה על ההגה, תאפשר תנועה נכונה של הידיים והפעלה מדויקת של ההגה בסטיות, בעקומות ובפניות.
                                `
                            },
                        ],
                        "כיוון המראות" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/direction1.png`,
                                content: `כוון את מראות הרכב, כך שתוכל לצפות באמצעותן בשטח <b>שמאחורי הרכב ומצידיו</b>. במראה הפנימית עליך לראות את השטח הנשקף מבעד לשמשה האחורית ובהתאם לסוג המראה (פנורמית, או רגילה), לעיתים גם מעט מהשטח שמאחור ומימין. <br>
                                זכור – <b>מראה פנורמית מעוותת את המרחקים הנצפים באמצעותה</b>. המרחקים נראים גדולים מאשר במציאות. את המראות יש לכוון כך, שתוכל לצפות באמצעותן בשטחים הצמודים לדופן הרכב, ובשטח שמימין (או משמאל) לשטח זה, בהתאמה. 
                                `
                            },
                        ],
                        "דליפת גזים מהרכב" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car12.png`,
                                content: `רכב ממנו דולפים גזים הוא <b>מסוכן</b>, כיוון שגזים שייפלטו ממערכת זו עלולים לחדור לתא הנהג ולסכן את הנהג והנוסעים. מכאן גם, <b>שהשארת מנוע פועל בחניון סגור מסוכנת ביותר</b> שכן אין לגזים הרעילים הנפלטים ממנוע הרכב לאן לצאת הם מסכנים את הנהג והנוסעים ברכב.`
                            },
                        ],
                        "לוח המחוונים" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car13.jpg`,
                                content: `לוח המחוונים נועד לתת לנהג מידע על מצב מערכות הרכב, ומצביע על תקלה כלשהי ברכב במידה ויש. לפני היציאה לדרך כדאי להעיף מבט בלוח המחוונים. <br>
                                אם נורית חיווי האיתות ברכב מהבהבת במהירות, ככל הנראה אחד <b>מפנסי האיתות אינו פועל ויש לתקנו לפני היציאה לדרך.</b> <br>
                                אם נדלקת נורית מד חום המנוע, <b>אין להמשיך בנסיעה</b>, אלא לעצור ולאפשר למנוע להתקרר בעמידה בסל"ד נמוך ואם הטמפרטורה אינה יורדת יש <b>לדומם את המנוע</b>.
                                `
                            },
                        ],
                        
                    },
                    "מצב גופני ונפשי": {
                        "מצב גופני ונפשי" : [
                            {
                                cardType: `text`,
                                content: `במידה והנוהג ברכב נמצא במצב גופני או נפשי המונע ממנו שליטה מלאה ברכב, או שהוא עלול לסכן את עצמו או אנשים אחרים בדרך – <b>חל איסור על אותו נהג לנהוג!</b>
                                לדוגמה: לאחר נטילת תרופות הגורמות לקהות חושים, או לתחושת עייפות ונמנום, יהיה מותר לנהוג ברכב רק לאחר שפגה <b>לחלוטין</b> השפעת התרופה.
                                `
                            },
                        ],
                        "עייפות" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/man1.jpg`,
                                content: `עייפות בנהיגה הינה תופעה מוכרת. שעות רבות של נהיגה רציפה, עלולות לגרום לעייפות, נמנום, חוסר ריכוז והתארכות זמן התגובה. <br>
                                במקרים אלה חל איסור מוחלט על הנהיגה ברכב. <br>
                                אם הדבר קורה באמצע הדרך, חובה על הנהג <b>לעצור</b> ל"עצירת רענון" <b>במקום המותר לעצירה ולחניה</b>, 
                                לבצע פעילות גופנית כלשהי, לנוח ולהרבות בשתייה, על מנת להפיג את העייפות הזמנית. <br>
                                יחד עם זאת יש לזכור – זהו פתרון זמני בלבד. עייפות אמתית נגמרת רק בעזרת שינה. ולא ניתן לנהוג במצב עייפות.
                                `
                            },
                        ],
                    },
                    "לפני היציאה לדרך": {
                        "השתלבות לכביש" : [
                            {
                                cardType: `text`,
                                content: `הדרך הבדוקה להימנע מתאונה, בעת ההשתלבות בתנועה, הינה בדיקה מוקדמת של מצב התנועה והערכה נכונה של מהירות ההשתלבות הנדרשת. <br>
                                יש להמתין בסבלנות עד להיווצרות מרווח מספיק ורק אז, לאותת ולהשתלב בתנועה תוך התאמת המהירות למהירות התנועה.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `הערה חשובה לעניין האיתות – איתות כשלעצמו <b>אינו</b> מתיר לנהג לצאת לכביש. האיתות רק מסמן לשאר עוברי הדרך על כוונת הנהג, אך אין הוא מקנה זכות אוטומטית להתחיל בנסיעה. זכות כזו נרכשת רק באמצעות <b>הסתכלות, בדיקת השטח ווידוא כי ניתן לצאת לכביש בבטיחות</b>. 
                                `
                            },
                            {
                                cardType: `text`,
                                content: `אין לנהוג ברכב שרק יד אחת אוחזת בהגה או בכידון הרכב, אלא לשם ביצוע פעולה הנדרשת לנהיגה, כגון הפעלת מנוף האיתות, שילוב הילוך וכו'. <br>אין גם לעשות שימוש במכשיר טלפון סלולארי, שלא באמצעות מיקרופון המותקן ברכב ("דיבורית"), או לחילופין אם הטלפון עצמו מצויד בדיבורית, יש להניחו ברכב באופן יציב, כך שלא יוכל להישמט ממקומו. <br>ובאותו העניין – <b>חל איסור על משלוח מסרונים (SMS) וקבלתם בעת נהיגה</b>, או בעת המתנה <b>בתמרור "עצור"</b>, או <b>ברמזור אדום</b>.
                                `
                            },
                        ],
                    }
                }
            },
            //מצגת 3
            "הנחיות כלליות לגבי תמרור": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נסקור מספר הנחיות כלליות הנוגעות לדרישות המחוקק לעניין אופק הציות הנדרש מנהגים <b>להוראות והנחיות הניתנות להם ע"י מערכת התמרור</b>. <br>הציות להוראות.
                                `
                            },
                        ],
                    },
                    "שוטרים ותמרורים": {
                        "ציות להוראות בכביש" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/piramid1.png`,
                                content: `נהג וכל משתמש אחר בדרך, חייבים לציית להוראות הניתנות ע"י <b>שוטר, רמזור, תמרור, או סימון בכביש</b>, אולם קיים מדרג המסדיר את ההירארכיה בין כל הגורמים הללו:
                                `
                            },
                            {
                                cardType: `text`,
                                content: `סימונים בכביש, כגון נתיבים, סימון שטחי הפרדה, קו עצירה וכדומה <b>מחייבים את הנהג</b>. כך למשל, חל <b>איסור</b> לנסוע על גבי שטח הפרדה מסומן. <br>
                                דוגמה נוספת- בעת הכניסה לצומת מנתיב מסוים, יש להמשיך בנסיעה בו גם בתוך הצומת, עד ליציאה ממנו.אולם תמרור "כוחו" גדול מכוחו של סימון בכביש. כך למשל מסמן קו עצירה את המקום בו נדרש נהג לעצור, קו העצירה כשלעצמו, אינו מחייב עצירה, אולם בשעה שהוא מסומן ליד תמרור "עצור", הרי שהתמרור, הוא <b>המורה לנהג לעצור</b> ואילו קו העצירה, רק מורה לו <b>היכן לעצור</b>.
                                `
                            },
                        ],
                        "רמזורים" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/3_2.jpg`,
                                content: `<b>הוראות הרמזור</b> גוברות על הוראות התמרור (למעט רמזור צהוב מהבהב המציין תקלה). 
                                `
                            },
                            {
                                cardType: `text`,
                                content: `במרבית הצמתים המרומזרים מוצבים תמרורי "עצור" (לפחות) משני צידיו של הצומת. <br>
                                מטרתם להסדיר את <b>סדר הכניסה לצומת</b> ואת <b>כללי מתן זכות הקדימה בו</b>, בעת שהרמזורים אינם פועלים. <br>
                                אולם בשעה שהרמזורים פועלים והאור הנדלק ברמזור הוא ירוק, רשאי הנהג לחצות את הצומת מבלי לעצור תחילה, למרות קיומו של תמרור "עצור", כלומר הוראות הרמזור גוברות במקרה זה על הוראות התמרור.
                                `
                            },
                        ],
                        "שוטר בצומת מרומזר" : [
                            {
                                cardType: `text`,
                                pic: `../assets/images/pics/police1.jpg`,
                                content: `הוראות השוטר המכוון בצומת, גוברות על כל אלה גם יחד. נהג <b>חייב לציית להוראות שוטר</b>, גם אם הן מנוגדות להוראות הרמזור, תמרור, או סימון בכביש. 
                                `
                            },
                            {
                                cardType: `text`,
                                content: `<b>כיצד נדע מיהו שוטר?</b> 
                                אם הוא לבוש מדים, או שהוא מזדהה באמצעות תעודת מינוי מתאימה, הרי שזהו שוטר שיש לציית להוראותיו. לעניין זה, גם שוטר צבאי הוא שוטר שיש לציית להוראותיו, אולם רק בשעה שהוא <b>במדים ובתפקיד</b>. <br>
                                מכאן ברור, שגם שוטר צבאי במדים, המורה לנהג לנסוע בניגוד להוראת תמרור, יש לציית להוראותיו, שכן הוראותיו גוברות על הוראות התמרור.
                                `
                            },
                        ],
                        "בעלי תפקידים נוספים" : [
                            {
                                cardType: `text`,
                                content: `החוק מכיר בעובדה שלעיתים, יש צורך לציית גם לבעלי תפקידים אחרים, המכוונים את התנועה, לרוב באופן <b>זמני ולמטרה מסוימת</b>. לכן הוא קובע שיש לציית גם להוראותיו של <b>פקח עירוני</b>, אלא שבניגוד לשוטר אזרחי רגיל, חלה חובה זו רק בשעה שהוא לובש מדים ואם הוא הוסמך כדין לתפקידו. <br>
                                ברור מכאן, שהוראותיו של <b>פקח</b> במקרה כזה, גוברות גם על הוראותיו של תמרור. במקרים מסוימים, יש גם חובה לציית להוראותיו של <b>עובד מע"צ </b>- עליו להיות לבוש מדים והוראותיו צריכות להינתן רק לצרכי הכוונת התנועה.
                                `
                            },
                        ],
                    }
                }
            },
            //מצגת 4
            "סטיות, פניות ונסיעה לאחור": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `פרק זה יעסוק בנסיעה בימין הדרך ושמירת מרחק, הצמדות לימין ואף ירידה לשול הכביש, פניות ועקרונותיהן, ונסיעה אחורנית.
                                `
                            },
                        ],
                    },
                    "שמירת מרחק ונסיעה בימין": {
                        "שמירת מרחק ונסיעה בימין" : [
                            {
                                cardType: `text`,
                                content: `עפ"י חוקי התעבורה על הנהג לנהוג <b>בחלקו הימני </b>של הדרך <b>ובנתיב הימני</b> שבדרך (אלא אם התנועה מתנהלת בטורים, או שהנתיב הימני מיועד לחבורה ציבורית בלבד).<br>
                                שמירה על הימין ונסיעה בקו ישר תיעשה באמצעות שמירה על מרחק קבוע <b>מהקו הצהוב</b> והסתכלות <b>למרחק גדול קדימה. </b><br> 
                                השמירה על המרחק מהקו הצהוב, תאפשר שמירה על הימין ואילו המבט הרחק קדימה, יאפשר לנהג זמן מספיק להגיב לאירועים הקורים בדרך, שכן יקל עליו להבחין בהם מוקדם מספיק. 
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car11.jpg`,
                                content: `החזקה נכונה של הידיים על ההגה, גם היא חשובה שכן היא תאפשר לנהג לבצע סטייה, או פניה בצורה בטוחה יותר.`
                            },
                        ],
                        "יתרונות השמירה על הימין" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car40.png`,
                                content: `
                                <ul>
                                <li>התרחקות מהתנועה שממול 
                                </li>
                                <li>סיוע במניעת תאונה חזיתית 
                                </li>
                                <li>מניעת אפשרות עקיפה של כלי רכב מימין, דבר העלול לגרום להתקרבות מסוכנת של הנעקף לתנועה שממול.
                                </li>
                                </ul>`
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car41.png`,
                                content: `מרחק קצר יותר לשול הימני לצורך מילוט.
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car14.png`,
                                content: `בעת שהנהג נעקף, תאפשר שמירה על הימין לשמור על מרחק פנוי גדול יותר בינו לבין הרכב העוקף אותו.
                                `
                            },
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/car42.jpg`,
                                content: `שמירה על הימין תאפשר בעיקר לכלי הרכב הנוסעים מאחורי הנהג <b>שדה ראיה רחב והימנעות מתאונה חזיתית</b>, העלולה לערב בה גם את הנהג עצמו.
                                `
                            },
                        ],
                    },
                    "עזיבת ימין הכביש": {
                        "חובה/ניתן לעזוב את ימין הכביש" : [
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/car43.png`,
                                content: `לפני פניות שמאלה בכביש חד סטרי.
                                `
                            },
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/pic20.png`,
                                content: `לפני ביצוע פניות פרסה.
                                `
                            },
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/pic20.png`,
                                content: `בעת עקיפה. 
                                `
                            },
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/pic21.jpg`,
                                content: `<b>בהתמזגות</b> עם נתיב הנמצא <b>משמאל</b> לנתיב הנסיעה.
                                `
                            },
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/pic22.jpg`,
                                content: `<b>בסופו של נתיב האצה</b>, או בעת שהנהג מבקש <b>להיכנס לנתיב האטה</b>.
                                `
                            },
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/car45.jpg`,
                                content: `כשהתנועה מתנהלת בצפיפות, בטורים ולרוב, באיטיות.
                                `
                            },
                            
                        ],
                    },
                    "סטייה ופניה": {
                        "סטייה ופניה" : [
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/car11.jpg`,
                                content: `במונח "סטייה" הכוונה <b>לשינוי נתיב נסיעה </b>בעוד ש"פניה" משמעותה <b>שינוי בכיוון הנסיעה</b>.<br>
עקרונית, אין לבצע סטייה כלשהי, אם הדבר <b>גורם לסיכון </b>או אפילו רק <b>להפרעה</b> לתנועה. מותר לפיכך לסטות רק אם ניתן לעשות זאת בבטחה וגם אז, יש לבצע זאת במהירות סבירה ללא גרימת הפרעה או סיכון ליתר המשתמשים בדרך.
`
                            },
                        ],
                        "שטח מת ברכב" : [
                            {
                                cardType: `text`,
                                content: `יש לזכור – שינוי נתיב הנסיעה כרוך בסיכון לא מבוטל, בעיקר מצד כלי רכב המצויים ב"שטח המת" של הנהג ואשר אין הוא מבחין בהם כלל. 
                                השינוי בכיוון הנסיעה, עלול לגרום לנהג <b>שלא להבחין ברכב הנוסע בדיוק מאחוריו </b>ומצוי ב"שטח מת" זה.
                                `
                            },
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/car46.jpg`,
                                content: `עוד לפני תחילת הסטייה, יש לבדוק את הנעשה <b>מסביב לרכב</b>, בעזרת <b>המראות</b> ולעיתים גם <b>בהפניית ראש </b>ואם השטח פנוי, <b>לסמן אות </b>ורק אז לסטות לנתיב אחר.
                                `
                            },
                        ],
                        "חובת הנהג לסטות ימינה" : [
                            {
                                cardType: `threeSquarePicsAndText`,    
                                pic1: `../assets/images/pics/sign20.png`,
                                pic2: `../assets/images/pics/sign21.png`,
                                pic3: `../assets/images/pics/sign22.png`,
                                content: `בעת נסיעה בדרך צרה, כששני נהגים מגיעים <b>מכיוונים מנוגדים</b>, חובה על שניהם לסטות לימין <b>ואפילו לרדת לשול הדרך</b> על מנת למנוע תאונה ביניהם.
                                `
                            },
                        ],
                    },
                    "הצמדות לימין": {
                        "דרך תלולה וצרה" : [
                            {
                                cardType: `twoPicsAndText`,    
                                pic1: `../assets/images/pics/road50.jpg`,
                                pic2: `../assets/images/pics/road51.jpg`,
                                content: `בעת נהיגה בדרך <b>תלולה וצרה</b>, חובתם של הנהגים המגיעים מכיוונים מנוגדים לסטות לימין הדרך ואף <b>לעצור </b>במידת הצורך. <br>
                                עקרונית, <b>ייתן הרכב היורד זכות קדימה לרכב העולה</b>.
                                `
                            },
                            
                        ],
                        "מכשול בכביש" : [
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/car50.jpg`,
                                content: `כשיש <b>מכשול</b> בכביש דו סטרי (כגון שטח הפרדה, עץ , או מכשול זמני כלשהו), יש לעקפו מימין בלבד. <br>
                                אם המכשול מוצב <b>בכביש חד סטרי</b>, ניתן לעקפו מימין או משמאל, אלא אם מוצב במקום <b>תמרור</b>, המורה על כיוון עקיפת המכשול ואז יש לפעול על פי הוראות התמרור.<br>
                                רכב איטי או רכב עם מטען רחב, חייב לאפשר לתנועה שמאחוריו לעקפו, אם ניתן לסטות ימינה בבטחה.
                                `
                            },
                        ],
                    },
                    "עקרונות הפניה": {
                        "עקרונות הפניה" : [
                            {
                                cardType: `squarePicsAndText`,    
                                pic: `../assets/images/pics/road52.png`,
                                content: `חל איסור לפנות ימינה או שמאלה, אלא אם ניתן לבצעה זאת <b>בבטחה</b> ואם אין בכך סיכון לאדם או לרכוש, או הפרעה לשאר המשתמשים בדרך. אין להתחיל בביצוע הפניה, אלא רק לאחר שהנהג ווידא כל אלה.<br>
                                העיקרון המנחה את דרכי הפניות פשוט – לאפשר לנהג הפונה <b>להישאר זמן מינימלי בתחום הצומת</b>. מעקרון זה הנהג יתכנן את דרכי הפניה הנכונות.
                                `
                            },
                        ],
                        "פניות" : [
                            {
                                cardType: `text`,
                                content: `<b>לפני תחילת הפניה, על הנהג:</b>
                                <ul>
                                <li>לוודא שאין כל רכב <b>מאחור ומימינו</b>, בין <b>נתיבו</b> ובין <b>נתיב סמוך</b>, על מנת שלא יפגע בו בעת הפניה. 
                                </li>
                                <li>יש להיזהר במיוחד מכניסת <b>רכב דו גלגלי</b>, העלול לנסות ולעקוף מימין וכן <b>מהולכי רגל</b>, העלולים לחצות את הכביש, בעת שהוא פונה ובעת שמבטו של הנהג מוסט שמאלה, לעבר התנועה המגיעה משמאל.
                                </li>
                                <li>יש לבדוק את <b>הסימונים שעל הכביש</b> ולנהוג לפיהם.
                                </li>
                                <li>לתת<b> אות ימינה </b>במחוון הכיוון.  
                                </li>
                                </ul>
                                `
                            },
                        ],
                        "פניה ימינה" : [
                            {
                                cardType: `twoSquarePicsAndText`,    
                                pic1: `../assets/images/pics/photo9.png`,
                                pic2: `../assets/images/pics/photo7.png`,
                                content: `פניות ימינה יתבצעו באופן הבא:
                                מימין לימין בצורה חדה. שים לב- פניה ימינה מותרת <b>מכל נתיב אשר מיועד לפניה ימינה</b>.
                                `
                            },
                        ],
                        "פניה שמאלה" : [
                            {
                                cardType: `text`,
                                content: `בהתאם לעקרון העל – לאפשר לנהג להישאר מינימום זמן בתחום הצומת – נגזר אופן הפניה שמאלה, מסוג הכביש שממנו פונים ומסוג הכביש אליו פונים.<br>
                                לפני תחילת ביצוע הפניה, על הנהג לדעת <b>מאיזה סוג כביש </b>(חד סטרי או דו סטרי) <b>הוא פונה</b> ואל <b>איזה סוג כביש הוא נכנס</b>, שכן בפינות אלה משתנה אופן הפניה בהתאם לסוגי הכביש ממנו פונים ואשר אליו נכנסים.
                                `
                            },
                        ],
                        "פניות מכביש חד סטרי" : [
                            {
                                cardType: `squarePicsAndText`,    
                                pic: `../assets/images/pics/photo1.png`, 
                                content: `<b>לכביש חד סטרי - משמאל לשמאל</b>, הכוונה היא מחלקו השמאלי של הנתיב אל חלקו השמאלי בכיוון הנסיעה.
                                `
                            },
                            {
                                cardType: `twoPicsSquare`,    
                                pic1: `../assets/images/pics/photo8.png`, 
                                pic2: `../assets/images/pics/photo2.png`, 
                                content1: `<b>לכביש דו סטרי </b>- תמיד לנתיב השמאלי ביותר בקשת רחבה, לצד הימני (במקרה של נתיב אחד בלבד).
                                `,
                                content2: `או לנתיב השמאלי ביותר לכיוון הנסיעה: 
                                `
                            },
                        ],
                        "פניות מכביש דו סטרי" : [
                            {
                                cardType: `twoPicsSquare`,    
                                pic1: `../assets/images/pics/photo3.png`, 
                                pic2: `../assets/images/pics/photo4.png`,
                                content1: `לכביש חד סטרי קרוב למרכז הכביש.`, 
                                content2: `לכביש דו סטרי ממרכז הכביש לנתיב השמאלי ביותר לאותו כיוון נסיעה.
                                `
                            },
                            {
                                cardType: `squarePicsAndText`,    
                                pic: `../assets/images/pics/photo5.png`,
                                content: `במידה והצומת מרומזרת, ממרכז הכביש בקשת רחבה לנתיב הימני ביותר לאותו כיוון נסיעה.
                                `
                            },
                            {
                                cardType: `text`,   
                                content: `
                                 <ol>
                                 <li><b>לכביש חד סטרי </b>– ממרכז הכביש, לנתיב השמאלי ביותר שבכיוון הנסיעה.
                                 </li>
                                 <li><b>לכביש דו סטרי</b> – ממרכז הכביש בקשת רחבה לימין (אם הפניה היא לכביש דו סטרי שבו רק נתיב נסיעה אחד בכל כיוון), או לנתיב השמאלי ביותר שבכיוון נסיעתו של הרכב הפונה (אם בכביש אליו פונים, יש יותר מנתיב אחד בכיוון נסיעתו של הפונה).
                                 </li>
                                 </ol>`
                            },
                        ],
                        "פניות פרסה" : [
                            {
                                cardType: `squarePicsAndText`,    
                                pic: `../assets/images/pics/photo6.png`,
                                content: `פנית פרסה היא פניה בה <b>חוזר הנהג אל הכיוון ממנו מגיע</b>. 
                                פניית פרסה מותרת בתנאים הבאים:
                                <ol>
                                <li>אין איסור</li>
                                <li>כשהדרך מאפשרת</li>
                                <li>לא נגרם בעת הפנייה <b>סיכון הפרעה או הטרדה</b> לנהגים אחרים                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "נסיעה לאחור": {
                        "נסיעה לאחור" : [
                            {
                                cardType: `picAndText`,    
                                pic: `../assets/images/pics/car11.jpg`,
                                content: `עקרונית <b>אסור</b> בכלל לנסוע לאחור, אלא אם קיים צורך תחבורתי לעשות זאת וגם אז, רק במידת הצורך ומבלי שהדבר <b>יגרום</b> לסיכון, פגיעה, הפרעה לתנועה או הטרדה לעוברי דרך אחרים.<br>
                                הסיבה לכך נעוצה בסיכון הכרוך בנסיעה כזו: פגיעה בהולכי רגל, וברכוש העלול להימצא <b>ב"שטח המת"</b> שמסביב לרכב.
                                `
                            },
                        ],
                    },
                },
            },     
            //מצגת 5
            "עקיפה בכביש": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `העקיפה נחשבת לאחת הפעולות המסוכנות ביותר בנהיגה, שכן היא כורכת בתוכה סיכונים רבים, שהעיקרי בהם היא <b>סכנת התאונה החזיתית</b> עם הרכב המגיע ממול. <br>
                                לכן נדרש הנהג לשמור על כמה כללי ברזל בעת שהוא מבקש לעקוף.
                                למרות שאין בחוק הגדרה מדויקת למונח "עקיפה", הרי שבמונח זה הכוונה <u>למעבר על פני רכב הנוסע במהירות איטית יותר, תוך החלפת נתיב לפני המעבר וחזרה לנתיב המקורי אחריו</u>.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `אם אין העקיפה כרוכה בהחלפת נתיבים, היא תכונה לרוב "מעבר על פני רכב אחר", בין שמדובר מצידו השמאלי ובין מצידו הימני, כפי שיוסבר בהמשך.
                                נברר כעת מה חייב נהג לשקול לפני תחילת העקיפה ומהם השלבים לביצוע הנכון והבטוח.
                                `
                            },
                        ],
                    },
                    "עקיפה" : {
                        "כדאיות העקיפה": [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car14.png`,
                                content: `ראשית יש טעם לשקול אם <b>כדאי </b>בכלל לעקוף – לחשוב האם הפרש המהירויות בין הרכב שלפנים לבין המהירות בה מתכוון הנהג לנסוע, הוא כה גדול ואף עובר את המהירות המותרת.  <br> 
                                הזו תהליך ראשוני, הדורש מהנהג שיקול דעת.
                                `
                            },
                        ],
                        "איסורי עקיפה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car10.png`,
                                content: `שנית יש לבדוק אם העקיפה בכלל <b>מותרת</b>, עקרונית אוסר המחוקק על כל עקיפה ואפילו ניסיון עקיפה, במקומות מסוכנים:
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/sign2.png`,
                                content: `
                                <ol>
                                <li>בכל מקום בו <b>יגרם סיכון לתנועה</b>, או תיגרם <b>הפרעה</b> למשתמש אחר בדרך.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car15.jpg`,
                                content: `
                                <ol start="2">
                                <li>בכל מקום בו <b>שדה הראיה לפנים מוגבל</b> בכל סיבה שהיא (מבנה הכביש, תנאי מזג האוויר, תאורה וכו').
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/cars1.jpg`,
                                content: `
                                <ol start="3">
                                <li>לפני <b>פסגה</b>, או <b>עקומה בכביש</b>.
                                </li>
                                </ol>`
                                
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/sign2.png`, 
                                content:  `
                                <ol start="4">
                                <li>כשמוצב בכביש <b>תמרור האוסר על עקיפה</b>.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/view1.jpg`, 
                                content: `
                                <ol start="5">
                                <li>מ – 100 מ' לפני מפגש <b>מסילת ברזל</b> ולפני <b>מעבר חציה</b>.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/view2.jpg`, 
                                content: `
                                <ol start="6">
                                <li>. <b>בתוך צומת</b> (אלא אם בצומת יותר מנתיב אחד בכיוון נסיעת העוקף והתנועה מתנהלת בטורים).
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/cars2.png`, 
                                content: `
                                <ol start="7">
                                <li>אם נדרש נהג לחצות קו הפרדה רצוף על מנת לבצע את העקיפה, הרי שעקב האיסור על חציית קו ההפרדה, אסור לו לעקוף.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="8">
                                <li>אסור לעקוף (או לנסות לעקוף) <b>רכב עוקף</b>, אלא אם הכביש הוא חד סיטרי ויש בו יותר משני נתיבים באותו כיוון נסיעה.<br>
                                אולם לרכב מסחרי שמשקלו כולל המותר מעל 3500 ק"מ ולאוטובוס שאינו אוטובוס זעיר אסור לעקוף רכב עוקף גם בכביש חד סיטרי שיש בו יותר משני נתיבים באותו כיוון נסיעה.                                
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/view1.jpg`, 
                                content: `
                                <ol start="9">
                                <li>אין לעקוף רכב אחר, <b>שעצר</b> לפני <b>צומת, מעבר חציה, מפגש מסילת ברזל</b>, או שהוא עצר על מנת <b>למלא חובה חוקית</b> אחרת כלשהי.
                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "מעבר על פני רכב אחר": {
                        "מעבר על פני רכב אחר" : [
                            {
                                cardType: `text`,
                                content: `במינוח "מעבר על פני רכב אחר", הכוונה הינה לנסיעה מצידו של רכב אחר, הנע במהירות איטית יותר, אך בניגוד ל"עקיפה", הדבר נעשה ללא שינוי בנתיב נסיעתו של הרכב המהיר יותר. <br>
                                עקיפה מותרת משמאל בלבד.
                                עקרונית מותר לעבור על פני רכב אחר רק מצידו השמאלי (למשל בצומת, כאמור). <br>
                                ישנם אבל מספר מקרים, בהם רשאי רכב לעבור על פני רכב אחר מימין והדבר לא ייחשב כ"עקיפה מימין", שהיא כאמור – אסורה. נפרט חלק ממקרים אלה:
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/pic3.jpg`,
                                content: `
                                <ol>
                                <li>בעת שהרכב לפנים נמצא <b>בנתיב לפניה שמאלה</b>, או שהוא <b>מתכוון לפנות שמאלה</b> והוא מאותת על כוונתו זו.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="2">
                                <li>בפניה שמאלה אל כביש חד סיטרי, או אל כביש שבו יותר מנתיב אחד לאותו כיוון נסיעה. מותר לעבור על פני הרכב הפונה כאשר שהשלים את פנייתו.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="3">
                                <li>בעת נסיעה בנתיב לנסיעה ימינה בלבד, מותר לעבור על פני רכב המצוי שמשמאל.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/cars3.png`,
                                content: `
                                <ol start="4">
                                <li>בעת שהתנועה מתנהלת בטורים ומחמת צפיפות התנועה, נע הטור הימני במהירות העולה על זו של הטור השמאלי, מותר לטור מימין לנסוע מהר יותר מהטור שמשמאל והדבר לא ייחשב עקיפה אסורה מימין.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road20.jpg`,
                                content: `
                                <ol start="5">
                                <li>רכב שנוסע <b>בנת"צ</b> (נתיב תחבורה ציבורית).
                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "הרכב הנעקף": {
                        "תשומת לב לסביבה" : [
                            {
                                cardType: `text`,
                                content: `אין בחוק חובה מפורשת להאט תמיד את המהירות בעת שהינך נעקף. אולם לעיתים אין דרך אחרת – הינך נדרש להמשיך בנסיעה, להימין ככל האפשר ולאפשר לעוקף אותך להשלים את עקיפתו בבטחה.
                                `
                            },
                        ],
                    },

                }
            },
            //מצגת 6
            "שמירת מרווח בין רכבים": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נסקור את הסיבות לשמירת רווח לפנים (למעשה אלו הם הסיכונים שבאי שמירת רווח כיאות). כמו כן נבדוק מהן הדרישות החוקיות המינימליות לרווח זה ומהן השיטות המומלצות לשמירתו.
                                `
                            },
                        ],
                    },
                    "הסיבות לשמירת רווח": {
                        "הסיבות לחשיבות " : [
                            {
                                cardType: `text`,
                                content: `
                                אחת הפעולות החשובות ביותר בנהיגה הינה שמירת רווח מהרכב שלפנים. <br>
                                <b>הסיבות החשובות לכך הן:</b>
                                <ol>
                                <li><b>מניעת תאונת</b> חזית אחור עם הרכב הנוסע לפנים.
                                </li>
                                <li>לאפשר לנהג <b>שדה ראיה</b> מלפנים, בעיקר בעת שהוא נוסע בעקבות רכב גדול ורחב.
                                </li>
                                <li>סיוע במניעת תאונה עם רכב הנוסע מאחור ואינו שומר רווח כנדרש. 
                                נהג המגלה כי הרכב שמאחוריו אינו שומר על רווח כנדרש, יכול להגדיל עוד יותר את המרחק מהרכב שלפנים ובכך <b>לאפשר לעצמו לבלום בהדרגה ובמתינות</b> בעת הצורך ולנטרל מעט את השפעת המרחק הקטן ששומר הנהג שמאחור. 
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="4">
                                <li>מתן אפשרות <b>לנהיגה רגועה</b> יותר, שכן הנהג השומר רווח, אינו נדרש להגיב במהירות כה גדולה כמו זה שאינו שומר על רווח מספיק.
                                </li>
                                <li>מניעת <b>בלאי מוגבר</b> לבלמים ולצמיגים וחסכון בדלק, שכן שמירת רווח מאפשרת פעולות האטה והאצה הדרגתיות יותר.
                                </li>
                                <li>מניעת דריכות יתר, עקב אי הצורך להגיב מיידית לפעולות הנהג שלפנים. בכך תורמת שמירת הרווח <b>למניעת מתח בנהיגה </b>ועייפות הנוצרת ממתח זה.
                                </li>
                                <li>הימנעות <b>מפגיעה מחפצים</b> העלולים להישמט מהרכב שלפניו.
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "כמה רווח יש לשמור ": {
                        "המרחק בין הרכבים" : [
                            {
                                cardType: `text`,
                                content: `מחייב החוק על שמירת רווח <b>שיאפשר עצירה</b> בכל עת, תוך מניעת תאונה, בהתחשב במהירות הנסיעה של הנהג ושל הרכב שלפניו, במצב הדרך מצב הראות ומצב התנועה. <br>
                                בנוסף, נדרש נהג הנוהג בשיירה לשמור על רווח כזה, שיאפשר לעוקף אותו, <b>להיכנס ברווח</b> שבינו לבין ברכב שלפנים. <br>
                                אולם בכך לא כדי – על פי לשון התקנות, חייב נהג לשמור על רווח מינימלי <b>בן שניה אחת </b>מהרכב שלפניו.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `מה הקשר בין חובת שמירת רווח, הנמדד <b>ביחידות מרחק</b> (כגון מטרים), לבין הוראות החוק הקובעות שמירת רווח <b>ביחידות של זמן </b>(שניות)?<br>
                                בכל יחידת זמן (שניה למשל), עובר רכב מרחק מסויים שגודלו משתנה בהתאם למהירות הרכב. לו היה המחוקק נדרש להורות לנהג איזה מרחק (במונחי "מטרים") לשמור בכל מהירות, הרי שהיה הוא נדרש לציין רשימה ענקית של "מטרים" לכל מהירות נסיעה אפשרית. היתרון בהגדרת רווח במונחי זמן הינו באחידות ובפשטות.
                                `
                            },
                            {
                                cardType: `text`,
                                content: ` די שיגדיר המחוקק את מספר השניות הנדרשות ואוטומטית, ישתנה המרחק שהן מבטאות, בהתאם למהירות הרכב. זהו מעין "תרגום" של <b>מרחק התגובה הממוצע של הנהג</b> (כ – ¾ השניה), בתוספת <b>מרווח בטחון קטן</b> נוסף, למונחי זמן (שניות).
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car14.png`,
                                content: `יחד עם זאת <u>מומלץ לנהג לשמור על רווח של <b>שתי שניות</u></b> ולא להסתפק בשניה המינימלית האחת, אותה מחייבות התקנות.<br>
                                לעיתים כשקיימים תנאי תאורה או ראות קשים (למשל תנאי מזג אוויר קשים), <b>יש אפילו להגדיל את המרחק מהרכב שלפנים</b>.
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 7
            "נהיגה במהירות גבוהה": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נלמד מהי הסכנה שבנהיגה <b>במהירות גבוהה</b>, נפרט את המקרים בהם נדרשת <b>חובת האטה </b>ואת <b>המהירויות המותרות</b> לכלי רכב שונים בסוגים שונים של דרכים.
                                `
                            },
                        ],
                    },
                    "הסכנה שבנהיגה במהירות גבוהה": {
                       "הסכנות" : [
                            {
                                cardType: `text`,
                                content: `נהיגה במהירות גבוהה מסוכנת ביותר, בעיקר כזו שאינה תואמת את <b>תנאי הדרך, התנועה, הראות ומזג האוויר</b>.<br>
                                עוצמת המכה במקרה תאונה, גדלה בהרבה מעבר לגידול במהירות, כלומר הגדלת המהירות פי 2, לדוגמה, תגדיל את עוצמת המכה בהתנגשות הרבה מעבר לפי 2 (עוצמת המכה גדלה בריבוע לגידול במהירות). מכאן <b>שהפגיעה</b> בבני אדם, או הנזק לרכוש במקרה תאונה, <b>יהיו חמורים יותר, ככל שתגדל מהירות הנסיעה</b>.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `ככל שמהירות הנסיעה עולה, נדרש הנהג להגיב לקורה בדרך בפרק זמן קצר יותר, דבר העלול לפגום בכושרו להגיב באופן נכון לאירועים שבדרך וכן להספיק ולסיים את תגובתו בזמן. <br>במילים אחרות, <b>סכנת אובדן השליטה ברכב, הולכת וגדלה עם הגידול במהירות הנסיעה</b>.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `הבלאי למערכות הרכב, כמו גם תצרוכת הדלק, גדלים משמעותית בעת נהיגה במהירויות גבוהות. <br>
                                נהיגה במהירות שלא תדרוש בלימות חזקות והאצות חזקות אחר כך, <b>תתרום משמעותית לחסכון בדלק</b>.
                                `
                            },
                        ],
                    },
                    "מהירות הנסיעה המותרת": {
                       "המהירות המותרת - בכלליות" : [
                            {
                                cardType: `text`,
                                content: `יש לנהוג במהירות סבירה, המאפשרת <b>שליטה</b> ברכב, תוך התחשבות בכל הנסיבות, בתנאי הדרך ובמצב התנועה, ובכל מקרה <b>לא יותר מהמהירות המירבית המותרת</b> על פי סוג הרכב וסוג הדרך. <br>
                                קובעות התקנות כי על הנהג להאט את מהירות נסיעתו, עקב הופעתם בדרך של סיכונים מסוימים.
                                `
                            },
                        ],
                    },
                    "האטה ובלימה מתי וכיצד?": {
                        "האטה ובלימה" : [
                            {
                                cardType: `text`,
                                content: `עקרונית חייב נהג להאט את מהירות נסיעתו ואפילו לעצור את רכבו, כל עוד צפויה סכנה לעוברי דרך או לרכוש. <br>
                                לא תמיד חלה חובת עצירה – במרבית המקרים, די בהאטה, אולם אם אין דרך אחרת למנוע סכנה <b>יש לעצור</b>.
                                `
                            },
                        ],
                        "חובת האטה" : [
                            {
                                cardType: `text`,
                                content: `
                                <b>התקנות מונות שורת מקרים בהם חלה חובת האטה מיוחדת:</b>
                                <ol>
                                <li><b>בשטחים בנויים, מאוכלסים</b> וכשהולכי רגל נמצאים או הולכים בדרך, ליד <b>התקהלות אנשים</b>
                                ובפרט ילדים ובהתקרבות לבעלי חיים.
                                </li>
                                <li><b>כשהראות מוגבלת</b> מכל סיבה שהיא.
                                </li>
                                <li>לפני <b>פסגה</b>, לפני <b>עקומה, במורד תלול וארוך</b>, לפני <b>גשר צר</b>.
                                </li>
                                <li>לקראת <b>מעבר חציה</b> ולפני <b>אוטובוס</b>, העומד בתחנה, או לקראת "טיולית" או אוטובוס <b>המעלים או מורידים נוסעים</b>.
                                </li>
                                <li><b>ברחוב משולב</b>.
                                </li>
                                <li>באזור <b>מיתון תנועה</b>.
                                </li>
                                <li><b>במנהרה</b>.
                                </li>
                                </ol>
                                `
                            },
                        ],
                        "בלימת רכב" : [
                            {
                                cardType: `text`,
                                content: `בלימת רכב נוצרת, כתוצאה מהחיכוך הנוצר בין רפידות הבלם לדיסק (או לתוף). <br>
                                בעת הבלימה נוצר <b>חום רב</b>. זו דרכה של הפיזיקה להמיר את אנרגית <b>התנועה</b> באנרגיה מסוג אחר (תרמית) <b>ובכך לבלום את הרכב</b>.<br>
                                אולם חימום יתר של הבלמים, עלול לגרום <b>לירידה דרסטית בכושרם לבלום את הרכב</b>. <br>
                                הדבר עלול לקרות למשל בעת נסיעה במורד ארוך, כשהנהג מפעיל את הבלמים ברציפות, למשך פרק זמן ארוך. 
                                `
                            },
                            {
                                cardType: `text`,
                                content: `<b>כיצד לשים לב לכך?</b><br>
                                הנהג יכול לחוש באמצעות <b>הריח החריף</b> שמותירים אחריהם בלמים המתחילים לייצר חום רב מידי.<br>
                                מהרגע שהנהג גילה זאת, מותר לו להמשיך לנסוע <b>באיטיות</b>, אם הדרך אינה מושפעת, על מנת לאפשר לבלמים להצטנן. כמובן במקרים קיצוניים, <b>יש לעצור את הרכב בצד הכביש</b> ולהמתין עד להצטננות הבלמים.
                                `
                            },
                        ],
                        "בלימת חירום" : [
                            {
                                cardType: `text`,
                                content: `בשעת הצורך יש לבלום באופן הדרגתי. <br>
                                בלימת חירום מותרת רק <b>למניעת תאונה</b>, שאין כל דרך אחרת למנועה, או שהדבר נחוץ עקב <b>סיבות בטיחותיות</b>.<br>
                                ויודגש – בלימת חירום לצורך ניסוי בלמים מותרת רק לאחר שנקט הנהג בכל אמצעי הזהירות הדרושים והבטיח שהניסוי <b>אינו גורם לסיכון או הפרעה</b> לעוברי דרך אחרים.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `בלימת חירום אינה מומלצת אף פעם. על מנת להימנע ממנה, על הנהג לנהוג במהירות התואמת את תנאי הדרך והתנועה, לשמור מרחק מהרכב שלפניו ולהסתכל רחוק קדימה, על מנת שיבחין מוקדם ככל האפשר באותם גורמים העלולים לגרום לו לבלום.
                                `
                            },
                        ],
                        "מרחק עצירה" : [
                            {
                                cardType: `text`,
                                content: `
                                <b>מרחק העצירה של הרכב מורכב ממספר מרכיבים:<b><br>
                                <ol>
                                <li><b>מרחק התגובה </b>– המרחק שעובר הרכב מרגע שהבחין הנהג בסכנה ועד שהחל בפעולת התגובה (למשל, עד שהניח את רגלו על דוושת הבלם).
                                </li>
                                <li><b>מרחק הבלימה</b> – המרחק שעובר הרכב מרגע שהופעלו הבלמים (מרגע שנלחצה דוושת הבלימה) ועד לעצירתו המוחלטת של הרכב.
                                </li>
                                <li><b>מרחק העצירה</b> – מרחק התגובה + מרחק הבלימה. ככל שגדלה מהירות הנסיעה, כן גדל מרחק התגובה ועוד יותר מכך – מרחק הבלימה.
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "מהירות כלי רכב שונים על פי סוג הדרך ": {
                        "מהירויות לפי כלי רכב ואזורים" : [
                            {
                                cardType: `text`,
                                content: `לעיתים מגבילה רשות הרישוי את מהירותם המירבית המותרת של כלי רכב מסויימים והיא מציינת הגבלה זו ברישיון הרכב שלהם. <br>
                                לכלי רכב אלה, אסור כמובן לנסוע במהירות העולה על זו המצויינת ברישיון הרכב.<br>
                                מהירותם המירבית של <b>רכב איטי, טרקטור ומכונה ניידת</b> מוגבלת ל- <b>40 קמ"ש</b>. מכאן שזוהי המהירות המירבית בה יוכלו כלי רכב אלה לנוע הן בדרך עירונית והן בדרך שאינה עירונית. <br>
                                לכלי רכב אלה <b>אסורה הכניסה לדרך מהירה</b>.
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/table1.png`,
                                content: `
                                <ul>
                                <li>כל משקל המצוין בטבלה הוא "משקל כולל" המותר עפ"י החוק.
                                </li>
                                <li>דרך שמוצב בה תמרור של מהירות מיוחדת אין לעבור אותה.
                                </li>
                                <li>למשאית מעל 12 טון אסור לעבור את המהירות המותרת גם אם תמרור "מהירות מיוחדת" מתיר מהירות גבוהה יותר.
                                </li>
                                </ul>`
                            },
                        ],
                    },
                    
                }
            },
            //מצגת 8
            "מסילת רכבת": {
                learningContent: {
                    "הקדמה": {
                       "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `תאונות רבות אירעו בארץ בין כלי רכב לרכבת ומכאן ההוראות החמורות הנוגעות לנושא זה. <br>
                                בפרק זה נסקור את שאמור הנהג לעשות בהתקרבות למפגש מסילת ברזל ובעוברו על פניו.
                                `
                            },
                        ],
                    },
                    "מפגש מסילת רכבת": {
                       "התקרבות למסילת רכבת" : [
                            {
                                cardType: `text`,
                                content: `בהתקרבותך אל מפגש מסילת ברזל עלייך:
                                <ol>
                                <li><b>להאט</b> את מהירותך, כך שתוכל לעצור בעת הצורך, בעיקר כשמדובר במפגש המצויד במחסום, רמזור, או אות אזהרה אחר.
                                </li>
                                <li><b>להימנע מעקיפה</b> בטווח של <b>100 מטר</b> לפני המפגש.</li>
                                <li><b>אין לחנות</b> במרחק של <b>20 מטר</b> ממפגש מסילת ברזל. 
                                </li>
                                </ol>
                                `
                            },
                        ],
                        "הגעת הרכבת" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/view1.jpg`,
                                content: `כשהרכבת נראית לעיניו, נשמעת לאוזניו של נהג המתקרב למפגש מסילת ברזל, שרכבת משמיעה אות אזהרה, או שניתן אות אזהרה כלשהו ליד מקום מפגש, על הנהג <b>לעצור מיד</b> ולא להמשיך בנסיעה עד <b>אחרי שהרכבת עברה</b>, או <b>שנפסק אות אזהרה</b> (רמזור). 
                                `
                            },
                            {
                                cardType: `text`,
                                content: `כשמוצב תמרור "עצור" לפני המפגש חובה עליך לא רק לעצור, אלא גם <b>לכבות</b> את מכשיר הרדיו\ טייפ\ דיסק\ טלוויזיה, לפתוח את החלון הקרוב, <b>להתבונן ולהאזין</b> ורק לאחר שווידאת שרכבת אינה מתקרבת מכל כיוון, רק אז מותר לך להמשיך בדרכך.<br>
                                כשמחסום הרכבת חוסם את הדרך, חלק ממנה, או נע (בין שהוא עולה בין שהוא יורד) וכל עוד הוא בתנועה – יש לעצור <b>לפני קו העצירה</b> או <b>לפני המחסום הקרוב</b>. <br>
                                אם לא מסומן קו עצירה, יש לעצור לפני המחסום, ואם אין מחסום, <b>במרחק של 4 מטר</b> מהפס הקרוב לפחות.
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 9
            "איתות כדרך תקשורת בכביש": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car16.png`,
                                content: `האיתות מהווה מעין תקשורת בין נהגים. בעזרתו מודיע נהג אחד ליתר המשתמשים בדרך, על כוונותיו. <br>בפרק זה נבין מה משמעות <b>האיתות</b>, מתי חובה לאותת, מתי רצוי לאותת, ומהם האמצעים בהם יש לבצע זאת. `
                            },
                        ],
                    },
                    "מתי לאותת?": {
                        "מתי לאותת?" : [
                            {
                                cardType: `text`,
                                content: `יש לאותת זמן מספיק (באופן סביר), על מנת לאפשר לעוברי דרך אחרים להבין את כוונת הנהג המאותת ולהגיב לה כיאות. <br>
                                במקביל, חייב עובר דרך אחר, בעיקר נהג הנוסע בעקבותיו, שהבחין באיתות, <b>לאפשר</b> לנהג שאותת להשלים את הפעולה אותה התכוון לבצע <b>ואפילו להאט או לעצור</b>, על מנת לסייע לו בכך.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>בשעה שהוא מתכוון <b>להתחיל בנסיעה</b>. 
                                </li>
                                <li>בשעה שהוא מתכוון <b>לסטות מנתיב נסיעתו</b>. 
                                </li>
                                <li>בשעה שהוא מתכוון <b>לפנות</b>.</li>
                                <li>בשעה שהוא מתכוון <b>להאט או לעצור</b>.
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "תקלה במערכת האיתות": {
                        "תקלה במערכת האיתות" : [
                            {
                                cardType: `text`,
                                content: `האיתות בכלי הרכב המודרניים, הינו חשמלי. אולם כשמתגלה תקלה במערכת האיתות, רשאי הנהג להמשיך בנסיעה עד לתיקון התקלה, תוך שהוא <b>מאותת באופן ידני</b>.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `<b>כיצד לאותת באופן ידני?</b>
                                <ul>
                                <li><b>תחילת נסיעה</b> - הוצאת יד עד המרפק בקו אופקי.
                                </li>
                                <li><b>סטייה שמאלה או פניה שמאלה</b> - הוצאת יד עד המרפק בקו אופקי.
                                </li>
                                <li><b>סטייה ימינה או פניה ימינה</b> - סיבוב היד בכיוון השעון.
                                </li>
                                <li><b>האטה או בלימה</b> - הנעה מעלה ומטה של היד השמאלית.
                                </li>
                                </ul>
                                מותר, אם נסיבות העניין מורות על כך, להוסיף איתות ידני בנוסף לאיתות החשמלי.

                                `
                            },
                        ],
                        "אמצעי האיתות העומדים לרשות הנהג" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li><b>מחווני כיוון</b> - בהם יעשה שימוש לפני תחילת נסיעה, לפני סטייה ולפני פניה.
                                </li>
                                <li><b>הבלם</b> - בו יעשה שימוש בהאטה ולפני עצירה.  
                                </li>
                                <li><b>צופר הרכב</b> - המהווה גם הוא אמצעי אזהרה מפני סכנה.
                                </li>
                                </ol>`
                            },
                        ],
                    },
                }
            },
            //מצגת 10
            "רכב ביטחון": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `threePicsAndText`,
                                pic1: `../assets/images/pics/car1.png`,
                                pic2: `../assets/images/pics/car2.png`,
                                pic3: `../assets/images/pics/car3.png`,
                                content: `הפרק ידון <b>בחובותיו</b> של הנהג כלפי <b>רכב ביטחון</b> ובזיהויו של רכב כזה. <br>
                                רכב משטרה, אמבולנס, רכב כיבוי אש ורכב צה"לי, בעת שהם <b>מאירים באור מהבהב</b> (כחול, כחול- אדום, או אדום) ומשמיעים אות אזעקה (סירנה), יוגדרו כ"רכב ביטחון בתפקיד". 
                                `
                            },
                        ],
                    },
                    "נהיגה בסביבת רכב ביטחון": {
                       "נהיגה ליד רכב ביטחון" : [
                            {
                                cardType: `text`,
                                content: `בראותך רכב ביטחון מתקרב, עליך <b>להימין</b> ככל האפשר לשפת הכביש, לעצור שלא בתוך צומת ולתת זכות קדימה לרכב הביטחון. <br>
                                בנסיעה אחרי רכב ביטחון, יש לשמור ממנו <b>מרחק</b> של 100<b> מ' לפחות</b>. <br>
                                הולכי רגל נדרשים <b>לפנות</b> מיד את הכביש בהתקרב רכב ביטחון. 
                                `
                            },
                            {
                                cardType: `text`,
                                content: `הופעת רכב ביטחון מאחוריך, <b>אינה מתירה</b> לך לחצות צומת באור אדום. <br>
                                עלייך להמתין למופע האור הירוק ורק אז לחצות את הצומת, לעצור בצד הדרך ולתת לרכב הביטחון לעבור. <br>
                                שים לב- רכב ביטחון בתפקיד <b>רשאי לנוע בכביש חד סטרי</b>, בניגוד לכיוון התנועה. 
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 12
            "צומת": {
                learningContent: {
                    "הקדמה": { 
                        "הקדמה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road17.jpg`,
                                content: `בפרק זה נכיר את הבעייתיות המאפיינת את הצומת ואת הדרכים הנכונות להתקרב אליו ולחצותו בבטחה.`
                            },
                        ],
                    },
                    "הבעיות המאפיינות את הצומת": {
                        "סיכונים בצומת" : [
                            {
                                cardType: `text`,
                                content: `<b>הצומת והדרכים המובילות אליו, מאופיינים במספר רב של סיכונים ובעיות:</b>
                                <ol>
                                <li><b>נפח תנועה גדול יותר</b>, שכן אל הצומת מתנקזים מספר כבישים. כמויות הרכבים הגדולות יותר, שחלקם נוסעים בכיוונים היוצרים פוטנציאל <b>התנגשות</b> עם כלי רכב אחרים. בנוסף, נוטים כלי הרכב לשמור על <b>רווחים קטנים יותר</b> ביניהם בצמתים. הנהג נדרש להגיב מהר ונכון, בפרק זמן קצר לפעולותיהם הנכונות והשגויות של יתר הנהגים.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="2">
                                <li><b>מספר גבוה של הולכי רגל</b> המתרכזים בצומת. יש לזכור- בצמתים מרוכזים מעברי החציה והולכי רגל נוטים לחצות כבישים בצמתים ובקרבתם. חלקם חוצים את הכביש כחוק וחלקם לא. באלה וגם באלה <b>חייב הנהג להתחשב</b>. 
                                </li>
                                <li><b>ריבוי תמרורים</b> לקראת הצומת ובתוכו, דבר המחייב את הנהג לקלוט את כולם, לזהות את משמעותם ולפעול על פיהם, <b>הכל בפרק זמן קצר יחסית</b>. 
                                </li>
                                </ol>`
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="4">
                                <li>על הנהג לבצע <b>מטלות רבות בזמן קצר יחסית</b>, תוך שהוא חייב לקלוט בפרק זמן קצר זה את כל המידע הרלוונטי לגביו - כבישים, כיווני תנועה, כלי רכב, עוברי דרך אחרים וכו.
                                </li>
                                <li><b>פני הכביש בצמתים</b>, עלולים לא פעם להיות <b>חלקים יותר</b>, עקב שחיקת צמיגי המכונית העוצרות בצומת ובקרבותו, סימוני הכביש, מעברי חציה ועוד. כתוצאה מכך, עלול <b>נסיון עצירה בצומת להיות מסוכן יותר</b>, מאשר עצירה בכביש רגיל. 
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "כיצד להתקרב אל הצומת": {
                        "התקרבות לצומת" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road9.png`,
                                content: `נהג המתקרב לצומת, על שלל הבעיות והסיכונים שבו, חייב להתחשב בסוג הרכב הוא נוהג, מטענו, משקלו, יכולת התימרון שלו ומצב התנועה שלפניו.`
                            },
                        ],
                        "התמודדות עם סכנות הצומת" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li><b>להאט</b> את המהירות הנסיעה לקראת הצומת.</li>
                                <li><b>להתבונן רחוק</b> לשם איתור סיכונים קרובים. 
                                </li>
                                <li><b>לבדוק</b> לפני הכניסה לצומת <b>אם ניתן לצאת ממנו</b> מבלי להיעצר במרכזו עקב מצב התנועה. 
                                </li>
                                <li>להשתדל ולבצע חלק מהפעולות (כגון הורדת הילוכים), כבר בהתקרבות אל הצומת ולא בתוכו. 
                                </li>
                                </ol>
                                זכור - הינך מבחין בצומת זמן רב לפני שהינך מגיע אליו, באמצעות התמרורים השונים המורים על ההתקרבות אליו. 
                                `
                            },
                        ],
                        "נהיגה בצומת": {
                            "נהיגה בתוך צומת" : [
                                {
                                    cardType: `text`,
                                    content: `<b>חל איסור על עקיפה בתוך תחום הצומת</b>.<br>
                                    אולם אם טור הרכבים <b>הימני נע מהר יותר</b> מהטור השמאלי, לא ייחשב הדבר כעקיפה.
                                    `
                                },
                            ],
                        },
                    },
                }
            },
            //מצגת 13
            "מתן זכות קדימה": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `twoPicsAndText`,
                                pic1: `../assets/images/pics/sign3.png`,
                                pic2: `../assets/images/pics/sign4.png`,
                                content: `הפרק ייתמקד במתן זכות קדימה.
                                נגדיר מהם המקרים בהם חייב נהג רכב אחד לתת זכות קדימה לאחר. <br>זכור- זכות הקדימה לעולם אינה זכות שחובה לנצל, אולם מתן זכות קדימה, הינה חובה שיש לקיימה, במקרים בהם נדון. 
                                `
                            },
                        ],
                    },
                    "זכות קדימה": {
                        "הגדרה" : [
                            {
                                cardType: `text`,
                                content: `<b>מתן זכות קדימה</b>- הזכות שעל נוהגים ברכב לתת למשתמשים אחרים בדרך, על מנת לשמור על הסדר ועל בטיחותם של הנמצאים בכביש. <br>
                                זכות הקדימה ניתנת לכלי רכב אחרים וגם להולכי רגל. 
                                `
                            },
                        ],
                    },
                    "זכות קדימה בצומת": {
                        "זכות הקדימה בצומת" : [
                            {
                                cardType: `text`,
                                content: `כללי זכות הקדימה בצמתים מוסדרים באמצעות הרמזורים והתמרורים. 
                                רמזור אדום ותמרור עצור, <b>מחייבים עצירה</b>.
                                במקום בו ניתן לראות את התנועה ואם סומן במקום קו עצירה, יש לעצור <b>לפניו</b> ובנוסף - יש לתת זכות קדימה לכלי הרכב האחרים הנמצאים בצומת או מתקרבים אליו.<br> 
                                תמרור "תן זכות קדימה", <b>מחייב מתן זכות קדימה</b>, כלומר האטה ואפילו עצירה (שוב - במקום בו ניתן לראות את התנועה ואם סומן קו עצירה, לפני קו העצירה), על מנת לתת זכות קדימה לתנועה בדרך החוצה. 
                                `
                            },
                            {
                                cardType: `text`,
                                content: `יתר כללי זכות קדימה בצומת, חלים בכל אותם המקרים בהם <b>לא מוצבים רמזורים, או תמרורים</b> בצומת ואז:
                                <ol>
                                <li>בהתקרבות לצומת, יש לתת זכות קדימה לרכב הבא <b>מימן</b>. 
                                </li>
                                <li>במידה והנהג צריך לפנות שמאלה, עליו לתת זכות קדימה <b>לרכב הבא מולו</b> (ואין זה משנה כלל, לאן הרכב שמולו מתכוון לנסוע). 
                                </li>
                                </ol>
                                זכור- שני הכללים הנ"ל מצטברים, כלומר רכב המתכוון לפנות שמאלה בצומת שאינו מרמזור או מתומרר, יתן זכות קדימה לרכב שמימינו וגם לרכב ממולו. 
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road21.jpg`,
                                content: `
                                <ol start="3">
                                <li>כשנדלק ברמזור <b>אור צהוב מהבהב</b>, לפני מעבר חציה משמעו חובת מתן זכות קדימה <b>להולכי הרגל החוצים</b>.</li>
                                <li>ככלל - אין להיכנס כלל לצומת, אלא אם בטוח הנהג <b>שיוכל להשלים את חצייתו</b> ולא ייעצר בתוך הצומת. 
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "מפגשים שאינם צמתים": {
                        "זכות הקדימה לא בצומת" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>רכב היוצא מדרך עפר, משביל גישה לבית, או מחצר, מדרך גישה לתחנת דלק, יתן זכות קדימה <b>לתנועה בדרך סלולה</b>. <br>
                                זכור- מפגש של דרך עפר עם כביש, אינו מוגדר "צומת", אלא אם <b>מוצב במקום תמרור</b> המעיד על מפגש כי הוא "צומת" בהגדרתו בתקנות. 
                                </li>
                                <li>רכב היוצא משביל גישה לבית, או מחצר <b>ומתכונן לחצות מדרכה</b> יתן זכות קדימה <b>להולכי הרגל שבמדרכה</b> ובמידת הצורך, יעצור, על מנת לאפשר להם לעשות שימוש בטוח במדרכה. 
                                </li>
                                <li>על נוהג המגיע <b>להתמזגות עם כביש שבו זכות קדימה</b> (לרוב מדובר בנתיב האצה, או מעין נתיב האצה), לתת זכות קדימה <b>לתנועה בכביש</b> אליו הוא מתמזג. 
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "בעת נסיעה בכביש": {
                        "זכות קדימה בזמן נסיעה בכביש" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>לפני תחילת הנסיעה, יש לתת זכות קדימה לתנועה <b>הנוסעת בכביש</b>. 
                                </li>
                                <li>רכב הנוסע במורד תלול, יתן זכות קדימה <b>לרכב העולה</b>. 
                                </li>
                                <li>רכב שנתיבו נחסם, יתן זכות קדימה לרכב <b>המגיע ממול ושנתיבו פנוי</b>. 
                                </li>
                                <li>רכב שנתיב נסיעתו מסתיים, תוך שהוא "מתמזג"  עם נתיב סמוך, יתן זכות קדימה <b>לכלי הרכב בנתיב אליו הוא מתמזג</b>. 
                                </li>
                                <li>נהג המתקרב למעבר חציה, שהולכי הרגל עושים בו שימוש באותו הזמן, <b>יאט ואף יעצור</b> על מנת לתת להם זכות קדימה ולאפשר להם להשלים את חצית הכביש בבטחה.
                                </li>
                                </ol>`
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/raod22.jpg`,
                                content: `אם הכביש מחולק באמצעות שטח הפרדה, רואים כל חלק משני עברי שטח ההפרדה ככביש נפרד. <br>
                                מכאן אנו מבינים שיש לתת זכות קדימה <b>להולכי רגל החוצים בכל מקטע של הכביש כחלק נפרד</b>.
                                `
                            },
                        ],
                        
                    },
                }
            },
            //מצגת 18
            "תאונות דרכים וחובות הנהג": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/accident.png`,
                                content: `בפרק זה נסקור את חובותיו של נהג רכב בשני מקרים:
                                <ol>
                                <li>בעת שהוא עובר ליד מקום תאונת דרכים, שבה הוא <b>אינו מעורב</b> כלל.
                                </li>
                                <li>בעת שהוא <b>מעורב</b> בעצמו בתאונת דרכים.
                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "הנהג לא מעורב בתאונה": {
                        "הנהג לא מעורב בתאונה" : [
                            {
                                cardType: `text`,
                                content: `נהג המגיע למקום תאונת הדרכים, יעצור את רכבו בצד הדרך, יגיש לנפגעים <b>עזרה</b> כמידת הכשרתו הרפואית, <b>ירחיק</b> את הסקרנים שמסביב וידאג <b>להזעיק את שירות ההצלה</b>. 
                                `
                            },
                        ],
                    },
                    "הנהג מעורב בתאונה": {
                        "הנהג מעורב בתאונה" : [
                            {
                                cardType: `text`,
                                content: `כשהנהג עצמו מעורב בתאונה, עליו למסור את <b>שמו, כתובתו ומספר תעודת הזהות</b> שלו לכל אדם שהיה מעורב בתאונה (גם אם אינו נהג, אלא רק נוסע ברכב אחר) וכן להציג בפניהם את <b>רישיון הנהיגה, רישיון הרכב ותעודת ביטוח חובה</b>.
                                `
                            },
                        ],
                    },
                    "סוגי תאונות דרכים": {
                        "תאונה עם נפגעים" : [
                            {
                                cardType: `text`,
                                content: `בנוסף למסירת הפרטים והצגת מסמכים:
                                <ol>
                                <li><b>אין להזיז</b> את כלי הרכב המעורבים בתאונה, אלא לפי הוראות שוטר, או לשם פינוי נפגע לבית חולים, כשאין כל דרך אחרת לעשות זאת, אלא רק באמצעות אחד כלי הרכב המעורבים בתאונה. 
                                </li>
                                <li>אדם שלא מעורב בתאונה יגיש לנפגעים עזרה כמידת הכשרתו הרפואית <b>וידווח למשטרה</b> מוקדם ככל האפשר. 
                                </li>
                                </ol>
                                `
                            },
                        ],
                        "תאונה ללא נפגעים – נזק לרכוש" : [
                            {
                                cardType: `text`,
                                content: `בנוסף למסירת הפרטים והצגת מסמכים: <br>
                                <b>חובה להזיז את כלי הרכב</b>, על מנת שלא יפריעו לזרימה התקינה של התנועה בדרך. 
                                `
                            },
                        ],
                        "תאונה עם רכוש ללא בעלי הרכב" : [
                            {
                                cardType: `text`,
                                content: `למשל בעת פגיעה ברכב חונה, שנהגו לא נמצא לידו או בגדר בית וכו. <br>
                                על הנהג להשאיר במקום בולט על הרכוש עצמו (למשל מתחת למגב השמשות ברכב הנפגע) דף שבו יציינו <b>פרטיו האישיים של הנהג הפוגע</b> וכיצד ניתן לאתרו וכן עליו <b>להודיע</b> על התאונה <b>תוך 24 שעות</b> לתחנת משטרה, אלא אם היה במקום התאונה שוטר וההודעה נמסרה לו במקום. 
                                `
                            },
                        ],
                    },
                    "אפוד זוהר": {
                        "החזקת אפוד זוהר" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/pic.jpg`,
                                content: `ברכב מנועי למעט אופנוע, יימצא אפוד זוהר העומד בדרישות התקן. האפוד יימצא בתא הנהג, נוהג רוכב או נוסע היוצא ונמצא מחוץ לרכב <b>בדרך בינעירונית</b> בסמך לכביש (למעט מדרכה) או בשולי הדרך לשם תיקון או בדיקת הרכב <b>ילבש</b> אפוד זוהר, יתר הנוסעים יתרחקו מהכביש ככל האפשר. 
                                `
                            },
                        ],
                    },
                }
            }
            
        }
    },
    "בטיחות": {
        "icon": "",
        "questions": [],
        lessons: {
            //מצגת 11
            "תאורה ותנאי נהיגה בלילה": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק נדון בקשיי הנהיגה בלילה ובכל זמן אחרי בו תנאי הראות לקויים. <br>
                                כמו כן יובהרו המונחים הקשורים בתאורת הרכב וכללי הפעלתם. 
                                `
                            },
                        ],
                    },
                    "זמן תאורה ולילה ": {
                        "מושגים" : [
                            {
                                cardType: `text`,
                                content: `"<b>זמן תאורה</b>"- זמן הלילה וכן זמן אחר שבו <b>הראות לקויה</b> מחמת תנאי מזג האויר, או מחמת סיבות אחרות.
                                <br>
                                "<b>לילה</b>"- פרק הזמן שבין תום רבע שעה לאחר שקיעת השמש לבין תחילת רבע שעה לפני הזריחה. 
                                `
                            },
                        ],
                    },
                    "נהיגת לילה": {
                        "הסיכונים בנהיגה בלילה" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>שדה ראיה <b>מוגבל</b>.
                                </li>
                                <li>קשיים באומדן מרחק ומהירות</b> של כלי רכב אחרים.
                                </li>
                                <li><b>סינוור</b> מהרכב הבא ממול ומהרכב הנוסע מאחור.
                                </li>
                                <li>תיתכן גם <b>עייפות</b> מתגברת.
                                </li>
                                </ol>`
                            },
                        ],
                        "מהירות ותאורה" : [
                            {
                                cardType: `text`,
                                content: `נהג הנוהג בלילה, או בעת שהראות לקויה מחמת תנאי מזג אוויר קשים למשל, <b>יאט</b> את מהירות נסיעתו. <br>
                                יתרה מזאת, מהירותו צריכה להיות כזו שתהיה תואמת את <b>טווח האורות</b>. <br>
                                <b>אין לנהג ברכב שאורותיו אינם תקינים. </b>
                                `
                            },
                        ],
                        "המנעות אישית מסינוור" : [
                            {
                                cardType: `text`,
                                content: `על מנת להימנע מסינוור, יש להפנות את המבט ימינה, אל עבר שול הכביש והפס הצהוב המסמן את שפת הכביש ולסמן ("להבהב") קלות לנהג המסנוור.`
                            },
                        ],
                    },
                    "תאורה ברכב": {
                        "מערכות תאורה ברכב" : [
                            {
                                cardType: `text`,
                                content: `<b>לרכב שלוש מערכות תאורה עיקריות: </b>
                                <ol>
                                <li><b>אור חניה</b> - כשמו כן הוא - אין לנהוג באורות חניה והם משמשים לאזהרה בשעת חניה בלבד.
                                <span><img class="sml-pic" src="../assets/images/pics/light1.png"/></span>
                                </li>
                                <li>. <b>אור נמוך</b> - אלו הם האורות "שיש להפעיל <b>בנסיעה בדרך עירונית</b> ובכל פעם שקיים חשש כי שימוש באורות הגבוהים ביותר, יסנוור נוהג אחר. והיא מאירה למרחק של כ- <b>30 מטר</b>. 
                                <span><img/ class="sml-pic" src="../assets/images/pics/light2.png"></span>
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="3">
                                <li>
                                <b>אור גבוה</b> - האורות "הגבוהים"- טווח האורות הוא כ- <b>100 מטר</b> והם עלולים לסנוור את הנהג המגיע ממול וכן את הנהג הנמצא לפנים (בעת שאלומת האור משתקפת במראותיו). 
                                מותר לנהוג באור זה <b>בדרך שאינה עירונית</b> (בתנאי שלא נגרם סינוור) וכן <b>בדרך עירונית</b>, בעת שזו אינה מוארת כראוי.
                                <span><img/ class="sml-pic" src="../assets/images/pics/light4.png"></span>
                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "יתר הפנסים ברכב": {
                        "פנסים נוספים" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li><b>פנסים לנהיגה לאחור</b> - אורות המופעלים אוטומטית בעת נסיעה לאחור.
                                <span><img/ class="sml-pic" src="../assets/images/pics/light6.png"></span>
                                </li>
                                <li><b>מחווני כיוון</b>.
                                <span><img/ class="sml-pic" src="../assets/images/pics/light5.png"></span>
                                </li>
                                <li><b>פנסי ערפל</b> (לא בכל רכב)- מותר להפעילם רק בעת ערפל, גשם שוטף או שלג.
                                <span><img/ class="sml-pic" src="../assets/images/pics/light2.png"></span>
                                </li>
                                <li><b>פנסי רוחב,</b> ברכב רחב. 
                                <span><img/ class="sml-pic" src="../assets/images/pics/light7.png"></span>
                                </li>
                                <li><b>זרקור</b> - הקיים בסוגים מסוימים של כלי רכב ואשר מותר להפעילו בעת עצירה בלבד ולהפנותו רק לכיוון צידי הדרך ולא אל עבר התנועה.
                                <span><img/ class="sml-pic" src="../assets/images/pics/light8.png"></span>
                                </li>
                                <li>אורות נוספים כגון אור לוחית הזיהוי, פנסי אזהרה צהובים מהבהבים בסוגי רכב מסויימים ועוד. 
                                </li>
                                </ol>
                                `
                            },
                        ],
                    },
                    "סינוור": {
                        "מניעת סינוור" : [
                            {
                                cardType: `text`,
                                content: `<b>על מנת שלא לסנוור כלי רכב אחרים, חייב הנהג:</b>
                                <ol>
                                <li>לדאוג מראש <b>לכיוון</b> נכון של <b>הפנסים</b> ברכב.
                                </li>
                                <li>בכלי רכב בהם ניתן לכוון את הפנסים מתוך הרכב, או שקיים התקן נח אחר לכיוונם, רצוי לשנות את זווית הפנסים, כל עוד שהרכב עמוס מאחור בנוסעים או במטען.
                                </li>
                                <li><b>לעמעם את אורותיו</b> (כלומר להחליף את אור הגבוה באור נמוך), <b>כל עוד שרכב שמגיע ממול</b>.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="4">
                                <li><b>לעמעם את אורותיו</b> בכל עת שאלומת האור של רכבו מאירה את <b>חלקו האחורי של הרכב שלפניו</b>, על מנת למנוע סינוור הנהג שלפנוי במראות.
                                </li>
                                <li><b>לעמעם את אורותיו</b> כל עוד <b>שהרכב בעצירה</b> בדרך המיועדת לתנועה ובעת חניה בדרך כזו - לכבות את אורות המעבר ולהדליק את פנסי החניה.
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "כלי רכב מיוחדים ורכבים": {
                        "תאורת רכבים מיוחדים" : [
                            {
                                cardType: `text`,
                                content: `מכונה ניידת או נגררת יוארו באמצעות <b>פנס מהבהב אדום</b>, שיותקן <b>מצידו השמאלי</b> של הרכב ובהיעדרו, יותקנו מחזירי אור במקום זה.<br> 
                                בעת נהיגת רכב שרוחבו 210 ס"מ ומעלה, יופעלו בו גם <b>פנסי הרוחב</b>. בשעת החנייתו של רכב כזה, יש להפעיל בו בנוסף לפנסי הרוחב, גם את הפנס האחורי. 
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 14
            "עצירה וחנייה": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נחזור על ההבדל שבין <b>עצירה, חניה והעמדת הרכב</b>. <br>
                                כמו כן נבדוק מתי מותר להעמיד רכב וכיצד יש לעשות זאת נכון. <br>
                                בנוסף, נסקור את המקרים בהם אסורה חנית רכב ואפילו עצירתו. 
                                `
                            },
                        ],
                    },
                    "הגדרת חניה ועצירה": {
                        "חניה" : [
                            {
                                cardType: `text`,
                                content: `<b>חניה</b>- העמדת רכב לזמן כל שהוא, <u>שלא לשם העלאת אנשים או הורדתם, טעינת מטען או פריקתו</u> מיד, בלי הפסקות, בין שיש ברכב נהג או אנשים או מטען ובין שאין. 
                                `
                            },
                        ],
                        "עצירה" : [
                            {
                                cardType: `twoPicsAndText`,
                                pic1: `../assets/images/pics/car17.png`,
                                pic2: `../assets/images/pics/car18.png`,
                                content: `<b>עצירה</b> – העמדת רכב <u>לצורך פריקה וטעינה של מטען ברציפות, ללא הפסקות וכן העלאת נוסעים והורדתם</u>, גם כן ברציפות וללא הפסקות. <br>
                                כך למשל <b>לא</b> תוגדר עצירה קצרה כ"חניה" לצורך העלאת נוסע או הורדתו וכן פריקה או טעינה רציפים של מטען מרכב. 
                                `
                            },
                        ],  
                    },
                    "חניה נכונה": {
                        "חניה" : [
                            {
                                cardType: `text`,
                                content: `<b>כיצד לחנות נכון, במקום בו החניה מותרת</b>:
                                עקרונית מותר להחנות רכב רק <b>בדרך עירונית</b> (בתנאי שאין איסור מפורש על כך).<br>
                                לפני חניה, על הנהג לוודא כי במקום בו הוא מתכנן לחנות, אכן מותר לחנות, הוא <b>יבדוק את השטח מסביב לרכב</b>, באמצעות המראות ומבעד לשמשות הרכב, <b>יאותת</b> ורק אז <b>יסטה לכיוון מקום החניה</b>. 
                                הרכב יוחנה במקביל למדרכה, באופן שהמרחק בין גלגליו למדרכה (או לשפץ הכביש) <b>לא</b> יעלה על<b> 40 ס"מ</b> לכל היותר. 
                                `
                            },
                        ],
                        "היכן מותר לחנות" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road23.png`,
                                content: `בכביש חד סטרי, ניתן לחנות משני צידי הכביש, <b>עם כיוון התנועה</b>, אולם מכביש דו סטרי, שהפך לשני כבישים חד סטריים, באמצעות בניית שטח הפרדה, <b>אין לחנות בצד השמאלי</b>, בצמוד לשטח ההפרדה (אלא אם קיים תמרור המורה אחרת). <br>
                                בכביש דו סטרי, שבו יותר מנתיב אחד בכל כיוון נסיעה (ורק בכביש דו סטרי כזה), מותר לחנות <b>רק בצד ימין</b>, <b>במקביל למדרכה</B>, או <b>לאבן השפה</b>. בכביש דו סטרי שבו רק נתיב אחד בכל כיוון נסיעה, <b>אסור לחנות</b>. 
                                `
                            },
                        ],
                        "לשים לב בעת חניה" : [
                            {
                                cardType: `twoPicsAndText`,
                                pic1: `../assets/images/pics/sign5.png`,
                                pic2: `../assets/images/pics/sign6.png`,
                                content: `בעת חניה, יש <b>להבטיח</b> את הרכב מפני הידרדרות ולנקוט בכל האמצעים לשם כך: 
                                <ol>
                                <li>לדומם מנוע ומנגנון הדלקה, להוציא את המפתח ממתג ההצתה, להפעיל בלמי חניה, ככל שהם קיימים ברכב. 
                                </li>
                                <li>לשלב להילוך קדמי-ראשון (במישור, או בעליה), להילוך אחורי במורד, או למצב של חנייה P שמדובר ברכב אוטומט. 
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                pic: `../assets/images/pics/car19.jpg`,
                                content: `
                                <ol start="3">
                                <li><b>להפנות את הגלגלים</b> לכיוון מדרכה או שפת הכביש, בעת חניה במורד או בעליה. <br>
                                <b>החריג לכך</b> - בעת חניה במעלה שיש בו מדרכה, או אבני שפה, יש לסובב את הגלגלים לכיוון מרכז הכביש. הסיבה לכך ברורה- אם ידרדר הרכב, הרי שהוא ייעצר מהר יותר ע"י אבני השפה או מדרכה, בעת שהגלגלים מופנים לעבר מרכז הכביש. 
                                </li>
                                <li>בעת חנית רכב פרטי <b>שהתקלקל</b> בדרך אינה עירונית, <b>יש להציב משולש אזהרה</b>, שיוצב באופן שיראה למרחק <b>100 מטר </b>לפחות לנוהג רכב המגיע מאחור. 
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "איסור חניה": {
                        'איסור חניה במקומות הנ"ל' : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li><b>בדרך שאינה עירונית</b>, פרט לדרך מהירה שבה אסור לעצור בשוליים (למעט מקרים מיוחדים שיוסברו בהמשך), מותר לעצור בשולי הדרך להעלאה או הורדת נוסעים, למעט לשם ביצוע עבודות ציבוריות, שאין דרך אחרת לבצען וכן רכב צה"ל לשם מילוי תפקיד צבאי ולמן עזרה לנהג או רכב (חילוץ נפגעים). 
                                </li>
                                <li>באופן הגורם <b>לעיכוב</b> או <b>הפרעה לתנועה</b>, או באופן הגורם <b>להסתרת תמרור או חלקו</b>. 
                                </li>
                                <li><b>במקביל לכביש אחר</b>. </li>
                                <li><b>על גשר</b>.
                                </li>
                                </ol>`
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="5">
                                <li>בכביש דו סטרי, שבו <b>נתיב אחד בלבד</b> בכל כיוון נסיעה.
                                </li>
                                <li>בניצב <b>לשפת הכביש</b>, או בזווית כלשהי ביחס אליה (אלא אם מסומן אחרת).
                                </li>
                                <li><b>לצד מעקה בטיחות</b>.
                                </li>
                                <li><b>על מדרכה</b> (אלא אם מסומן אחרת) ועל <b>שביל המיועד לאופניים</b>. 
                                </li>
                                <li>בכל מקום בו מוצב <b>תמרור האוסר על חניה</b> ועד הצומת הקרוב. 
                                </li>
                                <li><b>בתחנת מונית</b>, למעט להורדת נוסע. 
                                </li>
                                </ol>`
                            },
                        ],
                        "ברז כיבוי" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/beam.jpg`,
                                content: `אסור לחנות ליד ברז כיבוי אש ובטווח של 2 מטר מכל צד שלו. 
                                `
                            },
                        ],
                        "צומת" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road24.png`,
                                content: `בתחום הצומת ובטווח של 12 מטר לפניו ואחריו (אלא אם סומן אחרת).
                                `
                            },
                        ],
                        "מעבר חציה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road22.jpg`, 
                                content: `על מעבר חציה ובתחום של 12 מטר לפניו.`
                            },
                        ],
                        "קו עצירה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road22.jpg`, 
                                content: `החל מ 12 מטר לפני קו עצירה.`
                            },
                        ],
                        "תחנת אוטובוס" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/bus.jpg`,
                                content: `בתחנת אוטובוס ובטווח של 20 מטר לפניה ואחריה. אם רוחב הכביש קטן מ 12 מטר, אסור גם לחנות ממול לתחנת אוטובוס, באותם הטווחים.`
                            },
                        ],
                        "מסילת ברזל" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road25.jpg`,
                                content: `על מפגש מסילת ברזל ובטווח של 20 מטר לפני הפס הקרוב ו- 20 מטר אחריו.`
                            },
                        ],
                        "מנהרה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road26.png`, 
                                content: `בתוך מנהרה בטווח של 50 מ' לפניה ואחריה.`
                            },
                        ],
                    },
                    "איסור עצירה וחניה": {
                        "איסור עצירה וחניה" : [
                            {
                                cardType: `threePicsAndText`,
                                pic1: `../assets/images/pics/sign7.png`,
                                pic2: `../assets/images/pics/sign5.png`,
                                pic3: `../assets/images/pics/sign9.png`,
                                content: `
                                <ol>
                                <li>. <b>בדרך מהירה</b> – גם לא לשם העלאת נוסעים או הורדתם. מותר <b>לעצור בדרך כזו רק עקב קילקול או אם סומן אחרת</b>.
                                </li>
                                <li>בכל מקום בו <b>מוצב תמרור</b> האוסר על עצירה ועד לצומת הקרוב.
                                </li>
                                <li>במקום בו מוצב תמרור "<b>מקום חנייה לנכה משתוק רגליים</b>".
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "יציאה מחניה": {
                        "יציאה מחניה" : [
                            {
                                cardType: `text`,
                                content: `לאחר שחנית, או עצרת בצד הכביש, עליך לחזור אליו ולהמשיך בנסיעתך. תחילה, יש לבדוק אם ניתן להיכנס לכביש ללא גרימת הפרעה או סיכון לתנועה, <b>לאותת</b> ורק אז להשתלב בתנועה הנוסעת.
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 17
            "הנחיות מיוחדות": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נסקור בקצרה את ההנחיות המיוחדות לעוברי הדרך הבאים: אופנועים, אופניים, הולכי רגל, רכבי שטח, טרקטורים, טרקטורונים, מכונות ניידות ומוליכי בעלי חיים.
                                `
                            },
                        ],
                    },
                    "אופנוע": {
                        /* cardType: `picAndText`,
                          pic: `../assets/images/pics/x.png`, **/
                        "דגשים לרוכב האופנוע" : [
                            {
                                cardType: `text`,
                                content: `על רוכב אופנוע חלים כל כללי הנהיגה החלים על כלי הרכב בעלי ארבעה גלגלים, אך על הרוכב לזכור היטב: 
                                <ol>
                                <li>צלליתו הקטנה של האופנוע גורמת לעתים לכך שהוא <b>אינו נראה</b> כלל לעיני נהגי המכוניות. 
                                </li>
                                <li><b>האצות, בלימות ושינויי כיון מהירים</b>, עלולים להיות <b>מסוכנים</b> בהרבה באופנועים ולכן יש לנהוג כך שכל אלה יעשו באופן הדרגתי ולא בפתאומיות.
                                </li>
                                <li>אופנוע עלול להחליק לא רק בגלל כתמי שמן בכביש. מים שנזלו לכביש אחרי השקיית צמחיה בכיכר, חול, חצץ, כורכר- כל אלה, כשהם מצטרפים להיטה חזקה מידי, בלימה חזקה, או האצה חזקה, עלולים לגרום לרוכב האופנוע לאבד את השליטה על כלי הרכב.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="4">
                                <li>אין להוביל <b>מטען פגום</b> ביכולת השליטה באופנוע.
                                </li>
                                <li><b>אין לנהוג במקביל</b> לרכב אחר, גם לא במקביל לרכב דו גלגלי אחר.
                                </li>
                                <li>לרוכב אופנוע בנפח 12 סמ"ק, שגילו נמוך מ-18 <b>אסור להסיע נוסע נוסף</b>.
                                </li>
                                <li><b>לרוכב חדש</b>, אסור להסיע נוסע נוסף <b>בחודשיים הראשונים</b>.
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "אופניים": {
                        "דגשים לרוכבי אופניים" : [
                            {
                                cardType: `text`,
                                content: `עקרונית, חלים כללי התנועה גם על רוכבי אופניים. 
                                עליהם <b>לחבוש קסדות בטיחות</b> בעת הרכיבה ולנסוע בחלקו הימני ביותר של הכביש בצמוד לשפת הכביש. <br>
                                מותר להרכיב נוסע נוסף על אופניים,  בתנאי שגילו של הנוהג בהם <b>מעל 14 שנים</b> וגיל הרוכב קטן מ-<b> 8 שנים</b>. 
                                זכור- גם לרוכב אופניים <b>מותר </b>לנסוע בנתיב המיועד לתחבורה ציבורית בלבד.
                                `
                            },
                        ],
                    },
                    "הולכי רגל": {
                        "דגשים להולכי רגל" : [
                            {
                                cardType: `text`,
                                content: `ככלל, רשאים הולכי רגל לנוע <b>במדרכה</b>, או <b>בשביל שהוקצה במיוחד עבורם</b>. 
                                אם אין מדרכה, עליהם ללכת <b>בשול הכביש</b> ואם הם חייבים לנוע בכביש, הרי שעליהם לנוע <b>נגד כיוון התנועה</b>, כלומר צמוד לשפתו השמאלית של הכביש כשפניהם אל מול פני התנועה המתקרבת. 
                                `
                            },
                        ],
                        "חציית מסילת רכבת" : [
                            {
                                cardType: `text`,
                                content: `לפני חציית פסי רכבת, חייב ההולך לוודא <b>שאין רכבת מתקרבת</b> ושניתן לחצות את המסילה <b>בבטחה</b>. <br>
                                אם הוא ממתין, עד שהרכבת תחלוף, עליו לשמור מרחק של 6 מטר לפחות מהפס הקרוב אליו. <br>
                                בשום מקרה אין הולך רגל רשאי לחצות את מפגש מסילת הברזל אם <b>המחסום נמצא בתנועה</b>, בין שהוא עולה ובין שהוא יורד. 
                                `
                            },
                        ],
                    },
                    "רכב שטח": {
                        "רכב שטח" : [
                            {
                                cardType: `text`,
                                content: `רכב שטח, כפי שהוא מוגדר בתקנות <b>אין הכוונה</b> ל"ג'יפים" ורכבי 4X4 למיניהם. ל"לרכב שטח" כזה <b>אסור לנוע בכביש</b>, אלא לשם חצייתו בלבד.<br>
                                מהירותו המירבית המותרת של רכב כזה היא<b> 40 קמ"ש</b> בלבד והוא <b>אינו רשאי להסיע נוסף</b>, אלא על פי היתר מיוחד של רשות הרישוי.<br>
                                הנוהג ברכב שטח והנוסע שעמו (ככל שיש היתר לכך כאמור) חייבים<b> לחגור חגורת בטיחות</b> בעת הנהיגה.
                                `
                            },
                        ],
                    },
                    "טרקטור משא": {
                        "טרקטור משא" : [
                            {
                                cardType: `text`,
                                content: `לטרקטור, כמו לרכב איטי אחר, <b>מותר לנוע בכביש</b>, אם כי לא מומלץ. <br>
                                במידה והוא מעכב את התנועה שמאחוריו, <b>הוא חייב להיימן</b>, לנבוע בשול, אם הוא סלול אספלט, ולאפשר <b>לתנועה שמאחוריו לעקוף אותו</b>. 
                                מהירותו המירבית המותרת של טרקטור תהיהb> 40 קמ"ש</b> והוא<b> אינו רשאי להסיע נוסע נוסף</b>, אלא על פי היתר מיוחד מרשות הרישוי.<br> 
                                נהג טרקטור והנוסע (ככל שיש היתר לגביו) חייב <b>לחגור חגורת בטיחות</b> בשעת הנסיעה בטרקטור. 
                                `
                            },
                        ],
                    },
                    "טרקטורון": {
                        "טרקטורון" : [
                            {
                                cardType: `text`,
                                content: `טרקטורן <b>אינו רשאי לנוע בכביש הציבורי</b>, אלא רק בכבישים פנימיים של מושבים וקיבוצים בלבד. <br>
                                מהירותו המירבית המותרת היא<b> 40 קמ"ש ואין להסיע בו נוסע נוסף</b>, אלא על פי היתר מיוחד של רשות הרישוי. בדומה לאופנוע, חלה <b>חובה לחבוש קסדה </b>בעת נהיגה בטרקטורון. 
                                `
                            },
                        ],
                    },
                    "מכונה ניידת" : {
                        "מכונה ניידת" : [
                            {
                                cardType: `text`,
                                content: `מכונה ניידת נועדה <b>לביצוע עבודות</b>. מכאן <b>שאין</b> לגרור עימה כל גרר שהוא, אלא רק גרור המיועד לביצוע אותה עבודה, שלשמה קיימת המכונה הניידת עצמה.<br> 
                                מהירות המירבית המותרת לא תעלה על<b> 40 קמ"ש</b>.<br> 
                                אם<b> עלה רוחבה על 255 ס"מ</b>, היא תסומן באמצעות שלטים בכיתוב: "זהירות רכב רחב" בחזית המכונה ובאחוריה.<br> 
                                אם עלה רוחבה של מכונה חקלאית על<b> 340 ס"מ</b>, יש להתקין בה מלפנים ומאחור שלט "זהירת- מטען רחב" וכן יותקנו בה <b>פנסי רוחב ותאורה היקפית</b>. 
                                `
                            },
                        ],
                    },
                    "הולכת בעלי חיים": {
                        "הולכת בעלי חיים" : [
                            {
                                cardType: `text`,
                                content: `<b>הולכת בעלי חיים בזמן תאורה:</b>
                                <ul>
                                <li>אם מדובר בבעל חיים <b>יחיד</b> - ישא עימו המוליך פנס או צהוב מצד שמאל.
                                </li>
                                <li>אם מדובר<b> בעדר </b>- יצטרף מלווה נוסף מאחורי העדר וישא גם הוא פנס כזה מאחור ומשמאל.
                                </li>
                                </ul>
                                `
                            },
                        ],
                    }
                }
            },
            //מצגת 19
            "תיבת הילוכים אוטומטית":{
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בארץ מצוידים כלי רכב מודרנים.
                                רובם בתיבת הילוכים אוטומטית  (חלקן תיבות רובוטיות, חלקן אוטומטיות רגילות). <br>
                                מאפיין תיבות אלה, הוא בעיקר חוסר הצורך לבחור בהילוך המתאים (למרות שבכלי רכב אוטומטים מסויימים, קיימת אפשרות כזו) וחוסר הצורך במצמד המופעל רגלית ע"י הנהג, כלומר במצב נהיגה רגיל, לא יעשה הנהג בשימוש ברגלו השמאלית.<br> 
                                בפרק זה נעמוד במספר <b>מאפיינים של רכב כזה</b> והשפעתם על הנהיגה.
                                `
                            },
                        ],
                    },
                    "הרכב האוטומטי": {
                        "הכרת הרכב האוטומטי" : [
                            {
                                cardType: `text`,
                                content: `בתיבה האוטומטית הנפוצה, נמצאת ידית, <b>המאפשרת בחירה בין כמה מצבים: </b>
                                <ol> 
                                <li>מצב חנייה המסומן באות P</li>
                                <li>מצב ניגה לאחור המסומן באותR </li>
                                <li>מצב סרק המסומן באותN 
                                </li>
                                <li>מצב נהיגה רגיל, המסומן באות D, או באמצעות מספר כלשהו (לרוב 1-4) 
                                </li>
                                <li>במצבים נוספים שילוב לאחד ההילוכים הנמוכים יותר והם המסומנים באמצעות האות L, או באמצעות מספרים, המסמלים הילוכים נמוכים מההילוך הגבוה ביותר. 
                                </li>
                                </ol>
                                `
                            },
                        ],
                        "מאפיינים" : [
                            {
                                cardType: `twoPicsAndText`,
                                pic1: `../assets/images/pics/car22.png`,
                                pic2: `../assets/images/pics/car23.png`,
                                content: `רכב אוטומטי, <b>קובע בעצמו</b> את ההילוך המתאים ביותר, תוך שהתיבה האוטומטית <b>משקללת את כל הרכיבים</b> ובין היתר: מהירות הרכב, מידת ההאצה, ההתנגדות (הנובעת משיפוע הדרך) וכו. 
                                `
                            },
                        ],
                        "חניה והתנעה" : [
                            {
                                cardType: `text`,
                                content: `בשעת חניה, יש לשלב רכב אוטומטי <b>להילוך חנייה P </b>, בעוד שברכב בעל תיבת הילוכים ידנית, יש כזכור צורך לשלב <b>להילוך ראשון</b>, כשמדובר על חניה במעלה <b>ושילוב להילוך אחורי</b>, כשמדובר בחניה במורד. 
                                רכב אוטומטי, יותנע, כשידית ההילוכים משולבת במצב חנייה P או לעיתים במצב סרק N.<br> 
                                על מנת להוציא את הרכב ממצב חנייה על הנהג <b>ללחוץ על דוושת הבלם</b>, כדי להבטיח את הרכב מפני דרדור. יש להמשיך וללחוץ על דוושת הבלם,<b> גם בעת שיחרור בלם היד</b>.
                                יידרש הנהג בחלק מכלי הרכב, ללחוץ על מתג שחרור בידית הילוכים <b>שיאפשר שילוב להילוך נסיעה </b>כלשהו.  
                                `
                            },
                        ],
                        "נסיעה" : [
                            {
                                cardType: `text`,
                                content: `בעת נסיעה ייתכן והנהג ירצה ביוזמתו לשלב להילוך נמוך יותר מזה שהמערכת האוטומטית שילבה.<br> 
                                כך למשל לפני עקיפה, בעת שהמערכת אינה "יודעת" שבכוונת הנהג להאיץ בעוד מספר שניות. שילוב כזה יכול שייעשה באמצעות <b>ידית ההילוכים</b>, או ע"י <b>לחיצה קצרה וחזקה</b> על <b>דוושת התאוצה</b>, שתגרום גם היא להורדה "מאולצת" של ההילוך.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `כך גם בעת נהיגה במורד תלול- המערכת האוטומטית אינה מזהה את שיפוע הדרך, אלא רק את העובדה שאין התנגדות והמנוע אינו מתאמץ ומשום כך היא <b>משלבת להילוך גבוה</b>. <br>
                                על הנהג<b> להתערב ידנית </b>ולשלב להילוך נמוך יותר, על פי מידת שיפוע הדרך, <b>כדי לשמור על מהירות נמוכה</b>, להיעזר מעט בכח המנוע להאטת הרכב ולסייע בשמירה מפני הדברת מהירות לא רצויה.
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 20
            "סמים ונהיגה": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `נהיגה בצירוף אלכוהול מסוכנת ביותר ולכן <b>אסורה</b>, בכל כמות שהיא. <br>
                                לעיתים, די בתרופה חזקה, על מנת להשפיע על כושר הנהיגה.<br> 
                                אסור בתכלית האיסור לנהוג תחת השפעת סמים משכרים, בין סמים הקרויים "קלים" ובין אחרים.<br> 
                                בנוסף נציג גם את השפעת האלכוהול על כישורי הנהיגה.
                                `
                            },
                        ],
                    },
                    "אלכוהול כהשפעה על נהיגה": {
                        "אלכוהול כהשפעה על נהיגה" : [
                            {
                                cardType: `text`,
                                content: `<b>לאלכוהול השפעה הרסנית על כישורי הנהיגה של כל אדם: </b>
                                <ol>
                                <li>אלכוהול פועל בדרך דומה לסם מדכא והוא <b>מדכא את יכולת התגובה של הנהג</b>.
                                </li>
                                <li>אלכוהול משפיע על <b>כושר השיפוט</b> ומידת <b>לקיחת הסיכון</b> אצל הנהג, באופן שהוא עלול לגרום לנטילת סיכונים שהנהג לא היה נוטל אותם, לו היה פיכח. 
                                </li>
                                <li>אלכוהול משבש את <b>כישוריו הקואורדינטיביים</b> של הנהג. 
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="4">
                                <li>אלכוהול משבש את <b>כושר הראיה ההיקפית</b> של הנהג.
                                </li>
                                <li>אלכוהול משבש במידה רבה את <b>כושרה של העין להתאושש</b> במהירות <b>מסינוור</b>.
                                </li>
                                <li>אלכוהול גורם זמנית לפגימה <b>בחדות הראיה</b> של הנהג. 
                                </li>
                                <li>אלכוהול גורם להפרעות קשות בכושר <b>אומדן מרחק ומהירות</b>. 
                                </li>
                                <li>אלכוהול גורם <b>לתחושת נימנום ורצון לישון</b>.
                                </li>
                                </ol>
                                ויודגש – גם<b> מלווה</b> של נהג חדש, אסור לשתות ואסור לו להיות תחת השפעת אלכוהול! `
                            },
                        ],
                    },
                    "אלכוהול": {
                        "אלכוהול" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>גם בירה היא <b>משקה אלכוהולי</b>.
                                </li>
                                <li>אין הבדל מהותי בין כוס בירה, לבין כוס ויסקי- שכרות נגמרת כתוצאה מכמות אלכוהול הנספגת בדם. כוסית ויסקי, עלולה להכיל כמות אלכוהול <b>זהה</b> לזו שבכוס בירה. 
                                </li>
                                <li>אין יסוד לאגדה ש"רק עירבוב של משקאות אחדים גורם לשכרות ואילו משקה אחד אינו מעורבב, מבטיח מפני שכרות"- אלו הן אגדות מופרכות. 
                                </li>
                                </ol>`
                            },
                        ],
                        "אכיפת שתיית האלכוהול" : [
                            {
                                cardType: `text`,
                                content: `שוטר רשאי <b>לעצור</b> נהג על מנת לבדוק את כמות האלכוהול בגופו, בכל עת, שיש לו חשד סביר להניח, כי הנהג שיכור. <br>
                                הנהג <b>חייב</b> לציית לדרישה זו, ובמידה והוא לא מציית הוא צפוי <b>לעונש</b> של מאסר שנה אחת, או קנס של- 10,000 ₪, ולפסילת רישיון הנהיגה למשך שנתיים. 
                                `
                            },
                        ],
                        "בדיקת האלכוהול" : [
                            {
                                cardType: `text`,
                                content: `בבדיקת הנשיפה, אותה מבצע השוטר, נושף הנהג הנבדק אוויר לתוך מכשיר מדידה, המציין את כמות האלכוהול בדמו של הנבדק.<br>
                                בדיקה כזו קבילה<b> בבית משפט</b> ועלולה לשמש<b> ראיה</b> כנגד הנהג
                                על מנת שניתן יהיה להרשיע נהג בגין נהיגה בשכרות. 
                                `
                            },
                        ],
                    },
                    "תרופות ונהיגה": {
                        "תרופות ונהיגה" : [
                            {
                                cardType: `text`,
                                content: `אין כלל גורף הקובע כי אסור לנהוג לאחר לקיחת כל תרופה. יחד עם זאת ישנן תרופות, כגון תרופות <b>הרגעה</b> למיניהן, שהשפעתן עלולה לגרום לנימנום, לעייפות, לחוסר ריכוז ולהשפעות שליליות אחרות, הקשורות <b>ביכולת התגובה ובעירנות הנהג</b>. <br>
                                היוועץ עם הרופא שלך ועיין בעלון המצורף לתרופה, על מנת שתהיה בטוח, כי הינך יכול לנהוג בבטחה לאחר נטילתה. 
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 21
            "דרכים הרריות" : {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בעת נסיעה בדרכים הרריות, נדרש הרכב למאמצים מיוחדים והוא נתון להשפעתם של כוחות פיסיקאליים גדולים יותר מאשר במישור.<br> 
                                השליטה ברכב, חשובה ביותר בעת נהיגה בדרכים כאלה. <br>
                                בפרק זה נסקור את <b>הסכנות שבדרך</b> ואת <b>אופן הנהיגה הנכון</b> מסוג זה של דרכים. 
                                `
                            },
                        ],
                    },
                    "הדרך ההררית": {
                        "מאפיינים" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>שיפוע העלול להיות <b>תלול</b> (מעלה תלול, או לחילופין מורד תלול).
                                </li>
                                <li>במקרים רבים מדובר <b>בדרך צרה</b>.
                                </li>
                                <li>במקרים רבים <b>העקומות</b> בהן<b> חדות</b>.
                                </li>
                                <li> <b>שדה הראיה מוגבל</b>.
                                </li>
                                <li><b>לא תמיד קיימים שוליים רחבים מספיק </b>(או שהם כמעט ולא קיימים כלל).
                                </li>
                                </ol>`
                            },
                        ],
                        "הסכנות" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>שדה הראיה המוגבל עלול לגרום <b>להפתעות</b> באזור המתגלה לנהג מבלי שניתן לו זמן מספיק להתכונן לכך. 
                                </li>
                                <li><b>חימום יתר של הבלמים</b>, העלול לגורם לאובדן בלמים, עקב שימוש לא נכון בהם בעת נהיגה במורד. 
                                </li>
                                <li><b>סינוור</b> בגלל הזווית בהן נתונים כלי הרכב.
                                </li>
                                <li><b>קשיים למנוע של הרכב</b> אם הרכב עמוס מאד והמעלה התלול. 
                                </li>
                                <li>במקרים רבים מדובר בדרכים שאינן עירוניות ולכן <b>חסרה בהן תאורה</b>.
                                </li>
                                </ol>`
                            },
                        ],
                        "הדרך הנכונה לנהוג בדרכים אלו" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>. יש לשמור על <b>הימין </b>, בעיקר בעת נהיגה בעיקולים. 
                                </li>
                                <li>יש לשמור על <b> מהירות </b> כזו שלא תאלץ את הנהג להיגרר לתוך הנתיב הנגדי, בעת הופעת עיקול פתאומי בכביש. 
                                </li>
                                <li>יש לשים לב <b> לתמרורי האזהרה </b>, המאפשרים לנהג להתכונן מראש לעיקולים, צמתים או סכנות, אליהם הוא מתקרב. 
                                </li>
                                <li>בעת נהיגה <b> במורד </b> יש לנהוג <b> בהילוך נמוך </b>, בהתאם לשיפוע הדרך ולהיעזר בכח המנוע להאטת הרכב. 
                                </li>
                                </ol>`
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li>יש להשתמש באמצעי <b>האטה</b> ייעודיים, ככל שהם קיימים ברכב. 
                                </li>
                                <li><b>אין לנהוג בהילוך סרק</b>.
                                </li>
                                <li>יש להשתדל <b>שלא</b> להפעיל את בלמי השירות באופן רצוף לפרקי זמן ארוכים על מנת למנוע חימום יתר ואובדן בלמים. 
                                </li>
                                </ol>`
                            },
                        ],
                    },
                }
            },
            //מצגת 22
            "שולי הדרך" : {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `עקרונית לא נועד שול הכביש לנסיעה, אלא למצבי חירום בלבד, יחד עם זאת ישנם מקרים, בהם יעשה הנהג שימוש בשול הדרך. <br>
                                בפרק זה נבהיר את הסיכון הכרוך בירידה לשול, בנסיעה בו ובחזרה ממנו ונבהיר כיצד יש לבצע זאת נכון ובבטיחות. 
                                `
                            },
                        ],
                    },
                    "הסיכונים": {
                        "סיכוני הירידה לשול" : [
                            {
                                cardType: `text`,
                                content: `הסיכונים הכרוכים בשול, מתגלים לנהג בעיקר בעת שהוא נאלץ לרדת לשול בפתאומיות ובצורה לא מתוכננת, עקב מכשול או סיכון המתגלה לפניו. 
                                <br>
                                הסיכונים שיפורטו להלן, הינם מצטברים ומופיעים לרוב <b>בבת אחת</b>: 
                                <ol>
                                <li>בירידה בלתי מתוכננת, אין הנהג <b>מספיק להאט די</b> לפני הירידה לשול.
                                </li>
                                <li>בירידה כזו, נדרשים לרוב <b>שינויי היגוי והאטה מהירים</b>, בעיקר אם קיים בשול מכשול, ממנו מבקש הנהג להימנע, או בעת שתופיע דווקא ברגע זה תקלה ברכב. 
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/road27.jpg`,
                                content: `
                                <ol start="3">
                                <li>החיכוך בין צמיגי הרכב לכביש, שונה מהחיכוך שבין צמיג הרכב לשול, העשוי לרוב כורכר, או חומר אחר שאינו אספלט. 
                                החיכוך השונה, <b>משפיע באופן חד על תגובות הרכב</b> לכל פעולת האצה, בלימה או היגוי. 
                                </li>
                                </ol>`
                            },
                            {
                                cardType: `text`,
                                content: `כל אלה, ביחד עם בהלה אפשרית של הנהג, <b>עלולים לגרום לאובדן שליטה ברכב</b>.<br>
                                סכנה נוספת עלולה לנבוע מרכב אחר, החונה בשול הכביש. על נהג העובר ליד רכב כזה <b>להאט, להתרחק</b> ממנו מעט, במידת האפשר וכן להעיף מבט לעברו <b>ולחפש </b>את הנהג או הנוסעים העלולים לצאת ממנו בפתאומיות.
                                `
                            },
                        ],
                    },
                    "ירידה מתוכננת לשול": {
                        "ירידה מתוכננת לשול" : [
                            {
                                cardType: `text`,
                                content: `עקרונית ניתן לרדת לשול הדרך הימני, רק אם <b>אין איסור </b> מפורש על כך ואם תנאי הדרך מאפשרים זאת ללא סיכון. 
                                לפני הירידה לשול, על הנהג <b> להאט את מהירותו </b>, לבדוק את <b> התנועה </b> מסביב, בעיקר אחורנית ובצד ימין <b> ולאותת </b>. יש לנסות ולבחור את נקודת הירידה לשול, במקום בו נמצאים השול והכביש <b> באותו מפלס </b>, או שהפרש הגבהים ביניהם- קטן. <br>
                                יש להאט את מהירות הניסעה לפני הסטיה ימינה לכיוון השול ורק אחרי ההאטה, לסטות ולרדת אליו. 
                                `
                            },
                        ],
                        "חובת נסיעה בשול" : [
                            {
                                cardType: `text`,
                                content: `במקרים מסויימים, חלה חובה על נהג רכב להימין ולנסוע בשול הדרך: אם עקב שיפוע הדרך, או בשל משקל הרכב ומטען, הנהג מעכב את התנועה מאחוריו, וחייב להימין ככל שיוכל ואפילו לרדת ולנסוע בשול בדרך הימני, אם השול מיוצב באספלט, על מנת לאפשר לתנועה שמאחור לעקפו. שים לב- כל זאת- <b>רק אם השול מיוצב באספלט</b>, כאמור. 
                                אם מבקש הנהג לעצור על גבי השול, יש לעשות זאת <b>רחוק</b> ככל האפשר משפת הכביש. 
                                `
                            },
                        ],
                    },
                    "חזרה לכביש מתוך השול": {
                        "חזרה לכביש מתוך השול" : [
                            {
                                cardType: `text`,
                                content: `לפני החזרה לכביש, יש לבדוק היטב את מצב התנועה <b>מאחור, משמאל וממול</b> ורק לאחר שנוכח הנהג כי עלייתו חזרה לכביש אפשרית- עליו <b>לאותת</b> ולהתחיל בנסיעה. <br>
                                בעליה משול הכביש, יש להקפיד על סיבוב ההגה באופן שהצמיג הקדמי שמאלי יטפס על שפת הכביש (ולא באופן שדופן הצמיג יתחכך בשפת הכביש) <b>ולהאיץ רק לאחר העליה לכביש</b>. 
                                `
                            },
                        ],
                    },
                }
            },
            //מצגת 23
            "החלקה בכביש": {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `ההחלקה היא מסוכנת ביותר, שכן היא גורמת לאובדן השליטה ברכב (בעיקר אם ההחלקה הינה בגלגלים הקדמיים ברכב).<br> 
                                בכלי רכב דו גלגליים- היא מביאה מרבית המקרים <b>להתהפכות הרכב. </b>
                                הדרך הטובה ביותר להתמודד עם החלקת הרכב היא להימנע ממנה וישנן לא מעט דרכים לעשות זאת.<br> רוכבי רכב דו גלגלי מודעים לכך במיוחד- אצלם, מרגע שנקלע כלי רכבם למצב החלקה, סיכוייהם להילחץ ממנה- קלושים ביותר. לכן עליהם להקפיד מאוד על נקיטת כל האמצעים על מנת שלא להיכנס מלכתחילה למצבי החלקה.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `בפרק זה נאפיין את מצבי ההחלקה הבסיסים, את הדרכים להילחץ מהן וחשוב עוד יותר, את הדרכים להימנעות מכניסה למצבי החלקה.
                                `
                            },
                        ],
                    },
                    "החלקה": {
                        "מהי החלקה וכיצד מתבטאת" : [
                            {
                                cardType: `text`,
                                content: `
                                <ol>
                                <li><b>אין מגע בין הרכב לכביש</b> - לעיתים יש חומר מסויים בין הצמיג לפני הכביש - מים, שמן, שלג, כורכר, חול ועוד.
                                </li>
                                <li>מהירות הסיבוב של הגלגלים, <b>אינה</b> תואמת את מהירות הרכב- כך למשל בעת שהנהג מאיץ בחוזקה והצמיגים אינם "נתפסים" בכביש, או בעת שהנהג בולם בחוזקה, "נועל" את הגלגלים והרכב ממשיך קדימה עקב כח ההתמדה. 
                                </li>
                                <li>הרכב כולו <b>נע לכיוון שונה מהכיוון אליו מופנים הגלגלים</b>. 
                                </li>
                                </ol>`
                            },
                        ],
                        "הגורמים להחלקה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/cold.png`,
                                content: `
                                <ol>
                                <li><b>משטח חלק בכביש</b> (מים, שמן, שלג, קרח) לרוב בתוספת להפעלת כח כלשהו המופעל על הרכב. 
                                כך למשל בעת הנהג בולם בחוזקה בכביש חלק, ממשיך כל ההתמדה לדחוף את הרכב לכיוון הנסיעה והצמיגים המחלקים, אינם יכולים לעצור אותו.
                                </li>
                                <li>בעת נהיגה מהירה מידי בעיקולים, נוטה האפקט הצנטריפוגלי, להשליך את הרכב אל <b>מחוץ לעיקול</b>, לכיוון המנוגד למרכז העיקול. כשהצמיגים מחליקים הם <b>אינם</b> מסוגלים למנוע מהרכב להשאר בנתיב שבו  התכוון הנהג להימצא. </li>
                                <li><b>תקלה</b> באחת ממערכות הרכב. 
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "החלצות מהחלקה": {
                        "החלצות מהחלקה" : [
                            {
                                cardType: `text`,
                                content: `באופן עקרוני ניתן להיחלץ מהחלקה, ע"י <b>נטרול הפעולה שגרמה להחלקה</b> מלכתחילה. <br>
                                כך למשל, אם ההחלקה נגרמת עקב ביצוע בלימה חזקה- יש לעזוב מעט (או בכלל) את דוושת הבלם ולאפשר לגלגלים לחזור לתנועה סיבובית. <br>
                                אם הרכב מחליק לכיוון שונה מהכיוון אליו פונים הגלגלים הקדמיים, יש להפנות את הגלגלים לכיוון אליו מחליק הרכב, על מנת לאפשר לנהג להשתלט מחדש על כלי רכבו. <br>
                                אם רק חלקו האחורי של הרכב מחליק, יש להפנות את הגלגלים לכיוון ההחלקה של חלקו האחורי של הרכב. <br>
                                <b>בכל מקרה יש להפחית את הכוחות המופעלים על הגלגלים </b>(האצה, היגוי ובעיקר בלימה) על מנת לתת לצמיגים אפשרות "להיתפס" מחדש בכביש. 
                                `
                            },
                        ],
                        "החלקה במצב אמת" : [
                            {
                                cardType: `text`,
                                content: `למרות שלכאורה אפשרי להחלץ מהחלקה, במקרים רבים במציאות הדבר אינו אפשרי. <br>
                                יתכן והנהג המובהל מתבלבל <b>ואינו מצליח לבצע פעולה</b>, המנוגדת לעיתים לאינסטינקט הבסיסי שלו. לעיתים, <b>חסר בכביש המרחב הפנוי</b> הנדרש לשם השלמת פעולת ההיחלצות. <br>
                                כך למשל, בעת החלקה כתוצאה מבלימה חזקה, נדרש הנהג לעזוב את דוושת הבלם – אולם לא נשכח, <b>הנהג בלם מסיבה כלשהי</b> – הוא ראה סכנה כלשהית לפניו. כעת הוא נדרש לעזוב את דוושת הבלם – ולהשמר מהסכנה שלפניו עדיין.
                                `
                            },
                        ],
                    },
                    "מניעת החלקה מראש": {
                        "מניעת החלקה מראש" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/sign10.png`,
                                content: `ניתן להמנע בעיקר באמצעות התאמת מהירות הנסיעה <b>לתנאי הדרך ומזג האוויר, שמירה על רווח</b> גדול ומרחב מספיק מסביב לרכב, כך שהנהג לא יאלץ לנקוט בפעולות דרסטיות (כגון בלימה חזקה) , אלא יוכל לבצע אותן <b>בהדרגה ובעדינות</b> ולהימנע בכניסה למצב החלקה.
                                `
                            },
                        ],
                    },
                }
            },

            "": {
                /* cardType: `picAndText`,
                  pic: `../assets/images/pics/x.png`, **/
                "" : [
                    {
                        cardType: `text`,
                        content: ``
                    },
                ],
            },
        
        }
    },
    "הכרת הרכב": {
        "icon": "",
        "questions": [],
        lessons: {
            //מצגת 24
            "מערכות בטיחות ברכב": {
                learningContent:{
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נסקור בקצרה מספר <b>מערכות בטיחות </b>הקיימות ברכב מודרני ואת <b>תפקידן</b>. 
                                כמו כן נבדוק מהן <b>חובותיו</b> של הנהג <b>בכל הקשור בהפעלתן</b> של מערכות אלא <b>ובתחזוקתן</b>.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `ברכב מודרני, מותקנות מערכות בטיחות ממוחשבות לרוב, שכן מערכות כאלה מסוגלות להגיב מהר יותר באופן מדויק יותר לשינויים בתאחיזת הצמיגים, מאשר הנהג האנושי. <br>
                                יש לדאוג ולתחזק את אותן מערכות כנדרש וזהו <b>תפקידו של הנהג</b>.
                                על הנהג מוטלות מספר מטלות, הקשורות בתחזוקה התקינה של מערכות הבטיחות ואביזרי הרכב, הקשורים בבטיחות הנסיעה.
                                `
                            },
                        ],
                    },
                    "תחזוקת מערכות - תפקיד הנהג": {
                        "תפקיד הנהג בתחזוקת המערכות" : [
                            {
                                cardType: `twoPicsAndText`,
                                pic1: `../assets/images/pics/car28.jpg`,
                                pic2: `../assets/images/pics/car29.jpg`,
                                content: `
                                <ol>
                                <li>בדיקת <b>לחץ אוויר</b> בכל <b>הצמיגים</b>, כולל <b>בצמיג החלופי </b>וכן וידוא כי יש מספיק <b>נוזל בלמים</b> במערכת וכי בעת נהיגה,<b> לא נדלקת כל נורית אזהרה</b> הקשורה במערכת זו.
                                </li>
                                <li>וידוא תקינות <b>הפנסים והמגבים</b>.
                                </li>
                                <li>דאגה <b>לניקיון השמשות והפנסים</b> – ניקיונם פירושו שדה ריאה ברור לפנים, ביום ובזמן תאורה וכן נראות ע''י עוברי דרך אחרים.
                                </li>
                                <li>ביצוע טיפול שירותי וטיפולים תקופתיים ברכב, בהתאם להוראות היצרן ולדרישות רשות הרישוי וכן דאגה לבדיקה תקופתית של מערכות הבטיחות (כגון ''בדיקת חורף'').
                                </li>
                                </ol>`
                            },
                            {
                                cardType: `text`,
                                content: `<ol>
                                <li>בעת רכישת חלקי חילוף ואביזרים לרכב, יש להקפיד על רכישת חלקים התואמים את דרישות היצרן ולרכוש רק חלקים המותרים על פי הוראות רשות הרישוי.
                                </li>
                                <li>משהתגלתה תקלה במערכות הבטיחות של הרכב, אין הנהג רשאי לתקנה בעצמו, אלא עליו להניח למוסך מוסמך לטפל בה.
                                </li>
                                <li>בהתאמה – אם נתגלתה תקלה באחת ממערכות הבטיחות ברכב, אין להמשיך בנסיעה, אלא לגרור את הרכב למוסך (המדובר במערכות הבלימה וההיגוי).
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "מערכות בטיחות ברכב": {
                        "מערכת ה-ABS" : [
                            {
                                cardType: `text`,
                                content: `תפקידה המרכזי של ABS (ANTI BLOCKING SYSTEM) הוא <b>למנוע מגלגלי הרכב להינעל בשעת בלימה חזקה</b>, בעיקר בכביש חלק.<br>
                                בשעת בלימה על משטח חלק, גלגל הרכב ננעל ומחליק בכיוון ההחלקה.
                                המערכת מבצעת בלימה לסירוגין על מנת שלא ינעלו הגלגלים והרכב יכנס למצב החלקה.
                                `
                            },
                        ],
                        "מערכת ה- EBS" : [
                            {
                                cardType: `text`,
                                content: `מערכת ה-EBS היא מערכתABS <b>הפועלת על כל גלגל בנפרד</b>, באופן אלקטרוני.
                                `
                            },
                        ], 
                        "מערכת ה- ESP" : [
                            {
                                cardType: `text`,
                                content: `זוהי מערכת <b>בקרת יציבות אלקטרונית</b>, שתפקידה לזהות ולכמת את הכוחות הפועלים על כל גלגל, לעמת אותם עם יכולת הגלגל להתמודד עימם, לאור הפעולות בהן נקט הנהג ולתקן את הנדרש, בעיקר בעזרת <b>הפעלה או הפחתה של כח הבלימה של המנוע</b>.
                                `
                            },
                        ],
                        "מערכת ה- TCS או ה-ASR" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car30.jpg`,
                                content: `זוהי מערכת <b>בקרת אחיזה </b>אלקטרונית שתפקידה <b>לשפר את יציבות </b>הרכב, בעיקר בעת נהיגה בכביש חלק.
                                `
                            },
                        ],
                    },
                    "אביזרי בטיחות נוספים ברכב": {
                        "חגורת הבטיחות וכריות האוויר" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car31.jpg`,
                                content: `כזכור ככלל אסור לנהוג ברכב אלא אם הוא ונוסעיו חוגרים חגורות בטיחות. <br>
                                לכלל זה מספר חריגים (נוסעים במונית בדרך עירונית בספסל אחורי בלבד, רכב משטרתי בתנאים מסוימים ועוד) אולם חריגים אלה, הינם כורח המציאות ובוודאי שאינם מעידים כי חגירת החגורה מיותרת.
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car32.png`,
                                content: `רובם של כלי הרכב המודרניים, מצוידים גם <b>בכריות אוויר</b>, או במערכת שלמה כזו (SRS). <br>
                                מטרתה היא לשמש <b>מגן רך</b> בין גוף הנהג והנוסעים לבין חלקי הרכב הקשיחים בעת תאונה <b>ולחלק את עוצמת המכה על פני שטח גדול יותר</b>. <br>
                                אך אין הימצאות הכריות פוטרת את הנהג והנוסעים מלחגור חגורת בטיחות, שכן הכריות מסוגלות לספוג מכות, אולם החגורה מונעת פגיעות נוספות, שכריות האוויר אינן מסוגלות למנוע. יש לחגור את חגורות הבטיחות כשהן <b>צמודות לגוף</b>, על מנת לאפשר את <b>ניצול מירב יעילותן</b>. 
                                `
                            },
                        ],
                        "משענת הראש" : [
                            {
                                cardType: `text`,
                                content: `תפקידה של משענת הראש הוא <b>למנוע פגיעות צוואר וראש </b>בעת תאונה (בעיקר) מאחור, <b>ולהקטין את המכה הידועה בשמה "צליפת שוט"</b>. 
                                משענת הראש, מונעת מהראש מלהיזרק לאחור, בעת שהרכב נפגע מאחור. לשם ניצולה המיטבי, יש לכוון אותה כך שתמוקם אל מול הבליטה הקטנה הנמצאת במחלקה האחורי של הגולגולת, בקו ישר עם האוזן והעין. 
                                `
                            },
                        ],
                        "הפגוש" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car33.jpg`,
                                content: `לרוב, אין נוהגים להתייחס אליו כאל אביזר בטיחות, אולם תפקידו כפול- הוא נועד <b>להגן על הרכב בעת פגיעה קלה</b> (יחסית) וכן <b>להקטין את הפגיעה בהולכי רגל הנפגעים על ידו</b> (לעיתים באמצעות הטלתם בצורה מסויימת ובזווית מסויימת ולעיתים באמצעים אחרים, שלא יפורטו כאן). 
                                `
                            },
                        ],
                        "מגבים" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car34.jpg`,
                                content: `מגבים שאינם תקינים, <b>משבשים את שדה הראיה</b> של הנהג ועלולים לגרום לסינוורו בלילה, זאת בנוסף לנזק המצטבר שהם גורמים לשמשת הרכב. <br>
                                מכאן ברורה גם תרומתם לבטיחות הנהיגה. על הנהג לשמור תמיד על מגבים תקינים, שאינם יבשים מידי ושהגומי בהם אינו קרוע, או בלוי מידי. 
                                `
                            },
                        ],
                    },
                    "מנוע הרכב": {
                        "מנוע הרכב" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car35.jpg`,
                                content: `הקשר בין מנוע הרכב לבטיחות הנהיגה הינו ברור: מנוע הרכב יכול לסייע <b>בהאטת הרכב</b>, או <b>בשמירה על מהירותו</b> בעת נהיגה במורד, מנוע הרכב מפעיל מנגנוני האטה ייחודיים ברכב, כוח המנוע מפעיל מערכות הגברת כוח לצרכי <b>בלימה והיגוי</b> וכן הוא מאפשר <b>האצה</b>, לה עשוי הרכב להידרש בשעת חירום.<br>
                                המנוע מפיק את יעילותו המירבית בתום סל"ד (סיבוב מנוע לדקה) מסוים, הנקבע ע"י יצרן הרכב. 
                                במצב כזה לא רק נשמרת היעילות, אלא שגם תצרוכת הדלק הינה יעילה.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `זכור- שמירה על סיבובי מנוע נמוכים והתאמת מהירות לתנאי הדרך באופן של תאלץ לבלום בחוזקה וכתוצאה מכך להאיץ אחר כך בחוזקה, תורמים גם בם לשמירה על תצרוכת דלק נמוכה. <br>
                                הגזים הנפלטים ממנוע הרכב, גורמים כידוע <b>לזיהום אוויר</b> ולכן יש להקטין את רמת הפליטה עד כמה שניתן. הנהג יכול לדאוג להקטנת זיהום האוויר הנגרם מרכבו באמצעות <b>שמירה על תקינות מערכות הדלק</b> והפליטה ברכב והוא נדרש לבדוק את רמת הזיהום הנפלטת מרכבו, בעת ביצוע המבחן השנתי ("טסט"). 
                                `
                            },
                        ],
                    },
                    "צמיגים": {
                       "צמיגים" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/galgal.jpg`,
                                content: `הצמיגים הם מגעו הישיר (והיחידי) של הרכב עם הכביש. <br>
                                תפקידם להעיר את <b>כוחות התאוצה, הבלימה וההיגוי</b> אל הכביש. <br>
                                מכאן חשיבותם הרבה וחשיבות הטיפול הנכון בהם.
                                `
                            },
                        ],
                        "רכישת הצמיגים" : [
                            {
                                cardType: `text`,
                                content: `ככלל <b>אין </b>להרכיב ברכב צמיגים שונים מאלו המאושרים ע"י יצרן הרכב ושמידותיהם צויינו ברישון רכב. על מנת לשנות את מידות הצמיג (בהנחה שגם המידות החדשות מאושרות ע"י יצרן הרכב), יש צורך בקבלת <b>אישורה של רשות הרישוי</b>, שגם תציין את המידות החדשות, ברישיון רכב. <br>
                                <b>צמיג מתבלה עם הזמן</b>, גם אם אינו מורכב ברכב ולכן על הנהג הרוכש צמיג חדש לבדוק את <b>תאריך ייצרו </b>ולרכוש צמיג שמועד ייצרו אינו עתיק מידי. 
                                `
                            },
                        ],
                        "לחץ אוויר בצמיגים" : [
                            {
                                cardType: `text`,
                                content: `יש לנפח את הצמיגים על פי <b>הנחיות יצרן הרכב</b>. 
                                זכור- יצרן הצמיגים מאפשר לעיתים לחץ אויר, גבוה בהרבה, מאשר דורש יצרן הרכב המסויים בו הינך נוהג. לכן יש להקפיד למלא אוויר בצמיגים על פי הנחיות יצרן הרכב. <br>
                                לחץ אוויר נמוך מידי, <b>יגרום לבלאי מוגבר של צמיגים ולתצרוכת דלק גבוהה יותר</b> של הרכב וחשוב עוד יותר,<b> לפגיעה קשה ביכולת התאחיזה של צמיגים בכביש ולחוסר יציבות</b>, בעיקר בעת נהיגה בעקומות. 
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car36.png`,
                                content: `לחץ כזה גורם לפגיעה בדפנות הצמיג ולהחלשתן ובמקרים קיצוניים עלול אפילו לגרום <b>לפיצוץ צמיג </b>במהלך נסיעה. <br>
                                לחץ אוויר גבוה מידי, יפגם גם הוא בתאחזית הצמיג ובנוסף יגרום לשחיקה ובלאי בלתי אחידים בו.
                                בגלגל החלופי יש לנפח אוויר, על פי מידת לחץ אוויר של הגלגל, שבו לחץ האוויר הגבוה ביותר ברכב. 
                                `
                            },
                        ],
                        "נקר בצמיג" : [
                            {
                                cardType: `text`,
                                content: `אם מתגלה נקר במהלך הנסיעה, אסור להמשיך בנסיעה (אלא אם כן הצמיג הינו מסוג מיוחד שנועד לכך). <br>במקרים רגילים, יש להחליף את הגלגל הנקור בגלגל חלופי ולא לשכוח לוודא כי <b>אומי הגלגל סגורים היטב</b>, לפני הורדת הרכב מהמגבה. עצה טובה נוספת, הינה לוודא שוב, לאחר נסיעה של מספר קילומטרים, כי אומים אלה מוחזקים כיאות. 
                                `
                            },
                        ],
                        "בלאי הצמיגים" : [
                            {
                                cardType: `text`,
                                content: `זכור- בלאי מוגבר בצמיגים הקדמיים, עלול להיגרם גם כתוצאה מכיוון לקוי של מערכת ההיגוי ברכב. <br>
                                הסיבה לתחושה כי ההגה "מושך" בחוזקה הצידה בעת נסיעה, יכולה להיות <b>לחץ אוויר נמוך מידי</b> באחד הצמיגים או <b>תקלה כלשהי במערכת ההיגוי</b> ובשניהם יש לטפל מידית. <br>
                                ככלל יש לזכור- הסיבה לכך שרכב אינו נע באופן יציב, עלולה להיות מערכת היגוי שאינה תקינה, או חוסר איזון בצמיגים ובשניהם יש לטפל מיד עם התגלות הבעיה. 
                                `
                            },
                        ],
                    },
                    "מערכת הכה הכח": {
                        "מערכת הכה הכח" : [
                            {
                                cardType: `text`,
                                content: `מערכת "הגה הכח" ברכב נועדה <b>למנוע</b> מהנהג את הצורך <b>להפעיל כח פיסי, על מנת לסובב את ההגה</b>. <br>
                                המערכת מופעלת על פי רוב כמערכת חשמלית, או הידראולית. בכלי רכב מודרניים, ניתקל לעיתים מנוח "מערכת הגה כח פרוגרסיבית". <br>הכוונה הינה למערכת, המפעילה כח רב יחסית במהירויות נמוכות, כמו מהירויות חניה, שם נדרש כח כזה ומפחיתה אותו בהדרגה, ככל שהמהירות גדלה, שכן במהירות נסיעה גבוהות, אין צורך בכח כזה. 
                                `
                            },
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car37.jpg`, 
                                content: `והערה נוספת לעניין אופן התנהגות הרכב- לאחר סיבוב ההגה בפניה (בין שמדובר ב"הגה כח" ובין הגה רגיל) אין ההגה נשאר במקומו, אלא שהוא בנוי כך שהוא חוזר מעצמו למצב ישר בסיום הפניה. עלייך להכיר תופעה זו, על מנת שלא תופתע ממנה בעת הנהיגה.
                                `
                            },
                        ],
                    },
                }
                
            },
            //מצגת 25
            "מערכות ברכב לבטיחות הנהיגה": {
                learningContent:{
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `הרכב המודרני, מצוייד במערכות רבות, שחלקן נועדו לשפר את הנדסת האנוש, אולם רובן ככולן תורמות <b>לבטיחות הנהיגה ברכב</b>. <br>
                                במילים " הנדסת אנוש" הכוונה לבנייה באופן שתאפשר לנהג לתפעל את מערכות הרכב <b>בנוחות ובביטחה</b> שכן הבנייה נעשית על פי צרכיו, מידותיו ומגבלותיו של הגוף האנושי. בפרק זה, נכיר כמה מהן. 
                                `
                            },
                        ],
                    },
                    "המערכות ברכב": {
                        "המערכות ברכב" : [
                            {
                                cardType: `text`,
                                content: `עקרונית יש לזכור- אין להתקין ברכב אביזרים או מערכות, <b>העלולים לפגום בשדה הראיה</b> של הנהג, או <b>להפריע בתיפעול מערכות הרכב</b>. <br>
                                בנוסף אין להתקין כל אביזר שרשות הרישוי <b>אסרה</b> מפורשות על התקנתו. 
                                `
                            },
                        ],
                    },
                    "אביזרים שונים": {
                        "לוחיות רישוי" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car38.png`,
                                content: `רכב מנועי (למעט אופנוע) חייב להצטייד <b>בשתי לוחיות רישוי</b>, האחת מלפנים ואחת מאחור <b>שתוארנה</b> בזמן חשיכה. 
                                `
                            },
                        ],
                        "פנסים" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car38.png`,
                                content: `עקרונית, אין להתקין ברכב נוסעים פרטי פנסים נוספים על אלה המותקנים בו ע"י יצרנו, אלא אם התקבל לכך היתר של רשות הרישוי.<br>
                                בנורות החזית חייבות להיות מותקנות נורות התואמות את הוראות היצרן. חשיבות מיוחדת נועדת <b>לתקינות עדשת הפנס הקדמי</b>, שכן היא מפזרת את האור באופן נכון <b>ומונעת סינוור</b>. 
                                `
                            },
                            
                        ],
                        "מד מהירות" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car39.jpg`,
                                content: `כלי רכב מנועי <b>חייב להיות מצוייד במד מהירות</b>.
                                `
                            },
                        ],
                        "משבת (אימובילייזר)" : [
                            {
                                cardType: `text`,
                                content: `בכלי רכב מודרניים מותקן "<b>משבת</b>" (אימובילייזר) שהוא <b>רכיב אלקטרוני</b>, המותקן לרוב במפתח ההתנעה ושמתפקידו <b>לשמור מפני התנעת הרכב בידי מי שאינו מורשה לכך <b>ע"י בעל הרכב. 
                                `
                            },
                        ],
                        "מטף כיבוי" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/pic5.jpg`, 
                                content: `<b>בכל רכב מנועי</b>, למעט רכב פרטי, טרקטור ואופנוע <b>חייב להימצא מטף כיבוי</b>. יש להחליפו, בעת שמד הלחץ מראה על <b>מידה נמוכה מידי</b>. 
                                `
                            },
                        ],
                        "נעלי בטיחות" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/pic6.jpg`, 
                                content: `ברכב מנועי שמשקלו 5,000 ק"ג ומעלה (למעט באוטובוס), חייבים להימצא "<b>נעלי בטיחות</b>", שהם כעין טריזים, אותם יש להניח לפני הגלגלים על מנת לסייע במניעת דרדור הרכב. 
                                `
                            },
                        ],
                        "נעלי בטיחות" : [
                            {
                                cardType: `twoPicsAndText`,
                                pic1: `../assets/images/pics/pic7.jpg`, 
                                pic2: `../assets/images/pics/pic8.jpg`, 
                                content: `בכלי רכב מסויימים, קיימת חובה להתקין <b>טכוגרף</b>, שהוא מעין מכשירי רישום, הרושם אוטומטית נתונים מסויימים (במהירות, שעות נהיגה ועוד). <br>
                                לא ניתן להחליף דיסקות טכוגרף ממכשיר טכוגרף אחד למשנהו ויש לבחור בדיסקה המתאימה לפי סוג המכשיר. 
                                `
                            },
                        ],
                         "נעלי בטיחות" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/pic9.jpg`, 
                                content: `<b>מגבה הרכב </b>חייב להימצא בכל רכב מנועי, למעט תומך, אופנוע, טרקטור ומכונה ניידת, שמשקלה עולה על 400 ק"ג ותפקידו לאפשר החלפת גלגל במקרה של תקר.<br>
                                לשם הרמת הרכב, יש להציב את המגבה הרכב <b>במיקום הנקבע לכך </b>ע"י יצרן הרכב ויש להקפיד על <b>אבטחת הרכב מפני דירדור</b> בעזרת שילוב להילוך, הפעלת בלם היד והנחת עצמים כלשהם לפני גלגל הרכב, (או נעלי ביטחון ברכב המחויב בהן). 
                                `
                            },
                        ],
                        "סל אשפה" : [
                            {
                                cardType: `text`,
                                content: `רכב פרטי, <b>חייב</b> להיות מצוייד בסל אשפה.
                                `
                            },
                        ],
                        
                    },
                    "מערכות שונות": {
                        "מערכות הרכב" : [
                            {
                                cardType: `text`,
                                content: `בכלי רכב מודרניים, <b>מבוקרות חלק ממערכות הרכב ע"י מחשב</b>. <br>
                                כך למשל מערכת ניהול המנוע, לעיתים מערכת ההילוכים, מערכת הבלמים ומערכת מיזוג האוויר האלקטרונית. 
                                `
                            },
                        ],
                        "מערכת מיזוג אוויר" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/pic10.jpg`,
                                content: `ההבדל בין מערכת מיזוג אוויר רגילה, לבין האלקטרונית הוא <b>שהמערכת הרגילה מופעלת ע"י הנהג</b> עפ"י תחושותיו הסובייקטיביות ואילו המערכת האלקטרונית, פועלת כלפי הנחיות הנמסרות לה באמצעות חיישנים שונים המודדים טמפרטורה, לחות וכו'. <br>
                                המערכת פועלת בצורה מדויקת יותר ויתרונה בכך שהיא משחררת את הנהג מהצורך לתפעל אותה.<br>
                                מערכת מיזוג האוויר <b>תורמת גם לבטיחות הנסיעה</b>, שכן בעת הפעלתה, היא סופחת אדים המצטברים על השמשה, בעיקר בחורף ובכך תורמת לשיפור שדה הראיה של הנהג.
                                `
                            },
                        ],
                        "מערכת ניווט לוויינית" : [
                            {
                                cardType: `text`,
                                content: `מערכת ניוט לווינית GPS מאפשרת לנהג להמצא ולנווט בצורה נוחה יותר, מאשר בעזרת מפה. <br>
                                <b>המערכת קולטת ומשדרת אותות לווינים</b>, המסמנים לנהג במדוייק את מקומו על המפה המסומנת במכשיר הניווט, כמו גם את מסלול הנסיעה שלו. 
                                `
                            },
                        ],
                    },
                }
            },
        }
    },
    "רכב משא": {
        "icon": "",
        "questions": [],
        amountOfQuestions: 4,
        lessons: {
            // מצגת 15
            "הובלת נוסעים ומטען" : {
                learningContent: {
                    "הקדמה": {
                       "הקדמה" : [
                            {
                                cardType: `text`,
                                content: `בפרק זה נדון בחובות המוטלות על נוהג רכב, בעת שהוא מסיע נוסעים ובעת שהוא מוביל מטען.
                                `
                            },
                        ],
                    },
                    "הסעת נוסעים": {
                        "הסעת נוסעים" : [
                            {
                                cardType: `text`,
                                content: `אין להעלות נוסעים לרכב או להורידם ממנו בזמן שהכרב בתנועה, וכאשר הרכב עוצר בבטחה ניתן להוריד נוסעים רק מהצד <b>הקרוב למדרכה</b>, או <b>לשפת הכביש</b>. <br>
                                חריג לכלל זה הינו הנוסע לצד הנהג, <b>הרשאי להיכנס לרכב ולצאת ממנו</b> גם מכיוון הכביש, <b>כשהרכב חונה בצידו השמאלי של כביש חד סטרי</b>.
                                `
                            },
                            {
                                cardType: `text`,
                                content: `אין להסיע נוסעים עד שכל דלתות הרכב סגורות ואין איש המוציא חלק מגופו אל מחוץ לרכב (למעט ידו של הנהג, בעת שהוא מאותת ידנית).
                                ככלל, אין להסיע נוסעים ברכב אלא אם הם מוסעים בבטיחות ובנוחות. <br>
                                בכל רכב פרטי או מסחרי, חייבות להיות מותקנות <b>חגורות בטיחות</b>, אלא אם קיבל הרכב פטור מחובה זו על ידי רשות הרישוי.
                                `
                            },
                        ],
                    },
                    "רכב נוסעים פרטי": {
                        "הסעה ברכב נוסעים פרטי" : [
                            {
                                cardType: `text`,
                                content: `
                                <ul>
                                <li>אין להוביל ברכב כלשהו נוסעים במספר העולה על <b>מספר הנוסעים המצוין ברישיון הרכב</b>. 
                                ברכב נוסעים פרטי, לא נהוג לציין את מספר הנוסעים המותר. 
                                </li>
                                </ul>
                                <b>איך יקבע איפה מספר זה?</b>
                                ברכב פרטי דרגה B (פרטי ומסחרי עד 3.5 טון) מותר להסיע נוסעים על פי <b>מספר מקומות הישיבה ברכב</b>. 
                                נציין במאמר מוסגר, כי רשות הרישוי תגדיר רכב כ "רכב נוסעים פרטי", רק אם מספר מקומות הישיבה בו <b>אינו עולה על 8 מקומות </b>(בנוסף לנהג) לכל היותר.
                               `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ul>
                                <li>אין להסיע לצד הנהג <b>יותר מאדם אחד</b>, אלא אם קיים היתר מרשות הרישוי להסעת שני נוסעים לצד הנהג.</li>
                                <li>אין גם להסיע נוסעים <b>בשכר</b> ברכב פרטי (אלא אם ניתן לכך היתר מרשות הרישוי).
                                </li>
                                <li>תדלוק הרכב עלול לגרום לסכנה, אם יפלט ניצוץ, העלול להפיח אש באדי הדלק. ברכב נוסעים פרטי <b>אין צורך</b> להוריד את הנוסעים בעת תדלוק הרכב, אולם <b>חלה חובה לכבות את מנוע הרכב</b> ולהורות לעל הנוסעים <b>שלא לעשן</b> בעת התדלוק.
                                </li>
                                </ul>`
                            },
                        ],
                    },
                    "הסעת ילדים": {
                        "הסעת ילדים" : [
                            {
                                cardType: `text`,
                                content: `
                                <b>הסעת ילדים ברכב מחייבת כללי זהירות ואמצעי בטיחות מיוחדים:</b>
                                <ol>
                                <li>תינוק, שגילו עד שנה, יוסע רק <b>במושב בטיחות </b>באופן <b>שגבו יופנה לחזית הרכב</b>.
                                </li>
                                <li>ילד שגילו עד 3 שנים, יוסע רק כשהוא יושב <b>במושב בטיחות המתאים למשקלו ולגובהו</b> של הילד.
                                </li>
                                <li>ילד שגילו גדול מ- 3 אך קטן מ- 8, יוסע רק כשהוא יושב <b>במושב בטיחות</b> או <b>במושב מגביה, המתאים לגובהו ולמשקלו</b> של הילד.
                                </li>
                                </ol>
                                `
                            },
                            {
                                cardType: `text`,
                                content: `
                                <ol start="4">
                                <li>אין להתקין מושב בטיחות ולהסיע ילד <b>מול כרית אוויר</b>, אלא אם קיים ברכב מנגנון המאפשר את <b>ניטרולה</b>.
                                </li>
                                <li>ככלל, יחגרו הנהג וכל הנוסעים <b>חגורות בטיחות</b>. הנהג רשאי שלא לחגור חגורות בטיחות <b>רק בעת נהיגה לאחור</b>.
                                </li>
                                </ol>`
                            },
                        ],
                    },
                    "הסעת נוסעים ברכב מסחרי": {
                        "רכב מסחרי" : [
                            {
                                cardType: `text`,
                                content: `<b>ברכב מסחרי אחוד</b>, שמשקלו הכולל <b>אינו</b> עולה על 3,500 ק''ג, <b>אין</b> להוביל יותר מ – 8 נוסעים. אם צוין ברישיון הרכב מספר נמוך יותר, אין כמובן להוביל נוסעים במספר העולה על המצוין ברשיון.<br>
                                אם מותקן <b>מרכב לא תקני</b> – מותר עד<b> 6 נוסעים </b>מלבד הנהג ולא יותר מ-4 נוסעים <b>ברכב</b>, בדגש על אם לא צויינו ברשיון הרכב פחות נוסעים.
                                `
                            },
                        ],
                    },
                    "הובלת מטען": {
                        "הובלת מטען" : [
                            {
                                cardType: `text`,
                                content: `אחריות קשירת המטען הובלתו ואבטחתו חלה על נהג הרכב שוודא כי משקלו ומידותיו מאפשרים את הובלתו בביטחה.<br>
                                אין להוביל מטען <b>החורג מחוץ לדפנות הצדדים</b> של הרכב.
                                `
                            },
                        ],
                        "גובהו של המטען" : [
                            {
                                cardType: `text`,
                                content: `הגובה המירבי של המטען, כשהוא נמדד מהקרקע ועוד הנקודה הגבוהה ביותר שלו לא יעלה על המצויין להלן: 
                                <ul>
                                <li>ברכב שמשקלו הכולל המותר עד 1500 ק"ג -<b> 2.5 מטר</b>. 
                                </li>
                                <li>ברכב שמשקלו הכולל המותר מ- 1500 ק"ג ועד 3500 ק"ג -<b> 3.0 מטר</b>.
                                </li>
                                <li>ברכב שמשקלו הכולל המותר מ- 3500 ק"ג ועד 8000 ק"ג -<b> 3.5 מטר</b>.
                                </li>
                                <li>ברכב שמשקלו הכולל המותר מעל 8000 ק"ג-<b> 4.0 מטר</b>. 
                                </li>
                                </ul>
                                `
                            },
                        ],
                        "אורכו של המטען" : [
                            {
                                cardType: `text`,
                                content: `אורכו המירבי המותר של מטען ברכב שמשקלו הכולל מעל 8000 ק"ג <b>לא יעלה על 12 מטר</b>. 
                                בהובלת מטען <b>ארוך וגמיש</b>, יש להקפיד שהמטען <b>לא יגרר</b> על פני הכביש. 
                                נהג רכב מסחרי שמשקלו הכולל המותר 8000 ק"ג, לא ינהג יותר<b> מ-12 שעות </b>בכל תקופה של 24 שעות <b>ולא יותר מ- 68 שעות</b> בתקופה של 7 ימים.
                                `
                            },
                        ],
                    },

                    "": {
                        /* cardType: `picAndText`,
                          pic: `../assets/images/pics/x.png`, **/
                        "" : [
                            {
                                cardType: `text`,
                                content: ``
                            },
                        ],
                    },
                }
            }, 
            // מצגת 16
            "גרירת גרורים" : {
                learningContent: {
                    "הקדמה": {
                        "הקדמה" : [
                            {
                                cardType: `picAndText`,
                                pic: `../assets/images/pics/car27.jpg`,
                                content: `בפרק זה נכיר כל הקשור <b>לגרירת גרורים</b> שלומד נהיגה צריך לדעת. <br>
                                הפרק אינו דן בגרורים ונגררים כבדים ("פול טריילר" ו"סמי טריילר") אלא רק בנדרש <b>מנהג רכב פרטי</b>.
                                `
                            },
                        ],
                    },
                    "גרירת רכב מנועי": {
                        "גרירת רכב מנועי באמצעות רכב מנועי אחר" : [
                            {
                                cardType: `text`,
                                content: `מותר לגרור רכב מנועי אחד באמצעות רכב מנועי מסחרי, בתנאי <b>שמשקל הרכב הגורר עולה על 2200 ק"ג</b> ובתנאי שהרכב הגורר אינו מונית, או רכב פרטי, כלומר <b>אין לגרור ברכב פרטי. 
                                אין להסיע נוסעים ברכב הנגרר, פרט לנהג</b> הרכב הנגרר עצמו. 
                                `
                            },
                        ],
                    },
                    "גרירת גרורים": {
                       "דגשים על גרירת גרורים" : [
                            {
                                cardType: `text`,
                                content: `אין לגרור יותר <b>מגרור אחד</b>.
                                <br>
                                ברכב פרטי מותר לגרור גרור שמשקלו <b>עד 750 ק"ג </b>בלבד. 
                                גרור כבד יותר יש לגרור רק באמצעות <b>רכב מסחרי </b>שמשקלו עולה על<b> 2200 ק"ג</b>. 
                                <br>
                                 בעת גרירת נגרר ברכב, יש לחבר את תקע הנגרר לשקע המותקן בגורר ולהפעיל את <b>תאורת הנגרר</b>. 
                                <br>
                                <b>גרור חקלאי</b>, שאינו חייב ברישום, ניתן לגרור רק באמצעות <b>טרקטור</b>. 
                                `
                            },
                        ],
                    },
                }
            },
        }
    },
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
CARD_TYPES.pics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".pic3").src = json.pic3;
    }
}
CARD_TYPES.twoPicsAndText = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".pic2").src = json.pic2;
    }
}

// לתמונות ריבועיות
CARD_TYPES.threeSquarePicsAndText = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
        card.querySelector(".squarePic1").src = json.pic1;
        card.querySelector(".squarePic2").src = json.pic2;
        card.querySelector(".squarePic3").src = json.pic3;
    }
}

// לתמונות ריבועיות
CARD_TYPES.twoSquarePicsAndText = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
        card.querySelector(".squarePic1").src = json.pic1;
        card.querySelector(".squarePic2").src = json.pic2;
   }
}
CARD_TYPES.twoPicsSquare = {
    init(card, json) {
        card.querySelector(".squarePic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".squarePic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
   }
}
// לתמונות ריבועיות
CARD_TYPES.squarePicsAndText = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
        card.querySelector(".squarePic").src = json.pic;
   }
}
CARD_TYPES.threePicsAndText = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".pic3").src = json.pic3;
    }
}
