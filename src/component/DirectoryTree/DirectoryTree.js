import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const fakeTree = {
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
});

const DirectoryTree = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export default DirectoryTree;
