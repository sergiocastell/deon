function ShopifyBuyInit(collectionId, node) {
  node = node || document.querySelector('[role=shopify-embed]')

  if(!ShopifyBuyInit.client) {
    ShopifyBuyInit.client = ShopifyBuy.buildClient({
      domain: 'monstercat.myshopify.com',
      apiKey: '89982ed52f5364dd1f1da4fa02d9b2c8',
      appId: '6',
    });
  }

  ShopifyBuy.UI.onReady(ShopifyBuyInit.client).then(function (ui) {
    ui.createComponent('collection', {
      id: collectionId,
      node: node,
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: {
        "product": {
          "variantId": "all",
          "contents": {
            "variantTitle": false,
            "description": false,
            "buttonWithQuantity": false,
            "quantity": false
          },
          "text": {
            "button": "Add to Cart"
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              }
            },
            "button": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px",
              "background-color": "dodgerblue",
              "border-radius": "0px",
              "font-weight": "bold",
              "letter-spacing": "2px",
              ":hover": {
                "background-color": '#000'
              },
              ":focus": {
                "background-color": '#000'
              }
            },
            "title": {
              "font-size": "14px"
            }
          }
        },
        "cart": {
          "contents": {
            "button": true
          },
          "styles": {
            "footer": {
              "background-color": "#ffffff"
            },
            "button": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px",
              "background-color": "dodgerblue",
              "border-radius": "0px",
              "font-weight": "bold",
              "letter-spacing": "2px",
              ":hover": {
                "background-color": '#000'
              },
              ":focus": {
                "background-color": '#000'
              }
            },
            "title": {
              "font-size": "14px"
            }
          }
        },
        "modalProduct": {
          "contents": {
            "variantTitle": false,
            "buttonWithQuantity": true,
            "button": false,
            "quantity": false
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            }
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "dodgerblue",
              "border-radius": "0px",
              ":hover": {
                "background-color": '#000'
              },
              ":focus": {
                "background-color": '#000'
              }
            }
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        }
      }
    })
  })
}
