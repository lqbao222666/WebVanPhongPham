document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("languageSelector");
  const langElements = document.querySelectorAll("[data-lang]");

  const translations = {
    en: {
      // Đăng ký
      registerTitle: "Register",
      fullNameLabel: "Full Name:",
      emailLabel: "Email:",
      passwordLabel: "Password:",
      confirmPasswordLabel: "Confirm Password:",
      registerButton: "Register",
      haveAccount: "Already have an account? Login",
      // Đăng nhập
      loginTitle: "Login",
      loginButton: "Login",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account? Sign up",
      // Header
      menuCategory: "Product Categories",
      menuSignup: "Sign Up",
      menuLogin: "Login",
      // Footer
      specializing:
        "Specializing in providing high-quality office supplies at reasonable prices.",
      usefulLinks: "Useful Links",
      aboutUs: "About Us",
      products: "Products",
      privacyPolicy: "Privacy Policy",
      contactUs: "Contact Us",
      contactInfo: "Contact Information",
      email: "Email: contact@greenoffice.com",
      hotline: "Hotline: 0987 654 321",
      connectWithUs: "Connect with us",
      copyright: "© 2024 Green Office. All rights reserved.",
    },
    vi: {
      // Đăng ký
      registerTitle: "Đăng Ký",
      fullNameLabel: "Họ và tên:",
      emailLabel: "Email:",
      passwordLabel: "Mật khẩu:",
      confirmPasswordLabel: "Xác nhận mật khẩu:",
      registerButton: "Đăng ký",
      haveAccount: "Đã có tài khoản? Đăng nhập",
      // Đăng nhập
      loginTitle: "Đăng Nhập",
      loginButton: "Đăng nhập",
      forgotPassword: "Quên mật khẩu?",
      noAccount: "Chưa có tài khoản? Đăng ký",
      // Header
      menuCategory: "Danh Mục Sản Phẩm",
      menuSignup: "Đăng Ký",
      menuLogin: "Đăng Nhập",
      // Footer
      specializing:
        "Chuyên cung cấp văn phòng phẩm chất lượng cao, giá cả hợp lý.",
      usefulLinks: "Liên kết hữu ích",
      aboutUs: "Về chúng tôi",
      products: "Sản phẩm",
      privacyPolicy: "Chính sách bảo mật",
      contactUs: "Liên hệ",
      contactInfo: "Thông tin liên hệ",
      email: "Email: lienhe@vanphongxanh.com",
      hotline: "Hotline: 0987 654 321",
      connectWithUs: "Kết nối với chúng tôi",
      copyright: "© 2024 Văn phòng xanh. Tất cả quyền được bảo lưu.",
    },
  };

  function changeLanguage(lang) {
    langElements.forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  languageSelector.addEventListener("change", function () {
    const selectedLanguage = languageSelector.value;
    changeLanguage(selectedLanguage);
  });

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
