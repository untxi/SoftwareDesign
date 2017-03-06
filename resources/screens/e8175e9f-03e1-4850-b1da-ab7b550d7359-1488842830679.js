jQuery("#simulation")
  .on("click", ".s-e8175e9f-03e1-4850-b1da-ab7b550d7359 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_3")) {
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
    } else if(jFirer.is("#s-Image_6")) {
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
    } else if(jFirer.is("#s-Text_4")) {
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
    } else if(jFirer.is("#s-Button_2")) {
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
    } else if(jFirer.is("#s-Image_5")) {
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
    } else if(jFirer.is("#s-Text_1")) {
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-e8175e9f-03e1-4850-b1da-ab7b550d7359 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_3 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_4 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_5 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_6 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_8",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_8 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_1 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_2 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
  .on("focusout", ".s-e8175e9f-03e1-4850-b1da-ab7b550d7359 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_3 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": "Name"
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_4 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": "Email address"
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
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_5 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": "Email address"
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
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_6 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": "Name"
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_8 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_8",
                    "value": "Email address"
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_1 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
                    "value": "Name"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-e8175e9f-03e1-4850-b1da-ab7b550d7359 #s-Input_2 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": "Email address"
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
  });