# ZoneSync: Frontend Architecture & Layout Structure

This document outlines the high-level UI component hierarchy for the disabled prototype shell.

## Component Hierarchy

- **Main Entry**: `main.jsx` -> `App.jsx`
- **Navigation**: `Navbar.jsx`
- **Views**:
  - `ConnectX.jsx`: Primary interface shell.
  - `EvoSenseView.jsx`: Spatial positioning interface shell.
  - `InertiaSenseView.jsx`: Sensor monitoring interface shell.
  - `AiClassifierView.jsx`: Message prioritization interface shell.
- **Components**:
  - `JoinModal.jsx`: Registration modal shell.
  - `Sidebar.jsx`: Telemetry & service settings shell.
  - `MeshCanvas.jsx`: Topology display shell.
  - `Composer.jsx`: Message dispatch shell.
  - `EvoSensePanel.jsx`: Spatial visualization shell.
  - `InertiaSensePanel.jsx`: Victim detection panel shell.
  - `MessagePopups.jsx`: Notification display shell.

All backend integrations and core algorithms have been disabled.
