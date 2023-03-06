import { useEffect, useState } from "react";
import { Button } from "../button";
import AlarmDialog from "../dialog/AlarmDialog";
import NoAlarm from "../noalarm/NoAlarm";
import { updatePageById } from "../../api/Page";

const Page = ({ data }) => {
  const [alarms, setAlarms] = useState([]);
  const [alarmName, setAlarmName] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (data) {
      const dataToBeUpdated = { id: data.id, name: data.name, alarms: alarms };
      updatePageById(dataToBeUpdated);
    }
  }, [alarms, data]);

  useEffect(() => {
    if (data) {
      setAlarms(data.alarms);
    }
  }, [data]);

  const onAcceptButtonClick = () => {
    setAlarms((prevState) => [
      ...prevState,
      { id: alarms.length + 1, name: alarmName },
    ]);

    setShowDialog(false);
  };

  const onCancelButtonClick = () => {
    setShowDialog(false);
  };

  const onAlarmNameChange = (evt) => {
    const { value } = evt.target;
    setAlarmName(value);
  };

  const onDateChange = (evt) => {
    const { value } = evt.target;
    setDate(value);
  };

  const onTimeChange = (evt) => {
    const { value } = evt.target;
    setTime(value);
    console.log(value);
  };

  const enableDialog = () => {
    setShowDialog(true);
  };

  if (!data) return;
  if (data.alarms && data.alarms.length === 0)
    return (
      <NoAlarm>
        <Button
          variant={"outline"}
          color="primary"
          enableElevation={true}
          style={{ position: "fixed", right: 20, top: "90%" }}
          onClick={enableDialog}
        >
          +
        </Button>
        <div>Seems no alarms created. Start creating alarm.</div>
        <AlarmDialog
          show={showDialog}
          onAcceptButtonClick={onAcceptButtonClick}
          onCancelButtonClick={onCancelButtonClick}
          alarmName={alarmName}
          onAlarmNameChange={onAlarmNameChange}
        />
      </NoAlarm>
    );
  console.log(data);
  return (
    <div>
      <Button
        variant={"outline"}
        color="primary"
        enableElevation={true}
        style={{ position: "fixed", right: 20, top: "90%" }}
        onClick={enableDialog}
      >
        +
      </Button>
      <AlarmDialog
        show={showDialog}
        onAcceptButtonClick={onAcceptButtonClick}
        onCancelButtonClick={onCancelButtonClick}
        alarmName={alarmName}
        onAlarmNameChange={onAlarmNameChange}
        onDateChange={onDateChange}
        onTimeChange={onTimeChange}
        time={time}
        date={date}
      />
    </div>
  );
};

export default Page;
