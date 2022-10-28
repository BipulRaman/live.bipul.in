export async function GetLinkInfo(linkId) {
  if (linkId) {
    const apiEndpoint =
      "https://bipulappstorage.table.core.windows.net/Live?sv=2019-02-02&si=ReadOnly&sig=avQZtndJEXp1Ll8fKHDvwShhp3gVTbAldrrvT%2BP5EO4%3D&tn=Live";

    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json;odata=nometadata",
      },
    };

    return fetch(
      apiEndpoint + "&$filter=RowKey%20eq%20'" + linkId + "'",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  else{
    return null;
  }
}
