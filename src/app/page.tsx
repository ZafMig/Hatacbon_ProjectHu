import classes from "./main.module.scss"
import Header from "../../Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={classes["Main"]}>
        <div className={classes["Main__Blocks"]}>
          <div className={classes["Main__Blocks-info"]}>
            <h1 className={classes["Main__Blocks-project"]}>Присоединяйтесь к новым проектам!</h1>

            <div className={classes["Main__Blocks-projects"]}>
            <h1 className={classes["Main__Blocks-project"]}>Новых проектов еще нет</h1>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}