import React from "react";
import classes from "./style.components/menu.module.scss"
import Link from "next/link";

const Header = () => {
    return(
        <div className={classes["Header"]}>
            <div className={classes["Header__Menu"]}>
            <a className={classes["Header__Menu__Main__wrap"]}><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/hub.png" alt="hub"/></a>
               <div className={classes["Header__Menu__Main"]}>
               
                <Link href="/" className={classes["Header__Menu__Main__wrap"]}>Главная</Link>
                <Link href="/projects" className={classes["Header__Menu__Main__wrap"]}>Проекты</Link>
                <Link href="/studentProjects" className={classes["Header__Menu__Main__wrap"]}>Мои проекты</Link>
                <Link  href="/createProject" className={classes["Header__Menu__Main__wrap"]}>Создать проект</Link>
               </div>

               <div className={classes["Header__Menu__Main__input"]}>
                    <input className={classes["Header__Menu__Main__input-search"]} placeholder="Найти проект"></input>
               </div>

               <div className={classes["Header__Menu__Main__block"]}>
               <Link href="/bell" className={classes["Header__Menu__Main__icons"]}><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/appointment-reminders--v1.png" alt="appointment-reminders--v1"/></Link>
               <Link href="/account" className={classes["eader__Menu__Main__icons"]}><img width="30" height="30" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/></Link>
               </div>

              
            </div>
        </div>
    )
}

export default Header;