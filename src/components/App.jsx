import React, { useEffect, useState } from "react";
import { GetLinkInfo } from "../utils/service";
import { AzureMP } from "react-azure-mp";

const appStyle = {
  fontFamily: "Consolas",
};

const App = () => {
  const linkId = window.location.hash.substring(1);
  const [srcData, setSrcData] = useState("");
  const videoOptions = {
    controls: true,
    autoplay: true,
    image: "https://cdn.bipul.in/bipul.in/images/meta.png",
  };
  useEffect(() => {
    GetLinkInfo(linkId)
      .then((response) => {
        const sourceData = [
          {
            src: response.value[0].Value,
            type: "application/vnd.ms-sstr+xml",
          },
        ];
        setSrcData(sourceData);
      })
      .catch((error) => {
        console.log("Destination does not exist! 😶");
      });
  }, []);

  return (
    <div style={appStyle}>
      {srcData ? (
        <AzureMP
          skin="amp-flush"
          src={srcData}
          options={videoOptions}
        />
      ) : (
        <div>
          <h1>LiveStream unavailable.</h1>
        </div>
      )}
    </div>
  );
};

export default App;
