
const questions = [
 {
  question: "מהם שלושת המערכות בגוף המרכיבות את משולש החיים?",
  answers: [
    "מערכת הדם, מערכת הנשימה, מערכת העצבים",
    "מערכת הדם, מערכת הנשימה, מערכת העיכול",
    "מערכת העצבים, מערכת הנשימה, מערכת העיכול",
    "מערכת ההפרשה, המערכת ההורמונלית, מערכת העצבים "
  ],
  correct: [0]
},
 {
  question: "מהו השלב הראשון בסדר הפעולות לטיפול במכת חום? ",
  answers: [
    "פינוי דחוף",
    "הרחקה מאזור מסכן ",
    "לקיחה לאזור מוצל ",
    "קריאה לעזרה "
  ],
  correct: [3]
},
 {
  question: "כמה מים צריך לשפוך על מטופל אשר סובל ממכת חום?",
  answers: [
    "80 ליטר מים כאשר 60 נשפכים על הגוף ו20 על הראש",
    "100 ליטר מים כאשר 80 נשפכים על הגוף ו20 על הראש",
    "100 ליטר מים נשפכים על גופו של המטופל מקו הצוואר ומטה",
    "80 ליטר מים נשפכים על גופו של המטופל מקו הצוואר ומטה"
  ],
  correct: [2]
},
{
  question: "מהי ההגדרה של היפוטרמיה?",
  answers: [
    "איבוד נוזלים משמעותי בגוף",
    "ירידת טמפרטורת הגוף מתחת ל35 מעלות",
    "ירידת טמפרטורת הגוף מתחת ל25 מעלות",
    "הטמפרטורה הפנים גופית נמוכה מהטמפרטורה החוץ גופית"
  ],
  correct: [1]
},
{
  question: "מהם הלחצים המופעלים על חייל באירוע קיצון?",
  answers: [
    "עייפות",
    "המתנה",
    "תנאי מזג אוויר",
    "כל התשובות נכונות"
  ],
  correct: [3]
},
{
  question: "מהם הדגשים להנחת ח.ע?",
  answers: [
    "נניח את הח.ע בראש גפה, לאחר הנחת הח.ע נבדוק שהדימום נעצר, במידה והדימום מתחדש יש להניח ח.ע נוסף",
    "לא מסירים ח.ע, אין להניח ח.ע על מפרקים ובגדים, רישום באזור בולט (מצח, בית חזה, אזור פציעה) וכתיבת שם המטפל שעת ההנחה וסוג ח.ע",
    "ניתן להסיר ח.ע במידה והדימום לא פסק, אין להניח ח.ע על מפרקים ובגדים, רישום באזור בולט (מצח, בית חזה, אזור הפציעה)",
    "נניח את הח.ע בראש גפה, נכתוב שם המטפל, שעת הנחה ושם המטופל, נכסה את המטופל"
  ],
  correct: [0, 1]
},
{
  question: "מהם שלבי סכמת היהלו״ם?",
  answers: [
    "יצירת קשר, הדגשת מחויבות, לוודא תקינות, וידוא הכרה, מתן משימות",
    "יציבות החייל, הנגשת הסביבה, לברר עובדות, וידוא סדר התרחשויות, מתן תשומת לב",
    "יצירת קשר, הדגשת מחויבות, לברר עובדות, וידוא סדר התרחשויות, מתן משימות",
    "יציבות החייל, הנגשת הסביבה, לוודא תקינות, וידוא הכרה, מתן תשומת לב"
  ],
  correct: [2]
},
{
  question: "מהו השלב הראשון בסדר הפעולות לטיפול בלחץ ישיר?",
  answers: [
    "לחץ בעזרת שתי הידיים או אגרוף והפעל את משקל הגוף ככל שצריך",
    "הנח אמצעי מאולתר במהירות על מקור הדימום",
    "קריאה לעזרה",
    "קשור שתי חתיכות בד אחת לשניה"
  ],
  correct: [1]
},
{
  question: "מה עלינו לעשות במידה והשתמשנו בלחץ ישיר ודימום אינו פסק?",
  answers: [
    "לקרוא לאדם נוסף שיפעיל איתנו לחץ על מקור הדימום",
    "להסיר את התחבושת ולשים חדשה במקום",
    "להפעיל לחץ ידני נוסף ולשקול אמצעי מאולתר ללחץ עקיף",
    "לבדוק אם יש פציעות נוספות בקרבת המקום"
  ],
  correct: [2]
},
{
  question: "מהם הדגשים לביצוע החייאה?",
  answers: [
    "משטח קשיח, מרפקים, קצב אחיד, ראייה כוללת, הרפיה ותקשורת",
    "משטח קשיח, מרפקים, קצב מהיר, רציפות, החלפה והרפיה",
    "קצב מהיר, רציפות, תקשורת, קריאה לעזרה, הפסקה ותגובה מהירה",
    "קצב מהיר, קצב אחיד, תגובה מהירה, קריאה לעזרה, רציפות ואחידות"
  ],
  correct: [1]
},
{
  question: "לאחר כמה זמן תעשה החלפה בין מעסים בזמן החייאה?",
  answers: [
    "החלפה תעשה אך ורק באישור פרמדיק או רופא",
    "כל 30 שניות קיימת חובה לבצע החלפה בין מעסים",
    "החלפה בין מעסים לא תעשה אלא אם כן המעסה נמצא לא תקין לבצע את תפקידו",
    "החלפה בין מעסים תעשה לאחר 2 דקות עם פגיעה מעטה ברציפות העיסויים"
  ],
  correct: [3]
},
{
  question: "באילו מקרים ניתן להפסיק עיסויים?",
  answers: [
    "במקרה של התעייפות המעסה",
    "במידה ועשינו עיסויים במשך 8 דקות לפחות",
    "לעולם אין להפסיק עיסויים אלא אם מדובר בהחלפת מעסה או מתן שוק חשמלי",
    "במידה ויש דפיברילטור בקרבת המקום"
  ],
  correct: [2]
},
{
  question: "מהם הסימנים האופייניים המעידים על כך שאדם נמצא במצב של הלם?",
  answers: [
    "הזעה, חיוורון, נשימות מהירות והדרדרות בהכרה",
    "עור סמוק, דופק איטי ונשימות כבדות",
    "לחץ דם גבוה, נשימות כבדות ואדישות",
    "כאבי ראש, בחילות, הקאות, טמפרטורת גוף נמוכה"
  ],
  correct: [0]
},
{
  question: "מהו קצב העיסויים לדקה וכיצד יש למדודו?",
  answers: [
    "60-100 לדקה, יש למדודו בעזרת מטרונום",
    "60-100 לדקה, יש למדודו בעזרת שיטת הספירה",
    "100-120 לדקה, יש למדודו בעזרת שיטת הספירה",
    "100-120 לדקה, יש למדודו בעזרת מטרונום"
  ],
  correct: [3]
},
{
  question: "מהם חמשת שלבי הפעולה לביצוע החייאה?",
  answers: [
    "בדיקת הכרה ודיווח, בטיחות, בדיקת נשימה, עיסויי חזה, פינוי",
    "בטיחות, בדיקת הכרה, דיווח, בדיקת נשימה, עיסויי חזה",
    "בטיחות, בדיקת הכרה ודיווח, עיסויי חזה, בדיקת נשימה, חיבור דפיברילטור בהתאם",
    "בטיחות, בדיקת הכרה ודיווח, בדיקת נשימה, עיסויי חזה (במידה ואין נשימה והכרה), חיבור דפיברילטור בהקדם"
  ],
  correct: [3]
},
{
  question: "מהי תגובת אנפילקסיס?",
  answers: [
    "תגובה אלרגית מסכנת חיים",
    "חנק מגוף זר",
    "מצב שבא לפני פרכוס",
    "מצב של חוסר באספקת חמצן לריאות"
  ],
  correct: [0]
},
{
  question: "מהן מטרות פעולות ההחייאה?",
  answers: [
    "להזרים דם לריאות",
    "הורדת חום הגוף",
    "לחקות את פעולת הלב",
    "למנוע פגיעה מוחית"
  ],
  correct: [2, 3]
},
{
  question: "מהם סוגי הלחצים המשמשים לעצירת דימומים?",
  answers: [
    "לחץ ישיר- מניעת זרימת הדם בגפה על יד חוסם עורקים",
    "לחץ ישיר- הפעלת לחץ ישירות על מקור הדימום, ללא הפסקת זרימת הדם לגפה",
    "לחץ עקיף- מניעת זרימת הדם בגפה על ידי חוסם עורקים",
    "לחץ עקיף- הפעלת לחץ ישירות על מקור הדימום, ללא הפסקת זרימת הדם לגפה"
  ],
  correct: [1, 2]
},
{
  question: "מהם האיסורים בעת טיפול בהכשת נחש?",
  answers: [
    "ניסיון ללכוד את הנחש",
    "מציצת הארס",
    "קירור או חיתוך של המקום",
    "כל התשובות נכונות"
  ],
  correct: [3]
},
{
  question: "מבין האפשרויות הבאות, איזה סימפטום אינו מאפיין של מכת חום?",
  answers: [
    "בלבול",
    "הפרעות בתפקוד",
    "ירידה בהכרה עד אובדן הכרה",
    "הליכה איטית"
  ],
  correct: [3]
},
{
  question: "מהו ייעודו של אפיפן?",
  answers: [
    "מכשיר למדידת לחץ דם",
    "מזרק אוטומטי המכיל את החומר הפעיל אדרנלין לטיפול בתגובה אלרגית מסכנת חיים",
    "תרופה אשר מסייעת בהורדת החום ובכאבים",
    "משאף לטיפול בהתקף אסתמה"
  ],
  correct: [1]
},
{
  question: "באילו מקומות נבצע נקודות לחיצה?",
  answers: [
    "כל התשובות נכונות",
    "עצמות הבריח",
    "מפשעות",
    "זרוע"
  ],
  correct: [0]
},
{
  question: "באילו מקומות ניתן להניח חוסם עורקים CAT?",
  answers: [
    "בגב התחתון וברגליים",
    "בידיים",
    "ברגליים",
    "תשובות ב' ו-ג' נכונות"
  ],
  correct: [3]
},
];


let queue = questions.map(q => ({ ...q, wasWrong: false, attempted: false }));
let currentIndex = 0;
let attemptedCount = 0;
let wrongCount = 0;
let selectedAnswers = [];
let advanceTimer = null;
let quizStarted = false;

const startScreen = document.getElementById("startScreen");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizScreen = document.getElementById("quizScreen");
const quizHeader = document.getElementById("quizHeader");
const questionCard = document.getElementById("questionCard");
const endScreen = document.getElementById("endScreen");
const restartQuizBtn = document.getElementById("restartQuizBtn");

const els = {
  questionCounter: document.getElementById("questionCounter"),
  progressFill: document.getElementById("progressFill"),
  wrongCounter: document.getElementById("wrongCounter"),
  questionText: document.getElementById("questionText"),
  questionSubtext: document.getElementById("questionSubtext"),
  answers: document.getElementById("answers")
};

function setScreenTheme(screen) {
  const body = document.body;

  if (screen === "start") {
    body.style.backgroundColor = "#EDFDFF";
    startScreen.style.backgroundColor = "#EDFDFF";
    quizScreen.style.backgroundColor = "#EDFDFF";
    endScreen.style.backgroundColor = "#EDFDFF";
  } else if (screen === "quiz") {
    body.style.backgroundColor = "#EDFDFF";
    startScreen.style.backgroundColor = "#EDFDFF";
    quizScreen.style.backgroundColor = "#EDFDFF";
    endScreen.style.backgroundColor = "#EDFDFF";
  } else if (screen === "end") {
    body.style.backgroundColor = "#EDFDFF";
    startScreen.style.backgroundColor = "#EDFDFF";
    quizScreen.style.backgroundColor = "#EDFDFF";
    endScreen.style.backgroundColor = "#EDFDFF";
  }
}

function setOverflow(mode) {
  document.documentElement.style.overflowX = "auto";
  document.body.style.overflowX = "auto";
  // document.documentElement.style.overflowY = mode;
  // document.body.style.overflowY = mode;
}

startQuizBtn.addEventListener("click", () => {
  quizStarted = true;
  setScreenTheme("quiz");
  setOverflow("auto");

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quizHeader.classList.remove("hidden");
  questionCard.classList.remove("hidden");
  endScreen.classList.add("hidden");

  renderQuestion();
});

restartQuizBtn.addEventListener("click", () => {
  queue = questions.map(q => ({ ...q, wasWrong: false, attempted: false }));
  currentIndex = 0;
  attemptedCount = 0;
  wrongCount = 0;
  selectedAnswers = [];
  clearTimeout(advanceTimer);
  quizStarted = false;

  setScreenTheme("start");
  setOverflow("hidden");

  endScreen.classList.add("hidden");
  quizHeader.classList.add("hidden");
  questionCard.classList.add("hidden");
  quizScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  updateHeader();
});

function updateHeader() {
  const total = questions.length;
  const progress = total === 0 ? 0 : Math.round((attemptedCount / total) * 100);
  els.questionCounter.textContent = `${attemptedCount}/${total}`;
  els.progressFill.style.width = `${progress}%`;
  els.wrongCounter.textContent = wrongCount;
}

function renderQuestion() {
  clearTimeout(advanceTimer);
  selectedAnswers = [];

  if (!quizStarted) return;

  if (queue.length === 0) {
    setScreenTheme("end");
    setOverflow("hidden");
    quizHeader.classList.add("hidden");
    questionCard.classList.add("hidden");
    endScreen.classList.remove("hidden");
    return;
  }

  setScreenTheme("quiz");
  setOverflow("auto");
  quizHeader.classList.remove("hidden");
  questionCard.classList.remove("hidden");
  endScreen.classList.add("hidden");

  if (currentIndex >= queue.length) currentIndex = 0;

  const q = queue[currentIndex];
  const needed = q.correct.length;

  els.questionText.textContent = q.question;
  els.questionSubtext.textContent = needed === 1 ? "בחר תשובה אחת" : `בחר ${needed} תשובות`;
  els.answers.innerHTML = "";

  q.answers.forEach((answerText, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answerText;
    btn.onclick = () => selectAnswer(index, btn);
    els.answers.appendChild(btn);
  });

  updateHeader();
}

function selectAnswer(index, btn) {
  const q = queue[currentIndex];
  const needed = q.correct.length;
  const buttons = [...document.querySelectorAll(".answer-btn")];

  if (!q.attempted) {
    q.attempted = true;
    attemptedCount++;
    updateHeader();
  }

  if (selectedAnswers.includes(index)) return;

  selectedAnswers.push(index);

  const isThisCorrect = q.correct.includes(index);
  btn.classList.add(isThisCorrect ? "correct" : "wrong");

  if (selectedAnswers.length < needed) return;

  buttons.forEach(b => b.classList.add("disabled"));

  const selectedSorted = [...selectedAnswers].sort((a, b) => a - b);
  const correctSorted = [...q.correct].sort((a, b) => a - b);
  const isFullyCorrect =
    selectedSorted.length === correctSorted.length &&
    selectedSorted.every((v, i) => v === correctSorted[i]);

  if (isFullyCorrect) {
    if (q.wasWrong) {
      wrongCount--;
      q.wasWrong = false;
    }

    advanceTimer = setTimeout(() => {
      queue.splice(currentIndex, 1);
      if (currentIndex >= queue.length) currentIndex = 0;
      updateHeader();
      renderQuestion();
    }, 700);
  } else {
    if (!q.wasWrong) {
      q.wasWrong = true;
      wrongCount++;
      updateHeader();
    }

    advanceTimer = setTimeout(() => {
      const [wrongQuestion] = queue.splice(currentIndex, 1);
      queue.push(wrongQuestion);
      if (currentIndex >= queue.length) currentIndex = 0;
      updateHeader();
      renderQuestion();
    }, 900);
  }
}

setScreenTheme("start");
setOverflow("auto");
updateHeader();
