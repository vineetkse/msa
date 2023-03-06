import { useState } from "react";
import AlarmMusic from "../../audio/alarmtone_1.mp3";

const useAudio = () => {
  const [musicPlayer] = useState(new Audio(AlarmMusic));

  return musicPlayer;
};

export default useAudio;
