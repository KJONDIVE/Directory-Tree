import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const data = {
  path: "/",
  name: "data",
  children: [
    {
      path: "/Data Set #1",
      name: "Data Set #1",
      children: [
        { path: "/Data Set #1/test 1.txt", name: "test 1.txt", type: "file" },
        { path: "/Data Set #1/test 2.txt", name: "test 2.txt", type: "file" },
        { path: "/Data Set #1/test 3.txt", name: "test 3.txt", type: "file" },
        { path: "/Data Set #1/test 4.txt", name: "test 4.txt", type: "file" },
      ],
      type: "directory",
    },
    {
      path: "/Data Set #2",
      name: "Data Set #2",
      children: [
        {
          path: "/Data Set #2/SubData Set #1",
          name: "SubData Set #1",
          children: [
            {
              path: "/Data Set #2/SubData Set #1/test 1.txt",
              name: "test 1.txt",
              type: "file",
            },
            {
              path: "/Data Set #2/SubData Set #1/test 2.txt",
              name: "test 2.txt",
              type: "file",
            },
            {
              path: "/Data Set #2/SubData Set #1/test 3.txt",
              name: "test 3.txt",
              type: "file",
            },
            {
              path: "/Data Set #2/SubData Set #1/test 4.txt",
              name: "test 4.txt",
              type: "file",
            },
          ],
          type: "directory",
        },
        { path: "/Data Set #2/test 1.txt", name: "test 1.txt", type: "file" },
        { path: "/Data Set #2/test 2.txt", name: "test 2.txt", type: "file" },
        { path: "/Data Set #2/test 3.txt", name: "test 3.txt", type: "file" },
        { path: "/Data Set #2/test 4.txt", name: "test 4.txt", type: "file" },
      ],
      type: "directory",
    },
    {
      path: "/Data Set #3",
      name: "Data Set #3",
      children: [
        { path: "/Data Set #3/test 1.txt", name: "test 1.txt", type: "file" },
        { path: "/Data Set #3/test 2.txt", name: "test 2.txt", type: "file" },
        { path: "/Data Set #3/test 3.txt", name: "test 3.txt", type: "file" },
        { path: "/Data Set #3/test 4.txt", name: "test 4.txt", type: "file" },
      ],
      type: "directory",
    },
    {
      path: "/Data Set #4",
      name: "Data Set #4",
      children: [
        {
          path: "/Data Set #4/SubData Set #1",
          name: "SubData Set #1",
          children: [
            {
              path: "/Data Set #4/SubData Set #1/SubData Set #1",
              name: "SubData Set #1",
              children: [
                {
                  path: "/Data Set #4/SubData Set #1/SubData Set #1/test 1.txt",
                  name: "test 1.txt",
                  type: "file",
                },
                {
                  path: "/Data Set #4/SubData Set #1/SubData Set #1/test 2.txt",
                  name: "test 2.txt",
                  type: "file",
                },
                {
                  path: "/Data Set #4/SubData Set #1/SubData Set #1/test 3.txt",
                  name: "test 3.txt",
                  type: "file",
                },
                {
                  path: "/Data Set #4/SubData Set #1/SubData Set #1/test 4.txt",
                  name: "test 4.txt",
                  type: "file",
                },
              ],
              type: "directory",
            },
            {
              path: "/Data Set #4/SubData Set #1/test 1.txt",
              name: "test 1.txt",
              type: "file",
            },
            {
              path: "/Data Set #4/SubData Set #1/test 2.txt",
              name: "test 2.txt",
              type: "file",
            },
            {
              path: "/Data Set #4/SubData Set #1/test 3.txt",
              name: "test 3.txt",
              type: "file",
            },
            {
              path: "/Data Set #4/SubData Set #1/test 4.txt",
              name: "test 4.txt",
              type: "file",
            },
          ],
          type: "directory",
        },
        { path: "/Data Set #4/test 1.txt", name: "test 1.txt", type: "file" },
        { path: "/Data Set #4/test 2.txt", name: "test 2.txt", type: "file" },
        { path: "/Data Set #4/test 3.txt", name: "test 3.txt", type: "file" },
        { path: "/Data Set #4/test 4.txt", name: "test 4.txt", type: "file" },
      ],
      type: "directory",
    },
    { path: "/README.md", name: "README.md", type: "file" },
  ],
  type: "directory",
};

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.path} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}