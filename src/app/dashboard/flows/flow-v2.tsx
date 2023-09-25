'use client'

import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  BackgroundVariant,
  ReactFlowProvider,
  useStoreApi,
  Connection,
  Edge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import './style.css';

import { initialEdges, initialNodes } from './nodes-and-edges';

const MIN_DISTANCE = 150;

const FlowV2 = () => {
  const store = useStoreApi();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const getClosestEdge = useCallback((node: { id: string; positionAbsolute: { x: number; y: number; }; }) => {
    const { nodeInternals } = store.getState();
    const storeNodes = Array.from(nodeInternals.values());

    const closestNode = storeNodes.reduce(
      (res, n) => {
        if (n.id !== node.id) {
          const dx = (n.positionAbsolute?.x || 0) - (node.positionAbsolute?.x || 0);
          const dy = (n.positionAbsolute?.y || 0) - (node.positionAbsolute?.y || 0);
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < res.distance && d < MIN_DISTANCE) {
            res.distance = d;
            // res.node = n;
          }
        }

        return res;
      },
      {
        distance: Number.MAX_VALUE,
        node,
      }
    );

    if (!closestNode.node) {
      return null;
    }

    const closeNodeIsSource = closestNode.node.positionAbsolute.x < node.positionAbsolute.x;

    return {
      id: `${node.id}-${closestNode.node.id}`,
      source: closeNodeIsSource ? closestNode.node.id : node.id,
      target: closeNodeIsSource ? node.id : closestNode.node.id,
    };
  }, []);

  const onNodeDrag = useCallback(
    (_: any, node: any) => {
      const closeEdge = getClosestEdge(node);

      setEdges((es) => {
        const nextEdges = es.filter((e) => e.className !== 'temp');

        if (
          closeEdge &&
          !nextEdges.find((ne) => ne.source === closeEdge.source && ne.target === closeEdge.target)
        ) {
          // closeEdge.className = 'temp';
          nextEdges.push(closeEdge);
        }

        return nextEdges;
      });
    },
    [getClosestEdge, setEdges]
  );

  const onNodeDragStop = useCallback(
    (_: any, node: any) => {
      const closeEdge = getClosestEdge(node);

      setEdges((es) => {
        const nextEdges = es.filter((e) => e.className !== 'temp');

        if (closeEdge) {
          nextEdges.push(closeEdge);
        }

        return nextEdges;
      });
    },
    [getClosestEdge]
  );

  return (
    // <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
        onConnect={onConnect}
        fitView
      >
        <Background variant={BackgroundVariant.Cross} gap={50} />
      </ReactFlow>
    // </ReactFlowProvider>
  );
};

// export default FlowV2;

const ReactFlowV2 = () => (
  <ReactFlowProvider>
    <FlowV2 />
  </ReactFlowProvider>
);

export default ReactFlowV2;
