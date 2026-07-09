/* ==========================================================================
   DATA.JS — Đây là nơi DUY NHẤT bạn cần chỉnh sửa để thêm nội dung mới.
   Không cần biết lập trình, chỉ cần sao chép 1 khối (giữa { và }) và sửa lại
   thông tin bên trong. Nhớ giữ đúng dấu phẩy, dấu ngoặc kép "..." và ngoặc { }.

   Hướng dẫn lấy đường dẫn file (PDF / audio) từ Google Drive nằm trong
   README.md ở thư mục gốc — mục "Cách thêm tài liệu mới".
   ========================================================================== */

const CONTENT = {

  /* ------------------------------------------------------------------
     1) GIÁO TRÌNH — mỗi khối {...} là một bộ giáo trình.
        "category" PHẢI trùng với một trong 5 giá trị bên dưới để nút lọc
        trên trang Giáo trình hoạt động đúng:
          "Giáo trình chuẩn HSK 2.0"
          "Giáo trình chuẩn HSK 3.0"
          "Giáo trình Hán ngữ"
          "Giáo trình Boya"
          "Giáo trình Msutong"
     ------------------------------------------------------------------ */
const CONTENT = {
  courses: [
    {
      id: "hsk2-0-so-cap-1",
      title: "HSK 2.0 — Sơ cấp 1",
      category: "Giáo trình chuẩn HSK 2.0",
      description: "Ngữ âm, 150 từ vựng nền tảng và các mẫu câu giao tiếp cơ bản.",
      
      // ✅ MỚI: Thêm danh sách bài học
      lessons: [
        {
          number: "Bài 1",
          title: "Chào hỏi 你好",
          description: "Học cách chào hỏi cơ bản",
          audio: "assets/audio/hsk2-0-bai1.mp3",
          pdf: "https://drive.google.com/file/d/FILE_ID/preview",
          exercises: "https://drive.google.com/file/d/FILE_ID/preview" // optional
        },
        {
          number: "Bài 2",
          title: "Giới thiệu bản thân",
          description: "Học cách giới thiệu tên, tuổi, quê quán",
          audio: "assets/audio/hsk2-0-bai2.mp3",
          pdf: "https://drive.google.com/file/d/FILE_ID/preview"
        },
        {
          number: "Bài 3",
          title: "Gia đình",
          description: "Từ vựng về gia đình",
          audio: "assets/audio/hsk2-0-bai3.mp3",
          pdf: "https://drive.google.com/file/d/FILE_ID/preview"
        }
        // Thêm các bài khác...
      ],
      
      // Giữ nguyên materials (tài liệu bổ trợ)
      materials: [
        { label: "Sách bài tập", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách luyện viết chữ Hán", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      
      // ❌ XÓA audios cũ (đã có trong lessons)
    },
    
    // === THÊM CHO CÁC GIÁO TRÌNH KHÁC ===
    {
      id: "hsk3-0-so-cap-1",
      title: "HSK 3.0 — Sơ cấp 1 (Cấp 1)",
      category: "Giáo trình chuẩn HSK 3.0",
      description: "Bám sát khung năng lực HSK 3.0 mới, 500 từ vựng cấp 1–2.",
      lessons: [
        { number: "Bài 1", title: "Ôn tập HSK 2.0", audio: "assets/audio/hsk3-0-bai1.mp3", pdf: "..." },
        { number: "Bài 2", title: "Thời gian", audio: "assets/audio/hsk3-0-bai2.mp3", pdf: "..." }
      ],
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "..." }
      ]
    },
    
    // ... Các giáo trình khác tương tự
  ]
};
    {
      id: "hsk3-0-so-cap-1",
      title: "HSK 3.0 — Sơ cấp 1 (Cấp 1)",
      category: "Giáo trình chuẩn HSK 3.0",
      description: "Bám sát khung năng lực HSK 3.0 mới, 500 từ vựng cấp 1–2.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách bài tập", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: [
        { name: "Bài 1 — Ôn tập", src: "assets/audio/hsk3-0-bai1.mp3" }
      ]
    },
    {
      id: "han-ngu-quyen-1",
      title: "Hán ngữ — Quyển 1",
      category: "Giáo trình Hán ngữ",
      description: "Giáo trình Hán ngữ kinh điển, luyện đủ 4 kỹ năng nghe – nói – đọc – viết.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách luyện viết chữ Hán", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "boya-so-cap-1",
      title: "Boya Hán ngữ — Sơ cấp 1",
      category: "Giáo trình Boya",
      description: "Giáo trình Boya dành cho người mới bắt đầu, chú trọng hội thoại thực tế.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách bài tập", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "msutong-so-cap-1",
      title: "Msutong Hán ngữ — Sơ cấp 1",
      category: "Giáo trình Msutong",
      description: "Giáo trình Msutong dùng cho sinh viên quốc tế, tốc độ vừa phải, nhiều bài luyện tập.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách bài tập", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    }
  ],

  /* ------------------------------------------------------------------
     2) TRÒ CHƠI — mỗi khối {...} là một trò chơi HTML tự tạo
        Đặt file trò chơi (.html) trong thư mục /games rồi ghi tên file vào "file"
     ------------------------------------------------------------------ */
  games: [
    {
      id: "ghep-tu",
      title: "Ghép từ — Pinyin",
      hanzi: "配",
      description: "Ghép chữ Hán với phiên âm Pinyin đúng trong thời gian giới hạn.",
      tag: "Từ vựng · HSK 1–2",
      file: "games/ghep-tu-pinyin.html"
    }
    // Thêm trò chơi mới: sao chép khối trên, đổi id/title/file cho trò chơi kế tiếp
  ],

  /* ------------------------------------------------------------------
     3) VIDEO — nhóm theo chủ đề. Mỗi video là YouTube hoặc TikTok.
        - YouTube: chỉ cần "id" là mã video (đoạn sau ?v= trong đường link)
        - TikTok: dùng "url" là link đầy đủ tới video TikTok
     ------------------------------------------------------------------ */
  videoTopics: [
    {
      topic: "Giao tiếp hằng ngày",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Chào hỏi và tự giới thiệu bằng tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
      ]
    },
    {
      topic: "Phát âm & Thanh điệu",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "4 thanh điệu cơ bản trong tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
      ]
    },
    {
      topic: "Văn hoá Trung Hoa",
      videos: [
        {
          platform: "tiktok",
          url: "https://www.tiktok.com/@tiktok/video/7000000000000000000",
          title: "Tết Nguyên Đán ở Trung Quốc",
          thumb: ""
        }
      ]
    },
    {
      topic: "Văn mẫu",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Cách viết bài văn miêu tả bằng tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
        // Thêm video giảng/đọc văn mẫu khác vào đây, theo mẫu YouTube hoặc TikTok ở trên
      ]
    },
    {
      topic: "Âm nhạc",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Học tiếng Trung qua bài hát 月亮代表我的心",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
        // Thêm MV / bài hát tiếng Trung khác vào đây
      ]
    }
    // Thêm chủ đề mới: sao chép cả khối { topic: ..., videos: [...] }
  ]
};
