import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import Dialog from "../../components/dialog/Dialog";
import { fetchPageAll, insertPage } from "../../api/Page";
import Page from "../../components/page/Page";
import useAudio from "../../components/alarmplayer/AlarmPlayer";

const AlarmPage = () => {
  const [pages, setPages] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedPageId, setSelectedPageId] = useState(0);
  const player = useAudio();

  useEffect(() => {
    let mounted = true;

    const fetchPages = async () => {
      let fetchedPages = await fetchPageAll();
      console.log("fetchedPages Yo!", fetchedPages);
      if (mounted) setPages(fetchedPages);
    };

    fetchPages();

    return () => (mounted = false);
  }, []);

  useEffect(() => {
    setTitle("");
    setShowDialog(false);
  }, [pages]);

  useEffect(() => {
    // player.play();
  }, [selectedPageId, player]);

  const handleCreatePage = () => {
    setShowDialog(true);
  };

  const onAcceptButtonClick = () => {
    const newPage = { id: pages.length + 1, name: title, alarms: [] };
    if (title !== "") setPages((prevState) => [...prevState, newPage]);

    insertPage(newPage);
  };

  const onCancelButtonClick = () => {
    setShowDialog(false);
  };

  const onTitleChange = (evt) => {
    const { value } = evt.target;
    setTitle(value);
  };

  const selectPage = (id) => {
    setSelectedPageId(id);
  };

  const extractPageById = (id) => {
    return pages.filter((page) => page.id === id)[0];
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#EAEAEA" }}>
        {pages.map((page) => (
          <Button
            style={{
              background:
                selectedPageId === page.id ? "#bd1c7c" : "rgb(234, 234, 234)",
              color: selectedPageId === page.id ? "#FFFFFF" : "#000000",
            }}
            key={page.id}
            onClick={() => selectPage(page.id)}
          >
            {page.name}
          </Button>
        ))}
        <Button onClick={handleCreatePage}>+</Button>
      </div>
      <Page data={extractPageById(selectedPageId)} />
      <Dialog
        show={showDialog}
        onAcceptButtonClick={onAcceptButtonClick}
        onCancelButtonClick={onCancelButtonClick}
        title={title}
        onTitleChange={onTitleChange}
      />
    </div>
  );
};

export default AlarmPage;
