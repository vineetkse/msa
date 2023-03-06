import { Button } from "../button";

const AlarmDialog = ({
  show = false,
  onAcceptButtonClick,
  onCancelButtonClick,
  onAlarmNameChange,
  alarmName,
  date,
  time,
  onDateChange,
  onTimeChange,
}) => {
  const display = show ? "flex" : "none";

  return (
    <div
      style={{
        display: display,
        flexDirection: "column",
        width: 300,
        height: 200,
        position: "fixed",
        top: "40%",
        left: "40%",
        background: "#e6e6e6",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        boxShadow: "0px 1px 20px 1px #959191",
      }}
    >
      <div>Create Alarm Page</div>
      <input
        style={{
          borderRadius: 5,
          border: "none",
          padding: 5,
          outline: "none",
          marginTop: 50,
          fontSize: 18,
          color: "#c75165",
          fontWeight: 900,
          width: 250,
        }}
        placeholder="Name"
        onChange={onAlarmNameChange}
        value={alarmName}
      />
      <div style={{ marginTop: 10 }}>
        <input
          type="date"
          style={{
            border: "none",
            padding: 5,
            fontSize: 17,
            fontWeight: 100,
            outline: "none",
            background: "#0070F3",
            color: "white",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
          onChange={onDateChange}
          value={date}
        />
        <input
          type="time"
          style={{
            border: "none",
            padding: 5,
            fontSize: 18,
            fontWeight: 100,
            outline: "none",

            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
          onChange={onTimeChange}
          onBlur={onTimeChange}
          value={time}
        />
      </div>
      <div style={{ marginTop: "auto", display: "flex" }}>
        <Button
          variant={"solid"}
          color="primary"
          size="medium"
          onClick={onAcceptButtonClick}
          style={{ marginRight: 10 }}
        >
          Create Page
        </Button>
        <Button
          variant={"solid"}
          color="secondary"
          size="medium"
          onClick={onCancelButtonClick}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AlarmDialog;
