(function(window, undefined) {
  var dictionary = {
    "a0131635-5bdf-4983-b50b-8781316d28fb": "Contacto",
    "c95676cf-ac24-429b-82c5-9e3a0970deea": "Resultados",
    "122b5378-f83d-4644-8dd1-16da46a4d575": "Biblioteca",
    "79a92a0f-8b88-4598-817b-811601fe91d0": "online",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "e8175e9f-03e1-4850-b1da-ab7b550d7359": "login",
    "43e4036f-e43a-4022-b56a-3cc9b23d2689": "verLibro",
    "bf533518-1af2-478a-bf51-ccc75f638338": "perfil",
    "91873b74-6e64-499d-ba16-94b1e32edbd9": "bibliotecologo",
    "4b609dbd-a5b4-4e19-ae60-9352cc2a86d8": "estadoLibro",
    "f7f88b8a-176c-4513-81cd-fa9c60f2c6ca": "loginB",
    "b0944c67-34c6-40eb-aabb-a28310401523": "Estante",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "c6c716c7-1186-4ff9-8902-e9f54335788d": "Page template",
    "1ea7ee48-8e53-41e1-bc6f-5e7c27c40a0d": "Footer",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);