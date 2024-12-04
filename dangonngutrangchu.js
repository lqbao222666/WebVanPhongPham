document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử dropdown để chọn ngôn ngữ
  const languageSelector = document.getElementById("languageSelector");

  // Lấy tất cả các phần tử có thuộc tính "data-lang"
  const langElements = document.querySelectorAll("[data-lang]");

  // Đối tượng translations để lưu trữ nội dung văn bản ở cả hai ngôn ngữ (Tiếng Anh và Tiếng Việt)
  const translations = {
    en: {
      itemlist: "Product Categories",
      register: "Register",
      login: "Login",
      introvpct: "STATIONERY IN CAN THO",
      introp:
        "Can Tho is not only the most modern and developed city in the Mekong Delta but also one of the country's major economic, cultural, educational, and commercial centers. Therefore, the demand for office supplies for companies, schools, households, and personal use has significantly increased. Finding a wholesale supplier or distributor of office supplies in Can Tho to stock up for opening an agency or office supply store, or to purchase large quantities at discounted and affordable prices, has become essential.",
      items: "COMMON OFFICE SUPPLIES AT WHOLESALE PRICES IN CAN THO",
      pitem:
        "Most essential office supplies can be easily purchased in Can Tho at wholesale prices with significant discounts from specialized office supply distributors. This approach is one of the most cost-effective ways to procure products, widely adopted by retailers and office supply agencies in the area. Common items include various types of paper such as A4 printing and photocopy paper, continuous form paper, sticky notes, colored paper, carbon paper, and decal paper. File storage solutions like document sleeves, clipboards, transparent covers, ring binders, plastic dividers, and multi-tier acrylic racks are also popular. Notebooks, school notebooks, envelopes, and name card books cater to organizational needs. Writing tools range from ballpoint pens, gel pens, and markers to correction pens, erasers, pencils, and marker ink. Adhesive supplies like tapes and glue sticks, cutting tools such as scissors and cutters, and measurement tools like rulers are indispensable. Additionally, staplers, hole punches, binder clips, and other fasteners are frequently used. Office equipment like Casio calculators, fax film, and batteries round out the comprehensive list of available items.",
      heading:
        "THINGS TO CONSIDER WHEN LOOKING FOR WHOLESALE STATIONERY SUPPLIERS",
      paragraph:
        "here are many ways to purchase office supplies in Cần Thơ, but the best option is to buy from reputable, long-established wholesale office supply providers with high-quality products. These suppliers often offer exclusive policies for branches and distributors, providing significant discounts for bulk purchases. They are transparent about product pricing and provide clear contracts. Delivery options are flexible, with free doorstep delivery available, ensuring product quality standards are met. The product selection is diverse, covering various brands, designs, and colors.",
      aboutus: "ABOUT OUR COMPANY",
      company:
        "Green Office Company is one of the pioneering enterprises in providing modern, cost-effective, and eco-friendly office solutions in Vietnam. With a commitment to prioritizing customers, we consistently deliver high-quality products and services that cater to the needs of individuals, small businesses, and large corporations alike.",
      mission:
        "Vision become the leading supplier of office supplies in Vietnam,a leader in innovation and sustainable development.Mission to deliver comprehensive office solutions that optimize workspace efficiency while minimizing negative environmental impacts.",
      vision: "Vision and Mission",
      product: "Products and Services",
      services:
        "Green Office specializes in providing a wide range of eco-friendly office products aimed at sustainability and environmental protection. Our featured products include recycled paper, environmentally friendly office materials, and energy-saving devices. We are committed to delivering effective solutions that meet daily work demands while contributing to a greener and more sustainable future. With a diverse product portfolio, Green Office helps businesses optimize costs and promote environmental awareness within the community.",
      corevalues: "Core Values",
      corevalue1:
        "Sustainability: Always focus on minimizing waste and promoting recycling.",
      corevalue2:
        "Innovation: Applying new technologies to create modern and smart office solutions.",
      corevalue3:
        "Quality: Ensuring that all products and services meet the highest standards.",
      corevalue4:
        "Customer-Centric: Always putting customer needs at the heart of every decision and action.",
      brand: "Our Brand Partners",
      specializing:
        "Specializing in providing high-quality stationery at reasonable prices.",
      lk: "Useful links",
      our: "About us",
      item: "Item",
      lock: "Privacy policy",
      contact: "Contact",
      in4contact: "Contact information",
      "connect-with-us": "Connect with us",
      copyright: "2024 Green Office. All rights reserved.",
    },
    vi: {
      itemlist: "Danh Mục Sản Phẩm",
      register: "Đăng Ký",
      login: "Đăng Nhập",
      introvpct: "VĂN PHÒNG PHẨM TẠI CẦN THƠ",
      introp:
        "Cần Thơ không chỉ là thành phố hiện đại và phát triển bậc nhất tại Đồng bằng sông Cửu Long mà còn là một trong những trung tâm kinh tế,văn hoá, giáo dục, thương mại của cả nước. Chính vì vậy mà cầu sử dụng các đồ dùng văn phòng phẩm cho văn phòng công ty, trường học, gia đình, học tập cũng tăng cao nên việc tìm nguồn/nhà phân phối sỉ văn phòng phẩm Cần Thơ để nhập hàng mở đại lý/cửa hàng kinh doanh văn phòng phẩm (VPP), mua số lượng lớn có chiết khấu tốt giá rẻ về sử dụng.",
      items: "CÁC MẶT HÀNG VĂN PHÒNG PHẨM THÔNG DỤNG GIÁ SỈ TẠI CẦN THƠ",
      pitem:
        "Hầu hết các mặt hàng văn phòng phẩm cần thiết đều có thể tìm mua tại Cần Thơ với giá sỉ ưu đãi cao từ các công ty chuyên phân phối VPP. Đây cũng là một trong những các đặt mua sản phẩm tốt nhất, giúp tiết kiệm kinh phí được các nhà bán lẻ, các đại lý văn phòng phẩm tại Cần Thơ áp dụng nhiều nhất.Dưới đây là các sản phẩm VPP thông dụng hiện nay:Giấy các loại : Giấy in – photo A4, Giấy in liên tục, Giấy note - phân trang, Giấy bìa màu – Giấy than – Giấy decal.File đựng hồ sơ : Bìa lá  - Bìa trình ký – Bìa kiếng, Bìa còng – bìa hộp – bìa 3 dây, Bìa nhựa – Bìa phân trang – Bìa lỗ, kệ rổ - kệ tầng mica – Hộp cắm viết.Sổ - Tập : Sổ các loại, Tập vở - Bao thư, Sổ Namecard Bút mực : Bút bi – Bút Gel, Bút lông bảng – bút lông dầu – bút dạ quang, Bút xóa – Gôm tẩy, Bút chì – Chuốt chì, Mực lông bảng – Mực lông dầu – Hộp dấu.Băng keo – Dao – Kéo – Thước : Băng keo – Keo Khô, Dao – Kéo, Cắt băng keo – Thước.Bấm kim – Kim – Kẹp : Máy bấm kim – Bấm lỗ, Kim bấm – kim kẹp, Kẹp bướm – Kẹp acco Và các thiết bị văn phòng như Máy tính Casio, Film Fax, Pin các loại...",
      heading: "ĐIỀU LƯU Ý KHI TÌM NHÀ PHÂN PHỐI VĂN PHÒNG PHẨM GIÁ SỈ",
      paragraph:
        " Có rất nhiều cách để đặt mua văn phòng phẩm tại Cần Thơ nhưng cách tốt nhất là bạn nên đặt mua tại các văn phòng phẩm giá sỉ uy tín,lâu năm và có chất lượng cao vì tại đây họ sẽ có những chính sách riêng cho các chi nhánh, đại lý nên sẽ có nhiều mức giá chiết khấu khi mua số lượng lớn. Họ sẽ luôn minh bạch về giá thành sản phẩm, có hợp đồng rõ ràng. Hình thức giao hàng đa dạng, miễn phí giao hàng tận nơi, đảm bảo yêu cầu về chất lượng sản phẩm. Các sản phẩm đa dạng từ thương hiệu, kiểu dáng cho đến màu sắc",
      aboutus: "GIỚI THIỆU VỀ CÔNG TY CỦA CHÚNG TÔI",
      company:
        "Công Ty Văn Phòng Xanh là một trong những doanh nghiệp tiên phong trong việc cung cấp các giải pháp văn phòng hiện đại, tiết kiệm và thân thiện với môi trường tại Việt Nam. Với cam kết đặt khách hàng lên hàng đầu, chúng tôi luôn mang đến các sản phẩm và dịch vụ chất lượng cao, đáp ứng mọi nhu cầu của khách hàng từ cá nhân, doanh nghiệp nhỏ đến các tập đoàn lớn.",
      vision: "Tầm nhìn và Sứ mệnh",
      mission:
        "Tầm Nhìn công ty mang lại là trở thành nhà cung cấp văn phòng phẩm hàng đầu tại Việt Nam, dẫn đầu về sự đổi mới và phát triển bền vững.Sứ Mệnh mà công ty phải gánh vác là cung cấp giải pháp văn phòng toàn diện, giúp tối ưuhóa không gian làm việc và giảm thiểu tác động tiêu cực đến môi trường.",
      product: "Sản phẩm và Dịch vụ",
      services:
        "Văn Phòng Xanh là đơn vị chuyên cung cấp đa dạng các sản phẩm văn phòng hướng đến sự bền vững và bảo vệ môi trường. Các sản phẩm nổi bật bao gồm giấy tái chế, vật liệu văn phòng thân thiện với môi trường, và các thiết bị tiết kiệm năng lượng. Chúng tôi cam kết mang lại giải pháp hiệu quả, vừa đáp ứng nhu cầu công việc hàng ngày, vừa góp phần xây dựng một tương lai xanh và bền vững. Với sự đa dạng về sản phẩm, Văn Phòng Xanh không chỉ giúp doanh nghiệp tối ưu hóa chi phí mà còn nâng cao ý thức bảo vệ môi trường trong cộng đồng.",
      corevalues: "Giá trị cốt lõi",
      corevalue1:
        "Bền vững: Luôn hướng đến việc giảm thiểu rác thải và khuyến khích sử dụng tài nguyên tái chế.",
      corevalue2:
        "Đổi mới: Ứng dụng công nghệ mới để tạo ra giải pháp văn phòng hiện đại và thông minh.",
      corevalue3:
        "Chất lượng: Đảm bảo mọi sản phẩm và dịch vụ đều đáp ứng các tiêu chuẩn cao nhất.",
      corevalue4:
        "Khách hàng là trung tâm: Luôn đặt nhu cầu khách hàng lên hàng đầu trong mọi quyết định và hành động.",
      brand: "Các đối tác thương hiệu của chúng tôi",
      specializing:
        "Chuyên cung cấp văn phòng phẩm chất lượng cao, giá cả hợp lý.",
      lk: "Liên kết hữu ích",
      our: "Về chúng tôi",
      item: "Sản phẩm",
      lock: "Chính sách bảo mật",
      contact: "Liên hệ",
      in4contact: "Thông tin liên hệ",
      "connect-with-us": "Kết nối với chúng tôi",
      copyright: "&copy; 2024 Văn phòng xanh. Tất cả quyền được bảo lưu.",
    },
  };
  // Hàm để thay đổi nội dung văn bản dựa trên ngôn ngữ được chọn
  function changeLanguage(lang) {
    // Duyệt qua tất cả các phần tử có ngôn ngữ được định nghĩa
    langElements.forEach((element) => {
      // Lấy khóa tương ứng với phần tử từ thuộc tính "data-lang"
      const key = element.getAttribute("data-lang");
      // Nếu bản dịch tồn tại trong ngôn ngữ được chọn, cập nhật nội dung
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  // Lắng nghe sự kiện khi người dùng thay đổi lựa chọn ngôn ngữ
  languageSelector.addEventListener("change", function () {
    // Lấy ngôn ngữ được chọn từ giá trị của bộ chọn ngôn ngữ
    const selectedLanguage = languageSelector.value;
    // Gọi hàm thay đổi nội dung theo ngôn ngữ đã chọn
    changeLanguage(selectedLanguage);
  });

  // Khởi tạo trang với ngôn ngữ mặc định (mặc định là tiếng Việt)
  changeLanguage(languageSelector.value);
});

// Hiển thị nút khi cuộn xuống 100px
window.onscroll = function () {
  const backToTop = document.getElementById("back-to-top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Cuộn lên đầu trang khi nhấn nút
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
