import React, { useState } from "react";
import styles from "./App.module.scss";
import { GetLinkInfo } from "../utils/service";

const App = () => {
  const linkId = window.location.hash.substring(1);
  const [link, setLink] = useState("");
  GetLinkInfo(linkId)
    .then((response) => {
      setLink(response.value[0].Value);
    })
    .catch((error) => {
      setDisplayText("Destination does not exist! 😶");
    });

  return (
    <>
      {link ? (
        <video
          id="vid1"
          class="azuremediaplayer amp-default-skin"
          autoplay
          controls
          width="100%"
          poster="poster.jpg"
          data-setup='{"nativeControlsForTouch": false}'
        >
          <source src={link} type="application/vnd.ms-sstr+xml" />
          <p class="amp-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that supports HTML5 video
          </p>
        </video>
      ) : (
        <div>
          <h1>LiveStream unavailable.</h1>
        </div>
      )}
    </>
  );
};

export default App;
