import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '543'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fc4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '131'),
            routes: [
              {
                path: '/docs/category/code',
                component: ComponentCreator('/docs/category/code', 'ad2'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/category/code-1',
                component: ComponentCreator('/docs/category/code-1', '341'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/category/race-quads',
                component: ComponentCreator('/docs/category/race-quads', '8d7'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/category/rc-airplanes',
                component: ComponentCreator('/docs/category/rc-airplanes', '96b'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/category/robots',
                component: ComponentCreator('/docs/category/robots', '566'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/category/robots-1',
                component: ComponentCreator('/docs/category/robots-1', 'a5f'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/projects',
                component: ComponentCreator('/docs/projects', '55c'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/code/barber-scheduler',
                component: ComponentCreator('/docs/projects/code/barber-scheduler', '145'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/code/website',
                component: ComponentCreator('/docs/projects/code/website', '2ae'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/race-quads/diatone',
                component: ComponentCreator('/docs/projects/race-quads/diatone', 'f64'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/race-quads/ft-210',
                component: ComponentCreator('/docs/projects/race-quads/ft-210', '753'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/race-quads/qav-r',
                component: ComponentCreator('/docs/projects/race-quads/qav-r', 'e54'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/race-quads/qav-ulx',
                component: ComponentCreator('/docs/projects/race-quads/qav-ulx', '060'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/race-quads/rotor-riot-cl1',
                component: ComponentCreator('/docs/projects/race-quads/rotor-riot-cl1', 'db6'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/race-quads/versacopter',
                component: ComponentCreator('/docs/projects/race-quads/versacopter', 'c91'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/arrow',
                component: ComponentCreator('/docs/projects/rc-airplanes/arrow', '9f8'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/dr-1',
                component: ComponentCreator('/docs/projects/rc-airplanes/dr-1', '89c'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/f22',
                component: ComponentCreator('/docs/projects/rc-airplanes/f22', 'c30'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/flyer',
                component: ComponentCreator('/docs/projects/rc-airplanes/flyer', 'b62'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/ft-explorer',
                component: ComponentCreator('/docs/projects/rc-airplanes/ft-explorer', 'c85'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/goblin',
                component: ComponentCreator('/docs/projects/rc-airplanes/goblin', '683'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/guinea-pig',
                component: ComponentCreator('/docs/projects/rc-airplanes/guinea-pig', '91d'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/lockheed-vega',
                component: ComponentCreator('/docs/projects/rc-airplanes/lockheed-vega', 'ed6'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/nutball',
                component: ComponentCreator('/docs/projects/rc-airplanes/nutball', '0d9'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/p-51',
                component: ComponentCreator('/docs/projects/rc-airplanes/p-51', 'aad'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/scout',
                component: ComponentCreator('/docs/projects/rc-airplanes/scout', '8fc'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/se5',
                component: ComponentCreator('/docs/projects/rc-airplanes/se5', 'c74'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/sportster',
                component: ComponentCreator('/docs/projects/rc-airplanes/sportster', '147'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/rc-airplanes/trainer',
                component: ComponentCreator('/docs/projects/rc-airplanes/trainer', '596'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/robots/bipedal-robot',
                component: ComponentCreator('/docs/projects/robots/bipedal-robot', 'fb7'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/robots/ft-explorer-vtol',
                component: ComponentCreator('/docs/projects/robots/ft-explorer-vtol', '876'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/robots/mavrospy',
                component: ComponentCreator('/docs/projects/robots/mavrospy', 'ae2'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/robots/reading-eye',
                component: ComponentCreator('/docs/projects/robots/reading-eye', '98f'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/robots/recycle-sorting-robot',
                component: ComponentCreator('/docs/projects/robots/recycle-sorting-robot', '392'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/robots/sar-drone',
                component: ComponentCreator('/docs/projects/robots/sar-drone', '8c8'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/robots/vacuum-robot',
                component: ComponentCreator('/docs/projects/robots/vacuum-robot', '8e7'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/tutorials',
                component: ComponentCreator('/docs/tutorials', '84d'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/code/barber-scheduler',
                component: ComponentCreator('/docs/tutorials/code/barber-scheduler', '783'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/ft-explorer-vtol',
                component: ComponentCreator('/docs/tutorials/robots/ft-explorer-vtol', '701'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/mavrospy/mocap',
                component: ComponentCreator('/docs/tutorials/robots/mavrospy/mocap', 'f0e'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/mavrospy/outdoor',
                component: ComponentCreator('/docs/tutorials/robots/mavrospy/outdoor', '9c8'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/mavrospy/setup',
                component: ComponentCreator('/docs/tutorials/robots/mavrospy/setup', '7e2'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/mavrospy/sim',
                component: ComponentCreator('/docs/tutorials/robots/mavrospy/sim', '719'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/reading-eye',
                component: ComponentCreator('/docs/tutorials/robots/reading-eye', '662'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/recycle-sorting-robot',
                component: ComponentCreator('/docs/tutorials/robots/recycle-sorting-robot', '953'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/tutorials/robots/sar-drone',
                component: ComponentCreator('/docs/tutorials/robots/sar-drone', '7de'),
                exact: true,
                sidebar: "tutorialsSidebar"
              },
              {
                path: '/docs/usna/ew200',
                component: ComponentCreator('/docs/usna/ew200', '5fd'),
                exact: true,
                sidebar: "usnaSidebar"
              },
              {
                path: '/docs/usna/ew202',
                component: ComponentCreator('/docs/usna/ew202', 'ce9'),
                exact: true,
                sidebar: "usnaSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
