jQuery("#simulation")
  .on("focusin", ".s-a0131635-5bdf-4983-b50b-8781316d28fb .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
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
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_2 input": {
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
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_5 input": {
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
  .on("focusout", ".s-a0131635-5bdf-4983-b50b-8781316d28fb .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_2 input": {
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
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-a0131635-5bdf-4983-b50b-8781316d28fb #s-Input_5 input": {
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
    }
  });