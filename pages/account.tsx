import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../Context/AuthContext"; // Путь к вашему контексту авторизации
import Header from "../Components/Header";
import classes from "./style.pages/account.module.scss";

const Account = () => {
  const router = useRouter();
  const { user, getUser } = useAuth(); // метод getUser для получения пользователя

  useEffect(() => {
    const checkAccount = async () => {
      try {
        const userData = await getUser();
        if (!userData) {
         
        }
      } catch (error) {
        console.error("Ошибка при проверке аккаунта:", error);
      }
    };

    checkAccount();
  }, [router, getUser]);

  // Мокап для URL портфолио и файла
  const portfolioUrl = "https://example.com/portfolio";
  const portfolioFileUrl = "https://example.com/portfolio/download";

  const handleViewPortfolio = () => {
    // Логика для просмотра портфолио
    window.open(portfolioUrl, "_blank");
  };

  const handleDownloadPortfolio = () => {
    // Логика для скачивания портфолио
    const a = document.createElement("a");
    a.href = portfolioFileUrl;
    a.download = "portfolio.pdf"; // Имя файла для скачивания
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <Header />

      <div className={classes["Main"]}>
        <div className={classes["Main__Account"]}>
          <div className={classes["Main__Account-block"]}>
            <h1 className={classes["Main__Account-block__text"]}>Портфолио</h1>
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
              alt="user-male-circle--v1"
            />
            <div className={classes["Main__Account-block__buttons"]}>
              <button onClick={handleViewPortfolio}>
                Просмотреть портфолио
              </button>
              <button onClick={handleDownloadPortfolio}>
                Скачать портфолио
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;