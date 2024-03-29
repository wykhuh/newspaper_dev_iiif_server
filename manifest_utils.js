const textCoordintes = require("./data/text_coordinates.json");
const pdf = require("./data/pdf.json");

function formatAnnotationPage(annotations, url) {
  return {
    "@context": "http://iiif.io/api/presentation/3/context.json",
    id: url,
    type: "AnnotationPage",
    label: { none: ["Clippings"] },
    items: annotations,
  };
}

function appendImage(annotation) {
  if (Array.isArray(annotation.body)) {
    annotation.body = [
      {
        value:
          "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-p1/full/150,/0/default.jpg",
        type: "Image",
        format: "image/jpeg",
      },
    ].concat(annotation.body);
  } else if (annotation.body) {
    annotation.body = [
      {
        value:
          "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-p1/full/150,/0/default.jpg",
        type: "Image",
        format: "image/jpeg",
      },
      annotation.body,
    ];
  } else {
    annotation.body = [
      {
        value:
          "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-p1/full/150,/0/default.jpg",
        type: "Image",
        format: "image/jpeg",
      },
    ];
  }
  return annotation;
}

function makeCollectionsManifest(base_url, url) {
  return {
    "@context": ["http://iiif.io/api/presentation/3/context.json"],
    id: url,
    type: "Collection",
    label: {
      de: ["Berliner Tageblatt"],
    },
    items: [
      {
        id: `${base_url}/api/newspaper/issue_1`,
        type: "Manifest",
        label: {
          de: ["1. Berliner Tageblatt - 1925-02-16"],
        },
      },
      {
        id: `${base_url}/api/newspaper/issue_2`,
        type: "Manifest",
        label: {
          de: ["2. Berliner Tageblatt - 1925-03-13"],
        },
      },
    ],
  };
}

function makeIssue1Manifest(base_url, url) {
  return {
    "@context": ["http://iiif.io/api/presentation/3/context.json"],
    id: url,
    type: "Manifest",
    label: {
      de: ["1. Berliner Tageblatt - 1925-02-16"],
    },
    thumbnail: [
      {
        id: "https://api.europeana.eu/api/v2/thumbnail-by-url.json?uri=https%3A%2F%2Fiiif.europeana.eu%2Fimage%2F2YMIN6YXMQ6COVM5AO2XKB5KMCKPMT2YKEKNMAGHVRBIHOOY4AVA%2Fpresentation_images%2F9340afd0-ffe2-11e5-b68d-fa163e60dd72%2Fnode-2%2Fimage%2FSBB%2FBerliner_Tageblatt%2F1925%2F02%2F16%2F0%2FF_SBB_00001_19250216_054_079_0_001%2Ffull%2Ffull%2F0%2Fdefault.jpg&type=TEXT",
        type: "Image",
        format: "image/jpeg",
        height: 300,
        width: 300,
      },
    ],
    partOf: [
      {
        id: `${base_url}/api/newspaper/collection`,
        type: "Collection",
        label: {
          de: ["Berliner Tageblatt"],
        },
      },
    ],
    items: [
      {
        id: `${base_url}/api/newpaper/canvas/i1p1`,
        type: "Canvas",
        height: 5000,
        width: 3602,
        label: {
          none: ["p. 1"],
        },
        items: [
          {
            id: `${base_url}/api/newpaper/items/AnnotationPage/i1p1`,
            type: "AnnotationPage",
            items: [
              {
                id: `${url}/api/newpaper/items/Annotation/i1p1a1`,
                type: "Annotation",
                motivation: "painting",
                body: {
                  id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-p1/full/max/0/default.jpg",
                  type: "Image",
                  format: "image/jpeg",
                  service: [
                    {
                      id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-p1",
                      type: "ImageService3",
                      profile: "level1",
                    },
                  ],
                },
                target: `${base_url}/api/newpaper/canvas/i1p1`,
              },
            ],
          },
        ],
        annotations: [
          // {
          //   id: `${base_url}/api/newpaper/annotations/AnnotationPage/i1p1ap1`,
          //   type: "AnnotationPage",
          //   items: [
          //     {
          //       id: `${base_url}/api/newpaper/annotations/Annotation/i1p1ap1a1`,
          //       type: "Annotation",
          //       motivation: "commenting",
          //       body: {
          //         type: "TextualBody",
          //         format: "text/plain",
          //         language: "en",
          //         value: "This is issue 1, page 1",
          //       },
          //       target: `${base_url}/api/newpaper/canvas/i1p1#xywh=1300,400,200,400`,
          //     },
          //   ],
          // },
          // {
          //   id: `${base_url}/api/annotations/1`,
          //   type: "AnnotationPage",
          // },
        ],
      },
      {
        id: `${base_url}/api/newpaper/canvas/i1p2`,
        type: "Canvas",
        height: 4999,
        width: 3536,
        label: {
          none: ["p. 2"],
        },
        items: [
          {
            id: `${base_url}/api/newpaper/items/AnnotationPage/i1p2`,
            type: "AnnotationPage",
            items: [
              {
                id: `${url}/api/newpaper/items/Annotation/i1p2`,
                type: "Annotation",
                motivation: "painting",
                body: {
                  id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-p2/full/max/0/default.jpg",
                  type: "Image",
                  format: "image/jpeg",
                  service: [
                    {
                      id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-p2",
                      type: "ImageService3",
                      profile: "level1",
                    },
                  ],
                },
                target: `${base_url}/api/newpaper/canvas/i1p2`,
              },
            ],
          },
        ],
        annotations: [
          // {
          //   id: `${base_url}/api/annotations/1`,
          //   type: "AnnotationPage",
          // },
        ],
      },
    ],
    service: [
      {
        id: `${base_url}/api/newspaper_search/1`,
        type: "SearchService2",
      },
    ],
  };
}

function makeIssue2Manifest(base_url, url) {
  return {
    "@context": ["http://iiif.io/api/presentation/3/context.json"],
    id: url,
    type: "Manifest",
    label: {
      de: ["1. Berliner Tageblatt - 1925-02-16"],
    },
    thumbnail: [
      {
        id: "https://api.europeana.eu/api/v2/thumbnail-by-url.json?uri=https%3A%2F%2Fiiif.europeana.eu%2Fimage%2F3UU6R3RRZZGU2VNISCQX7N474GR7X4VMGYBTIWV2SNCBRGSR2WAA%2Fpresentation_images%2Fea1ba210-ffd3-11e5-b68d-fa163e60dd72%2Fnode-2%2Fimage%2FSBB%2FBerliner_Tageblatt%2F1925%2F03%2F13%2F0%2FF_SBB_00001_19250313_054_123_0_001%2Ffull%2Ffull%2F0%2Fdefault.jpg&type=TEXT",
        type: "Image",
        format: "image/jpeg",
        height: 300,
        width: 300,
      },
    ],
    partOf: [
      {
        id: `${base_url}/api/newspaper/collection`,
        type: "Collection",
        label: {
          de: ["Berliner Tageblatt"],
        },
      },
    ],
    items: [
      {
        id: `${base_url}/api/newpaper/canvas/i2p1`,
        type: "Canvas",
        height: 5000,
        width: 3517,
        label: {
          none: ["p. 1"],
        },
        items: [
          {
            id: `${base_url}/api/newpaper/items/AnnotationPage/i2p1`,
            type: "AnnotationPage",
            items: [
              {
                id: `${url}/api/newpaper/items/Annotation/i2p1a1`,
                type: "Annotation",
                motivation: "painting",
                body: {
                  format: "image/jpeg",
                  id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-issue2-p1/full/max/0/default.jpg",
                  service: [
                    {
                      id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-issue2-p1/",
                      profile: "level1",
                      type: "ImageService3",
                    },
                  ],
                  type: "Image",
                },
                target: `${base_url}/api/newpaper/canvas/i2p1`,
              },
            ],
          },
        ],
        annotations: [
          {
            id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p1ap1`,
            items: [
              {
                body: {
                  format: "text/plain",
                  language: "de",
                  type: "TextualBody",
                  value: "Berliner",
                },
                id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p1ap1a1`,
                motivation: "highlighting",
                target: `${base_url}/api/newpaper/canvas/i2p1#xywh=184,558,1052,322`,
                type: "Annotation",
              },
              {
                body: {
                  format: "text/plain",
                  language: "de",
                  type: "TextualBody",
                  value: "Berliner",
                },
                id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p1ap2`,
                motivation: "highlighting",
                target: `${base_url}/api/newpaper/canvas/i2p1#xywh=2123,1645,117,27`,
                type: "Annotation",
              },
              {
                body: {
                  format: "text/plain",
                  language: "de",
                  type: "TextualBody",
                  value: "Berliner",
                },
                id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p1ap3`,
                motivation: "highlighting",
                target: `${base_url}/api/newpaper/canvas/i2p1#xywh=2399,2207,170,40`,
                type: "Annotation",
              },
            ],
            label: {
              en: ["Search results"],
            },
            type: "AnnotationPage",
          },
          {
            id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p1ap2`,
            type: "AnnotationPage",
            items: [
              {
                id: `${base_url}/api/newpaper/annotations/Annotation/i2p1ap2a1`,
                type: "Annotation",
                motivation: "commenting",
                body: {
                  type: "TextualBody",
                  format: "text/plain",
                  language: "en",
                  value: "This is issue 2, page 1",
                },
                target: `${base_url}/api/newpaper/canvas/i2p1#xywh=1300,560,200,350`,
              },
            ],
          },
          // {
          //   id: `${base_url}/api/annotations/2`,
          //   type: "AnnotationPage",
          // },
        ],
      },
      {
        id: `${base_url}/api/newpaper/canvas/i2p2`,
        type: "Canvas",
        height: 5000,
        width: 3502,
        label: {
          none: ["p. 2"],
        },
        items: [
          {
            id: `${base_url}/api/newpaper/items/AnnotationPage/i2p2`,
            type: "AnnotationPage",
            items: [
              {
                id: `${url}/api/newpaper/items/Annotation/i2p2`,
                type: "Annotation",
                motivation: "painting",
                body: {
                  format: "image/jpeg",
                  id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-issue2-p2/full/max/0/default.jpg",
                  service: [
                    {
                      id: "https://iiif.io/api/image/3.0/example/reference/4ce82cef49fb16798f4c2440307c3d6f-newspaper-issue2-p2",
                      profile: "level1",
                      type: "ImageService3",
                    },
                  ],
                  type: "Image",
                },
                target: `${base_url}/api/newpaper/canvas/i2p2`,
              },
            ],
          },
        ],
        annotations: [
          {
            id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p2ap1`,
            items: [
              {
                body: {
                  format: "text/plain",
                  language: "de",
                  type: "TextualBody",
                  value: "Berliner",
                },
                id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p2ap1a1`,
                label: {
                  en: ["Search results"],
                },
                motivation: "highlighting",
                target: `${base_url}/api/newpaper/canvas/i2p2#xywh=1134,768,106,25`,
                type: "Annotation",
              },
              {
                body: {
                  format: "text/plain",
                  language: "de",
                  type: "TextualBody",
                  value: "Berliner",
                },
                id: `${base_url}/api/newpaper/annotations/AnnotationPage/i2p2ap1a2`,
                label: {
                  en: ["Search results"],
                },
                motivation: "highlighting",
                target: `${base_url}/api/newpaper/canvas/i2p2#xywh=3301,4156,96,22`,
                type: "Annotation",
              },
            ],
            type: "AnnotationPage",
            label: {
              en: ["Search results"],
            },
          },
          // {
          //   id: `${base_url}/api/annotations/2`,
          //   type: "AnnotationPage",
          // },
        ],
      },
    ],
  };
}

function makeContentSearchManifest(id, searchTerm, base_url, url) {
  const manifest = {
    "@context": "http://iiif.io/api/search/2/context.json",
    id: url,
    type: "AnnotationPage",
    items: [],
  };

  textCoordintes.forEach((page) => {
    if (page.issue !== Number(id)) {
      return;
    }

    const matches = page.strings[searchTerm];
    if (matches) {
      matches.forEach((match) => {
        const [stringId, x, y, w, h] = match;
        if (manifest.items) {
          manifest.items.push({
            id: `${base_url}/api/newspaper/annotation/${stringId}`,
            type: "Annotation",
            motivation: "highlighting",
            body: {
              type: "TextualBody",
              value: searchTerm,
              format: "text/plain",
            },
            label: {
              none: [`p. ${page.page}`],
            },
            target: `${base_url}/api/newpaper/canvas/i${id}p${page.page}#xywh=${x},${y},${w},${h}`,
          });
        }
      });
    }
  });
  return manifest;
}

function makePdfManifest(base_url, url) {
  return pdf;
}

module.exports = {
  formatAnnotationPage,
  appendImage,
  makeCollectionsManifest,
  makeIssue1Manifest,
  makeIssue2Manifest,
  makeContentSearchManifest,
  makePdfManifest,
};
