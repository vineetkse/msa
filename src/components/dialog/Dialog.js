import { Button } from "../button";

const Dialog = ({
  show = false,
  onAcceptButtonClick,
  onCancelButtonClick,
  onTitleChange,
  title,
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
          padding: 6,
          outline: "none",
          marginTop: 50,
          fontSize: 18,
          color: "#c75165",
          fontWeight: 900,
        }}
        placeholder="Page Title"
        onChange={onTitleChange}
        value={title}
      />
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

export default Dialog;
