const questions = [
    {
        'question': "Salah satu ciri khas definisi TP tahun 2004 adalah",
        'choices': ["penggunaan istilah teknologi pembelajaran", "etika dan estetika praktisi", "kejelasan kawasan", "pengembangan teori terkait penelitian"],
        'answer': "etika dan estetika praktisi"
    },
    {
        'question': "Definisi TP yang menyatakan bahwa TP merupakan suatu kegiatan merancang dan memanfaatkan pesan untuk mengendalikan belajar",
        'choices': ["Definisi TP 1977", "Definisi TP 1972", "Definisi TP 1994", "Definisi TP 1963"],
        'answer': "Definisi TP 1963"
    },
    {
        'question': "Teori dan praktek untuk membawa pemelajar bersentuhan dengan kondisi belajar dan sumber-sumber merupakan definisi",
        'choices': ["Kawasan desain", "Kawasan pemanfatan", "Kawasan pengelolaan", "Kawasan pengembangan"],
        'answer': "Kawasan pemanfatan"
    },
    {
        'question': "Aspek latar belakang pengalaman pemelajar yang mempengaruhi efektifitas proses belajarnya, mencakup keadaan sosio-psiko-fisik merupakan",
        'choices': ["Desain sistem pembelajaran", "Karakteristik pemelajar", "Desain pesan", "Strategi pembelajaran"],
        'answer': "Karakteristik pemelajar"
    },
    {
        'question': "Ruang lingkup kawasan pengelolaan yang memungkinkan terjadinya perbaikan yang terus menerus dari suatu organisasi, menurut Jnuszweski adalah",
        'choices': ["penjaminan mutu", "pengembangan", "pengawasan", "analisis"],
        'answer': "penjaminan mutu"
    },
    {
        'question': "Kawasan TP yang berkaitan dengan penelitian, teori dan praktek dalam menciptakan lingkungan belajar dalam latar yang berbeda-beda, baik formal dan nonformal.",
        'choices': ["Kawasan mencipta", "Kawasan menggunakan", "Kawasan mengelola", "Kawasan evaluasi"],
        'answer': "Kawasan mencipta"
    },
    {
        'question': "Yang dimaksud dengan deep learning adalah",
        'choices': ["merangsang ingatan", "menghafal informasi", "menerapkan pengetahuan dan keterampilan dalam batas2 kelas", "menggunakan pengetahuan dan keterampilan di dunia nyata"],
        'answer': "menggunakan pengetahuan dan keterampilan di dunia nyata"
    },
    {
        'question': "Yang dimaksud dengan praktek etis/ ethical practice dalam definisi TP 2004, kecuali",
        'choices': ["TPers harus mempertimbangkan siswa, lingkungan belajar, kebutuhan belajar", "Memelihara pelaksanaan profesional yang biasa", "TPers harus mempertanyakan kebaikan praktek mereka", "Merupakan dasar untuk praktek"],
        'answer': "Memelihara pelaksanaan profesional yang biasa"
    },
    {
        'question': "Proses yang menghasilkan produk berkualitas dan dapat menghasilkan perubahan kemampuan yang dapat digunakan dalam dunia nyata",
        'choices': ["performance technology", "performance", "improving", "improving performance"],
        'answer': "improving performance"
    },
    {
        'question': "Kecuali salah satu, teknologi adalah sistem yang diciptakan manusia dengan tujuan",
        'choices': ["memperingan usaha manusia", "membutuhkan tenaga serta sumber daya yang banyak", "mempermudah manusia", "meningkatkan hasil kegiatan"],
        'answer': "membutuhkan tenaga serta sumber daya yang banyak"
    },
    {
        'question': "Jumlah keseluruhan dari bagian-bagian yang bekerja sendiri-sendiri dan bekerja sama untuk mencapai tujuan yang diharapkan adalah",
        'choices': ["proses", "sumber", "sistem", "pendekatan"],
        'answer': "sistem"
    },
    {
        'question': "Ciri khas dari definisi TP tahun 1994 adalah",
        'choices': ["memfasilitasi belajar pada manusia melalui pemanfaatan sumber belajar", "desain pesan", "pemecahan masalah belajar dimana belajar bertujuan dan terkontrol", "adanya 5 domain teknologi pembelajaran"],
        'answer': "adanya 5 domain teknologi pembelajaran"
    },
    {
        'question': "Kegiatan yang bertujuan agar suatu medium dapat dijangkau oleh pengguna sekaligus menyediakan perangkat keras dan perangkat lunak, termasuk cara menggunakannya",
        'choices': ["pengelolaan sumber", "pengelolaan sistem informasi", "pengelolaan proyek", "pengelolaan sistem penyampaian"],
        'answer': "pengelolaan sistem penyampaian"
    },
    {
        'question': "Kecuali salah satu, istilah facilitating learning mengandung makna",
        'choices': ["merancang lingkungan belajar", "mengorganisasikan sumber-sumber", "mengelola sistem sekolah", "menyediakan peralatan"],
        'answer': "mengelola sistem sekolah"
    },
    {
        'question': "Berkembangnya pembelajaran audiovisual merujuk pada landasan yang mendalam yaitu",
        'choices': ["adanya penambahan komponen audio, mengakibatkan perubahan konseptual yang besar", "perangkat keras yang dipakai guru untuk menyampaikan gagasan dan pengalaman melalui mata", "timbulnya rekaman suara dan film bersuara, aliran sebelumnya dipersempit", "orang belajar secara efektif dari beragam pengalaman, diilustrasikan oleh “Kerucut Pengalaman Edgar Dale"],
        'answer': "orang belajar secara efektif dari beragam pengalaman, diilustrasikan oleh “Kerucut Pengalaman Edgar Dale"
    },
    {
        'question': "Istilah 'study' dalam definisi Teknologi pendidikan terbaru bermakna",
        'choices': ["pengumpulan informasi dan analisis secara tradisional", "penelitian kualitatif", "konstruksi pengetahuan terus menerus", "pengkajian yang melebihi konsepsi penelitian yang tradisional"],
        'answer': "pengkajian yang melebihi konsepsi penelitian yang tradisional"
    },
    {
        'question': "Alat, bahan, perangkat, latar/setting dan orang yang digunakan pemelajar untuk berinteraksi, sehingga dapat memfasilitasi belajar dan kinerjanya merupakan wujud dari",
        'choices': ["proses", "pendekatan", "sistem", "sumber"],
        'answer': "sumber"
    },
    {
        'question': "Esensi dari definisi TP tahun 1977 bahwa Teknologi pendidikan adalah",
        'choices': ["pemecahan masalah belajar dimana belajar bertujuan dan terkontrol", "memfasilitasi belajar pada manusia melalui pemanfaatan sumber belajar", "desain pesan", "penerapan pendekatan sistem untuk pembelajaran yang efektif"],
        'answer': "pemecahan masalah belajar dimana belajar bertujuan dan terkontrol"
    },
    {
        'question': "Aturan dan tindakan dari pembuat keputusan untuk menerima dan mempengaruhi penyebaran inovasi dalam teknologi pembelajaran",
        'choices': ["institusionalisasi", "difusi inovasi", "kebijakan dan regulasi", "pemanfaatan media"],
        'answer': "kebijakan dan regulasi"
    },
    {
        'question': "Salah satu peran kawasan dalam Teknologi Pendidikan adalah",
        'choices': ["Adanya struktur taksonomi yang mantap atau tidak berubah", "Membatasi kerjasama antar kaum akademisi dan para praktisi", "Diperlukannya kesamaan kerangka konseptual dan kesepakatan dalam peristilahan", "Membatasi perumusan definisi suatu bidang"],
        'answer': "Diperlukannya kesamaan kerangka konseptual dan kesepakatan dalam peristilahan"
    },
    {
        'question': "Proteksi terhadap hak akses terhadap bahan2 belajar dan usaha untuk menjaga kesehatan dan keamanan dari para profesional adalah",
        'choices': ["Komitmen terhadap profesi", "Komitmen terhadap masyarakat", "Komitmen terhadap organisasi", "Komitmen terhadap individu"],
        'answer': "Komitmen terhadap individu"
 },
    {
        'question': "Kecuali salah satu, teknologi merupakan",
        'choices': ["unsur pilihan dalam masyarakat", "ciptaan manusia untuk memecahkan masalah", "bagian integral dalam kehidupan", "cermin kemajuan budaya"],
        'answer': "unsur pilihan dalam masyarakat"
    },
    {
        'question': "Penelitian TP pada masa kini telah mengarah pada",
        'choices': ["merancang lingkungan untuk memudahkan belajar", "upaya yang dilakukan siswa kearah pencapaian belajar secara minimal", "menagamati pengaruh perlakuan tertentu terhadap hasil belajar", "merancang rutinitas pembelajaran yang spesifik"],
        'answer': "merancang lingkungan untuk memudahkan belajar"
    },
    {
        'question': "Pada kawasan pengelolaan, kegiatan memimpin pekerjaan yang harus selesai dalam kurun waktu tertentu, adalah",
        'choices': ["pengelolaan sumber", "pengelolaan sistem penyampaian", "pengelolaan proyek", "pengelolaan sistem informasi"],
        'answer': "pengelolaan proyek"
    },
    {
        'question': "Definisi yang menyatakan bahwa TP menekankan adanya teori-teori yang memandu praktisi untuk berkiprah lebih baik dalam penerapan TP dan kinerjanya sehari-hari",
        'choices': ["Definisi TP 1977", "Definisi TP 1972", "Definisi TP 1963", "Definisi TP 1994"],
        'answer': "Definisi TP 1994"
    },
    {
        'question': "Kecuali salah satu, perlunya mengetahui perkembangan konseptual TP karena",
        'choices': ["Agar dapat menumbuhkan benih di lahan yang masih kosong", "Agar memiliki wawasan ke-Teknologi Pendidikan-an yang komprehensif", "Setiap konsep memerlukan “istilah” atau “nama” untuk mengidentifikasi konsep yang dimaksud", "Perlunya mengkomunikasikan gagasan yang ada di dalam istilah"],
        'answer': "Agar dapat menumbuhkan benih di lahan yang masih kosong"
    },
    {
        'question': "Kajian yang berupa proses terkait dengan desain, pengembangan dan evaluasi yang bertujuan mengembangkan suatu produk",
        'choices': ["penelitian umum", "penelitian tindakan kelas", "penelitian desain dan pengembangan", "penelitian berbasis desain"],
        'answer': "penelitian desain dan pengembangan"
    },
    {
        'question': "Adanya feedback dalam suatu proses pembelajaran yg menunjukkan reaksi penerima atas pesan yg diterima dari sumber/sender, merupakan pengaruh dari..",
        'choices': ["konsep pembelajaran visual", "pembelajaran audiovisual", "konsep sistem awal", "konsep teori komunikasi"],
        'answer': "konsep teori komunikasi"
    },
    {
        'question': "Berbagai intervensi yang berbeda-beda yang dapat digunakan di dunia kerja untuk meningkatkan performance individu atau kelompok",
        'choices': ["improving", "performance technology", "performance", "improving performance"],
        'answer': "performance technology"
    },
    {
        'question': "Kegiatan penggunaan yang efektif dari bahan dan strategi pembelajaran dalam keadaan yang sesungguhnya",
        'choices': ["difusi inovasi", "kebijakan dan regulasi", "implementasi", "pemanfaatan media"],
        'answer': "implementasi"
    },
    {
        'question': "Kecuali salah satu diantaranya, teknologi adalah",
        'choices': ["cara pandang", "manajemen dan mekanisme pantauan", "mesin", "proses"],
        'answer': "cara pandang"
    },
    {
        'question': "Kawasan desain muncul salah satunya dengan adanya artikel dari BF.Skinner “The Science of Learning and The Art of Teaching” yang berisi",
        'choices': ["pengetahuan preskriptif desain", "teori tentang pembelajaran berprogram", "desain pembelajaran sebagai inti dari Teknologi Pendidikan", "karakteristik umum desain"],
        'answer': "teori tentang pembelajaran berprogram"
    },
    {
        'question': "Definisi yang menyatakan bahwa tugas utama TP adalah memecahkan masalah belajar dengan menerapkan prinsip proses tertentu",
        'choices': ["Definisi TP 1963", "Definisi TP 1972", "Definisi TP 1994", "Definisi TP 1977"],
        'answer': "Definisi TP 1977"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.addEventListener('click', () => selectAnswer(choice));
        choicesElement.appendChild(button);
    });
}

function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    const choicesElement = document.getElementById('choices');

    // Membuat elemen untuk menampilkan umpan balik
    const feedback = document.createElement('div');
    feedback.classList.add('feedback');

    if (choice === currentQuestion.answer) {
        score++;
        feedback.textContent = "Jawaban Anda benar!";
        feedback.style.color = 'green'; // Warna hijau untuk jawaban benar
    } else {
        feedback.textContent = `Jawaban Anda salah! Jawaban yang benar adalah: ${currentQuestion.answer}`;
        feedback.style.color = 'red'; // Warna merah untuk jawaban salah
    }

    choicesElement.appendChild(feedback);

    // Menyembunyikan pilihan setelah memilih
    const choices = document.querySelectorAll('.choice');
    choices.forEach(button => button.disabled = true);

    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }, 2000); // Menunggu 2 detik sebelum melanjutkan ke pertanyaan berikutnya
}


function showScore() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h2>Skor Anda: ${score} dari ${questions.length}</h2>`;
}

document.getElementById('next-button').addEventListener('click', loadQuestion);

loadQuestion();
