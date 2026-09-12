// Self-contained 60fps Lottie JSON Animation Specs for Keyen Brand (#2563EB)

export const locationLottie = {
  v: "5.7.0",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Request Location Pin",
  ddd: 0,
  assets: [],
  layers: [
    // Bouncing Pin
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Pin",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [100, 85, 0], e: [100, 70, 0] },
            { t: 60, s: [100, 70, 0], e: [100, 85, 0] },
            { t: 120, s: [100, 85, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [110, 110, 100] }
      },
      shapes: [
        {
          ty: "gr",
          nm: "Pin Shape",
          items: [
            {
              ty: "path",
              nm: "Pin Path",
              ks: {
                a: 0,
                k: {
                  c: true,
                  v: [[0, -35], [22, -15], [0, 25], [-22, -15]],
                  i: [[-12, 0], [0, -12], [8, 12], [0, -12]],
                  o: [[12, 0], [0, 15], [-8, -12], [0, -12]]
                }
              }
            },
            {
              ty: "fl",
              nm: "Pin Fill",
              c: { a: 0, k: [0.145, 0.388, 0.921, 1] }, // #2563EB Primary Blue
              o: { a: 0, k: 100 }
            }
          ]
        },
        {
          ty: "gr",
          nm: "Dot Group",
          items: [
            {
              ty: "el",
              nm: "Inner Circle",
              p: { a: 0, k: [0, -15] },
              s: { a: 0, k: [14, 14] }
            },
            {
              ty: "fl",
              nm: "Dot Fill",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ]
    },
    // Ground Pulse
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Pulse Ring",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [80], e: [0] },
            { t: 90, s: [0], e: [80] },
            { t: 120, s: [80] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 140, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [40, 20, 100], e: [140, 70, 100] },
            { t: 90, s: [140, 70, 100], e: [40, 20, 100] },
            { t: 120, s: [40, 20, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "el",
          nm: "Ellipse",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [40, 20] }
        },
        {
          ty: "st",
          nm: "Stroke",
          c: { a: 0, k: [0.145, 0.388, 0.921, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 }
        }
      ]
    }
  ]
};

export const connectLottie = {
  v: "5.7.0",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Connect Match",
  ddd: 0,
  assets: [],
  layers: [
    // Center Badge Pulse
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Badge",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [95, 95, 100], e: [108, 108, 100] },
            { t: 60, s: [108, 108, 100], e: [95, 95, 100] },
            { t: 120, s: [95, 95, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          nm: "Center Node",
          items: [
            {
              ty: "el",
              nm: "Center Circle",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [44, 44] }
            },
            {
              ty: "fl",
              nm: "White Fill",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        },
        {
          ty: "gr",
          nm: "Inner Dot",
          items: [
            {
              ty: "el",
              nm: "Inner Dot Circle",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [20, 20] }
            },
            {
              ty: "fl",
              nm: "Blue Fill",
              c: { a: 0, k: [0.145, 0.388, 0.921, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ]
    },
    // Pulsing Waves
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Wave",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [90], e: [0] },
            { t: 80, s: [0], e: [90] },
            { t: 120, s: [90] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [50, 50, 100], e: [130, 130, 100] },
            { t: 80, s: [130, 130, 100], e: [50, 50, 100] },
            { t: 120, s: [50, 50, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "el",
          nm: "Radar Ring",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [60, 60] }
        },
        {
          ty: "st",
          nm: "White Stroke",
          c: { a: 0, k: [1, 1, 1, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 }
        }
      ]
    }
  ]
};

export const carLottie = {
  v: "5.7.0",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Move Car",
  ddd: 0,
  assets: [],
  layers: [
    // Car Body
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Car Body",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [100, 95, 0], e: [100, 92, 0] },
            { t: 30, s: [100, 92, 0], e: [100, 96, 0] },
            { t: 60, s: [100, 96, 0], e: [100, 92, 0] },
            { t: 90, s: [100, 92, 0], e: [100, 95, 0] },
            { t: 120, s: [100, 95, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [110, 110, 100] }
      },
      shapes: [
        {
          ty: "gr",
          nm: "Car Silhouette",
          items: [
            {
              ty: "path",
              nm: "Roof & Hood",
              ks: {
                a: 0,
                k: {
                  c: true,
                  v: [[-35, 10], [-25, -10], [0, -18], [22, -10], [35, 10]],
                  i: [[0, 0], [-5, 0], [-10, 0], [5, 0], [0, 0]],
                  o: [[5, -8], [8, -5], [10, 0], [5, 8], [0, 0]]
                }
              }
            },
            {
              ty: "fl",
              nm: "Primary Blue Fill",
              c: { a: 0, k: [0.145, 0.388, 0.921, 1] }, // #2563EB
              o: { a: 0, k: 100 }
            }
          ]
        }
      ]
    },
    // Wheels Rotating
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Wheel Left",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 120, s: [360] }
          ]
        },
        p: { a: 0, k: [76, 112, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          nm: "Wheel Outer",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [18, 18] }
        },
        {
          ty: "fl",
          nm: "Wheel Dark Fill",
          c: { a: 0, k: [0.1, 0.15, 0.25, 1] },
          o: { a: 0, k: 100 }
        }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Wheel Right",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 120, s: [360] }
          ]
        },
        p: { a: 0, k: [124, 112, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          nm: "Wheel Outer",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [18, 18] }
        },
        {
          ty: "fl",
          nm: "Wheel Dark Fill",
          c: { a: 0, k: [0.1, 0.15, 0.25, 1] },
          o: { a: 0, k: 100 }
        }
      ]
    }
  ]
};
