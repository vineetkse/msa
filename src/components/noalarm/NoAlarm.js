import styled from "@emotion/styled";
import NoAlarmImage from "../../images/time.png";

const NoAlarm = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${NoAlarmImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

export default NoAlarm;
