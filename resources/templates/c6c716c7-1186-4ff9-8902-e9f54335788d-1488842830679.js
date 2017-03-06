jQuery("#simulation")
  .on("click", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0944c67-34c6-40eb-aabb-a28310401523"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a0131635-5bdf-4983-b50b-8781316d28fb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c95676cf-ac24-429b-82c5-9e3a0970deea"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c95676cf-ac24-429b-82c5-9e3a0970deea"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c95676cf-ac24-429b-82c5-9e3a0970deea"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c95676cf-ac24-429b-82c5-9e3a0970deea"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c95676cf-ac24-429b-82c5-9e3a0970deea"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Group_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Input_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "17px 17px 17px 17px",
                        "padding-top": "9px",
                        "padding-right": "9px",
                        "padding-bottom": "9px",
                        "padding-left": "14px"
                      },
                      "expressions": {
                        "width": "Math.max(154 - 1 - 1 - 14 - 9, 0) + 'px'",
                        "height": "Math.max(34 - 1 - 1 - 9 - 9, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#t-Input_7",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Group_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Input_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "17px 17px 17px 17px",
                        "padding-top": "9px",
                        "padding-right": "9px",
                        "padding-bottom": "9px",
                        "padding-left": "14px"
                      },
                      "expressions": {
                        "width": "Math.max(154 - 1 - 1 - 14 - 9, 0) + 'px'",
                        "height": "Math.max(34 - 1 - 1 - 9 - 9, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_1": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_1 span": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Input_2 input": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_4": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_4 span": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_6": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_6 span": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_23": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_23 span": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_24") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_24": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_24 span": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_25") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_25": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_25 span": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_26") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_26": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-c6c716c7-1186-4ff9-8902-e9f54335788d #t-Label_26 span": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-c6c716c7-1186-4ff9-8902-e9f54335788d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Input_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_26")) {
      jEvent.undoCases(jFirer);
    }
  });