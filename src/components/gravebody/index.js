import * as React from "react";
import DataGridComponent from "../grid-component";
import {
  GraveBodyContainer,
  ItemsContainer,
  MainHeaderContainer,
  PortalBackground,
  StatusContainer,
} from "./styles";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";
import { gridRows } from "../../constants/gridData";
import ButtonComponent from "../../common/buttonComponent";
import Portal from "../../common/portal";
import PortalAdd from "../portal-add";

const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    editable: false,
    sortable: true,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: RenderStatus,

    editable: false,
    sortable: false,
  },
  {
    feild: "actions",
    headerName: "",
    flex: 0.5,
    renderCell: RenderActionsCell,
    editable: false,
    sortable: false,
  },
];

function RenderStatus(props) {
  const { value } = props;

  return <StatusContainer status={value}>{value}</StatusContainer>;
}

function RenderActionsCell(props) {
  return (
    <ItemsContainer>
      <CiEdit size={20} />
      <AiOutlineDelete size={20} />
    </ItemsContainer>
  );
}

export default function GraveBody() {
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalType, setPortalType] = useState("");

  useEffect(() => {
    // getRowData();
    setData(() => [...gridRows]);
    setRowData(() => [...gridRows]);
  }, []);

  //   const getRowData= async ()=>{
  //     await
  //   }
  const handleAddClick = (props) => {
    setPortalOpen((curr) => !curr);
    setPortalType(() => (props.type ? props.type : null));
  };
  const handlePortal = ({ type }) => {
    setPortalOpen((curr) => !curr);
    setPortalType(() => (type ? type : null));
  };

  const handleSubmit = (rowDataSubmit) => {
    setRowData(() => [...rowDataSubmit]);
  };
  return (
    <GraveBodyContainer>
      <MainHeaderContainer>
        <div className="burial-header">Burial Type</div>
        <ButtonComponent
          type={"add"}
          label={"+ Burial Type"}
          handleOnClick={handleAddClick}
        />
      </MainHeaderContainer>
      <DataGridComponent rows={rowData} columns={columns} />
      {portalOpen && (
        <Portal isOpen={portalOpen}>
          <PortalBackground onClick={handlePortal} />
          {portalType === "add" && (
            <PortalAdd
              rows={rowData}
              handlePortalSubmit={handleSubmit}
              handlePortalClose={() => setPortalOpen((curr) => !curr)}
            />
          )}
        </Portal>
      )}
    </GraveBodyContainer>
  );
}
