import React, { useEffect, useState } from "react";
import { GetLinkInfo } from "../utils/service";
import { AzureMP } from "react-azure-mp";

const App = () => {
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
        <div>
          <h1>LiveStream unavailable.</h1>
        </div>
      )}
    </div>
  );
};

export default App;
