function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pertanyaan ke-" + currentQuestionNumber + " dari " + quiz.questions.length;
};

function showScores() {
let hasil;
    if(quiz.score < 7){
      hasil = "Rendah" + "</h2><hr style='margin-top: 50px'><h2 id = 'score1'>Pertahankan pola hidup dan teratur dengan memvariasikan aktivitas di dalam rumah agar tubuh terlatih juga ototnya. Sering berkomunikasi dengan teman atau keluarga secara online, agar imunitas tubuh bisa meningkat.</h2>"
    }else if (quiz.score < 15){
      hasil = "Sedang" + "</h2><hr style='margin-top: 50px'><h2 id = 'score1'>Cuci tangan sebelum dan sesudah melakukan suatu hal, biasakan langsung mandi dengan bersih setelah dari luar rumah, minimalisirkan berinteraksi secara langsung pada orang lain.</h2>"
    }else{
      hasil = "Tinggi" + "</h2><hr style='margin-top: 50px'><h2 id = 'score1'>Perketat social distancing, lebih sering mencuci tangan, jaga pola makan. Jika temperatur tubuh diatas rata - rata, lakukan medical check up ke rumah sakit terdekat atau bisa menghubungi layanan kesehatan."
    }
    var gameOverHTML = "<h1>Hasil</h1>";
    gameOverHTML += "<h2 id='score'> Hasil Anda: " + hasil + "<hr style='margin-bottom: 50px'><center><a href=index.html id=btn4>Ulangi</a></center>";





    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Saya pergi keluar rumah", ["Ya", "Tidak"], "Ya"),
    new Question("Saya menggunakan transportasi umum", ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak memakai masker",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya berjabat tangan dengan orang lain",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak membersihkan tangan dengan hand sanitizer / tissue basah sebelum memegang kendali kendaraan",  ["Ya", "Tidak"], "Ya"),    
    new Question("Saya menyentuh benda / uang yang juga disentuh orang lain",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak menerapkan social distancing ketika berbelanja, bekerja, belajar, ibadah",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya makan di warung / restaurant",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak minum air hangan dan mencuci tangan setelah tiba di tujuan",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya berada di wilayah kelurahan tempat pasien tertular",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak pasang hand sanitizer di depan pintu masuk rumah ",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak mencuci tangan dengan sabun setelah tiba dirumah",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak menyediakan tissue basah, masker, sabun antiseptic bagi keluarga di rumah",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak segera merendam baju & celana bekas pakai di luar rumah",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak segera mandi keramas setelah saya tiba dirumah",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak mensosialikan checklist penilaian resiko pribadi ini kepada keluarga",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya dalam sehari tidak kena cahaya matahari minimal 15 menit",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya tidak jalan kaki / berolahraga minimal 20 menit setiap hari",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya jarang minum vitamin C & E, dan kurang tidur",  ["Ya", "Tidak"], "Ya"),
    new Question("Usia saya diatas 60 tahun",  ["Ya", "Tidak"], "Ya"),
    new Question("Saya mempunyai penyakit jantung/diabetes/gangguan pernafasan kronis",  ["Ya", "Tidak"], "Ya"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





