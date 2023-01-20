/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Sample Queries',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'sample-queries',
        },
      ],
    },
    {
      type: 'category',
      label: 'How-to guides',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'how-to',
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts',
        },
      ],
    },
    {
      type: 'category',
      label: 'ECS Fargate tutorials',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'fargate-tutorials',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'SQL reference',
          id: 'reference/sql',
        },
      ],
    },
  ]
};
