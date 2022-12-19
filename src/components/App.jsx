import React, { useEffect, useState } from "react";
import { GetLinkInfo } from "../utils/service";
import { AzureMP } from "react-azure-mp";

const textStyles = {
  fontSize: "22px",
};

const imageStyles = {
  maxWidth: "500px",
  width: "100%",
};

const App = () => {
  const imageLink = "https://www.bipul.in/images/not-live.svg";
  let linkId = window.location.hash.substring(1);
  const [srcData, setSrcData] = useState("");
  useEffect(() => {
    if (!linkId) {
      linkId = "default";
    }
    GetLinkInfo(linkId)
      .then((response) => {
        if (response) {
          const sourceData = [
            {
              src: response.value[0].Value,
              type: "application/vnd.ms-sstr+xml",
            },
          ];
          setSrcData(sourceData);
        }
      })
      .catch((error) => {
        console.log("Destination does not exist! 😶");
      });
  }, []);

  return (
    <div>
      {srcData ? (
        <AzureMP skin="amp-flush" src={srcData} />
      ) : (
        <div style={textStyles}>
          <div>LiveStreaming unavailable.</div>
          <br/><br/>
          <div>
            <img src={imageLink} style={imageStyles} alt="LiveStreaming unavailable."></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
