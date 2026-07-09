/* ==========================================================================
   DATA.JS — Đây là nơi DUY NHẤT bạn cần chỉnh sửa để thêm nội dung mới.
   Không cần biết lập trình, chỉ cần sao chép 1 khối (giữa { và }) và sửa lại
   thông tin bên trong. Nhớ giữ đúng dấu phẩy, dấu ngoặc kép "..." và ngoặc { }.

   Hướng dẫn lấy đường dẫn file (PDF / audio) từ Google Drive nằm trong
   README.md ở thư mục gốc — mục "Cách thêm tài liệu mới".
   ========================================================================== */

const CONTENT = {

  /* ------------------------------------------------------------------
     1) GIÁO TRÌNH — mỗi khối {...} là một khoá học / cấp độ
     ------------------------------------------------------------------ */
  courses: [
    {
      id: "hsk1",
      title: "HSK Sơ cấp 1",
      level: "Sơ cấp",
      description: "Ngữ âm, 150 từ vựng nền tảng và các mẫu câu giao tiếp cơ bản.",
      materials: [
        {
          label: "Giáo trình chính",
          type: "PDF",
          // Dán link Google Drive dạng "preview" hoặc link file .pdf trực tiếp vào đây
          url: "https://drive.google.com/file/d/FILE_ID_GIAO_TRINH/preview"
        },
        {
          label: "Sách bài tập",
          type: "PDF",
          url: "https://drive.google.com/file/d/FILE_ID_BAI_TAP/preview"
        },
        {
          label: "Sách luyện viết chữ Hán",
          type: "PDF",
          url: "https://drive.google.com/file/d/FILE_ID_LUYEN_VIET/preview"
        }
      ],
      audios: [
        { name: "Bài 1 — Chào hỏi 你好", src: "assets/audio/hsk1-bai1.mp3" },
        { name: "Bài 2 — Giới thiệu bản thân", src: "assets/audio/hsk1-bai2.mp3" }
        // Thêm dòng tương tự cho các bài tiếp theo. File .mp3 đặt trong assets/audio/
      ]
    },
    {
      id: "hsk2",
      title: "HSK Sơ cấp 2",
      level: "Sơ cấp",
      description: "Mở rộng 150 từ vựng, ngữ pháp về thời gian, so sánh và mô tả.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách bài tập", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: [
        { name: "Bài 1 — Ôn tập", src: "assets/audio/hsk2-bai1.mp3" }
      ]
    },
    {
      id: "hsk3",
      title: "HSK Trung cấp 3",
      level: "Trung cấp",
      description: "600 từ vựng, các cấu trúc ngữ pháp phức tạp hơn, luyện nghe hội thoại dài.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách luyện viết chữ Hán", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
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
    }
    // Thêm chủ đề mới: sao chép cả khối { topic: ..., videos: [...] }
  ]
};
