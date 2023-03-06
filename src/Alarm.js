import styles from "./Alarm.module.css";
import { Button } from "./components/button";
import AlarmPage from "./pages/alarm/AlarmPage";

function Alarm() {
  return (
    <div className={styles.alarm_app}>
      <AlarmPage />
    </div>
  );
}

export default Alarm;
